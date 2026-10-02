import type { CSSProperties } from "react";
import { processSteps } from "@/lib/studio-config";

/** Honest four-step process in the oversized black panel (sequence labels, not statistics). */
export function Process() {
  return (
    <section className="st-section st-process" id="process" aria-labelledby="process-title">
      <div className="st-shell">
        <div className="st-process-panel" data-reveal>
          <div className="st-process-head">
            <p className="st-eyebrow st-eyebrow-light">How we work</p>
            <h2 id="process-title" className="st-h2">
              Clear steps. Thoughtful delivery.
            </h2>
          </div>
          <ol className="st-steps">
            {processSteps.map((step, index) => (
              <li className="st-step" key={step.number} data-reveal style={{ "--delay": `${index * 110}ms` } as CSSProperties}>
                <span className="st-step-num" aria-hidden="true">
                  <span className="st-step-num-inner">{step.number}</span>
                </span>
                <h3 className="st-step-name">
                  <span className="st-sr">Step {step.number}: </span>
                  {step.name}
                </h3>
                <p className="st-step-text">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
