import { useParams } from "react-router-dom";

import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { ErrorState, LoadingState } from "@/components/ui/AsyncState";
import { PageHero } from "@/components/ui/PageHero";
import { usePage } from "@/features/content/queries";

export default function ContentPage({ slug: configuredSlug }: { slug?: string }) {
  const { pageSlug } = useParams();
  const slug = configuredSlug || pageSlug || "";
  const page = usePage(slug);
  if (page.isLoading) return <LoadingState />;
  if (page.isError || !page.data) return <ErrorState message="This page is not published." />;
  return <><RouteMeta seo={page.data.seo} fallbackTitle={page.data.title} fallbackDescription={page.data.summary} />{page.data.sections.length ? page.data.sections.map((section) => <SectionRenderer key={section.id} section={section} />) : <PageHero title={page.data.title} summary={page.data.summary} />}</>;
}
