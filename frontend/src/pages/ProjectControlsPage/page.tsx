import { useCmsBindings } from "@/features/cms/publicContent";
import { FaqSection } from "@/components/common/FaqSection";
import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { FigmaTestimonialsSection } from "../home/components/FigmaTestimonialsSection";
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
  const cms = useCmsBindings(["college_project_controls"]);
  const cmsValues = cms.resolve({ faqSchema, faqCopy, projectControlsFaqs });

  return cms.render((
    <div className="bg-white font-body text-[var(--color-ink)]">
      <RouteMeta
        seo={{ schema: [cmsValues.faqSchema] }}
        fallbackTitle={cms.text("college_project_controls.pages_project_controls_page_page_project_controls_page.fallback_title_001")}
        fallbackDescription={cms.text("college_project_controls.pages_project_controls_page_page_project_controls_page.fallback_description_002")}
      />
      <HeroSection />
      <CollegePageNav />
      <OverviewSection />
      <ProgrammesSection />
      <CapabilitiesSection />
      <CourseContentSection />
      <BenefitsSection />
      <CareerPathwaysSection />
      <div className="kbc-figma-home">
        <div id="pc-events" className="scroll-mt-20 sm:scroll-mt-32">
          <FigmaUpcomingEventsSection />
        </div>
        <div id="pc-recognition" className="scroll-mt-20 sm:scroll-mt-32">
          <RecognitionStandardsSection />
        </div>
        <div id="pc-trusted" className="scroll-mt-20 sm:scroll-mt-32">
          <TrustedOrganisations />
        </div>
      </div>
      <div className="kbc-figma-home">
        <FigmaTestimonialsSection />
      </div>
      <FaqSection
        id="faq"
        eyebrow={cmsValues.faqCopy.eyebrow}
        title={cmsValues.faqCopy.title}
        description={cmsValues.faqCopy.description}
        items={cmsValues.projectControlsFaqs}
        action={<NavigationButton className="!min-h-14 min-w-[230px] sm:!min-h-16" to={cms.text("college_project_controls.pages_project_controls_page_page_project_controls_page.to_003")}>{cmsValues.faqCopy.cta}</NavigationButton>}
      />
      <FinalCTASection />
    </div>
  ));
}
