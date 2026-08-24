import { useQuery } from "@tanstack/react-query";
import { FormEvent, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { ErrorState, LoadingState } from "@/components/ui/AsyncState";
import { PageHero } from "@/components/ui/PageHero";
import { apiGet } from "@/services/api/apiClient";
import { endpoints } from "@/services/api/endpoints";
import type { CollectionResponse } from "@/types/api";

type SearchResult = { type: string; title: string; summary: string; path: string };

export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") || "";
  const [value, setValue] = useState(query);
  const results = useQuery({ queryKey: ["search", query], queryFn: () => apiGet<CollectionResponse<SearchResult>>(endpoints.search(query)), enabled: query.length >= 2 });
  const submit = (event: FormEvent) => { event.preventDefault(); setParams(value.trim().length >= 2 ? { q: value.trim() } : {}); };
  return <><RouteMeta fallbackTitle="Search | Kent Business College" /><PageHero title="Search" summary="Search published pages, programmes, events, stories and articles." /><section className="mx-auto max-w-4xl px-5 py-16 sm:py-20"><form onSubmit={submit} className="flex gap-3 rounded-2xl border border-kbc-purple-100 bg-white p-3 shadow-sm max-[520px]:flex-col"><label className="sr-only" htmlFor="search">Search</label><input id="search" value={value} onChange={(event) => setValue(event.target.value)} className="min-w-0 flex-1 border border-kbc-purple-200 px-4 py-3" /><button className="min-h-12 rounded-lg bg-kbc-purple-700 px-7 py-3 font-semibold text-white transition hover:bg-kbc-purple-800">Search</button></form>{results.isLoading && <LoadingState />}{results.isError && <ErrorState />}{results.data && <div className="mt-10 space-y-4">{results.data.items.map((item) => <Link key={`${item.type}-${item.path}`} to={item.path} className="kbc-surface-card group block"><p className="text-xs font-semibold uppercase tracking-wide text-kbc-gold-700">{item.type}</p><h2 className="mt-2 font-heading text-2xl font-semibold transition-colors group-hover:text-kbc-purple-700">{item.title}</h2><p className="mt-3 text-kbc-purple-700">{item.summary}</p></Link>)}</div>}</section></>;
}
