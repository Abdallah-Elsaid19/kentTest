import { trustedOrganisationLogos } from "@/components/common/trustedLogos";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

export function LearnerTrustedSection() {
  const logos = [...trustedOrganisationLogos, ...trustedOrganisationLogos];

  return (
    <section className="border-b border-[#e9e2f2] bg-white py-14 sm:py-16" aria-labelledby="learner-trusted-title">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[920px]">
          <FigmaSectionHeading
            id="learner-trusted-title"
            eyebrow="Trusted by leading organisations"
            title="Learn alongside professionals"
            description="KBC programmes help working professionals build role-relevant capability while continuing to contribute in the workplace."
          />
        </div>

        <div className="group relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]" aria-label="Organisations represented by Kent Business College learners">
          <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {logos.map((logo, index) => (
              <div className="flex h-20 w-36 shrink-0 items-center justify-center px-5 sm:h-24 sm:w-44" key={`${logo.name}-${index}`} aria-hidden={index >= trustedOrganisationLogos.length}>
                <img
                  className="max-h-12 max-w-[125px] object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:max-h-14 sm:max-w-[145px]"
                  src={logo.image}
                  alt={index < trustedOrganisationLogos.length ? logo.name : ""}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
