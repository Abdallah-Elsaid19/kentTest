import { LearnerCaseStudiesSection } from "@/components/college/LearnerCaseStudiesSection";
import { FaqSection } from "@/components/common/FaqSection";
import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { FigmaUpcomingEventsSection } from "../home/components/FigmaUpcomingEventsSection";
import { RecognitionStandardsSection } from "../home/components/RecognitionStandardsSection";
import { TrustedOrganisations } from "../home/components/TrustedOrganisations";
import { HeroSection } from "./component/HeroSection";
import { CollegePageNav } from "./component/CollegePageNav";
import { OverviewSection } from "./component/OverviewSection";
import { ProgrammesSection } from "./component/ProgrammesSection";
import { CapabilitiesSection } from "./component/CapabilitiesSection";
import { CourseContentSection } from "./component/CourseContentSection";
import { BenefitsSection } from "./component/BenefitsSection";
import { TestimonialsSection } from "./component/TestimonialsSection";
import { CareerPathwaysSection } from "./component/CareerPathwaysSection";
import { FinalCTASection } from "./component/FinalCTASection";
import { faqCopy, projectControlsFaqs } from "./data";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: projectControlsFaqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function ProjectControlsPage() {
  return (
    <div className="bg-white font-body text-[var(--color-ink)]">
      <RouteMeta
        seo={{ schema: [faqSchema] }}
        fallbackTitle="College of Project Controls and Project Management | Kent Business College"
        fallbackDescription="Discover Kent Business College's College of Project Controls and Project Management — DfE-funded project management and project controls apprenticeships, from Associate Project Manager to Project Control Professional."
      />
      <HeroSection />
      <CollegePageNav />
      <OverviewSection />
      <ProgrammesSection />
      <CapabilitiesSection />
      <CourseContentSection />
      <BenefitsSection />
      <CareerPathwaysSection />
      <TestimonialsSection />
      <div className="kbc-figma-home">
        <div id="pc-events" className="scroll-mt-20 sm:scroll-mt-32">
          <FigmaUpcomingEventsSection />
        </div>
        <LearnerCaseStudiesSection id="pc-case-studies" />
        <div id="pc-recognition" className="scroll-mt-20 sm:scroll-mt-32">
          <RecognitionStandardsSection />
        </div>
        <div id="pc-trusted" className="scroll-mt-20 sm:scroll-mt-32">
          <TrustedOrganisations />
        </div>
      </div>
      <FaqSection
        id="faq"
        eyebrow={faqCopy.eyebrow}
        title={faqCopy.title}
        description={faqCopy.description}
        items={projectControlsFaqs}
        action={<NavigationButton className="!min-h-14 min-w-[230px] sm:!min-h-16" to="/book-session">{faqCopy.cta}</NavigationButton>}
      />
      <FinalCTASection />
    </div>
  );
}
