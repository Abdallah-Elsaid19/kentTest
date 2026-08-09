import { outcomes } from "../data";

export function OutcomesSection() {
  return (
    <section className="bg-kbc-purple-950 !py-16 text-white sm:!py-20 xl:!py-[118px]" aria-labelledby="outcomes-title">
      <div className="figma-shell">
        <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,.8fr)] lg:gap-16">
          <div><span className="figma-eyebrow !text-kbc-gold-500">What the accounts reveal</span><h2 className="mt-4 !text-4xl !leading-[1.02] !text-white sm:!text-5xl xl:!text-[58px]" id="outcomes-title">Professional development is strongest when learning remains connected to the role.</h2></div>
          <p className="max-w-xl text-base leading-7 text-white/65">Across the published stories, learners describe a recurring journey from existing experience to structured reflection and practical application.</p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-2xl border border-white/10 bg-white/[.08] sm:grid-cols-2 xl:grid-cols-4">
          {outcomes.map((outcome) => (
            <article className="border-t border-white/10 p-6 first:border-t-0 sm:p-7 sm:[&:nth-child(2)]:border-l sm:[&:nth-child(2)]:border-t-0 sm:[&:nth-child(4)]:border-l xl:border-l xl:border-t-0 xl:first:border-l-0" key={outcome.number}>
              <span className="text-xs font-bold uppercase tracking-[.16em] text-kbc-gold-500">{outcome.number} · {outcome.label}</span>
              <h3 className="mt-8 text-2xl leading-[1.05] !text-white">{outcome.title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/60">{outcome.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-5 grid overflow-hidden rounded-2xl border border-white/10 bg-white/[.04] md:grid-cols-[1fr_1.35fr]">
          <strong className="p-5 text-sm leading-6 text-white sm:p-6">These are individual learner accounts, not guaranteed outcomes.</strong>
          <p className="border-t border-white/10 p-5 text-sm leading-6 text-white/55 sm:p-6 md:border-l md:border-t-0">Results vary according to role, workplace opportunity, engagement and programme requirements.</p>
        </div>
      </div>
    </section>
  );
}
