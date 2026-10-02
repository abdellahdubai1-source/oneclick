import type { CSSProperties } from "react";
import { ArrowRight } from "./icons";

/** "We Build → Better": four oversized tiles with a staggered entrance. */
export function BuildBand() {
  const tiles = [
    { key: "we", label: "We", tone: "grey" },
    { key: "build", label: "Build", tone: "accent" },
    { key: "arrow", label: null, tone: "ink" },
    { key: "better", label: "Better", tone: "soft" },
  ] as const;

  return (
    <section className="st-band" aria-label="We build better">
      <div className="st-shell">
        <p className="st-sr">We build better.</p>
        <div className="st-band-grid" aria-hidden="true">
          {tiles.map((tile, index) => (
            <div
              key={tile.key}
              className={`st-tile st-tile-${tile.tone}`}
              data-reveal
              style={{ "--delay": `${index * 100}ms` } as CSSProperties}
            >
              {tile.label ?? <ArrowRight className="st-tile-arrow" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
