import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { ErrorState, LoadingState } from "@/components/ui/AsyncState";
import { PageHero } from "@/components/ui/PageHero";
import { useEvent } from "@/features/content/queries";

export default function EventDetailPage() {
  const query = useEvent(useParams().eventSlug || "");
  if (query.isLoading) return <LoadingState />;
  if (query.isError || !query.data) return <ErrorState message="Event not found." />;
  const item = query.data;
  const date = new Intl.DateTimeFormat("en-GB", { dateStyle: "full", timeStyle: "short", timeZone: item.timezone }).format(new Date(item.startAt));
  return <><RouteMeta seo={item.seo} fallbackTitle={item.title} fallbackDescription={item.summary} /><PageHero eyebrow={item.status} title={item.title} summary={item.summary} /><div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-[2fr_1fr]"><article><div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.description || "") }} />{item.speakers?.length ? <><h2 className="mt-10 font-heading text-3xl font-bold">Speakers</h2><div className="mt-5 grid gap-4 md:grid-cols-2">{item.speakers.map(({ person, role }) => <div key={person.id} className="rounded-xl bg-white p-5"><p className="font-heading text-xl font-semibold">{person.name}</p><p className="text-sm text-slate-600">{role || person.jobTitle}</p></div>)}</div></> : null}{item.agenda?.length ? <><h2 className="mt-10 font-heading text-3xl font-bold">Agenda</h2><ol className="mt-5 space-y-4">{item.agenda.map((agenda) => <li key={agenda.id} className="rounded-xl border border-slate-200 bg-white p-5"><p className="text-sm text-kbc-purple-700">{new Intl.DateTimeFormat("en-GB", { timeStyle: "short", timeZone: item.timezone }).format(new Date(agenda.startsAt))}</p><h3 className="font-heading text-xl font-semibold">{agenda.title}</h3><p className="text-slate-600">{agenda.description}</p></li>)}</ol></> : null}</article><aside className="h-fit rounded-2xl bg-kbc-purple-50 p-6"><p className="font-semibold">{date}</p><p className="mt-2 text-slate-600">{item.isOnline ? "Online" : item.location}</p>{item.address && <p className="mt-1 text-sm text-slate-500">{item.address}</p>}{item.bookingUrl && item.status === "upcoming" && <a href={item.bookingUrl} target="_blank" rel="noopener noreferrer" className="mt-6 block rounded-lg bg-kbc-purple-700 px-5 py-3 text-center font-semibold text-white">Book externally</a>}</aside></div></>;
}
