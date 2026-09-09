import { useCmsBindings } from "@/features/cms/publicContent";
import { CollegePageNav as SharedCollegePageNav } from "@/components/college/CollegePageNav";
import { pageNavigation } from "../data";

export function CollegePageNav() {
  const cms = useCmsBindings(["college_marketing"]);
  const cmsValues = cms.resolve({ pageNavigation });

  return cms.render(<SharedCollegePageNav items={cmsValues.pageNavigation} />);
}
