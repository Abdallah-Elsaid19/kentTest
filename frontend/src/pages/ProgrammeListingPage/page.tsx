import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { EmptyState, ErrorState, LoadingState } from "@/components/ui/AsyncState";
import { PageHero } from "@/components/ui/PageHero";
import { useProgrammes } from "@/features/content/queries";

export default function ProgrammeListingPage() {
  const [params, setParams] = useSearchParams();
  const queryString = useMemo(() => `?${params.toString()}`, [params]);
  const query = useProgrammes(queryString);
  const update = (key: string, value: string) => { const next = new URLSearchParams(params); value ? next.set(key, value) : next.delete(key); next.delete("page"); setParams(next); };
  return <>
    <RouteMeta fallbackTitle="Programmes | Kent Business College" />
    <PageHero title="Programmes" summary="Filter the programmes approved and published in the KBC content system." />
    <section className="kbc-content-shell">
      <form className="grid gap-4 rounded-2xl border border-kbc-purple-100 bg-white p-6 shadow-sm md:grid-cols-4" onSubmit={(event) => event.preventDefault()}>
        <label className="text-sm font-semibold text-kbc-purple-950">Search<input value={params.get("search") || ""} onChange={(e) => update("search", e.target.value)} className="mt-2 w-full border border-kbc-purple-200 px-3 py-2" /></label>
        <label className="text-sm font-semibold text-kbc-purple-950">Level<select value={params.get("level") || ""} onChange={(e) => update("level", e.target.value)} className="mt-2 w-full border border-kbc-purple-200 px-3 py-2"><option value="">All</option>{[2,3,4,5,6,7].map((level) => <option key={level} value={level}>Level {level}</option>)}</select></label>
        <label className="text-sm font-semibold text-kbc-purple-950">Funding<select value={params.get("funding") || ""} onChange={(e) => update("funding", e.target.value)} className="mt-2 w-full border border-kbc-purple-200 px-3 py-2"><option value="">All</option><option value="fully-funded">Fully funded</option><option value="co-funded">Co-funded</option><option value="commercial">Commercial</option></select></label>
        <button type="button" onClick={() => setParams({})} className="min-h-12 self-end rounded-lg border border-kbc-purple-300 px-4 py-2 font-semibold text-kbc-purple-800 transition hover:bg-kbc-purple-50">Clear filters</button>
      </form>
      {query.isLoading ? <LoadingState /> : query.isError ? <ErrorState /> : query.data?.items.length ? <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{query.data.items.map((item) => <Link key={item.id} to={`/programmes/${item.slug}`} className="kbc-surface-card group"><p className="text-sm font-semibold text-kbc-gold-700">{item.funding.label} · Level {item.level}</p><h2 className="mt-3 font-heading text-2xl font-semibold transition-colors group-hover:text-kbc-purple-700">{item.title}</h2><p className="mt-4 text-kbc-purple-700">{item.summary}</p><p className="mt-5 border-t border-kbc-purple-100 pt-4 text-sm font-semibold text-kbc-purple-700">{item.college.title}</p></Link>)}</div> : <EmptyState title="No matching programmes" body="Try adjusting the filters or ask staff to publish programme records." />}
    </section>
  </>;
}
