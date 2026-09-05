import { RouteMeta } from "@/components/seo/RouteMeta";
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

export default function HomePage() {
  return (
    <div className="kbc-figma-home overflow-hidden">
      <RouteMeta
        fallbackTitle="Kent Business College | Chartered Project, Chartered Marketing, CIM, PMI and APMG Courses"
        fallbackDescription="Kent Business College delivers fully funded professional courses, apprenticeships and employer-supported programmes in project management, Chartered Marketing, CIM, PMI and APMG qualifications."
      />
      <HeroSection />
      <TrustedOrganisations />
      <DevelopmentModelSection />
      <PortfolioSection />
      <FigmaProgrammesSection />
      <AppliedLearningSection />
      <KbcExperienceSection />
      <SupportThroughoutSection />
      <FigmaUpcomingEventsSection />
      <CareerOutcomesSection />
      <ProgressionPathwaySection />
      <RecognitionStandardsSection />
      <FigmaTestimonialsSection />
      <FundingGuidanceSection />
    </div>
  );
}
