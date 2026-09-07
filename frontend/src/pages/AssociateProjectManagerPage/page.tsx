import { FaqSection } from "@/components/common/FaqSection";
import { CollegePageNav } from "@/components/college/CollegePageNav";
import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";

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
import { FinalCtaSection, TestimonialsSection } from "./component/ProofAndCtaSections";
import { courseSchema, faqSchema, faqs, pageNavigation, programmeMeta } from "./data";

export default function AssociateProjectManagerPage() {
  return (
    <div className="bg-white font-body text-[var(--color-ink)]">
      <RouteMeta
        seo={{ schema: [courseSchema, faqSchema] }}
        fallbackTitle={programmeMeta.title}
        fallbackDescription={programmeMeta.description}
      />
      <HeroSection />
      <CollegePageNav items={pageNavigation} />
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
      <TestimonialsSection />
      <ProgrammeEventsSection />
      <EmployerPartnersSection />
      <FaqSection
        id="apm-faq"
        eyebrow="Programme questions"
        title="What professionals and employers usually want to know"
        items={faqs}
        className="sm:!scroll-mt-64"
        action={<NavigationButton className="!min-h-14 w-full sm:w-auto sm:!min-h-16" to="/book-session">Book an information session</NavigationButton>}
      />
      <FinalCtaSection />
    </div>
  );
}
