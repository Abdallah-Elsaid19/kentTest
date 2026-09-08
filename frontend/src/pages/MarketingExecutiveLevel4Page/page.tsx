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
  return <div className="bg-white font-body text-[var(--color-ink)]">
    <RouteMeta fallbackTitle={programmeMeta.title} fallbackDescription={programmeMeta.description} seo={{ schema: [courseSchema, faqSchema] }} />
    <ProgrammeHero {...heroData} />
    <CollegePageNav items={pageNavigation} />
    <ProgrammeSection {...overviewData} pattern="ibis-wreath">
      <ProgrammeCardGrid items={overviewData.items} editorial />
      <CollegeStats items={programmeStats} compact />
    </ProgrammeSection>
    <ProgrammeSection {...learnerExperience} tone="soft" pattern="gold-leaf">
      <ProgrammeCardGrid items={learnerExperience.items} columns={4} />
      <div className="mt-10"><ProgrammeWeeklyCommitment data={weeklyCommitment} horizontal /></div>
    </ProgrammeSection>
    <CurriculumSection />
    <ProgrammeSection {...aiMarketingData} tone="dark">
      <div className="mt-12 flex flex-col items-center gap-6 border-y border-white/20 py-7 lg:flex-row lg:justify-between">
        <div className="flex items-center gap-4"><BrainCircuit className="size-10 text-kbc-gold-300" aria-hidden="true" /><p className="text-lg font-semibold">{aiMarketingData.labels.map((label) => <span className="block" key={label}>{label}</span>)}</p></div>
        <ol className="flex flex-wrap justify-center gap-3">{aiMarketingData.workflow.map((step) => <li className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-kbc-gold-300" key={step}>{step}</li>)}</ol>
      </div>
      <ProgrammeCardGrid items={aiMarketingData.items} columns={4} editorial inverse />
    </ProgrammeSection>
    <EligibilitySection />
    <FundingSection />
    <CimQualificationSection />
    <ProgrammeSection {...employerBenefits}><ProgrammeCardGrid items={employerBenefits.items} columns={4} editorial /></ProgrammeSection>
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
    <FaqSection {...faqHeading} items={faqs} className="sm:!scroll-mt-64" />
    <FinalCtaSection />
  </div>;
}
