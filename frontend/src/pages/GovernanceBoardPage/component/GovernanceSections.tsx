import { useCmsBindings } from "@/features/cms/publicContent";
import {
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CircleCheckBig,
  Database,
  Landmark,
  ListChecks,
  Mail,
  MessageCircleMore,
  Scale,
  ShieldCheck,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";

import { CollegeFeatureCard } from "@/components/college/CollegeFeatureCard";
import { section, shell } from "@/components/college/layout";
import { NumberedFeatureCard } from "@/components/college/NumberedFeatureCard";
import { NavigationButton } from "@/components/navigation";
import { ProgrammeSection } from "@/components/programme/ProgrammeSection";
import { ZohoFormEmbed } from "@/components/forms/ZohoFormEmbed";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import {
  expressionOfInterest,
  fundingAndQualityAssurance,
  governanceAccountability,
  governanceOverview,
  governanceStructure,
  oversightAndAssurance,
  providerStatus,
  safeguardingAndPrevent,
  type AssuranceArea,
} from "../data";
import { GovernanceAccountabilityTable } from "./GovernanceAccountabilityTable";

const structureIcons = [Scale, UsersRound, Building2];

const assuranceIcons: Record<AssuranceArea["icon"], typeof BookOpenCheck> = {
  quality: BookOpenCheck,
  safeguarding: ShieldCheck,
  learner: MessageCircleMore,
  funding: Database,
  employers: BriefcaseBusiness,
  actions: ListChecks,
};

const detailIcons = [UserRoundCheck, CalendarDays, CircleCheckBig, Mail];

export function ProviderStatusSection() {
  const cms = useCmsBindings(["governance"]);
  const cmsValues = cms.resolve({ providerStatus });

  return cms.render((
    <section
      id="provider-status"
      className={`${section} bg-kbc-purple-50 sm:!scroll-mt-64`}
      aria-labelledby="provider-status-title"
    >
      <div className={shell}>
        <header className="mx-auto max-w-4xl">
          <FigmaSectionHeading
            id="provider-status-title"
            eyebrow={cms.text("governance.pages_governance_board_page_component_go_provider_status_section.eyebrow_001")}
            title={cmsValues.providerStatus.title}
            description={cmsValues.providerStatus.description}
            align="center"
          />
        </header>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {cmsValues.providerStatus.items.map((item) => (
            <NumberedFeatureCard
              key={item.label}
              title={item.label}
              description={item.value}
            />
          ))}
        </ol>
      </div>
    </section>
  ));
}

export function GovernanceOverviewSection() {
  const cms = useCmsBindings(["governance"]);
  const cmsValues = cms.resolve({ governanceOverview, detailIcons });

  return cms.render((
    <section
      id="current-governance"
      className={`${section} bg-white sm:!scroll-mt-64`}
      aria-labelledby="governance-overview-title"
    >
      <div className={shell}>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,.72fr)] lg:items-start lg:gap-16">
          <div>
            <FigmaSectionHeading
              id="governance-overview-title"
              eyebrow={cms.text("governance.pages_governance_board_page_component_go_governance_overview_section.eyebrow_002")}
              title={cmsValues.governanceOverview.title}
              align="responsive"
            />
            <div className="mt-8 space-y-5 text-base leading-8 text-[var(--color-muted)] sm:text-lg sm:leading-9">
              {cmsValues.governanceOverview.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>

          <aside className="relative isolate overflow-hidden rounded-[28px] bg-gradient-to-br from-primary via-[#4c2495] to-primary-dark text-white shadow-[0_22px_56px_rgba(64,27,140,.24)]" aria-labelledby="governance-key-details-title">
            <span className="absolute inset-x-0 top-0 h-1 bg-kbc-gold-500" aria-hidden="true" />
            <span className="absolute -bottom-24 -right-20 -z-10 h-64 w-64 rounded-full border-[38px] border-white/[.055]" aria-hidden="true" />
            <div className="border-b border-kbc-gold-400/25 px-6 py-7 sm:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-kbc-gold-300">{cms.text("governance.pages_governance_board_page_component_go_governance_overview_section.text_003")}</p>
              <h3 id="governance-key-details-title" className="mt-2 font-heading text-3xl font-semibold text-white">
                {cmsValues.governanceOverview.keyDetailsTitle}
              </h3>
            </div>
            <dl className="divide-y divide-white/15">
              {cmsValues.governanceOverview.keyDetails.map((detail, index) => {
                const Icon = cmsValues.detailIcons[index];
                return (
                  <div key={detail.label} className="grid grid-cols-[44px_1fr] gap-4 px-6 py-6 sm:px-8">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-kbc-gold-500 text-primary-dark shadow-[0_8px_22px_rgba(48,34,13,.18)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-[0.14em] text-kbc-gold-200">{detail.label}</dt>
                      <dd className="mt-2 text-sm leading-7 text-white/85">
                        {detail.href ? (
                          <a className="underline decoration-white/35 underline-offset-4 transition-colors hover:text-kbc-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kbc-gold-400" href={detail.href}>
                            {detail.value}
                          </a>
                        ) : detail.value}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  ));
}

export function GovernanceStructureSection() {
  const cms = useCmsBindings(["governance"]);
  const cmsValues = cms.resolve({ governanceStructure, structureIcons });

  return cms.render((
    <ProgrammeSection
      id="governance-structure"
      eyebrow={cms.text("governance.pages_governance_board_page_component_go_governance_structure_section.eyebrow_004")}
      title={cmsValues.governanceStructure.title}
      description={cmsValues.governanceStructure.description}
      tone="soft"
    >
      <div className="mt-12 grid gap-4 md:grid-cols-3 lg:mt-16">
        {cmsValues.governanceStructure.items.map((item, index) => {
          const Icon = cmsValues.structureIcons[index];
          return (
            <CollegeFeatureCard key={item.title} marker={<Icon className="h-5 w-5" aria-hidden="true" />} title={item.title} surface="white">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-kbc-purple-700">{item.eyebrow}</p>
              <p>{item.description}</p>
            </CollegeFeatureCard>
          );
        })}
      </div>
    </ProgrammeSection>
  ));
}

export function GovernanceAssuranceSection() {
  const cms = useCmsBindings(["governance"]);
  const cmsValues = cms.resolve({ oversightAndAssurance, assuranceIcons });

  return cms.render((
    <ProgrammeSection
      id="oversight-assurance"
      eyebrow={cms.text("governance.pages_governance_board_page_component_go_governance_assurance_section.eyebrow_005")}
      title={cmsValues.oversightAndAssurance.title}
      description={cmsValues.oversightAndAssurance.description}
      tone="dark"
    >
      <div className="mt-12 grid overflow-hidden rounded-[28px] border border-white/15 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {cmsValues.oversightAndAssurance.items.map((item) => {
          const Icon = cmsValues.assuranceIcons[item.icon];
          return (
            <CollegeFeatureCard key={item.title} marker={<Icon className="h-5 w-5" aria-hidden="true" />} title={item.title} inverse>
              <p>{item.description}</p>
            </CollegeFeatureCard>
          );
        })}
      </div>
    </ProgrammeSection>
  ));
}

export function GovernanceAccountabilitySection() {
  const cms = useCmsBindings(["governance"]);
  const cmsValues = cms.resolve({ governanceAccountability });

  return cms.render((
    <section
      id="roles-accountability"
      className={`${section} bg-kbc-purple-50 sm:!scroll-mt-64`}
      aria-labelledby="roles-accountability-title"
    >
      <div className={shell}>
        <header className="mx-auto max-w-4xl">
          <FigmaSectionHeading
            id="roles-accountability-title"
            eyebrow={cms.text("governance.pages_governance_board_page_component_go_governance_accountability_section.eyebrow_006")}
            title={cmsValues.governanceAccountability.title}
            align="center"
          />
        </header>
        <GovernanceAccountabilityTable />
      </div>
    </section>
  ));
}

export function GovernanceComplianceSection() {
  const cms = useCmsBindings(["governance"]);
  const cmsValues = cms.resolve({ fundingAndQualityAssurance, safeguardingAndPrevent });

  return cms.render((
    <section className={`${section} bg-white`} aria-labelledby="funding-quality-title">
      <div className={shell}>
        <div className="grid gap-6 lg:grid-cols-[1.08fr_.92fr] lg:gap-8">
          <article className="rounded-[28px] border border-kbc-purple-100 bg-white p-7 shadow-[0_16px_44px_rgba(47,20,104,.06)] sm:p-10">
            <Landmark className="h-9 w-9 text-kbc-purple-700" aria-hidden="true" />
            <h2 id="funding-quality-title" className="mt-6 font-heading text-3xl font-semibold tracking-tight text-kbc-purple-950 sm:text-4xl">
              {cmsValues.fundingAndQualityAssurance.title}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-[var(--color-muted)]">
              {cmsValues.fundingAndQualityAssurance.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>

          <aside className="relative isolate overflow-hidden rounded-[28px] border border-kbc-gold-400/25 bg-gradient-to-br from-primary via-[#4c2495] to-primary-dark p-7 text-white shadow-[0_20px_52px_rgba(64,27,140,.22)] sm:p-10" aria-labelledby="safeguarding-prevent-title">
            <span className="absolute inset-x-0 top-0 h-1 bg-kbc-gold-500" aria-hidden="true" />
            <span className="absolute -bottom-28 -right-24 -z-10 h-72 w-72 rounded-full border-[42px] border-white/[.055]" aria-hidden="true" />
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-kbc-gold-500 text-primary-dark shadow-[0_10px_26px_rgba(48,34,13,.18)]">
              <ShieldCheck className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 id="safeguarding-prevent-title" className="mt-6 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {cmsValues.safeguardingAndPrevent.title}
            </h2>
            <dl className="mt-7 space-y-7">
              {cmsValues.safeguardingAndPrevent.details.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-xs font-bold uppercase tracking-[0.15em] text-kbc-gold-200">{detail.label}</dt>
                  <dd className="mt-2 text-sm leading-7 text-white/75">{detail.value}</dd>
                </div>
              ))}
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.15em] text-kbc-gold-200">{cmsValues.safeguardingAndPrevent.publicInformation.label}</dt>
                <dd className="mt-4">
                  <NavigationButton
                    to={cmsValues.safeguardingAndPrevent.publicInformation.href}
                    variant="inverse"
                    className="w-full sm:w-auto"
                  >
                    {cmsValues.safeguardingAndPrevent.publicInformation.action}
                  </NavigationButton>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  ));
}

export function GovernanceEoiSection() {
  const cms = useCmsBindings(["governance"]);
  const cmsValues = cms.resolve({ expressionOfInterest });

  return cms.render((
    <section
      id="eoi-form"
      className={`${section} bg-kbc-purple-50 sm:!scroll-mt-64`}
      aria-labelledby="governance-eoi-title"
    >
      <div className={shell}>
        <header className="mx-auto max-w-4xl">
          <FigmaSectionHeading
            id="governance-eoi-title"
            eyebrow={cms.text("governance.pages_governance_board_page_component_go_governance_eoi_section.eyebrow_007")}
            title={cmsValues.expressionOfInterest.title}
            description={cmsValues.expressionOfInterest.description}
            align="center"
          />
        </header>
        <div className="mt-12 rounded-[32px] border border-kbc-purple-100 bg-white p-2 shadow-[0_22px_60px_rgba(47,20,104,.08)] sm:p-4 lg:mt-16">
          <ZohoFormEmbed {...cmsValues.expressionOfInterest.form} />
        </div>
      </div>
    </section>
  ));
}
