import {
  ArrowRight,
  CalendarCheck2,
  ChartNoAxesColumnIncreasing,
  ClipboardCheck,
  HeartHandshake,
  UserRoundCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

type SupportItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  note?: string;
};

const supportItems: SupportItem[] = [
  {
    title: "Dedicated coaching",
    description: "Regular guidance helps you connect learning to your responsibilities and maintain progress.",
    note: "A coach connected to your professional role",
    icon: UserRoundCheck,
  },
  {
    title: "Progress reviews",
    description: "Structured reviews bring learner, employer and coach together around development priorities.",
    note: "Learner, employer and coach aligned",
    icon: CalendarCheck2,
  },
  {
    title: "Wellbeing support",
    description: "Access guidance and support designed to help you manage learning alongside professional life.",
    icon: HeartHandshake,
  },
  {
    title: "Assessment preparation",
    description: "Build evidence and prepare confidently for end-point or external assessment requirements.",
    icon: ClipboardCheck,
  },
  {
    title: "Professional community",
    description: "Join masterclasses, events and networking opportunities with other working professionals.",
    icon: UsersRound,
  },
  {
    title: "Career progression",
    description: "Understand how your programme connects to qualifications, membership and future professional routes.",
    icon: ChartNoAxesColumnIncreasing,
  },
];

const journey = ["Start", "Learn", "Review", "Evidence", "Progress"];

function SupportCard({ item }: { item: SupportItem }) {
  const Icon = item.icon;

  return (
    <article className="group flex min-h-[250px] flex-col rounded-2xl border border-[#e4ddec] bg-[#fbf9fd] p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-white hover:shadow-[0_18px_45px_rgba(39,14,73,0.1)] motion-reduce:transform-none motion-reduce:transition-none">
      <span className="flex size-12 items-center justify-center rounded-xl bg-[#f0eafb] text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white motion-reduce:transition-none">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="mt-7 text-lg font-semibold leading-snug tracking-tight text-[#17131d]">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#716a7a]">{item.description}</p>
      {item.note && <strong className="mt-auto pt-5 text-xs font-semibold leading-5 text-primary">{item.note}</strong>}
    </article>
  );
}

export function SupportThroughoutSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-28" aria-labelledby="support-throughout-title">
      <img
        className="pointer-events-none absolute -right-28 top-1/2 -z-10 hidden w-[clamp(300px,30vw,520px)] -translate-y-1/2 select-none opacity-[0.05] sm:block"
        src="/assets/patterns/kbc-horse-growth.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <header className="mx-auto max-w-[900px]">
          <FigmaSectionHeading
            id="support-throughout-title"
            eyebrow="Support throughout"
            title="You are supported as a professional"
            description="KBC combines structured programme delivery with individual guidance and workplace-focused development."
          />
        </header>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16">
          {supportItems.slice(0, 2).map((item) => <SupportCard item={item} key={item.title} />)}
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {supportItems.slice(2).map((item) => <SupportCard item={item} key={item.title} />)}
        </div>

        <ol className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2" aria-label="Your professional development journey">
          {journey.map((step, index) => (
            <li className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.13em] text-primary" key={step}>
              <span>{step}</span>
              {index < journey.length - 1 && <ArrowRight className="size-3.5 text-kbc-gold-600" aria-hidden="true" />}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
