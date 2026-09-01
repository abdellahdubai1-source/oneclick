import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.brand} | ${siteConfig.primaryTagline}`,
    template: `%s | ${siteConfig.brand}`,
  },
  description:
    "OneClick Digital Studio designs and builds fast, professional websites and practical business systems for growing companies in the UAE. Start a project on WhatsApp today.",
  keywords: [
    "OneClick Digital Studio",
    "UAE website design",
    "business website UAE",
    "booking system UAE",
    "Dubai web design studio",
    "digital growth UAE",
  ],
  authors: [{ name: siteConfig.brand }],
  creator: siteConfig.brand,
  publisher: siteConfig.brand,
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteConfig.siteUrl,
    siteName: siteConfig.brand,
    title: `${siteConfig.brand} | ${siteConfig.primaryTagline}`,
    description:
      "We design and build fast, professional websites and practical business systems for growing companies in the UAE.",
    images: [
      {
        url: "/brand/oneclick-logo-primary-transparent.png",
        width: 2172,
        height: 724,
        alt: `${siteConfig.brand} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand} | ${siteConfig.primaryTagline}`,
    description:
      "We design and build fast, professional websites and practical business systems for growing companies in the UAE.",
    images: ["/brand/oneclick-logo-primary-transparent.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.brand,
  url: siteConfig.siteUrl,
  logo: `${siteConfig.siteUrl}/brand/oneclick-logo-primary-transparent.png`,
  image: `${siteConfig.siteUrl}/brand/oneclick-logo-primary-transparent.png`,
  email: siteConfig.email,
  areaServed: "AE",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AE",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
