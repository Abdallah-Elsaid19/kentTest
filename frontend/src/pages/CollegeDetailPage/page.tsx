import { useParams } from "react-router-dom";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { ErrorState, LoadingState } from "@/components/ui/AsyncState";
import { PageHero } from "@/components/ui/PageHero";
import { useCollege, useProgrammes } from "@/features/content/queries";
import { Link } from "react-router-dom";

export default function CollegeDetailPage() {
  const slug = useParams().collegeSlug || "";
  const college = useCollege(slug);
  const programmes = useProgrammes(`?college=${encodeURIComponent(slug)}`);
  if (college.isLoading) return <LoadingState />;
  if (college.isError || !college.data) return <ErrorState message="College not found." />;
  return <><RouteMeta seo={college.data.seo} fallbackTitle={college.data.title} fallbackDescription={college.data.summary} /><PageHero title={college.data.title} summary={college.data.summary} /><section className="mx-auto max-w-7xl px-4 py-14"><p className="max-w-4xl whitespace-pre-line text-lg leading-8 text-slate-700">{college.data.description}</p><h2 className="mt-12 font-heading text-3xl font-bold">Programmes</h2><div className="mt-6 grid gap-5 md:grid-cols-2">{programmes.data?.items.map((item) => <Link key={item.id} to={`/programmes/${item.slug}`} className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="font-heading text-xl font-semibold">{item.title}</h3><p className="mt-2 text-slate-600">{item.summary}</p></Link>)}</div></section></>;
}
