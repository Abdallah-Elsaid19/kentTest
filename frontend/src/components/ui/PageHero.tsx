export function PageHero({ title, summary, eyebrow }: { title: string; summary?: string; eyebrow?: string }) {
  return (
    <section className="bg-kbc-purple-800 px-4 py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl">
        {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-kbc-gold-400">{eyebrow}</p>}
        <h1 className="mt-2 max-w-4xl font-heading text-4xl font-bold md:text-5xl">{title}</h1>
        {summary && <p className="mt-4 max-w-2xl text-lg text-white/75">{summary}</p>}
      </div>
    </section>
  );
}
