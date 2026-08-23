import { Link } from "react-router-dom";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { EmptyState, ErrorState, LoadingState } from "@/components/ui/AsyncState";
import { PageHero } from "@/components/ui/PageHero";
import { useStories } from "@/features/content/queries";

export default function StoriesPage() {
  const query = useStories();
  if (query.isLoading) return <LoadingState />;
  if (query.isError) return <ErrorState />;
  return <><RouteMeta fallbackTitle="Learner stories | Kent Business College" /><PageHero title="Learner stories" summary="Stories appear only after editorial and privacy approval." />{query.data?.items.length ? <div className="kbc-content-grid md:grid-cols-3">{query.data.items.map((item) => <Link key={item.id} to={`/stories/${item.slug}`} className="kbc-surface-card group"><p className="text-sm font-semibold text-kbc-gold-700">{item.storyType}</p><h2 className="mt-3 font-heading text-2xl font-semibold transition-colors group-hover:text-kbc-purple-700">{item.title}</h2><p className="mt-4 text-kbc-purple-700">{item.summary}</p></Link>)}</div> : <EmptyState title="No stories published" body="Privacy-approved learner stories will appear here." />}</>;
}
