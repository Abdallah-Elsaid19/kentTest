import { RouteMeta } from "@/components/seo/RouteMeta";
import { EmptyState, ErrorState, LoadingState } from "@/components/ui/AsyncState";
import { PageHero } from "@/components/ui/PageHero";
import { usePeople } from "@/features/content/queries";

export default function PeoplePage() {
  const query = usePeople();
  if (query.isLoading) return <LoadingState />;
  if (query.isError) return <ErrorState />;
  return <><RouteMeta fallbackTitle="People | Kent Business College" /><PageHero title="Our people" summary="Meet approved instructors, coaches, experts, speakers and staff." />{query.data?.items.length ? <div className="kbc-content-grid sm:grid-cols-2 lg:grid-cols-3">{query.data.items.map((item) => <article key={item.id} className="kbc-surface-card !p-0 overflow-hidden">{item.photo?.url && <img src={item.photo.url} alt={item.photo.altText} className="aspect-square w-full object-cover" />}<div className="p-7"><h2 className="font-heading text-3xl font-semibold">{item.name}</h2><p className="mt-2 font-semibold text-kbc-purple-700">{item.jobTitle}</p><p className="mt-4 text-sm leading-7 text-kbc-purple-700">{item.bio}</p></div></article>)}</div> : <EmptyState title="No people published" body="Approved public profiles will appear here." />}</>;
}
