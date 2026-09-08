export const siteConfig = {
  brand: "OneClick Digital Studio",
  domain: "oneclickbyabdellah.com",
  siteUrl: "https://oneclickbyabdellah.com",
  email: "hello@oneclickbyabdellah.com",
} as const;

export const productConfig = {
  name: "The 7-Day Client Acquisition Playbook",
  price: 69,
  currency: "USD",
  priceDisplay: "$69",
  description:
    "A practical seven-day playbook that helps local service businesses connect their offer, paid ads, landing page, WhatsApp replies, and follow-up.",
  // Replace only this value with your Whop checkout URL when it is ready.
  checkoutUrl:
    "https://wa.me/971567654647?text=Hello%20OneClick%20Digital%20Studio%2C%20I%20want%20to%20get%20the%207-Day%20Client%20Acquisition%20Playbook%20Beta%20for%20%2469.",
  days: [
    { number: "01", title: "Shape your offer", text: "Make your service easy to understand." },
    { number: "02", title: "Choose your audience", text: "Focus on the people your service fits." },
    { number: "03", title: "Write your ads", text: "Turn your offer into clear, compelling messages." },
    { number: "04", title: "Plan your landing page", text: "Give interested visitors a clear next step." },
    { number: "05", title: "Prepare WhatsApp replies", text: "Qualify enquiries and guide the conversation." },
    { number: "06", title: "Set up follow-up", text: "Stay in touch with interested prospects." },
    { number: "07", title: "Track and improve", text: "Review your numbers and decide what to refine." },
  ],
  bonuses: [
    "Paid-ad copy templates",
    "WhatsApp message swipe file",
    "Offer-builder worksheet",
    "Lead tracker spreadsheet",
    "Daily implementation checklist",
  ],
  faqs: [
    {
      question: "Who is this for?",
      answer:
        "Local service businesses that receive enquiries or bookings, including cleaning, maintenance, landscaping, detailing, beauty services, and similar businesses worldwide.",
    },
    {
      question: "What exactly will I receive?",
      answer:
        "A downloadable playbook, a seven-day action plan, and five practical bonus resources. You can work through the material independently, at your own pace.",
    },
    {
      question: "What results can I expect?",
      answer:
        "By completing the seven-day plan, you will build a clearer offer, focused ad messaging, a simple enquiry path, and a consistent follow-up system. Your progress will grow with the quality of your offer, implementation, and consistency.",
    },
  ],
} as const;
