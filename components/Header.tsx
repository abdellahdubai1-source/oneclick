"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site-config";

const noopSubscribe = () => () => {};

/**
 * True only once the component has mounted on the client. Implemented with
 * useSyncExternalStore (server snapshot = false, client snapshot = true)
 * instead of a `useEffect(() => setState(true))` so React never has to
 * synchronously re-render right after mount just to flip a flag.
 */
function useIsMounted() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  // Mobile menu is portaled to <body> so it always covers the full
  // viewport, regardless of any backdrop-filter/transform stacking
  // context created by the sticky header it lives next to.
  const isMounted = useIsMounted();

  // Compact sticky header once the page has scrolled a little.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll while the mobile menu is open, close on Escape,
  // and move focus into the menu for keyboard/screen-reader users.
  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstMenuLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const mobileMenu = (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className={`fixed inset-0 z-[100] bg-oc-canvas transition-opacity duration-200 md:hidden ${
        isMenuOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex items-center justify-between px-5 py-5">
        <Logo height={30} />
        <button
          type="button"
          onClick={closeMenu}
          aria-label="Close menu"
          tabIndex={isMenuOpen ? 0 : -1}
          className="inline-flex items-center justify-center rounded-oc-sm p-2 text-oc-ink"
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 pt-6">
        {siteConfig.navigation.map((item, index) => (
          <a
            key={item.href}
            ref={index === 0 ? firstMenuLinkRef : undefined}
            href={item.href}
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
            className="border-b border-oc-line py-4 text-xl font-medium text-oc-ink"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="mt-8 flex flex-col gap-4 px-5">
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          tabIndex={isMenuOpen ? 0 : -1}
          className="inline-flex items-center justify-center gap-2 rounded-oc-sm bg-oc-ink px-6 py-4 text-base font-semibold text-white"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          Start a Project
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          onClick={closeMenu}
          tabIndex={isMenuOpen ? 0 : -1}
          className="text-center text-[15px] font-medium text-oc-muted"
        >
          {siteConfig.email}
        </a>
      </div>
    </div>
  );

  return (
    <header
      id="top"
      className={`sticky top-0 z-50 w-full border-b bg-oc-canvas/90 backdrop-blur-md transition-[padding,box-shadow] duration-300 ${
        isScrolled
          ? "border-oc-line shadow-[0_1px_0_0_rgba(16,24,40,0.04)]"
          : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-8xl items-center justify-between px-5 transition-[padding] duration-300 sm:px-8 lg:px-12">
        <div
          className={`transition-[padding] duration-300 ${
            isScrolled ? "py-3" : "py-5"
          }`}
        >
          <Logo height={isScrolled ? 28 : 34} priority />
        </div>

        {/* Desktop navigation */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-10 md:flex"
        >
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-oc-ink/80 transition-colors hover:text-oc-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-oc-sm bg-oc-ink px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-oc-blue focus-visible:outline-offset-2"
          >
            Start a Project
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setIsMenuOpen(true)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Open menu"
          className="inline-flex items-center justify-center rounded-oc-sm p-2 text-oc-ink md:hidden"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {isMounted ? createPortal(mobileMenu, document.body) : null}
    </header>
  );
}
