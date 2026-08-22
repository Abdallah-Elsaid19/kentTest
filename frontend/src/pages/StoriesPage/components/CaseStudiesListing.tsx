import { useMemo, useState } from "react";
import { ArrowLink } from "@/components/navigation";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import type { DisplayStory } from "../data";

function StoryTags({ story }: { story: DisplayStory }) {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="rounded-full bg-kbc-purple-50 px-3 py-1 text-[11px] font-semibold text-kbc-purple-700">{story.category}</span>
      {story.programme && <span className="rounded-full bg-kbc-gold-50 px-3 py-1 text-[11px] font-semibold text-kbc-gold-800">{story.programme}</span>}
    </div>
  );
}

function StoryLink({ story }: { story: DisplayStory }) {
  return <ArrowLink className="mt-auto pt-5" external={story.external} newTab={story.external} to={story.href} direction="up-right">{story.ctaLabel}</ArrowLink>;
}

function StoryCard({ story }: { story: DisplayStory }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-kbc-purple-950/10 bg-white shadow-[0_12px_32px_rgba(58,42,31,.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(36,16,45,.11)] motion-reduce:transform-none motion-reduce:transition-none">
      <div className="overflow-hidden bg-kbc-purple-100">
        <img className="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none" src={story.image} alt={story.imageAlt} loading="lazy" />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <StoryTags story={story} />
        <h3 className="mt-5 text-3xl leading-[1.05] text-kbc-purple-950">{story.title}</h3>
        {story.name && <p className="mt-4 font-semibold text-kbc-purple-950">{story.name}</p>}
        {story.role && <p className="mt-1 text-sm text-kbc-dark-500">{story.role}</p>}
        <p className="mt-4 line-clamp-4 text-sm leading-6 text-kbc-dark-600">{story.summary}</p>
        <StoryLink story={story} />
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
  const featured = filteredStories.find((story) => story.isFeatured) || filteredStories[0];
  const remaining = featured ? filteredStories.filter((story) => story.id !== featured.id) : [];

  return (
    <section className="bg-white !py-16 sm:!py-20 xl:!py-[118px]" id="case-studies" aria-labelledby="case-studies-title" aria-busy={isRefreshing}>
      <div className="figma-shell">
        <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,.8fr)] lg:gap-16">
          <FigmaSectionHeading id="case-studies-title" eyebrow="The learner perspective" title={<>Find the experience most relevant to your role and ambition.</>} />
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

        {featured ? (
          <>
            <article className="mt-8 grid overflow-hidden rounded-2xl border border-kbc-purple-950/10 bg-white shadow-[0_18px_45px_rgba(35,16,44,.13)] lg:grid-cols-[.95fr_1.05fr]">
              <div className="min-h-80 overflow-hidden bg-kbc-purple-100 lg:min-h-[520px]">
                <img className="h-full w-full object-cover object-top" src={featured.image} alt={featured.imageAlt} />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <StoryTags story={featured} />
                <h2 className="mt-6 text-4xl leading-[1.02] text-kbc-purple-950 sm:text-5xl">{featured.title}</h2>
                {featured.name && <p className="mt-6 font-semibold text-kbc-purple-950">{featured.name}</p>}
                {featured.role && <p className="mt-1 text-sm text-kbc-dark-500">{featured.role}</p>}
                <p className="mt-6 line-clamp-6 text-base leading-7 text-kbc-dark-600">{featured.summary}</p>
                <StoryLink story={featured} />
              </div>
            </article>
            {remaining.length > 0 && <div className="mt-6 grid gap-6 md:grid-cols-2">{remaining.map((story) => <StoryCard story={story} key={story.id} />)}</div>}
          </>
        ) : (
          <div className="mt-8 rounded-2xl border border-kbc-purple-950/10 bg-kbc-purple-50 p-8 text-center" role="status"><h2 className="text-3xl text-kbc-purple-950">No matching stories</h2><p className="mt-3 text-kbc-dark-500">Try a different search term or category.</p></div>
        )}
      </div>
    </section>
  );
}
