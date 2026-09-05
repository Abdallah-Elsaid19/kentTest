import { RouteMeta } from "@/components/seo/RouteMeta";
import { trustedOrganisationLogos } from "@/components/common/trustedLogos";

const pageTitle = "Organisations connected to KBC";
const pageSummary =
  "Employer and professional relationships help keep learning relevant to real roles, teams and sectors.";

type PartnerLogo = (typeof trustedOrganisationLogos)[number];

function PartnerLogo({ logo }: { logo: PartnerLogo }) {
  return (
    <div className="group flex min-h-24 items-center justify-center px-3 py-5 sm:min-h-28 sm:px-5 lg:min-h-32">
      <img
        className="max-h-16 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-20 lg:max-h-24"
        src={logo.image}
        alt={logo.name}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
      />
    </div>
  );
}

export function PartnersPage() {
  return (
    <div className="overflow-hidden bg-white">
      <RouteMeta fallbackTitle={`${pageTitle} | Kent Business College`} fallbackDescription={pageSummary} />

      <section className="relative min-h-[100svh] overflow-hidden bg-primary pb-20 pt-[150px] text-white sm:pt-[164px]" aria-labelledby="partners-heading">
        <img
          className="absolute inset-0 h-full w-full object-cover object-center"
          src="https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/ebbbd02b5ed241478e0ef1152f4835e1.webp"
          alt=""
          aria-hidden="true"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-primary/80" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_14%,rgba(168,120,178,0.34),transparent_26%),radial-gradient(circle_at_16%_84%,rgba(214,176,78,0.13),transparent_30%)]" aria-hidden="true" />
        <div className="absolute left-0 top-[47%] h-0.5 w-[74px] bg-kbc-gold-400" aria-hidden="true" />
        <div className="absolute left-0 top-[calc(47%_+_11px)] h-0.5 w-[38px] bg-kbc-gold-400" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[calc(100svh_-_230px)] w-[calc(100%_-_3rem)] max-w-[930px] items-center max-sm:w-[calc(100%_-_2rem)]">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto w-fit">
              <p className="text-xs font-bold uppercase leading-5 tracking-[0.2em] text-kbc-gold-400">Our partners</p>
              <span className="mx-auto mt-3 block h-2 w-[calc(100%_+_24px)] -translate-x-3 rounded-[50%] border-t-[1.5px] border-kbc-gold-400" aria-hidden="true" />
            </div>
            <h1 id="partners-heading" className="mx-auto mt-6 max-w-4xl font-heading text-5xl font-medium leading-none tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[82px]">
              Trusted organisations, moving forward together.
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
              We work with employers and professional communities to connect development with workplace priorities and long-term capability.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-primary/10 bg-white" aria-label="Partner organisations">
        <div
          className="mx-auto w-full max-w-7xl bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
          aria-label="Organisations whose professionals learn with Kent Business College"
        >
          <div className="grid grid-cols-2 items-center gap-x-6 gap-y-5 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-7 lg:grid-cols-5 lg:gap-x-12 lg:gap-y-8">
            {trustedOrganisationLogos.map((logo) => (
              <PartnerLogo key={logo.image} logo={logo} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
