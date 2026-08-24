import { useEffect, useState } from "react";

import "@/styles/event-countdown.css";
import {
  getCountdownParts,
  type CountdownParts,
} from "./eventCountdownUtils";

type EventCountdownProps = {
  eventTime: string | Date;
  className?: string;
  label?: string;
};

function CountdownUnit({ label, value }: { label: string; value: number }) {
  const digits = String(value).padStart(2, "0").split("");

  return (
    <div className="event-countdown__unit">
      <div className="event-countdown__digits" aria-hidden="true">
        {digits.map((digit, index) => (
          <span key={`${label}-${index}`}>{digit}</span>
        ))}
      </div>
      <small>{label}</small>
    </div>
  );
}

export function EventCountdown({
  eventTime,
  className = "",
  label = "Event starts in",
}: EventCountdownProps) {
  const targetTime =
    eventTime instanceof Date ? eventTime.getTime() : new Date(eventTime).getTime();
  const [countdown, setCountdown] = useState<CountdownParts | null>(() =>
    getCountdownParts(targetTime),
  );

  useEffect(() => {
    const updateCountdown = () => {
      setCountdown(getCountdownParts(targetTime));
    };

    updateCountdown();

    if (!Number.isFinite(targetTime) || targetTime <= Date.now()) {
      return undefined;
    }

    const interval = window.setInterval(updateCountdown, 1_000);
    return () => window.clearInterval(interval);
  }, [targetTime]);

  if (!countdown) {
    return null;
  }

  return (
    <section
      className={`event-countdown ${className}`.trim()}
      aria-label={`${label}: ${countdown.days} days, ${countdown.hours} hours, ${countdown.minutes} minutes and ${countdown.seconds} seconds`}
    >
      <p>{label}</p>
      <div className="event-countdown__units" aria-live="off">
        <CountdownUnit label="Days" value={countdown.days} />
        <CountdownUnit label="Hours" value={countdown.hours} />
        <CountdownUnit label="Minutes" value={countdown.minutes} />
        <CountdownUnit label="Seconds" value={countdown.seconds} />
      </div>
    </section>
  );
}
