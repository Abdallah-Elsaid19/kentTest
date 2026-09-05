import { ArrowRight, Check } from "lucide-react";
import { NavigationButton } from "@/components/navigation";

export function WorkplaceStorySection() {
  return (
    <section className="figma-story !py-16 sm:!py-20 xl:!py-[118px]" aria-labelledby="story-title">
      <div className="figma-shell figma-story__grid !grid-cols-1 !gap-10 lg:!grid-cols-[1.02fr_.98fr] lg:!gap-16">
        <div className="figma-story__portrait !h-[420px] sm:!h-[520px] lg:!h-[580px]">
          <img src="/assets/images/figma-home/corinna-denbow.png" alt="Corinna Denbow" loading="lazy" />
          <span className="!text-xs !font-bold !leading-5 !tracking-widest !uppercase">Workplace story</span>
        </div>
        <article>
          <span className="figma-eyebrow !text-xs !font-bold !leading-5 !tracking-widest !uppercase">Learning applied at work</span>
          <h2 className="!text-4xl !font-semibold !leading-none !tracking-tight sm:!text-5xl xl:!text-6xl" id="story-title">Professional theory<br />connected to real<br />marketing experience.</h2>
          <blockquote className="!text-lg !font-medium !leading-relaxed sm:!text-2xl">“The apprenticeship has been really valuable in helping me connect more than ten years of hands-on experience to proper marketing theory.”</blockquote>
          <h3 className="!text-base !font-semibold !leading-tight">Corinna Denbow</h3>
          <p className="!text-sm !leading-relaxed">Marketing Manager at Clevertouch · Marketing Manager Level 6</p>
          <ul className="[&>li]:!text-sm [&>li]:!leading-relaxed">
            <li><Check aria-hidden="true" />Role-relevant development</li>
            <li><Check aria-hidden="true" />Structured professional reflection</li>
            <li><Check aria-hidden="true" />Learning connected to workplace practice</li>
          </ul>
          <NavigationButton className="figma-btn figma-btn--gold" to="/stories">Explore learner stories <ArrowRight aria-hidden="true" /></NavigationButton>
        </article>
      </div>
    </section>
  );
}
