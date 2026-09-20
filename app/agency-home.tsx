"use client";

import { memo, useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleCheck,
  Globe2,
  LayoutTemplate,
  Megaphone,
  MessageCircle,
  Palette,
  Plus,
  Smartphone,
} from "lucide-react";
import {
  campaign,
  campaignState,
  packages,
  remainingTime,
  whatsapp,
} from "@/lib/agency-config";

const outbound = { target: "_blank", rel: "noopener noreferrer" } as const;

function Logo() {
  return (
    <a
      className="oc-logo"
      href="#top"
      aria-label="Oneclick Digital Solution home"
    >
      <Image
        src="/agency/assets/oneclick-logo.png"
        alt="Oneclick Digital Solution"
        width={2048}
        height={546}
        sizes="(max-width: 600px) 136px, 172px"
        priority
      />
    </a>
  );
}

const Header = memo(function Header() {
  return (
    <header className="oc-header">
      <div className="oc-shell oc-header-inner">
        <Logo />
        <nav aria-label="Main navigation">
          <a href="#packages">Packages</a>
          <a href="#services" className="oc-nav-secondary">
            Services
          </a>
          <a href="#faq" className="oc-nav-secondary">
            FAQ
          </a>
        </nav>
        <a className="oc-header-cta" href={whatsapp()} {...outbound}>
          <MessageCircle size={17} aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
      </div>
    </header>
  );
});

