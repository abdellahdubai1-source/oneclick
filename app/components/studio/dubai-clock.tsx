"use client";

import { useEffect, useState } from "react";
import { ClockIcon } from "./icons";

const TIME_ZONE = "Asia/Dubai";

function formatDubai(date: Date) {
  const timeParts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).formatToParts(date);
  const pick = (parts: Intl.DateTimeFormatPart[], type: string) =>
    parts.find((part) => part.type === type)?.value ?? "";
  const time = `${pick(timeParts, "hour")}:${pick(timeParts, "minute")} ${pick(timeParts, "dayPeriod").toLowerCase()}`;

  const dateParts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TIME_ZONE,
    day: "numeric",
    month: "long",
    year: "numeric",
  }).formatToParts(date);
  const day = `${pick(dateParts, "day")} ${pick(dateParts, "month")}, ${pick(dateParts, "year")}`;
  return { time, day };
}

/** Uses the Dubai time zone explicitly, never the visitor's local zone. */
export function useDubaiTime() {
  const [value, setValue] = useState<{ time: string; day: string } | null>(null);

  useEffect(() => {
    let timer = 0;
    const tick = () => setValue(formatDubai(new Date()));
    const schedule = () => {
      tick();
      // Re-align to the next full minute, then every minute.
      const ms = 60_000 - (Date.now() % 60_000);
      timer = window.setTimeout(() => {
        tick();
        timer = window.setInterval(tick, 60_000);
      }, ms);
    };
    schedule();
    const onVisible = () => {
      if (document.visibilityState === "visible") tick();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      window.clearTimeout(timer);
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return value;
}

export function DubaiClock({ className = "", showDate = true }: { className?: string; showDate?: boolean }) {
  const value = useDubaiTime();
  return (
    <span className={`st-clock ${className}`} role="status" aria-live="off">
      <ClockIcon />
      <span className="st-clock-label">Dubai time</span>
      <span className="st-clock-time" suppressHydrationWarning>
        {value ? value.time : "—:——"}
      </span>
      {showDate ? (
        <span className="st-clock-date" suppressHydrationWarning>
          {value ? value.day : ""}
        </span>
      ) : null}
    </span>
  );
}
