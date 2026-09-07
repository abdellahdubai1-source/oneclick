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
  primaryTagline: "Digital Systems Built to Attract, Convert, and Grow.",
  descriptor: "Websites / Growth Marketing / Digital Products",
  navigation: [
    { label: "Services", href: "/#services" },
    { label: "Growth", href: "/#growth" },
    { label: "Work", href: "/#work" },
    { label: "Playbook", href: "/playbook" },
    { label: "About", href: "/#about" },
  ],
} as const;

export const productConfig = {
  name: "The 7-Day Client Acquisition Playbook",
  shortName: "Client Acquisition Playbook",
  price: "$69",
  priceLabel: "$69 one-time beta access",
  audience:
    "Cleaning, maintenance, detailing, landscaping, pest-control, beauty, and other local service businesses.",
  // Replace this temporary purchase handoff with the final Whop checkout URL.
  checkoutUrl:
    "https://wa.me/971567654647?text=Hello%20OneClick%20Digital%20Studio%2C%20I%20want%20to%20get%20the%20%247-Day%20Client%20Acquisition%20Playbook%20Beta%20for%20%2469.",
  checkoutProvider: "Whop checkout will be connected before the paid launch.",
  betaLimit: "First 25 businesses",
  modules: [
    "Build a clear, marketable service offer",
    "Choose the right audience and campaign objective",
    "Create paid-ad copy and creative angles",
    "Turn clicks into focused landing-page enquiries",
    "Respond and qualify leads on WhatsApp",
    "Follow up without sounding pushy",
    "Track the numbers and improve the system",
  ],
  bonuses: [
    "Paid-ad copy templates",
    "WhatsApp message swipe file",
    "Offer-builder worksheet",
    "Lead tracker and follow-up dashboard",
    "Daily implementation checklist",
  ],
} as const;

export const copy = {
  hero: {
    eyebrow: "OneClick Digital Studio — Built in the UAE, ready for global work",
    headline: "Digital systems that help businesses attract, convert, and grow.",
    supporting:
      "We combine conversion-focused websites, practical business systems, and growth marketing to turn attention into qualified enquiries and customers.",
    primaryCta: "Start a Project",
    secondaryCta: "Explore the Playbook",
    trustLine: "Strategy, build, launch, and handover — kept clear from day one.",
  },
  services: {
    eyebrow: "What we do",
    title: "One partner for the system behind your growth.",
    description:
      "The website, the campaign, and the follow-up should work together. We build each part around the customer journey, not as disconnected tasks.",
    items: [
      {
        name: "Conversion-Focused Websites",
        description:
          "Fast, mobile-first websites and landing pages that make the next step obvious and make your business easier to trust.",
      },
      {
        name: "Business Systems",
        description:
          "Booking flows, dashboards, customer portals, and operational tools designed around the way your team actually works.",
      },
      {
        name: "Growth Marketing",
        description:
          "Offer positioning, paid-campaign structure, content direction, conversion journeys, and WhatsApp follow-up systems.",
      },
      {
        name: "Digital Products",
        description:
          "Practical playbooks, templates, and implementation tools that help service businesses apply proven digital workflows.",
      },
    ],
  },
  growth: {
    eyebrow: "Marketing & growth",
    title: "A complete path from attention to customer.",
    description:
      "Marketing is not one ad or one post. We connect the offer, landing experience, response, and follow-up so every stage has a clear job.",
    stages: [
      { number: "01", name: "Attract", detail: "Paid ads and focused content" },
      { number: "02", name: "Present", detail: "A clear offer and landing page" },
      { number: "03", name: "Capture", detail: "Simple enquiry and lead flow" },
      { number: "04", name: "Follow up", detail: "Fast, human WhatsApp response" },
      { number: "05", name: "Convert", detail: "Quote, booking, and next action" },
    ],
    capabilities: [
      "Meta paid-ad campaign structure",
      "Offer and message development",
      "Landing-page conversion planning",
      "Content and creative direction",
      "WhatsApp lead follow-up",
      "Lead tracking and campaign review",
    ],
  },
  work: {
    eyebrow: "Selected experience",
    title: "Built around real business workflows.",
    description:
      "Our work spans public websites, admin dashboards, customer journeys, operational systems, and campaign assets.",
    items: [
      {
        category: "Corporate platform",
        title: "Bilingual distribution website and product system",
        description:
          "A corporate web presence with structured products, enquiry flows, admin control, deployment, and ownership handover.",
        tags: ["Website", "Admin", "English + Arabic"],
      },
      {
        category: "Operations system",
        title: "Delivery workflow from order to proof of delivery",
        description:
          "An operational flow connecting admin, rider actions, customer tracking, status updates, and delivery confirmation.",
        tags: ["Dashboard", "Workflow", "Tracking"],
      },
      {
        category: "Service business",
        title: "Booking and team-management experience",
        description:
          "A customer booking journey supported by scheduling, staff assignment, service management, and reporting concepts.",
        tags: ["Booking", "Team", "Reports"],
      },
      {
        category: "Marketing system",
        title: "Offers, landing pages, content, and follow-up",
        description:
          "Campaign planning that connects the promise, creative direction, landing-page action, and WhatsApp response process.",
        tags: ["Paid Ads", "Content", "Conversion"],
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
    title: "A practical digital partner, not another disconnected supplier.",
    body: "OneClick Digital Studio helps small and growing businesses connect their website, marketing, and customer journey. Every project begins with the business goal, moves through clear checkpoints, and ends with a usable result the client can own and operate.",
  },
  finalCta: {
    headline: "Ready to build a clearer path to customers?",
    text: "Tell us where your business is now and what result you need. We will help you identify the simplest digital system that can move it forward.",
    primaryCta: "Start on WhatsApp",
    secondaryCta: "hello@oneclickbyabdellah.com",
  },
  footer: {
    lines: [
      "OneClick Digital Studio",
      "Websites / Growth Marketing / Digital Products",
      "United Arab Emirates",
    ],
  },
} as const;
