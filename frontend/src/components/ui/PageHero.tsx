export function PageHero({ title, summary, eyebrow }: { title: string; summary?: string; eyebrow?: string }) {
  return (
    <section className="kbc-page-hero px-4 py-16 text-white md:py-24">
      <div className="mx-auto max-w-[1240px]">
        {eyebrow && <p className="kbc-page-hero__eyebrow text-sm font-semibold uppercase tracking-[0.18em] text-kbc-gold-400">{eyebrow}</p>}
        <h1 className="kbc-hero-title mt-3 max-w-4xl">{title}</h1>
        {summary && <p className="mt-6 max-w-3xl text-[clamp(1rem,1.5vw,1.125rem)] leading-8 text-white/75">{summary}</p>}
      </div>
    </section>
  );
}
