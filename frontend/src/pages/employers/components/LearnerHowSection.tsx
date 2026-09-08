import { NumberedFeatureCard } from "@/components/college/NumberedFeatureCard";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { learningSteps } from "../data";

export function LearnerHowSection() {
  return (
    <section className="relative isolate scroll-mt-40 overflow-hidden bg-kbc-purple-50 py-16 sm:py-20 lg:py-28" id="how-it-works" aria-labelledby="learner-how-title">
      <img
        className="pointer-events-none absolute -left-32 top-1/2 z-0 hidden w-[clamp(320px,29vw,500px)] -translate-y-1/2 select-none opacity-[0.055] sm:block"
        src="/assets/patterns/kbc-ibis-wreath.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[900px]">
          <FigmaSectionHeading id="learner-how-title" eyebrow="How it works" title="A straightforward path to a stronger team." />
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {learningSteps.map((step) => <NumberedFeatureCard key={step.number} {...step} />)}
        </ol>
      </div>
    </section>
  );
}