const ServicesAndFaq = memo(function ServicesAndFaq() {
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
      "Business System includes admin access for one agreed content type, such as products or services. Starter and Business do not include an admin dashboard.",
    ],
    [
      "How long will my website take?",
      "We confirm the delivery date after reviewing the scope and receiving the required content.",
    ],
  ];

  return (
    <>
      <section
        className="oc-services"
        id="services"
        aria-labelledby="services-title"
      >
        <div className="oc-shell">
          <div className="oc-section-intro">
            <p className="oc-kicker">BEYOND THE BUILD</p>
            <h2 id="services-title">
              Everything your brand needs to show up well.
            </h2>
          </div>
          <div className="oc-service-grid">
            {services.map(({ icon: Icon, name, text }, index) => (
              <article key={name}>
                <div className="oc-service-number">0{index + 1}</div>
                <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                <h3>{name}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="oc-faq oc-shell" id="faq" aria-labelledby="faq-title">
        <div className="oc-faq-intro">
          <p className="oc-kicker">STRAIGHT ANSWERS</p>
          <h2 id="faq-title">Know what you’re getting.</h2>
          <a
            href={whatsapp(
              "Hi Oneclick! I have a question about your website packages.",
            )}
            {...outbound}
          >
            Ask us on WhatsApp <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="oc-faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question}>
              <summary>
                <span>
                  <small>0{index + 1}</small>
                  {question}
                </span>
                <Plus size={20} aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="oc-final oc-shell" aria-labelledby="final-title">
        <div>
          <p className="oc-kicker">READY WHEN YOU ARE</p>
          <h2 id="final-title">
            Let’s build something your business can be proud of.
          </h2>
        </div>
        <a
          className="oc-primary oc-primary-light"
          href={whatsapp()}
          {...outbound}
        >
          Start on WhatsApp <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </section>

      <footer className="oc-footer oc-shell">
        <Logo />
        <p>© 2026 Oneclick Digital Solution</p>
        <a href="tel:+971567654647">+971 56 765 4647</a>
      </footer>
    </>
  );
});

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
  const starterMessage = active
    ? "Hi Oneclick! I'm interested in the Starter website package at AED 600 (75% off). Can we discuss my business?"
    : "Hi Oneclick! I'm interested in the Starter website package. Please share your current pricing.";

  return (
    <div className="oc-site" id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />

      <main id="main">
        <section className="oc-hero">
          <div className="oc-hero-grid" aria-hidden="true" />
          <div className="oc-hero-glow" aria-hidden="true" />
          <div className="oc-shell oc-hero-inner">
            <div className="oc-hero-copy">
              <p className="oc-hero-kicker">
                <span /> WEBSITES FOR UAE BUSINESSES
              </p>
              <h1>
                A strong business deserves a <em>strong website.</em>
              </h1>
              <p className="oc-hero-text">
                Professional, mobile-ready websites designed to earn trust and
                turn visits into conversations.
              </p>
              <div className="oc-hero-actions">
                <a className="oc-primary" href="#packages">
                  View packages <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a className="oc-hero-link" href={whatsapp()} {...outbound}>
                  Talk to us <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
              <div className="oc-proof-row">
                <span>
                  <CircleCheck size={16} aria-hidden="true" /> Clear scope
                </span>
                <span>
                  <CircleCheck size={16} aria-hidden="true" /> Mobile-first
                </span>
                <span>
                  <CircleCheck size={16} aria-hidden="true" /> Direct support
                </span>
              </div>
            </div>

            <aside className="oc-offer" aria-label="Starter website offer">
              <div className="oc-offer-head">
                <div>
                  <span className="oc-offer-label">STARTER WEBSITE</span>
                  <p>Everything you need to look professional online.</p>
                </div>
                <span className="oc-offer-badge">
                  {active ? "75% OFF" : "STARTER"}
                </span>
              </div>

              <div className="oc-offer-price">
                {active ? (
                  <>
                    <span>AED</span>
                    <strong>600</strong>
                    <div>
                      <s>AED 2,400</s>
                      <small>one-time</small>
                    </div>
                  </>
                ) : (
                  <strong className="oc-current-price">Current pricing</strong>
                )}
              </div>

              <div className="oc-offer-includes">
                <span>
                  <Check size={15} aria-hidden="true" /> Up to 5 pages
                </span>
                <span>
                  <Check size={15} aria-hidden="true" /> Mobile-ready
                </span>
                <span>
                  <Check size={15} aria-hidden="true" /> WhatsApp + basic SEO
                </span>
              </div>

              <a
                className="oc-offer-cta"
                data-starter-link
                href={whatsapp(starterMessage)}
                {...outbound}
              >
                {active ? "Claim this offer" : "Ask for current pricing"}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>

              <div className="oc-timer-wrap">
                <div className="oc-timer-title">
                  <span>
                    {active
                      ? "Offer ends in"
                      : state === "upcoming"
                        ? "Offer starts in"
                        : "Offer ended"}
                  </span>
                  <small>
                    {state === "upcoming" ? "16 SEP · UAE" : "30 SEP · UAE"}
                  </small>
                </div>
                <div
                  className="oc-countdown"
                  role="timer"
                  aria-live="off"
                  aria-label={
                    state === "expired"
                      ? "Offer ended"
                      : active
                        ? "Time until offer ends"
                        : "Time until offer starts"
                  }
                >
                  {time.map((value, index) => (
                    <div key={index}>
                      <b>{String(value).padStart(2, "0")}</b>
                      <span>{["Days", "Hours", "Mins", "Secs"][index]}</span>
                    </div>
                  ))}
                </div>
                <p>
                  {state === "expired"
                    ? "Contact us for current website pricing."
                    : state === "upcoming"
                      ? "Starts 16 September 2026, 00:00 UAE"
                      : `Ends ${campaign.deadline}`}
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="oc-trust-strip">
          <div className="oc-shell">
            <div>
              <Globe2 size={20} aria-hidden="true" />
              <span>
                <strong>Built for the UAE</strong>
                <small>Local business focus</small>
              </span>
            </div>
            <div>
              <Smartphone size={20} aria-hidden="true" />
              <span>
                <strong>Made for every screen</strong>
                <small>Fast and responsive</small>
              </span>
            </div>
            <div>
              <MessageCircle size={20} aria-hidden="true" />
              <span>
                <strong>Easy to reach you</strong>
                <small>WhatsApp-ready</small>
              </span>
            </div>
          </div>
        </section>

        <section
          className="oc-packages"
          id="packages"
          aria-labelledby="packages-title"
        >
          <div className="oc-shell">
            <div className="oc-packages-head">
              <div>
                <p className="oc-kicker">CLEAR PACKAGES</p>
                <h2 id="packages-title">Choose what fits your business.</h2>
              </div>
              <p>
                One-time project pricing.
                <br />
                Scope agreed before we start.
              </p>
            </div>

            <div className="oc-package-grid">
              {packages.map((pkg, index) => (
                <article
                  className={`oc-package-card ${index === 0 ? "oc-package-featured" : ""}`}
                  key={pkg.name}
                >
                  <div className="oc-package-top">
                    <span>0{index + 1}</span>
                    {index === 0 && active ? <small>75% OFF</small> : null}
                  </div>
                  <h3>{pkg.name}</h3>
                  <p className="oc-package-description">{pkg.description}</p>
                  <div className="oc-package-price">
                    {index === 0 && !active ? (
                      <strong className="oc-contact-price">
                        Ask for pricing
                      </strong>
                    ) : (
                      <>
                        <span>{index === 2 ? "From" : "AED"}</span>
                        <strong>{pkg.price}</strong>
                        {index === 2 ? <small>AED</small> : null}
                      </>
                    )}
                  </div>
                  <ul>
                    {pkg.features.map((feature) => (
                      <li key={feature}>
                        <Check size={16} aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="oc-scope">{pkg.scope}</p>
                  <a
                    className="oc-package-cta"
                    data-starter-link={index === 0 ? true : undefined}
                    href={whatsapp(
                      index === 0
                        ? starterMessage
                        : `Hi Oneclick! I'm interested in the ${pkg.name} package ${index === 2 ? "starting from " : "at "}AED ${pkg.price}. Can we discuss my business?`,
                    )}
                    {...outbound}
                  >
                    {index === 0 && !active
                      ? "Ask for current pricing"
                      : pkg.cta}
                    <ChevronRight size={18} aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
            <p className="oc-package-note">
              Domain, hosting, paid tools and additional features are quoted
              separately.
            </p>
          </div>
        </section>

        <ServicesAndFaq />
      </main>
    </div>
  );
}
