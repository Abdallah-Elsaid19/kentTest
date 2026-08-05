import DOMPurify from "dompurify";
import { Link, useParams } from "react-router-dom";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { ErrorState, LoadingState } from "@/components/ui/AsyncState";
import { PageHero } from "@/components/ui/PageHero";
import { useProgramme } from "@/features/content/queries";

export default function ProgrammeDetailPage() {
  const query = useProgramme(useParams().programmeSlug || "");
  if (query.isLoading) return <LoadingState />;
  if (query.isError || !query.data) return <ErrorState message="Programme not found." />;
  const item = query.data;
  return <><RouteMeta seo={item.seo} fallbackTitle={item.title} fallbackDescription={item.summary} /><PageHero eyebrow={`${item.funding.label} · Level ${item.level}`} title={item.title} summary={item.summary} /><div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-[2fr_1fr]"><article><div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.description || "") }} /><h2 className="mt-10 font-heading text-3xl font-bold">Modules</h2><div className="mt-5 space-y-4">{item.modules?.map((module) => <section key={module.id} className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-heading text-xl font-semibold">{module.title}</h3><p className="mt-2 text-slate-600">{module.summary}</p></section>)}</div></article><aside className="h-fit rounded-2xl bg-kbc-purple-50 p-6"><dl className="space-y-4"><div><dt className="text-sm text-slate-500">College</dt><dd className="font-semibold">{item.college.title}</dd></div><div><dt className="text-sm text-slate-500">Duration</dt><dd className="font-semibold">{item.duration.label || (item.duration.months ? `${item.duration.months} months` : "Contact us")}</dd></div><div><dt className="text-sm text-slate-500">Delivery</dt><dd className="font-semibold">{item.delivery?.mode || item.deliveryMode}</dd></div></dl>{item.cta && <Link to={item.cta.href} className="mt-6 block rounded-lg bg-kbc-purple-700 px-5 py-3 text-center font-semibold text-white">{item.cta.label}</Link>}</aside></div></>;
}
