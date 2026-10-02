/**
 * Shared overlay manager. Scroll locking is derived from the set of currently
 * active overlays (loader, navigation, modal, detail dialogs), so switching
 * from one dialog straight into another never releases and re-applies the lock.
 * The page's own inline styles are preserved and restored when the last
 * overlay closes, with scrollbar-width compensation to avoid layout shift.
 */

type Listener = (locked: boolean) => void;

const active = new Set<string>();
const listeners = new Set<Listener>();
let saved: { overflow: string; paddingRight: string } | null = null;

function apply() {
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  const body = document.body;
  const shouldLock = active.size > 0;
  const isLocked = saved !== null;
  if (shouldLock === isLocked) return;

  if (shouldLock) {
    saved = { overflow: html.style.overflow, paddingRight: body.style.paddingRight };
    const scrollbar = window.innerWidth - html.clientWidth;
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;
    html.style.overflow = "hidden";
    html.dataset.scrollLocked = "true";
  } else if (saved) {
    html.style.overflow = saved.overflow;
    body.style.paddingRight = saved.paddingRight;
    delete html.dataset.scrollLocked;
    saved = null;
  }
  listeners.forEach((fn) => fn(shouldLock));
}

/** Registers an overlay as open. Returns a release function (idempotent). */
export function acquireOverlay(id: string) {
  active.add(id);
  apply();
  let released = false;
  return () => {
    if (released) return;
    released = true;
    active.delete(id);
    apply();
  };
}

export function isAnyOverlayOpen() {
  return active.size > 0;
}

export function onOverlayChange(fn: Listener) {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}
