import { useCmsBindings } from "@/features/cms/publicContent";
import { Check } from "lucide-react";
import { ProgrammeShowcaseCard } from "@/components/common/ProgrammeShowcaseCard";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { programmeCopy, projectControlsProgrammes } from "../data";
import { section, shell } from "./layout";

export function ProgrammesSection() {
  const cms = useCmsBindings(["college_project_controls"]);
  const cmsValues = cms.resolve({ section, shell, programmeCopy, projectControlsProgrammes });

  return cms.render((
    <section id="pc-programmes" className={`${cmsValues.section} bg-[var(--color-soft)]`} aria-labelledby="pc-programmes-title">
      <div className={cmsValues.shell}>
        <FigmaSectionHeading id="pc-programmes-title" eyebrow={cmsValues.programmeCopy.eyebrow} title={cmsValues.programmeCopy.title} description={cmsValues.programmeCopy.description} />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {cmsValues.projectControlsProgrammes.map((programme) => (
            <div key={programme.id} id={programme.id} className="h-full scroll-mt-44 [&>article]:h-full">
              <ProgrammeShowcaseCard
                discipline={programme.discipline}
                title={programme.title}
                level={programme.level}
                duration={programme.duration}
                description={programme.summary}
                image={programme.image}
                href={programme.href}
                details={
                  <>
                    <p className="text-xs font-semibold text-[#675f70]">{programme.funding}</p>
                    <h4 className="mt-4 text-[11px] font-semibold uppercase tracking-widest text-primary">{cmsValues.programmeCopy.learningLabel}</h4>
                    <ul className="mt-3 grid gap-2">
                      {programme.outcomes.map((outcome) => <li key={outcome} className="flex items-start gap-2 text-xs leading-5 text-[#675f70]"><Check className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden="true" />{outcome}</li>)}
                    </ul>
                    <p className="mt-4 border-t border-[#e8e0ef] pt-4 text-xs leading-5 text-[#716a7a]"><strong className="font-semibold text-primary">{cmsValues.programmeCopy.audienceLabel} </strong>{programme.idealFor}</p>
                  </>
                }
              />
            </div>
          ))}
        </div>
        <figure className="relative mt-8 isolate overflow-hidden rounded-2xl bg-primary-dark px-6 py-14 text-white sm:px-10 sm:py-20">
          <img src={cmsValues.programmeCopy.image} alt={cms.text("college_project_controls.pages_project_controls_page_component_pr_programmes_section.alt_001")} width={900} height={700} loading="lazy" decoding="async" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-primary-dark/30" aria-hidden="true" />
          <figcaption className="max-w-xl"><p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">{cmsValues.programmeCopy.imageLabel}</p><p className="mt-4 text-2xl font-medium leading-tight tracking-tight sm:text-3xl">{cmsValues.programmeCopy.imageCaption}</p></figcaption>
        </figure>
      </div>
    </section>
  ));
}
