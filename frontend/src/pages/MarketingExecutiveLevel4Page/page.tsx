import { useCmsBindings } from "@/features/cms/publicContent";
import { BrainCircuit } from "lucide-react";
import { CollegePageNav } from "@/components/college/CollegePageNav";
import { CollegeStats } from "@/components/college/CollegeStats";
import { LearnerCaseStudiesSection } from "@/components/college/LearnerCaseStudiesSection";
import { FaqSection } from "@/components/common/FaqSection";
import { ProgrammeHero } from "@/components/programme/ProgrammeHero";
import { ProgrammeCardGrid } from "@/components/programme/ProgrammeGrids";
import { ProgrammeSection } from "@/components/programme/ProgrammeSection";
import { FigmaTestimonialsSection } from "@/pages/home/components/FigmaTestimonialsSection";
import { RecognitionStandardsSection } from "@/pages/home/components/RecognitionStandardsSection";
import { EmployerPartnersSection, ProgrammeEventsSection } from "@/pages/AssociateProjectManagerPage/component/ProgrammeDetailSections";
import { ProgrammeWeeklyCommitment } from "@/components/programme/ProgrammeWeeklyCommitment";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { CurriculumSection } from "./component/CurriculumSection";
import { CimQualificationSection, EligibilitySection, FundingSection } from "./component/FundingAndQualificationSections";
import { FinalCtaSection } from "./component/FinalCtaSection";
import {
  aiMarketingData, courseSchema, employerBenefits, faqHeading, faqSchema, faqs,
  heroData, learnerExperience, overviewData, pageNavigation, programmeMeta,
  programmeStats, weeklyCommitment,
} from "./data";

export default function MarketingExecutiveLevel4Page() {
  const cms = useCmsBindings(["case_studies","programme_apm_l4","programme_marketing_l4"]);
  const cmsValues = cms.resolve({ programmeMeta, courseSchema, faqSchema, heroData, pageNavigation, overviewData, programmeStats, learnerExperience, weeklyCommitment, aiMarketingData, employerBenefits, faqHeading, faqs });

  return cms.render(<div className="bg-white font-body text-[var(--color-ink)]">
    <RouteMeta fallbackTitle={cmsValues.programmeMeta.title} fallbackDescription={cmsValues.programmeMeta.description} seo={{ schema: [cmsValues.courseSchema, cmsValues.faqSchema] }} />
    <ProgrammeHero {...cmsValues.heroData} />
    <CollegePageNav items={cmsValues.pageNavigation} />
    <ProgrammeSection {...cmsValues.overviewData} pattern="ibis-wreath">
      <ProgrammeCardGrid items={cmsValues.overviewData.items} editorial />
      <CollegeStats items={cmsValues.programmeStats} compact />
    </ProgrammeSection>
    <ProgrammeSection {...cmsValues.learnerExperience} tone="soft" pattern="gold-leaf">
      <ProgrammeCardGrid items={cmsValues.learnerExperience.items} columns={4} />
      <div className="mt-10"><ProgrammeWeeklyCommitment data={cmsValues.weeklyCommitment} horizontal /></div>
    </ProgrammeSection>
    <CurriculumSection />
    <ProgrammeSection {...cmsValues.aiMarketingData} tone="dark">
      <div className="mt-12 flex flex-col items-center gap-6 border-y border-white/20 py-7 lg:flex-row lg:justify-between">
        <div className="flex items-center gap-4"><BrainCircuit className="size-10 text-kbc-gold-300" aria-hidden="true" /><p className="text-lg font-semibold">{cmsValues.aiMarketingData.labels.map((label) => <span className="block" key={label}>{label}</span>)}</p></div>
        <ol className="flex flex-wrap justify-center gap-3">{cmsValues.aiMarketingData.workflow.map((step) => <li className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-kbc-gold-300" key={step}>{step}</li>)}</ol>
      </div>
      <ProgrammeCardGrid items={cmsValues.aiMarketingData.items} columns={4} editorial inverse />
    </ProgrammeSection>
    <EligibilitySection />
    <FundingSection />
    <CimQualificationSection />
    <ProgrammeSection {...cmsValues.employerBenefits}><ProgrammeCardGrid items={cmsValues.employerBenefits.items} columns={4} editorial /></ProgrammeSection>
    <div className="kbc-figma-home">
      <LearnerCaseStudiesSection id="case-studies" programme="Marketing Executive Level 4" />
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
    <FinalCtaSection />
  </div>);
}
