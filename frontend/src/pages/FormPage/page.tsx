import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { RouteMeta } from "@/components/seo/RouteMeta";
import { TurnstileField } from "@/components/forms/TurnstileField";
import { PageHero } from "@/components/ui/PageHero";
import { useProgrammes } from "@/features/content/queries";
import { apiPost } from "@/services/api/apiClient";
import { endpoints } from "@/services/api/endpoints";

const schema = z.object({
  name: z.string().min(2, "Enter your name."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().max(50).optional(),
  organisation: z.string().max(200).optional(),
  jobTitle: z.string().max(200).optional(),
  employeeCount: z.coerce.number().int().positive().optional().or(z.literal("")),
  subject: z.string().max(200).optional(),
  interest: z.string().max(200).optional(),
  programme: z.coerce.number().int().positive().optional().or(z.literal("")),
  employmentStatus: z.string().max(100).optional(),
  message: z.string().min(10, "Enter at least 10 characters.").max(3000),
  consent: z.literal(true, { errorMap: () => ({ message: "Consent is required." }) }),
  captchaToken: z.string().optional(),
  website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;
type Kind = "contact" | "support" | "eligibility" | "employerAgreement";

const content: Record<Kind, { title: string; summary: string; endpoint: string }> = {
  contact: { title: "Contact us", summary: "Send a general enquiry to the Kent Business College team.", endpoint: endpoints.contact },
  support: { title: "Support", summary: "Tell us what you need help with. Do not include passwords or highly sensitive information.", endpoint: endpoints.support },
  eligibility: { title: "Check eligibility", summary: "Ask our team to assess your eligibility for a published programme.", endpoint: endpoints.eligibility },
  employerAgreement: { title: "Employer agreement", summary: "Start a conversation about workforce development and employer onboarding.", endpoint: endpoints.employerAgreement },
};

export default function FormPage({ kind }: { kind: Kind }) {
  const page = content[kind];
  const programmes = useProgrammes("?perPage=100");
  const mutation = useMutation({ mutationFn: (values: FormValues) => apiPost<{ submissionId: string }, FormValues>(page.endpoint, values) });
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { consent: false as true, website: "", captchaToken: "" } });
  const setCaptchaToken = useCallback((token: string) => setValue("captchaToken", token, { shouldValidate: true }), [setValue]);
  const onSubmit = (values: FormValues) => {
    if (values.website) return;
    mutation.mutate(values, { onSuccess: () => reset() });
  };
  return <>
    <RouteMeta fallbackTitle={`${page.title} | Kent Business College`} fallbackDescription={page.summary} />
    <PageHero title={page.title} summary={page.summary} />
    <section className="mx-auto max-w-3xl px-4 py-14">
      {mutation.isSuccess ? <div className="rounded-2xl border border-green-200 bg-green-50 p-8" role="status"><h2 className="font-heading text-2xl font-semibold">Submission received</h2><p className="mt-2">Reference: {mutation.data.submissionId}</p><button onClick={() => mutation.reset()} className="mt-5 font-semibold text-kbc-purple-700">Send another</button></div> : <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-2xl bg-white p-6 shadow-sm md:p-8" noValidate>
        <div className="grid gap-5 md:grid-cols-2"><Field label="Name" error={errors.name?.message}><input {...register("name")} autoComplete="name" /></Field><Field label="Email" error={errors.email?.message}><input {...register("email")} type="email" autoComplete="email" /></Field></div>
        <Field label="Phone" error={errors.phone?.message}><input {...register("phone")} type="tel" autoComplete="tel" /></Field>
        {kind === "support" && <Field label="Subject" error={errors.subject?.message}><input {...register("subject")} /></Field>}
        {kind === "contact" && <><Field label="Organisation"><input {...register("organisation")} autoComplete="organization" /></Field><Field label="Area of interest"><input {...register("interest")} /></Field></>}
        {kind === "eligibility" && <><Field label="Programme"><select {...register("programme")}><option value="">Select a programme</option>{programmes.data?.items.map((programme) => <option key={programme.id} value={programme.id}>{programme.title}</option>)}</select></Field><Field label="Employment status"><input {...register("employmentStatus")} /></Field></>}
        {kind === "employerAgreement" && <><Field label="Organisation" error={errors.organisation?.message}><input {...register("organisation")} autoComplete="organization" /></Field><div className="grid gap-5 md:grid-cols-2"><Field label="Job title"><input {...register("jobTitle")} /></Field><Field label="Approximate employee count"><input {...register("employeeCount")} type="number" min="1" /></Field></div></>}
        <Field label="Message" error={errors.message?.message}><textarea {...register("message")} rows={6} /></Field>
        <label className="flex items-start gap-3 text-sm"><input {...register("consent")} type="checkbox" className="mt-1 h-4 w-4" /><span>I consent to Kent Business College using this information to respond to this enquiry.</span></label>
        {errors.consent && <p className="text-sm text-red-700">{errors.consent.message}</p>}
        <TurnstileField onToken={setCaptchaToken} />
        <input {...register("website")} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        {mutation.isError && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-800">{mutation.error.message}</p>}
        <button disabled={mutation.isPending} className="w-full rounded-lg bg-kbc-purple-700 px-6 py-3 font-semibold text-white disabled:opacity-60">{mutation.isPending ? "Sending…" : "Submit"}</button>
      </form>}
    </section>
  </>;
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactElement<any> }) {
  return <label className="block text-sm font-medium text-slate-800">{label}{React.cloneElement(children, { className: "mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-kbc-purple-600 focus:outline-none focus:ring-2 focus:ring-kbc-purple-200", "aria-invalid": Boolean(error) })}{error && <span className="mt-1 block text-sm text-red-700">{error}</span>}</label>;
}
