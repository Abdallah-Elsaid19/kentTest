export type NavItem = {
  label: string;
  href?: string;
  external?: boolean;
  children?: { label: string; href: string; external?: boolean }[];
};

export const primaryNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Colleges",
    children: [
      { label: "College of Project Controls and Project Management", href: "/college-of-project-management" },
      { label: "Associate Project Manager Level 4 with PMP", href: "/associate-project-manager-level-4" },
      { label: "Project Control Professional Level 6 with ChPP, Incorporated Cost Engineer and IPC Fellowship", href: "/project-controls-professional-level-6" },
      { label: "College of Marketing", href: "/college-of-marketing" },
      { label: "Marketing Executive Level 4 Apprenticeship with CIM Certificate Level 4 in Professional and Digital Marketing", href: "/marketing-executive-level-4" },
      { label: "Marketing Manager Level 6 Apprenticeship with CIM Diploma Level 6 in Professional and Digital Marketing", href: "/marketing-manager-level-6" },
      { label: "College of Leadership", href: "/college-of-leadership" },
      { label: "MBA ( Diploma- Level-7 )", href: "/mba-diploma-level-7" },
      { label: "Strategic management", href: "/strategic-management" },
      { label: "Human resources", href: "/human-resources" },
      { label: "Strategic Marketing", href: "/strategic-marketing" },
      { label: "Advanced Research Methods", href: "/advanced-research-methods" },
      { label: "Strategic Leadership", href: "/strategic-leadership" },
      { label: "Strategic Financial Management", href: "/strategic-financial-management" },
    ],
  },
  { label: "Courses", href: "/courses" },
  { label: "Events", href: "/events" },
  { label: "Case Studies", href: "/stories" },
  { label: "Who we are", href: "/about" },
  {
    label: "More",
    children: [
      { label: "FAQ", href: "/faq" },
      { label: "Our Experts", href: "/our-experts" },
      { label: "Blog", href: "/blog" },
      { label: "Our Partners", href: "/our-partners" },
      { label: "Governance Board", href: "/governance-board" },
      { label: "Safeguarding Handbook", href: "/safeguarding-handbook" },
      { label: "Contact Us", href: "/contact" },
      { label: "KBC Support", href: "/support" },
    ],
  },
  {
    label: "Apprentice",
    children: [
      { label: "Apprentices", href: "/apprentices" },
      { label: "Login to LMS", href: "https://kentbusinesscollege.org/", external: true },
      { label: "Login to APTEM", href: "https://kentbusinesscollege.aptem.co.uk/", external: true },
      { label: "Apprentice Stories", href: "/apprentices/stories" },
    ],
  },
  {
    label: "Employer",
    children: [
      { label: "Dashboard", href: "/employer-dashboard" },
      { label: "Explore Jobs", href: "/explore-jobs" },
      { label: "Employer Agreement", href: "/employer-agreement" },
    ],
  },
];
