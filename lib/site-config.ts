/**
 * Single source of truth for brand + copy constants.
 * The core brand copy is sourced from the approved asset package. Campaign
 * details are added only when explicitly supplied by OneClick Digital Studio.
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
    { label: "Offer", href: "#offer" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

/**
 * Fixed promotional campaign updated on 6 September 2026.
 * The ISO deadline includes the UAE UTC+4 offset so it never resets when a
 * visitor refreshes the page or opens it in another time zone.
 */
export const offerConfig = {
  deadline: "2026-09-11T15:37:14+04:00",
  deadlineLabel: "11 September 2026, 3:37 PM UAE time",
  packages: [
    {
      name: "Public Website + Admin Dashboard",
      description:
        "A complete public business website with an admin dashboard for managing your content.",
      originalPrice: "AED 4,000",
      offerPrice: "AED 2,000",
      saving: "Save AED 2,000",
      features: [
        "Custom public business website",
        "Content management dashboard",
        "Mobile-first, responsive design",
        "Deployment and handover support",
      ],
      whatsappUrl:
        "https://wa.me/971567654647?text=Hello%20OneClick%20Digital%20Studio%2C%20I%20would%20like%20to%20claim%20the%205-day%20Public%20Website%20%2B%20Admin%20Dashboard%20offer%20for%20AED%202%2C000.",
      featured: true,
    },
    {
      name: "Showcase Website",
      description:
        "A clean, professional website that presents your business, services, and contact details.",
      originalPrice: "AED 1,500",
      offerPrice: "AED 750",
      saving: "Save AED 750",
      features: [
        "Custom showcase website",
        "Clear services and contact sections",
        "Mobile-first, responsive design",
        "Deployment and handover support",
      ],
      whatsappUrl:
        "https://wa.me/971567654647?text=Hello%20OneClick%20Digital%20Studio%2C%20I%20would%20like%20to%20claim%20the%205-day%20Showcase%20Website%20offer%20for%20AED%20750.",
      featured: false,
    },
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
