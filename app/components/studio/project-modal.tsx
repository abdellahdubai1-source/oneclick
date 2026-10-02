"use client";

import { useRef, useState } from "react";
import {
  emailConfigured,
  emailRequestUrl,
  serviceOptions,
  whatsappConfigured,
  whatsappRequestUrl,
  type ProjectRequest,
  type ServiceValue,
} from "@/lib/studio-config";
import { Dialog } from "./dialog";
import { ArrowUpRight, CloseIcon } from "./icons";

type Channel = "whatsapp" | "email";

/**
 * Project-request modal with a real handoff: the visitor's details are assembled into
 * a message and handed to WhatsApp or their email app from the submit gesture.
 * Nothing is sent by this site and nothing is persisted, so the status copy never
 * claims delivery.
 */
export function ProjectModal({
  open,
  onClose,
  service,
}: {
  open: boolean;
  onClose: () => void;
  service: ServiceValue | null;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<{ tone: "ok" | "error"; text: string } | null>(null);
  const [override, setOverride] = useState<ServiceValue | null>(null);
  const [wasOpen, setWasOpen] = useState(open);
  const anyChannel = whatsappConfigured || emailConfigured;

  // Reset the form state each time the modal opens (derived state, no effect needed).
  if (open !== wasOpen) {
    setWasOpen(open);
    if (open) {
      setOverride(null);
      setStatus(null);
    }
  }
  const selected: ServiceValue = override ?? service ?? "website";

  const read = (form: HTMLFormElement): ProjectRequest => {
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    const serviceLabel = serviceOptions.find((option) => option.value === value("service"))?.label ?? value("service");
    return {
      name: value("name"),
      email: value("email"),
      service: serviceLabel,
      details: value("details"),
      budget: value("budget"),
    };
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const channel = (submitter?.value as Channel | undefined) ?? (whatsappConfigured ? "whatsapp" : "email");

    // noValidate on the form keeps the submit event flowing so the aria-live status can be
    // updated; reportValidity() still shows the browser's own readable field messages.
    form.dataset.attempted = "true";
    if (!form.checkValidity()) {
      setStatus({ tone: "error", text: "Please complete the highlighted fields before continuing." });
      form.reportValidity();
      return;
    }

    const request = read(form);
    if (channel === "whatsapp" && whatsappConfigured) {
      // A real anchor click keeps the user gesture and opens WhatsApp without an opener.
      const link = document.createElement("a");
      link.href = whatsappRequestUrl(request);
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      link.remove();
      setStatus({ tone: "ok", text: "Your message is ready. Send it in WhatsApp." });
      return;
    }
    if (channel === "email" && emailConfigured) {
      window.location.assign(emailRequestUrl(request));
      setStatus({ tone: "ok", text: "Your email draft is ready. Send it from your email app." });
      return;
    }
    setStatus({ tone: "error", text: "Online enquiries are not available yet." });
  };

  return (
    <Dialog
      id="st-project-modal"
      open={open}
      onClose={onClose}
      labelledBy="st-modal-title"
      describedBy="st-modal-intro"
      className="st-dialog-panel-wrap"
      initialFocus="#st-field-name"
    >
      <div className="st-panel st-panel-form">
        <div className="st-panel-head">
          <p className="st-eyebrow">Project request</p>
          <button type="button" className="st-icon-btn" onClick={onClose} aria-label="Close project request">
            <CloseIcon />
          </button>
        </div>
        <h2 id="st-modal-title" className="st-panel-title">
          Tell us what you&apos;re building.
        </h2>
        <p id="st-modal-intro" className="st-panel-text">
          Share a few details and continue the conversation in WhatsApp or by email.
        </p>

        <form ref={formRef} className="st-form" onSubmit={onSubmit} noValidate>
          <div className="st-form-grid">
            <div className="st-field">
              <label htmlFor="st-field-name">Name</label>
              <input id="st-field-name" name="name" type="text" autoComplete="name" required minLength={2} />
            </div>
            <div className="st-field">
              <label htmlFor="st-field-email">Email</label>
              <input id="st-field-email" name="email" type="email" autoComplete="email" required />
            </div>
          </div>
          <div className="st-field">
            <label htmlFor="st-field-service">Service</label>
            <select
              id="st-field-service"
              name="service"
              value={selected}
              onChange={(event) => setOverride(event.target.value as ServiceValue)}
            >
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="st-field">
            <label htmlFor="st-field-details">Project details</label>
            <textarea
              id="st-field-details"
              name="details"
              rows={4}
              required
              minLength={10}
              placeholder="Tell us about your business, project, and preferred timeline."
            />
          </div>
          <div className="st-field">
            <label htmlFor="st-field-budget">
              Budget <span className="st-optional">(optional)</span>
            </label>
            <input
              id="st-field-budget"
              name="budget"
              type="text"
              inputMode="text"
              autoComplete="off"
              placeholder="Your approximate budget in AED, if known."
            />
          </div>

          <p className="st-form-status" role="status" aria-live="polite" data-tone={status?.tone ?? ""}>
            {status?.text ?? ""}
          </p>

          <div className="st-form-actions">
            {whatsappConfigured ? (
              <button type="submit" name="channel" value="whatsapp" className="st-pill st-pill-dark">
                Continue in WhatsApp <ArrowUpRight />
              </button>
            ) : null}
            {emailConfigured ? (
              <button
                type="submit"
                name="channel"
                value="email"
                className={`st-pill ${whatsappConfigured ? "st-pill-outline" : "st-pill-dark"}`}
              >
                Open email draft <ArrowUpRight />
              </button>
            ) : null}
            {!anyChannel ? (
              <>
                <button type="submit" className="st-pill st-pill-dark" disabled>
                  Continue
                </button>
                <p className="st-form-note">Online enquiries are not available yet.</p>
              </>
            ) : null}
          </div>
          {anyChannel ? (
            <p className="st-form-note">
              Nothing is sent by this website. You review and send the message yourself
              {whatsappConfigured && emailConfigured ? " in WhatsApp or your email app." : whatsappConfigured ? " in WhatsApp." : " from your email app."}
            </p>
          ) : null}
        </form>
      </div>
    </Dialog>
  );
}
