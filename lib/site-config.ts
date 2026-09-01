/**
 * Single source of truth for brand + copy constants.
 * Sourced directly from the approved asset package:
 * content/site-config.json and content/site-copy.md
 * Do not invent or alter copy here — this file only re-expresses the
 * approved content as typed constants for the components to consume.
 */

export const siteConfig = {
  brand: "OneClick Digital Studio",
  domain: "oneclickbyabdellah.com",
  siteUrl: "https://oneclickbyabdellah.com",
  email: "hello@oneclickbyabdellah.com",
  location: "United Arab Emirates",
  socialHandle: "@oneclickbyabdellah",
  whatsappDisplay: "+971 56 765 4647",
  whatsappUrl:
    "https://wa.me/971567654647?text=Hello%20OneClick%20Digital%20Studio%2C%20I%20would%20like%20to%20discuss%20a%20project.",
  primaryTagline: "Websites That Turn Visitors Into Customers.",
  descriptor: "Websites / Systems / Digital Growth",
  navigation: [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const copy = {
  hero: {
    eyebrow: "OneClick Digital Studio — UAE",
    headline: "Websites That Turn Visitors Into Customers.",
    supporting:
      "We design and build fast, professional websites and practical business systems for growing companies in the UAE.",
    primaryCta: "Start a Project",
    secondaryCta: "Explore Services",
    trustLine: "Clear scope. Full ownership. Direct support.",
  },
  services: {
    title: "What We Build",
    items: [
      {
        name: "Business Websites",
        description:
          "Professional, mobile-first websites that make your business easier to trust and easier to contact.",
      },
      {
        name: "Booking & Business Systems",
        description:
          "Practical booking flows, dashboards, customer portals, and operational tools built around how your business works.",
      },
      {
        name: "Digital Growth",
        description:
          "Focused landing pages, campaign content, and digital improvements designed to turn attention into qualified enquiries.",
      },
    ],
  },
  process: {
    title: "Simple Process. Clear Progress.",
    steps: [
      {
        number: "01",
        name: "Discover",
        description:
          "We clarify your business, audience, goals, and the exact result the website must create.",
      },
      {
        number: "02",
        name: "Build",
        description:
          "We design and develop the experience with clear checkpoints and direct communication.",
      },
      {
        number: "03",
        name: "Launch",
        description:
          "We test, deploy, hand over ownership, and support the first stage after launch.",
      },
    ],
  },
  whyOneClick: {
    title: "Built Like a Business Tool, Not Decoration.",
    points: [
      "Clear scope and communication",
      "Mobile-first design",
      "Fast, focused user experience",
      "Full source-code ownership",
      "Deployment and handover support",
    ],
  },
  about: {
    title: "A Practical Digital Partner in the UAE.",
    body: "OneClick Digital Studio helps small and growing businesses create a professional digital presence through websites, systems, and focused digital growth. Every project starts with the business goal, stays clear throughout development, and ends with a usable result the client owns.",
  },
  finalCta: {
    headline: "Have a project in mind? Let's build it clearly.",
    text: "Tell us what your business needs. We'll help you choose the simplest solution that can deliver the result.",
    primaryCta: "Start on WhatsApp",
    secondaryCta: "hello@oneclickbyabdellah.com",
  },
  footer: {
    lines: [
      "OneClick Digital Studio",
      "Websites / Systems / Digital Growth",
      "United Arab Emirates",
    ],
  },
} as const;
