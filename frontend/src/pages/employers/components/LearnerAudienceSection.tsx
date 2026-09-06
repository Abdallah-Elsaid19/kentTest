import { ChartColumnIncreasing, ChartNoAxesCombined, Heart, Puzzle } from "lucide-react";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { learnerAudiences } from "../data";

const audienceIcons = [Puzzle, Heart, ChartNoAxesCombined, ChartColumnIncreasing];

export function LearnerAudienceSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-28" aria-labelledby="learner-audience-title">
      <img
        className="pointer-events-none absolute -right-28 top-1/2 z-0 hidden w-[clamp(300px,30vw,520px)] -translate-y-1/2 select-none opacity-[0.05] sm:block"
        src="/assets/patterns/kbc-horse-growth.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[900px]">
          <FigmaSectionHeading
            id="learner-audience-title"
            eyebrow="Why partner with KBC"
            title="Development that moves your business forward."
            description="Invest in your people with recognised qualifications that deliver measurable, on-the-job impact."
          />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {learnerAudiences.map((audience, index) => {
            const Icon = audienceIcons[index];
            return (
              <article className="group min-h-[250px] rounded-2xl border border-[#e4ddec] bg-[#fbf9fd] p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-white hover:shadow-[0_18px_45px_rgba(39,14,73,0.1)] motion-reduce:transform-none motion-reduce:transition-none" key={audience.title}>
                <span className="flex size-12 items-center justify-center rounded-xl bg-[#f0eafb] text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-7 text-lg font-semibold leading-snug tracking-tight text-[#17131d]">{audience.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#716a7a]">{audience.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
