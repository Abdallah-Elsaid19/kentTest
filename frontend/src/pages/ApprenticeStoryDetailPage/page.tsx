import { ArrowLeft, Award, BriefcaseBusiness, Check, Linkedin } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { CollegeStats } from "@/components/college/CollegeStats";
import { shell, section } from "@/components/college/layout";
import { NavigationButton } from "@/components/navigation";
import { ProgrammeCardGrid, ProgrammeChecklist } from "@/components/programme/ProgrammeGrids";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { getApprenticeStory } from "@/pages/ApprenticeStoriesPage/data";
import { CapabilityCtaSection } from "@/pages/StoriesPage/components/CapabilityCtaSection";

export default function ApprenticeStoryDetailPage() {
  const story = getApprenticeStory(useParams().storySlug);
  if (!story) return <Navigate to="/apprentices/stories" replace />;

  return (
    <article className="kbc-figma-home overflow-hidden bg-white [&_h2]:!font-semibold [&_h3]:!font-semibold">
      <RouteMeta fallbackTitle={`${story.name} | Apprentice Story | Kent Business College`} fallbackDescription={story.introduction} />

      <header className="relative isolate overflow-hidden bg-primary pb-16 pt-[192px] text-white sm:pb-20 sm:pt-[248px] lg:pb-24" aria-labelledby="story-title">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-primary-dark via-primary to-primary" aria-hidden="true" />
        <div className={shell}>
          <Link className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-medium text-white/80 transition-colors hover:text-kbc-gold-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kbc-gold-400 focus-visible:ring-offset-4 focus-visible:ring-offset-primary" to="/apprentices/stories">
            <ArrowLeft className="size-4" aria-hidden="true" /> All apprentice stories
          </Link>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,.85fr)] lg:gap-16">
            <div className="min-w-0">
              <p className="figma-eyebrow !text-xs !font-bold !tracking-widest !text-kbc-gold-400">Success story</p>
              <h1 id="story-title" className="!text-4xl !font-semibold !leading-[1.08] !tracking-tight !text-white sm:!text-5xl xl:!text-6xl">{story.title}</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">{story.introduction}</p>
              <dl className="mt-8 space-y-5 border-t border-white/20 pt-6">
                <div className="flex items-start gap-3">
                  <Award className="mt-1 size-5 shrink-0 text-kbc-gold-400" aria-hidden="true" />
                  <div><dt className="text-xs font-semibold uppercase tracking-widest text-kbc-gold-400">Programme</dt><dd className="mt-2 text-sm font-medium leading-6 text-white sm:text-base">{story.programme}</dd></div>
                </div>
                <div className="flex items-start gap-3">
                  <BriefcaseBusiness className="mt-1 size-5 shrink-0 text-kbc-gold-400" aria-hidden="true" />
                  <div><dt className="text-xs font-semibold uppercase tracking-widest text-kbc-gold-400">Role & company</dt><dd className="mt-2 text-sm leading-6 text-white/85 sm:text-base">{story.role}{story.company ? ` · ${story.company}` : ""}</dd></div>
                </div>
              </dl>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <NavigationButton to="#starting-point" variant="accent">Read the story</NavigationButton>
                <NavigationButton to={story.linkedIn} external newTab variant="inverse"><Linkedin className="mr-2 size-4" aria-hidden="true" />LinkedIn profile</NavigationButton>
              </div>
            </div>
            <figure className="mx-auto w-full max-w-[390px] lg:mr-0">
              <div className="relative rounded-2xl border border-white/20 bg-white/10 p-3 shadow-[0_24px_70px_rgba(36,13,68,0.2)]">
                <img className="aspect-[4/5] w-full rounded-xl object-cover object-top" src={story.image} alt={story.name} fetchPriority="high" decoding="async" />
                <img className="absolute bottom-6 right-6 w-24 rounded-full bg-white p-2 shadow-lg sm:w-28" src={story.stampImage} alt={`${story.programme} achievement badge`} decoding="async" />
              </div>
              <figcaption className="mt-5 border-l-2 border-kbc-gold-400 pl-4">
                <span className="block text-xl font-semibold text-white">{story.name}</span>
                {story.company && <span className="mt-1 block text-sm text-white/75">{story.company}</span>}
              </figcaption>
            </figure>
          </div>
        </div>
      </header>

      {story.result && <section className="border-b border-kbc-purple-100 bg-kbc-purple-50 pb-10" aria-label="Headline results">
        <div className={shell}><CollegeStats items={[
          { label: "Course sales growth", value: story.result.value },
          { label: "Before CRM", value: "5/year" },
          { label: "After CRM", value: "4–7/month" },
        ]} surface="white" /></div>
      </section>}

      <section id="starting-point" className={`${section} sm:!scroll-mt-64`} aria-labelledby="starting-point-title">
        <div className={`${shell} grid gap-8 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:gap-16`}>
          <FigmaSectionHeading id="starting-point-title" eyebrow="The starting point" title="Learning built around an established role." align="left" />
          <div className="space-y-5 text-base leading-8 text-[var(--color-muted)]">{story.startingPoint.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
      </section>

      <section className={`${section} bg-kbc-purple-50`} aria-labelledby="role-title">
        <div className={shell}>
          <FigmaSectionHeading id="role-title" eyebrow="Responsibilities" title="My role" description={story.roleSummary} align="left" />
          <ProgrammeCardGrid items={story.responsibilities.map((title) => ({ title }))} columns={4} editorial editorialSurface="white" />
        </div>
      </section>

      <section className={section} aria-labelledby="learning-title">
        <div className={shell}>
          <FigmaSectionHeading id="learning-title" eyebrow="Outcomes" title="What I've learned and how I've applied it." align="left" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{story.learning.map((item) => <li className="flex items-start gap-4 rounded-2xl border border-kbc-purple-100 bg-white p-6 shadow-[0_12px_32px_rgba(35,13,63,0.06)]" key={item}><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-kbc-purple-50 text-primary"><Check className="size-5" aria-hidden="true" /></span><span className="pt-2 text-sm font-semibold leading-6 text-[var(--color-ink)]">{item}</span></li>)}</ul>
        </div>
      </section>

      {(story.initiative || story.result) && <div className="bg-primary-dark text-white">
        {story.initiative && <section className={section} aria-labelledby="initiative-title">
          <div className={`${shell} grid gap-8 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:gap-16`}>
            <FigmaSectionHeading id="initiative-title" eyebrow="Key initiative" title={story.initiative.title} align="left" tone="inverse" />
            <div className="space-y-5 text-base leading-8 text-white/80">{story.initiative.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </div>
        </section>}
        {story.result && <section className="pb-16 sm:pb-20 lg:pb-28" aria-labelledby="result-title">
          <div className={shell}>
            <div className="grid gap-8 rounded-2xl border border-white/20 bg-white/5 p-7 sm:p-10 lg:grid-cols-[minmax(0,.7fr)_minmax(0,1.3fr)] lg:gap-14">
              <div><span className="text-6xl font-semibold tracking-tight text-kbc-gold-400 sm:text-7xl">{story.result.value}</span><h2 className="mt-5 !text-3xl !leading-tight !text-white" id="result-title">{story.result.label}</h2></div>
              <div><p className="text-base leading-8 text-white/80">{story.result.description}</p><ProgrammeChecklist items={story.result.highlights} inverse /></div>
            </div>
          </div>
        </section>}
      </div>}

      <section className={`${section} bg-kbc-purple-50`} aria-labelledby="transformation-title">
        <div className={`${shell} grid gap-8 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:gap-16`}>
          <FigmaSectionHeading id="transformation-title" eyebrow="The transformation" title="The apprenticeship changed how I think and approach my work." align="left" />
          <div>
            <div className="space-y-5 text-base leading-8 text-[var(--color-muted)]">{story.transformation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><NavigationButton to="/apprentices/stories">View apprentice stories</NavigationButton><NavigationButton to={story.linkedIn} external newTab variant="secondary"><Linkedin className="mr-2 size-4" aria-hidden="true" />LinkedIn profile</NavigationButton></div>
          </div>
        </div>
      </section>

      <CapabilityCtaSection />
    </article>
  );
}
