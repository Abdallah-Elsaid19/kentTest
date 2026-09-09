import { apiRequest } from "@/services/api/apiClient";
import type { FieldSchema } from "./schema";

export type AdminSession = { csrfToken: string; user: null | { username: string; name: string; isAdmin: boolean; canManageUsers: boolean; canManageMedia: boolean } };
export type ContentEntry = {
  key: string; page: string; section: string; title: string; sortOrder: number; schema?: FieldSchema;
  content: Record<string, unknown>; publishedContent: Record<string, unknown> | null;
  status: "draft" | "published" | "inactive"; isActive: boolean; hasDraft: boolean;
  version: number; createdAt: string; updatedAt: string; publishedAt: string | null; updatedByName: string | null;
};
export type ContentCollection = { key: string; title: string; total: number; live: number; drafts: number; inactive: number; route?: string; group?: string; status?: string; publishState?: string; updatedAt?: string; updatedByName?: string; sectionNames?: string[] };
export type ContentRevision = { version: number; action: string; createdAt: string; actorName: string | null };
export type MediaKind = "image" | "video";
export type MediaAsset = { id: number; url: string; altText: string; caption: string; width: number | null; height: number | null; mimeType: string; fileSize: number };
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
export function uploadMedia(file: File, kind: MediaKind, title: string) {
  const body = new FormData();
  body.append("file", file);
  body.append("kind", kind);
  body.append("title", title);
  if (kind === "image") body.append("alt_text", title);
  return cmsRequest<MediaAsset>("/media/upload/", { method: "POST", body });
}
