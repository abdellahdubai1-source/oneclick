import type { Metadata } from "next";
import { connection } from "next/server";
import { business, homeMeta, services, siteUrl } from "@/lib/seo-config";
// Loaded here (not the root layout) so /playbook never ships this page's CSS.
import "./home.css";

// A plain string here would NOT get the root layout's title template applied, because
// this page and the root layout are the same route segment (the template only reaches
// child segments, e.g. /playbook) — so the full, suffixed title is written out directly.
const pageTitle = `${homeMeta.title} | ${business.name}`;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: homeMeta.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteUrl,
    siteName: business.name,
    title: pageTitle,
    description: homeMeta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: homeMeta.description,
  },
};

// Truthful structured data for the four services visibly listed on this page.
const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": services.map((service) => ({
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: business.areaServed,
  })),
};

const navLinks = [
  ["#services", "Services"],
  ["#work", "Work"],
  ["#about", "About"],
  ["#contact", "Contact"],
] as const;

// Only confirmed links are rendered; the other projects are informative cards.
const projects = [
  {
    name: "Gold Gravity UAE",
    description:
      "A bilingual corporate website for presenting brands, products, and business enquiries.",
    url: "https://goldgravityuae.com",
    linkLabel: "goldgravityuae.com",
  },
  {
    name: "Oneclick CV",
    description:
      "A CV-building web application with templates and tools for tailoring applications.",
  },
  {
    name: "Smart Way Delivery",
    description: "Website and workflow solutions for delivery services.",
  },
] as const;

const outbound = { target: "_blank", rel: "noopener noreferrer" } as const;

export default async function Home() {
  // Render at request time so the footer year is never frozen at build time.
  await connection();
  const year = new Date().getFullYear();

  return (
    <div className="oc-site" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      {/* Header: text wordmark left, section links right (stacked on narrow screens) */}
      <header className="oc-header">
        <div className="oc-shell oc-header-inner">
          <a className="oc-brand" href="#top">
            Oneclick Digital Studio
          </a>
          <nav aria-label="Main">
            <ul className="oc-nav">
              {navLinks.map(([href, label]) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        {/* 1. Hero */}
        <section className="oc-hero" aria-labelledby="hero-title">
          <div className="oc-shell">
            <p className="oc-eyebrow">UAE-based digital studio</p>
            <h1 id="hero-title">Your business deserves a better digital presence.</h1>
            <p className="oc-lead">
              We create professional websites, clear branding, and practical digital content to
              help your business connect with customers.
            </p>
            <div className="oc-actions">
              <a className="oc-btn oc-btn-primary" href={business.whatsappUrl} {...outbound}>
                Let&apos;s discuss your project
              </a>
              <a className="oc-btn oc-btn-secondary" href="#work">
                View our work
              </a>
            </div>
          </div>
        </section>

        {/* 2. Services */}
        <section className="oc-section" id="services" aria-labelledby="services-title">
          <div className="oc-shell">
            <h2 id="services-title">How we can help</h2>
            <ul className="oc-grid oc-grid-services">
              {services.map((service) => (
                <li className="oc-card" key={service.name}>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Selected work */}
        <section className="oc-section oc-section-tinted" id="work" aria-labelledby="work-title">
          <div className="oc-shell">
            <h2 id="work-title">A few projects we&apos;ve worked on</h2>
            <ul className="oc-grid oc-grid-work">
              {projects.map((project) => (
                <li className="oc-card" key={project.name}>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  {"url" in project ? (
                    <a className="oc-text-link" href={project.url} {...outbound}>
                      Visit {project.linkLabel}
                      <span className="oc-sr"> (opens in a new tab)</span>
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. About */}
        <section className="oc-section" id="about" aria-labelledby="about-title">
          <div className="oc-shell oc-about">
            <h2 id="about-title">Design with a practical purpose.</h2>
            <p>
              Oneclick Digital Studio works with businesses that need a clear, professional online
              presence. We connect thoughtful design with practical functionality, keeping each
              project focused on the business and its customers.
            </p>
          </div>
        </section>

        {/* 5. Contact */}
        <section
          className="oc-section oc-section-tinted"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="oc-shell oc-contact">
            <div>
              <h2 id="contact-title">Let&apos;s talk about your business.</h2>
              <p className="oc-lead">
                Tell us what you need, and we can discuss the right approach and scope.
              </p>
              <div className="oc-actions">
                <a className="oc-btn oc-btn-primary" href={business.whatsappUrl} {...outbound}>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <dl className="oc-contact-list">
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={business.phoneUrl}>{business.phoneDisplay}</a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={business.emailUrl}>{business.email}</a>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="oc-footer">
        <div className="oc-shell">
          <p>
            &copy; {year} Oneclick Digital Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
