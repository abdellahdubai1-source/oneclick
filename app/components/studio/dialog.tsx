"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { acquireOverlay } from "./overlay-manager";
import { prefersReducedMotion } from "./motion";

/**
 * Accessible modal built on the native <dialog> element: focus trapping, background
 * inertness and Escape handling come from the platform. Opening registers with the
 * shared overlay manager so scroll locking survives switching between dialogs.
 */
export function Dialog({
  id,
  open,
  onClose,
  labelledBy,
  describedBy,
  className = "",
  closeDuration = 360,
  initialFocus,
  children,
}: {
  id: string;
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  describedBy?: string;
  className?: string;
  closeDuration?: number;
  /** Selector inside the dialog to focus on open; defaults to the first focusable element. */
  initialFocus?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const release = useRef<(() => void) | null>(null);
  const restoreTo = useRef<HTMLElement | null>(null);
  const closeTimer = useRef(0);
  const instance = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (open) {
      window.clearTimeout(closeTimer.current);
      dialog.removeAttribute("data-closing");
      if (!dialog.open) {
        restoreTo.current = document.activeElement as HTMLElement | null;
        release.current = acquireOverlay(`${id}-${instance}`);
        try {
          dialog.showModal();
        } catch {
          dialog.setAttribute("open", "");
        }
      }
      const focusTarget =
        (initialFocus ? dialog.querySelector<HTMLElement>(initialFocus) : null) ??
        dialog.querySelector<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
      requestAnimationFrame(() => focusTarget?.focus({ preventScroll: true }));
      return;
    }

    if (!dialog.open) return;
    const finish = () => {
      if (dialog.open) dialog.close();
      dialog.removeAttribute("data-closing");
      release.current?.();
      release.current = null;
      const target = restoreTo.current;
      restoreTo.current = null;
      if (target && document.contains(target)) target.focus({ preventScroll: true });
    };
    if (prefersReducedMotion() || closeDuration === 0) {
      finish();
    } else {
      dialog.setAttribute("data-closing", "");
      closeTimer.current = window.setTimeout(finish, closeDuration);
    }
  }, [open, id, instance, closeDuration, initialFocus]);

  // Release the lock if the dialog unmounts while open.
  useEffect(
    () => () => {
      window.clearTimeout(closeTimer.current);
      release.current?.();
    },
    [],
  );

  return (
    <dialog
      ref={ref}
      id={id}
      className={`st-dialog ${className}`}
      aria-labelledby={labelledBy}
      aria-describedby={describedBy}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        // Only a click on the backdrop (the dialog element itself) closes it.
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {children}
    </dialog>
  );
}
