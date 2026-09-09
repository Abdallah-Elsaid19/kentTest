import { useCmsBindings } from "@/features/cms/publicContent";
import {
  BookOpenCheck,
  CheckCircle2,
  HeartHandshake,
  Laptop2,
  Megaphone,
  Scale,
  ShieldCheck,
  Siren,
  Users,
} from "lucide-react";
import { useState } from "react";

import { RouteMeta } from "@/components/seo/RouteMeta";

const policySections = [
  {
    id: "adult-learners",
    number: "01",
    eyebrow: "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.eyebrow_001}}",
    title: "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.title_002}}",
    icon: ShieldCheck,
    paragraphs: [
      "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.paragraphs_003}}",
      "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.paragraphs_004}}",
    ],
  },
  {
    id: "prevent-duty",
    number: "02",
    eyebrow: "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.eyebrow_005}}",
    title: "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.title_006}}",
    icon: Siren,
    paragraphs: [
      "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.paragraphs_007}}",
    ],
  },
  {
    id: "british-values",
    number: "03",
    eyebrow: "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.eyebrow_008}}",
    title: "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.title_009}}",
    icon: Scale,
    paragraphs: [
      "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.paragraphs_010}}",
    ],
  },
  {
    id: "edi",
    number: "04",
    eyebrow: "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.eyebrow_011}}",
    title: "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.title_012}}",
    icon: Users,
    paragraphs: [
      "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.paragraphs_013}}",
      "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.paragraphs_014}}",
      "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.paragraphs_015}}",
      "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.paragraphs_016}}",
      "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.paragraphs_017}}",
    ],
  },
  {
    id: "wellbeing",
    number: "05",
    eyebrow: "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.eyebrow_018}}",
    title: "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.title_019}}",
    icon: HeartHandshake,
    paragraphs: [
      "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.paragraphs_020}}",
      "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.paragraphs_021}}",
    ],
  },
  {
    id: "online-safety",
    number: "06",
    eyebrow: "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.eyebrow_022}}",
    title: "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.title_023}}",
    icon: Laptop2,
    paragraphs: [
      "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.paragraphs_024}}",
      "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.paragraphs_025}}",
    ],
  },
  {
    id: "recruitment-training",
    number: "07",
    eyebrow: "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.eyebrow_026}}",
    title: "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.title_027}}",
    icon: BookOpenCheck,
    paragraphs: [
      "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.paragraphs_028}}",
      "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.paragraphs_029}}",
    ],
  },
  {
    id: "whistleblowing",
    number: "08",
    eyebrow: "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.eyebrow_030}}",
    title: "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.title_031}}",
    icon: Megaphone,
    paragraphs: [
      "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.paragraphs_032}}",
      "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.paragraphs_033}}",
    ],
  },
  {
    id: "raising-concerns",
    number: "09",
    eyebrow: "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.eyebrow_034}}",
    title: "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.title_035}}",
    icon: CheckCircle2,
    paragraphs: [
      "{{cms:safeguarding.pages_information_page_safeguarding_page_policy_sections.paragraphs_036}}",
    ],
  },
];

const safeguardingLeads = ["{{cms:safeguarding.pages_information_page_safeguarding_page_safeguarding_leads.text_037}}", "{{cms:safeguarding.pages_information_page_safeguarding_page_safeguarding_leads.text_038}}", "{{cms:safeguarding.pages_information_page_safeguarding_page_safeguarding_leads.text_039}}"];

function PolicyEyebrow({ children, inverse = false }: { children: string; inverse?: boolean }) {
  const cms = useCmsBindings(["safeguarding"]);

  return cms.render((
    <div className="w-fit">
      <p className={`text-xs font-bold uppercase leading-5 tracking-[0.2em] ${inverse ? "text-kbc-gold-400" : "text-primary"}`}>{children}</p>
      <span
        className={`mx-auto mt-3 block h-2 w-[calc(100%_+_24px)] -translate-x-3 rounded-[50%] border-t-[1.5px] ${inverse ? "border-kbc-gold-400" : "border-primary"}`}
        aria-hidden="true"
      />
    </div>
  ));
}

