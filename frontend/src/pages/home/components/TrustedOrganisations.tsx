import { ArrowRight } from "lucide-react";
import { NavigationButton } from "@/components/navigation";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { trustedOrganisationLogos } from "@/components/common/trustedLogos";

export function TrustedOrganisations() {
  const marqueeLogos = [...trustedOrganisationLogos, ...trustedOrganisationLogos];

  return (
    <section className="figma-trusted !py-16 sm:!py-20 xl:!py-24" aria-labelledby="trusted-title">
      <div className="figma-shell">
        <header className="mx-auto mb-9 max-w-[780px]">
          <FigmaSectionHeading
            id="trusted-title"
            eyebrow="Trusted by"
            title="Professionals from leading organisations"
            description="Employees from respected organisations choose KBC to strengthen practical, role-ready capability."
          />
        </header>
        <div className="figma-logo-grid motion-reduce:!overflow-x-auto motion-reduce:[scrollbar-width:none] motion-reduce:[&::-webkit-scrollbar]:hidden" aria-label="Organisations whose professionals learn with Kent Business College">
          <div className="figma-logo-grid__track !flex !w-max motion-reduce:!animate-none" style={{ animationDuration: `${trustedOrganisationLogos.length * 4}s` }}>
            {marqueeLogos.map((logo, index) => (
              <div className="figma-logo-grid__item !flex !h-24 !w-[46vw] !max-w-[170px] !flex-none !items-center !justify-center !px-4 sm:!h-28 sm:!w-[30vw] sm:!max-w-[190px] sm:!px-5 lg:!h-[104px] lg:!w-[190px]" key={`${logo.name}-${index}`} aria-hidden={index >= trustedOrganisationLogos.length}>
                <img className="!h-auto !w-auto !max-h-12 !max-w-[110px] !object-contain !opacity-100 sm:!max-h-14 sm:!max-w-[145px] lg:!max-h-[58px] lg:!max-w-[150px]" src={logo.image} alt={index < trustedOrganisationLogos.length ? logo.name : ""} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center sm:mt-10">
          <NavigationButton className="!bg-[#401B8C] !px-7 !text-white hover:!bg-[#2F1468]" to="/our-partners">
            View all partner logos <ArrowRight className="ml-2" aria-hidden="true" size={17} />
          </NavigationButton>
        </div>
      </div>
    </section>
  );
}
