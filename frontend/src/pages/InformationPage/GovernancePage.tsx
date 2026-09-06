import {
  ArrowDown,
  BarChart3,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Lightbulb,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";

import { NavigationButton } from "@/components/navigation";
import { RouteMeta } from "@/components/seo/RouteMeta";

const zohoFormUrl =
  "https://forms.zohopublic.com/ibisconsultancy1/form/GovernanceBoardEOI/formperma/65YUCGdJQ48FCsLf6iW1sBNw6syR5mLU2EWbZ99sS8E";

const keyDetails = [
  {
    title: "Responsibilities",
    body: "Strategic oversight, policy approval, financial stewardship, risk management, and ensuring regulatory compliance.",
    icon: CheckCircle2,
  },
  {
    title: "Expected Commitment",
    body: "Four full Board meetings per annum, plus committee participation and occasional strategic planning sessions.",
    icon: CalendarDays,
  },
  {
    title: "Term Length",
    body: "Initial term of three years, with the possibility of reappointment for a further term subject to performance review.",
    icon: Clock3,
  },
  {
    title: "Committee Participation",
    body: "Members are expected to serve on at least one standing committee (Audit, Finance, Academic Affairs, or Nominations).",
    icon: Users,
  },
];

const expertiseAreas = [
  {
    title: "Governance & Leadership",
    body: "Experience in board-level governance, strategic leadership, and institutional oversight within complex organisations.",
    icon: Building2,
  },
  {
    title: "Finance & Audit",
    body: "Expertise in financial management, audit processes, investment strategy, and ensuring fiscal responsibility.",
    icon: BarChart3,
  },
  {
    title: "Risk & Compliance",
    body: "Knowledge of risk management frameworks, regulatory compliance, and safeguarding institutional reputation.",
    icon: ShieldCheck,
  },
  {
    title: "Higher Education",
    body: "Deep understanding of the academic sector, educational policy, research excellence, and student experience.",
    icon: GraduationCap,
  },
  {
    title: "Legal Affairs",
    body: "Legal expertise relevant to educational institutions, including employment law, contracts, and governance frameworks.",
    icon: Scale,
  },
  {
    title: "Strategic Development",
    body: "Proven track record in strategic planning, organisational transformation, and long-term institutional development.",
    icon: Lightbulb,
  },
];

function Eyebrow({ children, centered = false, hero = false }: { children: string; centered?: boolean; hero?: boolean }) {
  return (
    <div className={centered ? "mx-auto w-fit" : "w-fit"}>
      <p className={`text-xs font-bold uppercase leading-5 tracking-[0.2em] ${hero ? "text-kbc-gold-500" : "text-primary"}`}>{children}</p>
      <span
        className={`mx-auto mt-3 block h-2 w-[calc(100%_+_24px)] -translate-x-3 rounded-[50%] border-t-[1.5px] ${hero ? "border-kbc-gold-500" : "border-primary"}`}
        aria-hidden="true"
      />
    </div>
  );
}

export function GovernancePage() {
  return (
    <div className="overflow-hidden bg-white font-body text-kbc-purple-950">
      <RouteMeta
        fallbackTitle="Governance Board Expression of Interest | Kent Business College"
        fallbackDescription="Expressions of interest for distinguished professionals wishing to contribute to the strategic governance of Kent Business College."
      />

      <section
        className="relative min-h-[100svh] overflow-hidden bg-primary pb-20 pt-[150px] text-white sm:pt-[164px]"
        aria-labelledby="governance-heading"
      >
        <img
          className="absolute inset-0 h-full w-full object-cover object-center"
          src="/assets/images/about-campus.jpg"
          alt=""
          aria-hidden="true"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-primary/85" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_78%_14%,rgba(168,120,178,0.34),transparent_27%),radial-gradient(circle_at_14%_86%,rgba(214,176,78,0.13),transparent_30%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[calc(100svh_-_230px)] w-[calc(100%_-_3rem)] max-w-[1050px] items-center justify-center max-sm:w-[calc(100%_-_2rem)]">
          <div className="flex w-full flex-col items-center text-center">
            <Eyebrow centered hero>College governance</Eyebrow>
            <h1
              id="governance-heading"
              className="mt-6 max-w-[950px] font-heading text-5xl font-medium leading-none tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[82px]"
            >
              Governance Board <span className="text-kbc-gold-400">Expression of Interest.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              We invite expressions of interest from distinguished professionals who wish to contribute to the strategic governance of the institution.
            </p>
            <NavigationButton className="mt-8 w-full sm:w-auto" variant="accent" to="#application-form">
              Apply now <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </NavigationButton>
          </div>
        </div>
      </section>

      <section className="bg-kbc-gold-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12" aria-labelledby="about-governance-heading">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <Eyebrow>About the board</Eyebrow>
            <h2 id="about-governance-heading" className="mt-6 max-w-xl font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              About the Governance Board
            </h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-kbc-purple-700">
              <p>
                The Governance Board serves as the principal strategic oversight body of the institution, entrusted with safeguarding academic standards, ensuring financial sustainability, and upholding the highest principles of institutional integrity.
              </p>
              <p>
                Board members provide independent counsel on matters of strategic importance, exercise fiduciary responsibility, and ensure that the institution remains true to its founding mission whilst adapting to the evolving landscape of higher education.
              </p>
              <p>
                We seek individuals of exceptional calibre who bring diverse perspectives, professional expertise, and a commitment to excellence in academic governance.
              </p>
            </div>
          </div>

          <article className="rounded-3xl border border-primary/10 bg-white p-6 shadow-[0_24px_70px_rgba(64,27,140,0.09)] sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Key details</p>
            <div className="mt-5 divide-y divide-primary/10">
              {keyDetails.map(({ title, body, icon: Icon }) => (
                <div className="grid grid-cols-[42px_1fr] gap-4 py-5 first:pt-0 last:pb-0" key={title}>
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-kbc-gold-400">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-kbc-purple-700">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12" aria-labelledby="expertise-heading">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow centered>Board expertise</Eyebrow>
            <h2 id="expertise-heading" className="mt-6 font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              Areas of Expertise Sought
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-kbc-purple-700">
              We are seeking individuals with distinguished expertise in one or more of the following areas:
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {expertiseAreas.map(({ title, body, icon: Icon }, index) => (
              <article
                className="group flex min-h-64 flex-col rounded-2xl border border-primary/10 bg-kbc-purple-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_22px_55px_rgba(64,27,140,0.10)]"
                key={title}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-kbc-gold-400">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-bold tracking-[0.14em] text-primary/45">0{index + 1}</span>
                </div>
                <h3 className="mt-8 font-heading text-2xl font-semibold leading-tight">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-kbc-purple-700">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="application-form"
        className="scroll-mt-28 bg-kbc-gold-50 px-3 py-20 sm:px-8 sm:py-24 lg:px-12"
        aria-labelledby="application-heading"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow centered>Expression of interest</Eyebrow>
            <h2 id="application-heading" className="mt-6 font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              Application Form
            </h2>
            <p className="mt-5 text-base leading-7 text-kbc-purple-700">
              Please complete the form below to submit your expression of interest.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-primary/10 bg-white p-2 shadow-[0_28px_80px_rgba(64,27,140,0.10)] sm:p-4">
            <iframe
              aria-label="Governance Board EOI"
              className="h-[760px] w-full rounded-2xl border-0 bg-white sm:h-[900px]"
              src={zohoFormUrl}
              title="Governance Board Expression of Interest form"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
