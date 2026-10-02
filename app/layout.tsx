import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { Onest } from "next/font/google";
import { business, homeMeta, siteUrl } from "@/lib/seo-config";
import "./globals.css";

// Homepage typeface, self-hosted by next/font (no runtime request to Google) with
// font-display: swap. Geist remains for the unrelated /playbook route.
const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-onest",
});

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
  themeColor: "#ffffff",
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
          telephone: business.phone,
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
    // suppressHydrationWarning: the homepage's inline intro script sets a data attribute on
    // <html> before React hydrates (see app/components/studio/intro-loader.tsx).
    <html lang="en" className={`${GeistSans.variable} ${onest.variable}`} suppressHydrationWarning>
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
