/**
 * Central configuration for the Oneclick Digital Studio homepage.
 *
 * Everything customer-facing that an owner may need to change lives here:
 * brand names, contact details, social URLs, hero assets, project links and
 * service copy. Empty strings mean "not configured" and the site hides the
 * related control instead of showing a placeholder or inventing a destination.
 *
 * The contact values below were supplied by the owner. Their WhatsApp
 * registration, mailbox delivery and domain ownership have not been
 * independently verified by this code.
 */

export const brand = {
  name: "Oneclick Digital Studio",
  shortName: "Oneclick",
  watermark: "ONECLICK",
  locationLabel: "UAE-based digital studio",
  tagline: "Good design. Clear direction. Practical results.",
  /** Confirm the public domain before filling this in. Never inferred from the email. */
  websiteUrl: "",
} as const;

export const contact = {
  /** International digits only, for https://wa.me/ URLs. Empty disables WhatsApp handoff. */
  whatsappNumber: "971567654647",
  phoneDisplay: "056 765 4647",
  phoneInternational: "+971 56 765 4647",
  telHref: "tel:+971567654647",
  /** Keep "onclick" exactly as supplied by the owner. Empty disables the email draft. */
  contactEmail: "info@onclickbyabdellah.com",
} as const;

/** Only configured URLs are rendered. Leave empty until the owner supplies a real profile. */
export const social = {
  facebook: "",
  instagram: "",
  tiktok: "",
  youtube: "",
  linkedin: "",
} as const;

export const socialLinks = (
  [
    ["Facebook", social.facebook],
    ["Instagram", social.instagram],
    ["TikTok", social.tiktok],
    ["YouTube", social.youtube],
    ["LinkedIn", social.linkedin],
  ] as const
).filter(([, url]) => url.length > 0) as ReadonlyArray<readonly [string, string]>;

/** Verified logo files already present in the repository. */
export const logo = {
  /** Full wordmark for light surfaces. */
  primary: "/brand/oneclick-logo-primary-transparent.png",
  primaryWidth: 2172,
  primaryHeight: 724,
  /** Square icon mark, used on dark surfaces next to a text wordmark. */
  icon: "/brand/oneclick-icon-dark.png",
} as const;

/**
 * Hero artwork. These are original SVG compositions (a contemporary design
 * workspace in a light and a lit-up variant). Replace both with permitted
 * photographs of the same scene to use photographic imagery.
 */
export const hero = {
  heroBaseSrc: "/hero/hero-base.svg",
  heroRevealSrc: "/hero/hero-reveal.svg",
  alt: "Abstract illustration of a digital design workspace with layered screens and interface cards",
  eyebrow: "UAE-based digital studio",
  headline: ["Your next chapter.", "Designed, built,", "and brought to life."],
  text: "We build websites, shape brands, and create content that helps businesses connect with customers.",
  focusLine: "Websites · Branding · Digital marketing",
  slides: [
    {
      caption: "Websites",
      title: "Built for your business.",
      text: "From a clear first impression to practical tools behind the scenes.",
    },
    {
      caption: "Brand & content",
      title: "Designed to stand out.",
      text: "A consistent visual identity across your website and content.",
    },
    {
      caption: "Digital marketing",
      title: "Give your business direction.",
      text: "Clear messaging and campaigns shaped around your audience.",
    },
  ],
  principlesLabel: "Built around your business",
  principles: ["Clear messaging", "Responsive websites", "Consistent branding", "Practical support"],
  status: ["Based in the UAE", "Working with businesses near and far", "Scroll to explore"],
} as const;

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#works" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact", opensModal: true },
] as const;

export type ServiceValue = "website" | "branding" | "marketing" | "content" | "unsure";

export const serviceOptions: ReadonlyArray<{ value: ServiceValue; label: string }> = [
  { value: "website", label: "Website" },
  { value: "branding", label: "Branding" },
  { value: "marketing", label: "Digital marketing" },
  { value: "content", label: "Content creation" },
  { value: "unsure", label: "Not sure yet" },
];

export const services = [
  {
    number: "01",
    value: "website" as ServiceValue,
    name: "Website Design & Development",
    text: "Responsive websites, business tools, and admin features shaped around your workflow.",
  },
  {
    number: "02",
    value: "branding" as ServiceValue,
    name: "Branding & Graphic Design",
    text: "Logos, visual identity, and design that keeps your business recognisable.",
  },
  {
    number: "03",
    value: "marketing" as ServiceValue,
    name: "Digital Marketing",
    text: "Audience-focused campaigns, social media direction, and clearer messaging.",
  },
  {
    number: "04",
    value: "content" as ServiceValue,
    name: "Content Creation",
    text: "Social content, video editing, and visuals made for your platforms.",
  },
] as const;

