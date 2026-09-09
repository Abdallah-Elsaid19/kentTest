import { useCmsBindings } from "@/features/cms/publicContent";
import { Check } from "lucide-react";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { learningCopy, learningExperience } from "../data";
import { section, shell } from "./layout";

export function StudyModelSection() {
  const cms = useCmsBindings(["college_marketing"]);
  const cmsValues = cms.resolve({ section, shell, learningCopy, learningExperience });

  return cms.render((
    <section id="marketing-learning" className={cmsValues.section} aria-labelledby="marketing-learning-title">
      <div className={cmsValues.shell}>
        <FigmaSectionHeading id="marketing-learning-title" eyebrow={cmsValues.learningCopy.eyebrow} title={cmsValues.learningCopy.title} description={cmsValues.learningCopy.description} align="center" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cmsValues.learningExperience.map(({ title, items }, index) => (
            <article key={title} className="rounded-2xl border border-kbc-purple-100 bg-white p-6 shadow-[0_14px_36px_rgba(39,14,73,.06)] sm:p-8">
              <span className="flex size-12 items-center justify-center rounded-xl bg-kbc-purple-100 text-xl font-bold text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{title}</h3>
              <ul className="mt-6 space-y-5">
                {items.map((item) => (
                  <li key={item.title} className="grid grid-cols-[24px_minmax(0,1fr)] gap-3">
                    <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-kbc-purple-100 text-primary">
                      <Check className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-kbc-purple-950 sm:text-base">{item.title}</h4>
                      <p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  ));
}
