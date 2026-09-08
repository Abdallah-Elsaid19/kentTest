import { apiRequest } from "@/services/api/apiClient";
import type { HomeSection } from "./homeTypes";

export type AdminSession = { csrfToken: string; user: null | { username: string; name: string; isAdmin: boolean; canManageUsers: boolean; canManageMedia: boolean } };
export type ContentEntry = {
  key: string; page: string; section: HomeSection; title: string; sortOrder: number;
  content: Record<string, unknown>; publishedContent: Record<string, unknown> | null;
  status: "draft" | "published" | "inactive"; isActive: boolean; hasDraft: boolean;
  version: number; createdAt: string; updatedAt: string; publishedAt: string | null; updatedByName: string | null;
};
export type ContentCollection = { key: string; title: string; total: number; live: number; drafts: number; inactive: number };
export type ContentRevision = { version: number; action: string; createdAt: string; actorName: string | null };
export type ContentAction = "draft" | "publish" | "activate" | "deactivate";
let csrfToken = "";
export async function cmsRequest<T>(path: string, init: Parameters<typeof fetch>[1] = {}): Promise<T> {
  return apiRequest<T>(`/cms${path}`, { ...init, credentials: "include", cache: "no-store", headers: { "X-CSRFToken": csrfToken, ...init.headers } });
}
export async function getAdminSession() {
  const session = await cmsRequest<AdminSession>("/session/");
  csrfToken = session.csrfToken;
  return session;
}
export async function signIn(username: string, password: string) {
  await getAdminSession();
  const session = await cmsRequest<AdminSession>("/login/", { method: "POST", body: JSON.stringify({ username, password }) });
  csrfToken = session.csrfToken;
  return session;
}
export async function signOut() {
  await cmsRequest("/logout/", { method: "POST", body: "{}" });
  csrfToken = "";
}
export const saveEntry = (entry: ContentEntry, action: ContentAction, content?: Record<string, unknown>) => cmsRequest<ContentEntry>(`/entries/${encodeURIComponent(entry.key)}/`, { method: "PATCH", body: JSON.stringify({ version: entry.version, action, ...(content ? { content } : {}) }) });
