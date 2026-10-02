"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { prefersReducedMotion } from "./motion";

/**
 * Line reveal: each visual line is clipped and its inner span slides up.
 * `active` starts the animation (after the intro loader, for the hero).
 */
export function LineReveal({
  lines,
  active,
  as: Tag = "span",
  className = "",
  stagger = 110,
}: {
  lines: readonly string[];
  active: boolean;
  as?: "span" | "h1" | "h2" | "p";
  className?: string;
  stagger?: number;
}) {
  return (
    <Tag className={`st-lines ${className}`} data-active={active}>
      {lines.map((line, index) => (
        <span className="st-line" key={line}>
          <span className="st-line-inner" style={{ "--d": `${index * stagger}ms` } as CSSProperties}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}

/**
 * Word reveal for the About statement. The visual words are hidden from assistive
 * technology and a single coherent sentence is provided for screen readers.
 * Total animation time is capped so long sentences stay readable.
 */
export function WordReveal({
  lead,
  muted,
  className = "",
}: {
  lead: string;
  muted: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const activate = () => {
      el.dataset.active = "true";
    };
    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      activate();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          activate();
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const leadWords = lead.split(" ");
  const mutedWords = muted.split(" ");
  const total = leadWords.length + mutedWords.length;
  const stagger = Math.min(35, 1400 / total);

  const render = (words: string[], offset: number, extra: string) =>
    words.map((word, index) => (
      <span key={`${offset}-${index}`}>
        <span className={`st-word ${extra}`} style={{ "--d": `${(offset + index) * stagger}ms` } as CSSProperties}>
          <span className="st-word-inner">{word}</span>
        </span>{" "}
      </span>
    ));

  return (
    <p ref={ref} className={`st-words ${className}`} data-active="false">
      <span className="st-sr">
        {lead} {muted}
      </span>
      <span aria-hidden="true">
        {render(leadWords, 0, "")}
        {render(mutedWords, leadWords.length, "st-word-muted")}
      </span>
    </p>
  );
}
