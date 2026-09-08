import { useQuery } from "@tanstack/react-query";
import { apiGet } from "@/services/api/apiClient";
import { parseHomeDocument } from "./schema";
import type { HomeSection } from "./homeTypes";

export function publishedSectionQueryOptions(section: HomeSection) {
  return {
    queryKey: ["cms-public", "home", "section", section],
    queryFn: async () => parseHomeDocument(await apiGet(`/content/home/?section=${encodeURIComponent(section)}`), section),
    // Reuse one in-memory request for shared instances. Published changes are
    // refreshed on navigation/focus and invalidated by the dashboard.
    staleTime: 30_000,
    refetchOnMount: "always" as const,
    refetchOnWindowFocus: "always" as const,
    refetchInterval: false as const,
  };
}

export function usePublishedHomeSection(section: HomeSection) {
  return useQuery(publishedSectionQueryOptions(section));
}

export function usePublishedHome() {
  return useQuery({
    queryKey: ["cms-public", "home"], queryFn: async () => parseHomeDocument(await apiGet("/content/home/")),
    staleTime: 0, refetchInterval: 15_000, refetchOnWindowFocus: true,
  });
}
