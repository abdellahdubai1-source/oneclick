"use client";

import { useEffect, useState, type CSSProperties } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleCheck,
  LayoutTemplate,
  Megaphone,
  MessageCircle,
  Minus,
  Palette,
  Plus,
  Smartphone,
} from "lucide-react";
import {
  campaign,
  campaignState,
  contactForPricing,
  packageMessage,
  packages,
  remainingTime,
  whatsapp,
} from "@/lib/agency-config";
import SiteHeader, { Logo } from "./components/site-header";
import HeroScene from "./components/hero-scene";
import TiltCard from "./components/tilt-card";

const outbound = { target: "_blank", rel: "noopener noreferrer" } as const;

const services = [
  {
    icon: LayoutTemplate,
    name: "Websites",
    text: "Clear, fast and built around your business.",
  },
  {
    icon: Palette,
    name: "Branding",
    text: "A consistent look customers remember.",
  },
  {
    icon: Megaphone,
    name: "Marketing",
    text: "Campaigns designed around your next goal.",
  },
  {
    icon: Smartphone,
    name: "Content",
    text: "Creative content made for today’s platforms.",
  },
];

const faqs = [
  [
    "What do I need to get started?",
    "Your business name, logo, services and any content or images you have. We confirm the scope and timeline before work starts.",
  ],
  [
    "Are domain and hosting included?",
    "Domain, hosting, paid tools and third-party subscriptions are quoted separately unless they are included in your written proposal.",
  ],
  [
    "Can I update the website myself?",
    "Business System includes an admin dashboard for one agreed content type, such as products or services. Starter and Business do not include an admin dashboard.",
  ],
  [
    "How long will my website take?",
    "We confirm the delivery date after reviewing the scope and receiving the required content.",
  ],
];

const countdownLabels = ["Days", "Hours", "Mins", "Secs"];

