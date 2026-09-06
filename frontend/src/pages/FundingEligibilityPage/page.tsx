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
  return (
    <div className="kbc-figma-home overflow-x-clip bg-white font-body text-[#24152f] motion-reduce:[&_*]:!scroll-auto motion-reduce:[&_*]:!duration-[.01ms] motion-reduce:[&_*::after]:!duration-[.01ms] motion-reduce:[&_*::before]:!duration-[.01ms]">
      <RouteMeta
        fallbackTitle={seo.title}
        fallbackDescription={seo.description}
        seo={{
          title: seo.title,
          description: seo.description,
          canonical: `${environment.VITE_SITE_URL}/funding-eligibility`,
          openGraph: { title: seo.title, description: seo.description },
          schema: [
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: seo.title,
              description: seo.description,
              url: `${environment.VITE_SITE_URL}/funding-eligibility`,
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map(([name, answer]) => ({
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
  );
}
