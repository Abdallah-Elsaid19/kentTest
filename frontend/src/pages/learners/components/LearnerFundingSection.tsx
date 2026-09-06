import { BadgePercent, Landmark, Sparkles } from "lucide-react";
import { ArrowLink } from "@/components/navigation";
import { FigmaSectionHeading } from "@/components/ui/FigmaSectionHeading";

export function LearnerFundingSection() {
  return (
    <section className="relative isolate scroll-mt-40 overflow-hidden bg-[#f7f4fb] py-16 sm:py-20 lg:py-28" id="funding" aria-labelledby="learner-funding-title">
      <img
        className="pointer-events-none absolute -bottom-32 -right-24 z-0 hidden w-[clamp(320px,31vw,540px)] select-none opacity-[0.055] sm:block"
        src="/assets/patterns/kbc-gold-leaf.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[900px]">
          <FigmaSectionHeading
            id="learner-funding-title"
            eyebrow="Funding"
            title="Funded to grow your workforce."
            description="Government funding covers the majority of training costs, whatever the size of your organisation. Commercial options are available for specialist development."
          />
        </div>

        <div className="mt-12 grid auto-rows-fr items-stretch gap-5 lg:mt-16 xl:grid-cols-3">
          <article className="flex min-h-[440px] flex-col rounded-2xl border border-[#e4ddec] bg-white p-7 shadow-[0_12px_35px_rgba(35,13,63,0.06)] sm:p-8">
            <span className="flex size-12 items-center justify-center rounded-xl bg-[#f1ebfb] text-primary"><Landmark className="size-6" aria-hidden="true" /></span>
            <h3 className="mt-7 text-2xl font-semibold tracking-tight text-[#17131d]">Levy-paying employers</h3>
            <p className="mt-4 text-sm leading-7 text-[#716a7a]">If your annual pay bill exceeds £3 million, you pay the Apprenticeship Levy and can use those funds to cover the full cost of training.</p>
            <div className="mt-auto rounded-xl bg-kbc-purple-50 p-5">
              <strong className="block text-3xl font-semibold text-primary">100%</strong>
              <span className="mt-1 block text-xs leading-5 text-kbc-dark-500">Funded through your Apprenticeship Levy</span>
            </div>
          </article>

          <article className="flex min-h-[440px] flex-col rounded-2xl border border-[#D6B04E]/50 bg-[#fffaf0] p-7 shadow-[0_12px_35px_rgba(74,49,8,0.07)] sm:p-8">
            <span className="flex size-12 items-center justify-center rounded-xl bg-[#F5C94F]/25 text-[#76540b]"><Sparkles className="size-6" aria-hidden="true" /></span>
            <h3 className="mt-7 text-2xl font-semibold tracking-tight text-[#17131d]">Non-levy employers</h3>
            <p className="mt-4 text-sm leading-7 text-[#716a7a]">If your pay bill is under £3 million, the government funds 95% of the training cost and you contribute just 5% as a co-investment.</p>
            <div className="mt-auto rounded-xl bg-white/80 p-5">
              <strong className="block text-3xl font-semibold text-kbc-gold-700">95%</strong>
              <span className="mt-1 block text-xs leading-5 text-kbc-dark-500">Government co-investment · 5% employer contribution</span>
            </div>
          </article>

          <article className="flex min-h-[440px] flex-col rounded-2xl border border-primary/15 bg-[#f4edfb] p-7 shadow-[0_12px_35px_rgba(35,13,63,0.06)] sm:p-8">
            <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-[#F5C94F]"><BadgePercent className="size-6" aria-hidden="true" /></span>
            <h3 className="mt-7 text-2xl font-semibold tracking-tight text-[#17131d]">IPC Bursary</h3>
            <p className="mt-4 text-sm leading-7 text-[#716a7a]">For commercial Project Controls modules, the IPC bursary reduces your investment with 50% or 75% support depending on the selected module.</p>
            <div className="mt-auto rounded-xl bg-white/70 p-5">
              <strong className="block text-3xl font-semibold text-primary">50%–75%</strong>
              <span className="mt-1 block text-xs leading-5 text-kbc-dark-500">Bursary support for commercial Project Controls modules</span>
            </div>
          </article>
        </div>

        <div className="mt-10 flex justify-center">
          <ArrowLink className="rounded-lg bg-primary px-6 py-3 text-sm !text-white hover:!text-white" to="/funding-eligibility">Explore funding in detail</ArrowLink>
        </div>
      </div>
    </section>
  );
}
