import { ArrowRight } from "lucide-react";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

export function WorkplaceDevelopmentSection() {
  return (
    <section className="figma-workplace !py-16 sm:!py-20 xl:!py-[118px]" aria-labelledby="workplace-title">
      <div className="figma-shell">
        <FigmaSectionHeading id="workplace-title" eyebrow="What makes KBC different" title={<>Professional development<br />designed around the workplace.</>} align="center" />
        <div className="figma-workplace__grid !grid-cols-1 !grid-rows-none lg:!grid-cols-[1.05fr_.95fr] lg:!grid-rows-[296px_296px_190px]">
          <article className="figma-workplace__image-card !min-h-[400px] ![grid-row:auto] sm:!min-h-[470px] lg:![grid-row:1/4]">
            <img src="/assets/images/figma-home/workplace-teaching.png" alt="Expert teaching at a Kent Business College professional session" loading="lazy" />
            <div><span className="!text-xs !font-bold !leading-5 !tracking-widest !uppercase">Applied learning</span><h3 className="!text-3xl !font-medium !leading-none !tracking-tight sm:!text-4xl">Workplace activity is part of the<br />learning—not an afterthought.</h3></div>
          </article>
          <article className="figma-workplace__feature is-green !p-6 sm:!p-8"><span className="!text-xs !font-bold !leading-none">01</span><h3 className="!text-2xl !font-semibold !leading-tight !tracking-tight sm:!text-3xl">Expert teaching and human coaching</h3><p className="!text-sm !leading-relaxed sm:!text-base">Learners combine structured teaching with personal coaching, reflection and workplace application.</p><ul className="figma-workplace__bullets !flex-wrap [&>li]:!text-xs [&>li]:!font-medium [&>li]:!leading-5"><li>Teaching</li><li>Coaching</li><li>Application</li></ul></article>
          <article className="figma-workplace__feature is-lilac !p-6 sm:!p-8"><span className="!text-xs !font-bold !leading-none">02</span><h3 className="!text-2xl !font-semibold !leading-tight !tracking-tight sm:!text-3xl">Professional progression</h3><p className="!text-sm !leading-relaxed sm:!text-base">Selected programmes support routes towards recognised qualifications, membership and chartered progression.</p><ul className="figma-workplace__path !flex-wrap [&>li]:!text-xs [&>li]:!font-medium [&>li]:!leading-5"><li>Apprenticeship</li><ArrowRight aria-hidden="true" /><li>Qualification</li><ArrowRight aria-hidden="true" /><li>Recognition</li></ul></article>
          <article className="figma-workplace__progress !col-auto !p-6 sm:!p-8 lg:!col-start-2"><span className="!text-xs !font-bold !leading-none">03</span><h3 className="!text-2xl !font-semibold !leading-tight !tracking-tight sm:!text-3xl">Employer visibility</h3><p className="!text-sm !leading-relaxed sm:!text-base">Progress reviews and workplace evidence help employers understand how capability is developing over time.</p><div><i /><span className="!text-xs !font-medium !leading-5">Structured progress, not passive attendance</span></div></article>
        </div>
      </div>
    </section>
  );
}
