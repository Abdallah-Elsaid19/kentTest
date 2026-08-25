import { NavigationButton } from "@/components/navigation";

export function JourneyCtaSection() {
  return (
    <section className="bg-kbc-purple-50 !pb-16 sm:!pb-20 xl:!pb-[118px]" aria-labelledby="journey-title">
      <div className="figma-shell">
        <div className="grid overflow-hidden rounded-[20px] border border-kbc-purple-950/10 bg-white shadow-[0_18px_45px_rgba(35,16,44,.13)] lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative grid gap-5 overflow-hidden p-5 sm:grid-cols-2 sm:gap-6 sm:p-8 lg:min-h-[560px] lg:content-center lg:grid-cols-2 xl:min-h-[640px] xl:p-10" style={{ background: "var(--color-primary)" }}>
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full border border-kbc-gold-500/20" aria-hidden="true" />
            <img className="relative z-10 aspect-square w-full rounded-2xl object-cover object-[50%_20%]" src="https://kentbusinesscollege.com/wp-content/uploads/2026/07/Abigail-Reece.webp" alt="Abigail Reece" loading="lazy" />
            <img className="relative aspect-square w-full rounded-2xl object-cover object-[50%_18%]" src="/assets/people/corinna-denbow.webp" alt="Corinna Denbow" loading="lazy" />
            <img className="relative z-20 aspect-square w-full rounded-2xl object-cover object-[50%_18%] shadow-[0_14px_30px_rgba(0,0,0,.23)]" src="/assets/people/connor-hewitson.webp" alt="Connor Hewitson" loading="lazy" />
            <img className="relative aspect-square w-full rounded-2xl object-cover object-[50%_18%] shadow-[0_14px_30px_rgba(0,0,0,.23)]" src="/assets/people/mark-jackson.webp" alt="Mark Jackson" loading="lazy" />
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
