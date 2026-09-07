import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Clock3,
  Download,
  Megaphone,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { productConfig, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "7-Day Client Acquisition Playbook",
  description:
    "A practical seven-day client-acquisition playbook for local service businesses using paid ads, landing pages, and WhatsApp follow-up.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/playbook`,
  },
  openGraph: {
    title: `${productConfig.name} | ${siteConfig.brand}`,
    description:
      "Build a clearer system for attracting, following up, and converting local-service leads.",
    url: `${siteConfig.siteUrl}/playbook`,
    type: "website",
  },
};

const problems = [
  "Ads bring enquiries, but the offer does not feel clear or urgent.",
  "Leads arrive on WhatsApp, then disappear inside busy conversations.",
  "Follow-up depends on memory instead of a repeatable process.",
  "The team sees activity, but cannot tell what is producing customers.",
];

const roadmap = [
  ["Day 1", "Offer", "Clarify the service, promise, audience, and next action."],
  ["Day 2", "Audience", "Choose who the campaign should reach and why they should care."],
  ["Day 3", "Campaign", "Build the paid-ad message, creative angles, and simple budget plan."],
  ["Day 4", "Landing page", "Create a focused path from click to qualified enquiry."],
  ["Day 5", "WhatsApp", "Respond, qualify, and guide the lead toward the next step."],
  ["Day 6", "Follow-up", "Use a practical cadence without pressure or fake urgency."],
  ["Day 7", "Review", "Track the core numbers and decide what to improve next."],
];

const faqs = [
  {
    question: "Is this only for cleaning companies?",
    answer:
      "No. It is designed for local service businesses such as cleaning, maintenance, detailing, landscaping, pest control, beauty, and related appointment or quotation-based services.",
  },
  {
    question: "Do I need to be a content creator?",
    answer:
      "No. The system focuses on a clear offer, paid distribution, a focused landing experience, and a consistent WhatsApp follow-up process.",
  },
  {
    question: "Is this a course or a live session?",
    answer:
      "It is a downloadable implementation playbook with templates, worksheets, checklists, and a lead-tracking dashboard. You can work through it at your own pace.",
  },
  {
    question: "Does the playbook guarantee results?",
    answer:
      "No. Results depend on the offer, market, budget, execution, service quality, and many other factors. The product provides a practical framework and tools, not an income guarantee.",
  },
];

