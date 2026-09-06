import { BadgePercent, BadgePoundSterling, Clock3 } from "lucide-react";
import { HeroActionButtons } from "@/components/navigation";
import { heroStats } from "../data";

const learnerHeroImage = "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/afb30d121ef2443fb6f5661f4f5c285f.webp";
const statIcons = [BadgePoundSterling, BadgePercent, Clock3];

export function LearnerHeroSection() {
  return (
    <section className="kbc-page-hero-offset relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-primary pb-[clamp(16px,3svh,48px)] text-white" aria-labelledby="employer-hero-title">
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

      <div className="figma-shell figma-hero__grid relative z-10 !items-start sm:max-xl:!grid-cols-1">
        <div className="figma-hero__copy flex flex-col items-center text-center sm:block sm:max-xl:!mx-auto sm:max-xl:!flex sm:max-xl:!max-w-[760px] sm:max-xl:!flex-col sm:max-xl:!gap-9 sm:max-xl:!text-center xl:!w-[820px] xl:!max-w-[820px] xl:text-left">
          <p className="figma-hero__eyebrow !mx-auto !text-xs !font-bold !leading-5 !tracking-widest !text-[#F5C94F] [@media(max-height:1000px)_and_(max-width:639px)]:!mb-3 [@media(max-height:1000px)_and_(min-width:1280px)]:!mb-3 sm:max-xl:!mb-0 sm:max-xl:!text-[15px] xl:!ml-0 xl:!mr-0">For Employers</p>
          <h1 id="employer-hero-title" className="flex flex-col gap-2 !text-[clamp(28px,9vw,48px)] !font-medium !leading-none !tracking-tight !text-white sm:gap-3 sm:max-xl:!text-[clamp(52px,7.5vw,72px)] xl:!text-[72px]">
            <span className="block whitespace-nowrap text-white">Build the capability</span>
            <span className="block whitespace-nowrap text-[#F5C94F]">your business needs.</span>
          </h1>
          <p className="!mt-8 max-w-2xl !text-base !leading-relaxed text-white/80 sm:max-xl:!mt-3 sm:max-xl:!text-[27px] sm:max-xl:!leading-[1.6] xl:!mt-10 xl:!text-lg">
            Upskill your workforce with levy-funded apprenticeships and tailored professional development — delivered flexibly around your business, with clear, measurable impact.
          </p>

          <HeroActionButtons
            primary={{ label: "Explore workforce solutions", to: "#workforce-solutions" }}
            secondary={{ label: "Partner with us", to: "#partner-with-us" }}
            className="w-full justify-center [@media(max-height:1000px)_and_(max-width:639px)]:!mt-5 [@media(max-height:1000px)_and_(min-width:1280px)]:!mt-5 sm:max-xl:!mt-0 sm:max-xl:gap-4 xl:justify-start [&>a]:!w-full sm:[&>a]:!w-auto"
          />

          <dl className="mt-10 grid max-w-xl gap-5 border-t border-white/15 pt-6 text-left [@media(max-height:1000px)_and_(max-width:639px)]:!mt-5 sm:grid-cols-3 sm:max-xl:!mx-auto sm:max-xl:!mt-0 xl:mx-0">
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
