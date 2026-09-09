import { useCmsBindings } from "@/features/cms/publicContent";
import { ProgrammeHero } from "@/components/programme/ProgrammeHero";
import {
  accreditationMarks,
  cohorts,
  hero,
  heroProgrammeCommitments,
  heroProgrammeHighlights,
} from "../data";

export function HeroSection() {
  const cms = useCmsBindings(["programme_apm_l4"]);
  const cmsValues = cms.resolve({ hero, cohorts, heroProgrammeHighlights, heroProgrammeCommitments, accreditationMarks });

  return cms.render((
    <ProgrammeHero
      titleId="apm-title"
      hero={cmsValues.hero}
      cohorts={cmsValues.cohorts}
      highlights={cmsValues.heroProgrammeHighlights}
      commitments={cmsValues.heroProgrammeCommitments}
      marks={cmsValues.accreditationMarks}
    />
  ));
}
