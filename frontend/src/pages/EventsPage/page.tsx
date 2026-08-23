import { Link, useSearchParams } from "react-router-dom";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { EmptyState, ErrorState, LoadingState } from "@/components/ui/AsyncState";
import { PageHero } from "@/components/ui/PageHero";
import { useEvents } from "@/features/content/queries";

export default function EventsPage() {
  const [params, setParams] = useSearchParams();
  const status = params.get("status") || "upcoming";
  const query = useEvents(`?status=${status}`);
  return <><RouteMeta fallbackTitle="Events | Kent Business College" /><PageHero title="Events" summary="Published events, information sessions and professional learning opportunities." /><section className="kbc-content-shell"><div className="flex flex-wrap gap-2" role="tablist" aria-label="Event status">{["upcoming", "ended", "cancelled"].map((value) => <button key={value} role="tab" aria-selected={status === value} onClick={() => setParams({ status: value })} className={`min-h-11 rounded-full border px-5 py-2 text-sm font-semibold capitalize transition-colors ${status === value ? "border-kbc-purple-700 bg-kbc-purple-700 text-white" : "border-kbc-purple-200 bg-white text-kbc-purple-800 hover:bg-kbc-purple-50"}`}>{value}</button>)}</div>{query.isLoading ? <LoadingState /> : query.isError ? <ErrorState /> : query.data?.items.length ? <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{query.data.items.map((item) => <article key={item.id} className="kbc-surface-card group"><p className="text-sm font-semibold text-kbc-gold-700">{new Intl.DateTimeFormat("en-GB", { dateStyle: "long", timeStyle: "short", timeZone: item.timezone }).format(new Date(item.startAt))}</p><h2 className="mt-3 font-heading text-2xl font-semibold transition-colors group-hover:text-kbc-purple-700"><Link to={`/events/${item.slug}`}>{item.title}</Link></h2><p className="mt-4 text-kbc-purple-700">{item.summary}</p><p className="mt-5 border-t border-kbc-purple-100 pt-4 text-sm text-kbc-purple-600">{item.isOnline ? "Online" : item.location}</p></article>)}</div> : <EmptyState title={`No ${status} events`} body="Published events will appear here." />}</section></>;
}
