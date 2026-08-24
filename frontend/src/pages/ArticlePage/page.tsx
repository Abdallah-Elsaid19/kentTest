import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { ErrorState, LoadingState } from "@/components/ui/AsyncState";
import { PageHero } from "@/components/ui/PageHero";
import { useArticle } from "@/features/content/queries";

export default function ArticlePage() {
  const query = useArticle(useParams().articleSlug || "");
  if (query.isLoading) return <LoadingState />;
  if (query.isError || !query.data) return <ErrorState message="Article not found." />;
  return <><RouteMeta seo={query.data.seo} fallbackTitle={query.data.title} fallbackDescription={query.data.summary} /><PageHero eyebrow={query.data.author?.name} title={query.data.title} summary={query.data.summary} /><article className="prose mx-auto max-w-4xl px-5 py-16 sm:py-20" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(query.data.body || "") }} /></>;
}
