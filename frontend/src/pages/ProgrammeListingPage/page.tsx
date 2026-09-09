import { useCmsBindings } from "@/features/cms/publicContent";
import { CollegeCtaPanel } from "@/components/college/CollegeCtaPanel";
import { shell } from "@/components/college/layout";
import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { PageHero } from "@/components/ui/PageHero";
import { programmes } from "@/data/programmes";
import { ProgrammeExplorer } from "./component/ProgrammeExplorer";

export default function ProgrammeListingPage() {
  const cms = useCmsBindings(["programmes"]);
  const cmsValues = cms.resolve({ programmes });

  return cms.render(<>
    <RouteMeta fallbackTitle={cms.text("programmes.pages_programme_listing_page_page_programme_listing_page.fallback_title_001")} fallbackDescription={cms.text("programmes.pages_programme_listing_page_page_programme_listing_page.fallback_description_002")} />
    <PageHero className="!pt-[180px] sm:!pt-[232px] [&>img]:object-right" image={cms.text("programmes.pages_programme_listing_page_page_programme_listing_page.image_003")} imageFit="contain" curvedEyebrow eyebrow={cms.text("programmes.pages_programme_listing_page_page_programme_listing_page.eyebrow_004")} title={cms.text("programmes.pages_programme_listing_page_page_programme_listing_page.title_005")} summary={cms.text("programmes.pages_programme_listing_page_page_programme_listing_page.summary_006")} />
    <ProgrammeExplorer programmes={cmsValues.programmes} />
    <section aria-labelledby="programme-support-title" className={`${shell} py-16 sm:py-20 lg:py-28`}>
      <CollegeCtaPanel id="programme-support-title" eyebrow={cms.text("programmes.pages_programme_listing_page_page_programme_listing_page.eyebrow_007")} title={cms.text("programmes.pages_programme_listing_page_page_programme_listing_page.title_008")} description={cms.text("programmes.pages_programme_listing_page_page_programme_listing_page.description_009")} actions={<>
        <NavigationButton to={cms.text("programmes.pages_programme_listing_page_page_programme_listing_page.to_010")} variant="accent">{cms.text("programmes.pages_programme_listing_page_page_programme_listing_page.text_011")}</NavigationButton>
        <NavigationButton to={cms.text("programmes.pages_programme_listing_page_page_programme_listing_page.to_012")} variant="inverse">{cms.text("programmes.pages_programme_listing_page_page_programme_listing_page.text_013")}</NavigationButton>
      </>} />
    </section>
  </>);
}
