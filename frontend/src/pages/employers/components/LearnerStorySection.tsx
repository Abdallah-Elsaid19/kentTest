import { Star } from "lucide-react";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { learnerStories } from "../data";

export function LearnerStorySection() {
  return (
    <section className="bg-[#f7f6f9] py-16 sm:py-20 lg:py-28" id="learner-stories" aria-labelledby="learner-story-title">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[900px] [&_h2]:!font-serif [&_h2]:!font-normal">
          <FigmaSectionHeading id="learner-story-title" eyebrow="Employer stories" title="Trusted by organisations across the UK." />
        </div>

        <div className="mt-12 grid auto-rows-fr gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {learnerStories.map((story) => (
            <article className="flex min-h-[238px] flex-col rounded-2xl border border-[#e7e2eb] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_18px_45px_rgba(39,14,73,0.09)] motion-reduce:transform-none motion-reduce:transition-none sm:p-7" key={story.name}>
              <div className="flex gap-1 text-[#D5A20A]" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star className="size-4 fill-current" key={index} aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-sm leading-6 text-[#4d4554]">“{story.quote}”</blockquote>
              <div className="mt-5 border-t border-[#ebe7ee] pt-4">
                <strong className="block font-serif text-base font-semibold text-[#17131d]">{story.name}</strong>
                <span className="mt-1 block text-xs leading-5 text-[#82788a]">{story.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
