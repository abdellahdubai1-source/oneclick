"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/lib/studio-config";
import { BrandMark } from "./brand-mark";
import { DubaiClock } from "./dubai-clock";
import { MenuIcon } from "./icons";

export function SiteHeader({
  onNavigate,
  onOpenModal,
  onOpenMenu,
}: {
  onNavigate: (hash: string, event: React.MouseEvent<HTMLAnchorElement>) => void;
  onOpenModal: () => void;
  onOpenMenu: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className="st-header" data-scrolled={scrolled}>
      <div className="st-shell st-header-inner">
        <a className="st-header-brand" href="#home" onClick={(event) => onNavigate("#home", event)}>
          <BrandMark variant="light" priority />
        </a>

        <nav className="st-header-nav" aria-label="Main navigation">
          <ul>
            {navItems.map((item) =>
              "opensModal" in item && item.opensModal ? (
                <li key={item.href}>
                  <button type="button" onClick={onOpenModal}>
                    {item.label}
                  </button>
                </li>
              ) : (
                <li key={item.href}>
                  <a href={item.href} onClick={(event) => onNavigate(item.href, event)}>
                    {item.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="st-header-right">
          <DubaiClock className="st-header-clock" />
          <button
            type="button"
            className="st-menu-btn"
            onClick={onOpenMenu}
            aria-haspopup="dialog"
            aria-controls="st-nav-overlay"
          >
            <span>Menu</span>
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
