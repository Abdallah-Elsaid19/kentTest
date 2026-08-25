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
  linkedIn?: string;
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
    summary: "I am currently working as a Digital Marketing Associate at Oceana Hotels & Restaurants, where I am responsible for supporting marketing activity across a group of ten properties, including The Cumberland Hotel. My role is varied and fast-paced, covering social media management, email marketing, content creation, campaign planning, and performance analysis. I also contribute to wider marketing activity such as graphic design, website updates and supporting promotional campaigns across the group.",
    image: "https://kentbusinesscollege.com/wp-content/uploads/2026/07/Lauren-Eden-Sulliva.webp",
    imageAlt: "Lauren-Eden Sullivan",
    href: "/stories/lauren-eden-sullivan",
    linkedIn: "https://www.linkedin.com/in/lauren-eden-sullivan-3457bb195/",
    ctaLabel: "View learner profile",
    isFeatured: true,
  },
  {
    id: "rachel-king",
    title: "Continuing to develop without needing to leave a valued role.",
    name: "Rachel King",
    programme: "Marketing Manager Level 6",
    category: "Marketing",
    summary: "This year, I turn 50. This has been an incentive for me to review where I am in my career and personally. I am very happy in my job and don’t have any particular urge to progress, as such. However, I want to be the best I can be in my current role and I saw this course as helping me to achieve this. I don’t want my knowledge and skills to be ‘aged out’. Personally, I felt the need to demonstrate that I can still embrace new concepts and continue to develop. I’ve found that the apprenticeship has really helped me to feel I can achieve this.",
    image: "https://kentbusinesscollege.com/wp-content/uploads/2026/07/Rachel-King.webp",
    imageAlt: "Rachel King",
    href: "/stories/rachel-king",
    linkedIn: "https://www.linkedin.com/in/racheljking/",
    ctaLabel: "View learner profile",
  },
  {
    id: "corinna-denbow",
    title: "Connecting more than a decade of experience with formal theory.",
    name: "Corinna Denbow",
    role: "Marketing Manager at Clevertouch",
    programme: "Marketing Manager Level 6",
    category: "Marketing",
    summary: "I’m currently completing a Level 6 Marketing Manager apprenticeship alongside my role as Marketing Manager at Clevertouch, a global display technology company. I have been with the business for over ten years, working my way up to my current role, so I already had a lot of hands-on experience. The apprenticeship has been really valuable in helping me connect that experience to proper marketing theory.",
    image: "https://kentbusinesscollege.com/wp-content/uploads/2026/07/Corinna-Denbow.webp",
    imageAlt: "Corinna Denbow",
    href: "/stories/corinna-denbow",
    linkedIn: "https://www.linkedin.com/in/corinna-denbow-25631110/",
    ctaLabel: "View learner profile",
  },
  {
    id: "mark-jackson",
    title: "Using a structured framework to strengthen an established role.",
    name: "Mark Jackson",
    role: "Senior Project Manager",
    programme: "Project Control Professional Level 6",
    category: "Project Controls",
    summary: "How My Apprenticeship Supports My Development, and Helps Me in My Job Role. My apprenticeship has played a significant role in both my personal development and my effectiveness within my current job role as a Senior Project Manager working in systems, controls, and business improvement. It has provided me with a structured framework to build on my existing experience while developing new knowledge, behaviours, and technical skills that directly benefit my organisation and career progression.",
    image: "https://kentbusinesscollege.com/wp-content/uploads/2026/07/Mark-Jackson.webp",
    imageAlt: "Mark Jackson",
    href: "/stories/mark-jackson",
    linkedIn: "https://www.linkedin.com/in/drmarkjackson/",
    ctaLabel: "View learner profile",
  },
  {
    id: "connor-hewitson",
    title: "Finding value in having established assumptions challenged.",
    name: "Connor Hewitson",
    programme: "Marketing Manager Level 6",
    category: "Marketing",
    summary: "I’ll be honest. When I started the Level 6 Marketing Manager apprenticeship, I wasn’t entirely sure what it would add. I know the business I work in, and I had views on what good looked like. What I didn’t expect was how quickly the programme would challenge those views in ways that actually mattered.",
    image: "https://kentbusinesscollege.com/wp-content/uploads/2026/07/Connor-Hewitson.webp",
    imageAlt: "Connor Hewitson",
    href: "/stories/connor-hewitson",
    linkedIn: "https://www.linkedin.com/in/connor-hewitson-9b9a14b2/",
    ctaLabel: "View learner profile",
  },
  {
    id: "edirisinghege-wimalaratne",
    title: "Applying newly structured knowledge directly in practice.",
    name: "Edirisinghege Wimalaratne",
    programme: "Marketing Executive Level 4",
    category: "Marketing",
    summary: "So far, the apprenticeship has significantly strengthened my understanding of core insurance principles, including risk assessment, underwriting processes, policy wordings, claims considerations, and regulatory frameworks within the UK insurance market. It has also helped me build a stronger understanding of the London Market structure and how brokers and insurers collaborate to deliver tailored insurance solutions for clients. One of the most important aspects of my learning journey has been the ability to apply theory directly into practice.",
    image: "https://kentbusinesscollege.com/wp-content/uploads/2026/07/Edirisinghege-Wimalaratne.webp",
    imageAlt: "Edirisinghege Wimalaratne",
    href: "/stories/edirisinghege-wimalaratne",
    linkedIn: "https://www.linkedin.com/in/pubudu-wimalaratne-fcii-acim-chartered-insurer-b1211442/",
    ctaLabel: "View learner profile",
  },
  {
    id: "abigail-reece",
    title: "Moving from instinctive delivery towards more structured practice.",
    name: "Abigail Reece",
    role: "Marketing Manager",
    programme: "Marketing Executive Level 4",
    category: "Marketing",
    summary: "Since starting my Marketing Executive apprenticeship, it’s genuinely changed the way I see my role and how I approach my work day to day. I’m currently working as a Marketing Manager in a fast-paced SaaS environment, so I was already doing a lot of the hands-on work, planning campaigns, creating content, and managing multiple projects at once. But if I’m being honest, a lot of what I was doing came from experience, instinct, and just figuring things out as I went.",
    image: "https://kentbusinesscollege.com/wp-content/uploads/2026/07/Abigail-Reece.webp",
    imageAlt: "Abigail Reece",
    href: "/stories/abigail-reece",
    linkedIn: "https://www.linkedin.com/in/abigailkreece/",
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