export const processSteps = [
  { number: "01", name: "Discover", text: "Understand your business, audience, and priorities." },
  { number: "02", name: "Define", text: "Agree on scope, content, and the direction." },
  { number: "03", name: "Create", text: "Design and build, with room for clear feedback." },
  { number: "04", name: "Launch", text: "Check the details and prepare a confident handover." },
] as const;

export type ProjectAction =
  | { type: "link"; url: string }
  | { type: "detail" }
  | { type: "modal" };

export type Project = {
  id: string;
  name: string;
  category: string;
  text: string;
  tags: readonly string[];
  mockup: "corporate" | "cv" | "delivery" | "next";
  action: ProjectAction;
  /** Short, truthful detail copy for projects without a confirmed public URL. */
  detail?: string;
};

export const projects: readonly Project[] = [
  {
    id: "gold-gravity",
    name: "Gold Gravity UAE",
    category: "Corporate website",
    text: "A bilingual corporate website for presenting brands, products, and business enquiries.",
    tags: ["Corporate website", "English & Arabic", "Product catalogue"],
    mockup: "corporate",
    action: { type: "link", url: "https://goldgravityuae.com" },
  },
  {
    id: "oneclick-cv",
    name: "Oneclick CV",
    category: "CV builder",
    text: "A CV-building experience with templates and tools for tailoring applications.",
    tags: ["Web application", "CV builder", "User experience"],
    mockup: "cv",
    action: { type: "detail" },
    detail:
      "Oneclick CV is a web application for building a CV from templates and tailoring it to each application. A public link is added here once the live address is confirmed.",
  },
  {
    id: "smart-way-delivery",
    name: "Smart Way Delivery",
    category: "Delivery services",
    text: "A digital presence and practical workflows for delivery services.",
    tags: ["Service website", "Delivery workflows", "Responsive design"],
    mockup: "delivery",
    action: { type: "detail" },
    detail:
      "Smart Way Delivery combines a service website with practical workflows for handling delivery requests. A public link is added here once the live address is confirmed.",
  },
  {
    id: "your-next-project",
    name: "Your next project",
    category: "Collaboration",
    text: "A website, brand, or campaign shaped around what your business needs next.",
    tags: ["Your goals", "Clear scope", "Practical delivery"],
    mockup: "next",
    action: { type: "modal" },
  },
];

export const about = {
  eyebrow: "The studio",
  location: "Based in the UAE. Built around your business.",
  statementLead: "Oneclick Digital Studio helps businesses turn ideas into a clear digital presence",
  statementMuted:
    "— through purposeful websites, consistent branding, and content that speaks to the right audience.",
  text: "We connect design with practical business needs, from a simple landing page to a website with the tools your team needs to manage it.",
} as const;

export const footer = {
  ctaHeading: "Have a project in mind? Let's make it happen.",
  ctaLabel: "Start a project",
  blurb: "Websites, branding, and content shaped around your business.",
} as const;

/* ---------- Derived helpers ---------- */

export const whatsappConfigured = /^\d{8,15}$/.test(contact.whatsappNumber);
export const emailConfigured = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.contactEmail);

export const whatsappBaseUrl = whatsappConfigured ? `https://wa.me/${contact.whatsappNumber}` : "";
export const emailHref = emailConfigured ? `mailto:${contact.contactEmail}` : "";

export type ProjectRequest = {
  name: string;
  email: string;
  service: string;
  details: string;
  budget: string;
};

/** Human-readable message assembled from the request form. */
export function formatRequest(request: ProjectRequest) {
  const lines = [
    `Hello ${brand.name},`,
    "",
    `Name: ${request.name}`,
    `Email: ${request.email}`,
    `Service: ${request.service}`,
    "",
    "Project details:",
    request.details,
  ];
  if (request.budget.trim()) lines.push("", `Approximate budget: ${request.budget.trim()}`);
  return lines.join("\n");
}

export function whatsappRequestUrl(request: ProjectRequest) {
  if (!whatsappConfigured) return "";
  return `${whatsappBaseUrl}?text=${encodeURIComponent(formatRequest(request))}`;
}

export function emailRequestUrl(request: ProjectRequest) {
  if (!emailConfigured) return "";
  const subject = encodeURIComponent(`Project request from ${request.name}`);
  return `${emailHref}?subject=${subject}&body=${encodeURIComponent(formatRequest(request))}`;
}
