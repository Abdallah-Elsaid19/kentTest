export type Expert = {
  id: string;
  name: string;
  role: string;
  organisation: string;
  bio: string;
  image: string;
  linkedIn: string;
  credentials: string;
  expertise: string[];
  profile: string[];
  highlights: string[];
};

export const peopleHeroImage = "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/8b2b7292e92a4453af678599ea9b7da1.webp";

export const experts: Expert[] = [
  {
    id: "stephen-jenner",
    name: "Dr. Stephen Jenner",
    role: "Managing Portfolio Specialist",
    organisation: "Chief Examiner, APMG Managing Benefits & Managing Portfolios",
    bio: "Stephen Jenner has extensive experience at senior level of the UK Senior Civil Service, where he was Director of Criminal Justice IT and benefits management adviser on a range of cross-government programmes.",
    image: "https://kentbusinesscollege.com/wp-content/uploads/2026/06/Stephen-Jenner-Project-Control-Professional-819x1024.webp",
    linkedIn: "https://www.linkedin.com/in/stephen-jenner-b8890213/",
    credentials: "Author · Chief Examiner · International Speaker",
    expertise: ["Portfolio governance", "Benefits realisation", "Strategic investment", "Public-sector transformation"],
    profile: [
      "Stephen Jenner brings senior public-sector leadership and international subject-matter expertise to portfolio and benefits management. During his UK Civil Service career, he served as Director of Criminal Justice IT and advised cross-government programmes on benefits management.",
      "Since leaving the Civil Service, he has become an internationally recognised specialist in project portfolio and benefits realisation management. His work helps leaders connect investment decisions to measurable outcomes through practical governance and benefits disciplines.",
      "Stephen is a regular international speaker and author, and designs and delivers postgraduate and corporate learning for professional audiences.",
    ],
    highlights: ["Chief Examiner for APMG Managing Benefits", "Chief Examiner for APMG Managing Portfolios", "Former Director of Criminal Justice IT", "Author and international conference speaker"],
  },
  {
    id: "ray-mead",
    name: "Dr. Ray Mead",
    role: "Project Management Consultant",
    organisation: "Founding Partner, p3m global",
    bio: "Ray is a Founding Partner at p3m global, a leading consultancy in sustainable change and strategic execution. With more than 20 years in P3M, he is a recognised thought leader and board adviser.",
    image: "https://kentbusinesscollege.com/wp-content/uploads/2026/06/Ray-Mead-Project-Control-Professional-819x1024.webp",
    linkedIn: "https://www.linkedin.com/in/raymead/",
    credentials: "MBA · PMP · Author · Executive Adviser",
    expertise: ["P3M capability", "PMO strategy", "Transformation", "Executive advisory"],
    profile: [
      "Ray Mead is a founding partner of p3m global and a specialist in organisational project, programme and portfolio capability. He works with leadership teams to make governance, delivery structures and PMOs more effective in complex change environments.",
      "His approach combines executive advice, capability assessment, targeted development and practical operating models. His professional work supports organisations in turning strategic priorities into sustainable change.",
      "Ray is the author of Delivering Successful PMOs and a regular contributor to professional conversations about transformation, organisational maturity and the future of P3M delivery.",
    ],
    highlights: ["Founding Partner at p3m global", "More than 20 years across the P3M profession", "Author of Delivering Successful PMOs", "Executive and board-level adviser"],
  },
  {
    id: "amgad-badewi",
    name: "Dr. Amgad Badewi",
    role: "Project Management Specialist",
    organisation: "Kent Business School, University of Kent",
    bio: "A highly accomplished academic and practitioner in Project and Programme Management, with a PhD from Cranfield University and extensive experience in executive education and consultancy.",
    image: "https://kentbusinesscollege.com/wp-content/uploads/2026/04/WeStream2026-337-2-805x1024.webp",
    linkedIn: "https://www.linkedin.com/in/amgadbadewi/",
    credentials: "PhD · PMP · MSP AP · ITIL",
    expertise: ["Benefits realisation", "Programme management", "Transformation governance", "Executive education"],
    profile: [
      "Dr. Amgad Badewi is an academic, consultant and executive educator in project and programme management. He holds a PhD from Cranfield University and a postgraduate teaching qualification from the University of Kent.",
      "His research and professional practice connect benefits realisation, transformation governance and organisational capability with applied delivery. His teaching and consultancy span project management, programme management, agile delivery and organisational change.",
      "Amgad has designed and delivered executive learning for international public- and private-sector organisations and contributes actively to professional and academic project-management communities.",
    ],
    highlights: ["Reader at Kent Business School", "APM Herbert Walton Prize recipient", "Contributor to PMI benefits-realisation guidance", "International executive educator and consultant"],
  },
];

export function getExpert(id: string | undefined) {
  return experts.find((expert) => expert.id === id);
}
