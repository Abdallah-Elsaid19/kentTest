import { ArrowRight } from "lucide-react";
import { NavigationButton } from "@/components/navigation";

export function HeroSection() {
  return (
    <section className="figma-hero figma-hero--video figma-hero--centered !pb-16 !pt-[140px] sm:!pb-20 sm:!pt-[154px] lg:!pb-24 xl:!pt-44" aria-labelledby="home-hero-heading">
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
      <div className="figma-shell figma-hero__grid !grid-cols-1 !gap-10">
        <div className="figma-hero__copy">
          <p className="figma-hero__eyebrow">For employers · funded workforce development</p>
          <h1 className="kbc-hero-title" id="home-hero-heading">Build capability that <span>performs at work.</span></h1>
          <p>Kent Business College develops project, project controls, marketing and leadership professionals through role-relevant apprenticeships, specialist coaching and recognised professional pathways.</p>
          <div className="figma-hero__actions !flex-col sm:!flex-row">
            <NavigationButton className="figma-btn figma-btn--gold !w-full sm:!w-auto" to="#programmes">Find your programme <ArrowRight aria-hidden="true" /></NavigationButton>
            <NavigationButton className="figma-hero__text-action !w-full sm:!w-auto" to="https://kentbusinesscollege.com/apply-now/" variant="inverse">Check your eligibility</NavigationButton>
          </div>
          <div className="figma-hero__proof">
            <div><strong className="!text-sm !font-bold !leading-tight">Learn in your role</strong><span className="!text-xs !leading-relaxed sm:!text-sm">Apply new capability in the workplace</span></div>
            <div><strong className="!text-sm !font-bold !leading-tight">Professional pathways</strong><span className="!text-xs !leading-relaxed sm:!text-sm">Progress towards recognised qualifications</span></div>
            <div><strong className="!text-sm !font-bold !leading-tight">Dedicated support</strong><span className="!text-xs !leading-relaxed sm:!text-sm">Coaching, reviews and assessment preparation</span></div>
          </div>
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
