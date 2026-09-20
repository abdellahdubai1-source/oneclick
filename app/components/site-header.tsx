"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, MessageCircle, X } from "lucide-react";
import { whatsapp } from "@/lib/agency-config";

const links = [
  ["#packages", "Packages"],
  ["#services", "Services"],
  ["#faq", "FAQ"],
] as const;

export function Logo({ priority = false }: { priority?: boolean }) {
  return (
    <span className="oc-logo-crop">
      <Image
        src="/agency/assets/oneclick-logo.png"
        alt="Oneclick Digital Solution"
        width={2048}
        height={546}
        sizes="160px"
        priority={priority}
      />
    </span>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="oc-header">
      <div className="oc-header-bar">
        <a className="oc-logo" href="#top" aria-label="Oneclick Digital Solution home">
          <Logo priority />
        </a>

        <nav className="oc-nav" aria-label="Main navigation">
          {links.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <a className="oc-header-cta" href={whatsapp()} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={16} aria-hidden="true" />
          <span>WhatsApp</span>
        </a>

        <button
          type="button"
          className="oc-menu-btn"
          aria-expanded={open}
          aria-controls="oc-mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      <nav
        id="oc-mobile-nav"
        className="oc-mobile-nav"
        aria-label="Mobile navigation"
        data-open={open}
        hidden={!open}
      >
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
