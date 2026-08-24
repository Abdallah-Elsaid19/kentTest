import { describe, expect, it } from "vitest";

import { getCountdownParts } from "@/components/common/eventCountdownUtils";

describe("event countdown", () => {
  it("calculates complete days, hours, minutes and seconds", () => {
    const now = Date.UTC(2026, 7, 24, 12, 0, 0);
    const target = now + (((2 * 24 + 3) * 60 + 4) * 60 + 5) * 1_000;

    expect(getCountdownParts(target, now)).toEqual({
      days: 2,
      hours: 3,
      minutes: 4,
      seconds: 5,
    });
  });

  it("returns null when the event has started", () => {
    const now = Date.UTC(2026, 7, 24, 12, 0, 0);

    expect(getCountdownParts(now, now)).toBeNull();
    expect(getCountdownParts(now - 1, now)).toBeNull();
  });
});
