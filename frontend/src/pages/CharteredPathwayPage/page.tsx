import { CollegePageNav } from '@/components/college/CollegePageNav';
import { Check } from 'lucide-react';
import { FaqSection } from '@/components/common/FaqSection';
import { ProgrammeHero } from '@/components/programme/ProgrammeHero';
import { ProgrammeSection } from '@/components/programme/ProgrammeSection';
import { ProgrammeCardGrid, ProgrammeChecklist } from '@/components/programme/ProgrammeGrids';
import { ProgrammeOutputs } from '@/components/programme/ProgrammeSupportSections';
import { ProgrammeWeeklyCommitment } from '@/components/programme/ProgrammeWeeklyCommitment';
import { ProgrammeCtaSection } from '@/components/programme/ProgrammeCtaSection';
import { ProgrammeMobileCta } from '@/components/programme/ProgrammeMobileCta';
import { ProgrammeCopy, ProgrammeSectionFooter } from '@/components/programme/ProgrammeCopy';
import { RouteMeta } from '@/components/seo/RouteMeta';
import { FigmaTestimonialsSection } from '@/pages/home/components/FigmaTestimonialsSection';
import { FigmaUpcomingEventsSection } from '@/pages/home/components/FigmaUpcomingEventsSection';
import { ExpertsSection } from './component/ExpertsSection';
import { EligibilityChecker } from './component/EligibilityChecker';
import { EligibilityIndicators } from './component/EligibilityIndicators';
import { ProgrammeStructureSection } from './component/ProgrammeStructureSection';
import { audienceData, deliveryData, eligibilityData, employerData, eventsData, faqData, finalCTA, fundingData, heroData, includedData, mobileActions, outputsData, overviewData, pageNavigation, recognitionData, testimonialsData } from './data';