export default function AgencyHome({ initialNow }: { initialNow: number }) {
  const [now, setNow] = useState(initialNow);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    const timer = window.setInterval(tick, 1000);
    document.addEventListener("visibilitychange", tick);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", tick);
    };
  }, []);

  const state = campaignState(now);
  const active = state === "active";
  const time = remainingTime(now);
  const starter = packages[0];
  const starterLink = whatsapp(packageMessage("starter", active));

  return (
    <div className="oc-site" id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main">
        <div className="oc-dark">
          {/* 2. Hero */}
          <section className="oc-hero" aria-labelledby="hero-title">
            <div className="oc-hero-bg" aria-hidden="true" />
            <div className="oc-shell oc-hero-inner">
              <div className="oc-hero-copy">
                {active ? (
                  <a className="oc-live-pill" href="#offer">
                    <span aria-hidden="true" />
                    Starter offer is live
                    <ArrowRight size={14} aria-hidden="true" />
                  </a>
                ) : (
                  <p className="oc-eyebrow">Websites for UAE businesses</p>
                )}
                <h1 id="hero-title">
                  A strong business deserves a <em>strong website.</em>
                </h1>
                <p className="oc-hero-text">
                  Professional, mobile-ready websites designed to earn trust and
                  turn visits into conversations.
                </p>
                <div className="oc-hero-actions">
                  <a className="oc-btn oc-btn-primary" href="#packages">
                    View packages <ArrowRight size={18} aria-hidden="true" />
                  </a>
                  <a className="oc-btn oc-btn-ghost" href={whatsapp()} {...outbound}>
                    <MessageCircle size={18} aria-hidden="true" /> Chat on WhatsApp
                  </a>
                </div>
                <ul className="oc-proof">
                  <li>
                    <CircleCheck size={15} aria-hidden="true" /> Clear scope
                  </li>
                  <li>
                    <CircleCheck size={15} aria-hidden="true" /> Mobile-first
                  </li>
                  <li>
                    <CircleCheck size={15} aria-hidden="true" /> Direct support
                  </li>
                </ul>
              </div>
              <HeroScene />
            </div>
          </section>

          {/* 3. Starter offer */}
          <section className="oc-offer-section" id="offer" aria-labelledby="offer-title">
            <div className="oc-shell">
              <div className="oc-offer oc-reveal">
                <div className="oc-offer-info">
                  <div className="oc-offer-tags">
                    <span className="oc-tag">Starter website</span>
                    {active ? <span className="oc-tag oc-tag-blue">{starter.discount}</span> : null}
                  </div>
                  <h2 id="offer-title">
                    {active
                      ? "A professional website, at a starter price."
                      : "A professional website, made simple."}
                  </h2>

                  {active ? (
                    <div className="oc-price" aria-label="Starter price AED 600 one-time during the offer, regular price AED 2,400">
                      <span className="oc-price-now">
                        <small>AED</small>
                        <strong>{starter.price}</strong>
                      </span>
                      <span className="oc-price-side">
                        <s>
                          <span className="oc-sr">Regular price </span>AED {starter.regularPrice}
                        </s>
                        <small>{starter.priceNote}</small>
                      </span>
                    </div>
                  ) : (
                    <p className="oc-price-contact">{contactForPricing}</p>
                  )}

                  <ul className="oc-offer-list">
                    {starter.features.map((feature) => (
                      <li key={feature}>
                        <Check size={15} aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a className="oc-btn oc-btn-primary" href={starterLink} {...outbound}>
                    {active ? "Claim the Starter offer" : "Ask about Starter"}
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </div>

                <div className="oc-timer">
                  <p className="oc-timer-label">
                    {state === "active"
                      ? "Offer ends in"
                      : state === "upcoming"
                        ? "Offer starts in"
                        : "Offer ended"}
                  </p>
                  <div
                    className="oc-countdown"
                    role="timer"
                    aria-live="off"
                    data-ended={state === "expired"}
                    aria-label={
                      state === "expired"
                        ? "Offer ended"
                        : state === "active"
                          ? "Time until the offer ends"
                          : "Time until the offer starts"
                    }
                  >
                    {time.map((value, index) => (
                      <div key={countdownLabels[index]}>
                        <b>{String(value).padStart(2, "0")}</b>
                        <span>{countdownLabels[index]}</span>
                      </div>
                    ))}
                  </div>
                  <p className="oc-timer-note">
                    {state === "expired"
                      ? contactForPricing
                      : state === "upcoming"
                        ? "Starts 16 September 2026, 00:00 UAE time"
                        : `Ends ${campaign.deadline}`}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* 4. Packages */}
        <section className="oc-packages" id="packages" aria-labelledby="packages-title">
          <div className="oc-shell">
            <div className="oc-section-head oc-reveal">
              <p className="oc-kicker">Packages</p>
              <h2 id="packages-title">Choose what fits your business.</h2>
              <p>One-time project pricing. Scope agreed before we start.</p>
            </div>

            <div className="oc-package-grid">
              {packages.map((pkg, index) => {
                const isStarter = pkg.id === "starter";
                const isSystem = pkg.id === "system";
                const showPromo = isStarter && active;
                return (
                  <div
                    className="oc-reveal"
                    style={{ "--i": index } as CSSProperties}
                    key={pkg.id}
                  >
                    <TiltCard className="oc-tilt-fill">
                      <article className={`oc-card ${isStarter ? "oc-card-featured" : ""}`}>
                        <header>
                          <div className="oc-card-title">
                            <h3>{pkg.name}</h3>
                            {showPromo ? <span className="oc-tag oc-tag-blue">{starter.discount}</span> : null}
                          </div>
                          <p>{pkg.tagline}</p>
                        </header>

                        <div className="oc-card-price">
                          {isStarter && !active ? (
                            <p className="oc-card-contact">{contactForPricing}</p>
                          ) : (
                            <>
                              {"pricePrefix" in pkg ? <span className="oc-from">{pkg.pricePrefix}</span> : null}
                              <span className="oc-card-amount">
                                <small>AED</small>
                                <strong>{pkg.price}</strong>
                              </span>
                              <span className="oc-card-note">
                                {showPromo ? (
                                  <>
                                    <s>
                                      <span className="oc-sr">Regular price </span>AED {starter.regularPrice}
                                    </s>{" "}
                                    · {pkg.priceNote}
                                  </>
                                ) : (
                                  pkg.priceNote
                                )}
                              </span>
                            </>
                          )}
                        </div>

                        <ul className="oc-card-list">
                          {pkg.features.map((feature) => (
                            <li key={feature}>
                              <Check size={15} aria-hidden="true" />
                              {feature}
                            </li>
                          ))}
                          <li className="oc-excluded">
                            <Minus size={15} aria-hidden="true" />
                            {pkg.excludes}
                          </li>
                        </ul>

                        {isSystem ? (
                          <p className="oc-card-fine">
                            Booking, online payment, customer accounts and advanced workflows are quoted separately.
                          </p>
                        ) : null}

                        <a
                          className={`oc-btn ${isStarter ? "oc-btn-primary" : "oc-btn-dark"}`}
                          href={whatsapp(packageMessage(pkg.id, active))}
                          {...outbound}
                        >
                          <MessageCircle size={17} aria-hidden="true" />
                          {isStarter && !active ? "Ask about Starter" : pkg.cta}
                        </a>
                      </article>
                    </TiltCard>
                  </div>
                );
              })}
            </div>

            <p className="oc-package-note oc-reveal">
              Domain, hosting, paid tools and third-party subscriptions are quoted separately.
            </p>
          </div>
        </section>

        {/* 5. Services */}
        <section className="oc-services" id="services" aria-labelledby="services-title">
          <div className="oc-shell">
            <div className="oc-section-head oc-reveal">
              <p className="oc-kicker">Services</p>
              <h2 id="services-title">Everything your brand needs to show up well.</h2>
            </div>
            <div className="oc-service-grid">
              {services.map(({ icon: Icon, name, text }, index) => (
                <article className="oc-service oc-reveal" style={{ "--i": index } as CSSProperties} key={name}>
                  <span className="oc-service-icon">
                    <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{name}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6. FAQ */}
        <section className="oc-faq" id="faq" aria-labelledby="faq-title">
          <div className="oc-shell oc-faq-inner">
            <div className="oc-faq-intro oc-reveal">
              <p className="oc-kicker">FAQ</p>
              <h2 id="faq-title">Know what you’re getting.</h2>
              <a
                className="oc-text-link"
                href={whatsapp("Hi Oneclick! I have a question about your website packages.")}
                {...outbound}
              >
                Ask us on WhatsApp <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="oc-faq-list oc-reveal">
              {faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>
                    <span>{question}</span>
                    <Plus size={18} aria-hidden="true" />
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Closing CTA */}
        <section className="oc-final" aria-labelledby="final-title">
          <div className="oc-shell">
            <div className="oc-final-card oc-reveal">
              <div>
                <p className="oc-kicker">Ready when you are</p>
                <h2 id="final-title">Let’s build something your business can be proud of.</h2>
                <p>Tell us about your business on WhatsApp and we’ll suggest the right package.</p>
              </div>
              <a className="oc-btn oc-btn-primary oc-btn-lg" href={whatsapp()} {...outbound}>
                <MessageCircle size={19} aria-hidden="true" /> Start on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="oc-footer">
        <div className="oc-shell oc-footer-inner">
          <a className="oc-footer-logo" href="#top" aria-label="Oneclick Digital Solution home">
            <Logo />
          </a>
          <p>© 2026 Oneclick Digital Solution</p>
          <a href="tel:+971567654647">+971 56 765 4647</a>
        </div>
      </footer>
    </div>
  );
}
