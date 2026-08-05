import { Link, useSearchParams } from "react-router-dom";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { EmptyState, ErrorState, LoadingState } from "@/components/ui/AsyncState";
import { PageHero } from "@/components/ui/PageHero";
import { useEvents } from "@/features/content/queries";

export default function EventsPage() {
  const [params, setParams] = useSearchParams();
  const status = params.get("status") || "upcoming";
  const query = useEvents(`?status=${status}`);
  return <><RouteMeta fallbackTitle="Events | Kent Business College" /><PageHero title="Events" summary="Published events, information sessions and professional learning opportunities." /><section className="mx-auto max-w-7xl px-4 py-12"><div className="flex gap-2" role="tablist" aria-label="Event status">{["upcoming", "ended", "cancelled"].map((value) => <button key={value} role="tab" aria-selected={status === value} onClick={() => setParams({ status: value })} className={`rounded-full px-4 py-2 text-sm font-semibold capitalize ${status === value ? "bg-kbc-purple-700 text-white" : "bg-white text-slate-700"}`}>{value}</button>)}</div>{query.isLoading ? <LoadingState /> : query.isError ? <ErrorState /> : query.data?.items.length ? <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{query.data.items.map((item) => <article key={item.id} className="rounded-2xl border border-slate-200 bg-white p-6"><p className="text-sm font-semibold text-kbc-gold-700">{new Intl.DateTimeFormat("en-GB", { dateStyle: "long", timeStyle: "short", timeZone: item.timezone }).format(new Date(item.startAt))}</p><h2 className="mt-2 font-heading text-2xl font-semibold"><Link to={`/events/${item.slug}`}>{item.title}</Link></h2><p className="mt-3 text-slate-600">{item.summary}</p><p className="mt-4 text-sm text-slate-500">{item.isOnline ? "Online" : item.location}</p></article>)}</div> : <EmptyState title={`No ${status} events`} body="Published events will appear here." />}</section></>;
}
