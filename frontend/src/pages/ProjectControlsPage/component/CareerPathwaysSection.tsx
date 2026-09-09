import { useCmsBindings } from "@/features/cms/publicContent";
import { BriefcaseBusiness } from "lucide-react";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { careerCopy, projectControlsOutcomes } from "../data";
import { section, shell } from "./layout";

export function CareerPathwaysSection() {
  const cms = useCmsBindings(["college_project_controls"]);
  const cmsValues = cms.resolve({ section, shell, careerCopy, projectControlsOutcomes });

  return cms.render((
    <section id="pc-outcomes" className={`${cmsValues.section} relative isolate overflow-hidden bg-primary-dark text-white`} aria-labelledby="pc-careers-title">
      <img
        className="pointer-events-none absolute -left-44 top-1/2 z-0 hidden w-[clamp(420px,38vw,680px)] -translate-y-1/2 select-none opacity-[0.07] lg:block"
        src={cms.text("college_project_controls.pages_project_controls_page_component_ca_career_pathways_section.src_001")}
        alt=""
        aria-hidden="true"
      />
      <div className={`${cmsValues.shell} relative z-10`}>
        <FigmaSectionHeading id="pc-careers-title" eyebrow={cmsValues.careerCopy.eyebrow} title={cmsValues.careerCopy.title} description={cmsValues.careerCopy.description} tone="inverse" />
        <div className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {cmsValues.projectControlsOutcomes.map((outcome) => (
            <article
              key={outcome.role}
              className="group relative border-b border-white/20 px-5 py-8 transition-[background-color,box-shadow] duration-300 after:absolute after:inset-x-0 after:-bottom-px after:h-[3px] after:origin-left after:scale-x-0 after:bg-[var(--color-gold)] after:transition-transform after:duration-[420ms] hover:bg-white/[.075] hover:shadow-[0_14px_34px_rgba(0,0,0,.16)] hover:after:scale-x-100 sm:px-6"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-white/10 text-[var(--color-gold)] transition-colors duration-300 group-hover:bg-white group-hover:text-primary">
                <BriefcaseBusiness size={24} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <span className="mt-5 block text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">{outcome.level}</span>
              <h3 className="mt-2 text-lg font-medium leading-7 tracking-tight text-white">{outcome.role}</h3>
              <p className="mt-2 text-sm leading-6 text-white/75">{outcome.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  ));
}
