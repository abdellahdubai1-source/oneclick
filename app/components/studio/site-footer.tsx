"use client";

import { useState } from "react";
import {
  brand,
  contact,
  emailConfigured,
  emailHref,
  footer,
  navItems,
  services,
  socialLinks,
  whatsappBaseUrl,
  whatsappConfigured,
  type ServiceValue,
} from "@/lib/studio-config";
import { BrandMark } from "./brand-mark";
import { Dialog } from "./dialog";
import { ArrowRight, CloseIcon } from "./icons";

export function SiteFooter({
  onNavigate,
  onOpenModal,
}: {
  onNavigate: (hash: string, event: React.MouseEvent<HTMLAnchorElement>) => void;
  onOpenModal: (service?: ServiceValue) => void;
}) {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const year = new Date().getFullYear();
  const hasConnect = whatsappConfigured || emailConfigured || socialLinks.length > 0;

  return (
    <footer className="st-footer" id="contact" aria-labelledby="footer-title">
      <div className="st-footer-watermark" aria-hidden="true">
        {brand.watermark}
      </div>
      <div className="st-shell st-footer-inner">
        <div className="st-footer-cta" data-reveal>
          <h2 id="footer-title" className="st-footer-heading">
            {footer.ctaHeading}
          </h2>
          <button type="button" className="st-pill st-pill-light" onClick={() => onOpenModal()}>
            {footer.ctaLabel} <ArrowRight />
          </button>
        </div>

        <div className="st-footer-columns" data-reveal>
          <div className="st-footer-brand">
            <BrandMark variant="dark" />
            <p>{footer.blurb}</p>
            <p className="st-footer-location">{brand.locationLabel}</p>
          </div>

          <nav className="st-footer-col" aria-labelledby="footer-explore">
            <h3 id="footer-explore">Explore</h3>
            <ul>
              {navItems
                .filter((item) => item.href !== "#home")
                .map((item) =>
                  "opensModal" in item && item.opensModal ? (
                    <li key={item.href}>
                      <button type="button" onClick={() => onOpenModal()}>
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

          <nav className="st-footer-col" aria-labelledby="footer-services">
            <h3 id="footer-services">Services</h3>
            <ul>
              {services.map((service) => (
                <li key={service.value}>
                  <button type="button" onClick={() => onOpenModal(service.value)}>
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {hasConnect ? (
            <div className="st-footer-col">
              <h3>Connect</h3>
              <ul>
                {whatsappConfigured ? (
                  <li>
                    <a href={whatsappBaseUrl} target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </li>
                ) : null}
                <li>
                  <a href={contact.telHref}>{contact.phoneDisplay}</a>
                </li>
                {emailConfigured ? (
                  <li>
                    <a href={emailHref}>{contact.contactEmail}</a>
                  </li>
                ) : null}
                {socialLinks.map(([label, url]) => (
                  <li key={label}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <div className="st-footer-bottom">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <button type="button" className="st-text-btn" onClick={() => setPrivacyOpen(true)} aria-haspopup="dialog">
            Privacy
          </button>
        </div>
      </div>

      <Dialog
        id="st-privacy"
        open={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        labelledBy="st-privacy-title"
        className="st-dialog-panel-wrap"
      >
        <div className="st-panel st-panel-detail">
          <div className="st-panel-head">
            <p className="st-eyebrow">Privacy</p>
            <button type="button" className="st-icon-btn" onClick={() => setPrivacyOpen(false)} aria-label="Close privacy notice">
              <CloseIcon />
            </button>
          </div>
          <h3 id="st-privacy-title" className="st-panel-title">
            How enquiries work on this site
          </h3>
          <div className="st-panel-text st-panel-prose">
            <p>
              This website does not store the details you type into the project form and does not use analytics or
              advertising cookies. It keeps one short-lived flag in your browser&apos;s tab session so the intro
              animation is shown only once.
            </p>
            <p>
              When you continue in WhatsApp, your message is handed to WhatsApp and nothing is sent until you press
              send there. WhatsApp&apos;s handling of your data is covered by the{" "}
              <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                WhatsApp Privacy Policy
              </a>
              .
            </p>
            <p>
              When you open an email draft, the message is prepared in your own email app and is sent only when you
              choose to send it. Delivery is then handled by your email provider.
            </p>
          </div>
        </div>
      </Dialog>
    </footer>
  );
}
