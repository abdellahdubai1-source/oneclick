"use client";

import { about, socialLinks } from "@/lib/studio-config";
import { ArrowRight, ArrowUpRight, GlobeIcon } from "./icons";
import { WordReveal } from "./text-reveal";

export function About({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="st-section st-about" id="about" aria-labelledby="about-title">
      <div className="st-shell st-about-grid">
        <div className="st-about-aside" data-reveal>
          <span className="st-about-globe" aria-hidden="true">
            <GlobeIcon />
          </span>
          <p className="st-eyebrow">{about.eyebrow}</p>
          <h2 id="about-title" className="st-about-location">
            {about.location}
          </h2>
        </div>

        <div className="st-about-body">
          <WordReveal lead={about.statementLead} muted={about.statementMuted} className="st-about-statement" />
          <p className="st-about-text" data-reveal>
            {about.text}
          </p>
          <div className="st-about-footer" data-reveal>
            {socialLinks.length ? (
              <ul className="st-social" aria-label="Social profiles">
                {socialLinks.map(([label, url]) => (
                  <li key={label}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {label} <ArrowUpRight />
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <span />
            )}
            <button type="button" className="st-pill st-pill-outline" onClick={onOpenModal}>
              Discuss your project <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

