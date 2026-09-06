import { RouteMeta } from "@/components/seo/RouteMeta";
import { KbcExperienceSection } from "../home/components/KbcExperienceSection";
import { RecognitionStandardsSection } from "../home/components/RecognitionStandardsSection";
import { TrustedOrganisations } from "../home/components/TrustedOrganisations";
import { LearnerAudienceSection } from "./components/LearnerAudienceSection";
import { LearnerFaqSection } from "./components/LearnerFaqSection";
import { LearnerFinalCta } from "./components/LearnerFinalCta";
import { LearnerFundingSection } from "./components/LearnerFundingSection";
import { LearnerHeroSection } from "./components/LearnerHeroSection";
import { LearnerHowSection } from "./components/LearnerHowSection";
import { LearnerProgrammesSection } from "./components/LearnerProgrammesSection";
import { LearnerReviewsSection } from "./components/LearnerReviewsSection";
import { LearnerStorySection } from "./components/LearnerStorySection";
import { LearnerSupportSection } from "./components/LearnerSupportSection";

export default function EmployersHomePage() {
  return (
    <div className="overflow-hidden bg-white font-body text-[#17131d]">
      <RouteMeta
        fallbackTitle="For Employers | Kent Business College"
        fallbackDescription="Upskill your workforce with levy-funded apprenticeships and tailored professional development delivered flexibly around your business."
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
      <LearnerStorySection />
      <LearnerReviewsSection />
      <div className="kbc-figma-home">
        <RecognitionStandardsSection />
        <TrustedOrganisations />
      </div>
      <LearnerFaqSection />
      <LearnerFinalCta />
    </div>
  );
}
