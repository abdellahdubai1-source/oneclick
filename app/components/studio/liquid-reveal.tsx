"use client";

import { useEffect, useRef } from "react";
import { COARSE_POINTER, FINE_POINTER, REDUCED_MOTION } from "./motion";

const BRUSH_RADIUS = 143; // CSS px
const DECAY_PER_FRAME = 0.016; // at 60Hz
const IDLE_AFTER = 160; // ms without pointer input before decay speeds up
const CLEAR_AFTER = 2000; // ms idle before residual marks are cleared and the loop stops
const MAX_QUEUE = 240;
const MAX_SAMPLES = 60;

/**
 * Liquid cursor reveal: a canvas over the static base image shows the reveal image
 * through a soft, fading pointer trail. Runs only on fine-pointer, motion-allowed
 * desktops; everywhere else the canvas stays empty and the base image is the hero.
 */
export function LiquidReveal({
  heroRef,
  heroRevealSrc,
}: {
  heroRef: React.RefObject<HTMLElement | null>;
  heroRevealSrc: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const canvas = canvasRef.current;
    if (!hero || !canvas) return;
    const fine = window.matchMedia(FINE_POINTER);
    const coarse = window.matchMedia(COARSE_POINTER);
    const reduced = window.matchMedia(REDUCED_MOTION);
    if (!fine.matches || coarse.matches || reduced.matches) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let disposed = false;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let radius = BRUSH_RADIUS * dpr;
    let cover: HTMLCanvasElement | null = null;
    let brush: HTMLCanvasElement | null = null;
    let brushCtx: CanvasRenderingContext2D | null = null;
    let image: HTMLImageElement | null = null;
    let ready = false;
    let visible = true;
    let frame = 0;
    let lastFrame = 0;
    let lastInput = 0;
    let hasMarks = false;
    let last: { x: number; y: number } | null = null;
    const queue: { x: number; y: number }[] = [];

    const buildBrush = () => {
      brush = document.createElement("canvas");
      brush.width = brush.height = Math.ceil(radius * 2);
      brushCtx = brush.getContext("2d");
    };

    const buildCover = () => {
      if (!image || !width || !height) return;
      cover = document.createElement("canvas");
      cover.width = Math.ceil(width * dpr);
      cover.height = Math.ceil(height * dpr);
      const cctx = cover.getContext("2d");
      if (!cctx) return;
      // Centred "cover" maths, matching object-fit: cover on the base image.
      const scale = Math.max(cover.width / image.naturalWidth, cover.height / image.naturalHeight);
      const dw = image.naturalWidth * scale;
      const dh = image.naturalHeight * scale;
      cctx.drawImage(image, (cover.width - dw) / 2, (cover.height - dh) / 2, dw, dh);
      ready = true;
    };

    const measure = () => {
      const rect = hero.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      radius = BRUSH_RADIUS * dpr;
      canvas.width = Math.ceil(width * dpr);
      canvas.height = Math.ceil(height * dpr);
      buildBrush();
      buildCover();
      hasMarks = false;
    };

    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const clear = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hasMarks = false;
      queue.length = 0;
    };

    const stamp = (x: number, y: number) => {
      if (!cover || !brush || !brushCtx) return;
      const size = brush.width;
      brushCtx.globalCompositeOperation = "source-over";
      brushCtx.clearRect(0, 0, size, size);
      const gradient = brushCtx.createRadialGradient(radius, radius, 0, radius, radius, radius);
      gradient.addColorStop(0, "rgba(0,0,0,1)");
      gradient.addColorStop(0.55, "rgba(0,0,0,0.82)");
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      brushCtx.fillStyle = gradient;
      brushCtx.fillRect(0, 0, size, size);

      // Clamp the source rectangle at the image edges.
      let sx = x * dpr - radius;
      let sy = y * dpr - radius;
      let sw = size;
      let sh = size;
      let dx = 0;
      let dy = 0;
      if (sx < 0) {
        dx = -sx;
        sw += sx;
        sx = 0;
      }
      if (sy < 0) {
        dy = -sy;
        sh += sy;
        sy = 0;
      }
      if (sx + sw > cover.width) sw = cover.width - sx;
      if (sy + sh > cover.height) sh = cover.height - sy;
      if (sw <= 0 || sh <= 0) return;

      brushCtx.globalCompositeOperation = "source-in";
      brushCtx.drawImage(cover, sx, sy, sw, sh, dx, dy, sw, sh);

      ctx.globalCompositeOperation = "source-over";
      ctx.drawImage(brush, x * dpr - radius, y * dpr - radius);
      hasMarks = true;
    };

    const loop = (now: number) => {
      frame = 0;
      if (disposed) return;
      const dt = lastFrame ? Math.min(100, now - lastFrame) : 16.67;
      lastFrame = now;
      const idleFor = now - lastInput;

      if (hasMarks) {
        const factor = idleFor > IDLE_AFTER ? 2.5 : 1;
        const alpha = Math.min(1, DECAY_PER_FRAME * factor * (dt / 16.67));
        ctx.globalCompositeOperation = "destination-out";
        ctx.fillStyle = `rgba(0,0,0,${alpha})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      if (ready && queue.length) {
        const batch = queue.splice(0, queue.length);
        for (const point of batch) stamp(point.x, point.y);
      }

      if (idleFor > CLEAR_AFTER) {
        clear();
        lastFrame = 0;
        return; // idle: stop scheduling work until the pointer moves again
      }
      if (visible && !document.hidden) frame = requestAnimationFrame(loop);
    };

    const schedule = () => {
      if (!frame && visible && !document.hidden) frame = requestAnimationFrame(loop);
    };

    const onMove = (event: PointerEvent) => {
      if (!ready) return;
      const rect = hero.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      lastInput = performance.now();

      if (!last) {
        queue.push({ x, y });
      } else {
        const dxp = x - last.x;
        const dyp = y - last.y;
        const dist = Math.hypot(dxp, dyp);
        const step = Math.max((radius / dpr) * 0.3, 1);
        const samples = Math.min(MAX_SAMPLES, Math.max(1, Math.ceil(dist / step)));
        for (let i = 1; i <= samples; i++) {
          const t = i / samples;
          queue.push({ x: last.x + dxp * t, y: last.y + dyp * t });
        }
      }
      if (queue.length > MAX_QUEUE) queue.splice(0, queue.length - MAX_QUEUE);
      last = { x, y };
      schedule();
    };

    const onLeave = () => {
      last = null;
    };

    const onVisibility = () => {
      if (document.hidden) stop();
      else if (hasMarks || queue.length) schedule();
    };

    // Load the reveal image (crossOrigin set before src only when it is cross-origin).
    image = new Image();
    try {
      const url = new URL(heroRevealSrc, window.location.href);
      if (url.origin !== window.location.origin) image.crossOrigin = "anonymous";
    } catch {
      /* relative URL: same origin */
    }
    image.decoding = "async";
    image.onload = () => {
      if (disposed) return;
      measure();
    };
    image.onerror = () => {
      // Keep the base image and the rest of the page working.
      ready = false;
    };
    image.src = heroRevealSrc;

    const resize = new ResizeObserver(() => {
      if (!image?.complete || !image.naturalWidth) return;
      measure();
    });
    resize.observe(hero);

    const io = new IntersectionObserver((entries) => {
      visible = entries.some((entry) => entry.isIntersecting);
      if (!visible) stop();
      else if (hasMarks || queue.length) schedule();
    });
    io.observe(hero);

    hero.addEventListener("pointermove", onMove, { passive: true });
    hero.addEventListener("pointerleave", onLeave, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    const onPrefChange = () => {
      if (reduced.matches || !fine.matches) {
        stop();
        clear();
      }
    };
    reduced.addEventListener("change", onPrefChange);
    fine.addEventListener("change", onPrefChange);

    return () => {
      disposed = true;
      stop();
      resize.disconnect();
      io.disconnect();
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      reduced.removeEventListener("change", onPrefChange);
      fine.removeEventListener("change", onPrefChange);
      if (image) image.onload = image.onerror = null;
    };
  }, [heroRef, heroRevealSrc]);

  return <canvas ref={canvasRef} className="st-hero-canvas" aria-hidden="true" />;
}
