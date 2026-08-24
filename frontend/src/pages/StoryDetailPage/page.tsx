import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { ErrorState, LoadingState } from "@/components/ui/AsyncState";
import { PageHero } from "@/components/ui/PageHero";
import { useStory } from "@/features/content/queries";

export default function StoryDetailPage() {
  const query = useStory(useParams().storySlug || "");
  if (query.isLoading) return <LoadingState />;
  if (query.isError || !query.data) return <ErrorState message="Story not found." />;
  return <><RouteMeta seo={query.data.seo} fallbackTitle={query.data.title} fallbackDescription={query.data.summary} /><PageHero eyebrow={query.data.storyType} title={query.data.title} summary={query.data.summary} /><article className="prose mx-auto max-w-4xl px-5 py-16 sm:py-20" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(query.data.body || "") }} /></>;
}
