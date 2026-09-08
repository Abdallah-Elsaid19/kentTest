import { ChevronLeft, ChevronRight, Pause, Play, Star } from "lucide-react";
import { useEffect, useState } from "react";

import { testimonials as homeTestimonials } from "./data";
import { SectionHeading } from "@/components/programme/SectionHeading";
import type { ProgrammeHeading } from "@/components/programme/ProgrammeSection";

export type LearnerReview = { name: string; role: string; quote: string; image: string; tags?: readonly string[]; rating?: number };

const AUTOPLAY_DELAY = 5_000;

export function FigmaTestimonialsSection({ items = homeTestimonials, heading, id }: {
  items?: readonly LearnerReview[];
  heading?: ProgrammeHeading;
  id?: string;
} = {}) {
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = items;

  useEffect(() => {
    if (paused || interacting || testimonials.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(timer);
  }, [paused, interacting, testimonials.length]);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section id={id} onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)} onFocusCapture={() => setInteracting(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false); }} className="relative isolate scroll-mt-20 overflow-hidden py-16 sm:scroll-mt-64 sm:py-20 xl:py-[110px]" aria-label={heading ? undefined : "Learner reviews"} aria-labelledby={heading ? `${id}-title` : undefined}>
      <img
        className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
        src="/assets/images/figma-home/marketing-event.png"
        alt=""
        loading="lazy"
        decoding="async"
      />
      <div className={`absolute inset-0 -z-20 ${heading ? "bg-primary-dark/80" : "bg-gradient-to-r from-primary/35 via-primary/10 to-primary/25"}`} />
      <div className="absolute inset-0 -z-10 bg-black/5" />

      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1240px] sm:w-[calc(100%-2.5rem)]">
        {heading && <div className="mb-10"><SectionHeading {...heading} id={`${id}-title`} inverse /></div>}
        <div className="mb-4 flex justify-center gap-3">
          <button
            className="grid size-11 place-items-center rounded-lg bg-white text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kbc-gold-400 focus-visible:ring-offset-2"
            type="button"
            aria-label="Previous review"
            onClick={showPrevious}
          >
            <ChevronLeft aria-hidden="true" size={20} />
          </button>
          <button
            className="grid size-11 place-items-center rounded-lg bg-white text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kbc-gold-400 focus-visible:ring-offset-2"
            type="button"
            aria-label="Next review"
            onClick={showNext}
          >
            <ChevronRight aria-hidden="true" size={20} />
          </button>
          {heading && <button type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Play reviews" : "Pause reviews"} aria-pressed={paused} className="grid size-11 place-items-center rounded-lg bg-white text-primary shadow-lg hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kbc-gold-400">{paused ? <Play size={20} aria-hidden="true" /> : <Pause size={20} aria-hidden="true" />}</button>}
        </div>

        <div className={`relative mx-auto ${heading ? "min-h-[500px]" : "h-[620px] xs:h-[570px] sm:h-[500px] lg:h-[460px]"} max-w-[1120px] overflow-hidden rounded-[24px] border border-white/60 bg-white/75 px-5 py-9 text-center shadow-[0_30px_90px_rgba(25,8,36,0.25)] backdrop-blur-lg sm:px-10 sm:py-11 lg:px-20`}>
          <div className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full border border-primary/10" />
          <div className="pointer-events-none absolute -bottom-24 -left-12 size-64 rounded-full bg-primary/[.06]" />

          {(heading ? testimonials : testimonials.slice(activeIndex, activeIndex + 1)).map((activeTestimonial, index) => <article className={`relative ${!heading || index === activeIndex ? "flex" : "hidden"} ${heading ? "" : "h-full"} flex-col items-center`} key={activeTestimonial.name} aria-hidden={heading ? index !== activeIndex : undefined} aria-live={paused || interacting ? "polite" : "off"}>
            {!heading && <div className="flex flex-col items-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] !text-primary/70">Learner testimonials</p>
              <svg className="mt-1.5 h-2 w-40 text-primary/65" viewBox="0 0 160 8" fill="none" aria-hidden="true">
                <path d="M2 6C42 1.2 116 1.2 158 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>}
            {heading ? <h3 className="mt-3 text-2xl font-semibold leading-tight !text-kbc-dark-900 sm:text-3xl">{activeTestimonial.name}</h3> : <h2 className="mt-3 text-2xl font-semibold leading-tight !text-kbc-dark-900 sm:text-3xl">{activeTestimonial.name}</h2>}
            <p className="mt-2 text-sm font-medium !text-primary sm:text-base">{activeTestimonial.role}</p>

            <div className="mt-5 flex gap-1.5 text-kbc-gold-400" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star aria-hidden="true" fill="currentColor" key={index} size={21} strokeWidth={2} />
              ))}
            </div>

            <blockquote className="mt-6 max-w-[880px] text-sm font-medium leading-7 !text-kbc-dark-700 sm:text-base sm:leading-8">
              “{activeTestimonial.quote}”
            </blockquote>

            {activeTestimonial.tags && <ul className="mt-5 flex flex-wrap justify-center gap-2">{activeTestimonial.tags.map((tag) => <li className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary" key={tag}>{tag}</li>)}</ul>}
            <img
              className={`${heading ? "mt-7" : "mt-auto"} size-[92px] rounded-full border-[3px] border-primary object-cover shadow-[0_14px_35px_rgba(64,27,140,0.28)]`}
              src={activeTestimonial.image}
              alt={activeTestimonial.name}
              loading="lazy"
              decoding="async"
            />
          </article>)}
        </div>

        <div className="mx-auto mt-8 flex max-w-[760px] items-center justify-start gap-3 overflow-x-auto px-2 pb-3 sm:justify-center" aria-label="Select a learner review">
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                className={`relative shrink-0 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kbc-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-primary ${isActive ? "scale-110" : "opacity-75 hover:scale-105 hover:opacity-100"}`}
                type="button"
                aria-label={`Show ${testimonial.name}'s review`}
                aria-pressed={isActive}
                key={testimonial.name}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  className={`size-14 rounded-full object-cover shadow-lg sm:size-16 ${isActive ? "border-[3px] border-kbc-gold-400" : "border-2 border-white/80"}`}
                  src={testimonial.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
