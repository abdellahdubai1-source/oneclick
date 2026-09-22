import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { business, homeMeta, siteUrl } from "@/lib/seo-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${homeMeta.title} | ${business.name}`,
    template: `%s | ${business.name}`,
  },
  description: homeMeta.description,
  applicationName: business.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteUrl,
    siteName: business.name,
  },
  twitter: {
    card: "summary_large_image",
  },
  // Favicons come from the branded app/icon.png and app/apple-icon.png file
  // conventions below; no explicit `icons` override needed here.
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a7bff",
};

// Sitewide, truthful structured data: identifies the business and the website itself.
// No address, ratings or social profiles are included since none were provided.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: business.name,
      url: business.url,
      logo: business.logo,
      image: business.logo,
      description: business.description,
      areaServed: business.areaServed,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: business.whatsapp,
          areaServed: "AE",
          availableLanguage: ["en"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: business.name,
      url: siteUrl,
      inLanguage: "en",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
