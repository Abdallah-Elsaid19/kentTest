import { trustedOrganisationLogos } from "../../shared/trustedLogos";

export function LearnerTrustedSection() {
  const marqueeLogos = [...trustedOrganisationLogos, ...trustedOrganisationLogos];

  return (
    <section className="learner-trust !py-14 sm:!py-16 xl:!py-20" aria-labelledby="learner-trusted-title">
      <div className="learner-shell">
        <div className="learner-trust__copy">
          <span>Learn alongside professionals from</span>
          <h2 id="learner-trusted-title">Leading organisations across the UK</h2>
          <p>KBC programmes help working professionals build role-relevant capability while continuing to contribute in the workplace.</p>
        </div>
        <div className="learner-trust__logos motion-reduce:!overflow-x-auto motion-reduce:[scrollbar-width:none] motion-reduce:[&::-webkit-scrollbar]:hidden" aria-label="Organisations represented by Kent Business College learners">
          <div className="learner-trust__logos-track !flex !w-max motion-reduce:!animate-none" style={{ animationDuration: `${trustedOrganisationLogos.length * 4}s` }}>
            {marqueeLogos.map((logo, index) => (
              <div className="!flex !h-24 !w-[46vw] !max-w-[170px] !flex-none !items-center !justify-center !px-4 sm:!h-28 sm:!w-[30vw] sm:!max-w-[190px] sm:!px-5 lg:!h-[104px] lg:!w-[190px]" key={`${logo.name}-${index}`} aria-hidden={index >= trustedOrganisationLogos.length}>
                <img className="!h-auto !w-auto !max-h-12 !max-w-[110px] !object-contain !opacity-80 sm:!max-h-14 sm:!max-w-[145px] lg:!max-h-[58px] lg:!max-w-[150px]" src={logo.image} alt={index < trustedOrganisationLogos.length ? logo.name : ""} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
