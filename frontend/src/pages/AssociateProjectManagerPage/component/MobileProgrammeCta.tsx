import { useCmsBindings } from "@/features/cms/publicContent";
import { ProgrammeMobileCta } from "@/components/programme/ProgrammeMobileCta";

const actions = [{ label: "{{cms:programme_apm_l4.pages_associate_project_manager_page_com_actions.label_001}}", to: "/funding-eligibility" }] as const;

export function MobileProgrammeCta() {
  const cms = useCmsBindings(["programme_apm_l4"]);
  const cmsValues = cms.resolve({ actions });

  return cms.render(<ProgrammeMobileCta heroTitleId="apm-title" finalTitleId="apm-final-title" actions={cmsValues.actions} />);
}
