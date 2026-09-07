import { Globe, LayoutDashboard, Megaphone, LibraryBig } from "lucide-react";
import { copy } from "@/lib/site-config";

const icons = [Globe, LayoutDashboard, Megaphone, LibraryBig];

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-24 border-b border-oc-line bg-white"
    >
      <div className="mx-auto max-w-8xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="max-w-3xl">
          <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-oc-blue-hover">
            {copy.services.eyebrow}
          </span>
          <h2
            id="services-heading"
            className="balance mt-4 text-3xl font-semibold tracking-tight text-oc-ink sm:text-4xl lg:text-5xl"
          >
            {copy.services.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-oc-muted sm:text-lg">
            {copy.services.description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 md:grid-cols-2">
          {copy.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <div
                key={service.name}
                className="group flex min-h-64 flex-col rounded-oc-md border border-oc-line bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-oc-blue hover:shadow-oc-soft sm:p-8"
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
