import { ArrowLeft, ArrowUpRight, Award, BriefcaseBusiness, Check, Linkedin } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { getExpert } from "@/pages/PeoplePage/data";

export default function ExpertDetailPage() {
  const { expertSlug } = useParams();
  const expert = getExpert(expertSlug);

  if (!expert) return <Navigate to="/our-experts" replace />;

  return (
    <div className="kbc-figma-home overflow-hidden bg-white">
      <RouteMeta
        fallbackTitle={`${expert.name} | Our Experts | Kent Business College`}
        fallbackDescription={`${expert.name} — ${expert.role}. Discover their professional experience, expertise and contribution to Kent Business College.`}
      />

      <section className="relative overflow-hidden bg-[#4B176D] px-5 pb-16 pt-[154px] text-white sm:pb-20 sm:pt-[170px] lg:pb-24">
        <div className="pointer-events-none absolute -right-28 -top-20 h-[420px] w-[420px] rounded-full border border-white/10" aria-hidden="true" />
        <div className="pointer-events-none absolute right-10 top-36 h-64 w-64 rounded-full border border-kbc-gold-500/20" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl">
          <Link className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-white/70 transition hover:text-kbc-gold-500" to="/our-experts"><ArrowLeft className="h-4 w-4" aria-hidden="true" />Back to our experts</Link>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_390px] lg:gap-20">
            <div>
              <p className="figma-hero__eyebrow !text-xs !font-bold !leading-5 !tracking-widest !text-kbc-gold-500">Professional expert</p>
              <h1 className="!text-[clamp(3rem,7vw,5.5rem)] !leading-[.98] !text-white">{expert.name}</h1>
              <p className="mt-6 text-xl font-semibold leading-8 text-white/90 sm:text-2xl">{expert.role}</p>
              <p className="mt-5 flex max-w-xl items-start gap-3 border-t border-white/15 pt-5 text-sm leading-7 text-white/70"><BriefcaseBusiness className="mt-1 h-5 w-5 shrink-0 text-kbc-gold-500" aria-hidden="true" />{expert.organisation}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-kbc-gold-500 px-5 text-sm font-bold text-[#25102f] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4B176D]" href={expert.linkedIn} target="_blank" rel="noreferrer"><Linkedin className="h-5 w-5" aria-hidden="true" />LinkedIn profile<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
                <NavigationButton to="/contact" variant="inverse">Speak to the KBC team</NavigationButton>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[390px]">
              <div className="absolute -inset-4 translate-x-5 translate-y-5 rounded-2xl border border-kbc-gold-500/35" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-3 shadow-[0_28px_65px_rgba(25,5,35,.4)] backdrop-blur-sm">
                <img className="aspect-[4/5] w-full rounded-xl object-cover object-top" src={expert.image} alt={`${expert.name}, ${expert.role}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section className="px-5 py-20 sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.17em] text-[#4B176D]">Professional profile</p>
              <h2 className="mt-4 !text-[clamp(2.25rem,4vw,3.6rem)] !leading-[1.05] !text-kbc-purple-950">Experience grounded in practice.</h2>
              <p className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[.11em] text-kbc-dark-500"><Award className="h-5 w-5 text-kbc-gold-600" aria-hidden="true" />{expert.credentials}</p>
            </div>
            <div className="space-y-5 text-base leading-8 text-kbc-dark-600 sm:text-lg sm:leading-9">{expert.profile.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </div>
        </section>

        <section className="bg-[#f7f4f8] px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.17em] text-[#4B176D]">Areas of expertise</p><h2 className="mt-4 !text-[clamp(2.25rem,4vw,3.6rem)] !leading-tight !text-kbc-purple-950">Specialist knowledge for complex professional challenges.</h2></div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{expert.expertise.map((item, index) => <article className="rounded-xl border border-[#4B176D]/10 bg-white p-6 shadow-[0_8px_24px_rgba(75,23,109,.07)]" key={item}><span className="text-xs font-bold text-kbc-gold-600">0{index + 1}</span><h3 className="mt-8 !text-xl !leading-7 !text-kbc-purple-950">{item}</h3></article>)}</div>
          </div>
        </section>

        <section className="px-5 py-20 sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl border border-[#4B176D]/10 bg-white shadow-[0_18px_55px_rgba(75,23,109,.1)] lg:grid-cols-[.75fr_1.25fr]">
            <div className="bg-[#4B176D] p-8 text-white sm:p-12">
              <p className="text-xs font-bold uppercase tracking-[.17em] text-kbc-gold-500">Career & contribution</p>
              <h2 className="mt-4 !text-3xl !leading-tight !text-white sm:!text-4xl">Professional highlights.</h2>
              <p className="mt-5 text-sm leading-7 text-white/70">A selection of the experience, recognition and professional contributions that shape {expert.name}&apos;s perspective.</p>
            </div>
            <div className="p-8 sm:p-12">
              <ul className="space-y-5">{expert.highlights.map((item) => <li className="flex items-start gap-4 border-b border-[#4B176D]/10 pb-5 text-sm font-semibold leading-7 text-kbc-dark-600 last:border-0 last:pb-0 sm:text-base" key={item}><span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#4B176D] text-white"><Check className="h-3.5 w-3.5" aria-hidden="true" /></span>{item}</li>)}</ul>
            </div>
          </div>
        </section>
      </main>

      <section className="bg-[#f7f4f8] px-5 py-20 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-2xl bg-[#4B176D] p-8 text-white sm:p-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.17em] text-kbc-gold-500">Take the next step</p><h2 className="mt-4 !text-3xl !leading-tight !text-white sm:!text-4xl">Bring expert-led learning into your professional journey.</h2></div>
          <NavigationButton className="!bg-kbc-gold-500 !text-[#25102f] hover:!bg-white" to="/book-session" variant="accent">Book an information session</NavigationButton>
        </div>
      </section>
    </div>
  );
}
