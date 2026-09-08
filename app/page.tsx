import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { productConfig, siteConfig } from "@/lib/site-config";

const primaryButton =
  "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-oc-blue px-6 py-3 text-center text-sm font-extrabold text-white shadow-[0_12px_30px_rgba(22,119,255,0.24)] transition hover:-translate-y-0.5 hover:bg-oc-blue-hover focus-visible:ring-4 focus-visible:ring-[#a8ccff] sm:w-auto";

const headerButton =
  "inline-flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-oc-blue px-4 py-2 text-sm font-extrabold text-white transition hover:bg-oc-blue-hover focus-visible:ring-4 focus-visible:ring-[#a8ccff]";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-oc-line/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" aria-label="OneClick home" className="shrink-0">
            <Image
              src="/brand/oneclick-logo-primary-transparent.png"
              alt="OneClick Digital Studio"
              width={181}
              height={60}
              priority
              className="h-auto w-[118px] sm:w-[154px]"
            />
          </a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            <a href="#inside" className="text-sm font-bold text-oc-muted transition hover:text-oc-navy">
              What&apos;s inside
            </a>
            <a href="#faq" className="text-sm font-bold text-oc-muted transition hover:text-oc-navy">
              FAQs
            </a>
          </nav>
          <a href={productConfig.checkoutUrl} target="_blank" rel="noreferrer" className={headerButton}>
            <span className="sm:hidden">Get it — $69</span>
            <span className="hidden sm:inline">Get the Playbook — $69</span>
          </a>
        </div>
      </header>

      <main id="main">
        <section id="top" className="relative overflow-hidden border-b border-oc-line bg-oc-soft">
          <div className="hero-glow" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-6 sm:py-16 md:grid-cols-[1.15fr_0.85fr] md:items-center lg:gap-16 lg:px-8 lg:py-20">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-oc-blue sm:text-sm">
                OneClick · 7-Day Client Acquisition Playbook
              </p>
              <h1 className="balance mt-4 max-w-3xl text-[clamp(2.55rem,9vw,4.5rem)] font-black leading-[1.02] tracking-[-0.05em] text-oc-navy">
                A clear plan to attract and follow up with potential clients.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-oc-muted sm:text-lg sm:leading-8">
                Build your offer, paid ads, landing page, and WhatsApp follow-up with one practical seven-day playbook for local service businesses.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href={productConfig.checkoutUrl} target="_blank" rel="noreferrer" className={primaryButton}>
                  Get the Playbook — {productConfig.priceDisplay}
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a href="#inside" className="inline-flex min-h-12 items-center justify-center px-4 text-sm font-extrabold text-oc-navy transition hover:text-oc-blue">
                  See what&apos;s included ↓
                </a>
              </div>
              <p className="mt-4 text-sm font-semibold text-oc-muted">One-time payment · Order through WhatsApp</p>
            </div>

            <div className="mx-auto w-full max-w-sm md:justify-self-end" aria-label="Playbook preview">
              <div className="rotate-[2deg] rounded-[28px] bg-oc-navy p-7 text-white shadow-[0_28px_70px_rgba(6,20,43,0.2)] sm:p-8">
                <div className="h-1.5 w-16 rounded-full bg-oc-blue" />
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#8fc0ff]">OneClick Digital Studio</p>
                <p className="mt-3 text-3xl font-black leading-tight tracking-[-0.04em]">The 7-Day Client Acquisition Playbook</p>
                <div className="mt-8 grid grid-cols-7 gap-1.5" aria-hidden="true">
                  {productConfig.days.map((day) => (
                    <span key={day.number} className="grid aspect-square place-items-center rounded-lg bg-white/10 text-xs font-bold">
                      {day.number}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm font-semibold text-[#c9dcf5]">Playbook + 5 practical bonus resources</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-oc-navy py-11 text-white sm:py-14">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8fc0ff]">One connected system</p>
            <h2 className="balance mt-3 text-2xl font-black tracking-tight sm:text-3xl">Bring every step together.</h2>
            <p className="mx-auto mt-4 max-w-3xl leading-7 text-[#cfddf0]">
              An ad starts the conversation. A clear offer, focused landing page, and timely follow-up help move it toward a booking. This playbook shows you how to connect the steps.
            </p>
          </div>
        </section>

        <section id="inside" className="scroll-mt-24 py-14 sm:py-18 lg:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-oc-blue">Inside the playbook</p>
              <h2 className="balance mt-3 text-3xl font-black tracking-[-0.04em] text-oc-navy sm:text-5xl">One focus each day.</h2>
              <p className="mt-4 text-base leading-7 text-oc-muted sm:text-lg">Follow seven practical steps, then keep improving at your own pace.</p>
            </div>

            <div className="mt-9 grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
              <ol className="overflow-hidden rounded-3xl border border-oc-line bg-white">
                {productConfig.days.map((day) => (
                  <li key={day.number} className="grid grid-cols-[3.25rem_1fr] gap-3 border-b border-oc-line p-4 last:border-b-0 sm:grid-cols-[4rem_1fr] sm:p-5">
                    <span className="grid size-11 place-items-center rounded-xl bg-oc-soft text-sm font-black text-oc-blue">{day.number}</span>
                    <div>
                      <h3 className="font-extrabold text-oc-navy">{day.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-oc-muted">{day.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <aside className="self-start rounded-3xl bg-oc-soft p-6 sm:p-7">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-oc-blue">Also included</p>
                <h3 className="mt-3 text-2xl font-black tracking-tight text-oc-navy">Five tools to put it into practice.</h3>
                <ul className="mt-6 space-y-4">
                  {productConfig.bonuses.map((bonus) => (
                    <li key={bonus} className="flex gap-3 text-sm font-bold leading-6 text-oc-ink">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-oc-blue text-white">
                        <Check size={13} strokeWidth={3} aria-hidden="true" />
                      </span>
                      {bonus}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 border-t border-oc-line pt-6">
                  <p className="text-sm leading-6 text-oc-muted">
                    Built for cleaning, maintenance, landscaping, detailing, beauty, and other local service businesses.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="border-y border-oc-line bg-oc-soft py-14 sm:py-18">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-oc-blue">Beta · First 25 businesses</span>
            <h2 className="balance mt-5 text-3xl font-black tracking-[-0.04em] text-oc-navy sm:text-5xl">Your next step starts here.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-oc-muted sm:text-lg">
              Get the complete playbook, seven-day action plan, and all five bonus resources.
            </p>
            <p className="mt-6 text-4xl font-black tracking-[-0.05em] text-oc-navy sm:text-5xl">{productConfig.priceDisplay} USD</p>
            <p className="mt-1 text-sm font-bold text-oc-muted">One-time payment</p>
            <a href={productConfig.checkoutUrl} target="_blank" rel="noreferrer" className={`${primaryButton} mt-7`}>
              Get the Playbook on WhatsApp
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <p className="mt-4 text-sm text-oc-muted">Message OneClick to arrange your purchase.</p>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 py-14 sm:py-18 lg:py-20">
          <div className="mx-auto max-w-4xl px-5 sm:px-6">
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-oc-blue">FAQ</p>
              <h2 className="balance mt-3 text-3xl font-black tracking-[-0.04em] text-oc-navy sm:text-5xl">Before you get started.</h2>
            </div>
            <div className="mt-8 space-y-3">
              {productConfig.faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-oc-line bg-white px-5 py-1">
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-4 font-extrabold text-oc-navy">
                    {faq.question}
                    <span className="text-xl text-oc-blue transition group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="max-w-3xl pb-5 pr-7 text-sm leading-7 text-oc-muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-oc-navy py-9 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="font-extrabold">{siteConfig.brand}</p>
            <a href={`mailto:${siteConfig.email}`} className="mt-1 inline-block text-sm text-[#b8cbe4] hover:text-white">{siteConfig.email}</a>
          </div>
          <div className="max-w-xl text-sm leading-6 text-[#aebfd6] md:text-right">
            <p>Built to help local service businesses create a clearer and more consistent client-acquisition system.</p>
            <p className="mt-1 text-xs text-[#829ab9]">OneClick Digital Studio is an independent business and is not affiliated with Meta or WhatsApp.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
