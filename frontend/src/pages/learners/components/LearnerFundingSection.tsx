import { useCmsBindings } from "@/features/cms/publicContent";
import { BadgePercent, Landmark, Sparkles } from "lucide-react";
import { ArrowLink } from "@/components/navigation";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

export function LearnerFundingSection() {
  const cms = useCmsBindings(["learners"]);

  return cms.render((
    <section className="relative isolate scroll-mt-40 overflow-hidden bg-[#f7f4fb] py-16 sm:py-20 lg:py-28" id="funding" aria-labelledby="learner-funding-title">
      <img
        className="pointer-events-none absolute -bottom-32 -right-24 z-0 hidden w-[clamp(320px,31vw,540px)] select-none opacity-[0.055] sm:block"
        src={cms.text("learners.pages_learners_components_learner_fundin_learner_funding_section.src_001")}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[900px]">
          <FigmaSectionHeading
            id="learner-funding-title"
            eyebrow={cms.text("learners.pages_learners_components_learner_fundin_learner_funding_section.eyebrow_002")}
            title={cms.text("learners.pages_learners_components_learner_fundin_learner_funding_section.title_003")}
            description={cms.text("learners.pages_learners_components_learner_fundin_learner_funding_section.description_004")}
          />
        </div>

        <div className="mt-12 grid auto-rows-fr items-stretch gap-5 lg:mt-16 xl:grid-cols-3">
          <article className="flex min-h-[440px] flex-col rounded-2xl border border-[#e4ddec] bg-white p-7 shadow-[0_12px_35px_rgba(35,13,63,0.06)] sm:p-8">
            <span className="flex size-12 items-center justify-center rounded-xl bg-[#f1ebfb] text-primary"><Landmark className="size-6" aria-hidden="true" /></span>
            <h3 className="mt-7 text-2xl font-semibold tracking-tight text-[#17131d]">{cms.text("learners.pages_learners_components_learner_fundin_learner_funding_section.text_005")}</h3>
            <p className="mt-4 text-sm leading-7 text-[#716a7a]">{cms.text("learners.pages_learners_components_learner_fundin_learner_funding_section.text_006")}</p>
            <div className="mt-auto rounded-xl bg-kbc-purple-50 p-5">
              <strong className="block text-3xl font-semibold text-primary">{cms.text("learners.pages_learners_components_learner_fundin_learner_funding_section.text_007")}</strong>
              <span className="mt-1 block text-xs leading-5 text-kbc-dark-500">{cms.text("learners.pages_learners_components_learner_fundin_learner_funding_section.text_008")}</span>
            </div>
          </article>

          <article className="flex min-h-[440px] flex-col rounded-2xl border border-[#D6B04E]/50 bg-[#fffaf0] p-7 shadow-[0_12px_35px_rgba(74,49,8,0.07)] sm:p-8">
            <span className="flex size-12 items-center justify-center rounded-xl bg-[#F5C94F]/25 text-[#76540b]"><Sparkles className="size-6" aria-hidden="true" /></span>
            <h3 className="mt-7 text-2xl font-semibold tracking-tight text-[#17131d]">{cms.text("learners.pages_learners_components_learner_fundin_learner_funding_section.text_009")}</h3>
            <p className="mt-4 text-sm leading-7 text-[#716a7a]">{cms.text("learners.pages_learners_components_learner_fundin_learner_funding_section.text_010")}</p>
            <div className="mt-auto rounded-xl bg-white/80 p-5">
              <strong className="block text-3xl font-semibold text-kbc-gold-700">{cms.text("learners.pages_learners_components_learner_fundin_learner_funding_section.text_011")}</strong>
              <span className="mt-1 block text-xs leading-5 text-kbc-dark-500">{cms.text("learners.pages_learners_components_learner_fundin_learner_funding_section.text_012")}</span>
            </div>
          </article>

          <article className="flex min-h-[440px] flex-col rounded-2xl border border-primary/15 bg-[#f4edfb] p-7 shadow-[0_12px_35px_rgba(35,13,63,0.06)] sm:p-8">
            <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-[#F5C94F]"><BadgePercent className="size-6" aria-hidden="true" /></span>
            <h3 className="mt-7 text-2xl font-semibold tracking-tight text-[#17131d]">{cms.text("learners.pages_learners_components_learner_fundin_learner_funding_section.text_013")}</h3>
            <p className="mt-4 text-sm leading-7 text-[#716a7a]">{cms.text("learners.pages_learners_components_learner_fundin_learner_funding_section.text_014")}</p>
            <div className="mt-auto rounded-xl bg-white/70 p-5">
              <strong className="block text-3xl font-semibold text-primary">{cms.text("learners.pages_learners_components_learner_fundin_learner_funding_section.text_015")}</strong>
              <span className="mt-1 block text-xs leading-5 text-kbc-dark-500">{cms.text("learners.pages_learners_components_learner_fundin_learner_funding_section.text_016")}</span>
            </div>
          </article>
        </div>

        <div className="mt-10 flex justify-center">
          <ArrowLink className="rounded-lg bg-primary px-6 py-3 text-sm !text-white hover:!text-white" to={cms.text("learners.pages_learners_components_learner_fundin_learner_funding_section.to_017")}>{cms.text("learners.pages_learners_components_learner_fundin_learner_funding_section.text_018")}</ArrowLink>
        </div>
      </div>
    </section>
  ));
}
