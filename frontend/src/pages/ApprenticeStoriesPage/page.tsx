import { Award, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { CapabilityCtaSection } from "@/pages/StoriesPage/components/CapabilityCtaSection";
import { apprenticeStories } from "./data";

export default function ApprenticeStoriesPage() {
  return (
    <div className="kbc-figma-home overflow-hidden bg-white">
      <RouteMeta fallbackTitle="Apprentices' Stories | Kent Business College" fallbackDescription="Meet Kent Business College apprentices and explore how professional learning is applied in the workplace." />

      <section className="kbc-page-hero-offset relative overflow-hidden bg-[#401B8C] pb-20 text-white sm:pb-24" aria-labelledby="apprentice-stories-title">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(119,55,154,.38),transparent_30%),radial-gradient(circle_at_14%_88%,rgba(214,176,78,.10),transparent_30%)]" aria-hidden="true" />
        <div className="figma-shell relative">
          <span className="figma-eyebrow !text-kbc-gold-500">Workplace learning in practice</span>
          <h1 className="max-w-4xl !text-[clamp(2.5rem,13vw,3rem)] !leading-[.94] !text-white sm:!text-6xl lg:!text-7xl xl:!text-[82px]" id="apprentice-stories-title">Apprentices' <span className="text-kbc-gold-500">Stories.</span></h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">Meet apprentices applying structured learning, professional frameworks and new skills directly inside their roles.</p>
        </div>
      </section>

      <section className="bg-kbc-purple-50 py-16 sm:py-20 xl:py-[118px]" aria-labelledby="stories-list-title">
        <div className="figma-shell">
          <div className="max-w-4xl">
            <span className="figma-eyebrow">Learner perspectives</span>
            <h2 className="!text-4xl !leading-[1.02] text-kbc-purple-950 sm:!text-5xl xl:!text-[58px]" id="stories-list-title">Professional learning, applied through real responsibility.</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {apprenticeStories.map((story) => (
              <article
                className="flex min-h-full flex-col gap-4 rounded-lg bg-white bg-[url('https://kentbusinesscollege.com/wp-content/uploads/2026/04/Group-212.png')] bg-cover bg-center p-4 shadow-[0_0_10px_rgba(0,0,0,.15)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(156,63,211,.5)] motion-reduce:transform-none"
                key={story.slug}
              >
                <div className="relative flex aspect-[2/1] items-start justify-start">
                  <img
                    className="aspect-square w-[51%] rounded-full border-[5px] border-white object-cover object-top shadow-sm"
                    src={story.image}
                    alt={story.name}
                    loading="lazy"
                  />
                  <img
                    className="absolute right-0 top-0 w-[34%] object-contain sm:w-[31%]"
                    src={story.stampImage}
                    alt={`${story.programme} achievement badge`}
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="!font-heading text-lg !font-bold leading-tight text-kbc-purple-950">
                    <Link className="transition-colors hover:text-kbc-purple-700" to={`/apprentices/stories/${story.slug}`}>{story.name}</Link>
                  </h3>
                  <p className="text-sm leading-6 text-kbc-dark-600">{story.role}</p>
                </div>

                <div className="flex items-center gap-4">
                  <Award className="h-6 w-6 shrink-0 text-kbc-purple-700" aria-hidden="true" />
                  <p className="text-sm font-semibold leading-5 text-kbc-purple-950">{story.programme}</p>
                </div>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-1">
                  <NavigationButton
                    className="!min-h-10 !rounded !bg-kbc-purple-700 !px-5 !text-xs !font-medium !text-white hover:!bg-kbc-purple-950"
                    to={`/apprentices/stories/${story.slug}`}
                  >
                    Case Study
                  </NavigationButton>
                  <NavigationButton
                    className="!min-h-10 !rounded !border-kbc-purple-700 !bg-kbc-purple-50 !px-5 !text-xs !font-medium !text-kbc-purple-700 hover:!bg-kbc-purple-700 hover:!text-white"
                    to={story.linkedIn}
                    external
                    newTab
                    variant="secondary"
                  >
                    <Linkedin className="mr-2 h-4 w-4" aria-hidden="true" />
                    Linkedin
                  </NavigationButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CapabilityCtaSection />
    </div>
  );
}
