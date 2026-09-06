import { CollegePageNav as SharedCollegePageNav } from "@/components/college/CollegePageNav";
import { pageNavigation } from "../data";

export function CollegePageNav() {
  return <SharedCollegePageNav items={pageNavigation} />;
}
