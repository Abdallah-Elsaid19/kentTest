import { ProgrammeShowcaseCard } from "@/components/common/ProgrammeShowcaseCard";
import { ArrowLink } from "@/components/navigation";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { learnerProgrammes } from "../data";

export function LearnerProgrammesSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28" id="learner-programmes" aria-labelledby="learner-programmes-title">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[940px]">
          <FigmaSectionHeading
            id="learner-programmes-title"
            eyebrow="Workforce solutions"
            title="Programmes for your people."
            description="Four DfE-funded programmes across project management, project controls and marketing, each leading to a recognised qualification."
          />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16">
          {learnerProgrammes.map((programme) => (
            <ProgrammeShowcaseCard
              key={programme.title}
              {...programme}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <ArrowLink className="rounded-lg bg-primary px-6 py-3 text-sm !text-white hover:!text-white" to="/programmes">View all programmes</ArrowLink>
        </div>
      </div>
    </section>
  );
}
