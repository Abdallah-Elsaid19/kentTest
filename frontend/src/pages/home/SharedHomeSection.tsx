import { useContext, type ReactNode } from "react";
import { LoadingState } from "@/components/ui/AsyncState";
import { usePublishedHomeSection } from "@/features/cms/queries";
import type { HomeSection } from "@/features/cms/homeTypes";
import { HomeContentContext } from "./contentContext";

function PublishedSection({ section, children }: { section: HomeSection; children: ReactNode }) {
  const query = usePublishedHomeSection(section);
  if (query.isPending) return <LoadingState label="Loading published content" />;
  if (!query.data) return <div className="p-8 text-center" role="status"><p>This section is temporarily unavailable.</p><button className="mt-3 text-primary underline" onClick={() => void query.refetch()}>Try again</button></div>;
  if (!query.data[section]) return null;
  return <HomeContentContext.Provider value={query.data}>{children}</HomeContentContext.Provider>;
}

// Home/preview supply their own snapshot. Other pages request only their section.
export function SharedHomeSection({ section, children }: { section: HomeSection; children: ReactNode }) {
  const content = useContext(HomeContentContext);
  if (content) return content[section] ? children : null;
  return <PublishedSection section={section}>{children}</PublishedSection>;
}
