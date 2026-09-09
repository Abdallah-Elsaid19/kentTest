import { useCmsBindings } from "@/features/cms/publicContent";
import { CollegeCtaPanel } from "@/components/college/CollegeCtaPanel";
import { ArrowRight, Info } from "lucide-react";

import { NavigationButton } from "@/components/navigation";

import { hero, recognition } from "../data";
import { SectionHeading } from "./SectionHeading";
import { section, shell } from "./layout";

export function RecognitionSection() {
  const cms = useCmsBindings(["programme_apm_l4"]);
  const cmsValues = cms.resolve({ section, shell, recognition });

  return cms.render((
    <section id="recognition" className={`${cmsValues.section} bg-kbc-purple-50`} aria-labelledby="apm-recognition-title">
      <div className={`${cmsValues.shell} grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-16`}>
        <div>
          <SectionHeading
            id="apm-recognition-title"
            eyebrow={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_recognition_section.eyebrow_001")}
            title={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_recognition_section.title_002")}
            description={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_recognition_section.description_003")}
          />
          <p className="mt-7 flex items-start gap-3 rounded-2xl border border-kbc-purple-100 bg-white p-5 text-xs leading-6 text-[var(--color-muted)]"><Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_recognition_section.text_004")}</p>
        </div>
        <div className="grid gap-4">
          {cmsValues.recognition.map((item) => (
            <article className="grid grid-cols-[64px_1fr] gap-5 rounded-2xl border border-kbc-purple-100 bg-white p-5 sm:p-6" key={item.name}>
              <span className="grid size-16 place-items-center rounded-xl bg-primary-dark text-sm font-bold text-[var(--color-gold)]">{item.mark}</span>
              <div><div className="flex flex-wrap items-center gap-2"><h3 className="text-lg font-semibold text-[var(--color-ink)]">{item.name}</h3><span className="rounded-full bg-kbc-gold-100 px-3 py-1 text-[10px] font-bold uppercase text-kbc-gold-900">{item.relationship}</span></div><p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{item.description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  ));
}

export function FinalCtaSection() {
  const cms = useCmsBindings(["programme_apm_l4"]);
  const cmsValues = cms.resolve({ section, shell, hero });

  return cms.render((
    <section id="apm-next-steps" className={`${cmsValues.section} bg-white`} aria-labelledby="apm-final-title">
      <div className={cmsValues.shell}>
        <CollegeCtaPanel
          id="apm-final-title"
          eyebrow={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_final_cta_section.eyebrow_005")}
          title={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_final_cta_section.title_006")}
        >
          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/15 bg-white/[.06] p-6 text-left sm:flex-row">
            <div><p className="font-semibold text-white">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_final_cta_section.text_007")}</p><p className="mt-1 text-sm text-white/55">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_final_cta_section.text_008")}</p></div>
            <div className="grid w-full shrink-0 gap-3 sm:w-auto">
              <NavigationButton to={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_final_cta_section.to_009")} variant="inverse" className="w-full gap-2">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_final_cta_section.text_010")}<ArrowRight className="size-4" aria-hidden="true" /></NavigationButton>
              <NavigationButton to={cms.text("programme_apm_l4.pages_associate_project_manager_page_com_final_cta_section.to_011")} variant="accent" className="w-full justify-between gap-2 px-6">{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_final_cta_section.text_012")}<ArrowRight className="size-4 shrink-0" aria-hidden="true" /></NavigationButton>
            </div>
          </div>
          <div className="mt-8 text-xs leading-5 text-white/50"><p>{cms.text("programme_apm_l4.pages_associate_project_manager_page_com_final_cta_section.text_013")}</p><p className="mt-1">{cmsValues.hero.availability}</p></div>
        </CollegeCtaPanel>
      </div>
    </section>
  ));
}
