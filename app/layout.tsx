import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { productConfig, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: `${productConfig.name} | ${siteConfig.brand}`,
  description: productConfig.description,
  keywords: [
    "client acquisition playbook",
    "local service business marketing",
    "paid ads playbook",
    "WhatsApp lead follow-up",
    "service business lead generation",
  ],
  authors: [{ name: siteConfig.brand }],
  creator: siteConfig.brand,
  publisher: siteConfig.brand,
  alternates: { canonical: siteConfig.siteUrl },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    siteName: siteConfig.brand,
    title: productConfig.name,
    description: productConfig.description,
    images: [{ url: "/brand/oneclick-logo-primary-transparent.png", width: 2172, height: 724, alt: `${siteConfig.brand} logo` }],
  },
  twitter: {
    card: "summary_large_image",
    title: productConfig.name,
    description: productConfig.description,
    images: ["/brand/oneclick-logo-primary-transparent.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: productConfig.name,
  description: productConfig.description,
  brand: { "@type": "Brand", name: siteConfig.brand },
  offers: {
    "@type": "Offer",
    price: "69",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: siteConfig.siteUrl,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#main" className="skip-link">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
