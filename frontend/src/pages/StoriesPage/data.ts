import type { Story } from "@/types/content";
import { programmes } from "@/pages/home/components/data";

export type DisplayStory = {
  id: string;
  title: string;
  name?: string;
  role?: string;
  programme?: string;
  category: string;
  summary: string;
  image: string;
  imageAlt: string;
  href: string;
  linkedIn?: string;
  external?: boolean;
  ctaLabel: string;
  isFeatured?: boolean;
};

export const fallbackStories: DisplayStory[] = [
  {
    id: "lauren-eden-sullivan",
    title: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.title_001}}" as string),
    name: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.name_002}}" as string),
    role: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.role_003}}" as string),
    programme: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.programme_004}}" as string),
    category: "Marketing",
    summary: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.summary_005}}" as string),
    image: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.image_006}}" as string),
    imageAlt: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.image_alt_007}}" as string),
    href: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.href_008}}" as string),
    linkedIn: "https://www.linkedin.com/in/lauren-eden-sullivan-3457bb195/",
    ctaLabel: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.cta_label_009}}" as string),
    isFeatured: true,
  },
  {
    id: "rachel-king",
    title: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.title_010}}" as string),
    name: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.name_011}}" as string),
    programme: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.programme_012}}" as string),
    category: "Marketing",
    summary: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.summary_013}}" as string),
    image: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.image_014}}" as string),
    imageAlt: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.image_alt_015}}" as string),
    href: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.href_016}}" as string),
    linkedIn: "https://www.linkedin.com/in/racheljking/",
    ctaLabel: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.cta_label_017}}" as string),
  },
  {
    id: "corinna-denbow",
    title: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.title_018}}" as string),
    name: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.name_019}}" as string),
    role: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.role_020}}" as string),
    programme: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.programme_021}}" as string),
    category: "Marketing",
    summary: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.summary_022}}" as string),
    image: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.image_023}}" as string),
    imageAlt: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.image_alt_024}}" as string),
    href: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.href_025}}" as string),
    linkedIn: "https://www.linkedin.com/in/corinna-denbow-25631110/",
    ctaLabel: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.cta_label_026}}" as string),
  },
  {
    id: "mark-jackson",
    title: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.title_027}}" as string),
    name: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.name_028}}" as string),
    role: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.role_029}}" as string),
    programme: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.programme_030}}" as string),
    category: "Project Controls",
    summary: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.summary_031}}" as string),
    image: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.image_032}}" as string),
    imageAlt: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.image_alt_033}}" as string),
    href: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.href_034}}" as string),
    linkedIn: "https://www.linkedin.com/in/drmarkjackson/",
    ctaLabel: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.cta_label_035}}" as string),
  },
  {
    id: "connor-hewitson",
    title: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.title_036}}" as string),
    name: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.name_037}}" as string),
    programme: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.programme_038}}" as string),
    category: "Marketing",
    summary: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.summary_039}}" as string),
    image: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.image_040}}" as string),
    imageAlt: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.image_alt_041}}" as string),
    href: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.href_042}}" as string),
    linkedIn: "https://www.linkedin.com/in/connor-hewitson-9b9a14b2/",
    ctaLabel: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.cta_label_043}}" as string),
  },
  {
    id: "edirisinghege-wimalaratne",
    title: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.title_044}}" as string),
    name: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.name_045}}" as string),
    programme: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.programme_046}}" as string),
    category: "Marketing",
    summary: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.summary_047}}" as string),
    image: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.image_048}}" as string),
    imageAlt: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.image_alt_049}}" as string),
    href: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.href_050}}" as string),
    linkedIn: "https://www.linkedin.com/in/pubudu-wimalaratne-fcii-acim-chartered-insurer-b1211442/",
    ctaLabel: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.cta_label_051}}" as string),
  },
  {
    id: "abigail-reece",
    title: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.title_052}}" as string),
    name: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.name_053}}" as string),
    role: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.role_054}}" as string),
    programme: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.programme_055}}" as string),
    category: "Marketing",
    summary: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.summary_056}}" as string),
    image: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.image_057}}" as string),
    imageAlt: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.image_alt_058}}" as string),
    href: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.href_059}}" as string),
    linkedIn: "https://www.linkedin.com/in/abigailkreece/",
    ctaLabel: ("{{cms:case_studies.pages_stories_page_data_fallback_stories.cta_label_060}}" as string),
  },
];

function storyTypeLabel(value: string) {
  return value
    .split("-")
    .filter(Boolean)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(" ");
}

export function mapApiStory(story: Story): DisplayStory {
  const personName = story.person?.name;
  const role = [story.role, story.employer].filter(Boolean).join(" | ") || undefined;

  return {
    id: String(story.id),
    title: story.title,
    name: personName || undefined,
    role,
    programme: story.programme?.title,
    category: storyTypeLabel(story.storyType),
    summary: story.summary || story.quote || "",
    image: story.image?.url || "/assets/images/figma-home/workplace-teaching.png",
    imageAlt: story.image?.altText || personName || "Kent Business College learning session",
    href: `/case-studies/${story.slug}`,
    ctaLabel: ("{{cms:case_studies.pages_stories_page_data_cta_label.text_061}}" as string),
    isFeatured: story.isFeatured,
  };
}

export const outcomes = [
  {
    number: "01",
    label: ("{{cms:case_studies.pages_stories_page_data_outcomes.label_062}}" as string),
    title: ("{{cms:case_studies.pages_stories_page_data_outcomes.title_063}}" as string),
    description: ("{{cms:case_studies.pages_stories_page_data_outcomes.description_064}}" as string),
  },
  {
    number: "02",
    label: ("{{cms:case_studies.pages_stories_page_data_outcomes.label_065}}" as string),
    title: ("{{cms:case_studies.pages_stories_page_data_outcomes.title_066}}" as string),
    description: ("{{cms:case_studies.pages_stories_page_data_outcomes.description_067}}" as string),
  },
  {
    number: "03",
    label: ("{{cms:case_studies.pages_stories_page_data_outcomes.label_068}}" as string),
    title: ("{{cms:case_studies.pages_stories_page_data_outcomes.title_069}}" as string),
    description: ("{{cms:case_studies.pages_stories_page_data_outcomes.description_070}}" as string),
  },
  {
    number: "04",
    label: ("{{cms:case_studies.pages_stories_page_data_outcomes.label_071}}" as string),
    title: ("{{cms:case_studies.pages_stories_page_data_outcomes.title_072}}" as string),
    description: ("{{cms:case_studies.pages_stories_page_data_outcomes.description_073}}" as string),
  },
];

export const learningPathways = [programmes[2], programmes[3], programmes[1]];
