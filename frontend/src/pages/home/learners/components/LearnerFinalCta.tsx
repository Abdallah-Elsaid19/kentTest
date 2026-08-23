import { ArrowRight } from "lucide-react";
import { NavigationButton } from "@/components/navigation";

export function LearnerFinalCta() {
  return (
    <section className="learner-final !py-16 sm:!py-20 xl:!py-[118px]" id="learner-apply">
      <div className="learner-shell learner-final__box !flex-col !items-start !gap-8 !p-6 sm:!p-10 xl:!flex-row xl:!items-center xl:!gap-11 xl:!p-16"><div><span className="learner-eyebrow">Your next step</span><h2 className="!text-4xl sm:!text-5xl xl:!text-[66px]">Ready to move your career forward?</h2><p>Explore the right programme for your current role, then check eligibility or speak with the KBC team.</p></div><div className="learner-final__actions !w-full !min-w-0 !flex-col sm:!flex-row xl:!w-auto xl:!min-w-[260px] xl:!flex-col"><NavigationButton className="learner-btn learner-btn--gold !w-full" to="https://kentbusinesscollege.com/apply-now/">Start your application <ArrowRight aria-hidden="true" /></NavigationButton><NavigationButton className="learner-btn learner-btn--outline !w-full" to="/book-session" variant="secondary">Book an information session</NavigationButton></div></div>
    </section>
  );
}
