import { trustedOrganisationLogos } from "../../shared/trustedLogos";

export function TrustedOrganisations() {
  const marqueeLogos = [...trustedOrganisationLogos, ...trustedOrganisationLogos];

  return (
    <section className="figma-trusted !py-16 sm:!py-20 xl:!py-24" aria-labelledby="trusted-title">
      <div className="figma-shell">
        <div className="figma-trusted__heading !max-w-full">
          <span className="figma-eyebrow !text-xs !font-bold !leading-5 !tracking-widest !uppercase">Trusted by</span>
          <h2 className="!text-4xl !font-semibold !leading-none !tracking-tight sm:!text-5xl xl:!text-6xl" id="trusted-title">Professionals from leading<br />organisations</h2>
          <p className="!text-sm !leading-relaxed sm:!text-base">Employees from respected organisations choose KBC to strengthen practical, role-ready capability.</p>
        </div>
        <div className="figma-logo-grid motion-reduce:!overflow-x-auto motion-reduce:[scrollbar-width:none] motion-reduce:[&::-webkit-scrollbar]:hidden" aria-label="Organisations whose professionals learn with Kent Business College">
          <div className="figma-logo-grid__track !flex !w-max motion-reduce:!animate-none" style={{ animationDuration: `${trustedOrganisationLogos.length * 4}s` }}>
            {marqueeLogos.map((logo, index) => (
              <div className="figma-logo-grid__item !flex !h-24 !w-[46vw] !max-w-[170px] !flex-none !items-center !justify-center !px-4 sm:!h-28 sm:!w-[30vw] sm:!max-w-[190px] sm:!px-5 lg:!h-[104px] lg:!w-[190px]" key={`${logo.name}-${index}`} aria-hidden={index >= trustedOrganisationLogos.length}>
                <img className="!h-auto !w-auto !max-h-12 !max-w-[110px] !object-contain !opacity-80 sm:!max-h-14 sm:!max-w-[145px] lg:!max-h-[58px] lg:!max-w-[150px]" src={logo.image} alt={index < trustedOrganisationLogos.length ? logo.name : ""} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
