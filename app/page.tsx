import type { Metadata } from "next";
import { connection } from "next/server";
import { faqs } from "@/lib/agency-config";
import { business, homeMeta, services, siteUrl } from "@/lib/seo-config";
import AgencyHome from "./agency-home";

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

// Truthful structured data for the services actually offered and the FAQ content
// visibly shown further down this same page (mainEntity text matches it verbatim).
const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    ...services.map((service) => ({
      "@type": "Service",
      name: service.name,
      description: service.description,
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: business.areaServed,
    })),
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default async function Home() {
  // Never freeze the offer state at build time.
  await connection();
  // This is an uncached request-time Server Component; the client receives the same timestamp.
  // eslint-disable-next-line react-hooks/purity
  const now = Date.now();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <AgencyHome initialNow={now} />
    </>
  );
}
