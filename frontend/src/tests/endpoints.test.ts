import { describe, expect, it } from "vitest";

import { endpoints } from "@/services/api/endpoints";

describe("API endpoints", () => {
  it("uses one trailing-slash convention", () => {
    expect(endpoints.site.endsWith("/")).toBe(true);
    expect(endpoints.programme("example").endsWith("/")).toBe(true);
    expect(endpoints.event("example").endsWith("/")).toBe(true);
  });

  it("encodes slug and search values", () => {
    expect(endpoints.programme("a/b")).toContain("a%2Fb");
    expect(endpoints.search("project controls")).toContain("project%20controls");
  });
});
