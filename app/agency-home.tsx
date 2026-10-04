import "./home.css";
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
  contactForPricing,
  faqs,
  packageMessage,
  packages,
  whatsapp,
} from "@/lib/agency-config";
import SiteHeader, { Logo } from "./components/site-header";
import HeroScene from "./components/hero-scene";

const outbound = { target: "_blank", rel: "noopener noreferrer" } as const;
const services = [
  {
    icon: LayoutTemplate,
    name: "Website design",
    text: "Professional websites that make your business easy to understand and easy to contact.",
  },
  {
    icon: Palette,
    name: "Brand identity",
    text: "Logos and visual design that give your business a clear, consistent presence.",
  },
  {
    icon: Megaphone,
    name: "Digital marketing",
    text: "Social media campaigns planned around your audience and business goals.",
  },
  {
    icon: Smartphone,
    name: "Content creation",
    text: "Graphics and video content made to tell your story across social platforms.",
  },
];
const steps = [
  {
    number: "01",
    title: "Tell us your idea",
    text: "Share your business, your goals and what you need. We’ll help you choose a practical starting point.",
  },
  {
    number: "02",
    title: "Agree on the details",
    text: "We confirm the design direction, project scope, price and timeline before work begins.",
  },
  {
    number: "03",
    title: "Build and launch",
    text: "Review your website, share your feedback and get the agreed support after launch.",
  },
];

