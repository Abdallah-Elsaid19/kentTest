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
      { label: "Project Controls and Project Management", href: "/college-of-project-controls-and-project-management" },
      { label: "Marketing", href: "/college-of-marketing" },
    ],
  },
  {
    label: "Programmes",
    children: [
      { label: "All Programmes", href: "/programmes" },
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
      { label: "Governance Board", href: "/governance-board" },
      { label: "Safeguarding Handbook", href: "/safeguarding-handbook" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Events", href: "/events" },
      { label: "Bookshop", href: "/bookshop" },
      { label: "Blogs & News", href: "/blogs-and-news" },
      { label: "Awards & Recognition", href: "/awards" },
    ],
  },
  {
    label: "For Learners",
    children: [
      { label: "For Learners", href: "/learners" },
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
      { label: "Employer Agreement", href: "/employer-agreement" },
      { label: "Funding", href: "/employers#funding" },
      { label: "Partner With Us", href: "/employers#partner-with-us" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
