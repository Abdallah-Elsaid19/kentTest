import { CalendarDays, Headphones, LayoutGrid, UserRoundCog } from "lucide-react";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { learnerSupport } from "../data";

const supportIcons = [Headphones, CalendarDays, LayoutGrid, UserRoundCog];

export function LearnerSupportSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28" id="learner-support" aria-labelledby="learner-support-title">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[940px]">
          <FigmaSectionHeading
            id="learner-support-title"
            eyebrow="Partnership support"
            title="A partner, not just a provider."
          />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {learnerSupport.map((item, index) => {
            const Icon = supportIcons[index];
            return (
              <article className="group min-h-[235px] rounded-2xl border border-[#e4ddec] bg-[#fbf9fd] p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-white hover:shadow-[0_18px_45px_rgba(39,14,73,0.1)] motion-reduce:transform-none motion-reduce:transition-none" key={item.title}>
                <div className="flex items-center gap-5">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-[#f0eafb] text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-semibold tracking-tight text-[#17131d]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#716a7a]">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
