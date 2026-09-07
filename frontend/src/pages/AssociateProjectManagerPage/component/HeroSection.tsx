import { ProgrammeHero } from "@/components/programme/ProgrammeHero";
import { accreditationMarks, cohorts, hero, heroProgrammeCommitments, heroProgrammeHighlights } from "../data";

export function HeroSection() {
  return <ProgrammeHero titleId="apm-title" hero={hero} cohorts={cohorts} highlights={heroProgrammeHighlights} commitments={heroProgrammeCommitments} marks={accreditationMarks} />;
}
