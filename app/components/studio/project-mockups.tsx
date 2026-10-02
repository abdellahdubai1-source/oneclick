/**
 * Lightweight HTML/CSS mockups that communicate each project's purpose.
 * They are illustrative compositions, not screenshots of the delivered work.
 */
export function ProjectMockup({ kind }: { kind: "corporate" | "cv" | "delivery" | "next" }) {
  switch (kind) {
    case "corporate":
      return (
        <div className="st-mock st-mock-browser" aria-hidden="true">
          <div className="st-mock-bar">
            <i />
            <i />
            <i />
            <span className="st-mock-url" />
          </div>
          <div className="st-mock-body">
            <div className="st-mock-nav">
              <b />
              <span className="st-mock-lang">
                <em>EN</em>
                <em>ع</em>
              </span>
            </div>
            <div className="st-mock-hero">
              <span className="st-mock-h" />
              <span className="st-mock-h st-mock-h-short" />
              <span className="st-mock-btn" />
            </div>
            <div className="st-mock-products">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      );
    case "cv":
      return (
        <div className="st-mock st-mock-app" aria-hidden="true">
          <div className="st-mock-doc">
            <span className="st-mock-avatar" />
            <span className="st-mock-h st-mock-h-short" />
            <span className="st-mock-l" />
            <span className="st-mock-l st-mock-l-short" />
            <span className="st-mock-rule" />
            <span className="st-mock-l" />
            <span className="st-mock-l" />
            <span className="st-mock-l st-mock-l-short" />
          </div>
          <div className="st-mock-panel">
            <span className="st-mock-chip st-mock-chip-on" />
            <span className="st-mock-chip" />
            <span className="st-mock-chip" />
            <span className="st-mock-btn st-mock-btn-wide" />
          </div>
        </div>
      );
    case "delivery":
      return (
        <div className="st-mock st-mock-phone" aria-hidden="true">
          <div className="st-mock-screen">
            <div className="st-mock-map">
              <svg viewBox="0 0 160 120" aria-hidden="true">
                <path d="M8 96C40 92 48 60 72 58s36 14 80-30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 7" />
                <circle cx="8" cy="96" r="6" fill="currentColor" />
                <circle cx="152" cy="28" r="7" fill="var(--accent)" />
              </svg>
            </div>
            <div className="st-mock-steps">
              <i data-on />
              <i data-on />
              <i />
              <i />
            </div>
            <span className="st-mock-btn st-mock-btn-wide" />
          </div>
        </div>
      );
    default:
      return (
        <div className="st-mock st-mock-next" aria-hidden="true">
          <div className="st-mock-canvas">
            <span className="st-mock-shape st-mock-shape-a" />
            <span className="st-mock-shape st-mock-shape-b" />
            <span className="st-mock-shape st-mock-shape-c" />
            <span className="st-mock-cursor">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 3.2 19 11l-6 1.6-2.4 5.8Z" fill="#fff" stroke="#111" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      );
  }
}
