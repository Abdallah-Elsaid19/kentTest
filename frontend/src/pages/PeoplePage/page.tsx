import { useCmsBindings } from "@/features/cms/publicContent";
import type { CSSProperties } from "react";
import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FacultySection } from "./components/FacultySection";
import { amgadHeroImage, peopleHeroImage } from "./data";
import "./hero.css";

const expertRevealStages = [
  { from: "100%", to: "83%", delay: "0ms" },
  { from: "83%", to: "65%", delay: "280ms" },
  { from: "67%", to: "50%", delay: "560ms" },
  { from: "50%", to: "33%", delay: "840ms" },
  { from: "33%", to: "17%", delay: "1120ms" },
  { from: "17%", to: "0%", delay: "1400ms" },
] as const;

type ExpertRevealStyle = CSSProperties & {
  "--expert-clip-from": string;
  "--expert-clip-to": string;
  "--expert-reveal-delay": string;
};

function ExpertsHeroPortraits({ side }: { side: "left" | "right" }) {
  const cms = useCmsBindings(["experts"]);
  const cmsValues = cms.resolve({ expertRevealStages, peopleHeroImage, amgadHeroImage });

  // Each group displays half of the same image, so clipping uses full-image percentages.
  const stages = side === "left" ? cmsValues.expertRevealStages.slice(0, 2) : cmsValues.expertRevealStages.slice(3);

  return cms.render((
    <div className={`experts-split-hero__portraits experts-split-hero__portraits--${side}`} aria-hidden="true">
      <div className="experts-split-hero__group">
        {stages.map((stage, index) => (
          <img
            key={stage.to}
            className="experts-hero-person"
            src={cmsValues.peopleHeroImage}
            alt=""
            draggable={false}
            fetchPriority={side === "left" && index === 0 ? "high" : "auto"}
            style={{
              "--expert-clip-from": stage.from,
              "--expert-clip-to": stage.to,
              "--expert-reveal-delay": stage.delay,
            } as ExpertRevealStyle}
          />
        ))}
      </div>
      {side === "left" && (
        <img
          className="experts-hero-person experts-split-hero__amgad-original"
          src={cmsValues.amgadHeroImage}
          alt=""
          draggable={false}
          style={{
            "--expert-clip-from": "100%",
            "--expert-clip-to": "0%",
            "--expert-reveal-delay": cmsValues.expertRevealStages[2].delay,
          } as ExpertRevealStyle}
        />
      )}
    </div>
  ));
}

export default function PeoplePage() {
  const cms = useCmsBindings(["experts"]);

  return cms.render((
    <div className="kbc-figma-home overflow-hidden bg-[#f8f6fa]">
      <RouteMeta
        fallbackTitle={cms.text("experts.pages_people_page_page_people_page.fallback_title_001")}
        fallbackDescription={cms.text("experts.pages_people_page_page_people_page.fallback_description_002")}
      />

      <section className="figma-hero experts-split-hero relative isolate before:!hidden !p-0" aria-labelledby="experts-hero-heading">
        <div className="experts-split-hero__layout">
          <ExpertsHeroPortraits side="left" />
          <div className="figma-hero__copy experts-split-hero__copy">
            <p className="figma-hero__eyebrow !mx-auto !text-xs !font-bold !leading-5 !tracking-widest">{cms.text("experts.pages_people_page_page_people_page.text_003")}</p>
            <h1 id="experts-hero-heading">{cms.text("experts.pages_people_page_page_people_page.text_004")}<span>{cms.text("experts.pages_people_page_page_people_page.text_005")}</span></h1>
            <p className="experts-split-hero__description">{cms.text("experts.pages_people_page_page_people_page.text_006")}</p>
          </div>
          <ExpertsHeroPortraits side="right" />
        </div>
      </section>

      <main>
        <FacultySection />
      </main>

      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
          <div className="relative isolate grid overflow-hidden rounded-[1.75rem] bg-[#25103F] p-7 text-white shadow-[0_24px_70px_rgba(36,13,68,0.2)] sm:p-10 lg:grid-cols-[1fr_340px] lg:items-end lg:gap-16 lg:p-14">
            <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_90%_25%,rgba(96,43,190,0.6),transparent_35%)]" aria-hidden="true" />
            <img className="pointer-events-none absolute -bottom-40 -right-24 -z-10 hidden w-[560px] select-none opacity-[0.07] md:block" src={cms.text("experts.pages_people_page_page_people_page.src_007")} alt="" aria-hidden="true" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5C94F]">{cms.text("experts.pages_people_page_page_people_page.text_008")}</p>
              <h2 className="mt-5 max-w-[760px] !text-4xl !font-semibold !leading-[1.02] !tracking-[-0.04em] !text-white sm:!text-5xl lg:!text-6xl">{cms.text("experts.pages_people_page_page_people_page.text_009")}</h2>
              <p className="mt-6 max-w-[720px] text-sm leading-7 text-white/65 sm:text-base">{cms.text("experts.pages_people_page_page_people_page.text_010")}</p>
            </div>
            <div className="mt-9 grid gap-3 lg:mt-0">
              <NavigationButton className="w-full justify-between px-6" to={cms.text("experts.pages_people_page_page_people_page.to_011")} variant="accent">{cms.text("experts.pages_people_page_page_people_page.text_012")}<ArrowRight className="size-4" aria-hidden="true" /></NavigationButton>
              <NavigationButton className="w-full justify-between px-6" to={cms.text("experts.pages_people_page_page_people_page.to_013")} variant="inverse">{cms.text("experts.pages_people_page_page_people_page.text_014")}<ArrowUpRight className="size-4" aria-hidden="true" /></NavigationButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  ));
}
