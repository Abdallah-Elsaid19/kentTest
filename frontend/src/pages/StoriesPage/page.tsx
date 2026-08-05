import { Link } from "react-router-dom";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { EmptyState, ErrorState, LoadingState } from "@/components/ui/AsyncState";
import { PageHero } from "@/components/ui/PageHero";
import { useStories } from "@/features/content/queries";

export default function StoriesPage() {
  const query = useStories();
  if (query.isLoading) return <LoadingState />;
  if (query.isError) return <ErrorState />;
  return <><RouteMeta fallbackTitle="Learner stories | Kent Business College" /><PageHero title="Learner stories" summary="Stories appear only after editorial and privacy approval." />{query.data?.items.length ? <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:grid-cols-3">{query.data.items.map((item) => <Link key={item.id} to={`/stories/${item.slug}`} className="rounded-2xl border border-slate-200 bg-white p-6"><p className="text-sm font-semibold text-kbc-gold-700">{item.storyType}</p><h2 className="mt-2 font-heading text-2xl font-semibold">{item.title}</h2><p className="mt-3 text-slate-600">{item.summary}</p></Link>)}</div> : <EmptyState title="No stories published" body="Privacy-approved learner stories will appear here." />}</>;
}
