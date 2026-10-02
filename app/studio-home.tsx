"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
// Loaded here (not the root layout) so /playbook never ships this page's CSS.
import "./studio.css";
import type { ServiceValue } from "@/lib/studio-config";
import { IntroLoader, introBootScript } from "./components/studio/intro-loader";
import { SiteHeader } from "./components/studio/site-header";
import { Hero } from "./components/studio/hero";
import { About } from "./components/studio/about";
import { BuildBand } from "./components/studio/build-band";
import { SelectedWork } from "./components/studio/selected-work";
import { Services } from "./components/studio/services";
import { Process } from "./components/studio/process";
import { SiteFooter } from "./components/studio/site-footer";
import { NavOverlay } from "./components/studio/nav-overlay";
import { ProjectModal } from "./components/studio/project-modal";
import { useScrollReveal } from "./components/studio/motion";
import { initSmoothScroll, scrollToHash } from "./components/studio/smooth-scroll";

export default function StudioHome() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [introDone, setIntroDone] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalService, setModalService] = useState<ServiceValue | null>(null);

  const onIntroDone = useCallback(() => setIntroDone(true), []);
  useScrollReveal(rootRef, true);

  useEffect(() => {
    initSmoothScroll();
  }, []);

  // Reveal the hero in the same paint as the intro attribute is cleared (no flash).
  useLayoutEffect(() => {
    if (introDone) document.documentElement.removeAttribute("data-intro");
  }, [introDone]);

  const openModal = useCallback((service?: ServiceValue) => {
    setModalService(service ?? null);
    // Opening first means the shared lock is never released between dialogs.
    setModalOpen(true);
    setMenuOpen(false);
  }, []);

  const navigate = useCallback((hash: string, event?: React.MouseEvent<HTMLAnchorElement>) => {
    if (event) {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
    }
    scrollToHash(hash);
  }, []);

  const navigateFromMenu = useCallback(
    (hash: string) => {
      setMenuOpen(false);
      // Let the overlay start closing before the page moves.
      window.setTimeout(() => navigate(hash), 60);
    },
    [navigate],
  );

  return (
    <div className="st-site" ref={rootRef}>
      <script dangerouslySetInnerHTML={{ __html: introBootScript }} />
      <IntroLoader onDone={onIntroDone} />

      <a className="st-skip" href="#main">
        Skip to content
      </a>

      <SiteHeader onNavigate={navigate} onOpenModal={() => openModal()} onOpenMenu={() => setMenuOpen(true)} />

      <main id="main">
        <Hero introDone={introDone} onOpenModal={() => openModal()} onNavigate={navigate} />
        <About onOpenModal={() => openModal()} />
        <BuildBand />
        <SelectedWork onOpenModal={() => openModal()} />
        <Services onOpenModal={openModal} />
        <Process />
      </main>

      <SiteFooter onNavigate={navigate} onOpenModal={openModal} />

      <NavOverlay
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={navigateFromMenu}
        onOpenModal={() => openModal()}
      />
      <ProjectModal open={modalOpen} onClose={() => setModalOpen(false)} service={modalService} />
    </div>
  );
}
