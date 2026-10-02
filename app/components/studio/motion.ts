"use client";

import { useEffect, useState } from "react";

export const FINE_POINTER = "(hover: hover) and (pointer: fine)";
export const COARSE_POINTER = "(pointer: coarse)";
export const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia(REDUCED_MOTION).matches;
}

/** Live media-query state (false during SSR). */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const update = () => setMatches(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [query]);
  return matches;
}

/**
 * Scroll reveals. Content is visible by default; the hidden state is applied only
 * after JavaScript initialises, and only to elements that are still below the fold.
 * Elements already on screen are shown immediately so nothing flashes.
 */
export function useScrollReveal(rootRef: React.RefObject<HTMLElement | null>, ready = true) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || !ready) return;
    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!items.length) return;

    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const viewport = window.innerHeight;
    const pending: HTMLElement[] = [];
    for (const el of items) {
      const top = el.getBoundingClientRect().top;
      if (top < viewport * 0.92) {
        el.classList.add("is-in");
      } else {
        el.classList.add("st-reveal");
        pending.push(el);
      }
    }
    if (!pending.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    pending.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [rootRef, ready]);
}
