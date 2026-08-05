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
  return <><RouteMeta fallbackTitle="Search | Kent Business College" /><PageHero title="Search" summary="Search published pages, programmes, events, stories and articles." /><section className="mx-auto max-w-4xl px-4 py-12"><form onSubmit={submit} className="flex gap-3"><label className="sr-only" htmlFor="search">Search</label><input id="search" value={value} onChange={(event) => setValue(event.target.value)} className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-3" /><button className="rounded-lg bg-kbc-purple-700 px-6 py-3 font-semibold text-white">Search</button></form>{results.isLoading && <LoadingState />}{results.isError && <ErrorState />}{results.data && <div className="mt-8 space-y-4">{results.data.items.map((item) => <Link key={`${item.type}-${item.path}`} to={item.path} className="block rounded-xl border border-slate-200 bg-white p-5"><p className="text-xs font-semibold uppercase tracking-wide text-kbc-gold-700">{item.type}</p><h2 className="mt-1 font-heading text-xl font-semibold">{item.title}</h2><p className="mt-2 text-slate-600">{item.summary}</p></Link>)}</div>}</section></>;
}
