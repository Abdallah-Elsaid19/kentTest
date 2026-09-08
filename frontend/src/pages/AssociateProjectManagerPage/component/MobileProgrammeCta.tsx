import { ProgrammeMobileCta } from "@/components/programme/ProgrammeMobileCta";

const actions = [{ label: "Check funding eligibility", to: "/funding-eligibility" }] as const;

export function MobileProgrammeCta() {
  return <ProgrammeMobileCta heroTitleId="apm-title" finalTitleId="apm-final-title" actions={actions} />;
}
