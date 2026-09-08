import { z } from "zod";
import contract from "./generated/homeContract";
import type { HomeContent, HomeSection } from "./homeTypes";

export type FieldSchema = {
  type: "object" | "array" | "string" | "boolean" | "number";
  title?: string;
  properties?: Record<string, FieldSchema>;
  required?: string[];
  items?: FieldSchema;
  minItems?: number;
  maxItems?: number;
  minLength?: number;
  maxLength?: number;
  minimum?: number;
  maximum?: number;
  enum?: string[];
  format?: string;
};

export const homeContract = contract as Record<HomeSection, FieldSchema>;
export function safeContentUrl(value: string) {
  if (/[\s\\]/.test(value) || [...value].some(character => character.charCodeAt(0) < 32 || character.charCodeAt(0) === 127)) return false;
  if (value.startsWith("#")) return value.length > 1;
  if (value.startsWith("/")) return !value.startsWith("//");
  try { const url = new URL(value); return url.protocol === "https:" && Boolean(url.hostname) && !url.username && !url.password; } catch { return false; }
}

export function fieldValidator(schema: FieldSchema): z.ZodTypeAny {
  if (schema.type === "object") return z.object(Object.fromEntries(Object.entries(schema.properties!).map(([key, child]) => {
    const validator = fieldValidator(child);
    return [key, schema.required?.includes(key) ? validator : validator.optional()];
  }))).strict();
  if (schema.type === "array") return z.array(fieldValidator(schema.items!)).min(schema.minItems!).max(schema.maxItems!).superRefine((items, ctx) => {
    for (const field of ["id", "number"]) {
      const ids = items.flatMap((item: unknown) => item && typeof item === "object" && field in item ? [String((item as Record<string, unknown>)[field])] : []);
      if (new Set(ids).size !== ids.length) ctx.addIssue({ code: "custom", message: `Each ${field} must be unique.` });
    }
  });
  if (schema.type === "boolean") return z.boolean();
  if (schema.type === "number") return z.number().min(schema.minimum!).max(schema.maximum!);
  if (schema.enum) return z.enum(schema.enum as [string, ...string[]]);
  const text = z.string().min(1).max(schema.maxLength ?? 12000).refine(value => Boolean(value.trim()), "Enter text.");
  return schema.format === "url" ? text.refine(safeContentUrl, "Use an HTTPS URL, root-relative path or anchor.") : text;
}

export const homeValidators = Object.fromEntries(Object.entries(homeContract).map(([key, schema]) => [key, fieldValidator(schema)])) as Record<HomeSection, z.ZodTypeAny>;
export type HomeDocument = Partial<HomeContent>;
export function parseHomeDocument(value: unknown, section?: HomeSection): HomeDocument {
  const response = z.object({ page: z.literal("home"), sections: z.array(z.object({ section: z.string(), content: z.unknown() })) }).parse(value);
  const result: HomeDocument = {};
  for (const entry of response.sections) {
    if (section && entry.section !== section) throw new Error("Unexpected section in filtered content.");
    if (!(entry.section in homeValidators)) throw new Error("Unknown Home section.");
    const key = entry.section as HomeSection;
    Object.assign(result, { [key]: homeValidators[key].parse(entry.content) });
  }
  if (!section && !result.metadata) throw new Error("Home content has not been published yet.");
  return result;
}
