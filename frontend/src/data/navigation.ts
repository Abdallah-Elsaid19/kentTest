export type NavItem = {
  label: string;
  href?: string;
  external?: boolean;
  children?: { label: string; href: string; external?: boolean }[];
};

export const primaryNavigation: NavItem[] = [
  {
    label: "Colleges",
    children: [
      { label: "Project Management", href: "/college-of-project-management" },
      { label: "Project Controls", href: "/project-controls-professional-level-6" },
      { label: "Marketing", href: "/college-of-marketing" },
      { label: "Leadership", href: "/college-of-leadership" },
    ],
  },
  {
    label: "Programmes",
    children: [
      { label: "Associate Project Manager", href: "/associate-project-manager-level-4" },
      { label: "Project Controls Professional", href: "/project-controls-professional-level-6" },
      { label: "Marketing Executive", href: "/marketing-executive-level-4" },
      { label: "Marketing Manager", href: "/marketing-manager-level-6" },
    ],
  },
  {
    label: "Who We Are",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Partners", href: "/our-partners" },
      { label: "Our Experts", href: "/our-experts" },
      { label: "Careers", href: "/contact" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Case Studies", href: "/stories" },
      { label: "Events & Webinars", href: "/events" },
      { label: "Textbooks & Materials", href: "/support" },
      { label: "News & Blog", href: "/blog" },
      { label: "Awards & Recognition", href: "/about" },
    ],
  },
  {
    label: "For Learners",
    children: [
      { label: "For Learners", href: "/learners" },
      { label: "How It Works", href: "/learners#how-it-works" },
      { label: "Programmes", href: "/programmes" },
      { label: "Funding", href: "/funding-eligibility" },
      { label: "Book Info Session", href: "/book-session" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    label: "For Employers",
    children: [
      { label: "For Employers", href: "/employers" },
      { label: "How It Works", href: "/employers#how-it-works" },
      { label: "Workforce Solutions", href: "/employers#workforce-solutions" },
      { label: "Funding", href: "/employers#funding" },
      { label: "Partner With Us", href: "/employers#partner-with-us" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
