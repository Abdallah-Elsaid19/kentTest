import { Link } from "react-router-dom";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { EmptyState, ErrorState, LoadingState } from "@/components/ui/AsyncState";
import { PageHero } from "@/components/ui/PageHero";
import { useColleges } from "@/features/content/queries";

export default function CollegesPage() {
  const query = useColleges();
  if (query.isLoading) return <LoadingState />;
  if (query.isError) return <ErrorState />;
  return <><RouteMeta fallbackTitle="Colleges | Kent Business College" /><PageHero title="Colleges" summary="Explore the specialist colleges currently published by our editorial team." />{query.data?.items.length ? <div className="kbc-content-grid md:grid-cols-2">{query.data.items.map((item) => <Link key={item.id} to={`/colleges/${item.slug}`} className="kbc-surface-card group !p-0 overflow-hidden">{item.image?.url && <img src={item.image.url} alt={item.image.altText} className="aspect-[16/8] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" />}<div className="p-7"><h2 className="font-heading text-3xl font-semibold transition-colors group-hover:text-kbc-purple-700">{item.title}</h2><p className="mt-3 text-kbc-purple-700">{item.summary}</p></div></Link>)}</div> : <EmptyState title="No colleges published" body="Published colleges will appear here." />}</>;
}
