import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FacultySection } from "./components/FacultySection";
import { peopleHeroImage } from "./data";

export default function PeoplePage() {
  return (
    <div className="kbc-figma-home overflow-hidden bg-[#f8f6fa]">
      <RouteMeta
        fallbackTitle="Our Experts | Kent Business College"
        fallbackDescription="Meet the portfolio, project, programme and benefits-realisation experts supporting professional learning at Kent Business College."
      />

      <section className="figma-hero relative isolate before:!hidden !min-h-[100svh] !p-0" style={{ background: "var(--color-primary)" }} aria-labelledby="experts-hero-heading">
        <img className="pointer-events-none absolute inset-y-0 right-0 -z-30 h-full w-full object-cover object-center lg:w-[60%]" src={peopleHeroImage} alt="" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 -z-20 w-full bg-[#401B8C]/35 lg:w-[60%]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,#401B8C_0%,#401B8C_38%,rgba(64,27,140,.94)_52%,rgba(64,27,140,.52)_72%,rgba(64,27,140,.18)_100%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-full shadow-[inset_100px_0_120px_-30px_rgba(64,27,140,1),inset_0_-90px_105px_-38px_rgba(64,27,140,.98),inset_0_75px_95px_-45px_rgba(64,27,140,.86)] lg:w-[60%]" aria-hidden="true" />

        <div className="figma-shell relative flex min-h-[100svh] items-center pb-20 pt-[150px] sm:pt-[164px]">
          <div className="figma-hero__copy flex flex-col items-center text-center sm:block sm:text-left">
            <p className="figma-hero__eyebrow !mx-auto !text-xs !font-bold !leading-5 !tracking-widest sm:!ml-0 sm:!mr-0">Our experts</p>
            <h1 className="!text-5xl !font-medium !leading-none !tracking-tight sm:!text-6xl lg:!text-7xl xl:!text-[82px]" id="experts-hero-heading">Expertise that moves <span>practice forward.</span></h1>
            <p className="!text-base !leading-relaxed sm:!text-lg">Learn from recognised specialists who connect rigorous thinking with real-world portfolio, programme and project delivery.</p>
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
              <NavigationButton className="w-full justify-between px-6" to="/contact" variant="inverse">Speak to our team <ArrowUpRight className="size-4" aria-hidden="true" /></NavigationButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
