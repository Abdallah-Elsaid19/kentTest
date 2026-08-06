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
      { label: "College of Project Controls and Project Management", href: "https://kentbusinesscollege.com/college-of-project-management/", external: true },
      { label: "Associate Project Manager Level 4 with PMP", href: "https://kentbusinesscollege.com/associate-project-manager-level-4-apprenticeship/", external: true },
      { label: "Project Control Professional Level 6 with ChPP, Incorporated Cost Engineer and IPC Fellowship", href: "https://kentbusinesscollege.com/project-control-professional-level-6/", external: true },
      { label: "College of Marketing", href: "https://kentbusinesscollege.com/college-of-marketing/", external: true },
      { label: "Marketing Executive Level 4 Apprenticeship with CIM Certificate Level 4 in Professional and Digital Marketing", href: "https://kentbusinesscollege.com/marketing-executive-level-4-apprenticeship/", external: true },
      { label: "Marketing Manager Level 6 Apprenticeship with CIM Diploma Level 6 in Professional and Digital Marketing", href: "https://kentbusinesscollege.com/marketing-manager-level-6-apprenticeship/", external: true },
      { label: "College of Leadership", href: "https://kentbusinesscollege.com/college-of-leadership/", external: true },
      { label: "MBA ( Diploma- Level-7 )", href: "https://kentbusinesscollege.com/college-of-leadership/", external: true },
      { label: "Strategic management", href: "https://kentbusinesscollege.com/college-of-leadership/", external: true },
      { label: "Human resources", href: "https://kentbusinesscollege.com/college-of-leadership/", external: true },
      { label: "Strategic Marketing", href: "https://kentbusinesscollege.com/college-of-leadership/", external: true },
      { label: "Advanced Research Methods", href: "https://kentbusinesscollege.com/college-of-leadership/", external: true },
      { label: "Strategic Leadership", href: "https://kentbusinesscollege.com/college-of-leadership/", external: true },
      { label: "Strategic Financial Management", href: "https://kentbusinesscollege.com/college-of-leadership/", external: true },
    ],
  },
  { label: "Courses", href: "/courses" },
  { label: "Events", href: "/events" },
  { label: "Who We Are", href: "/who-we-are" },
  {
    label: "More",
    children: [
      { label: "FAQ", href: "/faq" },
      { label: "Blog", href: "/blog" },
      { label: "Star Learners", href: "/star-learners" },
      { label: "Our Experts", href: "/our-experts" },
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
      { label: "Apprentices’ Stories", href: "/apprentices/stories" },
    ],
  },
  {
    label: "Employer",
    children: [
      { label: "Dashboard", href: "https://employer.kentbusinesscollege.net/", external: true },
      { label: "Explore Jobs", href: "/explore-jobs" },
      { label: "Employer Agreement", href: "/employer-agreement" },
    ],
  },
];
