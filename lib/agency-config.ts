export const campaign = {
  start: Date.parse("2026-09-16T00:00:00+04:00"),
  end: Date.parse("2026-10-01T00:00:00+04:00"),
  deadline: "30 September 2026, 11:59 PM UAE",
} as const;

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

export const packages = [
  {
    name: "Starter",
    description: "A simple, professional start.",
    price: "600",
    features: [
      "Up to 5 pages",
      "Mobile-friendly design",
      "Business & service information",
      "WhatsApp button + basic SEO",
    ],
    scope: "Public website · No admin dashboard",
    cta: "Choose Starter",
  },
  {
    name: "Business",
    description: "More space for your business.",
    price: "1,500",
    features: [
      "Up to 8 custom-designed pages",
      "Inquiry form + WhatsApp",
      "Mobile-friendly + basic SEO",
      "30 days of post-launch support",
    ],
    scope: "Public website · No admin dashboard",
    cta: "Choose Business",
  },
  {
    name: "Business System",
    description: "Your website. Your control.",
    price: "2,000",
    features: [
      "Public website + admin dashboard",
      "Manage one agreed content type",
      "Inquiries + basic SEO",
      "60 days of post-launch support",
    ],
    scope: "Booking, payments & accounts quoted separately",
    cta: "Discuss Your System",
  },
] as const;
