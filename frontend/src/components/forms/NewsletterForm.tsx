import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useCallback, useId } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { apiPost } from "@/services/api/apiClient";
import { endpoints } from "@/services/api/endpoints";
import { TurnstileField } from "./TurnstileField";

const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email address."),
  consent: z.literal(true, { errorMap: () => ({ message: "Consent is required." }) }),
  sourcePage: z.string(),
  captchaToken: z.string().optional(),
});

type NewsletterValues = z.infer<typeof newsletterSchema>;

export function NewsletterForm({ label = "Newsletter updates", placeholder = "Email address", successMessage = "You are subscribed. Please check your inbox for future updates.", tone = "inverse" }: {
  label?: string;
  placeholder?: string;
  successMessage?: string;
  tone?: "default" | "inverse";
}) {
  const inputId = useId();
  const errorClass = tone === "inverse" ? "text-sm text-red-200" : "text-sm text-red-700";
  const mutation = useMutation({
    mutationFn: (values: NewsletterValues) => apiPost<{ subscriptionId: string; status: string }, NewsletterValues>(endpoints.newsletter, values),
  });
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { consent: false as true, sourcePage: typeof window === "undefined" ? "" : window.location.pathname, captchaToken: "" },
  });
  const setCaptchaToken = useCallback((token: string) => setValue("captchaToken", token, { shouldValidate: true }), [setValue]);

  if (mutation.isSuccess) {
    return <div role="status" className={`rounded-lg p-4 text-sm ${tone === "inverse" ? "bg-white/10" : "bg-kbc-purple-50 text-primary-dark"}`}>{successMessage}<button type="button" className={`mt-2 block min-h-11 font-semibold underline ${tone === "inverse" ? "text-kbc-gold-400" : "text-primary"}`} onClick={() => { mutation.reset(); reset(); }}>Use another email</button></div>;
  }

  return <form className="space-y-3" onSubmit={handleSubmit((values) => mutation.mutate(values))} noValidate>
    <label className="block text-sm font-semibold" htmlFor={inputId}>{label}</label>
    <div className="flex flex-col gap-3 sm:flex-row"><input id={inputId} type="email" autoComplete="email" placeholder={placeholder} aria-invalid={!!errors.email} aria-describedby={errors.email ? `${inputId}-error` : undefined} {...register("email")} className="min-h-12 min-w-0 flex-1 rounded-lg border border-kbc-purple-200 bg-white px-3 py-2 text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" /><button disabled={mutation.isPending} className="min-h-12 rounded-lg bg-kbc-gold-500 px-4 py-2 font-semibold text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-60">{mutation.isPending ? "Subscribing…" : "Subscribe"}</button></div>
    {errors.email && <p id={`${inputId}-error`} className={errorClass}>{errors.email.message}</p>}
    <label className={`flex min-h-11 items-start gap-2 py-2 text-xs leading-5 ${tone === "inverse" ? "text-white/70" : "text-kbc-dark-600"}`}><input type="checkbox" {...register("consent")} aria-invalid={!!errors.consent} aria-describedby={errors.consent ? `${inputId}-consent-error` : undefined} className="mt-1" /><span>I consent to receiving email updates and understand I can unsubscribe.</span></label>
    {errors.consent && <p id={`${inputId}-consent-error`} className={errorClass}>{errors.consent.message}</p>}
    <TurnstileField onToken={setCaptchaToken} />
    {mutation.isError && <p role="alert" className={errorClass}>{mutation.error.message}</p>}
  </form>;
}
