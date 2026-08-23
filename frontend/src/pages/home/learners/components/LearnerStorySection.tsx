import { ArrowLink } from "@/components/navigation";

export function LearnerStorySection() {
  return (
    <section className="learner-story !py-16 sm:!py-20 xl:!py-[118px]" id="learner-stories" aria-labelledby="learner-story-title">
      <div className="learner-shell learner-story__grid !grid-cols-1 !gap-10 xl:!grid-cols-[.9fr_1.1fr] xl:!gap-[70px]">
        <div className="learner-story__image"><img className="!h-[420px] sm:!h-[520px] xl:!h-[600px]" src="/assets/images/learner-home/learner-story.webp" alt="Kent Business College learner story" loading="lazy" /><span>Marketing Manager · Level 6</span></div>
        <div className="learner-story__copy"><span className="learner-eyebrow">Learner experience</span><h2 id="learner-story-title">Connect professional experience with recognised theory.</h2><blockquote>“The apprenticeship has been really valuable in helping me connect more than ten years of hands-on experience to proper marketing theory.”</blockquote><strong>Corinna Denbow</strong><small>Marketing Manager at Clevertouch</small><ArrowLink to="/stories">Read learner stories</ArrowLink></div>
      </div>
    </section>
  );
}
