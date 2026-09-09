import { useCmsBindings } from "@/features/cms/publicContent";
import { ProgrammeCurriculumSection } from "@/components/programme/ProgrammeCurriculumSection";
import { curriculumJourney, knowledgeSkillsBehaviours } from "../data";

export function CurriculumSection() {
  const cms = useCmsBindings(["programme_marketing_l4"]);
  const cmsValues = cms.resolve({ curriculumJourney, knowledgeSkillsBehaviours });

  return cms.render(<ProgrammeCurriculumSection data={cmsValues.curriculumJourney} columns={3} capabilities={cmsValues.knowledgeSkillsBehaviours} />);
}
