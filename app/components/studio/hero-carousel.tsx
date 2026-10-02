"use client";

import { useState } from "react";
import { hero } from "@/lib/studio-config";
import { ChevronLeft, ChevronRight, SparkIcon } from "./icons";

/** Manual feature carousel: no autoplay, every control labelled, active slide announced. */
export function HeroCarousel() {
  const slides = hero.slides;
  const [index, setIndex] = useState(0);
  const go = (next: number) => setIndex((next + slides.length) % slides.length);

  return (
    <div className="st-carousel" role="group" aria-roledescription="carousel" aria-label="What we do">
      <div className="st-carousel-head">
        <span className="st-carousel-mark" aria-hidden="true">
          <SparkIcon />
        </span>
        <span className="st-carousel-counter" aria-hidden="true">
          {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      <div className="st-carousel-track" aria-live="polite">
        {slides.map((slide, i) => (
          <div
            className="st-slide"
            key={slide.caption}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}: ${slide.caption}`}
            data-active={i === index}
            aria-hidden={i !== index}
          >
            <p className="st-slide-caption">{slide.caption}</p>
            <p className="st-slide-title">{slide.title}</p>
            <p className="st-slide-text">{slide.text}</p>
          </div>
        ))}
      </div>

      <div className="st-carousel-controls">
        <div className="st-carousel-dots" role="tablist" aria-label="Choose a slide">
          {slides.map((slide, i) => (
            <button
              type="button"
              key={slide.caption}
              role="tab"
              aria-selected={i === index}
              aria-label={`Show slide ${i + 1}: ${slide.caption}`}
              className="st-dot"
              data-active={i === index}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <div className="st-carousel-arrows">
          <button type="button" className="st-arrow-btn" aria-label="Previous slide" onClick={() => go(index - 1)}>
            <ChevronLeft />
          </button>
          <button type="button" className="st-arrow-btn" aria-label="Next slide" onClick={() => go(index + 1)}>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
