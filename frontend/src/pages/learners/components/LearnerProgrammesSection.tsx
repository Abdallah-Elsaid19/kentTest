import { useCmsBindings } from "@/features/cms/publicContent";
import { ProgrammeShowcaseCard } from "@/components/common/ProgrammeShowcaseCard";
import { ArrowLink } from "@/components/navigation";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { learnerProgrammes } from "../data";

export function LearnerProgrammesSection() {
  const cms = useCmsBindings(["learners"]);
  const cmsValues = cms.resolve({ learnerProgrammes });

  return cms.render((
    <section className="bg-white py-16 sm:py-20 lg:py-28" id="learner-programmes" aria-labelledby="learner-programmes-title">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[940px]">
          <FigmaSectionHeading
            id="learner-programmes-title"
            eyebrow={cms.text("learners.pages_learners_components_learner_progra_learner_programmes_section.eyebrow_001")}
            title={cms.text("learners.pages_learners_components_learner_progra_learner_programmes_section.title_002")}
            description={cms.text("learners.pages_learners_components_learner_progra_learner_programmes_section.description_003")}
          />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16">
          {cmsValues.learnerProgrammes.map((programme) => (
            <ProgrammeShowcaseCard
              key={programme.title}
              {...programme}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <ArrowLink className="rounded-lg bg-primary px-6 py-3 text-sm !text-white hover:!text-white" to={cms.text("learners.pages_learners_components_learner_progra_learner_programmes_section.to_004")}>{cms.text("learners.pages_learners_components_learner_progra_learner_programmes_section.text_005")}</ArrowLink>
        </div>
      </div>
    </section>
  ));
}
