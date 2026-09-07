import { CollegeStats } from "@/components/college/CollegeStats";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { overview, projectControlsStats } from "../data";
import { muted, section, shell } from "./layout";

export function OverviewSection() {
  return (
    <section id="pc-overview" className={`${section} relative isolate overflow-hidden`} aria-labelledby="pc-overview-title">
      <img
        className="pointer-events-none absolute -left-40 top-1/2 z-0 hidden w-[clamp(360px,32vw,560px)] -translate-y-1/2 select-none opacity-[0.045] lg:block"
        src="/assets/patterns/kbc-ibis-wreath.png"
        alt=""
        aria-hidden="true"
      />
      <div className={`${shell} relative z-10`}>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <FigmaSectionHeading id="pc-overview-title" eyebrow={overview.eyebrow} title={overview.title} align="left" />
            <div className={`mt-6 space-y-4 ${muted}`}>{overview.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </div>
          <div className="overflow-hidden rounded-2xl lg:col-span-5">
            <img src={overview.image} alt="Project controls professionals analysing schedules and risk registers" width={800} height={1000} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover object-top sm:aspect-[5/4] lg:aspect-[4/5]" />
          </div>
        </div>
        <CollegeStats items={projectControlsStats} />
      </div>
    </section>
  );
}
