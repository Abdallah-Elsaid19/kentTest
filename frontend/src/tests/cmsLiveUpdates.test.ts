import { QueryClient, QueryObserver } from "@tanstack/react-query";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { notifyPublishedContent, subscribeToPublishedContent } from "@/features/cms/liveUpdates";

class TestChannel {
  static channels = new Set<TestChannel>();
  static messages: unknown[] = [];
  onmessage?: (event: { data: unknown }) => void;
  name: string;
  constructor(name: string) { this.name = name; TestChannel.channels.add(this); }
  postMessage(data: unknown) {
    TestChannel.messages.push(data);
    for (const peer of TestChannel.channels) if (peer !== this && peer.name === this.name) peer.onmessage?.({ data });
  }
  close() { TestChannel.channels.delete(this); }
}

const clients: QueryClient[] = [];
const cleanups: (() => void)[] = [];
function client() {
  const cache = new QueryClient({ defaultOptions: { queries: { retry: false, staleTime: Infinity } } });
  clients.push(cache);
  return cache;
}
function observe(cache: QueryClient, key: string[], fetch: () => Promise<string>) {
  cache.setQueryData(key, "Old published content");
  const observer = new QueryObserver(cache, { queryKey: key, queryFn: fetch });
  cleanups.push(observer.subscribe(() => {}));
  return observer;
}

beforeEach(() => {
  vi.stubGlobal("window", new EventTarget());
  vi.stubGlobal("document", Object.assign(new EventTarget(), { visibilityState: "visible" }));
  vi.stubGlobal("BroadcastChannel", TestChannel);
  TestChannel.messages = [];
});
afterEach(() => {
  cleanups.splice(0).forEach(cleanup => cleanup());
  clients.splice(0).forEach(cache => cache.clear());
  TestChannel.channels.clear();
  vi.unstubAllGlobals();
});

describe("published content updates across tabs", () => {
  it.each(["publish", "activate", "deactivate"] as const)("refetches active Home, shared and page queries after %s", async action => {
    const dashboard = client();
    const website = client();
    cleanups.push(subscribeToPublishedContent(website));
    const fetch = vi.fn(async () => "New published content from Django");
    const keys = [["cms-public", "home"], ["cms-public", "home", "section", "recognition"], ["cms-public", "page", "faq"]];
    keys.forEach(key => observe(website, key, fetch));
    const unrelated = vi.fn(async () => "Unrelated");
    observe(website, ["events"], unrelated);
    notifyPublishedContent(dashboard, action);
    await vi.waitFor(() => keys.forEach(key => expect(website.getQueryData(key)).toBe("New published content from Django")));
    expect(fetch).toHaveBeenCalledTimes(3);
    expect(unrelated).not.toHaveBeenCalled();
    expect(TestChannel.messages).toEqual([{ type: "published-content-changed" }]);
  });

  it("refreshes the publishing tab too, but does not announce or expose drafts", async () => {
    const cache = client();
    const fetch = vi.fn(async () => "Published");
    observe(cache, ["cms-public", "home"], fetch);
    notifyPublishedContent(cache, "draft");
    expect(fetch).not.toHaveBeenCalled();
    expect(TestChannel.messages).toEqual([]);
    notifyPublishedContent(cache, "publish");
    await vi.waitFor(() => expect(cache.getQueryData(["cms-public", "home"])).toBe("Published"));
  });

  it("refreshes on returning to a tab without BroadcastChannel and cleans up listeners", async () => {
    vi.stubGlobal("BroadcastChannel", undefined);
    const cache = client();
    const fetch = vi.fn(async () => "Published");
    observe(cache, ["cms-public", "page", "faq"], fetch);
    const stop = subscribeToPublishedContent(cache);
    cleanups.push(stop);
    Object.assign(document, { visibilityState: "hidden" });
    document.dispatchEvent(new Event("visibilitychange"));
    expect(fetch).not.toHaveBeenCalled();
    Object.assign(document, { visibilityState: "visible" });
    document.dispatchEvent(new Event("visibilitychange"));
    await vi.waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    await vi.waitFor(() => expect(cache.isFetching()).toBe(0));
    window.dispatchEvent(new Event("focus"));
    await vi.waitFor(() => expect(fetch).toHaveBeenCalledTimes(2));
    stop();
    window.dispatchEvent(new Event("focus"));
    document.dispatchEvent(new Event("visibilitychange"));
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it("ignores unrelated messages and closes the subscription channel", () => {
    const cache = client();
    const fetch = vi.fn(async () => "Published");
    observe(cache, ["cms-public", "home"], fetch);
    const stop = subscribeToPublishedContent(cache);
    const sender = new TestChannel("kbc-published-content");
    sender.postMessage({ type: "unrelated", content: "Untrusted text" });
    expect(fetch).not.toHaveBeenCalled();
    stop();
    expect(TestChannel.channels.size).toBe(1);
    sender.close();
  });
});
