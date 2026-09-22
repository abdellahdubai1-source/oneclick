/**
 * Sitewide SEO and business-identity data: shared by app/layout.tsx (Organization/WebSite
 * JSON-LD), app/page.tsx (homepage metadata, Service/FAQPage JSON-LD) and the OG image.
 * Kept separate from lib/site-config.ts, which belongs to the unrelated /playbook product.
 */

export const siteUrl = "https://oneclickbyabdellah.com";

export const business = {
  name: "OneClick Digital Solution",
  url: siteUrl,
  logo: `${siteUrl}/brand/oneclick-icon-dark.png`,
  whatsapp: "+971567654647",
  whatsappUrl: "https://wa.me/971567654647",
  areaServed: "United Arab Emirates",
  description:
    "OneClick Digital Solution designs and builds professional business websites, business systems, branding, social media marketing and video content for companies across the UAE.",
} as const;

/**
 * The business's real services, for Service structured data. Broader and more specific
 * than the four short cards shown on the homepage, but truthful to what is actually offered.
 */
export const services = [
  {
    name: "Website Design",
    description:
      "Custom, mobile-friendly website design built around your business and its services.",
  },
  {
    name: "Business Websites",
    description:
      "Professional public websites that present your business clearly and help visitors get in touch.",
  },
  {
    name: "Business Systems",
    description:
      "Websites with an admin dashboard so you can manage inquiries and one agreed content type yourself.",
  },
  {
    name: "Branding",
    description:
      "A consistent visual identity that helps customers recognize and remember your business.",
  },
  {
    name: "Social Media Marketing",
    description:
      "Campaigns and content planned around your business goals on social platforms.",
  },
  {
    name: "Video and Content",
    description: "Creative video and content made for today's platforms.",
  },
] as const;

/** Homepage title/description. The title is suffixed by the root layout's title template. */
export const homeMeta = {
  title: "Business Websites & Web Design UAE",
  description:
    "OneClick Digital Solution builds professional, mobile-first websites for UAE businesses. Clear packages, optional admin dashboards, WhatsApp support.",
} as const;
