import type { Story } from "@/types/content";
import { programmes } from "@/pages/home/employers/data";

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
  external?: boolean;
  ctaLabel: string;
  isFeatured?: boolean;
};

export const fallbackStories: DisplayStory[] = [
  {
    id: "lauren-eden-sullivan",
    title: "Building breadth across a multi-property marketing role.",
    name: "Lauren-Eden Sullivan",
    role: "Digital Marketing Associate at Oceana Hotels & Restaurants",
    programme: "Marketing Executive Level 4",
    category: "Marketing",
    summary: "Lauren supports marketing across ten properties through social media, email, content, campaign planning, performance analysis and wider digital activity.",
    image: "https://kentbusinesscollege.com/wp-content/uploads/2026/07/Lauren-Eden-Sulliva.webp",
    imageAlt: "Lauren-Eden Sullivan",
    href: "https://www.linkedin.com/in/lauren-eden-sullivan-3457bb195/",
    external: true,
    ctaLabel: "View learner profile",
    isFeatured: true,
  },
  {
    id: "rachel-king",
    title: "Continuing to develop without needing to leave a valued role.",
    name: "Rachel King",
    programme: "Marketing Manager Level 6",
    category: "Marketing",
    summary: "Rachel chose the apprenticeship to stay current, embrace new concepts and become even stronger in a role she already values.",
    image: "https://kentbusinesscollege.com/wp-content/uploads/2026/07/Rachel-King.webp",
    imageAlt: "Rachel King",
    href: "https://www.linkedin.com/in/racheljking/",
    external: true,
    ctaLabel: "View learner profile",
  },
  {
    id: "corinna-denbow",
    title: "Connecting more than a decade of experience with formal theory.",
    name: "Corinna Denbow",
    role: "Marketing Manager at Clevertouch",
    programme: "Marketing Manager Level 6",
    category: "Marketing",
    summary: "Corinna is connecting more than ten years of hands-on marketing experience with the theory behind professional marketing practice.",
    image: "https://kentbusinesscollege.com/wp-content/uploads/2026/07/Corinna-Denbow.webp",
    imageAlt: "Corinna Denbow",
    href: "https://www.linkedin.com/in/corinna-denbow-25631110/",
    external: true,
    ctaLabel: "View learner profile",
  },
  {
    id: "mark-jackson",
    title: "Using a structured framework to strengthen an established role.",
    name: "Mark Jackson",
    role: "Senior Project Manager",
    programme: "Project Control Professional Level 6",
    category: "Project Controls",
    summary: "Mark is building on established experience in systems, controls and business improvement while developing knowledge, behaviours and technical skills.",
    image: "https://kentbusinesscollege.com/wp-content/uploads/2026/07/Mark-Jackson.webp",
    imageAlt: "Mark Jackson",
    href: "https://www.linkedin.com/in/drmarkjackson/",
    external: true,
    ctaLabel: "View learner profile",
  },
  {
    id: "connor-hewitson",
    title: "Finding value in having established assumptions challenged.",
    name: "Connor Hewitson",
    programme: "Marketing Manager Level 6",
    category: "Marketing",
    summary: "Connor found that the programme challenged established views of good marketing in practical ways that mattered to his work.",
    image: "https://kentbusinesscollege.com/wp-content/uploads/2026/07/Connor-Hewitson.webp",
    imageAlt: "Connor Hewitson",
    href: "https://www.linkedin.com/in/connor-hewitson-9b9a14b2/",
    external: true,
    ctaLabel: "View learner profile",
  },
  {
    id: "edirisinghege-wimalaratne",
    title: "Applying newly structured knowledge directly in practice.",
    name: "Edirisinghege Wimalaratne",
    programme: "Marketing Executive Level 4",
    category: "Marketing",
    summary: "Edirisinghege is strengthening knowledge of insurance principles and the London Market while applying newly structured learning in practice.",
    image: "https://kentbusinesscollege.com/wp-content/uploads/2026/07/Edirisinghege-Wimalaratne.webp",
    imageAlt: "Edirisinghege Wimalaratne",
    href: "https://www.linkedin.com/in/pubudu-wimalaratne-fcii-acim-chartered-insurer-b1211442/",
    external: true,
    ctaLabel: "View learner profile",
  },
  {
    id: "abigail-reece",
    title: "Moving from instinctive delivery towards more structured practice.",
    name: "Abigail Reece",
    role: "Marketing Manager",
    programme: "Marketing Executive Level 4",
    category: "Marketing",
    summary: "Abigail is using the apprenticeship to add structure and theory to hands-on marketing experience gained in a fast-paced SaaS environment.",
    image: "https://kentbusinesscollege.com/wp-content/uploads/2026/07/Abigail-Reece.webp",
    imageAlt: "Abigail Reece",
    href: "https://www.linkedin.com/in/abigailkreece/",
    external: true,
    ctaLabel: "View learner profile",
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
    href: `/stories/${story.slug}`,
    ctaLabel: "Read case study",
    isFeatured: story.isFeatured,
  };
}

export const outcomes = [
  {
    number: "01",
    label: "Experience",
    title: "Start with real responsibility.",
    description: "Learners enter with active roles, existing judgement and practical challenges rather than learning in isolation.",
  },
  {
    number: "02",
    label: "Structure",
    title: "Connect practice to recognised theory.",
    description: "Frameworks and concepts help professionals understand why approaches work and where practice can improve.",
  },
  {
    number: "03",
    label: "Application",
    title: "Use learning inside the workplace.",
    description: "The stories describe campaign delivery, systems, controls, analysis, planning and other activity grounded in current work.",
  },
  {
    number: "04",
    label: "Reflection",
    title: "Challenge assumptions and build confidence.",
    description: "Progress can mean stronger judgement, renewed confidence or deeper capability in a role, not only a change of job title.",
  },
];

export const learningPathways = [programmes[2], programmes[3], programmes[1]];
