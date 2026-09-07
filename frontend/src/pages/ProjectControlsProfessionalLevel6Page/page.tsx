import { CollegePageNav } from "@/components/college/CollegePageNav";
import { FaqSection } from "@/components/common/FaqSection";
import { NavigationButton } from "@/components/navigation";
import { ProgrammeHero } from "@/components/programme/ProgrammeHero";
import { ProgrammeSection } from "@/components/programme/ProgrammeSection";
import { ProgrammeCardGrid, ProgrammeBenefits, ProgrammePartners, ProgrammePeople } from "@/components/programme/ProgrammeGrids";
import { ProgrammeWorkload } from "@/components/programme/ProgrammeWorkload";
import { ProgrammeAlternativeRoute, ProgrammeFunding, ProgrammeNextSteps, ProgrammeOutputs } from "@/components/programme/ProgrammeSupportSections";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { FigmaUpcomingEventsSection } from "@/pages/home/components/FigmaUpcomingEventsSection";
import { PathwaysSection } from "./component/PathwaysSection";
import { audienceData, benefitsData, coachData, cohortData, courseSchema, deliveryData, eventsData, faqSchema, faqs, finalCTA, fundingData, heroData, outputsData, overviewData, pageNavigation, partnerData, programmeMeta, structureData, workloadData } from "./data";

export default function ProjectControlsProfessionalLevel6Page() {
  return <div className="bg-white font-body text-[var(--color-ink)]">
    <RouteMeta fallbackTitle={programmeMeta.title} fallbackDescription={programmeMeta.description} seo={{ schema: [courseSchema, faqSchema] }} />
    <ProgrammeHero {...heroData} />
    <CollegePageNav items={pageNavigation} />
    <ProgrammeSection {...overviewData} pattern="ibis-wreath">
      <ProgrammeCardGrid items={overviewData.items} editorial />
      <p className="mt-8 rounded-2xl border border-primary/15 bg-kbc-purple-50 p-6 text-sm leading-7 text-[var(--color-muted)]">{overviewData.note}</p>
    </ProgrammeSection>
    <ProgrammeSection {...audienceData} tone="soft"><ProgrammeCardGrid items={audienceData.items} /></ProgrammeSection>
    <ProgrammeSection {...structureData} tone="dark" pattern="horse-growth">
      <ProgrammeCardGrid items={structureData.items} editorial inverse />
      <p className="mt-8 border-l-2 border-kbc-gold-500 pl-5 text-sm leading-7 text-white/75">{structureData.note}</p>
    </ProgrammeSection>
    <PathwaysSection />
    <ProgrammeSection {...cohortData}><ProgrammeCardGrid items={cohortData.items} columns={2} editorial /></ProgrammeSection>
    <ProgrammeOutputs data={outputsData} />
    <ProgrammeSection {...deliveryData} tone="soft" pattern="gold-leaf">
      <ProgrammeCardGrid items={deliveryData.items.slice(0, 4)} columns={4} editorial />
      <ProgrammeCardGrid items={deliveryData.items.slice(4)} columns={2} />
    </ProgrammeSection>
    <ProgrammeWorkload data={workloadData} />
    <ProgrammeAlternativeRoute data={workloadData.alternative} />
    <ProgrammePeople data={coachData} />
    <ProgrammeBenefits data={benefitsData} />
    <ProgrammeFunding data={fundingData} />
    <div className="kbc-figma-home"><FigmaUpcomingEventsSection id="upcoming-programme-events" search={eventsData.search} eyebrow={eventsData.eyebrow} title={eventsData.upcomingTitle} description={eventsData.upcomingDescription} /></div>
    <ProgrammePartners data={partnerData} />
    <FaqSection id="faq" eyebrow="Frequently asked questions" title="Practical answers before you apply" items={faqs} className="sm:!scroll-mt-64" action={<NavigationButton to="/book-session">Book an information session</NavigationButton>} />
    <ProgrammeNextSteps data={finalCTA} />
  </div>;
}
