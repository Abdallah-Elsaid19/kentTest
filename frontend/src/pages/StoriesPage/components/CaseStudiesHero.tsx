import { useCmsBindings } from "@/features/cms/publicContent";
import { HeroActionButtons } from "@/components/navigation";

const caseStudiesHeroImage = "{{cms:case_studies.pages_stories_page_components_case_studi_case_studies_hero_image.text_001}}";

export function CaseStudiesHero() {
  const cms = useCmsBindings(["case_studies"]);
  const cmsValues = cms.resolve({ caseStudiesHeroImage });

  return cms.render((
    <section
      className="kbc-page-hero-offset relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#401B8C] pb-[clamp(16px,3svh,48px)] text-white"
      aria-labelledby="stories-hero-title"
    >
      <img className="pointer-events-none absolute inset-y-0 right-0 -z-30 h-full w-full object-cover object-center lg:w-[60%]" src={cmsValues.caseStudiesHeroImage} alt="" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-20 w-full bg-[#401B8C]/35 lg:w-[60%]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,#401B8C_0%,#401B8C_38%,rgba(64,27,140,.94)_52%,rgba(64,27,140,.52)_72%,rgba(64,27,140,.18)_100%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-full shadow-[inset_100px_0_120px_-30px_rgba(64,27,140,1),inset_0_-90px_105px_-38px_rgba(64,27,140,.98),inset_0_75px_95px_-45px_rgba(64,27,140,.86)] lg:w-[60%]" aria-hidden="true" />

      <div className="figma-shell figma-hero__grid relative z-10 !items-start sm:max-xl:!grid-cols-1">
        <div className="figma-hero__copy flex flex-col items-center text-center sm:block sm:max-xl:!mx-auto sm:max-xl:!flex sm:max-xl:!max-w-[760px] sm:max-xl:!flex-col sm:max-xl:!gap-9 sm:max-xl:!text-center xl:text-left">
          <p className="figma-hero__eyebrow !mx-auto !text-xs !font-bold !leading-5 !tracking-widest !text-kbc-gold-500 [@media(max-height:1000px)_and_(max-width:639px)]:!mb-3 [@media(max-height:1000px)_and_(min-width:1280px)]:!mb-3 sm:max-xl:!mb-0 sm:max-xl:!text-[15px] xl:!ml-0 xl:!mr-0">{cms.text("case_studies.pages_stories_page_components_case_studi_case_studies_hero.text_002")}</p>
          <h1 className="!text-5xl !font-medium !leading-none !tracking-tight !text-white sm:max-xl:!text-[clamp(68px,12vw,82px)] xl:!text-[82px]" id="stories-hero-title">
            {cms.text("case_studies.pages_stories_page_components_case_studi_case_studies_hero.text_003")}<span className="text-kbc-gold-500">{cms.text("case_studies.pages_stories_page_components_case_studi_case_studies_hero.text_004")}</span>
          </h1>
          <p className="max-w-2xl !text-base !leading-relaxed text-white/80 [@media(max-height:1000px)_and_(max-width:639px)]:!mt-4 [@media(max-height:1000px)_and_(min-width:1280px)]:!mt-4 sm:max-xl:!mt-0 sm:max-xl:!text-[27px] sm:max-xl:!leading-[1.6] xl:!text-lg">
            {cms.text("case_studies.pages_stories_page_components_case_studi_case_studies_hero.text_005")}</p>
          <HeroActionButtons
            primary={{ label: cms.text("case_studies.pages_stories_page_components_case_studi_label.text_006"), to: "#case-studies" }}
            secondary={{ label: cms.text("case_studies.pages_stories_page_components_case_studi_label.text_007"), to: "/book-session" }}
            className="w-full justify-center [@media(max-height:1000px)_and_(max-width:639px)]:!mt-5 [@media(max-height:1000px)_and_(min-width:1280px)]:!mt-5 sm:max-xl:!mt-0 sm:max-xl:gap-4 xl:justify-start [&>a]:!w-full sm:[&>a]:!w-auto"
          />
        </div>
      </div>
    </section>
  ));
}
