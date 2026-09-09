import { useEffect, type ComponentType } from "react";
import { useOutletContext } from "react-router-dom";
import type { MainLayoutOutletContext } from "@/components/layout/MainLayout";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { PageLoadingState, ErrorState } from "@/components/ui/AsyncState";
import type { HomeDocument } from "@/features/cms/schema";
import { usePublishedHome } from "@/features/cms/queries";
import type { HomeSection } from "@/features/cms/homeTypes";
import { HomeContentContext, useHomeSection } from "./contentContext";
import { AppliedLearningSection } from "./components/AppliedLearningSection";
import { KbcExperienceSection } from "./components/KbcExperienceSection";
import { SupportThroughoutSection } from "./components/SupportThroughoutSection";
import { DevelopmentModelSection } from "./components/DevelopmentModelSection";
import { FigmaProgrammesSection } from "./components/FigmaProgrammesSection";
import { FigmaTestimonialsSection } from "./components/FigmaTestimonialsSection";
import { FigmaUpcomingEventsSection } from "./components/FigmaUpcomingEventsSection";
import { CareerOutcomesSection } from "./components/CareerOutcomesSection";
import { ProgressionPathwaySection } from "./components/ProgressionPathwaySection";
import { RecognitionStandardsSection } from "./components/RecognitionStandardsSection";
import { FundingGuidanceSection } from "./components/FundingGuidanceSection";
import { HeroSection } from "./components/HeroSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { TrustedOrganisations } from "./components/TrustedOrganisations";

function HomeEvents() {
  const { fallbackImages, ...content } = useHomeSection("events");
  return <FigmaUpcomingEventsSection {...content} images={fallbackImages} databaseOnly />;
}
function HomeTestimonials() {
  const content = useHomeSection("testimonials");
  return <FigmaTestimonialsSection {...content} />;
}
const sections: [HomeSection, ComponentType][] = [
  ["hero", HeroSection], ["trusted", TrustedOrganisations], ["development", DevelopmentModelSection],
  ["colleges", PortfolioSection], ["programmes", FigmaProgrammesSection], ["applied", AppliedLearningSection],
  ["experience", KbcExperienceSection], ["support", SupportThroughoutSection], ["events", HomeEvents],
  ["careers", CareerOutcomesSection], ["progression", ProgressionPathwaySection], ["recognition", RecognitionStandardsSection],
  ["testimonials", HomeTestimonials], ["funding", FundingGuidanceSection],
];

export function HomeSections({ content, preview = false }: { content: HomeDocument; preview?: boolean }) {
  return <HomeContentContext.Provider value={content}>
    <div className="kbc-figma-home overflow-hidden">
      {!preview && content.metadata && <RouteMeta fallbackTitle={content.metadata.title} fallbackDescription={content.metadata.description} />}
      {sections.map(([key, Section]) => content[key] ? <Section key={key} /> : null)}
    </div>
  </HomeContentContext.Provider>;
}

export default function HomePage() {
  const query = usePublishedHome();
  const markPageReady = useOutletContext<MainLayoutOutletContext | null>()?.markPageReady;
  useEffect(() => {
    if (!query.isPending) markPageReady?.();
  }, [markPageReady, query.isPending]);
  if (query.isPending) return <PageLoadingState />;
  if (!query.data) return <div className="py-24"><ErrorState message="We couldn't load the Home page. Please try again." /><div className="text-center"><button type="button" className="rounded-xl bg-primary px-6 py-3 text-white" onClick={() => void query.refetch()}>Try again</button></div></div>;
  return <HomeSections content={query.data} />;
}
