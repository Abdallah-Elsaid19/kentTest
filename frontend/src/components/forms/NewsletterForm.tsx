import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
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

export function NewsletterForm() {
  const mutation = useMutation({
    mutationFn: (values: NewsletterValues) => apiPost<{ subscriptionId: string; status: string }, NewsletterValues>(endpoints.newsletter, values),
  });
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { consent: false as true, sourcePage: window.location.pathname, captchaToken: "" },
  });
  const setCaptchaToken = useCallback((token: string) => setValue("captchaToken", token, { shouldValidate: true }), [setValue]);

  if (mutation.isSuccess) {
    return <div role="status" className="rounded-lg bg-white/10 p-4 text-sm">You are subscribed. Please check your inbox for future updates.<button type="button" className="mt-2 block text-kbc-gold-400" onClick={() => { mutation.reset(); reset(); }}>Use another email</button></div>;
  }

  return <form className="space-y-3" onSubmit={handleSubmit((values) => mutation.mutate(values))} noValidate>
    <label className="block text-sm font-semibold" htmlFor="newsletter-email">Newsletter updates</label>
    <div className="flex gap-2"><input id="newsletter-email" type="email" autoComplete="email" placeholder="Email address" {...register("email")} className="min-w-0 flex-1 rounded-lg border border-white/20 bg-white px-3 py-2 text-slate-950" /><button disabled={mutation.isPending} className="rounded-lg bg-kbc-gold-500 px-4 py-2 font-semibold text-slate-950 disabled:opacity-60">{mutation.isPending ? "Subscribing…" : "Subscribe"}</button></div>
    {errors.email && <p className="text-sm text-red-200">{errors.email.message}</p>}
    <label className="flex items-start gap-2 text-xs text-white/70"><input type="checkbox" {...register("consent")} className="mt-0.5" /><span>I consent to receiving email updates and understand I can unsubscribe.</span></label>
    {errors.consent && <p className="text-sm text-red-200">{errors.consent.message}</p>}
    <TurnstileField onToken={setCaptchaToken} />
    {mutation.isError && <p role="alert" className="text-sm text-red-200">{mutation.error.message}</p>}
  </form>;
}
