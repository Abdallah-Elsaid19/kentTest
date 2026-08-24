import { NavigationButton } from "@/components/navigation";

const heroPeople = [
  { name: "Lauren-Eden Sullivan", image: "https://kentbusinesscollege.com/wp-content/uploads/2026/07/Lauren-Eden-Sulliva.webp", className: "col-span-2 ml-auto w-2/3" },
  { name: "Mark Jackson", image: "/assets/people/mark-jackson.webp", className: "mt-4 sm:mt-6" },
  { name: "Corinna Denbow", image: "/assets/people/corinna-denbow.webp", className: "mt-4 sm:mt-6" },
];

export function CaseStudiesHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(122deg,#1c0d28_0%,#2e123d_55%,#23102f_100%)] text-white" aria-labelledby="stories-hero-title">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_38%,rgba(119,55,154,.38),transparent_32%),radial-gradient(circle_at_16%_86%,rgba(214,176,78,.10),transparent_30%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-12 h-80 w-80 rounded-full border border-white/10" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-8 bottom-28 h-56 w-56 rounded-full border border-kbc-gold-500/20" aria-hidden="true" />
      <div className="figma-shell relative grid min-h-0 items-center gap-14 py-16 sm:py-20 lg:min-h-[780px] lg:grid-cols-[1.02fr_.98fr] lg:py-24 xl:gap-[76px] xl:py-[118px]">
        <div className="max-w-2xl">
          <p className="figma-eyebrow !text-kbc-gold-500">Learner case studies</p>
          <h1 className="mt-5 !text-[clamp(2.5rem,13vw,3rem)] !leading-[.94] !text-white sm:!text-6xl lg:!text-7xl xl:!text-[82px]" id="stories-hero-title">
            Professional learning, seen through the people <span className="text-kbc-gold-500">doing the work.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            Explore how apprenticeships can strengthen practical capability, develop role-relevant expertise and support professional growth inside an organisation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <NavigationButton className="figma-btn figma-btn--gold" to="#case-studies" variant="accent">Explore the stories</NavigationButton>
            <NavigationButton className="figma-btn figma-btn--ghost" to="/book-session" variant="inverse">Book an information session</NavigationButton>
          </div>
          <dl className="mt-10 grid max-w-xl gap-5 border-t border-white/15 pt-6 sm:grid-cols-2">
            <div><dt className="text-xs uppercase tracking-[.16em] text-kbc-gold-500">Applied learning</dt><dd className="mt-2 text-sm text-white/70">Workplace activity forms part of the learning.</dd></div>
            <div><dt className="text-xs uppercase tracking-[.16em] text-kbc-gold-500">Professional pathways</dt><dd className="mt-2 text-sm text-white/70">Learning supports recognised progression routes.</dd></div>
          </dl>
        </div>
        <div className="relative mx-auto grid w-full max-w-xl grid-cols-2 gap-4 lg:mx-0">
          <div className="pointer-events-none absolute -inset-16 bg-[radial-gradient(ellipse_at_center,rgba(180,135,211,.28)_0%,rgba(103,48,130,.17)_42%,transparent_72%)] blur-2xl" aria-hidden="true" />
          {heroPeople.map((person) => (
            <figure className={`relative z-10 overflow-hidden rounded-2xl border border-white/15 bg-kbc-purple-900 shadow-[0_26px_60px_rgba(0,0,0,.35)] ${person.className}`} key={person.name}>
              <img className="aspect-[4/3] h-full w-full object-cover object-top" src={person.image} alt={person.name} loading="lazy" decoding="async" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-kbc-purple-950/90 to-transparent px-4 pb-3 pt-10 text-sm font-semibold text-white">{person.name}</figcaption>
            </figure>
          ))}
          <div className="absolute -left-4 top-16 z-20 max-w-52 rounded-2xl bg-white p-4 text-kbc-purple-950 shadow-[0_14px_30px_rgba(0,0,0,.23)] sm:-left-8" aria-hidden="true">
            <span className="text-[10px] font-bold uppercase tracking-[.16em] text-kbc-purple-700">Experience becomes evidence</span>
            <strong className="mt-2 block text-sm leading-5">Learners strengthen capability through real workplace practice.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
