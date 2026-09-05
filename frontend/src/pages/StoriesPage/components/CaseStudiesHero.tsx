import { HeroActionButtons } from "@/components/navigation";

const caseStudiesHeroImage = "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/0f73bc4266b04045946adf6c279d10db.webp";

export function CaseStudiesHero() {
  return (
    <section
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#401B8C] text-white"
      aria-labelledby="stories-hero-title"
    >
      <img className="pointer-events-none absolute inset-y-0 right-0 -z-30 h-full w-full object-cover object-center lg:w-[60%]" src={caseStudiesHeroImage} alt="" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-20 w-full bg-[#401B8C]/35 lg:w-[60%]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,#401B8C_0%,#401B8C_38%,rgba(64,27,140,.94)_52%,rgba(64,27,140,.52)_72%,rgba(64,27,140,.18)_100%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-full shadow-[inset_100px_0_120px_-30px_rgba(64,27,140,1),inset_0_-90px_105px_-38px_rgba(64,27,140,.98),inset_0_75px_95px_-45px_rgba(64,27,140,.86)] lg:w-[60%]" aria-hidden="true" />

      <div className="figma-shell kbc-page-hero-offset relative flex min-h-[100svh] items-center pb-20">
        <div className="max-w-[720px]">
          <p className="figma-eyebrow !text-kbc-gold-500">Learner case studies</p>
          <h1 className="mt-5 !text-[clamp(2.5rem,13vw,3rem)] !leading-[.94] !text-white drop-shadow-[0_5px_18px_rgba(0,0,0,.75)] sm:!text-6xl lg:!text-7xl xl:!text-[78px]" id="stories-hero-title">
            Professional learning seen through the people <span className="text-kbc-gold-500">doing the work.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/80 drop-shadow-[0_3px_10px_rgba(0,0,0,.85)] sm:text-lg">
            Explore how apprenticeships can strengthen practical capability, develop role-relevant expertise and support professional growth inside an organisation.
          </p>
          <HeroActionButtons
            primary={{ label: "Explore the stories", to: "#case-studies" }}
            secondary={{ label: "Book an information session", to: "/book-session" }}
          />
          <dl className="mt-10 grid max-w-xl gap-5 border-t border-white/15 pt-6 sm:grid-cols-2">
            <div><dt className="text-xs uppercase tracking-[.16em] text-kbc-gold-500">Applied learning</dt><dd className="mt-2 text-sm text-white/70">Workplace activity forms part of the learning.</dd></div>
            <div><dt className="text-xs uppercase tracking-[.16em] text-kbc-gold-500">Professional pathways</dt><dd className="mt-2 text-sm text-white/70">Learning supports recognised progression routes.</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
