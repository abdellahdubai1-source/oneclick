import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import "./agency.css";

const origin = "https://oneclickbyabdellah.com";

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: "Oneclick Digital Solution | Websites for UAE Businesses",
  description:
    "Professional websites, branding and digital services for UAE businesses. Explore one-time website packages and contact Oneclick Digital Solution on WhatsApp.",
  alternates: { canonical: origin },
  robots: { index: true, follow: true },
  icons: { icon: "/agency/assets/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#147af3",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
