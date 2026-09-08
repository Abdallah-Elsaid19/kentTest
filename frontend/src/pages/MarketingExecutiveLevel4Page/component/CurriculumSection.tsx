import { ProgrammeCurriculumSection } from "@/components/programme/ProgrammeCurriculumSection";
import { curriculumJourney, knowledgeSkillsBehaviours } from "../data";

export function CurriculumSection() {
  return <ProgrammeCurriculumSection data={curriculumJourney} columns={3} capabilities={knowledgeSkillsBehaviours} />;
}