export function SafeguardingPage() {
  const cms = useCmsBindings(["safeguarding"]);
  const cmsValues = cms.resolve({ policySections, safeguardingLeads });

  const [activeSectionId, setActiveSectionId] = useState(cmsValues.policySections[0].id);
  const selectedSection = cmsValues.policySections.find((section) => section.id === activeSectionId) || cmsValues.policySections[0];
  const showingContacts = activeSectionId === "safeguarding-contacts";

  return cms.render((
    <div className="overflow-hidden bg-white font-body text-kbc-purple-950">
      <RouteMeta
        fallbackTitle={cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.fallback_title_040")}
        fallbackDescription={cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.fallback_description_041")}
      />

      <section className="relative min-h-[100svh] overflow-hidden bg-primary pb-20 pt-[150px] text-white sm:pt-[164px]" aria-labelledby="safeguarding-heading">
        <img
          className="absolute inset-0 h-full w-full object-cover object-center"
          src={cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.src_042")}
          alt=""
          aria-hidden="true"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-primary/85" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_14%,rgba(168,120,178,0.34),transparent_27%),radial-gradient(circle_at_14%_86%,rgba(214,176,78,0.13),transparent_30%)]" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[calc(100svh_-_230px)] w-[calc(100%_-_3rem)] max-w-[1100px] items-center justify-center max-sm:w-[calc(100%_-_2rem)]">
          <div className="flex w-full flex-col items-center text-center">
            <PolicyEyebrow inverse>{cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.text_043")}</PolicyEyebrow>
            <h1 id="safeguarding-heading" className="mt-6 max-w-[1040px] font-heading text-5xl font-medium leading-none tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[78px]">
              {cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.text_044")}<span className="text-kbc-gold-400">{cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.text_045")}</span>
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/78 sm:text-lg">
              {cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.text_046")}</p>
          </div>
        </div>
      </section>

      <section className="bg-kbc-purple-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12" aria-labelledby="policy-statement-heading">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <PolicyEyebrow>{cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.text_047")}</PolicyEyebrow>
              <h2 id="policy-statement-heading" className="mt-6 max-w-2xl font-heading text-4xl font-semibold leading-tight sm:text-5xl">
                {cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.text_048")}</h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-kbc-purple-700">
              <p>
                {cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.text_049")}</p>
              <p>
                {cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.text_050")}</p>
              <p>
                {cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.text_051")}</p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              [ShieldCheck, "Safeguarding", cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.text_052")],
              [Siren, cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.text_053"), cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.text_054")],
              [Users, "Inclusion", cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.text_055")],
            ].map(([Icon, title, body]) => {
              const CardIcon = Icon as typeof ShieldCheck;
              return (
                <article className="group rounded-2xl border border-primary/10 bg-white p-7 shadow-[0_18px_50px_rgba(64,27,140,0.07)] transition duration-300 ease-out hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_26px_60px_rgba(64,27,140,0.14)]" key={title as string}>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-kbc-gold-400"><CardIcon className="h-5 w-5" aria-hidden="true" /></span>
                  <h3 className="mt-6 font-heading text-xl font-semibold">{title as string}</h3>
                  <span className="mt-5 block h-0.5 w-14 bg-primary transition-[width] duration-500 ease-out group-hover:w-full" aria-hidden="true" />
                  <p className="mt-5 text-sm leading-7 text-kbc-purple-700">{body as string}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12" aria-label={cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.aria_label_056")}>
        <div className="mx-auto grid max-w-[1200px] items-start gap-12 lg:grid-cols-[270px_1fr] lg:gap-16">
          <div className="lg:hidden">
            <label className="mb-3 block text-xs font-bold uppercase tracking-[0.18em] text-primary" htmlFor="safeguarding-section-select">{cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.text_057")}</label>
            <select
              className="min-h-14 w-full rounded-xl border border-primary/15 bg-kbc-purple-50 px-4 text-sm font-semibold text-primary outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
              id="safeguarding-section-select"
              value={activeSectionId}
              onChange={(event) => setActiveSectionId(event.target.value)}
            >
              {cmsValues.policySections.map((section) => <option value={section.id} key={section.id}>{section.title}</option>)}
              <option value="safeguarding-contacts">{cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.text_058")}</option>
            </select>
          </div>

          <aside className="hidden rounded-2xl border border-primary/10 bg-kbc-purple-50 p-5 lg:sticky lg:top-28 lg:block" aria-label={cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.aria_label_059")}>
            <div className="grid gap-1" role="tablist" aria-orientation="vertical">
              {cmsValues.policySections.map((section) => (
                <button
                  className={`rounded-xl px-3 py-2.5 text-left text-sm font-medium leading-5 transition ${activeSectionId === section.id ? "bg-primary text-white shadow-sm" : "text-kbc-purple-700 hover:bg-white hover:text-primary"}`}
                  type="button"
                  role="tab"
                  aria-selected={activeSectionId === section.id}
                  aria-controls="safeguarding-tab-panel"
                  onClick={() => setActiveSectionId(section.id)}
                  key={section.id}
                >
                  {section.title}
                </button>
              ))}
              <button
                className={`rounded-xl px-3 py-2.5 text-left text-sm font-medium transition ${showingContacts ? "bg-primary text-white shadow-sm" : "text-kbc-purple-700 hover:bg-white hover:text-primary"}`}
                type="button"
                role="tab"
                aria-selected={showingContacts}
                aria-controls="safeguarding-tab-panel"
                onClick={() => setActiveSectionId("safeguarding-contacts")}
              >
                {cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.text_060")}</button>
            </div>
          </aside>

          <div id="safeguarding-tab-panel" role="tabpanel" tabIndex={0} className="outline-none">
            {!showingContacts ? (() => {
              const { id, number, eyebrow, title, icon: Icon, paragraphs } = selectedSection;
              return (
              <article className="min-h-[680px] animate-fade-in rounded-3xl border border-primary/10 bg-white p-6 shadow-[0_20px_55px_rgba(64,27,140,0.06)] sm:p-9" id={id} key={id}>
                <div className="flex items-start justify-between gap-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-kbc-gold-400">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-bold tracking-[0.16em] text-primary/45">{number}</span>
                </div>
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
                <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
                <div className="mt-6 space-y-5 text-[15px] leading-8 text-kbc-purple-700 sm:text-base">
                  {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </article>
              );
            })() : (
              <article className="min-h-[680px] animate-fade-in rounded-3xl bg-primary p-6 text-white shadow-[0_20px_55px_rgba(64,27,140,0.16)] sm:p-9" key="safeguarding-contacts">
                <div className="flex items-start justify-between gap-5">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-kbc-gold-400 text-primary"><ShieldCheck className="h-5 w-5" aria-hidden="true" /></span>
                  <span className="text-xs font-bold tracking-[0.16em] text-white/45">{cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.text_061")}</span>
                </div>
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-kbc-gold-400">{cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.text_062")}</p>
                <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl">{cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.text_063")}</h2>
                <p className="mt-6 max-w-3xl text-[15px] leading-8 text-white/72 sm:text-base">
                  {cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.text_064")}</p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {cmsValues.safeguardingLeads.map((name) => (
                    <div className="rounded-2xl border border-white/15 bg-white/8 p-5" key={name}>
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-kbc-gold-400 text-primary"><ShieldCheck className="h-5 w-5" aria-hidden="true" /></span>
                      <h3 className="mt-5 font-heading text-lg font-semibold leading-snug text-white">{name}</h3>
                      <p className="mt-2 text-xs leading-5 text-white/62">{cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.text_065")}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl bg-white p-6 text-kbc-purple-950 sm:p-7">
                  <p className="text-sm leading-7 text-kbc-purple-700">
                    {cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.text_066")}</p>
                  <a className="mt-5 inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-bold text-white transition hover:bg-primary-dark" href={cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.href_067")}>
                    {cms.text("safeguarding.pages_information_page_safeguarding_page_safeguarding_page.text_068")}</a>
                </div>
              </article>
            )}
          </div>
        </div>
      </section>
    </div>
  ));
}
