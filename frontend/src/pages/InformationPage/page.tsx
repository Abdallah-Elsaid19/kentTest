import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { PageHero } from "@/components/ui/PageHero";
import { FaqPage } from "./FaqPage";

export type InformationPageKind = "faq" | "partners" | "governance" | "safeguarding" | "apprentices" | "jobs" | "employerDashboard";

type Card = { title: string; body: string; href?: string; action?: string };
type PageContent = {
  eyebrow: string;
  title: string;
  summary: string;
  intro: string;
  cards: Card[];
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

const pages: Record<InformationPageKind, PageContent> = {
  faq: {
    eyebrow: "Help centre",
    title: "Frequently asked questions",
    summary: "Clear starting points for choosing a programme, checking eligibility and understanding professional learning at KBC.",
    intro: "If your question is specific to your role, employer or funding position, contact the team for guidance based on your circumstances.",
    cards: [
      { title: "How do I choose a programme?", body: "Start with the capability you use at work and the responsibility you want to build next. Compare the programme level, content and expected workplace application.", href: "/programmes", action: "Compare programmes" },
      { title: "How is eligibility checked?", body: "Eligibility depends on the selected route and your individual and employment circumstances. Submit an eligibility enquiry for an assessment.", href: "/eligibility", action: "Check eligibility" },
      { title: "How is learning delivered?", body: "KBC programmes combine structured teaching, guided study, workplace application, feedback and progress reviews." },
      { title: "Where can I get learner support?", body: "The support team can help with learning access, programme questions and the right route for raising a concern.", href: "/support", action: "Contact support" },
    ],
    primary: { label: "Ask the KBC team", href: "/contact" },
    secondary: { label: "Book an information session", href: "/book-session" },
  },
  partners: {
    eyebrow: "Partners in success",
    title: "Organisations connected to KBC",
    summary: "Employer and professional relationships help keep learning relevant to real roles, teams and sectors.",
    intro: "We work with employers and professional communities to connect development with workplace priorities and long-term capability.",
    cards: ["Watts", "VIRTUS", "Shell", "Wincanton", "BMT", "Mercedes-Benz", "University of Hull", "Indeed Flex"].map((title) => ({ title, body: "Part of the wider employer and professional network connected to Kent Business College." })),
    primary: { label: "Discuss an employer partnership", href: "/employer-agreement" },
    secondary: { label: "Contact the team", href: "/contact" },
  },
  governance: {
    eyebrow: "College governance",
    title: "Governance Board",
    summary: "Oversight that supports quality, accountability and responsible decision-making across Kent Business College.",
    intro: "The governance framework connects institutional direction with learner interests, employer needs and appropriate oversight of college activity.",
    cards: [
      { title: "Strategic oversight", body: "Review institutional direction, priorities and the college's approach to sustainable professional education." },
      { title: "Quality and accountability", body: "Support clear responsibility for standards, performance, risk and continuous improvement." },
      { title: "Learner and employer interests", body: "Keep learner experience, professional relevance and employer outcomes visible in decision-making." },
    ],
    primary: { label: "Contact Kent Business College", href: "/contact" },
  },
  safeguarding: {
    eyebrow: "Safety and wellbeing",
    title: "Safeguarding Handbook",
    summary: "How KBC supports a safe learning environment and provides routes for raising safeguarding concerns.",
    intro: "Safeguarding concerns should be shared promptly through the college support route. Do not include passwords or unnecessary highly sensitive information in an online message.",
    cards: [
      { title: "Recognise a concern", body: "A concern may relate to a learner's safety, welfare, behaviour, online experience or circumstances affecting their ability to participate safely." },
      { title: "Record what matters", body: "Keep information factual, relevant and limited to what is needed to explain the concern." },
      { title: "Report promptly", body: "Use the KBC support route so the concern can be directed to the appropriate responsible person.", href: "/support", action: "Raise a concern" },
      { title: "Immediate danger", body: "If somebody is in immediate danger, contact the appropriate emergency service before using a routine college enquiry route." },
    ],
    primary: { label: "Contact KBC Support", href: "/support" },
    secondary: { label: "General contact", href: "/contact" },
  },
  apprentices: {
    eyebrow: "For apprentices",
    title: "Build capability through work",
    summary: "Connect structured learning with genuine responsibilities, professional support and recognised progression.",
    intro: "Use this hub to compare programmes, understand eligibility, access learner support and see how other professionals apply learning at work.",
    cards: [
      { title: "Find your programme", body: "Compare pathways across project management, project controls, marketing and leadership.", href: "/programmes", action: "View programmes" },
      { title: "Check your route", body: "Ask the team to review the programme and eligibility route that fits your circumstances.", href: "/eligibility", action: "Check eligibility" },
      { title: "Learner support", body: "Get help with access, learning questions or concerns during your programme.", href: "/support", action: "Get support" },
      { title: "Apprentice stories", body: "See how learners connect theory, workplace evidence and professional progression.", href: "/apprentices/stories", action: "Read stories" },
    ],
    primary: { label: "Explore programmes", href: "/programmes" },
    secondary: { label: "Book an information session", href: "/book-session" },
  },
  jobs: {
    eyebrow: "Career opportunities",
    title: "Explore jobs",
    summary: "A starting point for opportunities, career direction and roles connected to professional development.",
    intro: "Live vacancies and external application destinations will be linked here when approved. KBC will not request passwords through this page.",
    cards: [
      { title: "Understand your direction", body: "Use programme and career conversations to identify the capability and responsibility you want to build next.", href: "/programmes", action: "Explore pathways" },
      { title: "Build your professional profile", body: "Connect workplace evidence, recognised learning and professional goals in a clear development story." },
      { title: "Employer opportunities", body: "Employers can discuss workforce development, progression routes and capability priorities with KBC.", href: "/employer-agreement", action: "Employer agreement" },
    ],
    primary: { label: "Contact the careers team", href: "/contact" },
  },
  employerDashboard: {
    eyebrow: "For employers",
    title: "Employer dashboard",
    summary: "Your access point for employer services, workforce development and programme support.",
    intro: "The external dashboard login will be connected here when its approved destination is provided. You can continue with the employer agreement or contact KBC in the meantime.",
    cards: [
      { title: "Dashboard login", body: "External access link pending approval. No login details are collected on this website." },
      { title: "Employer agreement", body: "Start employer onboarding and share the workforce development route you want to discuss.", href: "/employer-agreement", action: "Open agreement" },
      { title: "Employer support", body: "Contact the team about programmes, learners, funding routes or account access.", href: "/contact", action: "Contact sales" },
    ],
    primary: { label: "Complete employer agreement", href: "/employer-agreement" },
    secondary: { label: "Contact sales", href: "/contact" },
  },
};

export default function InformationPage({ kind }: { kind: InformationPageKind }) {
  if (kind === "faq") return <FaqPage />;

  const page = pages[kind];
  return (
    <div className="bg-[#f7f4ef]">
      <RouteMeta fallbackTitle={`${page.title} | Kent Business College`} fallbackDescription={page.summary} />
      <PageHero eyebrow={page.eyebrow} title={page.title} summary={page.summary} />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">{page.intro}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {page.cards.map((card) => (
            <article className="flex min-h-56 flex-col rounded-xl border border-[#e4dde5] bg-white p-6 shadow-[0_12px_35px_rgba(37,11,48,.05)] sm:p-7" key={card.title}>
              <CheckCircle2 className="h-6 w-6 text-kbc-purple-700" aria-hidden="true" />
              <h2 className="mt-6 font-heading text-2xl font-semibold text-kbc-purple-950">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{card.body}</p>
              {card.href && <Link className="mt-auto inline-flex min-h-11 items-end gap-2 pt-5 text-sm font-semibold text-kbc-purple-700 hover:text-kbc-purple-900" to={card.href}>{card.action || "Learn more"}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>}
            </article>
          ))}
        </div>
      </section>
      <section className="bg-[#24102f] px-5 py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 lg:flex-row lg:items-center">
          <div><p className="text-xs font-bold uppercase tracking-[.18em] text-kbc-gold-400">Next step</p><h2 className="mt-3 max-w-2xl font-heading text-3xl font-semibold text-white sm:text-4xl">Speak to the right KBC team.</h2></div>
          <div className="flex flex-col gap-3 sm:flex-row"><NavigationButton variant="accent" to={page.primary.href}>{page.primary.label}</NavigationButton>{page.secondary && <NavigationButton variant="inverse" to={page.secondary.href}>{page.secondary.label}</NavigationButton>}</div>
        </div>
      </section>
    </div>
  );
}
