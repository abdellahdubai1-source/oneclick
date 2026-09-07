import { ArrowUpRight } from "lucide-react";
import { copy } from "@/lib/site-config";

export function SelectedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-24 border-b border-oc-line bg-oc-soft/45"
    >
      <div className="mx-auto max-w-8xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-oc-blue-hover">
              {copy.work.eyebrow}
            </span>
            <h2
              id="work-heading"
              className="balance mt-4 text-3xl font-semibold tracking-tight text-oc-ink sm:text-4xl lg:text-5xl"
            >
              {copy.work.title}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-oc-muted sm:text-lg lg:col-span-4 lg:col-start-9">
            {copy.work.description}
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {copy.work.items.map((item, index) => (
            <article
              key={item.title}
              className="group rounded-oc-md border border-oc-line bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-oc-blue hover:shadow-oc-soft sm:p-8"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-oc-blue-hover">
                  {item.category}
                </span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-oc-line text-oc-muted transition-colors group-hover:border-oc-blue group-hover:bg-oc-blue group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
              <p className="mt-8 font-mono text-sm text-oc-muted">0{index + 1}</p>
              <h3 className="balance mt-3 text-xl font-semibold tracking-tight text-oc-ink sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-oc-muted">
                {item.description}
              </p>
              <ul className="mt-7 flex flex-wrap gap-2" aria-label="Project capabilities">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-oc-line bg-oc-soft px-3 py-1.5 text-xs font-semibold text-oc-ink/75"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
