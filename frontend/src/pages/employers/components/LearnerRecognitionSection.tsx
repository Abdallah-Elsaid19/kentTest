import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { recognitionLogos } from "../data";

export function LearnerRecognitionSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28" id="learner-recognition" aria-labelledby="learner-recognition-title">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[980px]">
          <FigmaSectionHeading
            id="learner-recognition-title"
            eyebrow="Recognition & standards"
            title="Recognised standards. Professional connections."
            description="Professional standards are built into the KBC learning experience through relevant qualifications, professional-body pathways and recognised programme frameworks."
          />
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#e4ddec] bg-[#e4ddec] sm:grid-cols-3 lg:mt-16 lg:grid-cols-4">
          {recognitionLogos.map((logo) => (
            <li className="group flex min-h-[180px] flex-col items-center justify-center bg-white p-5 text-center" key={logo.name}>
              {logo.src ? (
                <img className="h-14 max-w-[150px] object-contain transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none" src={logo.src} alt={`${logo.name} logo`} loading="lazy" decoding="async" />
              ) : (
                <span className="text-2xl font-semibold tracking-tight text-primary">{logo.name}</span>
              )}
              <span className="mt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#847b89]">{logo.description}</span>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-[760px] text-center text-xs leading-6 text-[#766d7c]">Qualifications, memberships, professional-body relationships and recognition vary by programme.</p>
      </div>
    </section>
  );
}
