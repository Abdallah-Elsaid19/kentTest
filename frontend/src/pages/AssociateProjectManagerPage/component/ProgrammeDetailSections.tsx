import { useCmsBindings } from "@/features/cms/publicContent";
import { ProgrammeCurriculumCards } from "@/components/programme/ProgrammeCurriculumCards";
import { CollegeFeatureCard } from "@/components/college/CollegeFeatureCard";
import { CollegeStats } from "@/components/college/CollegeStats";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  BrainCircuit,
  Check,
  Laptop2,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { ProgrammeOutputs } from "@/components/programme/ProgrammeSupportSections";
import { ProgrammeBenefits, ProgrammeCardGrid, ProgrammePartners } from "@/components/programme/ProgrammeGrids";
import { NavigationButton } from "@/components/navigation";
import { FigmaUpcomingEventsSection } from "@/pages/home/components/FigmaUpcomingEventsSection";

import {
  alternativeFundingRoutes,
  audienceGroups,
  curriculumTracks,
  deliverySteps,
  employerPartnerSectors,
  learnerBenefits,
  overviewCapabilities,
  overviewStats,
  pathwayDetails,
  pathwayStages,
  practicalOutputs,
} from "../data";
import { SectionHeading } from "./SectionHeading";
import { section, shell } from "./layout";


