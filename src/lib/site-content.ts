import { useQuery } from "@tanstack/react-query";
import {
  homeImpactMetrics,
  homeImpactCountries,
  kitCatalog,
  partnerLogos,
  siteEvents,
  teamMembers,
  curriculumAgeGroups,
  type SiteEvent,
  type EventOrganization,
  type HomeImpactCountry,
  type HomeImpactMetric,
  type KitCatalogItem,
  type SupporterLogo,
  type TeamMember,
  type CurriculumAgeGroup,
} from "@/lib/site-data";
import {
  curriculumPagesFallback,
  type CurriculumPage,
} from "@/lib/curriculum-content";

export type WorkshopItem = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  registrationLink?: string;
};

export type SiteContentKey =
  | "events"
  | "impact_metrics"
  | "impact_countries"
  | "kits"
  | "workshops"
  | "supporters"
  | "home_professionals"
  | "team_members"
  | "curriculum_age_groups"
  | "curriculum_pages";

export type SiteContentMap = {
  events: SiteEvent[];
  impact_metrics: HomeImpactMetric[];
  impact_countries: HomeImpactCountry[];
  kits: KitCatalogItem[];
  workshops: WorkshopItem[];
  supporters: SupporterLogo[];
  home_professionals: SupporterLogo[];
  team_members: TeamMember[];
  curriculum_age_groups: CurriculumAgeGroup[];
  curriculum_pages: CurriculumPage[];
};

export const fallbackSiteContent: SiteContentMap = {
  events: siteEvents,
  impact_metrics: homeImpactMetrics,
  impact_countries: homeImpactCountries,
  kits: kitCatalog,
  workshops: [],
  supporters: partnerLogos,
  home_professionals: [],
  team_members: teamMembers,
  curriculum_age_groups: curriculumAgeGroups,
  curriculum_pages: curriculumPagesFallback,
};

export const siteContentLabels: Record<SiteContentKey, string> = {
  events: "Events",
  impact_metrics: "Impact metrics",
  impact_countries: "World map",
  kits: "Kits",
  workshops: "Workshops",
  supporters: "Supporters",
  home_professionals: "Home professionals",
  team_members: "Team members",
  curriculum_age_groups: "Curriculum age groups",
  curriculum_pages: "Curriculum pages",
};

export const fetchSiteContent = async <K extends SiteContentKey>(
  key: K,
): Promise<SiteContentMap[K]> => {
  return fallbackSiteContent[key];
};

export const fetchAllSiteContent = async (): Promise<SiteContentMap> => {
  return fallbackSiteContent;
};

export const useAllSiteContentQuery = <T = SiteContentMap>(
  select?: (data: SiteContentMap) => T,
  options: {
    staleTime?: number;
    gcTime?: number;
    refetchOnMount?: boolean | "always";
    refetchOnWindowFocus?: boolean;
  } = {},
) =>
  useQuery<SiteContentMap, Error, T>({
    queryKey: ["site-content", "all"],
    queryFn: fetchAllSiteContent,
    initialData: fallbackSiteContent,
    staleTime: options.staleTime ?? Infinity,
    gcTime: options.gcTime ?? Infinity,
    refetchOnMount: options.refetchOnMount ?? false,
    refetchOnWindowFocus: options.refetchOnWindowFocus ?? false,
    refetchOnReconnect: false,
    select,
  });

export const useSiteContentQuery = <K extends SiteContentKey>(key: K) =>
  useAllSiteContentQuery((data) => data[key]);
