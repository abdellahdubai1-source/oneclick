"use client";

import { useEffect, useState } from "react";
import { Check, Clock3, MessageCircle } from "lucide-react";
import { offerConfig } from "@/lib/site-config";

type TimeLeft = {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculateTimeLeft(): TimeLeft {
  const total = Math.max(
    0,
    new Date(offerConfig.deadline).getTime() - Date.now(),
  );

  return {
    total,
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

function formatTime(value: number | undefined) {
  return value === undefined ? "--" : String(value).padStart(2, "0");
}

export function LimitedOffer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const initialTimeLeft = calculateTimeLeft();
    setTimeLeft(initialTimeLeft);

    if (initialTimeLeft.total === 0) return;

    const timer = window.setInterval(() => {
      const nextTimeLeft = calculateTimeLeft();
      setTimeLeft(nextTimeLeft);

      if (nextTimeLeft.total === 0) {
        window.clearInterval(timer);
      }
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const isReady = timeLeft !== null;
  const isExpired = isReady && timeLeft.total === 0;
  const units = [
    { label: "Days", value: timeLeft?.days },
    { label: "Hours", value: timeLeft?.hours },
    { label: "Minutes", value: timeLeft?.minutes },
    { label: "Seconds", value: timeLeft?.seconds },
  ];

  return (
    <section
      id="offer"
      aria-labelledby="offer-heading"
      className="relative scroll-mt-24 overflow-hidden border-b border-white/10 bg-oc-navy"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(22,119,255,0.28),transparent_32%),radial-gradient(circle_at_92%_82%,rgba(22,119,255,0.14),transparent_30%)]"
      />

      <div className="relative mx-auto grid max-w-8xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16 lg:px-12">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-oc-blue/40 bg-oc-blue/15 px-4 py-2 text-sm font-semibold text-[#80b7ff]">
            <Clock3 className="h-4 w-4" aria-hidden="true" />
            5-Day Website Offer
          </div>

          <h2
            id="offer-heading"
            className="balance mt-6 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Launch your website for half the price.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Choose the package that fits your business and secure the offer
            before the countdown ends.
          </p>

          <div
            role="timer"
            aria-live="off"
            aria-busy={!isReady}
            aria-label={
              isExpired
                ? "The offer has ended"
                : "Time remaining for the five-day website offer"
            }
            className="mt-8 grid grid-cols-4 gap-2 sm:max-w-lg sm:gap-3"
          >
            {units.map((unit) => (
              <div
                key={unit.label}
                className="rounded-oc-sm border border-white/15 bg-white/[0.07] px-2 py-4 text-center backdrop-blur-sm sm:px-4"
              >
                <span className="block font-mono text-2xl font-semibold tabular-nums text-white sm:text-3xl">
                  {formatTime(unit.value)}
                </span>
                <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.12em] text-white/55 sm:text-xs">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm font-medium text-white/60">
            {isExpired
              ? "This limited-time offer has ended."
              : `Offer ends ${offerConfig.deadlineLabel}.`}
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-2">
          {offerConfig.packages.map((packageItem) => (
            <article
              key={packageItem.name}
              className={`relative flex h-full flex-col rounded-oc-md border bg-white p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:p-8 ${
                packageItem.featured
                  ? "border-oc-blue"
                  : "border-white/10"
              }`}
            >
              {packageItem.featured ? (
                <span className="absolute right-5 top-0 -translate-y-1/2 rounded-full bg-oc-blue px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              ) : null}

              <div>
                <p className="text-sm font-semibold text-oc-blue">
                  {packageItem.saving}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-oc-ink">
                  {packageItem.name}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-oc-muted">
                  {packageItem.description}
                </p>
              </div>

              <div className="mt-6 flex items-end gap-3 border-y border-oc-line py-5">
                <span className="text-3xl font-semibold tracking-tight text-oc-ink">
                  {packageItem.offerPrice}
                </span>
                <span className="pb-1 text-sm font-medium text-oc-muted line-through decoration-oc-muted/70">
                  {packageItem.originalPrice}
                </span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {packageItem.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-relaxed text-oc-ink/80"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-oc-soft text-oc-blue">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {!isReady ? (
                <span
                  aria-disabled="true"
                  className="mt-7 inline-flex w-full cursor-wait items-center justify-center rounded-oc-sm bg-oc-soft px-5 py-3.5 text-sm font-semibold text-oc-muted"
                >
                  Checking Offer…
                </span>
              ) : isExpired ? (
                <span className="mt-7 inline-flex w-full cursor-not-allowed items-center justify-center rounded-oc-sm bg-oc-soft px-5 py-3.5 text-sm font-semibold text-oc-muted">
                  Offer Ended
                </span>
              ) : (
                <a
                  href={packageItem.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-oc-sm bg-oc-ink px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-oc-blue"
                >
                  <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
                  Claim This Offer
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
