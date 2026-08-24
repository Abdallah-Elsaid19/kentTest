import DOMPurify from "dompurify";
import { Link } from "react-router-dom";

import type { PageSection } from "@/types/content";

const text = (value: unknown) => typeof value === "string" ? value : "";

export function SectionRenderer({ section }: { section: PageSection }) {
  const data = section.data;
  if (section.type === "hero") {
    return (
      <section className="relative overflow-hidden bg-kbc-purple-800 px-4 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-kbc-gold-400">{text(data.eyebrow)}</p><h1 className="kbc-hero-title mt-3 max-w-4xl">{text(data.heading)}</h1><p className="mt-5 max-w-2xl text-lg text-white/75">{text(data.body)}</p></div>
      </section>
    );
  }
  if (section.type === "richText") {
    return <section className="mx-auto max-w-4xl px-4 py-14"><div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text(data.html)) }} /></section>;
  }
  if (section.type === "CTA") {
    return <section className="mx-auto my-14 max-w-6xl rounded-3xl bg-kbc-gold-500 px-6 py-10 text-center"><h2 className="font-heading text-3xl font-bold">{text(data.heading)}</h2><p className="mx-auto mt-3 max-w-2xl">{text(data.body)}</p>{text(data.href) && <Link className="mt-6 inline-flex rounded-lg bg-kbc-purple-800 px-6 py-3 font-semibold text-white" to={text(data.href)}>{text(data.label) || "Learn more"}</Link>}</section>;
  }
  if (["benefits", "statistics", "FAQ", "contactDetails"].includes(section.type)) {
    const items = Array.isArray(data.items) ? data.items as Record<string, unknown>[] : [];
    return <section className="mx-auto max-w-7xl px-4 py-14"><h2 className="font-heading text-3xl font-bold">{text(data.heading)}</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{items.map((item, index) => <article key={index} className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="font-heading text-xl font-semibold">{text(item.title) || text(item.label)}</h3><p className="mt-2 text-slate-600">{text(item.description) || text(item.value)}</p></article>)}</div></section>;
  }
  return null;
}
