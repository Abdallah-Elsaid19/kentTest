import { ArrowRight } from "lucide-react";
import { FigmaSectionHeading } from "./FigmaSectionHeading";

export function WorkplaceDevelopmentSection() {
  return (
    <section className="figma-workplace !py-16 sm:!py-20 xl:!py-[118px]" aria-labelledby="workplace-title">
      <div className="figma-shell">
        <FigmaSectionHeading id="workplace-title" eyebrow="What makes KBC different" title={<>Professional development<br />designed around the workplace.</>} align="center" />
        <div className="figma-workplace__grid !grid-cols-1 !grid-rows-none lg:!grid-cols-[1.05fr_.95fr] lg:!grid-rows-[296px_296px_190px]">
          <article className="figma-workplace__image-card !min-h-[400px] ![grid-row:auto] sm:!min-h-[470px] lg:![grid-row:1/3]">
            <img src="/assets/images/figma-home/workplace-teaching.png" alt="Expert teaching at a Kent Business College professional session" loading="lazy" />
            <div><span>Applied learning</span><h3>Workplace activity is part of the<br />learning—not an afterthought.</h3></div>
          </article>
          <article className="figma-workplace__feature is-green !p-6 sm:!p-8"><span>01</span><h3>Expert teaching and human coaching</h3><p>Learners combine structured teaching with personal coaching, reflection and workplace application.</p><ul className="figma-workplace__bullets !flex-wrap"><li>Teaching</li><li>Coaching</li><li>Application</li></ul></article>
          <article className="figma-workplace__feature is-lilac !p-6 sm:!p-8"><span>02</span><h3>Professional progression</h3><p>Selected programmes support routes towards recognised qualifications, membership and chartered progression.</p><ul className="figma-workplace__path !flex-wrap"><li>Apprenticeship</li><ArrowRight aria-hidden="true" /><li>Qualification</li><ArrowRight aria-hidden="true" /><li>Recognition</li></ul></article>
          <article className="figma-workplace__progress !col-auto !p-6 sm:!p-8 lg:!col-start-1"><span>03</span><h3>Employer visibility</h3><p>Progress reviews and workplace evidence help employers understand how capability is developing over time.</p><div><i /><span>Structured progress, not passive attendance</span></div></article>
        </div>
      </div>
    </section>
  );
}
