import { CollegeHeroSurface } from "@/components/college/CollegeHeroSurface";
import { ArrowRight } from "lucide-react";
import { NavigationButton } from "@/components/navigation";
import { hero } from "../data";

export function HeroSection() {
  return (
    <>
      <CollegeHeroSurface image={hero.image} titleId="pc-title">
        <div className="figma-shell figma-hero__grid !items-start sm:max-xl:!grid-cols-1">
          <div className="figma-hero__copy flex flex-col items-center text-center sm:max-xl:!mx-auto sm:max-xl:!flex sm:max-xl:!max-w-[760px] sm:max-xl:!flex-col sm:max-xl:!gap-9 sm:max-xl:!text-center sm:block xl:text-left">
            <p className="figma-hero__eyebrow !mx-auto !text-xs !font-bold !leading-5 !tracking-widest !text-[var(--color-gold)] [@media(max-height:1000px)_and_(max-width:639px)]:!mb-3 [@media(max-height:1000px)_and_(min-width:1280px)]:!mb-3 sm:max-xl:!mb-0 sm:max-xl:!text-[15px] xl:!ml-0 xl:!mr-0">{hero.eyebrow}</p>
            <h1 id="pc-title" className="!text-5xl !font-medium !leading-none !tracking-tight text-white sm:max-xl:!text-[clamp(68px,12vw,82px)] xl:!text-[82px]">
              {hero.title} <span className="text-[var(--color-gold)]">{hero.accent}</span>
            </h1>
            <p className="!text-base !leading-relaxed [@media(max-height:1000px)_and_(max-width:639px)]:!mt-4 [@media(max-height:1000px)_and_(min-width:1280px)]:!mt-4 sm:max-xl:!mt-0 sm:max-xl:!text-[27px] sm:max-xl:!leading-[1.6] xl:!text-lg">{hero.description}</p>
            <div className="figma-hero__actions w-full !flex-col !justify-center [@media(max-height:1000px)_and_(max-width:639px)]:!mt-5 [@media(max-height:1000px)_and_(max-width:639px)]:!gap-3 [@media(max-height:1000px)_and_(min-width:1280px)]:!mt-5 [@media(max-height:1000px)_and_(min-width:1280px)]:!gap-3 sm:!flex-row sm:flex-wrap sm:max-xl:!mt-0 sm:max-xl:!gap-4 xl:!justify-start">
              <NavigationButton to="#pc-programmes" variant="accent" className="!w-full gap-3 !bg-[var(--color-gold)] !text-primary-dark hover:!bg-kbc-gold-300 sm:!w-auto sm:max-xl:!min-h-14 sm:max-xl:!px-7 sm:max-xl:!text-base">{hero.primaryLabel}<ArrowRight size={18} aria-hidden="true" /></NavigationButton>
              <NavigationButton to="/book-session" variant="inverse" className="!w-full gap-3 sm:!w-auto sm:max-xl:!min-h-14 sm:max-xl:!px-7 sm:max-xl:!text-base">{hero.secondaryLabel}<ArrowRight size={18} aria-hidden="true" /></NavigationButton>
            </div>
            <ul className="mt-10 flex flex-wrap justify-center gap-2 [@media(max-height:1000px)_and_(max-width:639px)]:!mt-5 [@media(max-height:1000px)_and_(min-width:1280px)]:!mt-5 sm:max-xl:!mt-0 sm:max-xl:!gap-3 xl:justify-start" aria-label="Areas of study">
              {hero.highlights.map((highlight) => <li key={highlight} className="rounded-full border border-white/25 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/90 sm:max-xl:px-5 sm:max-xl:py-2 sm:max-xl:text-sm">{highlight}</li>)}
            </ul>
          </div>
        </div>
      </CollegeHeroSurface>
    </>
  );
}
