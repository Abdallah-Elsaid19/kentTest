export type ProgrammeEnquiryField = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "radio" | "checkbox" | "select" | "textarea";
  required?: boolean;
  readOnly?: boolean;
  value?: string;
  placeholder?: string;
  autoComplete?: string;
  options?: readonly string[];
};

export type ProgrammeEnquiryData = {
  eyebrow: string;
  steps: readonly { title: string; fields: readonly ProgrammeEnquiryField[] }[];
  consent: string;
  note: string;
  submitLabel: string;
};

export function ProgrammeEnquiryFields({ fields, inputClass }: { fields: readonly ProgrammeEnquiryField[]; inputClass: string }) {
  return <div className="grid gap-4 sm:grid-cols-2">{fields.map((field) => {
    if (field.type === "radio" || field.type === "checkbox") {
      return <fieldset className="sm:col-span-2" key={field.name}>
        <legend className="text-sm font-semibold">{field.label}</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">{field.options?.map((option) => <label className="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg border border-kbc-purple-100 px-3 py-2 text-sm" key={option}>
          <input name={field.name} type={field.type} value={option} defaultChecked={field.value === option} className="size-4 shrink-0 accent-primary" />{option}
        </label>)}</div>
      </fieldset>;
    }
    const props = { name: field.name, required: field.required, defaultValue: field.value ?? "", className: inputClass };
    return <label className={`text-sm font-semibold ${field.type === "textarea" || field.type === "select" || field.readOnly ? "sm:col-span-2" : ""}`} key={field.name}>
      {field.label}{field.required && " *"}
      {field.type === "select" ? <select {...props}><option value="" disabled>{field.placeholder}</option>{field.options?.map((option) => <option key={option}>{option}</option>)}</select>
        : field.type === "textarea" ? <textarea {...props} rows={4} maxLength={3000} placeholder={field.placeholder} />
          : <input {...props} type={field.type} readOnly={field.readOnly} autoComplete={field.autoComplete} placeholder={field.placeholder} maxLength={field.type === "email" ? 254 : field.type === "tel" ? 50 : 200} minLength={field.name === "name" ? 2 : undefined} />}
    </label>;
  })}</div>;
}
