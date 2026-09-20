export const campaign = {
  start: Date.parse("2026-09-16T00:00:00+04:00"),
  end: Date.parse("2026-10-01T00:00:00+04:00"),
  deadline: "30 September 2026, 11:59 PM UAE time",
} as const;

export const contactForPricing = "Contact us for current pricing";

export function campaignState(now: number) {
  return now < campaign.start
    ? "upcoming"
    : now < campaign.end
      ? "active"
      : "expired";
}

export function remainingTime(now: number) {
  const target = now < campaign.start ? campaign.start : campaign.end;
  const seconds = Math.max(0, Math.ceil((target - now) / 1000));
  return [
    Math.floor(seconds / 86400),
    Math.floor(seconds / 3600) % 24,
    Math.floor(seconds / 60) % 60,
    seconds % 60,
  ];
}

export function whatsapp(
  message = "Hi Oneclick! I'd like to discuss a website for my business.",
) {
  return `https://wa.me/971567654647?text=${encodeURIComponent(message)}`;
}

export type PackageId = "starter" | "business" | "system";

export const packages = [
  {
    id: "starter",
    name: "Starter",
    tagline: "A simple, professional start.",
    price: "600",
    regularPrice: "2,400",
    discount: "75% OFF",
    priceNote: "one-time during the offer",
    features: [
      "Up to 5 pages",
      "Mobile-friendly public website",
      "Business and service information",
      "WhatsApp button",
      "Basic SEO",
    ],
    excludes: "No admin dashboard",
    cta: "Get Starter",
  },
  {
    id: "business",
    name: "Business",
    tagline: "More room for your business.",
    price: "1,500",
    priceNote: "one-time",
    features: [
      "Up to 8 custom pages",
      "Inquiry form",
      "WhatsApp integration",
      "Mobile-friendly design",
      "Basic SEO",
      "30 days of support",
    ],
    excludes: "No admin dashboard",
    cta: "Get Business",
  },
  {
    id: "system",
    name: "Business System",
    tagline: "Your website, under your control.",
    price: "2,000",
    pricePrefix: "Starting from",
    priceNote: "starting price",
    features: [
      "Public website",
      "Admin dashboard",
      "Manage one agreed content type",
      "Inquiry management",
      "Basic SEO",
      "60 days of support",
    ],
    excludes: "Online payment is not included",
    cta: "Get Business System",
  },
] as const;

/** Package-specific WhatsApp text. Promotional wording exists only while the offer is active. */
export function packageMessage(id: PackageId, offerActive: boolean) {
  switch (id) {
    case "starter":
      return offerActive
        ? "Hi Oneclick! I'm interested in the Starter website package (AED 600 one-time during the offer). Can we discuss my business?"
        : "Hi Oneclick! I'm interested in the Starter website package. Could you share the current pricing?";
    case "business":
      return "Hi Oneclick! I'm interested in the Business website package (AED 1,500 one-time). Can we discuss my business?";
    case "system":
      return "Hi Oneclick! I'm interested in the Business System package (starting from AED 2,000). Can we discuss my business?";
  }
}
