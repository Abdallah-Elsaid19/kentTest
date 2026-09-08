import { CollegeCtaPanel } from "@/components/college/CollegeCtaPanel";
import { shell } from "@/components/college/layout";
import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { PageHero } from "@/components/ui/PageHero";
import { programmes } from "@/data/programmes";
import { ProgrammeExplorer } from "./component/ProgrammeExplorer";

export default function ProgrammeListingPage() {
  return <>
    <RouteMeta fallbackTitle="All Programmes | Kent Business College" fallbackDescription="Explore Kent Business College apprenticeships, qualifications and professional development. Search programmes by College, level and career interest." />
    <PageHero className="!pt-[180px] sm:!pt-[232px] [&>img]:object-right" image="https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/7e82608f80bf412388f97694936a4641.png" imageFit="contain" curvedEyebrow eyebrow="Discover your next step" title="All Programmes" summary="Explore our range of programmes designed to accelerate your career and develop in-demand business skills." />
    <ProgrammeExplorer programmes={programmes} />
    <section aria-labelledby="programme-support-title" className={`${shell} py-16 sm:py-20 lg:py-28`}>
      <CollegeCtaPanel id="programme-support-title" eyebrow="Find the right route" title="Let’s find your next step." description="Whether you are advancing your career, developing your team or exploring apprenticeship opportunities, Kent Business College can help you find the right route for your goals." actions={<>
        <NavigationButton to="/book-session" variant="accent">Book an information session</NavigationButton>
        <NavigationButton to="/contact" variant="inverse">Speak to our team</NavigationButton>
      </>} />
    </section>
  </>;
}
