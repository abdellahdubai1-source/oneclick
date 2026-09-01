import { Check } from "lucide-react";
import { copy } from "@/lib/site-config";

export function WhyOneClick() {
  return (
    <section
      aria-labelledby="why-heading"
      className="scroll-mt-24 border-b border-oc-line bg-white"
    >
      <div className="mx-auto max-w-8xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="why-heading"
            className="balance text-3xl font-semibold tracking-tight text-oc-ink sm:text-4xl"
          >
            {copy.whyOneClick.title}
          </h2>
        </div>

        <ul className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-5 sm:mt-16 sm:grid-cols-2">
          {copy.whyOneClick.points.map((point, index) => (
            <li
              key={point}
              className={`flex items-start gap-3 border-b border-oc-line pb-5 ${
                index === copy.whyOneClick.points.length - 1 &&
                copy.whyOneClick.points.length % 2 !== 0
                  ? "sm:col-span-2"
                  : ""
              }`}
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-oc-soft text-oc-blue">
                <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
              </span>
              <span className="text-[15px] font-medium leading-relaxed text-oc-ink">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
