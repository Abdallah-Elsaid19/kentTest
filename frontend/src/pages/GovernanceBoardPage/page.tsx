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
  return (
    <main className="bg-white">
      <RouteMeta fallbackTitle={governanceMeta.title} fallbackDescription={governanceMeta.description} />
      <GovernanceHero />
      <CollegePageNav items={governancePageNav} ariaLabel="Governance page sections" />
      <ProviderStatusSection />
      <GovernanceOverviewSection />
      <GovernanceStructureSection />
      <GovernanceMembersSection />
      <GovernanceAssuranceSection />
      <GovernanceAccountabilitySection />
      <GovernanceComplianceSection />
      <GovernanceEoiSection />
    </main>
  );
}
