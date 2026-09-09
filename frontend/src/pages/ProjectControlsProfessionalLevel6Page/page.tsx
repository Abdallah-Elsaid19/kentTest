import { useCmsBindings } from "@/features/cms/publicContent";
import { CollegePageNav } from "@/components/college/CollegePageNav";
import { FaqSection } from "@/components/common/FaqSection";
import { NavigationButton } from "@/components/navigation";
import { ProgrammeHero } from "@/components/programme/ProgrammeHero";
import { ProgrammeSection } from "@/components/programme/ProgrammeSection";
import { ProgrammeCardGrid, ProgrammeBenefits, ProgrammePartners, ProgrammePeople } from "@/components/programme/ProgrammeGrids";
import { ProgrammeWorkload } from "@/components/programme/ProgrammeWorkload";
import { ProgrammeAlternativeRoute, ProgrammeFunding, ProgrammeNextSteps, ProgrammeOutputs } from "@/components/programme/ProgrammeSupportSections";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { FigmaTestimonialsSection } from "@/pages/home/components/FigmaTestimonialsSection";
import { FigmaUpcomingEventsSection } from "@/pages/home/components/FigmaUpcomingEventsSection";
import { LearnerCaseStudiesSection } from "@/components/college/LearnerCaseStudiesSection";
import { RecognitionStandardsSection } from "@/pages/home/components/RecognitionStandardsSection";
import { PathwaysSection } from "./component/PathwaysSection";
import { audienceData, benefitsData, coachData, cohortData, courseSchema, deliveryData, eventsData, faqSchema, faqs, finalCTA, fundingData, heroData, outputsData, overviewData, pageNavigation, partnerData, programmeMeta, structureData, workloadData } from "./data";

export default function ProjectControlsProfessionalLevel6Page() {
  const cms = useCmsBindings(["programme_pcp_l6","case_studies"]);
  const cmsValues = cms.resolve({ programmeMeta, courseSchema, faqSchema, heroData, pageNavigation, overviewData, audienceData, structureData, cohortData, outputsData, deliveryData, workloadData, coachData, benefitsData, fundingData, eventsData, partnerData, faqs, finalCTA });

  return cms.render(<div className="bg-white font-body text-[var(--color-ink)]">
    <RouteMeta fallbackTitle={cmsValues.programmeMeta.title} fallbackDescription={cmsValues.programmeMeta.description} seo={{ schema: [cmsValues.courseSchema, cmsValues.faqSchema] }} />
    <ProgrammeHero {...cmsValues.heroData} />
    <CollegePageNav items={cmsValues.pageNavigation} />
    <ProgrammeSection {...cmsValues.overviewData} pattern="ibis-wreath">
      <ProgrammeCardGrid items={cmsValues.overviewData.items} editorial />
      <p className="mt-8 rounded-2xl border border-primary/15 bg-kbc-purple-50 p-6 text-sm leading-7 text-[var(--color-muted)]">{cmsValues.overviewData.note}</p>
    </ProgrammeSection>
    <ProgrammeSection {...cmsValues.audienceData} tone="soft"><ProgrammeCardGrid items={cmsValues.audienceData.items} /></ProgrammeSection>
    <ProgrammeSection {...cmsValues.structureData} tone="dark" pattern="horse-growth">
      <ProgrammeCardGrid items={cmsValues.structureData.items} editorial inverse />
      <p className="mt-8 border-l-2 border-kbc-gold-500 pl-5 text-sm leading-7 text-white/75">{cmsValues.structureData.note}</p>
    </ProgrammeSection>
    <PathwaysSection />
    <ProgrammeSection {...cmsValues.cohortData}><ProgrammeCardGrid items={cmsValues.cohortData.items} columns={2} editorial /></ProgrammeSection>
    <ProgrammeOutputs data={cmsValues.outputsData} />
    <ProgrammeSection {...cmsValues.deliveryData} tone="soft" pattern="gold-leaf">
      <ProgrammeCardGrid items={cmsValues.deliveryData.items.slice(0, 4)} columns={4} editorial dividers />
      <ProgrammeCardGrid items={cmsValues.deliveryData.items.slice(4)} columns={2} />
    </ProgrammeSection>
    <ProgrammeWorkload data={cmsValues.workloadData} />
    <ProgrammeAlternativeRoute data={cmsValues.workloadData.alternative} />
    <ProgrammePeople data={cmsValues.coachData} />
    <ProgrammeBenefits data={cmsValues.benefitsData} />
    <ProgrammeFunding data={cmsValues.fundingData} />
    <div className="kbc-figma-home">
      <LearnerCaseStudiesSection id="case-studies" programme="Project Control Professional Level 6" />
      <FigmaUpcomingEventsSection id="upcoming-programme-events" search={cmsValues.eventsData.search} eyebrow={cmsValues.eventsData.eyebrow} title={cmsValues.eventsData.upcomingTitle} description={cmsValues.eventsData.upcomingDescription} />
    </div>
    <div id="recognition" className="kbc-figma-home scroll-mt-20 sm:scroll-mt-32"><RecognitionStandardsSection /></div>
    <ProgrammePartners data={cmsValues.partnerData} />
    <div id="testimonials" className="kbc-figma-home scroll-mt-20 sm:scroll-mt-64"><FigmaTestimonialsSection /></div>
    <FaqSection id="faq" eyebrow={cms.text("programme_pcp_l6.pages_project_controls_professional_leve_project_controls_professional_level6_page.eyebrow_001")} title={cms.text("programme_pcp_l6.pages_project_controls_professional_leve_project_controls_professional_level6_page.title_002")} items={cmsValues.faqs} className="sm:!scroll-mt-64" action={<NavigationButton to={cms.text("programme_pcp_l6.pages_project_controls_professional_leve_project_controls_professional_level6_page.to_003")}>{cms.text("programme_pcp_l6.pages_project_controls_professional_leve_project_controls_professional_level6_page.text_004")}</NavigationButton>} />
    <ProgrammeNextSteps data={cmsValues.finalCTA} />
  </div>);
}
