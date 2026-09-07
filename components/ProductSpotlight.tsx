import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { productConfig } from "@/lib/site-config";

export function ProductSpotlight() {
  return (
    <section
      id="products"
      aria-labelledby="product-heading"
      className="scroll-mt-24 border-b border-oc-line bg-white"
    >
      <div className="mx-auto max-w-8xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="overflow-hidden rounded-[28px] border border-oc-line bg-oc-ink shadow-oc-soft">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative overflow-hidden p-7 sm:p-10 lg:p-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-oc-blue/25 blur-3xl"
              />
              <div className="relative">
                <span className="inline-flex rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#8bbdff]">
                  New digital product
                </span>
                <h2
                  id="product-heading"
                  className="balance mt-7 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
                >
                  Build a client-acquisition system your team can actually use.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
                  A seven-day implementation playbook for local service businesses using paid ads, focused landing pages, and WhatsApp follow-up.
                </p>
                <Link
                  href="/playbook"
                  className="mt-9 inline-flex items-center gap-2 rounded-oc-sm bg-oc-blue px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-oc-blue-hover"
                >
                  Explore the playbook
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="border-t border-white/10 bg-white/[0.055] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
                Beta access
              </p>
              <div className="mt-3 flex items-end gap-3">
                <span className="text-5xl font-semibold tracking-tight text-white">
                  {productConfig.price}
                </span>
                <span className="pb-1 text-sm font-medium text-white/50">one time</span>
              </div>
              <p className="mt-3 text-sm font-medium text-[#8bbdff]">
                {productConfig.betaLimit}
              </p>

              <ul className="mt-8 space-y-4">
                {[productConfig.modules[0], productConfig.modules[2], productConfig.modules[4], productConfig.bonuses[3]].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/75">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8bbdff]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
