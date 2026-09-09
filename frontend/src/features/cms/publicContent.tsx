/* eslint-disable react-refresh/only-export-components -- The provider and binding hook share one content context. */
﻿import { cloneElement, createContext, isValidElement, useContext, useEffect, useMemo, type ReactElement, type ReactNode } from "react";
import { useQueries } from "@tanstack/react-query";
import { useOutletContext, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { apiGet } from "@/services/api/apiClient";
import { PageLoadingState, ErrorState } from "@/components/ui/AsyncState";
import { cmsRequest } from "./api";
import { pageRegistry } from "./pageRegistry";
import type { MainLayoutOutletContext } from "@/components/layout/MainLayout";

export type PageDocument = { page: string; sections: { key: string; section: string; content: Record<string, unknown> }[] };
type Documents = Record<string, PageDocument>;
const ContentContext = createContext<Documents>({});
const tokenPattern = /\{\{cms:([a-z0-9_.]+)\}\}/g;
export function parsePageDocument(value: unknown, page: string): PageDocument {
  const document = value as PageDocument;
  if (!document || document.page !== page || !Array.isArray(document.sections)) throw new Error("Invalid page content response.");
  const seen = new Set<string>();
  for (const entry of document.sections) {
    if (typeof entry.section !== "string" || seen.has(entry.section) || !entry.content || typeof entry.content !== "object" || Array.isArray(entry.content)) throw new Error("Invalid content section.");
    seen.add(entry.section);
  }
  return document;
}
export function contentBindings(documents: Documents) {
  const resolved = new WeakMap<object, unknown>();
  const fields = new Map<string, string>();
  for (const document of Object.values(documents)) for (const section of document.sections) {
    for (const [key, value] of Object.entries(section.content)) if (typeof value === "string") fields.set(`${document.page}.${section.section}.${key}`, value);
  }
  const text = (key: string) => fields.get(key) ?? `{{cms-missing:${key}}}`;
  function resolve<T>(value: T): T {
    if (typeof value === "string") return value.replace(tokenPattern, (_, key: string) => text(key)) as T;
    if (value && typeof value === "object") {
      if (resolved.has(value)) return resolved.get(value) as T;
      let result: unknown = value;
      if (Array.isArray(value)) result = value.map(resolve);
      else if (isValidElement(value)) {
        const { children, ...props } = resolve(value.props as Record<string, unknown>);
        result = cloneElement(value as ReactElement<Record<string, unknown>>, props, ...(Array.isArray(children) ? children : [children]));
      } else if (Object.getPrototypeOf(value) === Object.prototype) result = Object.fromEntries(Object.entries(value).map(([key, child]) => [key, resolve(child)]));
      resolved.set(value, result);
      return result as T;
    }
    return value;
  }
  function missing(value: unknown): boolean {
    if (typeof value === "string") return value.includes("{{cms-missing:");
    if (Array.isArray(value)) return value.some(missing);
    if (isValidElement(value)) return missing(value.props);
    return Boolean(value && typeof value === "object" && Object.getPrototypeOf(value) === Object.prototype && Object.values(value).some(missing));
  }
  function render(value: ReactNode): ReactNode {
    if (Array.isArray(value)) return value.map(render);
    if (typeof value === "string") return missing(value) ? null : value;
    if (isValidElement(value)) {
      const { children, ...props } = value.props as Record<string, unknown>;
      // Remove the affected visual section or component when its publication is inactive.
      if (missing(props) || (value.type === "section" && missing(children))) return null;
      const next = render(children as ReactNode);
      return cloneElement(value as ReactElement<Record<string, unknown>>, props, ...(Array.isArray(next) ? next : [next]));
    }
    return value;
  }
  return { text, resolve, render: <T extends ReactNode>(value: T): T => render(resolve(value)) as T };
}
const bindingCache = new WeakMap<Documents, ReturnType<typeof contentBindings>>();
function bindingsFor(documents: Documents) {
  let bindings = bindingCache.get(documents);
  if (!bindings) { bindings = contentBindings(documents); bindingCache.set(documents, bindings); }
  return bindings;
}
export function useCmsBindings(pages: readonly string[] = []) {
  const inherited = useContext(ContentContext);
  const queries = useQueries({ queries: pages.map(page => ({
    queryKey: ["cms-public", "page", page],
    queryFn: async () => parsePageDocument(await apiGet(`/content/${page}/`), page),
    enabled: !inherited[page], staleTime: 15_000, refetchInterval: 15_000,
  })) });
  if (pages.every(page => inherited[page])) return bindingsFor(inherited);
  const documents = { ...inherited };
  queries.forEach(query => { if (query.data && !documents[query.data.page]) documents[query.data.page] = query.data; });
  return contentBindings(documents);
}
export function ManagedPage({ page, children, previewSection, preview = false }: { page: keyof typeof pageRegistry; children: ReactNode; previewSection?: string; preview?: boolean }) {
  const markPageReady = useOutletContext<MainLayoutOutletContext | null>()?.markPageReady;
  const [params] = useSearchParams();
  const requestedPreview = params.get("cmsPreview");
  preview = preview || requestedPreview !== null;
  previewSection = previewSection || (requestedPreview && requestedPreview !== "all" ? requestedPreview : undefined);
  const dependencies = pageRegistry[page].dependencies;
  const queries = useQueries({ queries: dependencies.map(dependency => ({
    queryKey: preview && dependency === page ? ["cms", "page-preview", page, previewSection || "all"] : ["cms-public", "page", dependency],
    queryFn: async () => parsePageDocument(preview && dependency === page
      ? await cmsRequest(previewSection ? `/entries/${encodeURIComponent(previewSection)}/preview/` : `/pages/${page}/preview/`)
      : await apiGet(`/content/${dependency}/`), dependency),
    staleTime: preview ? 0 : 15_000, refetchInterval: preview ? false as const : 15_000,
  })) });
  const documents = useMemo(() => Object.fromEntries(queries.flatMap(query => query.data ? [[query.data.page, query.data]] : [])), [queries]);
  const pending = queries.some(query => query.isPending);
  useEffect(() => {
    if (!pending) markPageReady?.();
  }, [pending, markPageReady]);
  if (pending) return <PageLoadingState label="Loading page content" />;
  if (queries.some(query => query.error && !query.data)) return <ErrorState message="This page's content is temporarily unavailable." />;
  if (!documents[page]?.sections.length) return null;
  return <ContentContext.Provider value={documents}>{preview && <Helmet><meta name="robots" content="noindex,nofollow" /></Helmet>}{children}</ContentContext.Provider>;
}
