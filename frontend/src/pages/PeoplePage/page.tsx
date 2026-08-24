import { RouteMeta } from "@/components/seo/RouteMeta";
import { EmptyState, ErrorState, LoadingState } from "@/components/ui/AsyncState";
import { PageHero } from "@/components/ui/PageHero";
import { usePeople } from "@/features/content/queries";

export default function PeoplePage() {
  const query = usePeople();
  if (query.isLoading) return <LoadingState />;
  if (query.isError) return <ErrorState />;
  return <><RouteMeta fallbackTitle="People | Kent Business College" /><PageHero title="Our people" summary="Meet approved instructors, coaches, experts, speakers and staff." />{query.data?.items.length ? <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:grid-cols-2 lg:grid-cols-3">{query.data.items.map((item) => <article key={item.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">{item.photo?.url && <img src={item.photo.url} alt={item.photo.altText} className="aspect-square w-full object-cover" loading="lazy" decoding="async" />}<div className="p-6"><h2 className="font-heading text-2xl font-semibold">{item.name}</h2><p className="mt-1 text-kbc-purple-700">{item.jobTitle}</p><p className="mt-3 text-sm text-slate-600">{item.bio}</p></div></article>)}</div> : <EmptyState title="No people published" body="Approved public profiles will appear here." />}</>;
}
