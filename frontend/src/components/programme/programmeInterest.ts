export function buildProgrammeInterestPayload(form: FormData, programme: string, sourcePage: string, captchaToken: string, enquiryFields?: readonly { name: string; label: string }[]) {
  const value = (key: string) => String(form.get(key) ?? "").trim();
  const additionalDetails = enquiryFields?.filter((field) => !["name", "email", "phone", "organisation", "jobTitle", "programme"].includes(field.name))
    .map((field) => `${field.label}: ${form.getAll(field.name).map((entry) => String(entry).trim()).filter(Boolean).join(", ") || "Not provided"}`).join("\n");
  return {
    name: value("name"), email: value("email"), phone: value("phone"), organisation: value("organisation"),
    interest: programme,
    message: `Programme interest: ${programme}\nPreferred cohort: ${value("cohort")}\nJob title: ${value("jobTitle") || "Not provided"}${additionalDetails ? `\n${additionalDetails}` : ""}`,
    consent: form.get("consent") === "on", sourcePage, captchaToken,
  };
}
