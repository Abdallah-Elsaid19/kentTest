import { ArrowUpRight, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { experts, peopleHeroImage } from "./data";

export default function PeoplePage() {
  return (
    <div className="kbc-figma-home overflow-hidden bg-[#f8f6fa]">
      <RouteMeta
        fallbackTitle="Our Experts | Kent Business College"
        fallbackDescription="Meet the portfolio, project, programme and benefits-realisation experts supporting professional learning at Kent Business College."
      />

      <section className="figma-hero relative isolate before:!hidden !min-h-[100svh] !p-0" style={{ background: "var(--color-primary)" }} aria-labelledby="experts-hero-heading">
        <img className="pointer-events-none absolute inset-y-0 right-0 -z-30 h-full w-full object-cover object-center lg:w-[60%]" src={peopleHeroImage} alt="" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 -z-20 w-full bg-[#401B8C]/35 lg:w-[60%]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,#401B8C_0%,#401B8C_38%,rgba(64,27,140,.94)_52%,rgba(64,27,140,.52)_72%,rgba(64,27,140,.18)_100%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-full shadow-[inset_100px_0_120px_-30px_rgba(64,27,140,1),inset_0_-90px_105px_-38px_rgba(64,27,140,.98),inset_0_75px_95px_-45px_rgba(64,27,140,.86)] lg:w-[60%]" aria-hidden="true" />

        <div className="figma-shell relative flex min-h-[100svh] items-center pb-20 pt-[150px] sm:pt-[164px]">
          <div className="figma-hero__copy flex flex-col items-center text-center sm:block sm:text-left">
            <p className="figma-hero__eyebrow !mx-auto !text-xs !font-bold !leading-5 !tracking-widest sm:!ml-0 sm:!mr-0">Our experts</p>
            <h1 className="!text-5xl !font-medium !leading-none !tracking-tight sm:!text-6xl lg:!text-7xl xl:!text-[82px]" id="experts-hero-heading">Expertise that moves <span>practice forward.</span></h1>
            <p className="!text-base !leading-relaxed sm:!text-lg">Learn from recognised specialists who connect rigorous thinking with real-world portfolio, programme and project delivery.</p>
          </div>
        </div>
      </section>

      <main className="px-5 pb-24 pt-16 sm:pt-20 lg:pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 border-b border-[#401B8C]/10 pb-8">
            <p className="text-xs font-bold uppercase tracking-[.17em] text-[#401B8C]">Professional faculty</p>
            <h2 className="mt-3 max-w-3xl !text-[clamp(2rem,4vw,3.5rem)] !leading-tight !text-kbc-purple-950">Meet the people behind the insight.</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {experts.map((expert) => (
              <article className="group flex min-h-full flex-col overflow-hidden rounded-[10px] border border-[#ddd6e2] bg-white shadow-[0_7px_20px_rgba(38,13,50,.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(64,27,140,.2)]" key={expert.id}>
                <div className="relative h-[188px] bg-[#401B8C]">
                  <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                    <img className="absolute inset-0 h-full w-full scale-105 object-cover object-center opacity-30 blur-[1px]" src={expert.image} alt="" />
                    <div className="absolute inset-0 bg-[#401B8C]/65" />
                    <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#351044]/65 to-transparent" />
                  </div>
                  <img className="absolute bottom-[-16px] left-5 h-[138px] w-[108px] rounded-[10px] border border-white/30 object-cover object-top shadow-[0_9px_24px_rgba(19,5,27,.35)] transition duration-500 group-hover:-translate-y-1" src={expert.image} alt={`${expert.name}, ${expert.role}`} loading="lazy" decoding="async" />
                </div>

                <div className="flex flex-1 flex-col px-[18px] pb-[18px] pt-[26px]">
                  <h2 className="!text-[1.35rem] !font-bold !leading-[1.25] !text-kbc-purple-950">{expert.name}</h2>
                  <p className="mt-1 text-sm font-semibold leading-5 text-[#6b20a0]">{expert.role}</p>
                  <p className="mt-4 text-sm leading-6 text-[#747076]">{expert.bio}</p>
                  <div className="mt-auto flex items-center gap-3 pt-7">
                    <Link className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-md bg-[#401B8C] px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#2F1468] hover:shadow-[0_8px_20px_rgba(64,27,140,.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#401B8C] focus-visible:ring-offset-2" to={`/our-experts/${expert.id}`}>View Profile<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
                    <a className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-[#401B8C]/25 text-[#401B8C] transition hover:-translate-y-0.5 hover:bg-[#401B8C] hover:text-white hover:shadow-[0_8px_20px_rgba(64,27,140,.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#401B8C] focus-visible:ring-offset-2" href={expert.linkedIn} target="_blank" rel="noreferrer" aria-label={`View ${expert.name} on LinkedIn`}><Linkedin className="h-[18px] w-[18px]" aria-hidden="true" /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <section className="bg-white px-5 py-20 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-[24px] bg-[#401B8C] p-8 text-white shadow-[0_22px_55px_rgba(64,27,140,.2)] sm:p-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.17em] text-kbc-gold-500">Learn with specialists</p><h2 className="mt-4 !text-3xl !leading-tight !text-white sm:!text-4xl">Find the right professional route for your goals.</h2><p className="mt-4 text-sm leading-7 text-white/70">Talk to the KBC team about programmes, expert-led sessions and organisational development.</p></div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"><NavigationButton className="!bg-kbc-gold-500 !text-[#25102f] hover:!bg-white" to="/courses" variant="accent">Explore programmes</NavigationButton><NavigationButton to="/contact" variant="inverse">Speak to our team</NavigationButton></div>
        </div>
      </section>
    </div>
  );
}
