import { Check } from "lucide-react";
import { Navigate, useParams } from "react-router-dom";
import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { getApprenticeStory } from "@/pages/ApprenticeStoriesPage/data";
import { CapabilityCtaSection } from "@/pages/StoriesPage/components/CapabilityCtaSection";

export default function ApprenticeStoryDetailPage() {
  const story = getApprenticeStory(useParams().storySlug);
  if (!story) return <Navigate to="/apprentices/stories" replace />;

  return (
    <article className="kbc-figma-home overflow-hidden bg-white">
      <RouteMeta fallbackTitle={`${story.name} | Apprentice Story`} fallbackDescription={story.introduction} />

      <header className="relative overflow-hidden bg-[linear-gradient(122deg,#1c0d28_0%,#2e123d_55%,#23102f_100%)] py-16 text-white sm:py-20 xl:py-[118px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_38%,rgba(119,55,154,.38),transparent_32%),radial-gradient(circle_at_16%_86%,rgba(214,176,78,.10),transparent_30%)]" aria-hidden="true" />
        <div className="figma-shell relative grid items-center gap-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
          <div>
            <span className="figma-eyebrow !text-kbc-gold-500">Success story</span>
            <h1 className="mt-5 !text-[clamp(2.5rem,11vw,3rem)] !leading-[.96] !text-white sm:!text-6xl lg:!text-7xl">{story.title}</h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{story.introduction}</p>
            <dl className="mt-10 grid gap-5 border-t border-white/15 pt-6 sm:grid-cols-2">
              <div><dt className="text-xs uppercase tracking-[.16em] text-kbc-gold-500">Name</dt><dd className="mt-2 font-semibold text-white">{story.name}</dd></div>
              <div><dt className="text-xs uppercase tracking-[.16em] text-kbc-gold-500">Programme</dt><dd className="mt-2 font-semibold text-white">{story.programme}</dd></div>
              <div className="sm:col-span-2"><dt className="text-xs uppercase tracking-[.16em] text-kbc-gold-500">Role & company</dt><dd className="mt-2 font-semibold text-white">{story.role}{story.company ? ` · ${story.company}` : ""}</dd></div>
            </dl>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="pointer-events-none absolute -inset-14 bg-[radial-gradient(ellipse_at_center,rgba(180,135,211,.28)_0%,rgba(103,48,130,.17)_42%,transparent_72%)] blur-2xl" aria-hidden="true" />
            <img className="relative aspect-[4/3] w-full rounded-2xl border border-white/15 object-cover object-top shadow-[0_26px_60px_rgba(0,0,0,.35)]" src={story.image} alt={story.name} loading="lazy" decoding="async" />
          </div>
        </div>
      </header>

      {story.result && (
        <section className="border-b border-kbc-purple-950/10 bg-kbc-purple-50 py-10" aria-label="Headline results">
          <div className="figma-shell grid gap-5 sm:grid-cols-3">
            <div><span className="text-xs uppercase tracking-[.16em] text-kbc-dark-500">Course sales growth</span><strong className="mt-2 block text-4xl text-kbc-purple-950">{story.result.value}</strong></div>
            <div><span className="text-xs uppercase tracking-[.16em] text-kbc-dark-500">Before CRM</span><strong className="mt-2 block text-4xl text-kbc-purple-950">5/year</strong></div>
            <div><span className="text-xs uppercase tracking-[.16em] text-kbc-dark-500">After CRM</span><strong className="mt-2 block text-4xl text-kbc-purple-950">4–7/month</strong></div>
          </div>
        </section>
      )}

      <section className="py-16 sm:py-20 xl:py-[118px]" aria-labelledby="starting-point-title">
        <div className="figma-shell grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div><span className="figma-eyebrow">The starting point</span><h2 className="!text-4xl !leading-[1.02] text-kbc-purple-950 sm:!text-5xl" id="starting-point-title">Learning built around an established role.</h2></div>
          <div className="space-y-5 text-base leading-8 text-kbc-dark-600">{story.startingPoint.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
      </section>

      <section className="bg-kbc-purple-50 py-16 sm:py-20 xl:py-[118px]" aria-labelledby="role-title">
        <div className="figma-shell grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div><span className="figma-eyebrow">Responsibilities</span><h2 className="!text-4xl !leading-[1.02] text-kbc-purple-950 sm:!text-5xl" id="role-title">My role</h2><p className="mt-6 text-base leading-8 text-kbc-dark-600">{story.roleSummary}</p></div>
          <div className="grid gap-4 sm:grid-cols-2">{story.responsibilities.map((item, index) => <div className="rounded-2xl border border-kbc-purple-950/10 bg-white p-6" key={item}><span className="text-xs font-bold tracking-[.16em] text-kbc-gold-700">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-7 text-2xl text-kbc-purple-950">{item}</h3></div>)}</div>
        </div>
      </section>

      <section className="py-16 sm:py-20 xl:py-[118px]" aria-labelledby="learning-title">
        <div className="figma-shell">
          <span className="figma-eyebrow">Outcomes</span>
          <h2 className="max-w-3xl !text-4xl !leading-[1.02] text-kbc-purple-950 sm:!text-5xl" id="learning-title">What I've learned and how I've applied it.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{story.learning.map((item) => <div className="flex items-center gap-3 rounded-2xl border border-kbc-purple-950/10 bg-white p-5 shadow-[0_12px_32px_rgba(58,42,31,.12)]" key={item}><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-kbc-gold-100 text-kbc-gold-800"><Check className="h-5 w-5" aria-hidden="true" /></span><strong className="text-kbc-purple-950">{item}</strong></div>)}</div>
        </div>
      </section>

      {story.initiative && (
        <section className="bg-kbc-purple-950 py-16 text-white sm:py-20 xl:py-[118px]" aria-labelledby="initiative-title">
          <div className="figma-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div><span className="figma-eyebrow !text-kbc-gold-500">Key initiative</span><h2 className="!text-4xl !leading-[1.02] !text-white sm:!text-5xl" id="initiative-title">{story.initiative.title}</h2></div>
            <div className="space-y-5 text-base leading-8 text-white/65">{story.initiative.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </div>
        </section>
      )}

      {story.result && (
        <section className="bg-kbc-purple-950 pb-16 text-white sm:pb-20 xl:pb-[118px]" aria-labelledby="result-title">
          <div className="figma-shell rounded-[20px] border border-white/10 bg-white/[.06] p-7 sm:p-10 lg:p-14">
            <span className="text-6xl font-semibold text-kbc-gold-500 sm:text-7xl">{story.result.value}</span>
            <h2 className="mt-5 !text-4xl !text-white sm:!text-5xl" id="result-title">{story.result.label}</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/65">{story.result.description}</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">{story.result.highlights.map((item) => <li className="flex items-center gap-3 text-white/80" key={item}><Check className="h-5 w-5 text-kbc-gold-500" aria-hidden="true" />{item}</li>)}</ul>
          </div>
        </section>
      )}

      <section className="bg-kbc-purple-50 py-16 sm:py-20 xl:py-[118px]" aria-labelledby="transformation-title">
        <div className="figma-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div><span className="figma-eyebrow">The transformation</span><h2 className="!text-4xl !leading-[1.02] text-kbc-purple-950 sm:!text-5xl" id="transformation-title">The apprenticeship changed how I think and approach my work.</h2></div>
          <div><div className="space-y-5 text-base leading-8 text-kbc-dark-600">{story.transformation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="mt-8 flex flex-col gap-3 sm:flex-row"><NavigationButton className="figma-btn figma-btn--gold" to="/apprentices/stories" variant="accent">View apprentice stories</NavigationButton><NavigationButton className="figma-btn !border-kbc-purple-950/15 !bg-white !text-kbc-purple-950" to={story.linkedIn} external newTab variant="secondary">LinkedIn profile</NavigationButton></div></div>
        </div>
      </section>

      <CapabilityCtaSection />
    </article>
  );
}
