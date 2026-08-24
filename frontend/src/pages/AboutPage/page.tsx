import { Compass, HeartHandshake, Lightbulb, Mail, MapPin, Phone } from "lucide-react";
import { Fragment, type ReactNode } from "react";

import { ArrowLink, NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { EmptyState, LoadingState } from "@/components/ui/AsyncState";
import { usePage, usePeople, useSite } from "@/features/content/queries";
import type { Person } from "@/types/event";
import { asObject, asObjects, asText, parseAboutSections, type AboutSection } from "./schema";

const shell = "figma-shell";
const sectionSpace = "py-16 sm:py-20 lg:py-24";
const paper = "bg-[#f4f0e9]";

function SectionHeading({ eyebrow, heading, description, light = false }: { eyebrow: string; heading: string; description?: string; light?: boolean }) {
  return (
    <div className="max-w-[650px]">
      <p className={`kbc-eyebrow-arc mb-4 text-[9px] font-bold uppercase tracking-[0.2em] ${light ? "text-[#dcbb51]" : "text-[#6f2a7d]"}`}>{eyebrow}</p>
      <h2 className={`font-serif text-4xl leading-[.98] tracking-[-0.045em] sm:text-5xl lg:text-[58px] ${light ? "text-white" : "text-[#211126]"}`}>{heading}</h2>
      {description && <p className={`mt-5 max-w-xl text-sm leading-7 sm:text-base ${light ? "text-white/65" : "text-[#6f6870]"}`}>{description}</p>}
    </div>
  );
}

function Hero({ data }: { data: Record<string, unknown> }) {
  const primary = asObject(data.primaryCta);
  const secondary = asObject(data.secondaryCta);
  const image = asObject(data.image);
  return (
    <section className="relative overflow-hidden bg-[#240b30] pb-14 pt-16 text-white sm:pb-20 sm:pt-20 lg:pt-24" aria-labelledby="about-title">
      <div className="absolute -right-32 -top-40 h-96 w-96 rounded-full border border-white/10" aria-hidden="true" />
      <div className="absolute -bottom-72 -left-40 h-[520px] w-[520px] rounded-full border-[70px] border-[#54205f]/30" aria-hidden="true" />
      <div className={`${shell} relative`}>
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:gap-16">
          <div className="min-w-0">
            <p className="kbc-eyebrow-arc mb-5 text-[9px] font-bold uppercase tracking-[.22em] text-[#dcbb51]">{asText(data.eyebrow)}</p>
            <h1 id="about-title" className="max-w-2xl break-words font-serif text-[clamp(2.75rem,12vw,3.35rem)] leading-[.92] tracking-[-.055em] text-white sm:text-6xl lg:text-[70px]">
              {asText(data.heading)} <span className="text-[#dff28b]">{asText(data.highlight)}</span>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base">{asText(data.body)}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <NavigationButton variant="accent" to={asText(primary.href)}>{asText(primary.label)}</NavigationButton>
              <NavigationButton variant="inverse" to={asText(secondary.href)}>{asText(secondary.label)}</NavigationButton>
            </div>
          </div>
          <div className="mx-auto min-w-0 w-full max-w-md lg:max-w-none">
            <div className="relative">
              <div className="absolute -left-3 -top-3 h-full w-full rounded-lg border border-[#dcbb51]/60" aria-hidden="true" />
              <img className="relative aspect-[4/3] w-full max-w-full rounded-lg object-cover" src={asText(image.src)} alt={asText(image.alt)} loading="lazy" decoding="async" />
            </div>
            <div className="relative -mt-4 ml-4 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2">
              {asObjects(data.glance).map((item) => (
                <div className="bg-[#17071f] p-4" key={asText(item.id)}>
                  <span className="block text-[8px] font-bold uppercase tracking-[.16em] text-[#dcbb51]">{asText(item.label)}</span>
                  <strong className="mt-1 block text-[11px] leading-5 text-white">{asText(item.value)}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
        <dl className="relative z-10 mt-12 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 shadow-2xl sm:grid-cols-2 lg:grid-cols-4">
          {asObjects(data.stats).map((stat) => (
            <div className="bg-[#1a0823] px-5 py-5" key={asText(stat.id)}>
              <dd className="font-serif text-3xl text-white">{asText(stat.value)}</dd>
              <dt className="mt-1 text-[8px] font-semibold uppercase tracking-[.13em] text-white/55">{asText(stat.label)}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Overview({ data }: { data: Record<string, unknown> }) {
  return (
    <section className={`${sectionSpace} bg-white`} aria-labelledby="about-overview">
      <div className={`${shell} grid gap-7 lg:grid-cols-[.92fr_1.08fr] lg:gap-12`}>
        <div className="relative overflow-hidden rounded-lg bg-[#eee6ff] p-7 sm:p-9 lg:min-h-[430px]">
          <span className="absolute -bottom-5 -right-4 font-serif text-8xl text-[#7b43de]/10" aria-hidden="true">Capability</span>
          <SectionHeading eyebrow={asText(data.eyebrow)} heading={asText(data.heading)} description={asText(data.description)} />
        </div>
        <ol className="space-y-3 lg:pt-8">
          {asObjects(data.items).map((item) => (
            <li className="rounded-lg border border-[#e5dfe7] bg-white p-5 shadow-[0_8px_30px_rgba(41,17,50,.05)] sm:p-6" key={asText(item.id)}>
              <div className="grid grid-cols-[34px_1fr] gap-4">
                <span className="text-[10px] font-bold tracking-[.18em] text-[#6f2a7d]">{asText(item.number)}</span>
                <div><h3 className="font-serif text-2xl text-[#211126]">{asText(item.title)}</h3><p className="mt-2 text-sm leading-6 text-[#716a72]">{asText(item.body)}</p></div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CardGrid({ section, icon }: { section: AboutSection; icon: ReactNode }) {
  const items = asObjects(section.data.items);
  const isSupport = section.type === "aboutSupport";
  const cardTones = isSupport ? ["bg-white", "bg-[#e7f7a8]", "bg-[#eee5ff]"] : ["bg-white", "bg-white", "bg-white"];
  return (
    <section className={`${sectionSpace} ${isSupport ? paper : "bg-white"}`}>
      <div className={shell}>
        <SectionHeading eyebrow={asText(section.data.eyebrow)} heading={asText(section.data.heading)} description={asText(section.data.description)} />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((item, index) => (
            <article className={`rounded-lg border border-[#e7e0e8] p-6 sm:p-7 ${cardTones[index % cardTones.length]}`} key={asText(item.id)}>
              <div className="flex items-center justify-between text-[#6f2a7d]"><span className="grid h-9 w-9 place-items-center rounded-full bg-[#eee5ff]">{icon}</span><span className="text-[9px] font-bold tracking-[.18em]">{asText(item.number) || String(index + 1).padStart(2, "0")}</span></div>
              <h3 className="mt-7 font-serif text-2xl leading-tight text-[#211126]">{asText(item.title)}</h3>
              <p className="mt-3 text-sm leading-6 text-[#6f6870]">{asText(item.body)}</p>
              {Array.isArray(item.features) && <ul className="mt-5 space-y-2 border-t border-[#3c233f]/10 pt-5">{item.features.map((feature) => <li className="flex gap-2 text-xs leading-5 text-[#5f5961]" key={asText(feature)}><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#6f2a7d]" aria-hidden="true" />{asText(feature)}</li>)}</ul>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const domainTones: Record<string, string> = { navy: "bg-[#284765]", teal: "bg-[#11716f]", coral: "bg-gradient-to-br from-[#c94368] to-[#ec8952]", plum: "bg-[#601434]" };
function Domains({ data }: { data: Record<string, unknown> }) {
  return (
    <section className={`${sectionSpace} ${paper}`}>
      <div className={shell}>
        <SectionHeading eyebrow={asText(data.eyebrow)} heading={asText(data.heading)} description={asText(data.description)} />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {asObjects(data.items).map((item) => (
            <article className={`relative flex min-h-[340px] flex-col overflow-hidden rounded-lg p-6 text-white sm:p-8 ${domainTones[asText(item.tone)] || domainTones.plum}`} key={asText(item.id)}>
              <span className="absolute right-5 top-1 font-serif text-7xl text-white/10" aria-hidden="true">{asText(item.initials)}</span>
              <span className="text-[8px] font-bold uppercase tracking-[.2em] text-white/65">Professional domain {asText(item.number)}</span>
              <h3 className="relative mt-10 font-serif text-4xl leading-none text-white">{asText(item.title)}</h3>
              <p className="relative mt-4 max-w-md text-sm leading-6 text-white/70">{asText(item.body)}</p>
              <ul className="relative mt-5 space-y-2 border-t border-white/15 pt-4">{(item.offerings as unknown[]).map((offering) => <li className="text-xs text-white/75" key={asText(offering)}>{asText(offering)}</li>)}</ul>
              <ArrowLink className="relative mt-auto pt-5" direction="up-right" tone="inverse" to={asText(item.href)}>{asText(item.linkLabel)}</ArrowLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Learning({ data }: { data: Record<string, unknown> }) {
  const tones = ["bg-white", "bg-[#e6f7a7]", "bg-white", "bg-[#eee5ff]"];
  return (
    <section className={`${sectionSpace} ${paper}`}>
      <div className={shell}>
        <SectionHeading eyebrow={asText(data.eyebrow)} heading={asText(data.heading)} description={asText(data.description)} />
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {asObjects(data.steps).map((step, index) => (
            <li className={`min-h-52 rounded-lg border border-[#dfd9df] p-6 sm:p-7 ${tones[index % tones.length]}`} key={asText(step.id)}>
              <span className="grid h-8 w-8 place-items-center bg-[#2d1235] text-[9px] font-bold text-white">{asText(step.number)}</span>
              <h3 className="mt-7 font-serif text-2xl text-[#211126]">{asText(step.title)}</h3>
              <p className="mt-3 text-sm leading-6 text-[#6f6870]">{asText(step.body)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Purpose({ data }: { data: Record<string, unknown> }) {
  const cards = [asObject(data.vision), asObject(data.mission)];
  return (
    <section className={`${sectionSpace} bg-white`}>
      <div className={shell}>
        <SectionHeading eyebrow={asText(data.eyebrow)} heading={asText(data.heading)} />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {cards.map((item, index) => (
            <article className="relative overflow-hidden rounded-lg border border-[#e4dde5] bg-white p-7 sm:p-9" key={asText(item.label)}>
              <span className={`absolute inset-y-0 left-0 w-1 ${index ? "bg-[#d8a22e]" : "bg-[#7040df]"}`} aria-hidden="true" />
              <span className="text-[9px] font-bold uppercase tracking-[.2em] text-[#6f2a7d]">{asText(item.label)}</span>
              <h3 className="mt-7 font-serif text-3xl leading-tight text-[#211126]">{asText(item.title)}</h3>
              <p className="mt-5 text-sm leading-7 text-[#6f6870]">{asText(item.body)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline({ data }: { data: Record<string, unknown> }) {
  return (
    <section className={`${sectionSpace} ${paper}`}>
      <div className={`${shell} grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16`}>
        <SectionHeading eyebrow={asText(data.eyebrow)} heading={asText(data.heading)} description={asText(data.description)} />
        <ol className="relative border-l border-[#7a42db]/25 pl-7 sm:pl-9">
          {asObjects(data.items).map((item) => (
            <li className="relative mb-4 rounded-lg border border-[#e2dce3] bg-white p-5 last:mb-0 sm:p-6" key={asText(item.id)}>
              <span className="absolute -left-[34px] top-6 grid h-4 w-4 place-items-center rounded-full bg-[#7040df] ring-8 ring-[#f4f0e9] sm:-left-[44px]" aria-hidden="true" />
              <span className="text-[9px] font-bold uppercase tracking-[.2em] text-[#7040df]">{asText(item.year)}</span>
              <h3 className="mt-2 font-serif text-2xl text-[#211126]">{asText(item.title)}</h3>
              <p className="mt-3 text-sm leading-6 text-[#6f6870]">{asText(item.body)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Identity({ data }: { data: Record<string, unknown> }) {
  return (
    <section className={`${sectionSpace} relative overflow-hidden bg-[#250b30] text-white`} id="identity">
      <div className="absolute -bottom-60 -right-40 h-[480px] w-[480px] rounded-full border-[65px] border-[#52205e]/35" aria-hidden="true" />
      <div className={`${shell} relative`}>
        <SectionHeading eyebrow={asText(data.eyebrow)} heading={asText(data.heading)} description={asText(data.description)} light />
        <div className="mx-auto mt-10 grid max-w-[920px] items-stretch gap-4 md:grid-cols-[minmax(0,1fr)_48px_minmax(0,1fr)]">
          {asObjects(data.items).map((item, index) => (
            <Fragment key={asText(item.id)}>
              {index > 0 && (
                <span className="mx-auto grid h-11 w-11 place-items-center self-center rounded-sm bg-[#c68a08] text-xl font-bold text-white" aria-hidden="true">+</span>
              )}
              <article className="flex min-h-56 min-w-0 flex-col items-center justify-center rounded-lg border border-white/10 bg-white/[.07] p-7 text-center sm:p-9">
                <span className="grid h-12 w-12 place-items-center rounded-sm bg-white font-serif text-2xl text-[#7040df]">{asText(item.symbol)}</span>
                <h3 className="mt-7 font-serif text-3xl text-white">{asText(item.title)}</h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">{asText(item.body)}</p>
              </article>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact({ data }: { data: Record<string, unknown> }) {
  return (
    <section className={`${sectionSpace} bg-white`}>
      <div className={shell}>
        <SectionHeading eyebrow={asText(data.eyebrow)} heading={asText(data.heading)} description={asText(data.description)} />
        <dl className="mt-10 grid gap-px overflow-hidden rounded-lg bg-white/10 shadow-[0_18px_45px_rgba(37,11,48,.12)] sm:grid-cols-2 lg:grid-cols-4">
          {asObjects(data.stats).map((stat) => <div className="bg-[#250b30] p-6 text-center sm:p-7" key={asText(stat.id)}><dd className="font-serif text-4xl text-[#dcbb51]">{asText(stat.value)}</dd><dt className="mt-2 text-[8px] font-bold uppercase tracking-[.14em] text-white/60">{asText(stat.label)}</dt></div>)}
        </dl>
      </div>
    </section>
  );
}

const expertFallbackImages = ["/assets/images/figma-home/project-speaker.png", "/assets/images/figma-home/marketing-event.png", "/assets/images/figma-home/workplace-teaching.png"];
function Experts({ data, people }: { data: Record<string, unknown>; people: Person[] }) {
  const cta = asObject(data.cta);
  return (
    <section className={`${sectionSpace} ${paper}`}>
      <div className={shell}>
        <SectionHeading eyebrow={asText(data.eyebrow)} heading={asText(data.heading)} description={asText(data.description)} />
        {people.length ? <div className="mt-10 grid gap-4 md:grid-cols-3">{people.slice(0, 3).map((person, index) => <article className="flex flex-col overflow-hidden rounded-lg border border-[#e2dce3] bg-white" key={person.id}><img className="aspect-[4/3] w-full object-cover" src={person.photo?.url || expertFallbackImages[index]} alt={person.photo?.altText || `${person.name}, ${person.jobTitle}`} loading="lazy" /><div className="flex flex-1 flex-col p-6"><h3 className="font-serif text-2xl text-[#211126]">{person.name}</h3><p className="mt-2 text-xs font-semibold text-[#6f2a7d]">{person.jobTitle}</p>{person.bio && <p className="mt-3 text-sm leading-6 text-[#6f6870]">{person.bio}</p>}<ArrowLink className="mt-auto pt-5" to={asText(cta.href)}>{asText(cta.label)}</ArrowLink></div></article>)}</div> : <p className="mt-10 rounded-lg border border-dashed border-slate-300 p-8 text-sm text-slate-600">Expert profiles are being prepared for publication.</p>}
      </div>
    </section>
  );
}

function Journeys({ data }: { data: Record<string, unknown> }) {
  return (
    <section className={`${sectionSpace} ${paper}`}>
      <div className={shell}>
        <SectionHeading eyebrow={asText(data.eyebrow)} heading={asText(data.heading)} description={asText(data.description)} />
        <div className="mt-10 grid gap-4 md:grid-cols-2">{asObjects(data.items).map((item, index) => { const cta = asObject(item.cta); return <article className={`rounded-lg border p-7 sm:p-9 ${index ? "border-[#250b30] bg-[#250b30] text-white" : "border-[#e3dde4] bg-white text-[#211126]"}`} key={asText(item.id)}><span className={`text-[9px] font-bold uppercase tracking-[.2em] ${index ? "text-[#dcbb51]" : "text-[#7040df]"}`}>{asText(item.audience)}</span><h3 className={`mt-8 font-serif text-4xl leading-[1.02] ${index ? "text-white" : "text-[#211126]"}`}>{asText(item.title)}</h3><p className={`mt-5 text-sm leading-7 ${index ? "text-white/65" : "text-[#6f6870]"}`}>{asText(item.body)}</p><ArrowLink className="mt-7" tone={index ? "inverse" : "brand"} to={asText(cta.href)}>{asText(cta.label)}</ArrowLink></article>; })}</div>
      </div>
    </section>
  );
}

function Partners({ data }: { data: Record<string, unknown> }) {
  const cta = asObject(data.cta);
  return (
    <section className={`${sectionSpace} bg-white`} id="partners">
      <div className={shell}>
        <SectionHeading eyebrow={asText(data.eyebrow)} heading={asText(data.heading)} description={asText(data.description)} />
        <div className="mt-10 grid grid-cols-2 overflow-hidden border border-[#e5dfe6] sm:grid-cols-4">{asObjects(data.items).map((item) => <div className="grid min-h-24 place-items-center border-b border-r border-[#e5dfe6] bg-white p-5 text-center" key={asText(item.id)}>{asText(item.image) ? <img className="max-h-11 max-w-[130px] object-contain" src={asText(item.image)} alt={asText(item.name)} loading="lazy" /> : <strong className="font-serif text-lg font-normal text-[#211126]">{asText(item.name)}</strong>}</div>)}</div>
        <ArrowLink className="mt-7" to={asText(cta.href)}>{asText(cta.label)}</ArrowLink>
      </div>
    </section>
  );
}

function FinalCta({ data }: { data: Record<string, unknown> }) {
  const primary = asObject(data.primaryCta);
  const secondary = asObject(data.secondaryCta);
  return (
    <section className="bg-[#250b30] py-14 text-white sm:py-16">
      <div className={`${shell} grid items-center gap-9 lg:grid-cols-[1fr_auto]`}>
        <div><p className="kbc-eyebrow-arc text-[9px] font-bold uppercase tracking-[.2em] text-[#dcbb51]">{asText(data.eyebrow)}</p><h2 className="mt-5 max-w-2xl font-serif text-4xl leading-[.98] text-white sm:text-5xl">{asText(data.heading)}</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-white/65">{asText(data.body)}</p></div>
        <div className="flex min-w-56 flex-col gap-3"><NavigationButton variant="accent" to={asText(primary.href)}>{asText(primary.label)}</NavigationButton><NavigationButton variant="inverse" to={asText(secondary.href)}>{asText(secondary.label)}</NavigationButton></div>
      </div>
    </section>
  );
}

function Contact({ data, contact }: { data: Record<string, unknown>; contact?: { email?: string; phone?: string; address?: string } }) {
  const cta = asObject(data.cta);
  const details = [
    { icon: <Mail />, label: "Email", value: contact?.email, href: contact?.email ? `mailto:${contact.email}` : "" },
    { icon: <Phone />, label: "Telephone", value: contact?.phone, href: contact?.phone ? `tel:${contact.phone.replace(/\s/g, "")}` : "" },
    { icon: <MapPin />, label: "Visit us", value: contact?.address, href: "" },
  ].filter((item) => item.value);
  return <section className={`${sectionSpace} ${paper}`}><div className={`${shell} grid gap-10 lg:grid-cols-[.9fr_1.1fr]`}><SectionHeading eyebrow={asText(data.eyebrow)} heading={asText(data.heading)} description={asText(data.description)} /><div className="space-y-3">{details.map((item) => <div className="flex gap-4 rounded-lg bg-white p-5" key={item.label}><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#eee5ff] text-[#6f2a7d] [&>svg]:h-5" aria-hidden="true">{item.icon}</span><div><span className="text-[9px] font-bold uppercase tracking-[.18em] text-slate-500">{item.label}</span>{item.href ? <a className="mt-1 block break-words font-semibold text-[#211126] hover:text-[#6f2a7d]" href={item.href}>{item.value}</a> : <p className="mt-1 text-sm leading-6 text-[#211126]">{item.value}</p>}</div></div>)}<NavigationButton className="mt-3" fullWidth to={asText(cta.href)}>{asText(cta.label)}</NavigationButton></div></div></section>;
}

function Section({ section, people, contact }: { section: AboutSection; people: Person[]; contact?: { email?: string; phone?: string; address?: string } }) {
  switch (section.type) {
    case "aboutHero": return <Hero data={section.data} />;
    case "aboutOverview": return <Overview data={section.data} />;
    case "aboutPrinciples": return <CardGrid section={section} icon={<Lightbulb className="h-5 w-5" />} />;
    case "aboutDomains": return <Domains data={section.data} />;
    case "aboutLearning": return <Learning data={section.data} />;
    case "aboutSupport": return <CardGrid section={section} icon={<HeartHandshake className="h-5 w-5" />} />;
    case "aboutPurpose": return <Purpose data={section.data} />;
    case "aboutValues": return <CardGrid section={section} icon={<Compass className="h-5 w-5" />} />;
    case "aboutTimeline": return <Timeline data={section.data} />;
    case "aboutIdentity": return <Identity data={section.data} />;
    case "aboutImpact": return <Impact data={section.data} />;
    case "aboutExperts": return <Experts data={section.data} people={people} />;
    case "aboutJourneys": return <Journeys data={section.data} />;
    case "aboutPartners": return <Partners data={section.data} />;
    case "aboutFinalCta": return <FinalCta data={section.data} />;
    case "aboutContact": return <Contact data={section.data} contact={contact} />;
    default: return null;
  }
}

export default function AboutPage() {
  const page = usePage("who-we-are");
  const people = usePeople("?role=expert");
  const site = useSite();
  if (page.isLoading) return <div className="min-h-[70vh] bg-[#f4f0e9] pt-12"><LoadingState label="Loading the Kent Business College story" /></div>;
  if (page.isError || !page.data) return <div className={`${shell} py-20 text-center`} role="alert"><h1 className="font-serif text-4xl text-[#211126]">We could not load this page.</h1><p className="mt-4 text-slate-600">Please check your connection and try again.</p><NavigationButton className="mt-6" to="/about" onClick={(event) => { event.preventDefault(); void page.refetch(); }}>Try again</NavigationButton></div>;
  const sections = parseAboutSections(page.data.sections);
  return <div className="about-kbc-page kbc-figma-home overflow-hidden bg-white"><RouteMeta seo={page.data.seo} fallbackTitle={page.data.title} fallbackDescription={page.data.summary} />{sections.length ? sections.map((section) => <Section key={section.id} section={section} people={people.data?.items || []} contact={site.data?.contact} />) : <EmptyState title="Page content is being prepared" body="Approved information about Kent Business College will appear here." />}</div>;
}
