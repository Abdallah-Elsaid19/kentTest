import { createContext, useContext } from "react";
import type { HomeContent, HomeSection } from "@/features/cms/homeTypes";
import type { HomeDocument } from "@/features/cms/schema";

export const HomeContentContext = createContext<HomeDocument | null>(null);
export function useHomeSection<K extends HomeSection>(key: K): HomeContent[K] {
  const content = useContext(HomeContentContext)?.[key];
  if (!content) throw new Error(`Home section ${key} is unavailable.`);
  return content as HomeContent[K];
}
