"use client";

import { onOverlayChange } from "./overlay-manager";
import { FINE_POINTER, prefersReducedMotion } from "./motion";

/**
 * Optional smooth scrolling. Lenis is loaded at runtime from the pinned reference
 * module in a guarded dynamic import; when it is unavailable (offline, blocked CDN,
 * reduced motion, touch devices) the page simply uses native scrolling. Nothing
 * else depends on it, and there is only ever one requestAnimationFrame loop.
 */
const LENIS_URL = "https://unpkg.com/lenis@1.3.23/dist/lenis.mjs";

type LenisLike = {
  raf: (time: number) => void;
  scrollTo: (
    target: string | number | HTMLElement,
    options?: { offset?: number; duration?: number; immediate?: boolean },
  ) => void;
  stop: () => void;
  start: () => void;
  destroy: () => void;
};

let instance: LenisLike | null = null;
let frame = 0;
let loading: Promise<void> | null = null;

// Bypass the bundler so the URL import stays a true runtime import.
const runtimeImport = new Function("url", "return import(url)") as (
  url: string,
) => Promise<{ default: new (options: Record<string, unknown>) => LenisLike }>;

export function initSmoothScroll() {
  if (typeof window === "undefined" || instance || loading) return;
  if (prefersReducedMotion() || !window.matchMedia(FINE_POINTER).matches) return;

  loading = (async () => {
    try {
      const mod = await runtimeImport(LENIS_URL);
      if (prefersReducedMotion()) return;
      const lenis = new mod.default({ duration: 1.1, smoothWheel: true, lerp: 0.1 });
      instance = lenis;
      document.documentElement.classList.add("st-lenis");
      const loop = (time: number) => {
        lenis.raf(time);
        frame = requestAnimationFrame(loop);
      };
      frame = requestAnimationFrame(loop);
    } catch {
      // Native scrolling remains in place.
    }
  })();

  onOverlayChange((locked) => {
    if (!instance) return;
    if (locked) instance.stop();
    else instance.start();
  });

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  reduce.addEventListener("change", () => {
    if (reduce.matches) destroySmoothScroll();
  });
}

export function destroySmoothScroll() {
  if (!instance) return;
  cancelAnimationFrame(frame);
  instance.destroy();
  instance = null;
  document.documentElement.classList.remove("st-lenis");
}

/** Scrolls to an in-page target with Lenis when available; native scrolling otherwise. */
export function scrollToHash(hash: string) {
  const target = document.querySelector<HTMLElement>(hash);
  if (!target) return false;
  if (instance) {
    instance.scrollTo(target, { offset: 0 });
  } else {
    target.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
  }
  if (history.replaceState) history.replaceState(null, "", hash);
  return true;
}
