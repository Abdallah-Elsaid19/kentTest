import { useMemo, useState } from "react";
import { Award, Eye, EyeOff, Linkedin } from "lucide-react";
import { NavigationButton } from "@/components/navigation";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import type { DisplayStory } from "../data";

function StoryCard({ story }: { story: DisplayStory }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <article className="group flex min-h-full flex-col gap-4 rounded-lg bg-white bg-[url('https://kentbusinesscollege.com/wp-content/uploads/2026/04/Group-212.png')] bg-cover bg-center p-4 shadow-[0_0_10px_rgba(0,0,0,.15)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_0_12px_rgba(64,27,140,.48)] motion-reduce:transform-none motion-reduce:transition-none">
      <div className="relative flex aspect-[2/1] items-start justify-start overflow-hidden">
        <img
          className="aspect-square w-[51%] rounded-full border-[5px] border-white object-cover object-top shadow-sm transition duration-500 group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none"
          src={story.image}
          alt={story.imageAlt}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute right-3 top-5 flex w-[38%] items-center justify-center sm:right-5 sm:top-7">
          <img className="max-h-24 w-full object-contain" src="/assets/logos/kbc-logo.png" alt="Kent Business College" loading="lazy" decoding="async" />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="!font-heading text-lg !font-bold leading-tight text-kbc-purple-950">{story.name || story.title}</h3>
        <p className="text-sm leading-6 text-kbc-dark-600">{story.role || story.category}</p>
      </div>

      <div className="flex items-center gap-4">
        <Award className="h-6 w-6 shrink-0 text-[#401B8C]" aria-hidden="true" />
        <p className="text-sm font-semibold leading-5 text-kbc-purple-950">{story.programme || story.title}</p>
      </div>

      {showDescription && (
        <p className="rounded-lg border border-[#401B8C]/10 bg-white/90 p-4 text-sm leading-7 text-kbc-dark-600 shadow-sm">
          {story.summary}
        </p>
      )}

      <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-1">
        <button
          className="inline-grid h-10 w-10 place-items-center rounded bg-[#401B8C] text-white transition-colors hover:bg-[#2F1468] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#401B8C]"
          type="button"
          aria-expanded={showDescription}
          aria-label={showDescription ? `Hide ${story.name || "learner"} profile` : `View ${story.name || "learner"} profile`}
          onClick={() => setShowDescription((current) => !current)}
        >
          {showDescription ? <EyeOff className="h-4 w-4" aria-hidden="true" /> : <Eye className="h-4 w-4" aria-hidden="true" />}
        </button>
        {story.linkedIn && (
          <NavigationButton
            className="!min-h-10 !rounded !border-[#401B8C] !bg-kbc-purple-50 !px-5 !text-xs !font-medium !text-[#401B8C] hover:!bg-[#401B8C] hover:!text-white"
            to={story.linkedIn}
            external
            newTab
            variant="secondary"
          >
            <Linkedin className="mr-2 h-4 w-4" aria-hidden="true" />
            Linkedin
          </NavigationButton>
        )}
      </div>
    </article>
  );
}

export function CaseStudiesListing({ stories, isRefreshing }: { stories: DisplayStory[]; isRefreshing?: boolean }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const categories = useMemo(() => [...new Set(stories.map((story) => story.category))].sort(), [stories]);
  const filteredStories = useMemo(() => {
    const query = search.trim().toLowerCase();
    return stories.filter((story) => {
      const matchesCategory = category === "all" || story.category === category;
      const searchable = [story.title, story.name, story.role, story.programme, story.summary].filter(Boolean).join(" ").toLowerCase();
      return matchesCategory && (!query || searchable.includes(query));
    });
  }, [category, search, stories]);

  return (
    <section className="bg-white !py-16 sm:!py-20 xl:!py-[118px]" id="case-studies" aria-labelledby="case-studies-title" aria-busy={isRefreshing}>
      <div className="figma-shell">
        <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,.8fr)] lg:gap-16">
          <FigmaSectionHeading id="case-studies-title" eyebrow="The learner perspective" title={<>Find the experience most relevant to your role and ambition.</>} align="left" />
          <p className="max-w-xl text-base leading-7 text-kbc-dark-500">Search the current learner experiences by topic or name and explore how professional learning connects with workplace responsibility.</p>
        </div>

        <form className="mt-10 grid gap-4 rounded-2xl border border-kbc-purple-950/10 bg-kbc-purple-50 p-4 sm:grid-cols-[minmax(0,1fr)_260px] sm:p-5" onSubmit={(event) => event.preventDefault()} role="search">
          <label className="text-sm font-semibold text-kbc-purple-950" htmlFor="story-search">Search stories
            <input className="mt-2 min-h-12 w-full rounded-md border border-kbc-purple-950/15 bg-white px-4 text-sm font-normal text-kbc-purple-950 outline-none transition focus:border-kbc-purple-700 focus:ring-2 focus:ring-kbc-purple-200" id="story-search" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search by learner, programme or theme" />
          </label>
          <label className="text-sm font-semibold text-kbc-purple-950" htmlFor="story-category">Category
            <select className="mt-2 min-h-12 w-full rounded-md border border-kbc-purple-950/15 bg-white px-4 text-sm font-normal text-kbc-purple-950 outline-none transition focus:border-kbc-purple-700 focus:ring-2 focus:ring-kbc-purple-200" id="story-category" value={category} onChange={(event) => setCategory(event.target.value)}>
              <option value="all">All categories</option>
              {categories.map((item) => <option value={item} key={item}>{item}</option>)}
            </select>
          </label>
        </form>

        <p className="mt-4 text-sm text-kbc-dark-500" aria-live="polite">Showing {filteredStories.length} {filteredStories.length === 1 ? "story" : "stories"}</p>

        {filteredStories.length ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2">{filteredStories.map((story) => <StoryCard story={story} key={story.id} />)}</div>
        ) : (
          <div className="mt-8 rounded-2xl border border-kbc-purple-950/10 bg-kbc-purple-50 p-8 text-center" role="status"><h2 className="text-3xl text-kbc-purple-950">No matching stories</h2><p className="mt-3 text-kbc-dark-500">Try a different search term or category.</p></div>
        )}
      </div>
    </section>
  );
}
