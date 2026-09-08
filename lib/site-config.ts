export const siteConfig = {
  brand: "OneClick Digital Studio",
  domain: "oneclickbyabdellah.com",
  siteUrl: "https://oneclickbyabdellah.com",
  email: "hello@oneclickbyabdellah.com",
  whatsappDisplay: "+971 56 765 4647",
} as const;

export const productConfig = {
  name: "The 7-Day Client Acquisition Playbook",
  shortName: "7-Day Playbook",
  price: 69,
  currency: "USD",
  priceDisplay: "$69",
  priceLabel: "$69 one-time",
  betaLabel: "Beta release · First 25 businesses",
  description:
    "A practical implementation playbook for local service businesses that want to turn paid attention into qualified enquiries and booked customers.",
  // Replace only this URL with your Whop checkout link before the paid launch.
  checkoutUrl:
    "https://wa.me/971567654647?text=Hello%20OneClick%20Digital%20Studio%2C%20I%20want%20to%20get%20the%207-Day%20Client%20Acquisition%20Playbook%20Beta%20for%20%2469.",
  navigation: [
    { label: "Inside", href: "#inside" },
    { label: "7-Day Plan", href: "#plan" },
    { label: "Bonuses", href: "#bonuses" },
    { label: "FAQ", href: "#faq" },
  ],
  modules: [
    {
      number: "01",
      title: "Build a clear service offer",
      text: "Turn a broad service into a focused offer customers can understand quickly.",
    },
    {
      number: "02",
      title: "Choose the right audience",
      text: "Define who the campaign is for and the problem your message should lead with.",
    },
    {
      number: "03",
      title: "Create paid-ad messaging",
      text: "Use practical hooks, copy structures, and creative angles without relying on creators.",
    },
    {
      number: "04",
      title: "Focus the landing page",
      text: "Build a simple enquiry path that removes distractions and makes the next step clear.",
    },
    {
      number: "05",
      title: "Respond on WhatsApp",
      text: "Reply quickly, qualify enquiries, and move good prospects toward a booking.",
    },
    {
      number: "06",
      title: "Follow up consistently",
      text: "Use a short follow-up cadence so interested prospects are not quietly lost.",
    },
    {
      number: "07",
      title: "Track and improve",
      text: "Read a few useful numbers, identify the weak step, and improve the system.",
    },
  ],
  days: [
    ["Day 1", "Offer"],
    ["Day 2", "Audience"],
    ["Day 3", "Paid Ads"],
    ["Day 4", "Landing Page"],
    ["Day 5", "WhatsApp"],
    ["Day 6", "Follow-Up"],
    ["Day 7", "Review"],
  ],
  bonuses: [
    "Paid-ad copy templates",
    "WhatsApp message swipe file",
    "Offer-builder worksheet",
    "Lead tracker spreadsheet",
    "Daily implementation checklist",
  ],
  businessTypes: [
    "Cleaning",
    "Maintenance",
    "Landscaping",
    "Pest control",
    "Auto detailing",
    "Beauty & wellness",
    "Other local services",
  ],
  faqs: [
    {
      question: "Is this only for cleaning companies?",
      answer:
        "No. The examples are designed for local service businesses such as cleaning, maintenance, landscaping, pest control, detailing, beauty, and similar appointment or quote-based services.",
    },
    {
      question: "Do I need a content creator?",
      answer:
        "No. The playbook focuses on clear offers and paid-ad creative you can produce without depending on a creator partnership.",
    },
    {
      question: "What exactly will I receive?",
      answer:
        "You will receive a downloadable playbook plus practical templates, a worksheet, a lead-tracking spreadsheet, and an implementation checklist. It is not a live course.",
    },
    {
      question: "Is the $69 a subscription?",
      answer:
        "No. The Beta price is a one-time payment for the digital product. There is no recurring subscription.",
    },
    {
      question: "Does this guarantee customers?",
      answer:
        "No. Results depend on your market, offer, budget, execution, and follow-up. The playbook gives you a structured process, not a guarantee of revenue or customers.",
    },
  ],
} as const;
