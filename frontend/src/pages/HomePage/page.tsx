import { Link } from "react-router-dom";

import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { ErrorState, LoadingState } from "@/components/ui/AsyncState";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { useColleges, useEvents, usePage, useProgrammes } from "@/features/content/queries";

export default function HomePage() {
  const page = usePage("home");
  const programmes = useProgrammes("?featured=true&perPage=3");
  const colleges = useColleges("?isFeatured=true&perPage=4");
  const events = useEvents("?status=upcoming&perPage=3");
  if (page.isLoading) return <LoadingState />;
  if (page.isError) return <ErrorState message="The homepage is not published yet. Staff can publish it in Django Admin." />;
  return (
    <>
      <RouteMeta seo={page.data?.seo} fallbackTitle="Kent Business College" fallbackDescription={page.data?.summary} />
      {(page.data?.sections || []).map((section) => <SectionRenderer key={section.id} section={section} />)}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex items-end justify-between gap-4"><div><p className="font-semibold text-kbc-purple-600">Career development</p><h2 className="font-heading text-3xl font-bold">Published programmes</h2></div><Link to="/programmes" className="font-semibold text-kbc-purple-700">View all</Link></div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">{(programmes.data?.items || []).map((item) => <Link key={item.id} to={`/programmes/${item.slug}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><p className="text-sm font-semibold text-kbc-gold-700">{item.funding.label}</p><h3 className="mt-2 font-heading text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm text-slate-600">{item.summary}</p></Link>)}</div>
      </section>
      {(colleges.data?.items.length || 0) > 0 && <section className="bg-white"><div className="mx-auto max-w-7xl px-4 py-16"><h2 className="font-heading text-3xl font-bold">Our colleges</h2><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{colleges.data?.items.map((item) => <Link key={item.id} to={`/colleges/${item.slug}`} className="rounded-2xl bg-kbc-purple-50 p-6"><h3 className="font-heading text-xl font-semibold">{item.title}</h3><p className="mt-2 text-sm text-slate-600">{item.summary}</p></Link>)}</div></div></section>}
      {(events.data?.items.length || 0) > 0 && <section className="mx-auto max-w-7xl px-4 py-16"><h2 className="font-heading text-3xl font-bold">Upcoming events</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{events.data?.items.map((item) => <Link key={item.id} to={`/events/${item.slug}`} className="rounded-2xl border border-slate-200 bg-white p-6"><p className="text-sm text-slate-500">{new Intl.DateTimeFormat("en-GB", { dateStyle: "long", timeZone: item.timezone }).format(new Date(item.startAt))}</p><h3 className="mt-2 font-heading text-xl font-semibold">{item.title}</h3><p className="mt-2 text-sm text-slate-600">{item.summary}</p></Link>)}</div></section>}
    </>
  );
}
