"use client";

import { useEffect, useRef } from "react";
import { LayoutDashboard, MessageCircle, Smartphone } from "lucide-react";

function Cursor() {
  return (
    <svg className="oc-cursor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 3.2 19 11l-6 1.6-2.4 5.8Z"
        fill="#fff"
        stroke="#061b37"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Layered website showcase: public site, mobile view and admin dashboard in real CSS 3D.
 * Pointer parallax is enabled only for fine pointers without reduced motion; everywhere
 * else the scene is a static, lightweight composition.
 */
export default function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const hero = el?.closest<HTMLElement>(".oc-hero");
    if (!el || !hero) return;
    const fine = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    if (!fine.matches) return;

    let frame = 0;
    const move = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--px", x.toFixed(3));
        el.style.setProperty("--py", y.toFixed(3));
      });
    };
    const reset = () => {
      cancelAnimationFrame(frame);
      el.style.setProperty("--px", "0");
      el.style.setProperty("--py", "0");
    };

    hero.addEventListener("pointermove", move);
    hero.addEventListener("pointerleave", reset);
    return () => {
      cancelAnimationFrame(frame);
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="oc-scene"
      role="img"
      aria-label="Layered preview of a business website: desktop site, mobile view and admin dashboard"
    >
      <div className="oc-stage" aria-hidden="true">
        <div className="oc-floor" />

        {/* Back layer: admin dashboard */}
        <div className="oc-layer oc-dash">
          <div className="oc-dash-side">
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="oc-dash-main">
            <b>Inquiries</b>
            {[0, 1, 2, 3].map((row) => (
              <div className="oc-dash-row" key={row}>
                <span className="oc-avatar" />
                <span className="oc-lines">
                  <i />
                  <i />
                </span>
                <em>{row === 0 ? "New" : "Seen"}</em>
              </div>
            ))}
          </div>
        </div>

        {/* Middle layer: public website in a browser frame */}
        <div className="oc-layer oc-browser">
          <div className="oc-browser-bar">
            <span />
            <span />
            <span />
            <div>yourbusiness.ae</div>
          </div>
          <div className="oc-mock">
            <div className="oc-site-nav">
              <span className="oc-site-brand" />
              <span className="oc-site-links">
                <i />
                <i />
                <i />
              </span>
              <span className="oc-site-pill" />
            </div>
            <div className="oc-site-hero">
              <div className="oc-site-copy">
                <strong>
                  Your business,
                  <br />
                  <em>online.</em>
                </strong>
                <i />
                <i />
                <span className="oc-site-cta">
                  Get a quote
                  <Cursor />
                  <u />
                </span>
              </div>
              <div className="oc-site-art">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="oc-site-cards">
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="oc-sheen" />
        </div>

        {/* Front layer: mobile view */}
        <div className="oc-layer oc-phone">
          <div className="oc-phone-notch" />
          <div className="oc-phone-body">
            <div className="oc-phone-top">
              <span />
              <i />
            </div>
            <div className="oc-phone-art" />
            <i />
            <i />
            <span className="oc-phone-cta" />
            <div className="oc-phone-cards">
              <i />
              <i />
            </div>
          </div>
        </div>

        <div className="oc-chip oc-chip-a">
          <MessageCircle size={14} aria-hidden="true" />
          WhatsApp inquiries
        </div>
        <div className="oc-chip oc-chip-b">
          <Smartphone size={14} aria-hidden="true" />
          Mobile-friendly
        </div>
        <div className="oc-chip oc-chip-c">
          <LayoutDashboard size={14} aria-hidden="true" />
          Admin dashboard
        </div>
      </div>
    </div>
  );
}
