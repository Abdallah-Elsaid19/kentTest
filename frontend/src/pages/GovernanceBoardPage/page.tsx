import { useCmsBindings } from "@/features/cms/publicContent";
import { CollegePageNav } from "@/components/college/CollegePageNav";
import { RouteMeta } from "@/components/seo/RouteMeta";
import { GovernanceHero } from "./component/GovernanceHero";
import { GovernanceMembersSection } from "./component/GovernanceMembersSection";
import {
  GovernanceAccountabilitySection,
  GovernanceAssuranceSection,
  GovernanceComplianceSection,
  GovernanceEoiSection,
  GovernanceOverviewSection,
  GovernanceStructureSection,
  ProviderStatusSection,
} from "./component/GovernanceSections";
import { governanceMeta, governancePageNav } from "./data";

export default function GovernanceBoardPage() {
  const cms = useCmsBindings(["governance"]);
  const cmsValues = cms.resolve({ governanceMeta, governancePageNav });

  return cms.render((
    <main className="bg-white">
      <RouteMeta fallbackTitle={cmsValues.governanceMeta.title} fallbackDescription={cmsValues.governanceMeta.description} />
      <GovernanceHero />
      <CollegePageNav items={cmsValues.governancePageNav} ariaLabel="Governance page sections" />
      <ProviderStatusSection />
      <GovernanceOverviewSection />
      <GovernanceStructureSection />
      <GovernanceMembersSection />
      <GovernanceAssuranceSection />
      <GovernanceAccountabilitySection />
      <GovernanceComplianceSection />
      <GovernanceEoiSection />
    </main>
  ));
}
