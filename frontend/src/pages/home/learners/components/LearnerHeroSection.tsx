import { ArrowRight } from "lucide-react";
import { NavigationButton } from "@/components/navigation";

export function LearnerHeroSection() {
  return (
    <section className="learner-hero !min-h-0 !pb-16 !pt-32 sm:!pb-20 sm:!pt-36 lg:!pt-40 xl:!pb-24 xl:!pt-44" aria-labelledby="learner-hero-title">
      <div className="learner-shell learner-hero__grid !grid-cols-1 !gap-10 lg:!gap-14 xl:!grid-cols-[1.02fr_.98fr] xl:!gap-[76px]">
        <div className="learner-hero__copy">
          <span className="learner-eyebrow">For working professionals</span>
          <h1 className="kbc-hero-title" id="learner-hero-title">Build skills that move your <em>career forward.</em></h1>
          <p>Learn while you work through role-relevant apprenticeships, specialist coaching and pathways towards recognised professional qualifications.</p>
          <div className="learner-hero__actions !grid !grid-cols-1 sm:!flex">
            <NavigationButton className="learner-btn learner-btn--gold !w-full sm:!w-auto" to="#learner-programmes">Find your programme <ArrowRight aria-hidden="true" /></NavigationButton>
            <NavigationButton className="learner-btn learner-btn--light !w-full sm:!w-auto" to="/eligibility" variant="secondary">Check your eligibility</NavigationButton>
          </div>
          <div className="learner-hero__proof !grid !grid-cols-1 sm:!grid-cols-3">
            <div><strong>Learn in your role</strong><span>Apply new capability in the workplace</span></div>
            <div><strong>Professional pathways</strong><span>Progress towards recognised qualifications</span></div>
            <div><strong>Dedicated support</strong><span>Coaching, reviews and assessment preparation</span></div>
          </div>
        </div>
        <div className="learner-hero__media !mt-2 !min-h-[410px] sm:!min-h-[500px] xl:!mt-0 xl:!min-h-[520px]">
          <img className="!relative !h-[340px] !w-full sm:!h-[440px] xl:!absolute xl:!h-[455px] xl:!w-[88%]" src="/assets/images/learner-home/hero.webp" alt="A working professional presenting at a Kent Business College event" loading="lazy" decoding="async" />
          <div className="learner-hero__card !bottom-0 !w-[min(270px,78%)] !p-4 sm:!w-[300px] sm:!p-[22px]"><span>Your next step</span><strong>Find the right programme for your role.</strong><p>Compare level, duration, professional pathway and workplace outcomes.</p></div>
          <div className="learner-hero__badge !bottom-2 !right-0 !h-24 !w-24 sm:!right-5 sm:!h-[126px] sm:!w-[126px]"><span><b>Learn</b> Apply · Progress</span></div>
        </div>
      </div>
    </section>
  );
}
