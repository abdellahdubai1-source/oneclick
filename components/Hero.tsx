import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { copy } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-oc-line"
    >
      {/* Restrained background grid — subtle structure, not decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,var(--oc-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--oc-line)_1px,transparent_1px)] [background-size:56px_56px] opacity-[0.35] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)]"
      />

      <div className="relative mx-auto grid max-w-8xl gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16 lg:px-12 lg:pb-32 lg:pt-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-oc-line bg-oc-soft px-4 py-1.5 text-[13px] font-semibold tracking-wide text-oc-blue-hover">
            <span className="h-1.5 w-1.5 rounded-full bg-oc-blue" aria-hidden="true" />
            {copy.hero.eyebrow}
          </div>

          <h1
            id="hero-heading"
            className="balance mt-7 text-4xl font-semibold leading-[1.06] tracking-[-0.035em] text-oc-ink sm:text-5xl lg:text-[4.4rem]"
          >
            {copy.hero.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-oc-muted sm:text-xl">
            {copy.hero.supporting}
          </p>

          <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-oc-sm bg-oc-ink px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-oc-blue sm:w-auto"
            >
              <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
              {copy.hero.primaryCta}
            </a>
            <Link
              href="/playbook"
              className="inline-flex w-full items-center justify-center gap-2 rounded-oc-sm border border-oc-line px-7 py-4 text-[15px] font-semibold text-oc-ink transition-colors hover:border-oc-blue hover:text-oc-blue sm:w-auto"
            >
              {copy.hero.secondaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <p className="mt-8 text-sm font-medium text-oc-muted">
            {copy.hero.trustLine}
          </p>
        </div>

        <div className="relative lg:pl-4" aria-label="OneClick growth system">
          <div className="rounded-[28px] border border-white/10 bg-oc-navy p-5 shadow-[0_28px_90px_rgba(6,20,43,0.22)] sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#79b2ff]">
                  Growth system
                </p>
                <p className="mt-1 text-sm font-medium text-white/55">
                  One connected customer journey
                </p>
              </div>
              <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                Active
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {[
                ["01", "Attract", "Campaign + content"],
                ["02", "Convert", "Website + clear offer"],
                ["03", "Follow up", "WhatsApp + lead tracking"],
              ].map(([number, title, detail]) => (
                <div
                  key={number}
                  className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-oc-sm border border-white/10 bg-white/[0.055] px-4 py-4"
                >
                  <span className="font-mono text-xs font-semibold text-[#79b2ff]">
                    {number}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-1 text-xs text-white/45">{detail}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/25" aria-hidden="true" />
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                ["Clear", "Offer"],
                ["Fast", "Response"],
                ["Owned", "System"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-oc-sm bg-oc-blue px-3 py-4 text-center">
                  <p className="text-sm font-semibold text-white">{value}</p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-white/65">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
