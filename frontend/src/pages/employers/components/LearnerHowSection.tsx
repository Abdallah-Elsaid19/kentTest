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
          {learningSteps.map((step) => (
            <li
              className="group flex min-h-[290px] flex-col overflow-hidden rounded-xl border border-primary/30 bg-white p-7 shadow-[0_10px_30px_rgba(64,27,140,0.05)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_20px_45px_rgba(64,27,140,0.14)] motion-reduce:transform-none motion-reduce:transition-none"
              key={step.number}
            >
              <span className="text-4xl font-semibold leading-none tracking-tight text-primary">{step.number}</span>
              <h3 className="mt-8 text-xl font-semibold leading-snug tracking-tight text-kbc-purple-950">{step.title}</h3>
              <span className="mt-7 block h-0.5 w-14 bg-kbc-gold-500 transition-[width] duration-500 ease-out group-hover:w-full motion-reduce:transition-none" aria-hidden="true" />
              <p className="mt-6 text-sm leading-7 text-kbc-dark-500">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
