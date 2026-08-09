import { NavigationButton } from "@/components/navigation";

export function JourneyCtaSection() {
  return (
    <section className="bg-kbc-purple-50 !pb-16 sm:!pb-20 xl:!pb-[118px]" aria-labelledby="journey-title">
      <div className="figma-shell">
        <div className="grid overflow-hidden rounded-[20px] border border-kbc-purple-950/10 bg-white shadow-[0_18px_45px_rgba(35,16,44,.13)] lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative min-h-[360px] overflow-hidden bg-kbc-purple-950 sm:min-h-[420px]">
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full border border-kbc-gold-500/20" aria-hidden="true" />
            <img className="absolute left-5 top-8 z-10 h-[66%] w-[45%] rounded-2xl object-cover object-top sm:left-8 sm:top-10 sm:h-[70%]" src="https://kentbusinesscollege.com/wp-content/uploads/2026/07/Abigail-Reece.webp" alt="Abigail Reece" loading="lazy" />
            <img className="absolute right-5 top-6 h-[48%] w-[38%] rounded-2xl object-cover object-top sm:right-8 sm:top-8 sm:h-[52%]" src="/assets/people/corinna-denbow.webp" alt="Corinna Denbow" loading="lazy" />
            <img className="absolute bottom-7 right-7 z-20 h-[58%] w-[44%] rounded-2xl object-cover object-top shadow-[0_14px_30px_rgba(0,0,0,.23)] sm:bottom-9 sm:right-10 sm:h-[62%]" src="/assets/people/connor-hewitson.webp" alt="Connor Hewitson" loading="lazy" />
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <span className="figma-eyebrow">Add your perspective</span>
            <h2 className="mt-4 !text-4xl !leading-[1.02] text-kbc-purple-950 sm:!text-5xl xl:!text-[58px]" id="journey-title">Your professional journey could help someone take their next step.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-kbc-dark-500">Current learners and employers can speak with KBC about sharing a workplace learning story, an achievement or a reflection on professional development.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <NavigationButton className="figma-btn figma-btn--gold" to="/contact" variant="accent">Share your story</NavigationButton>
              <NavigationButton className="figma-btn !border-kbc-purple-950/15 !bg-white !text-kbc-purple-950 hover:!bg-kbc-purple-50 hover:!text-kbc-purple-700" to="/apprentices/stories" variant="secondary">View apprentice stories</NavigationButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
