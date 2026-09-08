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
  return <div className="bg-white font-body text-[var(--color-ink)]">
    <RouteMeta fallbackTitle={programmeMeta.title} fallbackDescription={programmeMeta.description} seo={{ schema: [courseSchema, faqSchema] }} />
    <ProgrammeHero {...heroData} />
    <CollegePageNav items={pageNavigation} />
    <ProgrammeMobileCta heroTitleId={heroData.titleId} finalTitleId="next-step-title" actions={mobileActions} />
    <ProgrammeSection {...overviewData} pattern="ibis-wreath">
      <article className={`${card} mt-12 grid items-center gap-8 lg:grid-cols-2`}>
        <img src={overviewData.feature.image} alt={overviewData.feature.imageAlt} width={960} height={640} loading="lazy" decoding="async" className="aspect-[3/2] w-full rounded-xl object-cover" />
        <div>
          <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">{overviewData.feature.title}</h3>
          <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">{overviewData.feature.description}</p>
          <ProgrammeChecklist items={overviewData.feature.items} />
        </div>
      </article>
      <ProgrammeCardGrid items={overviewData.items} columns={4} />
      <CollegeStats items={programmeStats} compact />
    </ProgrammeSection>
    <ProgrammeCurriculumSection data={curriculumData} />
    <ProgrammeSection {...coreMarketingDisciplines}><ProgrammeCardGrid items={coreMarketingDisciplines.items} editorial /></ProgrammeSection>
    <ProgrammeQualificationSection data={cimQualification} image={heroData.qualificationImage} />
    <ProgrammeSection {...aiMarketingData} tone="dark">
      <div className="mt-12 flex items-center gap-4 border-y border-white/20 py-7">
        <BrainCircuit className="size-10 shrink-0 text-kbc-gold-300" aria-hidden="true" />
        <h3 className="text-xl font-semibold text-white">{aiMarketingData.appliedTitle}</h3>
      </div>
      <ProgrammeCardGrid items={aiMarketingData.items} columns={4} editorial inverse />
      <div className="mt-10 rounded-2xl border border-white/20 bg-white/5 p-6 sm:p-8">
        <h3 className="flex items-center gap-3 text-xl font-semibold text-white"><ShieldCheck className="size-6 shrink-0 text-kbc-gold-300" aria-hidden="true" />{aiMarketingData.controlsTitle}</h3>
        <ProgrammeChecklist items={aiMarketingData.controls} inverse />
      </div>
    </ProgrammeSection>
    <ProgrammeEligibilitySection data={eligibilityData} />
    <ProgrammeSection {...employerBenefits} tone="soft" pattern="gold-leaf"><ProgrammeCardGrid items={employerBenefits.items} columns={4} editorial /></ProgrammeSection>
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
    <FaqSection {...faqHeading} items={faqs} className="sm:!scroll-mt-64" />
    <ProgrammeCtaSection data={finalHeading} actions={finalActions.map((action, index) =>
      <NavigationButton key={action.label} to={action.to} variant={index === 0 ? "accent" : "inverse"} className="w-full gap-2">{action.label}<ArrowRight className="size-4 shrink-0" aria-hidden="true" /></NavigationButton>)}>
      <p className="mt-8 text-sm leading-6 text-white/75">{contact}</p>
    </ProgrammeCtaSection>
  </div>;
}
