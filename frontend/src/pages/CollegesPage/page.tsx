import { Link } from "react-router-dom";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { EmptyState, ErrorState, LoadingState } from "@/components/ui/AsyncState";
import { PageHero } from "@/components/ui/PageHero";
import { useColleges } from "@/features/content/queries";

export default function CollegesPage() {
  const query = useColleges();
  if (query.isLoading) return <LoadingState />;
  if (query.isError) return <ErrorState />;
  return <><RouteMeta fallbackTitle="Colleges | Kent Business College" /><PageHero title="Colleges" summary="Explore the specialist colleges currently published by our editorial team." />{query.data?.items.length ? <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:grid-cols-2">{query.data.items.map((item) => <Link key={item.id} to={`/colleges/${item.slug}`} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">{item.image?.url && <img src={item.image.url} alt={item.image.altText} className="aspect-[16/8] w-full object-cover" />}<div className="p-6"><h2 className="font-heading text-2xl font-semibold">{item.title}</h2><p className="mt-2 text-slate-600">{item.summary}</p></div></Link>)}</div> : <EmptyState title="No colleges published" body="Published colleges will appear here." />}</>;
}
