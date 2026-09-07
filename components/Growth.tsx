import { ArrowRight, Check } from "lucide-react";
import { copy } from "@/lib/site-config";

export function Growth() {
  return (
    <section
      id="growth"
      aria-labelledby="growth-heading"
      className="scroll-mt-24 overflow-hidden border-b border-white/10 bg-oc-navy"
    >
      <div className="mx-auto max-w-8xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
          <div>
            <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#79b2ff]">
              {copy.growth.eyebrow}
            </span>
            <h2
              id="growth-heading"
              className="balance mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {copy.growth.title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              {copy.growth.description}
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {copy.growth.capabilities.map((capability) => (
              <li
                key={capability}
                className="flex items-start gap-3 rounded-oc-sm border border-white/10 bg-white/[0.05] px-4 py-4 text-[15px] font-medium text-white/85"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-oc-blue text-white">
                  <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                </span>
                {capability}
              </li>
            ))}
          </ul>
        </div>

        <ol className="mt-16 grid overflow-hidden rounded-oc-md border border-white/10 bg-white/[0.04] sm:mt-20 md:grid-cols-5">
          {copy.growth.stages.map((stage, index) => (
            <li
              key={stage.number}
              className="relative border-b border-white/10 p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-[#79b2ff]">
                  {stage.number}
                </span>
                {index < copy.growth.stages.length - 1 ? (
                  <ArrowRight className="h-4 w-4 text-white/25" aria-hidden="true" />
                ) : null}
              </div>
              <h3 className="mt-8 text-lg font-semibold text-white">
                {stage.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {stage.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
