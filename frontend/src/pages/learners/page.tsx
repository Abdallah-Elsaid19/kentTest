import { RouteMeta } from "@/components/seo/RouteMeta";
import { KbcExperienceSection } from "../home/components/KbcExperienceSection";
import { FigmaTestimonialsSection } from "../home/components/FigmaTestimonialsSection";
import { RecognitionStandardsSection } from "../home/components/RecognitionStandardsSection";
import { TrustedOrganisations } from "../home/components/TrustedOrganisations";
import { LearnerAudienceSection } from "./components/LearnerAudienceSection";
import { LearnerFaqSection } from "./components/LearnerFaqSection";
import { LearnerFinalCta } from "./components/LearnerFinalCta";
import { LearnerFundingSection } from "./components/LearnerFundingSection";
import { LearnerHeroSection } from "./components/LearnerHeroSection";
import { LearnerHowSection } from "./components/LearnerHowSection";
import { LearnerProgrammesSection } from "./components/LearnerProgrammesSection";
import { LearnerSupportSection } from "./components/LearnerSupportSection";

export default function LearnersHomePage() {
  return (
    <div className="overflow-hidden bg-white font-body text-[#17131d]">
      <RouteMeta
        fallbackTitle="For Learners | Kent Business College"
        fallbackDescription="Build role-relevant professional capability through Kent Business College apprenticeships, coaching and recognised pathways."
      />
      <LearnerHeroSection />
      <LearnerAudienceSection />
      <LearnerHowSection />
      <LearnerProgrammesSection />
      <LearnerFundingSection />
      <LearnerSupportSection />
      <div className="kbc-figma-home">
        <KbcExperienceSection />
      </div>
      <div className="kbc-figma-home">
        <RecognitionStandardsSection />
        <TrustedOrganisations />
        <FigmaTestimonialsSection />
      </div>
      <LearnerFaqSection />
      <LearnerFinalCta />
    </div>
  );
}
