export function buildProgrammeInterestPayload(form: FormData, programme: string, sourcePage: string, captchaToken: string) {
  const value = (key: string) => String(form.get(key) ?? "").trim();
  return {
    name: value("name"), email: value("email"), phone: value("phone"), organisation: value("organisation"),
    interest: programme,
    message: `Programme interest: ${programme}\nPreferred cohort: ${value("cohort")}\nJob title: ${value("jobTitle") || "Not provided"}`,
    consent: form.get("consent") === "on", sourcePage, captchaToken,
  };
}
