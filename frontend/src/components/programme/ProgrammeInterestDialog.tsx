import { useEffect, useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { X } from "lucide-react";
import { Dialog } from "@/components/ui/Dialog";
import { TurnstileField } from "@/components/forms/TurnstileField";
import { NavigationButton } from "@/components/navigation";
import { apiPost } from "@/services/api/apiClient";
import { endpoints } from "@/services/api/endpoints";
import { buildProgrammeInterestPayload } from "./programmeInterest";
import { ProgrammeEnquiryFields, type ProgrammeEnquiryData } from "./ProgrammeEnquiryFields";

export type ProgrammeInterestData = { title: string; description: string; programme: string; enquiry?: ProgrammeEnquiryData };

export default function ProgrammeInterestDialog({ data, cohort, cohorts, onClose }: {
  data: ProgrammeInterestData;
  cohort: string;
  cohorts: readonly { id: string; label: string }[];
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [captchaToken, setCaptchaToken] = useState("");
  const [step, setStep] = useState(0);
  const stepTitleRef = useRef<HTMLLegendElement>(null);
  const enquiry = data.enquiry;
  const mutation = useMutation({ mutationFn: (values: ReturnType<typeof buildProgrammeInterestPayload>) => apiPost<{ submissionId: string }, typeof values>(endpoints.contact, values) });

  useEffect(() => {
    if (enquiry) stepTitleRef.current?.focus();
  }, [step, enquiry]);

  const inputClass = "mt-2 min-h-12 w-full rounded-lg border border-kbc-purple-200 bg-white px-3 py-2 text-sm text-[var(--color-ink)] outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";
  return <Dialog dialogRef={dialogRef} onClose={onClose} titleId="programme-interest-title" descriptionId="programme-interest-description">
    <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-widest text-primary">{enquiry?.eyebrow ?? "Register your interest"}</p><h2 id="programme-interest-title" className="mt-3 text-2xl font-semibold leading-tight">{data.title}</h2></div><button type="button" aria-label="Close registration form" onClick={() => dialogRef.current?.close()} className="grid size-11 shrink-0 place-items-center rounded-lg bg-kbc-purple-50 text-primary focus-visible:outline-primary"><X className="size-5" aria-hidden="true" /></button></div>
    <p id="programme-interest-description" className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{data.description}</p>
    {mutation.isSuccess ? <div className="mt-6 rounded-xl bg-kbc-purple-50 p-5" role="status"><h3 className="font-semibold text-primary">Thank you. Your interest has been submitted successfully.</h3><p className="mt-2 text-sm">{enquiry?.note ?? "The admissions team will contact you about your preferred cohort."}</p><NavigationButton className="mt-5" onClick={() => dialogRef.current?.close()}>Close</NavigationButton></div> : <form className="mt-6" noValidate={!!enquiry} onSubmit={(event) => {
      event.preventDefault();
      if (mutation.isPending) return;
      if (enquiry) {
        const currentFields = event.currentTarget.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("fieldset[data-step]:not([hidden]) input, fieldset[data-step]:not([hidden]) select, fieldset[data-step]:not([hidden]) textarea, [name=consent]");
        for (const field of currentFields) {
          if (field.name === "consent" && step < enquiry.steps.length - 1) continue;
          if (!field.reportValidity()) return;
        }
        if (step < enquiry.steps.length - 1) { setStep(step + 1); return; }
      }
      const form = new FormData(event.currentTarget);
      if (form.get("website")) return;
      mutation.mutate(buildProgrammeInterestPayload(form, data.programme, window.location.pathname, captchaToken, enquiry?.steps.flatMap((item) => item.fields)));
    }}>
      {enquiry ? <>
        <input type="hidden" name="cohort" value={cohort} />
        {enquiry.steps.map((item, index) => <fieldset data-step={index} hidden={index !== step} key={item.title}>
          <legend ref={index === step ? stepTitleRef : undefined} tabIndex={-1} className="mb-5 text-lg font-semibold text-primary focus:outline-none">{item.title}</legend>
          <ProgrammeEnquiryFields fields={item.fields} inputClass={inputClass} />
        </fieldset>)}
      </> : <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold">Full name<input name="name" required minLength={2} maxLength={200} autoComplete="name" className={inputClass} /></label>
        <label className="text-sm font-semibold">Work email<input name="email" required type="email" maxLength={254} autoComplete="email" className={inputClass} /></label>
        <label className="text-sm font-semibold">Phone number<input name="phone" required type="tel" maxLength={50} autoComplete="tel" className={inputClass} /></label>
        <label className="text-sm font-semibold">Employer / organisation<input name="organisation" required maxLength={200} autoComplete="organization" className={inputClass} /></label>
        <label className="text-sm font-semibold">Job title (optional)<input name="jobTitle" maxLength={200} autoComplete="organization-title" className={inputClass} /></label>
        <label className="text-sm font-semibold">Preferred cohort<select name="cohort" defaultValue={cohort} required className={inputClass}>{cohorts.map((item) => <option key={item.id} value={item.label}>{item.label}</option>)}</select></label>
      </div>}
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div hidden={!!enquiry && step < enquiry.steps.length - 1}>
        <label className="my-5 flex min-h-11 cursor-pointer items-start gap-3 text-sm leading-6 text-[var(--color-muted)]"><input name="consent" type="checkbox" required className="mt-1 size-4 shrink-0 accent-primary" /><span>{enquiry ? `${enquiry.consent} *` : "I agree to be contacted about this programme, eligibility and upcoming intake dates."}</span></label>
        {(!enquiry || step === enquiry.steps.length - 1) && <TurnstileField onToken={setCaptchaToken} />}
      </div>
      {mutation.isError && <p role="alert" className="my-4 rounded-lg bg-red-50 p-4 text-sm text-red-800">We could not submit your interest. Please try again or <a href="/book-session" className="font-semibold underline">book an information session</a>.</p>}
      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end"><NavigationButton variant="secondary" onClick={() => dialogRef.current?.close()}>Cancel</NavigationButton>{enquiry && step > 0 && <NavigationButton variant="secondary" onClick={() => setStep(step - 1)}>Back</NavigationButton>}<button type="submit" disabled={mutation.isPending} className="min-h-12 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark focus-visible:outline-primary disabled:opacity-60">{mutation.isPending ? "Submitting…" : enquiry ? step < enquiry.steps.length - 1 ? "Continue" : enquiry.submitLabel : "Submit interest"}</button></div>
      {enquiry && <p className="mt-5 text-xs leading-6 text-[var(--color-muted)]">{enquiry.note}</p>}
    </form>}
  </Dialog>;
}
