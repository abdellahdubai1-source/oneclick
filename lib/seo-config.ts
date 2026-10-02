/**
 * Sitewide SEO and business-identity data: shared by app/layout.tsx (Organization/WebSite
 * JSON-LD), app/page.tsx (homepage metadata, Service JSON-LD), the manifest and the OG image.
 * Kept separate from lib/site-config.ts, which belongs to the unrelated /playbook product.
 */
import { brand, contact, services as studioServices } from "./studio-config";

/**
 * Canonical origin used for metadataBase, canonical links, the sitemap and robots.
 * This value pre-dates this homepage; the public domain still needs confirmation by the
 * owner before launch (see README). It is intentionally not derived from the contact email.
 */
export const siteUrl = "https://oneclickbyabdellah.com";

export const business = {
  name: brand.name,
  url: siteUrl,
  logo: `${siteUrl}/brand/oneclick-icon-dark.png`,
  phone: contact.phoneInternational.replace(/\s+/g, ""),
  areaServed: "United Arab Emirates",
  description:
    "Oneclick Digital Studio is a UAE-based studio building websites, branding, digital marketing and content shaped around your business.",
} as const;

/** The four real services, for Service structured data. */
export const services = studioServices.map((service) => ({
  name: service.name,
  description: service.text,
}));

/** Homepage title/description. The title is suffixed by the root layout's title template. */
export const homeMeta = {
  title: "Websites, Branding & Digital Marketing in the UAE",
  description:
    "Oneclick Digital Studio builds websites, shapes brands, and creates content that helps UAE businesses connect with customers.",
} as const;
