import { useCmsBindings } from "@/features/cms/publicContent";
import { ArrowRight, BrainCircuit, ShieldCheck } from "lucide-react";
import { CollegePageNav } from "@/components/college/CollegePageNav";
import { CollegeStats } from "@/components/college/CollegeStats";
import { LearnerCaseStudiesSection } from "@/components/college/LearnerCaseStudiesSection";
import { card } from "@/components/college/layout";
import { FaqSection } from "@/components/common/FaqSection";
import { NavigationButton } from "@/components/navigation";
import { ProgrammeHero } from "@/components/programme/ProgrammeHero";
import { ProgrammeCardGrid, ProgrammeChecklist } from "@/components/programme/ProgrammeGrids";
import { ProgrammeSection } from "@/components/programme/ProgrammeSection";
import { ProgrammeCurriculumSection } from "@/components/programme/ProgrammeCurriculumSection";
import { ProgrammeEligibilitySection } from "@/components/programme/ProgrammeEligibilitySection";
import { ProgrammeQualificationSection } from "@/components/programme/ProgrammeQualificationSection";
import { ProgrammeCtaSection } from "@/components/programme/ProgrammeCtaSection";
import { ProgrammeMobileCta } from "@/components/programme/ProgrammeMobileCta";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { FigmaTestimonialsSection } from "@/pages/home/components/FigmaTestimonialsSection";
import { RecognitionStandardsSection } from "@/pages/home/components/RecognitionStandardsSection";
import { EmployerPartnersSection, ProgrammeEventsSection } from "@/pages/AssociateProjectManagerPage/component/ProgrammeDetailSections";
import {
  aiMarketingData, cimQualification, coreMarketingDisciplines, courseSchema,
  curriculumData, eligibilityData, employerBenefits, faqHeading,
  faqSchema, faqs, finalCTA, heroData, overviewData, pageNavigation,
  programmeMeta, programmeStats, mobileActions,
} from "./data";

const { actions: finalActions, contact, ...finalHeading } = finalCTA;

export default function MarketingManagerLevel6Page() {
  const cms = useCmsBindings(["case_studies","programme_apm_l4","programme_marketing_l6"]);
  const cmsValues = cms.resolve({ programmeMeta, courseSchema, faqSchema, heroData, pageNavigation, mobileActions, overviewData, programmeStats, curriculumData, coreMarketingDisciplines, cimQualification, aiMarketingData, eligibilityData, employerBenefits, faqHeading, faqs, finalHeading, finalActions, contact });

  return cms.render(<div className="bg-white font-body text-[var(--color-ink)]">
    <RouteMeta fallbackTitle={cmsValues.programmeMeta.title} fallbackDescription={cmsValues.programmeMeta.description} seo={{ schema: [cmsValues.courseSchema, cmsValues.faqSchema] }} />
    <ProgrammeHero {...cmsValues.heroData} />
    <CollegePageNav items={cmsValues.pageNavigation} />
    <ProgrammeMobileCta heroTitleId={cmsValues.heroData.titleId} finalTitleId="next-step-title" actions={cmsValues.mobileActions} />
    <ProgrammeSection {...cmsValues.overviewData} pattern="ibis-wreath">
      <article className={`${card} mt-12 grid items-center gap-8 lg:grid-cols-2`}>
        <img src={cmsValues.overviewData.feature.image} alt={cmsValues.overviewData.feature.imageAlt} width={960} height={640} loading="lazy" decoding="async" className="aspect-[3/2] w-full rounded-xl object-cover" />
        <div>
          <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">{cmsValues.overviewData.feature.title}</h3>
          <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">{cmsValues.overviewData.feature.description}</p>
          <ProgrammeChecklist items={cmsValues.overviewData.feature.items} />
        </div>
      </article>
      <ProgrammeCardGrid items={cmsValues.overviewData.items} columns={4} />
      <CollegeStats items={cmsValues.programmeStats} compact />
    </ProgrammeSection>
    <ProgrammeCurriculumSection data={cmsValues.curriculumData} />
    <ProgrammeSection {...cmsValues.coreMarketingDisciplines}><ProgrammeCardGrid items={cmsValues.coreMarketingDisciplines.items} editorial /></ProgrammeSection>
    <ProgrammeQualificationSection data={cmsValues.cimQualification} image={cmsValues.heroData.qualificationImage} />
    <ProgrammeSection {...cmsValues.aiMarketingData} tone="dark">
      <div className="mt-12 flex items-center gap-4 border-y border-white/20 py-7">
        <BrainCircuit className="size-10 shrink-0 text-kbc-gold-300" aria-hidden="true" />
        <h3 className="text-xl font-semibold text-white">{cmsValues.aiMarketingData.appliedTitle}</h3>
      </div>
      <ProgrammeCardGrid items={cmsValues.aiMarketingData.items} columns={4} editorial inverse />
      <div className="mt-10 rounded-2xl border border-white/20 bg-white/5 p-6 sm:p-8">
        <h3 className="flex items-center gap-3 text-xl font-semibold text-white"><ShieldCheck className="size-6 shrink-0 text-kbc-gold-300" aria-hidden="true" />{cmsValues.aiMarketingData.controlsTitle}</h3>
        <ProgrammeChecklist items={cmsValues.aiMarketingData.controls} inverse />
      </div>
    </ProgrammeSection>
    <ProgrammeEligibilitySection data={cmsValues.eligibilityData} />
    <ProgrammeSection {...cmsValues.employerBenefits} tone="soft" pattern="gold-leaf"><ProgrammeCardGrid items={cmsValues.employerBenefits.items} columns={4} editorial /></ProgrammeSection>
    <div className="kbc-figma-home">
      <LearnerCaseStudiesSection id="case-studies" programme="Marketing Manager Level 6" />
    </div>
    <ProgrammeEventsSection />
    <div id="recognition" className="kbc-figma-home scroll-mt-20 sm:scroll-mt-64">
      <RecognitionStandardsSection />
    </div>
    <EmployerPartnersSection />
    <div id="testimonials" className="kbc-figma-home scroll-mt-20 sm:scroll-mt-64">
      <FigmaTestimonialsSection />
    </div>
    <FaqSection {...cmsValues.faqHeading} items={cmsValues.faqs} className="sm:!scroll-mt-64" />
    <ProgrammeCtaSection data={cmsValues.finalHeading} actions={cmsValues.finalActions.map((action, index) =>
      <NavigationButton key={action.label} to={action.to} variant={index === 0 ? "accent" : "inverse"} className="w-full gap-2">{action.label}<ArrowRight className="size-4 shrink-0" aria-hidden="true" /></NavigationButton>)}>
      <p className="mt-8 text-sm leading-6 text-white/75">{cmsValues.contact}</p>
    </ProgrammeCtaSection>
  </div>);
}
