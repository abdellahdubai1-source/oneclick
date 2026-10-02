"use client";

import { services, type ServiceValue } from "@/lib/studio-config";
import { ArrowUpRight } from "./icons";

export function Services({ onOpenModal }: { onOpenModal: (service: ServiceValue) => void }) {
  return (
    <section className="st-section st-services" id="services" aria-labelledby="services-title">
      <div className="st-shell">
        <div className="st-section-head" data-reveal>
          <p className="st-eyebrow">Services</p>
          <h2 id="services-title" className="st-h2">
            What your business needs next.
          </h2>
        </div>

        <ul className="st-service-list" data-reveal>
          {services.map((service) => (
            <li key={service.value}>
              <button
                type="button"
                className="st-service-row"
                onClick={() => onOpenModal(service.value)}
                aria-haspopup="dialog"
                aria-label={`${service.name}: start a project request`}
              >
                <span className="st-service-num" aria-hidden="true">
                  {service.number}
                </span>
                <span className="st-service-main">
                  <span className="st-service-name">{service.name}</span>
                  <span className="st-service-text">{service.text}</span>
                </span>
                <span className="st-service-arrow" aria-hidden="true">
                  <ArrowUpRight />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
