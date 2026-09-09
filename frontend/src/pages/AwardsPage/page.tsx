import { useCmsBindings } from "@/features/cms/publicContent";
import { ArrowUpRight } from "lucide-react";

import { environment } from "@/app/environment";
import { CollegeCtaPanel } from "@/components/college/CollegeCtaPanel";
import { CollegeFeatureCard } from "@/components/college/CollegeFeatureCard";
import { CollegeHeroSurface } from "@/components/college/CollegeHeroSurface";
import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { containerClass, goldSectionEyebrowClass, sectionClass, SectionIntro } from "@/pages/FundingEligibilityPage/components/shared";

import { RecognitionSection } from "./component/RecognitionSection";
import { awardsCta, awardsHero, awardsSeo, recognitionBenefits } from "./data";

export default function AwardsPage() {
  const cms = useCmsBindings(["awards"]);
  const cmsValues = cms.resolve({ awardsSeo, awardsHero, recognitionBenefits, awardsCta });

  return cms.render((
    <div className="kbc-figma-home bg-white font-body text-[#24152f] motion-reduce:[&_*]:!duration-[.01ms]">
      <RouteMeta fallbackTitle={cmsValues.awardsSeo.title} fallbackDescription={cmsValues.awardsSeo.description} seo={{ ...cmsValues.awardsSeo, canonical: `${environment.VITE_SITE_URL}/awards` }} />

      <CollegeHeroSurface image={cmsValues.awardsHero.image} titleId="awards-title" variant="funding" fullHeight patternSide="left">
        <div className={`${containerClass} pb-[clamp(70px,9vw,112px)] max-[780px]:pb-[70px]`}>
          <div className="mx-auto max-w-[920px] text-center">
            <p className={`${goldSectionEyebrowClass} !mx-auto !mb-8 !justify-center`}>{cmsValues.awardsHero.eyebrow}</p>
            <h1 id="awards-title" className="mt-0 text-4xl !font-medium !leading-[1.15] !tracking-tight !text-white sm:text-6xl lg:text-7xl">
              {cmsValues.awardsHero.title} <span className="text-[#F5C94F]">{cmsValues.awardsHero.accent}</span>
            </h1>
            <div className="mx-auto mt-[30px] max-w-[720px] space-y-4 text-base leading-[1.75] text-white/80 sm:text-lg">
              {cmsValues.awardsHero.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </div>
      </CollegeHeroSurface>

      <RecognitionSection />

      <section className={`${sectionClass} !bg-[#f7f4fa]`} aria-labelledby="recognition-benefits-title">
        <div className={containerClass}>
          <SectionIntro id="recognition-benefits-title" eyebrow={cmsValues.recognitionBenefits.eyebrow} title={cmsValues.recognitionBenefits.title} align="left" />
          <div className="grid gap-5 md:grid-cols-3">
            {cmsValues.recognitionBenefits.items.map(({ icon: Icon, title, copy }) => (
              <CollegeFeatureCard key={title} title={title} marker={<Icon size={23} aria-hidden="true" />} surface="white">
                <p>{copy}</p>
              </CollegeFeatureCard>
            ))}
          </div>
        </div>
      </section>

      <section className={sectionClass} aria-labelledby="awards-cta-title">
        <div className={containerClass}>
          <CollegeCtaPanel id="awards-cta-title" eyebrow={cmsValues.awardsCta.eyebrow} title={cmsValues.awardsCta.title} description={cmsValues.awardsCta.description} actions={
            cmsValues.awardsCta.actions.map((action, index) => (
              <NavigationButton key={action.href} to={action.href} variant={index === 0 ? "accent" : "inverse"} className={`min-h-[50px] gap-2.5 px-[22px] py-[13px] font-bold ${index === 0 ? "!bg-[#F5C94F] !text-[#24102d] hover:!bg-[#ffda69]" : ""}`}>
                {action.label}<ArrowUpRight size={17} aria-hidden="true" />
              </NavigationButton>
            ))
          } />
        </div>
      </section>
    </div>
  ));
}
