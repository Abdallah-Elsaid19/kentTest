import { afterEach, describe, expect, it, vi } from "vitest";

import { apiGet } from "@/services/api/apiClient";
import { ApiError } from "@/services/api/apiError";

afterEach(() => vi.unstubAllGlobals());

describe("api client", () => {
  it("maps the public error envelope", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(JSON.stringify({ error: { code: "not_found", message: "Missing" }, requestId: "req_test" }), { status: 404, headers: { "Content-Type": "application/json" } })));
    await expect(apiGet("/missing/")).rejects.toMatchObject({ status: 404, code: "not_found", requestId: "req_test" } satisfies Partial<ApiError>);
  });
});
