import { useQuery } from "@tanstack/react-query";

import { apiGet } from "@/services/api/apiClient";
import { endpoints } from "@/services/api/endpoints";
import { queryKeys } from "@/services/api/queryKeys";
import type { CollectionResponse } from "@/types/api";
import type { Article, ContentPage, Story } from "@/types/content";
import type { Event, Person } from "@/types/event";
import type { College, Programme } from "@/types/programme";
import type { Navigation, SiteSettings } from "@/types/site";

export const useSite = () => useQuery({ queryKey: queryKeys.site, queryFn: () => apiGet<SiteSettings>(endpoints.site) });
export const useNavigation = () => useQuery({ queryKey: queryKeys.navigation, queryFn: () => apiGet<Navigation>(endpoints.navigation) });
export const usePage = (slug: string) => useQuery({ queryKey: queryKeys.page(slug), queryFn: () => apiGet<ContentPage>(endpoints.page(slug)), enabled: Boolean(slug) });
export const useColleges = (query = "") => useQuery({ queryKey: queryKeys.colleges(query), queryFn: () => apiGet<CollectionResponse<College>>(endpoints.colleges(query)) });
export const useCollege = (slug: string) => useQuery({ queryKey: queryKeys.college(slug), queryFn: () => apiGet<College>(endpoints.college(slug)), enabled: Boolean(slug) });
export const useProgrammes = (query = "") => useQuery({ queryKey: queryKeys.programmes(query), queryFn: () => apiGet<CollectionResponse<Programme>>(endpoints.programmes(query)) });
export const useProgramme = (slug: string) => useQuery({ queryKey: queryKeys.programme(slug), queryFn: () => apiGet<Programme>(endpoints.programme(slug)), enabled: Boolean(slug) });
export const useEvents = (query = "") => useQuery({
  queryKey: queryKeys.events(query),
  queryFn: () => apiGet<CollectionResponse<Event>>(endpoints.events(query)),
  staleTime: 2 * 60 * 1_000,
  gcTime: 15 * 60 * 1_000,
  refetchInterval: 2 * 60 * 1_000,
  refetchIntervalInBackground: false,
  refetchOnWindowFocus: false,
});
export const useEvent = (slug: string) => useQuery({ queryKey: queryKeys.event(slug), queryFn: () => apiGet<Event>(endpoints.event(slug)), enabled: Boolean(slug) });
export const usePeople = (query = "") => useQuery({ queryKey: queryKeys.people(query), queryFn: () => apiGet<CollectionResponse<Person>>(endpoints.people(query)) });
export const useStories = (query = "") => useQuery({ queryKey: queryKeys.stories(query), queryFn: () => apiGet<CollectionResponse<Story>>(endpoints.stories(query)) });
export const useStory = (slug: string) => useQuery({ queryKey: queryKeys.story(slug), queryFn: () => apiGet<Story>(endpoints.story(slug)), enabled: Boolean(slug) });
export const useArticles = (query = "") => useQuery({ queryKey: queryKeys.articles(query), queryFn: () => apiGet<CollectionResponse<Article>>(endpoints.articles(query)) });
export const useArticle = (slug: string) => useQuery({ queryKey: queryKeys.article(slug), queryFn: () => apiGet<Article>(endpoints.article(slug)), enabled: Boolean(slug) });
