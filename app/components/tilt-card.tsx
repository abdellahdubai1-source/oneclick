"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Desktop-only 3D tilt. On touch devices and with reduced motion it renders a plain
 * wrapper, so mobile pays no script cost beyond a single media-query check.
 */
export default function TiltCard({
  children,
  className = "",
  max = 5,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    if (!fine.matches) return;

    let frame = 0;
    const move = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--rx", `${((0.5 - y) * max * 2).toFixed(2)}deg`);
        el.style.setProperty("--ry", `${((x - 0.5) * max * 2).toFixed(2)}deg`);
        el.style.setProperty("--gx", `${(x * 100).toFixed(1)}%`);
        el.style.setProperty("--gy", `${(y * 100).toFixed(1)}%`);
      });
    };
    const reset = () => {
      cancelAnimationFrame(frame);
      el.style.removeProperty("--rx");
      el.style.removeProperty("--ry");
    };

    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", reset);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", reset);
    };
  }, [max]);

  return (
    <div ref={ref} className={`oc-tilt ${className}`}>
      {children}
    </div>
  );
}
