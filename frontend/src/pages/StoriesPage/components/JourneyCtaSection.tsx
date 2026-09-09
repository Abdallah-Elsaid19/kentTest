import { useCmsBindings } from "@/features/cms/publicContent";
import { NavigationButton } from "@/components/navigation";

export function JourneyCtaSection() {
  const cms = useCmsBindings(["case_studies"]);

  return cms.render((
    <section className="bg-kbc-purple-50 !pb-16 sm:!pb-20 xl:!pb-[118px]" aria-labelledby="journey-title">
      <div className="figma-shell">
        <div className="grid overflow-hidden rounded-[20px] border border-kbc-purple-950/10 bg-white shadow-[0_18px_45px_rgba(35,16,44,.13)] lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative grid gap-5 overflow-hidden p-5 sm:grid-cols-2 sm:gap-6 sm:p-8 lg:min-h-[560px] lg:content-center lg:grid-cols-2 xl:min-h-[640px] xl:p-10" style={{ background: "var(--color-primary)" }}>
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full border border-kbc-gold-500/20" aria-hidden="true" />
            <img className="relative z-10 aspect-square w-full rounded-2xl object-cover object-[50%_20%]" src={cms.text("case_studies.pages_stories_page_components_journey_ct_journey_cta_section.src_001")} alt={cms.text("case_studies.pages_stories_page_components_journey_ct_journey_cta_section.alt_002")} loading="lazy" />
            <img className="relative aspect-square w-full rounded-2xl object-cover object-[50%_18%]" src={cms.text("case_studies.pages_stories_page_components_journey_ct_journey_cta_section.src_003")} alt={cms.text("case_studies.pages_stories_page_components_journey_ct_journey_cta_section.alt_004")} loading="lazy" />
            <img className="relative z-20 aspect-square w-full rounded-2xl object-cover object-[50%_18%] shadow-[0_14px_30px_rgba(0,0,0,.23)]" src={cms.text("case_studies.pages_stories_page_components_journey_ct_journey_cta_section.src_005")} alt={cms.text("case_studies.pages_stories_page_components_journey_ct_journey_cta_section.alt_006")} loading="lazy" />
            <img className="relative aspect-square w-full rounded-2xl object-cover object-[50%_18%] shadow-[0_14px_30px_rgba(0,0,0,.23)]" src={cms.text("case_studies.pages_stories_page_components_journey_ct_journey_cta_section.src_007")} alt={cms.text("case_studies.pages_stories_page_components_journey_ct_journey_cta_section.alt_008")} loading="lazy" />
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <span className="figma-eyebrow">{cms.text("case_studies.pages_stories_page_components_journey_ct_journey_cta_section.text_009")}</span>
            <h2 className="mt-4 !text-4xl !leading-[1.02] text-kbc-purple-950 sm:!text-5xl xl:!text-[58px]" id="journey-title">{cms.text("case_studies.pages_stories_page_components_journey_ct_journey_cta_section.text_010")}</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-kbc-dark-500">{cms.text("case_studies.pages_stories_page_components_journey_ct_journey_cta_section.text_011")}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <NavigationButton className="figma-btn figma-btn--gold" to={cms.text("case_studies.pages_stories_page_components_journey_ct_journey_cta_section.to_012")} variant="accent">{cms.text("case_studies.pages_stories_page_components_journey_ct_journey_cta_section.text_013")}</NavigationButton>
              <NavigationButton className="figma-btn !border-kbc-purple-950/15 !bg-white !text-kbc-purple-950 hover:!bg-kbc-purple-50 hover:!text-kbc-purple-700" to={cms.text("case_studies.pages_stories_page_components_journey_ct_journey_cta_section.to_014")} variant="secondary">{cms.text("case_studies.pages_stories_page_components_journey_ct_journey_cta_section.text_015")}</NavigationButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  ));
}
