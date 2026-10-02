"use client";

import { useRef } from "react";
import { brand, hero } from "@/lib/studio-config";
import { ArrowDown, ArrowRight, ArrowUpRight } from "./icons";
import { HeroCarousel } from "./hero-carousel";
import { LineReveal } from "./text-reveal";
import { LiquidReveal } from "./liquid-reveal";

export function Hero({
  introDone,
  onOpenModal,
  onNavigate,
}: {
  introDone: boolean;
  onOpenModal: () => void;
  onNavigate: (hash: string, event: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section className="st-hero" id="home" ref={heroRef} aria-labelledby="hero-title" data-active={introDone}>
      <div className="st-hero-media" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element -- static hero artwork drawn beneath the reveal canvas; eager + high priority by design */}
        <img
          className="st-hero-img"
          src={hero.heroBaseSrc}
          alt=""
          width={1920}
          height={1200}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <LiquidReveal heroRef={heroRef} heroRevealSrc={hero.heroRevealSrc} />
        <div className="st-hero-wash" />
      </div>
      <span className="st-sr">{hero.alt}</span>

      <div className="st-hero-watermark" aria-hidden="true">
        {brand.watermark}
      </div>

      <div className="st-shell st-hero-grid">
        <div className="st-hero-copy">
          <p className="st-eyebrow st-hero-eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title" className="st-hero-title">
            <LineReveal lines={hero.headline} active={introDone} />
          </h1>
          <p className="st-hero-text st-hero-fade" style={{ "--d": "380ms" } as React.CSSProperties}>
            {hero.text}
          </p>
          <div className="st-hero-actions st-hero-fade" style={{ "--d": "480ms" } as React.CSSProperties}>
            <button type="button" className="st-pill st-pill-dark" onClick={onOpenModal}>
              Let&apos;s talk <ArrowRight />
            </button>
            <a className="st-pill st-pill-outline" href="#works" onClick={(event) => onNavigate("#works", event)}>
              Explore our work <ArrowUpRight />
            </a>
          </div>
          <p className="st-hero-focus st-hero-fade" style={{ "--d": "560ms" } as React.CSSProperties}>
            {hero.focusLine}
          </p>
        </div>

        <div className="st-hero-side st-hero-fade" style={{ "--d": "520ms" } as React.CSSProperties}>
          <HeroCarousel />
          <div className="st-principles">
            <p className="st-principles-label">{hero.principlesLabel}</p>
            <ul className="st-principles-list">
              {hero.principles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="st-shell st-hero-status st-hero-fade" style={{ "--d": "700ms" } as React.CSSProperties}>
        <span>{hero.status[0]}</span>
        <span>{hero.status[1]}</span>
        <a href="#about" className="st-hero-scroll" onClick={(event) => onNavigate("#about", event)}>
          {hero.status[2]} <ArrowDown />
        </a>
      </div>
    </section>
  );
}
