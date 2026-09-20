"use client";

import { useEffect, useState, memo } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowDown,
  Check,
  Plus,
  Monitor,
  PenTool,
  Megaphone,
  Video,
  MessageCircle,
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
      href="#top"
      className="oc-logo"
      aria-label="Oneclick Digital Solution home"
    >
      <Image
        src="/agency/assets/oneclick-logo.png"
        alt="Oneclick Digital Solution"
        width={2048}
        height={546}
        sizes="(max-width: 600px) 160px, 224px"
        priority
      />
    </a>
  );
}

const Header = memo(function Header() {
  return (
    <header className="oc-header">
      <div className="oc-container oc-header-inner">
        <Logo />
        <nav aria-label="Main navigation">
          <a href="#packages">Packages</a>
          <a className="oc-desktop" href="#services">
            Services
          </a>
          <a className="oc-desktop" href="#faq">
            FAQs
          </a>
        </nav>
        <a
          className="oc-button oc-button-small oc-header-contact"
          href={whatsapp()}
          {...outbound}
        >
          <span>Let’s talk</span>
          <ArrowUpRight size={18} aria-hidden="true" />
          <span className="oc-sr-only"> on WhatsApp</span>
        </a>
      </div>
    </header>
  );
});

const SupportingContent = memo(function SupportingContent() {
  const services = [
    { icon: Monitor, name: "Websites", text: "Built for your business." },
    {
      icon: PenTool,
      name: "Branding & design",
      text: "Look the part, everywhere.",
    },
    {
      icon: Megaphone,
      name: "Social & marketing",
      text: "Connect with your audience.",
    },
    { icon: Video, name: "Video & content", text: "Bring your ideas to life." },
  ];
  const faqs = [
    [
      "What do I need to get started?",
      "Send us your business name, logo, services and any content or images you have. We’ll confirm the scope and delivery timeline before work starts.",
    ],
    [
      "Are domain and hosting included?",
      "Domain, hosting, paid tools and third-party subscriptions are quoted separately unless included in your written proposal.",
    ],
    [
      "Can I update the website myself?",
      "Choose Business System for admin access to manage one agreed content type, such as products or services. Starter and Business do not include an admin dashboard.",
    ],
    [
      "How long will my website take?",
      "We confirm a delivery date once we understand your project and receive the required content. The timeline depends on the agreed scope.",
    ],
  ];
  return (
    <>
      <section
        className="oc-services oc-container"
        id="services"
        aria-labelledby="services-title"
      >
        <div className="oc-section-heading">
          <div>
            <p className="oc-eyebrow">MORE THAN A WEBSITE</p>
            <h2 id="services-title">One partner. More possibilities.</h2>
          </div>
          <p>Other services, quoted to fit your brief.</p>
        </div>
        <div className="oc-service-grid">
          {services.map(({ icon: Icon, name, text }) => (
            <article key={name}>
              <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
              <h3>{name}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section
        className="oc-faq oc-container"
        id="faq"
        aria-labelledby="faq-title"
      >
        <div>
          <p className="oc-eyebrow">GOOD TO KNOW</p>
          <h2 id="faq-title">
            Clear from
            <br />
            the first click.
          </h2>
          <p>Have another question?</p>
          <a
            className="oc-text-link"
            href={whatsapp(
              "Hi Oneclick! I have a question about your website packages.",
            )}
            {...outbound}
          >
            Ask us on WhatsApp <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="oc-faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <Plus size={20} aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section
        className="oc-closing oc-container"
        aria-labelledby="closing-title"
      >
        <div>
          <p>YOUR NEXT CHAPTER STARTS HERE</p>
          <h2 id="closing-title">
            Let’s make your business
            <br className="oc-desktop" /> look as good as it is.
          </h2>
        </div>
        <a
          className="oc-button oc-button-white"
          href={whatsapp()}
          {...outbound}
        >
          Start a conversation <ArrowUpRight size={20} aria-hidden="true" />
        </a>
      </section>
      <footer className="oc-footer oc-container">
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
        <section className="oc-hero oc-container" aria-labelledby="hero-title">
          <div className="oc-hero-copy">
            <p className="oc-eyebrow">
              <span className="oc-eyebrow-line" /> SMALL BUSINESS. BIG FIRST
              IMPRESSION.
            </p>
            <h1 id="hero-title">
              Your business.
              <br />
              <span>Better online.</span>
            </h1>
            <p className="oc-intro">
              Beautiful websites. Clear pricing.
              <br />
              An easier way for customers to find you.
            </p>
            <div className="oc-hero-actions">
              <a href="#packages" className="oc-button">
                Explore packages <ArrowDown size={18} aria-hidden="true" />
              </a>
              <a className="oc-text-link" href={whatsapp()} {...outbound}>
                Let’s talk <ArrowUpRight size={18} aria-hidden="true" />
                <span className="oc-sr-only"> on WhatsApp</span>
              </a>
            </div>
            <div className="oc-hero-points">
              <span>
                <Check size={15} aria-hidden="true" /> Mobile-friendly
              </span>
              <span>
                <Check size={15} aria-hidden="true" /> Built for UAE businesses
              </span>
            </div>
          </div>
          <aside className="oc-offer" aria-label="Starter website offer">
            <div className="oc-offer-top">
              <span>
                {active ? "THE STARTER OFFER" : "YOUR BUSINESS STARTS HERE"}
              </span>
              <span className="oc-offer-badge">
                {active ? "75% OFF" : "STARTER"}
              </span>
            </div>
            <div className="oc-offer-main">
              <p>Your new website.</p>
              {active ? (
                <>
                  <div className="oc-hero-price">
                    <span>AED</span>
                    <strong>600</strong>
                  </div>
                  <div className="oc-offer-was">
                    <s>AED 2,400</s>
                    <span>One-time project price</span>
                  </div>
                </>
              ) : (
                <h2 className="oc-offer-alternative">
                  A fresh start.
                  <br />A better website.
                </h2>
              )}
              <div className="oc-offer-features">
                <span>Up to 5 pages</span>
                <span>Mobile-ready</span>
                <span>WhatsApp</span>
              </div>
              <a
                className="oc-button oc-button-white"
                data-starter-link
                href={whatsapp(starterMessage)}
                {...outbound}
              >
                {active ? "Claim the Starter offer" : "Ask for current pricing"}
                <ArrowUpRight size={19} aria-hidden="true" />
              </a>
            </div>
            <div className="oc-countdown-panel">
              <div className="oc-countdown-heading">
                <span>
                  {active
                    ? "OFFER ENDS IN"
                    : state === "upcoming"
                      ? "OFFER STARTS IN"
                      : "THIS OFFER HAS ENDED"}
                </span>
                <span>
                  {state === "upcoming" ? "16 SEP · UAE" : "30 SEP · UAE"}
                </span>
              </div>
              <div
                className="oc-countdown"
                role="timer"
                aria-label={
                  state === "expired"
                    ? "Offer ended"
                    : state === "upcoming"
                      ? "Time until offer starts"
                      : "Time until offer ends"
                }
                aria-live="off"
              >
                {time.map((value, i) => (
                  <div key={i}>
                    <b>{String(value).padStart(2, "0")}</b>
                    <span>{["Days", "Hours", "Mins", "Secs"][i]}</span>
                  </div>
                ))}
              </div>
              <p className="oc-deadline">
                {state === "expired"
                  ? "Ask us about current packages."
                  : state === "upcoming"
                    ? "Starts 16 September 2026, 00:00 UAE"
                    : `Ends ${campaign.deadline}`}
              </p>
            </div>
          </aside>
        </section>
        <section
          className="oc-packages"
          id="packages"
          aria-labelledby="packages-title"
        >
          <div className="oc-container">
            <div className="oc-section-heading">
              <div>
                <p className="oc-eyebrow">SIMPLE PACKAGES. NO GUESSWORK.</p>
                <h2 id="packages-title">Choose your next step.</h2>
              </div>
              <p>
                One-time project pricing.
                <br />A clear scope before we start.
              </p>
            </div>
            <div className="oc-pricing-grid">
              {packages.map((pkg, index) => (
                <article
                  className={`oc-price-card ${index === 0 ? "oc-featured" : ""}`}
                  key={pkg.name}
                >
                  <div className="oc-card-label">
                    <span>0{index + 1}</span>
                    {index === 0 ? (
                      <span className="oc-card-badge">
                        {active ? "LIMITED OFFER · 75% OFF" : "A SIMPLE START"}
                      </span>
                    ) : (
                      <span>
                        {index === 1 ? "MORE POSSIBILITIES" : "MORE CONTROL"}
                      </span>
                    )}
                  </div>
                  <h3>{pkg.name}</h3>
                  <p className="oc-card-description">{pkg.description}</p>
                  <div className="oc-package-price">
                    {index === 0 && !active ? (
                      <strong className="oc-contact-price">
                        Let’s talk pricing
                      </strong>
                    ) : (
                      <>
                        <div className="oc-price-context">
                          {index === 0 ? (
                            <s>AED 2,400</s>
                          ) : index === 2 ? (
                            "Starting from"
                          ) : (
                            "One-time"
                          )}
                        </div>
                        <div>
                          <span>AED</span>
                          <strong>{pkg.price}</strong>
                        </div>
                      </>
                    )}
                  </div>
                  <ul>
                    {pkg.features.map((feature) => (
                      <li key={feature}>
                        <Check size={17} aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="oc-scope">{pkg.scope}</p>
                  <a
                    className={`oc-button ${index !== 0 ? "oc-button-outline" : ""}`}
                    data-starter-link={index === 0 ? true : undefined}
                    href={whatsapp(
                      index === 0
                        ? starterMessage
                        : `Hi Oneclick! I'm interested in the ${pkg.name} package ${index === 2 ? "starting from " : "at "}AED ${pkg.price}. Can we discuss my business?`,
                    )}
                    {...outbound}
                  >
                    {pkg.cta}
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
            <p className="oc-pricing-note">
              Domain, hosting and paid tools are quoted separately. Final scope
              is agreed before work begins.
            </p>
          </div>
        </section>
        <SupportingContent />
      </main>
      <a
        className="oc-floating"
        href={whatsapp()}
        {...outbound}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={25} aria-hidden="true" />
        <span>Let’s talk</span>
      </a>
    </div>
  );
}