export function ProgrammeOverviewSection() {
  const cms = useCmsBindings(["programme_apm_l4"]);
  const cmsValues = cms.resolve({ section, shell, overviewCapabilities, overviewStats });

  return cms.render((
    <section id="overview" className={`${cmsValues.section} relative isolate overflow-hidden bg-white`} aria-labelledby="apm-overview-title">
      <img src={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_programme_overview_section.src_001")} alt="" aria-hidden="true" loading="lazy" decoding="async" className="pointer-events-none absolute -left-32 top-1/2 -z-10 hidden h-auto w-[340px] -translate-y-1/2 select-none opacity-[0.055] md:block lg:-left-40 lg:w-[clamp(420px,32vw,560px)]" />
      <div className={cmsValues.shell}>
        <SectionHeading
          id="apm-overview-title"
          eyebrow={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_programme_overview_section.eyebrow_002")}
          title={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_programme_overview_section.title_003")}
          description={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_programme_overview_section.description_004")}
        />
        <div className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {cmsValues.overviewCapabilities.map((item) => (
            <CollegeFeatureCard key={item.number} marker={item.number} title={item.title}>
              <p>{item.description}</p>
            </CollegeFeatureCard>
          ))}
        </div>
        <CollegeStats items={cmsValues.overviewStats} compact />
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <NavigationButton to={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_programme_overview_section.to_005")} variant="primary" className="gap-2">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_programme_overview_section.text_006")}<ArrowRight className="size-4" aria-hidden="true" /></NavigationButton>
          <NavigationButton to={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_programme_overview_section.to_007")} variant="secondary">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_programme_overview_section.text_008")}</NavigationButton>
        </div>
      </div>
    </section>
  ));
}

export function AudienceRolesSection() {
  const cms = useCmsBindings(["programme_apm_l4"]);
  const cmsValues = cms.resolve({ section, shell, audienceGroups });

  return cms.render((
    <section id="audience" className={`${cmsValues.section} bg-kbc-purple-50`} aria-labelledby="apm-audience-title">
      <div className={cmsValues.shell}>
        <SectionHeading
          id="apm-audience-title"
          eyebrow={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_audience_roles_section.eyebrow_009")}
          title={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_audience_roles_section.title_010")}
          description={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_audience_roles_section.description_011")}
        />
        <ProgrammeCardGrid items={cmsValues.audienceGroups} />
      </div>
    </section>
  ));
}

export function PathwaySection() {
  const cms = useCmsBindings(["programme_apm_l4"]);
  const cmsValues = cms.resolve({ section, shell, pathwayStages, pathwayDetails });

  return cms.render((
    <section id="pathway" className={`${cmsValues.section} relative isolate overflow-hidden bg-primary-dark text-white`} aria-labelledby="apm-pathway-title">
      <img src={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_pathway_section.src_012")} alt="" aria-hidden="true" className="pointer-events-none absolute -left-44 top-1/2 -z-10 hidden w-[clamp(420px,38vw,680px)] -translate-y-1/2 select-none opacity-[0.07] lg:block" />
      <div className={cmsValues.shell}>
        <SectionHeading
          id="apm-pathway-title"
          eyebrow={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_pathway_section.eyebrow_013")}
          title={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_pathway_section.title_014")}
          description={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_pathway_section.description_015")}
          inverse
        />
        <div className="mt-12 grid gap-6 md:grid-cols-[2fr_1fr]">
          {cmsValues.pathwayStages.map((stage, index) => (
            <article className={`relative isolate overflow-hidden border-t-2 py-7 sm:py-8 ${index === 0 ? "border-[var(--color-gold)]" : "border-white/30"}`} key={stage.period}>
              {index === 1 && (
                <BrainCircuit
                  className="pointer-events-none absolute -bottom-3 -right-3 -z-10 size-20 select-none text-white opacity-[0.08] sm:-bottom-4 sm:size-24"
                  strokeWidth={1}
                  aria-hidden="true"
                />
              )}
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-gold)]">{stage.period}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{stage.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">{stage.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 grid gap-x-8 md:grid-cols-3">
          {cmsValues.pathwayDetails.map((item) => (
            <CollegeFeatureCard key={item.number} marker={item.number} title={item.title} inverse>
              <p>{item.description}</p>
              {item.number === "02" && (
                <NavigationButton to={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_pathway_section.to_016")} variant="accent" className="mt-6 w-full sm:w-auto">
                  {cms.text("programme_apm_l4.pages_associate_project_manager_page_com_pathway_section.text_017")}</NavigationButton>
              )}
            </CollegeFeatureCard>
          ))}
        </div>
        <p className="mt-7 max-w-5xl border-l-2 border-kbc-gold-500 pl-4 text-xs leading-6 text-white/55">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_pathway_section.text_018")}</p>
      </div>
    </section>
  ));
}

export function ProgrammeCurriculumSection() {
  const cms = useCmsBindings(["programme_apm_l4"]);
  const cmsValues = cms.resolve({ section, shell, curriculumTracks });

  return cms.render((
    <section id="curriculum" className={`${cmsValues.section} bg-[#fbfafc]`} aria-labelledby="apm-curriculum-title">
      <div className={cmsValues.shell}>
        <SectionHeading
          id="apm-curriculum-title"
          eyebrow={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_programme_curriculum_section.eyebrow_019")}
          title={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_programme_curriculum_section.title_020")}
          description={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_programme_curriculum_section.description_021")}
        />
        <ProgrammeCurriculumCards tracks={cmsValues.curriculumTracks} />
        <div className="mt-6 border-t border-kbc-purple-200 py-6 sm:p-8">
          <h3 className="text-xl font-semibold text-[var(--color-ink)]">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_programme_curriculum_section.text_022")}</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_programme_curriculum_section.text_023")}</p>
        </div>
      </div>
    </section>
  ));
}

export function PracticalOutputsSection() {
  const cms = useCmsBindings(["programme_apm_l4"]);
  const cmsValues = cms.resolve({ practicalOutputs });

  return cms.render(<ProgrammeOutputs data={{
    id: "outputs", eyebrow: cms.text("programme_apm_l4.pages_associate_project_manager_page_com_eyebrow.text_024"),
    title: cms.text("programme_apm_l4.pages_associate_project_manager_page_com_title.text_025"),
    description: cms.text("programme_apm_l4.pages_associate_project_manager_page_com_description.text_026"),
    items: cmsValues.practicalOutputs,
    note: cms.text("programme_apm_l4.pages_associate_project_manager_page_com_note.text_027"),
  }} />);
}

export function DeliverySection() {
  const cms = useCmsBindings(["programme_apm_l4"]);
  const cmsValues = cms.resolve({ section, shell, deliverySteps });

  return cms.render((
    <section id="delivery" className={`${cmsValues.section} relative isolate overflow-hidden bg-[var(--color-soft)]`} aria-labelledby="apm-delivery-title">
      <img src={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_delivery_section.src_028")} alt="" aria-hidden="true" loading="lazy" decoding="async" className="pointer-events-none absolute -right-28 top-10 -z-10 hidden h-auto w-[320px] select-none opacity-[0.05] md:block lg:-right-36 lg:w-[clamp(400px,30vw,520px)]" />
      <div className={cmsValues.shell}>
        <SectionHeading
          id="apm-delivery-title"
          eyebrow={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_delivery_section.eyebrow_029")}
          title={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_delivery_section.title_030")}
          description={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_delivery_section.description_031")}
        />
        <ProgrammeCardGrid items={cmsValues.deliverySteps} />
      </div>
    </section>
  ));
}

export function LearnerBenefitsSection() {
  const cms = useCmsBindings(["programme_apm_l4"]);
  const cmsValues = cms.resolve({ learnerBenefits });

  return cms.render(<ProgrammeBenefits primaryChecks data={{
    id: "benefits",
    eyebrow: cms.text("programme_apm_l4.pages_associate_project_manager_page_com_eyebrow.text_032"),
    title: cms.text("programme_apm_l4.pages_associate_project_manager_page_com_title.text_033"),
    description: cms.text("programme_apm_l4.pages_associate_project_manager_page_com_description.text_034"),
    items: cmsValues.learnerBenefits,
  }} />);
}

export function AlternativeFundingSection() {
  const cms = useCmsBindings(["programme_apm_l4"]);
  const cmsValues = cms.resolve({ section, shell, alternativeFundingRoutes });

  return cms.render((
    <section id="alternative-funding" className={`${cmsValues.section} relative isolate overflow-hidden bg-[var(--color-soft)]`} aria-labelledby="apm-alternative-funding-title">
      <img src={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_alternative_funding_section.src_035")} alt="" aria-hidden="true" loading="lazy" decoding="async" className="pointer-events-none absolute -left-32 top-1/2 -z-10 hidden h-auto w-[340px] -translate-y-1/2 select-none opacity-[0.05] md:block lg:-left-44 lg:w-[clamp(440px,34vw,580px)]" />
      <div className={cmsValues.shell}>
        <SectionHeading
          id="apm-alternative-funding-title"
          eyebrow={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_alternative_funding_section.eyebrow_036")}
          title={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_alternative_funding_section.title_037")}
          description={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_alternative_funding_section.description_038")}
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {cmsValues.alternativeFundingRoutes.map((route, index) => (
            <article className={`rounded-2xl p-7 sm:p-9 ${index === 0 ? "bg-primary-dark text-white" : "border border-kbc-purple-100 bg-white"}`} key={route.eyebrow}>
              <p className={`text-xs font-bold uppercase tracking-[0.16em] ${index === 0 ? "text-[var(--color-gold)]" : "text-primary"}`}>{route.eyebrow}</p>
              <h3 className={`mt-7 text-5xl font-semibold tracking-tight ${index === 0 ? "text-[var(--color-gold)]" : "text-primary"}`}>{route.support}</h3>
              <p className={`mt-7 text-sm leading-7 ${index === 0 ? "text-white/65" : "text-[var(--color-muted)]"}`}>{route.description}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 rounded-2xl border border-kbc-purple-100 bg-white p-5 text-xs leading-6 text-[var(--color-muted)]">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_alternative_funding_section.text_039")}</p>
        <div className="mt-8 flex justify-center">
          <NavigationButton to={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_alternative_funding_section.to_040")} external newTab className="w-full gap-2 sm:w-auto">
            {cms.text("programme_apm_l4.pages_associate_project_manager_page_com_alternative_funding_section.text_041")}<ArrowUpRight className="size-4" aria-hidden="true" />
          </NavigationButton>
        </div>
      </div>
    </section>
  ));
}

export function EmployerPartnersSection() {
  const cms = useCmsBindings(["programme_apm_l4"]);
  const cmsValues = cms.resolve({ employerPartnerSectors });

  return cms.render(<ProgrammePartners data={{
    id: "partners",
    eyebrow: cms.text("programme_apm_l4.pages_associate_project_manager_page_com_eyebrow.text_042"),
    title: cms.text("programme_apm_l4.pages_associate_project_manager_page_com_title.text_043"),
    description: cms.text("programme_apm_l4.pages_associate_project_manager_page_com_description.text_044"),
    sectors: cmsValues.employerPartnerSectors,
  }} />);
}

export function ProgrammeEventsSection() {
  const cms = useCmsBindings(["programme_apm_l4"]);

  // Match both "Project Manager" and "Project Management" as one search phrase.
  const programmeSearch = cms.text("programme_apm_l4.pages_associate_project_manager_page_com_programme_search.text_045");

  return cms.render((
    <div className="kbc-figma-home">
      <FigmaUpcomingEventsSection
        id="events"
        search={programmeSearch}
        eyebrow={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_programme_events_section.eyebrow_046")}
        title={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_programme_events_section.title_047")}
        description={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_programme_events_section.description_048")}
      />
    </div>
  ));
}

export function AlternativeRouteNotice() {
  const cms = useCmsBindings(["programme_apm_l4"]);
  const cmsValues = cms.resolve({ section, shell });

  return cms.render((
    <section id="alternative-routes" className="scroll-mt-20 bg-white pb-16 sm:scroll-mt-64 sm:pb-20 lg:pb-28" aria-label={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_alternative_route_notice.aria_label_049")}>
      <div className={cmsValues.shell}>
        <div className="relative isolate grid overflow-hidden rounded-2xl bg-primary-dark p-6 text-white shadow-[0_20px_55px_rgba(39,14,73,0.16)] sm:p-8 lg:grid-cols-[1.35fr_.75fr] lg:items-center lg:gap-8">
          <img className="pointer-events-none absolute -bottom-28 -right-16 -z-10 hidden w-80 select-none opacity-[0.06] sm:block" src={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_alternative_route_notice.src_050")} alt="" aria-hidden="true" />
          <div>
            <div className="flex items-center gap-3">
              <Laptop2 className="size-7 shrink-0 text-[var(--color-gold)]" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-gold)]">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_alternative_route_notice.text_051")}</p>
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-white">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_alternative_route_notice.text_052")}</h2>
            <p className="mt-3 text-sm leading-7 text-white/75">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_alternative_route_notice.text_053")}</p>
          </div>
          <div className="mt-6 rounded-2xl border border-white/20 bg-white/[.08] p-5 lg:mt-0">
            <p className="text-sm leading-6 text-white/80">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_alternative_route_notice.text_054")}</p>
            <NavigationButton to={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_alternative_route_notice.to_055")} variant="accent" className="mt-5 w-full gap-2">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_alternative_route_notice.text_056")}<ArrowRight className="size-4" aria-hidden="true" /></NavigationButton>
          </div>
        </div>
      </div>
    </section>
  ));
}

export function WorkloadIntroCard() {
  const cms = useCmsBindings(["programme_apm_l4"]);

  return cms.render((
    <div className="rounded-2xl bg-primary-dark p-7 text-white">
      <BookOpenCheck className="size-7 text-[var(--color-gold)]" aria-hidden="true" />
      <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-gold)]">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_workload_intro_card.text_057")}</p>
      <p className="mt-2 text-5xl font-semibold text-white">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_workload_intro_card.text_058")}</p>
      <p className="mt-4 text-sm leading-7 text-white/65">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_workload_intro_card.text_059")}</p>
    </div>
  ));
}

export function LiveLearningBadge() {
  const cms = useCmsBindings(["programme_apm_l4"]);

  return cms.render(<span className="inline-flex items-center gap-2 rounded-full bg-kbc-purple-50 px-4 py-2 text-xs font-bold text-primary"><Sparkles className="size-4" aria-hidden="true" />{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_live_learning_badge.text_060")}</span>);
}

export function ProfessionalCommunityBadge() {
  const cms = useCmsBindings(["programme_apm_l4"]);

  return cms.render(<span className="inline-flex items-center gap-2 rounded-full bg-kbc-gold-100 px-4 py-2 text-xs font-bold text-kbc-gold-900"><UsersRound className="size-4" aria-hidden="true" />{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_professional_community_badge.text_061")}</span>);
}
