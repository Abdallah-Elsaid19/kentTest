export type CountdownParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const SECOND = 1_000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

export function getCountdownParts(
  targetTime: number,
  now = Date.now(),
): CountdownParts | null {
  const remaining = targetTime - now;

  if (!Number.isFinite(targetTime) || remaining <= 0) {
    return null;
  }

  return {
    days: Math.floor(remaining / DAY),
    hours: Math.floor((remaining % DAY) / HOUR),
    minutes: Math.floor((remaining % HOUR) / MINUTE),
    seconds: Math.floor((remaining % MINUTE) / SECOND),
  };
}
