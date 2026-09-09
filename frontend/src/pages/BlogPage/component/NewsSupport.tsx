import { useCmsBindings } from "@/features/cms/publicContent";
import { ArrowUpRight } from "lucide-react";
import { CollegeCtaPanel } from "@/components/college/CollegeCtaPanel";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { NavigationButton } from "@/components/navigation";
import { SectionIntro, containerClass, sectionClass } from "@/pages/FundingEligibilityPage/components/shared";
import { newsCta, newsNewsletter } from "../data";

export function NewsNewsletter() {
  const cms = useCmsBindings(["news"]);
  const cmsValues = cms.resolve({ newsNewsletter });

  return cms.render((
    <section className={`${sectionClass} !bg-kbc-purple-50`} aria-labelledby="news-newsletter-title">
      <div className={`${containerClass} grid items-center gap-10 lg:grid-cols-2 lg:gap-16`}>
        <SectionIntro id="news-newsletter-title" eyebrow={cmsValues.newsNewsletter.eyebrow} title={cmsValues.newsNewsletter.title} copy={cmsValues.newsNewsletter.description} align="left" spaced={false} />
        <div className="min-w-0 rounded-2xl border border-kbc-purple-100 bg-white p-6 text-primary-dark sm:p-8">
          <NewsletterForm label={cmsValues.newsNewsletter.label} placeholder={cmsValues.newsNewsletter.placeholder} successMessage={cmsValues.newsNewsletter.success} tone="default" />
        </div>
      </div>
    </section>
  ));
}

export function NewsCta() {
  const cms = useCmsBindings(["news"]);
  const cmsValues = cms.resolve({ newsCta });

  return cms.render((
    <section className={sectionClass} aria-labelledby="news-next-step-title">
      <div className={containerClass}>
        <CollegeCtaPanel id="news-next-step-title" eyebrow={cmsValues.newsCta.eyebrow} title={cmsValues.newsCta.title} description={cmsValues.newsCta.description} actionsAlign="center" actions={cmsValues.newsCta.actions.map((action, index) => (
          <NavigationButton key={action.href} to={action.href} variant={index === 0 ? "accent" : "inverse"} className="gap-2">{action.label}<ArrowUpRight size={18} aria-hidden="true" /></NavigationButton>
        ))} />
      </div>
    </section>
  ));
}
