import { ProgrammeShowcaseCard } from "@/components/common/ProgrammeShowcaseCard";
import { currentIntake, programmeColleges, programmeTypeLabels, type ProgrammeSummary } from "@/data/programmes";

/** Typed catalogue adapter for the existing College programme card. */
export function ProgrammeDiscoveryCard({ programme }: { programme: ProgrammeSummary }) {
  const intake = currentIntake(programme);
  return <ProgrammeShowcaseCard
    discipline={programmeColleges[programme.college].label}
    college={programmeColleges[programme.college].title}
    title={programme.title}
    level={programme.level ? `Level ${programme.level}` : undefined}
    duration={programme.duration}
    programmeType={programme.type === "apprenticeship" ? undefined : programmeTypeLabels[programme.type]}
    description={programme.summary}
    image={programme.image}
    imageAlt={programme.imageAlt}
    href={programme.href}
    metadata={<dl className="mt-5 space-y-3 text-xs leading-6 text-[#675f70]">
      {intake && <div><dt className="inline font-semibold text-[#17131d]">Next intake: </dt><dd className="inline">{intake}</dd></div>}
      {programme.fundingLabel && <div><dt className="sr-only">Funding</dt><dd className="rounded-lg bg-kbc-purple-50 px-3 py-2 font-medium text-primary">{programme.fundingLabel}</dd></div>}
      {programme.qualification && <div><dt className="font-semibold text-[#17131d]">Professional qualification</dt><dd>{programme.qualification}</dd></div>}
      {programme.professionalRecognition?.map((recognition) => <div key={recognition}><dt className="sr-only">Professional progression</dt><dd>{recognition}</dd></div>)}
    </dl>}
  />;
}