export default function AgencyHome() {
  return (
    <div className="oc-site" id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <section className="oc-hero" aria-labelledby="hero-title">
          <div className="oc-shell oc-hero-inner">
            <div className="oc-hero-copy">
              <p className="oc-eyebrow">
                <span aria-hidden="true" /> Digital design for UAE businesses
              </p>
              <h1 id="hero-title">
                A strong business deserves a <em>strong website.</em>
              </h1>
              <p className="oc-hero-text">
                We build clear, modern websites that help your business earn
                trust and turn visitors into conversations.
              </p>
              <div className="oc-hero-actions">
                <a
                  className="oc-btn oc-btn-primary"
                  href={whatsapp()}
                  {...outbound}
                >
                  Let’s talk about your project{" "}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <a className="oc-text-link" href="#packages">
                  Explore packages <ArrowRight size={17} aria-hidden="true" />
                </a>
              </div>
              <ul className="oc-proof">
                {["Clear scope", "Mobile-friendly", "Direct support"].map(
                  (text) => (
                    <li key={text}>
                      <CircleCheck size={15} aria-hidden="true" /> {text}
                    </li>
                  ),
                )}
              </ul>
            </div>
            <HeroScene />
          </div>
          <div className="oc-shell oc-hero-bottom">
            <span>From your first website to a business system.</span>
            <a href="#services">
              Made for your next step{" "}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section
          className="oc-section oc-services"
          id="services"
          aria-labelledby="services-title"
        >
          <div className="oc-shell">
            <div className="oc-section-head oc-head-split">
              <div>
                <p className="oc-kicker">What we do</p>
                <h2 id="services-title">
                  Good design.
                  <br />A clear purpose.
                </h2>
              </div>
              <p>
                Everything you need to present your business confidently, online
                and beyond.
              </p>
            </div>
            <div className="oc-service-grid">
              {services.map(({ icon: Icon, name, text }, index) => (
                <article className="oc-service" key={name}>
                  <div className="oc-service-top">
                    <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{name}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="oc-section oc-packages"
          id="packages"
          aria-labelledby="packages-title"
        >
          <div className="oc-shell">
            <div className="oc-section-head">
              <p className="oc-kicker">Website packages</p>
              <h2 id="packages-title">The right start for your business.</h2>
              <p>
                Choose a starting point. We’ll agree on the details together.
              </p>
            </div>
            <div className="oc-package-grid">
              {packages.map((pkg) => (
                <article
                  className={`oc-card ${pkg.id === "business" ? "oc-card-featured" : ""}`}
                  key={pkg.id}
                >
                  <header>
                    <p className="oc-package-label">
                      {pkg.id === "starter"
                        ? "Start simple"
                        : pkg.id === "business"
                          ? "Room to grow"
                          : "Take control"}
                    </p>
                    <h3>{pkg.name}</h3>
                    <p>{pkg.tagline}</p>
                  </header>
                  <div className="oc-card-price">
                    {pkg.price === null ? (
                      <>
                        <strong className="oc-quote-price">
                          Request a quote
                        </strong>
                        <span className="oc-card-note">
                          {contactForPricing}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="oc-from">
                          {"pricePrefix" in pkg
                            ? pkg.pricePrefix
                            : "Project price"}
                        </span>
                        <span className="oc-card-amount">
                          <small>AED</small>
                          <strong>{pkg.price}</strong>
                        </span>
                        <span className="oc-card-note">{pkg.priceNote}</span>
                      </>
                    )}
                  </div>
                  <ul className="oc-card-list">
                    {pkg.features.map((feature) => (
                      <li key={feature}>
                        <Check size={16} aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                    <li className="oc-excluded">
                      <Minus size={16} aria-hidden="true" />
                      {pkg.excludes}
                    </li>
                  </ul>
                  {pkg.id === "system" ? (
                    <p className="oc-card-fine">
                      Booking, online payment, customer accounts and advanced
                      workflows are quoted separately.
                    </p>
                  ) : null}
                  <a
                    className={`oc-btn ${pkg.id === "business" ? "oc-btn-primary" : "oc-btn-outline"}`}
                    href={whatsapp(packageMessage(pkg.id))}
                    {...outbound}
                  >
                    {pkg.cta}
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
            <p className="oc-package-note">
              Domain, hosting, paid tools and third-party subscriptions are
              quoted separately.
            </p>
          </div>
        </section>

        <section
          className="oc-section oc-process"
          id="process"
          aria-labelledby="process-title"
        >
          <div className="oc-shell">
            <div className="oc-section-head oc-head-split">
              <div>
                <p className="oc-kicker">How we work</p>
                <h2 id="process-title">Simple from the start.</h2>
              </div>
              <p>
                One conversation. A clear plan. A website built around your
                business.
              </p>
            </div>
            <ol className="oc-step-grid">
              {steps.map(({ number, title, text }) => (
                <li key={number}>
                  <span className="oc-step-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="oc-section oc-faq"
          id="faq"
          aria-labelledby="faq-title"
        >
          <div className="oc-shell oc-faq-inner">
            <div className="oc-faq-intro">
              <p className="oc-kicker">A few useful answers</p>
              <h2 id="faq-title">Before we begin.</h2>
              <p>
                Have something else in mind? We’re happy to talk it through.
              </p>
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
              {faqs.map(({ question, answer }) => (
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

        <section
          className="oc-final"
          id="contact"
          aria-labelledby="final-title"
        >
          <div className="oc-shell oc-final-card">
            <div>
              <p className="oc-kicker">Your next step</p>
              <h2 id="final-title">
                Let’s bring your
                <br />
                business online.
              </h2>
              <p>Tell us what you have in mind. We’ll take it from there.</p>
            </div>
            <div className="oc-final-actions">
              <a
                className="oc-btn oc-btn-white"
                href={whatsapp()}
                {...outbound}
              >
                <MessageCircle size={19} aria-hidden="true" />
                Start a conversation{" "}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="oc-final-phone" href="tel:+971567654647">
                +971 56 765 4647
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="oc-footer">
        <div className="oc-shell">
          <div className="oc-footer-top">
            <div>
              <a
                className="oc-footer-logo"
                href="#top"
                aria-label="Oneclick Digital Solution home"
              >
                <Logo />
              </a>
              <p>
                Websites, branding and digital experiences.
                <br />
                Built with purpose for UAE businesses.
              </p>
            </div>
            <nav aria-label="Footer navigation">
              <a href="#services">Services</a>
              <a href="#packages">Packages</a>
              <a href="#contact">Contact</a>
              <a href="/playbook">
                The Playbook <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </nav>
          </div>
          <div className="oc-footer-bottom">
            <p>© 2026 Oneclick Digital Solution. All rights reserved.</p>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
