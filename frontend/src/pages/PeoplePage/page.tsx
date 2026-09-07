import type { CSSProperties } from "react";
import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FacultySection } from "./components/FacultySection";
import { peopleHeroImage } from "./data";

const expertImageMask = {
  WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 78%, transparent 100%)",
  maskImage: "linear-gradient(to bottom, black 0%, black 78%, transparent 100%)",
};

const expertRevealStages = [
  { from: "100%", to: "53%", delay: "0ms" },
  { from: "53%", to: "39%", delay: "280ms" },
  { from: "39%", to: "24%", delay: "560ms" },
  { from: "24%", to: "11%", delay: "840ms" },
  { from: "11%", to: "0%", delay: "1120ms" },
] as const;

type ExpertRevealStyle = CSSProperties & {
  "--expert-clip-from": string;
  "--expert-clip-to": string;
  "--expert-reveal-delay": string;
};

function ExpertsHeroPortraits({ className }: { className: string }) {
  return (
    <div className={className} style={expertImageMask} aria-hidden="true">
      {expertRevealStages.map((stage, index) => (
        <img
          key={stage.to}
          className="experts-hero-person absolute inset-0 size-full object-contain object-right-top"
          src={peopleHeroImage}
          alt=""
          draggable={false}
          style={{
            "--expert-clip-from": stage.from,
            "--expert-clip-to": stage.to,
            "--expert-reveal-delay": stage.delay,
          } as ExpertRevealStyle}
          fetchPriority={index === 0 ? "high" : "auto"}
        />
      ))}
    </div>
  );
}

export default function PeoplePage() {
  return (
    <div className="kbc-figma-home overflow-hidden bg-[#f8f6fa]">
      <RouteMeta
        fallbackTitle="Our Experts | Kent Business College"
        fallbackDescription="Meet the portfolio, project, programme and benefits-realisation experts supporting professional learning at Kent Business College."
      />

      <section className="figma-hero relative isolate before:!hidden !min-h-[100svh] !p-0" style={{ background: "var(--color-primary)" }} aria-labelledby="experts-hero-heading">
        <ExpertsHeroPortraits className="pointer-events-none absolute bottom-6 left-1/2 -z-10 aspect-[1983/793] w-[160vw] max-w-none -translate-x-[66%] sm:bottom-8 sm:w-[110vw] lg:w-[108vw] xl:hidden" />
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(90deg,#401B8C_0%,#401B8C_38%,rgba(64,27,140,.94)_52%,rgba(64,27,140,.52)_72%,rgba(64,27,140,.18)_100%)]" aria-hidden="true" />

        <div className="figma-shell relative flex min-h-[100svh] items-start pb-[260px] pt-[190px] sm:pb-[360px] sm:pt-[210px] lg:pt-[220px] xl:items-center xl:pb-20 xl:pt-[164px]">
          <div className="relative isolate w-full">
            <ExpertsHeroPortraits className="pointer-events-none absolute right-[calc((100vw-100%)/-2)] z-0 hidden aspect-[1983/793] max-w-none xl:-top-16 xl:block xl:w-[72vw]" />
            <div className="figma-hero__copy relative z-10 mx-auto flex w-full max-w-[760px] flex-col items-center text-center xl:mx-0 xl:block xl:max-w-[680px] xl:text-left">
              <p className="figma-hero__eyebrow !mx-auto !text-xs !font-bold !leading-5 !tracking-widest xl:!ml-0 xl:!mr-0">Our experts</p>
              <h1 className="w-full !text-[clamp(2.35rem,11.5vw,3rem)] !font-medium !leading-none !tracking-tight sm:!text-[clamp(4.25rem,10vw,5.125rem)] xl:!text-[82px]" id="experts-hero-heading">Expertise that moves <span>practice forward.</span></h1>
              <p className="w-full !text-base !leading-relaxed sm:!text-xl sm:!leading-[1.6] xl:!text-lg">Learn from recognised specialists who connect rigorous thinking with real-world portfolio, programme and project delivery.</p>
            </div>
          </div>
        </div>
      </section>

      <main>
        <FacultySection />
      </main>

      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
          <div className="relative isolate grid overflow-hidden rounded-[1.75rem] bg-[#25103F] p-7 text-white shadow-[0_24px_70px_rgba(36,13,68,0.2)] sm:p-10 lg:grid-cols-[1fr_340px] lg:items-end lg:gap-16 lg:p-14">
            <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_90%_25%,rgba(96,43,190,0.6),transparent_35%)]" aria-hidden="true" />
            <img className="pointer-events-none absolute -bottom-40 -right-24 -z-10 hidden w-[560px] select-none opacity-[0.07] md:block" src="/assets/patterns/kbc-horse-growth.png" alt="" aria-hidden="true" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5C94F]">Learn with specialists</p>
              <h2 className="mt-5 max-w-[760px] !text-4xl !font-semibold !leading-[1.02] !tracking-[-0.04em] !text-white sm:!text-5xl lg:!text-6xl">Find the right professional route for your goals.</h2>
              <p className="mt-6 max-w-[720px] text-sm leading-7 text-white/65 sm:text-base">Talk to the KBC team about programmes, expert-led sessions and organisational development.</p>
            </div>
            <div className="mt-9 grid gap-3 lg:mt-0">
              <NavigationButton className="w-full justify-between px-6" to="/courses" variant="accent">Explore programmes <ArrowRight className="size-4" aria-hidden="true" /></NavigationButton>
              <NavigationButton className="w-full justify-between px-6" to="/book-session" variant="inverse">Book an information session <ArrowUpRight className="size-4" aria-hidden="true" /></NavigationButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
