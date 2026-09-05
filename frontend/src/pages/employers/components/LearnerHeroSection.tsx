import { BadgePercent, BadgePoundSterling, Clock3 } from "lucide-react";
import { HeroActionButtons } from "@/components/navigation";
import { heroStats } from "../data";

const learnerHeroImage = "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/fc112fd534ee4edbb7687567500345f3.webp";
const statIcons = [BadgePoundSterling, BadgePercent, Clock3];

export function LearnerHeroSection() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-primary text-white" aria-labelledby="employer-hero-title">
      <img
        className="pointer-events-none absolute inset-y-0 right-0 -z-30 h-full w-full object-cover object-center lg:w-[60%]"
        src={learnerHeroImage}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-20 w-full bg-primary/35 lg:w-[60%]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,#401B8C_0%,#401B8C_38%,rgba(64,27,140,.94)_52%,rgba(64,27,140,.52)_72%,rgba(64,27,140,.18)_100%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-full shadow-[inset_100px_0_120px_-30px_rgba(64,27,140,1),inset_0_-90px_105px_-38px_rgba(64,27,140,.98),inset_0_75px_95px_-45px_rgba(64,27,140,.86)] lg:w-[60%]" aria-hidden="true" />

      <div className="figma-shell kbc-page-hero-offset relative z-10 flex min-h-[100svh] items-center pb-20">
        <div className="max-w-[720px]">
          <p className="figma-eyebrow !text-[#F5C94F]">For Employers</p>
          <h1 id="employer-hero-title" className="mt-5 !text-[clamp(2.5rem,13vw,3rem)] !leading-[.94] !text-white drop-shadow-[0_5px_18px_rgba(0,0,0,.75)] sm:!text-6xl lg:!text-7xl xl:!text-[78px]">
            Build the capability <span className="text-[#F5C94F]">your business needs.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 drop-shadow-[0_3px_10px_rgba(0,0,0,.8)] sm:text-lg">
            Upskill your workforce with levy-funded apprenticeships and tailored professional development — delivered flexibly around your business, with clear, measurable impact.
          </p>

          <HeroActionButtons
            primary={{ label: "Explore workforce solutions", to: "#workforce-solutions" }}
            secondary={{ label: "Partner with us", to: "#partner-with-us" }}
          />

          <dl className="mt-10 grid max-w-xl gap-5 border-t border-white/15 pt-6 sm:grid-cols-3">
            {heroStats.map((stat, index) => {
              const Icon = statIcons[index];
              return (
                <div className="grid grid-cols-[36px_1fr] gap-3" key={stat.value}>
                  <span className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-[#F5C94F]">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-lg font-semibold leading-none text-white">{stat.value}</dt>
                    <dd className="mt-2 text-xs leading-5 text-white/65">{stat.label}</dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
