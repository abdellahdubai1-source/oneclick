import { copy } from "@/lib/site-config";

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="scroll-mt-24 border-b border-oc-line bg-oc-soft/50"
    >
      <div className="mx-auto max-w-8xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="process-heading"
            className="balance text-3xl font-semibold tracking-tight text-oc-ink sm:text-4xl"
          >
            {copy.process.title}
          </h2>
        </div>

        <ol className="relative mt-16 grid grid-cols-1 gap-10 sm:mt-20 md:grid-cols-3 md:gap-8">
          {/* Connecting line — desktop only, sits behind the numbers */}
          <div
            aria-hidden="true"
            className="absolute top-6 left-0 right-0 hidden h-px bg-oc-line md:block"
            style={{ marginInline: "16.6%" }}
          />

          {copy.process.steps.map((step) => (
            <li key={step.number} className="relative flex flex-col items-center text-center md:items-start md:text-left">
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-oc-line bg-white text-[15px] font-semibold text-oc-blue-hover">
                {step.number}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-oc-ink">
                {step.name}
              </h3>
              <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-oc-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
