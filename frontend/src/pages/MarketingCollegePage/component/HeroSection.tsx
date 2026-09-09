import { useCmsBindings } from "@/features/cms/publicContent";
import { ArrowRight } from "lucide-react";

import { NavigationButton } from "@/components/navigation";
import { hero } from "../data";

export function HeroSection() {
  const cms = useCmsBindings(["college_marketing"]);
  const cmsValues = cms.resolve({ hero });

  return cms.render((
    <section
      className="kbc-page-hero-offset relative isolate flex min-h-[100svh] flex-col bg-primary-dark pb-[clamp(16px,3svh,48px)] text-white"
      aria-labelledby="marketing-title"
    >
      <img
        src={cmsValues.hero.image}
        alt=""
        aria-hidden="true"
        width={1600}
        height={900}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-dark/95 via-primary-dark/85 to-primary-dark/50" aria-hidden="true" />
      <div className="figma-shell figma-hero__grid !items-start sm:max-xl:!grid-cols-1">
        <div className="figma-hero__copy mx-auto flex !w-[calc(100vw-28px)] min-w-0 !max-w-[calc(100vw-28px)] flex-col items-center overflow-hidden text-center sm:!w-full sm:max-xl:!mx-auto sm:max-xl:!flex sm:max-xl:!max-w-[760px] sm:max-xl:!flex-col sm:max-xl:!gap-9 sm:max-xl:!text-center sm:block xl:!max-w-[680px] xl:text-left">
          <p className="figma-hero__eyebrow !mx-auto !text-xs !font-bold !leading-5 !tracking-widest !text-[var(--color-gold)] [@media(max-height:1000px)_and_(max-width:639px)]:!mb-3 [@media(max-height:1000px)_and_(min-width:1280px)]:!mb-3 sm:max-xl:!mb-0 sm:max-xl:!text-[15px] xl:!ml-0 xl:!mr-0">
            {cmsValues.hero.eyebrow}
          </p>
          <h1 id="marketing-title" className="w-full min-w-0 !max-w-full whitespace-normal !text-[clamp(2.35rem,11.5vw,3rem)] !font-medium !leading-none !tracking-tight text-white sm:max-xl:!text-[clamp(68px,12vw,82px)] xl:!text-[82px]">
            {cmsValues.hero.title} <span className="text-[var(--color-gold)]">{cmsValues.hero.accent}</span>
          </h1>
          <p className="w-full max-w-full !text-base !leading-relaxed [@media(max-height:1000px)_and_(max-width:639px)]:!mt-4 [@media(max-height:1000px)_and_(min-width:1280px)]:!mt-4 sm:max-xl:!mt-0 sm:max-xl:!text-[27px] sm:max-xl:!leading-[1.6] xl:!text-lg">
            {cmsValues.hero.description}
          </p>
          <div className="figma-hero__actions w-full !flex-col !justify-center [@media(max-height:1000px)_and_(max-width:639px)]:!mt-5 [@media(max-height:1000px)_and_(max-width:639px)]:!gap-3 [@media(max-height:1000px)_and_(min-width:1280px)]:!mt-5 [@media(max-height:1000px)_and_(min-width:1280px)]:!gap-3 sm:!flex-row sm:flex-wrap sm:max-xl:!mt-0 sm:max-xl:!gap-4 xl:!justify-start">
            <NavigationButton to={cms.text("college_marketing.pages_marketing_college_page_component_h_hero_section.to_001")} variant="accent" className="!w-full gap-3 !bg-[var(--color-gold)] !text-primary-dark hover:!bg-kbc-gold-300 sm:!w-auto sm:max-xl:!min-h-14 sm:max-xl:!px-7 sm:max-xl:!text-base">
              {cmsValues.hero.primaryLabel}<ArrowRight size={18} aria-hidden="true" />
            </NavigationButton>
            <NavigationButton to={cms.text("college_marketing.pages_marketing_college_page_component_h_hero_section.to_002")} variant="inverse" className="!w-full gap-3 sm:!w-auto sm:max-xl:!min-h-14 sm:max-xl:!px-7 sm:max-xl:!text-base">
              {cmsValues.hero.secondaryLabel}<ArrowRight size={18} aria-hidden="true" />
            </NavigationButton>
          </div>
          <ul className="mt-10 flex flex-wrap justify-center gap-2 [@media(max-height:1000px)_and_(max-width:639px)]:!mt-5 [@media(max-height:1000px)_and_(min-width:1280px)]:!mt-5 sm:max-xl:!mt-0 sm:max-xl:!gap-3 xl:justify-start" aria-label={cms.text("college_marketing.pages_marketing_college_page_component_h_hero_section.aria_label_003")}>
            {cmsValues.hero.highlights.map((highlight) => (
              <li key={highlight} className="rounded-full border border-white/25 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/90 sm:max-xl:px-5 sm:max-xl:py-2 sm:max-xl:text-sm">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  ));
}
