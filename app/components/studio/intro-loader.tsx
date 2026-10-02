"use client";

import { useEffect, useRef, useState } from "react";
import { brand } from "@/lib/studio-config";
import { BrandMark } from "./brand-mark";
import { acquireOverlay } from "./overlay-manager";
import { prefersReducedMotion } from "./motion";

export const INTRO_FLAG = "oneclick-intro-shown";
const INTRO_ATTR = "intro";
const DURATION = 1100; // decorative counter, not a measure of network progress
const EXIT = 650;
const FAILSAFE = 4000;

/**
 * Runs before React hydrates (inline, synchronous) so the loader is only ever shown
 * when it should be: first visit in this tab session, motion allowed, JavaScript on.
 * The attribute it sets is what the CSS uses to display the panel; a timer here
 * removes it again if the app never initialises, so nobody is trapped behind it.
 */
export const introBootScript = `(function(){try{var h=document.documentElement;var r=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(r)return;var s=false;try{s=!!sessionStorage.getItem('${INTRO_FLAG}')}catch(e){}h.setAttribute('data-${INTRO_ATTR}',s?'skip':'pending');setTimeout(function(){var v=h.getAttribute('data-${INTRO_ATTR}');if(v==='pending'||v==='skip'){h.removeAttribute('data-${INTRO_ATTR}')}},${FAILSAFE});}catch(e){}})();`;

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function IntroLoader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const panel = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const html = document.documentElement;
    const finish = () => {
      if (done.current) return;
      done.current = true;
      // The page root clears the html attribute in the same commit that starts the hero reveal.
      try {
        sessionStorage.setItem(INTRO_FLAG, "1");
      } catch {
        /* storage unavailable: the intro simply shows again next time */
      }
      onDone();
    };

    if (html.getAttribute(`data-${INTRO_ATTR}`) !== "pending" || prefersReducedMotion()) {
      // Skipped (repeat visit in this tab session, reduced motion, or boot script did not run).
      finish();
      return;
    }

    const release = acquireOverlay("intro");
    html.setAttribute(`data-${INTRO_ATTR}`, "running");
    if (panel.current) panel.current.dataset.phase = "running";
    let frame = 0;
    let exitTimer = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      setCount(Math.round(easeInOutCubic(t) * 100));
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        html.setAttribute(`data-${INTRO_ATTR}`, "exit");
        if (panel.current) panel.current.dataset.phase = "exit";
        exitTimer = window.setTimeout(() => {
          release();
          finish();
        }, EXIT);
      }
    };
    frame = requestAnimationFrame(tick);

    // Fail-safe: never wait on fonts, images or animation errors.
    const failsafe = window.setTimeout(() => {
      release();
      finish();
    }, FAILSAFE);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(exitTimer);
      window.clearTimeout(failsafe);
      release();
    };
  }, [onDone]);

  return (
    <div className="st-intro" ref={panel} data-phase="idle" aria-hidden="true">
      <div className="st-intro-inner">
        <BrandMark variant="dark" size="lg" priority />
        <p className="st-intro-tagline">{brand.tagline}</p>
        <div className="st-intro-progress">
          <span className="st-intro-track" aria-hidden="true">
            <span className="st-intro-bar" style={{ transform: `scaleX(${count / 100})` }} />
          </span>
          <span className="st-intro-count" aria-hidden="true">
            {String(count).padStart(3, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
