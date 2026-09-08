import { programmeColleges, programmeTypeLabels, type ProgrammeSummary } from "@/data/programmes";

export function filterProgrammes(programmes: readonly ProgrammeSummary[], params: URLSearchParams) {
  const terms = (params.get("search") || params.get("q") || "").trim().toLocaleLowerCase("en-GB").split(/\s+/).filter(Boolean);
  return programmes.filter((programme) => {
    if (params.get("college") && programme.college !== params.get("college")) return false;
    if (params.get("level") && String(programme.level) !== params.get("level")) return false;
    if (params.get("type") && programme.type !== params.get("type")) return false;
    const searchable = [programme.title, programmeColleges[programme.college].title, programme.level && `Level ${programme.level}`,
      programme.summary, programme.qualification, ...(programme.professionalRecognition || []), programmeTypeLabels[programme.type]]
      .filter(Boolean).join(" ").toLocaleLowerCase("en-GB");
    return terms.every((term) => searchable.includes(term));
  });
}

export function updateProgrammeFilters(params: URLSearchParams, key: string, value: string) {
  const next = new URLSearchParams(params);
  value ? next.set(key, value) : next.delete(key);
  if (key === "search") next.delete("q");
  next.delete("page");
  return next;
}

export function clearProgrammeFilters(params: URLSearchParams) {
  const next = new URLSearchParams(params);
  ["search", "q", "college", "level", "type", "page", "funding"].forEach((key) => next.delete(key));
  return next;
}
