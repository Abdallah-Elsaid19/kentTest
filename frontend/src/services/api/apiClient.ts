import { environment } from "@/app/environment";
import type { ApiErrorBody } from "@/types/api";
import { ApiError } from "./apiError";

const API_BASE = environment.VITE_API_BASE_URL.replace(/\/$/, "");

export async function apiRequest<T>(path: string, init: Parameters<typeof fetch>[1] = {}): Promise<T> {
  const controller = new AbortController();
  const timeout = globalThis.setTimeout(() => controller.abort(), 12_000);
  try {
    const response = await fetch(`${API_BASE}${path}`, {
      ...init,
      signal: controller.signal,
      credentials: "same-origin",
      headers: { Accept: "application/json", "Content-Type": "application/json", ...init.headers },
    });
    const payload = await response.json().catch(() => null);
    if (!response.ok) {
      const body = payload as ApiErrorBody | null;
      throw new ApiError(
        body?.error?.message || "The request could not be completed.",
        response.status,
        body?.error?.code,
        body?.error?.details,
        body?.requestId || response.headers.get("X-Request-ID") || undefined,
      );
    }
    return payload as T;
  } catch (error) {
    if (error instanceof ApiError) throw error;
    if ((error as DOMException).name === "AbortError") throw new ApiError("The request timed out.", 408, "request_timeout");
    throw new ApiError("The service is temporarily unavailable.", 503, "service_unavailable");
  } finally {
    globalThis.clearTimeout(timeout);
  }
}

export const apiGet = <T>(path: string) => apiRequest<T>(path);
export const apiPost = <TResponse, TBody>(path: string, body: TBody) =>
  apiRequest<TResponse>(path, { method: "POST", body: JSON.stringify(body) });
