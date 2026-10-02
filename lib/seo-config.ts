/**
 * Sitewide SEO and business-identity data: shared by app/layout.tsx (Organization/WebSite
 * JSON-LD), app/page.tsx (homepage metadata, Service JSON-LD, contact links), app/manifest.ts
 * and the Open Graph image. Kept separate from lib/site-config.ts, which belongs to the
 * unrelated /playbook product.
 */

export const siteUrl = "https://oneclickbyabdellah.com";

export const business = {
  name: "Oneclick Digital Studio",
  url: siteUrl,
  logo: `${siteUrl}/brand/oneclick-icon-dark.png`,
  /** Display formats, as shown on the page. */
  phoneDisplay: "056 765 4647",
  email: "info@onclickbyabdellah.com",
  /** Link targets. */
  phone: "+971567654647",
  phoneUrl: "tel:+971567654647",
  emailUrl: "mailto:info@onclickbyabdellah.com",
  whatsappUrl: "https://wa.me/971567654647",
  areaServed: "United Arab Emirates",
  description:
    "Oneclick Digital Studio is a UAE-based digital studio creating professional websites, clear branding, digital marketing support and practical content for businesses.",
} as const;

/** The four services shown on the homepage; also used for Service structured data. */
export const services = [
  {
    name: "Website Development",
    description:
      "Responsive business websites and practical web tools built around your needs.",
  },
  {
    name: "Branding & Design",
    description:
      "Logos, visual identity, and marketing materials that keep your business consistent.",
  },
  {
    name: "Digital Marketing",
    description:
      "Campaign planning, social media support, and messaging for your audience.",
  },
  {
    name: "Content Creation",
    description: "Video editing, social content, and visuals for your digital platforms.",
  },
] as const;

/** Homepage title/description. The title is suffixed by the root layout's title template. */
export const homeMeta = {
  title: "Websites, Branding & Digital Content for UAE Businesses",
  description:
    "Oneclick Digital Studio creates professional websites, clear branding, and practical digital content to help UAE businesses connect with customers. Contact us on WhatsApp.",
} as const;
