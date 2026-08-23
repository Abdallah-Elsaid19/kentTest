import { Link } from "react-router-dom";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { EmptyState, ErrorState, LoadingState } from "@/components/ui/AsyncState";
import { PageHero } from "@/components/ui/PageHero";
import { useArticles } from "@/features/content/queries";

export default function BlogPage() {
  const query = useArticles();
  if (query.isLoading) return <LoadingState />;
  if (query.isError) return <ErrorState />;
  return <><RouteMeta fallbackTitle="Articles | Kent Business College" /><PageHero title="Articles" summary="News and insight published by Kent Business College." />{query.data?.items.length ? <div className="kbc-content-grid md:grid-cols-3">{query.data.items.map((item) => <Link key={item.id} to={`/blog/${item.slug}`} className="kbc-surface-card group"><p className="text-sm text-kbc-purple-600">{item.publishedAt ? new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(new Date(item.publishedAt)) : ""}</p><h2 className="mt-3 font-heading text-2xl font-semibold transition-colors group-hover:text-kbc-purple-700">{item.title}</h2><p className="mt-4 text-kbc-purple-700">{item.summary}</p></Link>)}</div> : <EmptyState title="No articles published" body="Published articles will appear here." />}</>;
}
