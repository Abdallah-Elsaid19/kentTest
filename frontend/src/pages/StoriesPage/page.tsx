import { RouteMeta } from "@/components/seo/RouteMeta";
import { useStories } from "@/features/content/queries";
import { CapabilityCtaSection } from "./components/CapabilityCtaSection";
import { CaseStudiesHero } from "./components/CaseStudiesHero";
import { CaseStudiesListing } from "./components/CaseStudiesListing";
import { JourneyCtaSection } from "./components/JourneyCtaSection";
import { LearningPathwaysSection } from "./components/LearningPathwaysSection";
import { OutcomesSection } from "./components/OutcomesSection";
import { fallbackStories, mapApiStory } from "./data";

export default function StoriesPage() {
  const query = useStories("?perPage=100");
  const apiStories = query.data?.items.map(mapApiStory) || [];
  const stories = apiStories.length ? apiStories : fallbackStories;

  return (
    <div className="kbc-figma-home overflow-hidden bg-white [&_.figma-btn--gold]:!text-[#401B8C] [&_.figma-btn--gold:hover]:!text-[#401B8C]">
      <RouteMeta fallbackTitle="Case Studies | Kent Business College" fallbackDescription="Explore privacy-approved learner stories and see how Kent Business College learning connects professional theory with workplace practice." />
      <CaseStudiesHero />
      <CaseStudiesListing stories={stories} isRefreshing={query.isLoading} />
      <OutcomesSection />
      <LearningPathwaysSection />
      <JourneyCtaSection />
      <CapabilityCtaSection />
    </div>
  );
}
