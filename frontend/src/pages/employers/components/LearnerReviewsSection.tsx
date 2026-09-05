import { CheckCircle2, Star } from "lucide-react";
import { ArrowLink } from "@/components/navigation";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";
import { ratingBreakdown, trustpilotReviews } from "../data";

const ratingWidthClasses: Record<number, string> = {
  91: "w-[91%]",
  6: "w-[6%]",
  2: "w-[2%]",
  0: "w-0",
  1: "w-[1%]",
};

export function LearnerReviewsSection() {
  return (
    <section className="bg-[#f7f4fb] py-16 sm:py-20 lg:py-28" aria-labelledby="learner-reviews-title">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[900px]">
          <FigmaSectionHeading id="learner-reviews-title" eyebrow="What professionals say" title="Trusted by working professionals" />
        </div>

        <div className="mt-12 grid overflow-hidden rounded-2xl border border-[#e4ddec] bg-white shadow-[0_16px_45px_rgba(35,13,63,0.07)] lg:mt-16 lg:grid-cols-[320px_1fr]">
          <div className="border-b border-[#e4ddec] p-7 lg:border-b-0 lg:border-r sm:p-8">
            <div className="flex items-center gap-2 text-lg font-semibold text-[#17131d]"><Star className="size-6 fill-[#00b67a] text-[#00b67a]" aria-hidden="true" />Trustpilot</div>
            <strong className="mt-7 block text-6xl font-semibold leading-none tracking-tight text-[#17131d]">4.9</strong>
            <p className="mt-3 font-semibold text-[#17131d]">Excellent</p>
            <p className="mt-1 text-sm text-[#716a7a]">Based on 150+ reviews</p>
            <div className="mt-8 grid gap-2.5" aria-label="Rating breakdown">
              {ratingBreakdown.map((rating) => (
                <div className="grid grid-cols-[16px_1fr_34px] items-center gap-3 text-xs text-[#716a7a]" key={rating.stars}>
                  <span>{rating.stars}</span>
                  <span className="h-2 overflow-hidden rounded-full bg-[#eee9f2]"><span className={`block h-full rounded-full bg-[#00b67a] ${ratingWidthClasses[rating.value]}`} /></span>
                  <span>{rating.value}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-px bg-[#e8e1ee] md:grid-cols-3">
            {trustpilotReviews.map((review) => (
              <article className="flex min-h-[300px] flex-col bg-white p-6 sm:p-7" key={review.name}>
                <span className="flex items-center gap-2 text-xs font-semibold text-[#008f62]"><CheckCircle2 className="size-4" aria-hidden="true" />Verified</span>
                <blockquote className="mt-6 flex-1 text-sm leading-7 text-[#4f4756]">“{review.quote}”</blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">{review.initials}</span>
                  <div><strong className="block text-sm font-semibold text-[#17131d]">{review.name}</strong><span className="text-xs text-[#817988]">{review.date}</span></div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <ArrowLink className="text-sm" to="https://www.trustpilot.com/review/kentbusinesscollege.com" external newTab direction="up-right">Read all reviews on Trustpilot</ArrowLink>
        </div>
      </div>
    </section>
  );
}
