import { Link } from "react-router-dom";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { EmptyState, ErrorState, LoadingState } from "@/components/ui/AsyncState";
import { PageHero } from "@/components/ui/PageHero";
import { useArticles } from "@/features/content/queries";

export default function BlogPage() {
  const query = useArticles();
  if (query.isLoading) return <LoadingState />;
  if (query.isError) return <ErrorState />;
  return <><RouteMeta fallbackTitle="Articles | Kent Business College" /><PageHero title="Articles" summary="News and insight published by Kent Business College." />{query.data?.items.length ? <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:grid-cols-3">{query.data.items.map((item) => <Link key={item.id} to={`/blog/${item.slug}`} className="rounded-2xl border border-slate-200 bg-white p-6"><p className="text-sm text-slate-500">{item.publishedAt ? new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(new Date(item.publishedAt)) : ""}</p><h2 className="mt-2 font-heading text-2xl font-semibold">{item.title}</h2><p className="mt-3 text-slate-600">{item.summary}</p></Link>)}</div> : <EmptyState title="No articles published" body="Published articles will appear here." />}</>;
}
