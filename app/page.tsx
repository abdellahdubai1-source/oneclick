import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Check,
  CircleCheck,
  Download,
  FileText,
  MessageCircle,
  MousePointerClick,
  Target,
} from "lucide-react";
import { productConfig, siteConfig } from "@/lib/site-config";

const buyButton =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-oc-blue px-6 py-3 text-center text-sm font-bold text-white shadow-[0_12px_30px_rgba(22,119,255,0.25)] transition hover:-translate-y-0.5 hover:bg-oc-blue-hover focus-visible:outline-white";

const compactBuyButton =
  "inline-flex min-h-10 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-oc-blue px-4 py-2 text-center text-sm font-bold text-white shadow-[0_8px_24px_rgba(22,119,255,0.2)] transition hover:bg-oc-blue-hover focus-visible:outline-white";

const moduleIcons = [Target, MousePointerClick, MessageCircle];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-oc-line/80 bg-white/95 shadow-[0_4px_20px_rgba(6,20,43,0.04)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-6 sm:px-8">
          <a href="#top" aria-label="OneClick home" className="shrink-0">
            <Image
              src="/brand/oneclick-logo-primary-transparent.png"
              alt="OneClick Digital Studio"
              width={181}
              height={60}
              priority
              className="h-auto w-[118px] sm:w-[166px]"
            />
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {productConfig.navigation.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-semibold text-oc-muted transition hover:text-oc-navy">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={productConfig.checkoutUrl}
            target="_blank"
            rel="noreferrer"
            className={compactBuyButton}
          >
            <span className="sm:hidden">Get Playbook</span>
            <span className="hidden sm:inline">Get Playbook — {productConfig.priceDisplay}</span>
          </a>
        </div>
      </header>

      <main id="main">
        <section id="top" className="relative overflow-hidden border-b border-oc-line bg-oc-soft">
          <div className="hero-glow" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-20 md:grid-cols-[1.08fr_0.92fr] md:items-center md:gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14 lg:py-24">
            <div className="min-w-0">
              <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-oc-line bg-white px-3.5 py-2 text-[0.72rem] font-bold uppercase leading-5 tracking-[0.1em] text-oc-blue sm:px-4 sm:text-xs sm:tracking-[0.14em]">
                <BookOpen size={16} aria-hidden="true" />
                A practical playbook for local service businesses
              </div>
              <h1 className="balance max-w-4xl text-[clamp(2.6rem,10vw,4.5rem)] font-black leading-[1.02] tracking-[-0.045em] text-oc-navy md:text-[clamp(3rem,6vw,4.5rem)]">
                Turn paid attention into booked customers.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-oc-muted sm:text-xl sm:leading-8">
                Connect a clear offer, paid ads, a focused landing page, and WhatsApp follow-up—in one simple 7-day implementation plan.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href={productConfig.checkoutUrl} target="_blank" rel="noreferrer" className={buyButton}>
                  Get Beta Access — {productConfig.priceDisplay}
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a href="#inside" className="inline-flex min-h-12 items-center justify-center rounded-full border border-oc-line bg-white px-6 py-3 text-sm font-bold text-oc-navy transition hover:border-oc-blue hover:text-oc-blue">
                  See What&apos;s Inside
                </a>
              </div>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-oc-muted">
                {["7-day implementation", "Downloadable resources", "No live sessions"].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CircleCheck size={17} className="text-oc-blue" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <aside className="relative mx-auto w-full max-w-md overflow-hidden rounded-[28px] border border-oc-line bg-white p-6 shadow-oc-soft sm:rounded-[32px] sm:p-8">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#1677ff] via-[#65a9ff] to-[#06142b]" aria-hidden="true" />
              <div className="flex items-center justify-between gap-4 pt-1">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-oc-muted">One-time payment</p>
                <span className="shrink-0 rounded-full bg-[#eaf3ff] px-3 py-1 text-xs font-extrabold text-oc-blue">BETA</span>
              </div>
              <p className="mt-4 text-5xl font-black tracking-[-0.055em] text-oc-navy sm:text-6xl">{productConfig.priceDisplay}</p>
              <p className="mt-2 text-sm font-semibold text-oc-blue">{productConfig.betaLabel}</p>
              <div className="my-7 h-px bg-oc-line" />
              <ul className="space-y-4">
                {["Complete downloadable playbook", "7-day action plan", "5 ready-to-use bonus resources", "Built for businesses worldwide", "No recurring fee"].map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-semibold text-oc-ink">
                    <Check size={19} className="mt-0.5 shrink-0 text-oc-blue" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={productConfig.checkoutUrl} target="_blank" rel="noreferrer" className={`${buyButton} mt-8 w-full`}>
                Continue on WhatsApp
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <p className="mt-4 text-center text-xs leading-5 text-oc-muted">Continue with OneClick on WhatsApp · Digital product · Results are not guaranteed</p>
            </aside>
          </div>
        </section>

        <section className="bg-oc-navy py-12 text-white">
          <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#86b9ff]">The real problem</p>
            <h2 className="balance mx-auto mt-3 max-w-3xl text-2xl font-extrabold tracking-tight sm:text-3xl">More leads do not fix a broken follow-up system.</h2>
            <div className="mt-8 grid gap-3 text-sm font-semibold text-[#d7e6fa] sm:grid-cols-2 lg:grid-cols-4">
              {["An unclear offer", "Ads without a focused path", "Slow WhatsApp replies", "No consistent follow-up"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="inside" className="scroll-mt-24 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading eyebrow="What's inside" title="One clear system, from offer to follow-up." text="The playbook helps you connect the important steps instead of treating ads, landing pages, and sales conversations as separate tasks." />
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {productConfig.modules.map((module, index) => {
                const Icon = moduleIcons[index % moduleIcons.length];
                return (
                  <article key={module.number} className={`rounded-3xl border border-oc-line bg-white p-6 transition hover:-translate-y-1 hover:shadow-oc-soft ${index === 6 ? "lg:col-start-2" : ""}`}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-black text-oc-blue">{module.number}</span>
                      <Icon size={21} className="text-oc-blue" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 text-xl font-extrabold tracking-tight text-oc-navy">{module.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-oc-muted">{module.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="plan" className="scroll-mt-24 border-y border-oc-line bg-oc-soft py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading eyebrow="The 7-day plan" title="Know exactly what to work on each day." text="A focused sequence designed to move you from scattered ideas to a connected client-acquisition process." />
            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
              {productConfig.days.map(([day, task]) => (
                <div key={day} className="rounded-2xl border border-oc-line bg-white p-5 lg:min-h-40">
                  <span className="text-xs font-black uppercase tracking-[0.12em] text-oc-blue">{day}</span>
                  <p className="mt-8 text-base font-extrabold text-oc-navy">{task}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="bonuses" className="scroll-mt-24 py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-oc-blue">Included bonuses</p>
              <h2 className="balance mt-4 text-4xl font-black tracking-[-0.04em] text-oc-navy sm:text-5xl">Practical tools, not extra theory.</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-oc-muted">Use the templates and trackers while you implement the playbook. Copy, adapt, and put them to work in your business.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {productConfig.bonuses.map((bonus, index) => (
                <div key={bonus} className={`flex min-h-28 items-center gap-4 rounded-3xl border border-oc-line bg-white p-5 shadow-[0_8px_30px_rgba(6,20,43,0.05)] ${index === 4 ? "sm:col-span-2" : ""}`}>
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-oc-soft text-oc-blue">
                    {index === 3 ? <FileText size={21} aria-hidden="true" /> : <Download size={21} aria-hidden="true" />}
                  </span>
                  <span className="font-extrabold text-oc-navy">{bonus}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-oc-line bg-oc-soft py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="rounded-[32px] bg-oc-navy p-7 text-white sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#86b9ff]">Designed for local services</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Built around how your business gets enquiries.</h2>
              </div>
              <div className="mt-8 flex max-w-2xl flex-wrap gap-2 lg:mt-0 lg:justify-end">
                {productConfig.businessTypes.map((type) => (
                  <span key={type} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white">{type}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
            <span className="inline-flex rounded-full bg-oc-soft px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-oc-blue">Beta release · First 25 businesses</span>
            <h2 className="balance mt-6 text-4xl font-black tracking-[-0.04em] text-oc-navy sm:text-6xl">Build your client-acquisition system for {productConfig.priceDisplay}.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-oc-muted">One payment. A downloadable playbook, five practical resources, and a focused seven-day implementation plan.</p>
            <a href={productConfig.checkoutUrl} target="_blank" rel="noreferrer" className={`${buyButton} mt-8`}>
              Get Beta Access — {productConfig.priceDisplay}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <p className="mt-4 text-xs text-oc-muted">One-time payment · Digital product · No subscription</p>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 border-t border-oc-line bg-oc-soft py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <SectionHeading eyebrow="FAQ" title="Questions before you get started." centered />
            <div className="mt-10 space-y-3">
              {productConfig.faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-oc-line bg-white px-5 py-1">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-extrabold text-oc-navy">
                    {faq.question}
                    <span className="text-xl text-oc-blue transition group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="max-w-3xl pb-5 pr-8 text-sm leading-7 text-oc-muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-oc-navy py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-extrabold">A digital product by {siteConfig.brand}</p>
            <a href={`mailto:${siteConfig.email}`} className="mt-2 inline-block text-sm text-[#b8cbe4] hover:text-white">{siteConfig.email}</a>
          </div>
          <p className="max-w-lg text-xs leading-5 text-[#8fa8c7] md:text-right">Educational material only. Results vary and are not guaranteed. OneClick Digital Studio is not affiliated with Meta or WhatsApp.</p>
        </div>
      </footer>
    </>
  );
}

function SectionHeading({ eyebrow, title, text, centered = false }: { eyebrow: string; title: string; text?: string; centered?: boolean }) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="text-sm font-black uppercase tracking-[0.16em] text-oc-blue">{eyebrow}</p>
      <h2 className={`balance mt-4 max-w-3xl text-4xl font-black tracking-[-0.04em] text-oc-navy sm:text-5xl ${centered ? "mx-auto" : ""}`}>{title}</h2>
      {text ? <p className={`mt-5 max-w-2xl text-lg leading-8 text-oc-muted ${centered ? "mx-auto" : ""}`}>{text}</p> : null}
    </div>
  );
}
