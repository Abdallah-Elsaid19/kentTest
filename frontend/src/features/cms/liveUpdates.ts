import type { QueryClient } from "@tanstack/react-query";
import type { ContentAction } from "./api";

const channelName = "kbc-published-content";
const messageType = "published-content-changed";

function refresh(client: QueryClient) {
  void client.invalidateQueries({ queryKey: ["cms-public"] });
}

function openChannel(): BroadcastChannel | undefined {
  // Some browser/privacy configurations disable cross-tab messaging.
  // Focus refresh and polling still fetch the authoritative Django content.
  try {
    return typeof BroadcastChannel === "undefined" ? undefined : new BroadcastChannel(channelName);
  } catch {
    return undefined;
  }
}

export function notifyPublishedContent(client: QueryClient, action: ContentAction) {
  if (action === "draft") return;
  refresh(client);
  const channel = openChannel();
  try {
    // Send only an invalidation signal, never content, drafts or credentials.
    channel?.postMessage({ type: messageType });
  } catch {
    // Publication already succeeded; a messaging failure must not report a failed save.
  } finally {
    channel?.close();
  }
}

export function subscribeToPublishedContent(client: QueryClient) {
  if (typeof window === "undefined" || typeof document === "undefined") return () => {};
  const channel = openChannel();
  if (channel) channel.onmessage = event => {
    if (event.data?.type === messageType) refresh(client);
  };
  const onFocus = () => refresh(client);
  const onVisibility = () => { if (document.visibilityState === "visible") refresh(client); };
  window.addEventListener("focus", onFocus);
  document.addEventListener("visibilitychange", onVisibility);
  return () => {
    channel?.close();
    window.removeEventListener("focus", onFocus);
    document.removeEventListener("visibilitychange", onVisibility);
  };
}