export default function PlaybookPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="relative overflow-hidden border-b border-oc-line bg-oc-navy">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(22,119,255,0.3),transparent_32%),radial-gradient(circle_at_90%_75%,rgba(22,119,255,0.14),transparent_30%)]"
          />
          <div className="relative mx-auto grid max-w-8xl gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-16 lg:px-12 lg:pb-32 lg:pt-24">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition-colors hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to OneClick
              </Link>

              <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#91c3ff]">
                <Clock3 className="h-4 w-4" aria-hidden="true" />
                Seven-day implementation playbook
              </div>

              <h1 className="balance mt-7 max-w-4xl text-4xl font-semibold leading-[1.06] tracking-[-0.035em] text-white sm:text-5xl lg:text-[4.25rem]">
                Turn paid attention into a clear path to booked customers.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65 sm:text-xl">
                {productConfig.name} helps local service businesses connect the offer, paid ads, landing page, WhatsApp response, and follow-up into one practical system.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={productConfig.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-oc-sm bg-oc-blue px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-oc-blue-hover"
                >
                  Get Beta Access — {productConfig.price}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#inside"
                  className="inline-flex items-center justify-center rounded-oc-sm border border-white/20 px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
                >
                  See what is included
                </a>
              </div>

              <p className="mt-6 text-sm font-medium text-white/50">
                {productConfig.priceLabel} · {productConfig.betaLimit} · English edition
              </p>
            </div>

            <aside className="rounded-[28px] border border-white/10 bg-white/[0.07] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#91c3ff]">
                The complete system
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  [Megaphone, "Attract", "Offer + paid campaign"],
                  [Download, "Capture", "Landing page + enquiry flow"],
                  [MessageCircle, "Convert", "WhatsApp + follow-up"],
                  [ShieldCheck, "Improve", "Tracker + weekly review"],
                ].map(([Icon, title, detail]) => {
                  const ItemIcon = Icon as typeof Megaphone;
                  return (
                    <div
                      key={String(title)}
                      className="grid grid-cols-[auto_1fr] items-center gap-4 rounded-oc-sm border border-white/10 bg-oc-navy/55 p-4"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-oc-sm bg-oc-blue text-white">
                        <ItemIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">{String(title)}</p>
                        <p className="mt-1 text-xs text-white/45">{String(detail)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-sm leading-relaxed text-white/55">
                  Built for {productConfig.audience}
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-b border-oc-line bg-white">
          <div className="mx-auto max-w-8xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-oc-blue-hover">
                  Why this exists
                </span>
                <h2 className="balance mt-4 text-3xl font-semibold tracking-tight text-oc-ink sm:text-4xl lg:text-5xl">
                  More leads do not fix a broken follow-up system.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-oc-muted sm:text-lg">
                  The playbook helps the whole journey work together—from the first ad impression to the next sales action.
                </p>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
                {problems.map((problem) => (
                  <li key={problem} className="rounded-oc-md border border-oc-line bg-oc-soft/55 p-6 text-[15px] font-medium leading-relaxed text-oc-ink">
                    <span className="mb-5 block h-2 w-2 rounded-full bg-oc-blue" aria-hidden="true" />
                    {problem}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="inside" className="scroll-mt-24 border-b border-white/10 bg-oc-navy">
          <div className="mx-auto max-w-8xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
            <div className="max-w-3xl">
              <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#91c3ff]">
                Inside the playbook
              </span>
              <h2 className="balance mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Seven focused modules. One working customer journey.
              </h2>
            </div>

            <ol className="mt-14 grid gap-px overflow-hidden rounded-oc-md border border-white/10 bg-white/10 md:grid-cols-2">
              {productConfig.modules.map((module, index) => (
                <li key={module} className="flex gap-5 bg-oc-navy p-6 sm:p-7">
                  <span className="font-mono text-sm font-semibold text-[#91c3ff]">0{index + 1}</span>
                  <span className="text-base font-medium leading-relaxed text-white/85">{module}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-b border-oc-line bg-oc-soft/45">
          <div className="mx-auto max-w-8xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
              <div>
                <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-oc-blue-hover">
                  Implementation roadmap
                </span>
                <h2 className="balance mt-4 text-3xl font-semibold tracking-tight text-oc-ink sm:text-4xl">
                  Know exactly what to work on each day.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-oc-muted">
                  Each step creates an input for the next, so the campaign and follow-up are built as one system.
                </p>
              </div>
              <ol className="divide-y divide-oc-line border-y border-oc-line">
                {roadmap.map(([day, title, detail]) => (
                  <li key={day} className="grid gap-3 py-5 sm:grid-cols-[5rem_8rem_1fr] sm:items-start sm:gap-5">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wide text-oc-blue-hover">{day}</span>
                    <span className="text-sm font-semibold text-oc-ink">{title}</span>
                    <span className="text-sm leading-relaxed text-oc-muted">{detail}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="border-b border-oc-line bg-white">
          <div className="mx-auto grid max-w-8xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_0.8fr] lg:items-start lg:gap-20 lg:px-12">
            <div>
              <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-oc-blue-hover">Practical bonuses</span>
              <h2 className="balance mt-4 text-3xl font-semibold tracking-tight text-oc-ink sm:text-4xl lg:text-5xl">
                Start with the templates, then make them yours.
              </h2>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2">
                {productConfig.bonuses.map((bonus) => (
                  <li key={bonus} className="flex items-start gap-3 rounded-oc-sm border border-oc-line p-4 text-[15px] font-medium text-oc-ink">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-oc-blue" aria-hidden="true" />
                    {bonus}
                  </li>
                ))}
              </ul>
            </div>

            <aside id="purchase" className="rounded-[28px] border border-oc-line bg-oc-soft p-7 shadow-oc-soft sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-oc-blue-hover">Beta offer</p>
              <div className="mt-4 flex items-end gap-3">
                <span className="text-5xl font-semibold tracking-tight text-oc-ink">{productConfig.price}</span>
                <span className="pb-1 text-sm font-medium text-oc-muted">one-time payment</span>
              </div>
              <p className="mt-3 text-sm font-semibold text-oc-blue-hover">{productConfig.betaLimit}</p>
              <ul className="mt-8 space-y-3">
                {["Downloadable English playbook", "All five practical bonuses", "Future Beta v1 improvements"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-oc-ink/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-oc-blue" strokeWidth={3} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={productConfig.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-oc-sm bg-oc-ink px-6 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-oc-blue"
              >
                Get Beta Access — {productConfig.price}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <p className="mt-4 text-center text-xs leading-relaxed text-oc-muted">
                Digital product. Educational use only. Results are not guaranteed.
              </p>
            </aside>
          </div>
        </section>

        <section className="border-b border-oc-line bg-white">
          <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
            <div className="text-center">
              <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-oc-blue-hover">Questions</span>
              <h2 className="balance mt-4 text-3xl font-semibold tracking-tight text-oc-ink sm:text-4xl">Before you buy</h2>
            </div>
            <div className="mt-12 divide-y divide-oc-line border-y border-oc-line">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-oc-ink">
                    {faq.question}
                    <span className="text-xl font-normal text-oc-blue transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-4 max-w-3xl pr-10 text-[15px] leading-relaxed text-oc-muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-oc-navy">
          <div className="mx-auto flex max-w-8xl flex-col items-start justify-between gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center lg:px-12">
            <div>
              <h2 className="balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">Build the system. Then improve the numbers.</h2>
              <p className="mt-4 text-base text-white/60">Get the complete Beta package for one payment.</p>
            </div>
            <a
              href={productConfig.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-oc-sm bg-oc-blue px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-oc-blue-hover"
            >
              Get Beta Access — {productConfig.price}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
