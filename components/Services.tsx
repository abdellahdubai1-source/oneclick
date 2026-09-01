import { Globe, CalendarClock, TrendingUp } from "lucide-react";
import { copy } from "@/lib/site-config";

const icons = [Globe, CalendarClock, TrendingUp];

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-24 border-b border-oc-line bg-white"
    >
      <div className="mx-auto max-w-8xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="services-heading"
            className="balance text-3xl font-semibold tracking-tight text-oc-ink sm:text-4xl"
          >
            {copy.services.title}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-3">
          {copy.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <div
                key={service.name}
                className="group flex flex-col rounded-oc-md border border-oc-line p-8 transition-colors duration-200 hover:border-oc-blue hover:bg-oc-soft/60"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-oc-sm border border-oc-line bg-oc-soft text-oc-blue transition-colors duration-200 group-hover:border-oc-blue group-hover:bg-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-oc-ink">
                  {service.name}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-oc-muted">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
