import { CollegePageNav } from "@/components/college/CollegePageNav";
import { FaqSection } from "@/components/common/FaqSection";
import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { FigmaTestimonialsSection } from "../home/components/FigmaTestimonialsSection";
import { AudienceSection, AiCertificateHero, OutcomesSection, PropositionSection, ToolStackSection } from "./component/CourseSections";
import { CapstoneProjectsSection, CurriculumJourneySection } from "./component/CurriculumSections";
import { AssessmentSection, BenefitsSection, EntryFundingSection, FinalCtaSection, SecuritySection } from "./component/ProgrammeCompletionSections";
import { SolutionArchitectureSection } from "./component/SolutionArchitectureSection";
import { courseSchema, faqSchema, faqs, pageNavigation, programmeMeta } from "./data";

export default function AIProjectControlsCertificatePage() {
  return (
    <div className="bg-white font-body text-[var(--color-ink)]">
      <RouteMeta fallbackTitle={programmeMeta.title} fallbackDescription={programmeMeta.description} seo={{ schema: [courseSchema, faqSchema] }} />
      <AiCertificateHero />
      <CollegePageNav items={pageNavigation} />
      <PropositionSection />
      <ToolStackSection />
      <AudienceSection />
      <OutcomesSection />
      <SolutionArchitectureSection />
      <CurriculumJourneySection />
      <CapstoneProjectsSection />
      <BenefitsSection />
      <AssessmentSection />
      <EntryFundingSection />
      <SecuritySection />
      <FigmaTestimonialsSection />
      <FaqSection
        id="ai-faq"
        eyebrow="Questions before enrolment"
        title="Frequently asked questions."
        description="Clear answers about entry requirements, technology, data use, professional alignment and funding."
        items={faqs}
        className="sm:!scroll-mt-64"
        action={<NavigationButton to="/book-session">Book an information session</NavigationButton>}
      />
      <FinalCtaSection />
    </div>
  );
}
