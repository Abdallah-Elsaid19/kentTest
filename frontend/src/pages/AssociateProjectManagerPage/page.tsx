import { useCmsBindings } from "@/features/cms/publicContent";
import { FaqSection } from "@/components/common/FaqSection";
import { LearnerCaseStudiesSection } from "@/components/college/LearnerCaseStudiesSection";
import { CollegePageNav } from "@/components/college/CollegePageNav";
import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { FigmaTestimonialsSection } from "@/pages/home/components/FigmaTestimonialsSection";
import { RecognitionStandardsSection } from "@/pages/home/components/RecognitionStandardsSection";

import { EligibilitySection, FundingSection } from "./component/FundingEmployerSections";
import { HeroSection } from "./component/HeroSection";
import { CoachesSection, WorkloadSection } from "./component/LearningSupportSections";
import { MobileProgrammeCta } from "./component/MobileProgrammeCta";
import {
  AlternativeFundingSection,
  AlternativeRouteNotice,
  AudienceRolesSection,
  DeliverySection,
  EmployerPartnersSection,
  LearnerBenefitsSection,
  PathwaySection,
  PracticalOutputsSection,
  ProgrammeCurriculumSection,
  ProgrammeEventsSection,
  ProgrammeOverviewSection,
} from "./component/ProgrammeDetailSections";
import { FinalCtaSection } from "./component/ProofAndCtaSections";
import { courseSchema, faqSchema, faqs, pageNavigation, programmeMeta } from "./data";

export default function AssociateProjectManagerPage() {
  const cms = useCmsBindings(["programme_apm_l4","case_studies"]);
  const cmsValues = cms.resolve({ courseSchema, faqSchema, programmeMeta, pageNavigation, faqs });

  return cms.render((
    <div className="bg-white font-body text-[var(--color-ink)]">
      <RouteMeta
        seo={{ schema: [cmsValues.courseSchema, cmsValues.faqSchema] }}
        fallbackTitle={cmsValues.programmeMeta.title}
        fallbackDescription={cmsValues.programmeMeta.description}
      />
      <HeroSection />
      <CollegePageNav items={cmsValues.pageNavigation} />
      <MobileProgrammeCta />
      <ProgrammeOverviewSection />
      <AudienceRolesSection />
      <PathwaySection />
      <ProgrammeCurriculumSection />
      <PracticalOutputsSection />
      <DeliverySection />
      <WorkloadSection />
      <AlternativeRouteNotice />
      <CoachesSection />
      <LearnerBenefitsSection />
      <FundingSection />
      <AlternativeFundingSection />
      <EligibilitySection />
      <div className="kbc-figma-home">
        <LearnerCaseStudiesSection id="case-studies" programme="Associate Project Manager Level 4" />
      </div>
      <ProgrammeEventsSection />
      <div id="recognition" className="kbc-figma-home scroll-mt-20 sm:scroll-mt-32">
        <RecognitionStandardsSection />
      </div>
      <EmployerPartnersSection />
      <div id="proof" className="kbc-figma-home scroll-mt-20 sm:scroll-mt-64">
        <FigmaTestimonialsSection />
      </div>
      <FaqSection
        id="apm-faq"
        eyebrow={cms.text("programme_apm_l4.pages_associate_project_manager_page_pag_associate_project_manager_page.eyebrow_001")}
        title={cms.text("programme_apm_l4.pages_associate_project_manager_page_pag_associate_project_manager_page.title_002")}
        items={cmsValues.faqs}
        className="sm:!scroll-mt-64"
        action={<NavigationButton className="!min-h-14 w-full sm:w-auto sm:!min-h-16" to={cms.text("programme_apm_l4.pages_associate_project_manager_page_pag_associate_project_manager_page.to_003")}>{cms.text("programme_apm_l4.pages_associate_project_manager_page_pag_associate_project_manager_page.text_004")}</NavigationButton>}
      />
      <FinalCtaSection />
    </div>
  ));
}
