import { useCmsBindings } from "@/features/cms/publicContent";
import { environment } from "@/app/environment";
import { RouteMeta } from "@/components/seo/RouteMeta";

import {
  AlternativeRoutesSection,
  AvailabilitySection,
  CommercialAccessSection,
  CompareOptionsSection,
  EligibilityCheckerSection,
  EligibilitySection,
  EligibilityTransitionSection,
  EmployerProjectControlsSection,
  EmployerSetupSection,
  FaqSection,
  FinalCtaSection,
  FundingRoutesSection,
  FundingPageNav,
  HeroSection,
  ImpactSection,
  KbcFundSection,
  MissionSection,
  ProgrammeFundingSection,
  ProjectControlsChoiceSection,
  SituationSection,
  WhoFundsSection,
} from "./components";
import { faqs, seo } from "./data";

export default function FundingEligibilityPage() {
  const cms = useCmsBindings(["funding"]);
  const cmsValues = cms.resolve({ seo, faqs });

  return cms.render((
    <div className="kbc-figma-home overflow-x-clip bg-white font-body text-[#24152f] motion-reduce:[&_*]:!scroll-auto motion-reduce:[&_*]:!duration-[.01ms] motion-reduce:[&_*::after]:!duration-[.01ms] motion-reduce:[&_*::before]:!duration-[.01ms]">
      <RouteMeta
        fallbackTitle={cmsValues.seo.title}
        fallbackDescription={cmsValues.seo.description}
        seo={{
          title: cmsValues.seo.title,
          description: cmsValues.seo.description,
          canonical: `${environment.VITE_SITE_URL}/funding-eligibility`,
          openGraph: { title: cmsValues.seo.title, description: cmsValues.seo.description },
          schema: [
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: cmsValues.seo.title,
              description: cmsValues.seo.description,
              url: `${environment.VITE_SITE_URL}/funding-eligibility`,
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: cmsValues.faqs.map(([name, answer]) => ({
                "@type": "Question",
                name,
                acceptedAnswer: { "@type": "Answer", text: answer },
              })),
            },
          ],
        }}
      />

      <HeroSection />
      <FundingPageNav />
      <SituationSection />
      <MissionSection />
      <FundingRoutesSection />
      <ImpactSection />
      <WhoFundsSection />
      <ProgrammeFundingSection />
      <ProjectControlsChoiceSection />
      <KbcFundSection />
      <CommercialAccessSection />
      <EmployerProjectControlsSection />
      <EligibilityTransitionSection />
      <EligibilitySection />
      <EligibilityCheckerSection />
      <AlternativeRoutesSection />
      <EmployerSetupSection />
      <CompareOptionsSection />
      <FaqSection />
      <FinalCtaSection />
      <AvailabilitySection />
    </div>
  ));
}
