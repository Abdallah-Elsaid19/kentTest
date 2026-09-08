import { lazy, Suspense, useState, type ComponentProps } from "react";
import { NavigationButton } from "@/components/navigation";
import type { ProgrammeInterestData } from "./ProgrammeInterestDialog";

const ProgrammeInterestDialog = lazy(() => import("./ProgrammeInterestDialog"));

export function ProgrammeEnquiryButton({ data, cohorts, children, ...buttonProps }: {
  data: ProgrammeInterestData;
  cohorts: readonly { id: string; label: string }[];
} & Pick<ComponentProps<typeof NavigationButton>, "children" | "variant" | "className">) {
  const [open, setOpen] = useState(false);
  return <>
    <NavigationButton {...buttonProps} onClick={() => setOpen(true)}>{children}</NavigationButton>
    {open && <Suspense fallback={<p role="status" className="fixed inset-x-4 bottom-4 z-50 rounded-lg bg-white p-4 text-center text-primary shadow-lg">Loading enquiry form…</p>}>
      <ProgrammeInterestDialog data={data} cohorts={cohorts} cohort={cohorts[0]?.label ?? ""} onClose={() => setOpen(false)} />
    </Suspense>}
  </>;
}
