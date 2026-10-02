import type { Metadata } from "next";
import { business, homeMeta, services, siteUrl } from "@/lib/seo-config";
import StudioHome from "./studio-home";

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

// Truthful structured data for the four services actually offered on this page.
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <StudioHome />
    </>
  );
}
