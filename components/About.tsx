import { copy, siteConfig } from "@/lib/site-config";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 border-b border-oc-line bg-oc-soft/50"
    >
      <div className="mx-auto max-w-8xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <span className="text-[13px] font-semibold uppercase tracking-widest text-oc-blue-hover">
              About
            </span>
            <h2
              id="about-heading"
              className="balance mt-4 text-3xl font-semibold tracking-tight text-oc-ink sm:text-4xl"
            >
              {copy.about.title}
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-lg leading-relaxed text-oc-ink/80 sm:text-xl">
              {copy.about.body}
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-oc-line pt-8 sm:grid-cols-2">
              <div>
                <dt className="text-[13px] font-semibold uppercase tracking-widest text-oc-muted">
                  Based in
                </dt>
                <dd className="mt-2 text-base font-medium text-oc-ink">
                  {siteConfig.location}
                </dd>
              </div>
              <div>
                <dt className="text-[13px] font-semibold uppercase tracking-widest text-oc-muted">
                  What we do
                </dt>
                <dd className="mt-2 text-base font-medium text-oc-ink">
                  {siteConfig.descriptor}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
