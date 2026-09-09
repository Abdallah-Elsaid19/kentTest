import { useCmsBindings } from "@/features/cms/publicContent";
import { ProgrammeCtaSection } from "@/components/programme/ProgrammeCtaSection";
import { finalCTA } from "../data";

export function FinalCtaSection() {
  const cms = useCmsBindings(["programme_marketing_l4"]);
  const cmsValues = cms.resolve({ finalCTA });

  return cms.render(<ProgrammeCtaSection data={cmsValues.finalCTA} />);
}
