import { MessageCircle, Mail } from "lucide-react";
import { copy, siteConfig } from "@/lib/site-config";

export function FinalCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="final-cta-heading"
      className="scroll-mt-24 bg-oc-navy"
    >
      <div className="mx-auto max-w-8xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2
            id="final-cta-heading"
            className="balance text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            {copy.finalCta.headline}
          </h2>
          <p className="balance mt-5 max-w-lg text-lg leading-relaxed text-white/65">
            {copy.finalCta.text}
          </p>

          <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:justify-center">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-oc-sm bg-oc-blue-hover px-7 py-4 text-[15px] font-semibold text-white transition-[filter] hover:brightness-90 sm:w-auto"
            >
              <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
              {copy.finalCta.primaryCta}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-oc-sm border border-white/20 px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5 sm:w-auto"
            >
              <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
              {copy.finalCta.secondaryCta}
            </a>
          </div>

          <p className="mt-8 text-sm font-medium text-white/65">
            {siteConfig.whatsappDisplay} &middot; {siteConfig.location}
          </p>
        </div>
      </div>
    </section>
  );
}
