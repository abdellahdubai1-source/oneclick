import { ArrowRight, MessageCircle } from "lucide-react";
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

      <div className="relative mx-auto max-w-8xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12 lg:pb-36 lg:pt-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-oc-line bg-oc-soft px-4 py-1.5 text-[13px] font-semibold tracking-wide text-oc-blue-hover">
            <span className="h-1.5 w-1.5 rounded-full bg-oc-blue" aria-hidden="true" />
            {copy.hero.eyebrow}
          </div>

          <h1
            id="hero-heading"
            className="balance mt-7 text-4xl font-semibold leading-[1.1] tracking-tight text-oc-ink sm:text-5xl lg:text-6xl"
          >
            {copy.hero.headline}
          </h1>

          <p className="balance mt-6 max-w-xl text-lg leading-relaxed text-oc-muted sm:text-xl">
            {copy.hero.supporting}
          </p>

          <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:justify-center">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-oc-sm bg-oc-ink px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-oc-blue sm:w-auto"
            >
              <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
              {copy.hero.primaryCta}
            </a>
            <a
              href="#services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-oc-sm border border-oc-line px-7 py-4 text-[15px] font-semibold text-oc-ink transition-colors hover:border-oc-blue hover:text-oc-blue sm:w-auto"
            >
              {copy.hero.secondaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <p className="mt-8 text-sm font-medium text-oc-muted">
            {copy.hero.trustLine}
          </p>
        </div>
      </div>
    </section>
  );
}
