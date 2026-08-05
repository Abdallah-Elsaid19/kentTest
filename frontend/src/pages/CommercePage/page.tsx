import { RouteMeta } from "@/components/seo/RouteMeta";
import { PageHero } from "@/components/ui/PageHero";

export default function CommercePage({ title }: { title: string }) {
  return <><RouteMeta fallbackTitle={`${title} | Kent Business College`} /><PageHero title={title} summary="Commerce is disabled until the owner approves a non-WordPress provider and operating model." /><div className="mx-auto max-w-3xl px-4 py-14"><div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">No purchases can be made through this website at present.</div></div></>;
}
