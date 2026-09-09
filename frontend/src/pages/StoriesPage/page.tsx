import { useCmsBindings } from "@/features/cms/publicContent";
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
  const cms = useCmsBindings(["case_studies"]);
  const cmsValues = cms.resolve({ fallbackStories });

  const query = useStories("?perPage=100");
  const apiStories = query.data?.items.map(mapApiStory) || [];
  const stories = apiStories.length ? apiStories : cmsValues.fallbackStories;

  return cms.render((
    <div className="kbc-figma-home overflow-hidden bg-white [&_.figma-btn--gold]:!text-[#401B8C] [&_.figma-btn--gold:hover]:!text-[#401B8C]">
      <RouteMeta fallbackTitle={cms.text("case_studies.pages_stories_page_page_stories_page.fallback_title_001")} fallbackDescription={cms.text("case_studies.pages_stories_page_page_stories_page.fallback_description_002")} />
      <CaseStudiesHero />
      <CaseStudiesListing stories={stories} isRefreshing={query.isLoading} />
      <OutcomesSection />
      <LearningPathwaysSection />
      <JourneyCtaSection />
      <CapabilityCtaSection />
    </div>
  ));
}
