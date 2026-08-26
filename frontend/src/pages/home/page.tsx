import { RouteMeta } from "@/components/seo/RouteMeta";
import { DevelopmentModelSection } from "./employers/components/DevelopmentModelSection";
import { FigmaProgrammesSection } from "./employers/components/FigmaProgrammesSection";
import { FigmaTestimonialsSection } from "./employers/components/FigmaTestimonialsSection";
import { FigmaUpcomingEventsSection } from "./employers/components/FigmaUpcomingEventsSection";
import { FundingGuidanceSection } from "./employers/components/FundingGuidanceSection";
import { HeroSection } from "./employers/components/HeroSection";
import { PortfolioSection } from "./employers/components/PortfolioSection";
import { ResourcesSection } from "./employers/components/ResourcesSection";
import { TrustedOrganisations } from "./employers/components/TrustedOrganisations";
import { WorkplaceDevelopmentSection } from "./employers/components/WorkplaceDevelopmentSection";
import { WorkplaceStorySection } from "./employers/components/WorkplaceStorySection";

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
      <WorkplaceDevelopmentSection />
      <FigmaProgrammesSection />
      <FigmaUpcomingEventsSection />
      <FigmaTestimonialsSection />
      <WorkplaceStorySection />
      <ResourcesSection />
      <FundingGuidanceSection />
    </div>
  );
}