export default function CharteredPathwayPage() {
  return <div className="bg-white pb-20 font-body text-[var(--color-ink)] sm:pb-0">
    <RouteMeta fallbackTitle="Chartered Pathway | Project Controls Professional Level 6 | Kent Business College" fallbackDescription={heroData.hero.audience} />
    <ProgrammeHero {...heroData} />
    <CollegePageNav items={pageNavigation} />
    <ProgrammeMobileCta heroTitleId={heroData.titleId} finalTitleId={`${finalCTA.id}-title`} actions={mobileActions} />
    <ProgrammeSection {...overviewData} pattern="ibis-wreath">
      <ProgrammeCardGrid items={overviewData.items} columns={2} editorial />
      <ProgrammeSectionFooter notes={[overviewData.note]} actions={overviewData.actions} />
    </ProgrammeSection>
    <ProgrammeSection {...audienceData} tone="soft">
      <ProgrammeCardGrid items={audienceData.items} columns={4} />
      <div className="mt-8 rounded-2xl bg-primary-dark p-6 text-white sm:p-8">
        <p className="text-xs font-bold uppercase tracking-widest text-kbc-gold-300">{audienceData.callout.eyebrow}</p>
        <h3 className="mt-4 text-2xl font-semibold text-white">{audienceData.callout.title}</h3>
        <ProgrammeSectionFooter inverse notes={[audienceData.callout.description, audienceData.callout.note]} actions={audienceData.actions} />
      </div>
    </ProgrammeSection>
    <ProgrammeSection {...recognitionData}>
      <div className="mt-12 grid items-center gap-8 rounded-2xl border border-kbc-purple-100 bg-kbc-purple-50 p-6 sm:p-8 lg:grid-cols-[1fr_280px]">
        <div><h3 className="text-2xl font-semibold">{recognitionData.titleLabel}</h3><ProgrammeChecklist items={recognitionData.proofPoints} /></div>
        <img src={recognitionData.image} alt={recognitionData.titleLabel} width={548} height={349} loading="lazy" decoding="async" className="mx-auto w-full max-w-64 rounded-2xl" />
      </div>
      <h3 className="mt-10 text-2xl font-semibold">{recognitionData.journeyTitle}</h3>
      <ProgrammeCardGrid items={recognitionData.items} columns={4} editorial titleAs="h4" />
      <aside className="mt-8 rounded-2xl border-l-4 border-primary bg-kbc-purple-50 p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-primary-dark">{recognitionData.awardNote}</h3>
        <ProgrammeChecklist items={recognitionData.boundaries} />
      </aside>
      <ProgrammeSectionFooter notes={[recognitionData.statement, recognitionData.note]} actions={recognitionData.actions} />
    </ProgrammeSection>
    <ExpertsSection />
    <ProgrammeStructureSection />
    <ProgrammeSection {...includedData}>
      <ProgrammeCardGrid items={includedData.items} />
      <h3 className="mt-10 text-2xl font-semibold">{includedData.benefitsTitle}</h3>
      <ProgrammeCardGrid items={includedData.benefits} editorial titleAs="h4" />
      <ProgrammeSectionFooter notes={[includedData.note]} />
    </ProgrammeSection>
    <ProgrammeSection {...deliveryData} tone="soft" pattern="gold-leaf">
      <div className="mt-12"><ProgrammeWeeklyCommitment data={deliveryData.weekly} horizontal /></div>
      <ProgrammeCardGrid items={deliveryData.items} />
      <h3 className="mt-10 text-2xl font-semibold">{deliveryData.cycleTitle}</h3>
      <ProgrammeCardGrid items={deliveryData.cycle} columns={4} editorial dividers titleAs="h4" />
      <ProgrammeSectionFooter notes={deliveryData.notes} />
      <div className="mt-8 rounded-2xl border border-kbc-purple-100 bg-white p-6 sm:p-8"><h3 className="text-xl font-semibold">{deliveryData.employer.title}</h3><p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{deliveryData.employer.description}</p></div>
      <ProgrammeSectionFooter notes={[deliveryData.actionNote]} actions={deliveryData.actions} />
    </ProgrammeSection>
    <ProgrammeSection {...employerData}>
      <ProgrammeCardGrid items={employerData.items} columns={2} editorial />
      <ProgrammeOutputs data={outputsData} embedded />
      <ProgrammeSectionFooter notes={[employerData.statement]} />
      <div className="mt-10 rounded-2xl bg-primary-dark p-6 text-white sm:p-8"><h3 className="text-2xl font-semibold text-white">{employerData.requirements.title}</h3><p className="mt-4 text-sm leading-7 text-white/80">{employerData.requirements.description}</p><ProgrammeChecklist items={employerData.requirements.items} inverse /></div>
      <ProgrammeSectionFooter notes={[...employerData.notes, employerData.actionNote]} actions={employerData.actions} />
    </ProgrammeSection>
    <ProgrammeSection {...fundingData} tone="soft">
      <div className="mt-12 rounded-2xl bg-primary-dark p-6 text-white sm:p-8"><h3 className="text-lg font-semibold text-white">{fundingData.band.title}</h3><p className="mt-4 text-5xl font-semibold tracking-tight text-kbc-gold-300">{fundingData.band.amount}</p><p className="mt-5 max-w-3xl text-sm leading-7 text-white/80">{fundingData.band.description}</p></div>
      <h3 className="mt-10 text-2xl font-semibold">{fundingData.routesTitle}</h3>
      <ProgrammeCardGrid items={fundingData.routeGroups} columns={2} titleAs="h4" />
      <ul className="mt-6 flex flex-wrap gap-3">{fundingData.chips.map(chip => <li key={chip.label} className="inline-flex min-h-10 items-center gap-2 rounded-full border border-kbc-purple-100 bg-white px-4 py-2 text-sm font-medium text-primary-dark">
        <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />{chip.label}
      </li>)}</ul>
      <div className="mt-10 rounded-2xl border border-kbc-purple-200 bg-white p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-widest text-primary">{fundingData.fund.eyebrow}</p>
        <h3 className="mt-4 text-2xl font-semibold">{fundingData.fund.title}</h3>
        <ProgrammeSectionFooter notes={[fundingData.fund.lead, fundingData.fund.description, fundingData.fund.listLabel]} />
        <ProgrammeChecklist items={fundingData.fund.items} />
        <p className="mt-6 border-l-4 border-primary bg-kbc-purple-50 p-5 text-sm font-semibold leading-7 text-primary-dark">{fundingData.fund.note}</p>
      </div>
      <ProgrammeSectionFooter notes={[fundingData.statement]} />
      <ProgrammeChecklist items={fundingData.pillars} />
      <ProgrammeSectionFooter notes={fundingData.notes} actions={fundingData.actions} />
    </ProgrammeSection>
    <ProgrammeSection {...eligibilityData}>
      <EligibilityIndicators items={eligibilityData.indicators} />
      <EligibilityChecker />
    </ProgrammeSection>
    <div className="kbc-figma-home">
      <FigmaUpcomingEventsSection id={eventsData.id} />
    </div>
    <div className="kbc-figma-home">
      <FigmaTestimonialsSection id={testimonialsData.id} items={testimonialsData.items} heading={{ eyebrow: testimonialsData.eyebrow, title: testimonialsData.title }} />
    </div>
    <FaqSection {...faqData} items={faqData.items.map(item => ({question:item.question,answer:<ProgrammeCopy blocks={item.blocks} />}))} className="sm:!scroll-mt-64" action={<div className="text-center"><p className="text-xl font-semibold text-primary">{faqData.fundingTitle}</p><p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{faqData.fundingDescription}</p><ul className="mt-5 flex flex-wrap justify-center gap-2">{faqData.badges.map(badge => <li className="rounded-full bg-kbc-purple-50 px-3 py-2 text-xs text-primary" key={badge}>{badge}</li>)}</ul></div>} />
    <ProgrammeCtaSection data={finalCTA} />
  </div>;
}
