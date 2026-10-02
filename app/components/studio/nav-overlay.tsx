"use client";

import type { CSSProperties } from "react";
import { navItems } from "@/lib/studio-config";
import { BrandMark } from "./brand-mark";
import { Dialog } from "./dialog";
import { DubaiClock } from "./dubai-clock";
import { ArrowRight, CloseIcon } from "./icons";

export function NavOverlay({
  open,
  onClose,
  onNavigate,
  onOpenModal,
}: {
  open: boolean;
  onClose: () => void;
  onNavigate: (hash: string) => void;
  onOpenModal: () => void;
}) {
  return (
    <Dialog
      id="st-nav-overlay"
      open={open}
      onClose={onClose}
      labelledBy="st-nav-title"
      className="st-nav"
      closeDuration={420}
      initialFocus=".st-nav-close"
    >
      <div className="st-nav-inner">
        <div className="st-shell st-nav-top">
          <span className="st-nav-brand">
            <BrandMark variant="dark" />
          </span>
          <button type="button" className="st-nav-close" onClick={onClose} aria-label="Close menu">
            <span>Close</span>
            <CloseIcon />
          </button>
        </div>

        <nav className="st-shell st-nav-body" aria-labelledby="st-nav-title">
          <h2 id="st-nav-title" className="st-sr">
            Site navigation
          </h2>
          <ol className="st-nav-list">
            {navItems.map((item, index) => (
              <li key={item.href} className="st-nav-item" style={{ "--d": `${80 + index * 60}ms` } as CSSProperties}>
                <span className="st-nav-num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {"opensModal" in item && item.opensModal ? (
                  <button type="button" className="st-nav-link" onClick={onOpenModal}>
                    <span className="st-nav-label">{item.label}</span>
                  </button>
                ) : (
                  <a
                    className="st-nav-link"
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault();
                      onNavigate(item.href);
                    }}
                  >
                    <span className="st-nav-label">{item.label}</span>
                  </a>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="st-shell st-nav-bottom">
          <DubaiClock className="st-nav-clock" />
          <button type="button" className="st-pill st-pill-light" onClick={onOpenModal}>
            Start a project <ArrowRight />
          </button>
        </div>
      </div>
    </Dialog>
  );
}
