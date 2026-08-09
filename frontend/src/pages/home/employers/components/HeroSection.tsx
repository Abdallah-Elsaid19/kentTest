import { ArrowRight } from "lucide-react";
import { ArrowLink, NavigationButton } from "@/components/navigation";

export function HeroSection() {
  return (
    <section className="figma-hero figma-hero--video !pb-16 !pt-[140px] sm:!pb-20 sm:!pt-[154px] lg:!pb-24 xl:!pt-44" aria-labelledby="home-hero-heading">
      <video
        className="figma-hero__background-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/assets/images/figma-home/hero-group.png"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/assets/video/home-hero.webm" type="video/webm" />
        <source src="/assets/video/home-hero.mp4" type="video/mp4" />
      </video>
      <div className="figma-hero__video-overlay" aria-hidden="true" />
      <div className="figma-hero__line-motif figma-hero__line-motif--left" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="figma-hero__line-motif figma-hero__line-motif--right" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="figma-shell figma-hero__grid !grid-cols-1 !gap-10">
        <div className="figma-hero__copy">
          <p className="figma-hero__eyebrow">For employers · funded workforce development</p>
          <h1 className="!text-[clamp(2.5rem,13vw,3rem)] sm:!text-6xl lg:!text-7xl xl:!text-[82px]" id="home-hero-heading">Build capability that <span>performs at work.</span></h1>
          <p>Kent Business College develops project, project controls, marketing and leadership professionals through role-relevant apprenticeships, specialist coaching and recognised professional pathways.</p>
          <div className="figma-hero__actions !flex-col sm:!flex-row">
            <NavigationButton className="figma-btn figma-btn--gold !w-full sm:!w-auto" to="/book-session">Discuss your workforce needs <ArrowRight aria-hidden="true" /></NavigationButton>
            <ArrowLink className="figma-hero__text-action !w-full sm:!w-auto" to="#programmes" direction="down-right">Explore funded programmes</ArrowLink>
          </div>
          <p className="figma-hero__note !flex-col sm:!flex-row"><strong>Built for employed professionals.</strong><span>Learning is applied directly through workplace responsibilities and projects.</span></p>
        </div>
        <div className="figma-hero__visual !mt-4 !min-h-[420px] sm:!min-h-[500px] lg:!mt-0">
          <div className="figma-hero__domain-card"><span>Professional domains</span><strong>Project · Controls · Marketing · Leadership</strong></div>
          <img src="/assets/images/figma-home/hero-group.png" alt="Kent Business College professional learning event" fetchPriority="high" />
          <div className="figma-hero__image-note"><i aria-hidden="true" /><div><span>Pathway design</span><strong>Funding → learning → professional progression</strong></div></div>
        </div>
      </div>
    </section>
  );
}
