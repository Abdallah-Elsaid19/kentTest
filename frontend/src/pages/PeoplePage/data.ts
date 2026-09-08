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

export const peopleHeroImage = "/assets/images/experts/experts-hero-split-amgad.png";
export const amgadHeroImage = "/assets/images/experts/dr-amgad-hero-original.png";

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
  {
    id: "steven-wake",
    name: "Steven Wake",
    role: "Earned Value & Project Controls Specialist",
    organisation: "APMG International and the project controls profession",
    bio: "Lead author for Earned Value Management through APMG International, contributor to project controls standards and a key figure in the Association for Project Management Chartered Status journey.",
    image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/031b05260ce4497fa63970e9f76a3ab4.webp",
    linkedIn: "https://www.linkedin.com/in/steve-wake-00636710/",
    credentials: "Earned Value Management · Project Controls · Professional Standards",
    expertise: ["Earned value management", "Project controls standards", "Professional recognition", "Capability development"],
    profile: [
      "Steven Wake is a project controls specialist whose work connects earned value management, professional standards and practical capability development.",
      "As lead author for Earned Value Management through APMG International, he has helped translate project controls principles into structured professional practice.",
      "He has also contributed to project controls standards and the Association for Project Management Chartered Status journey.",
    ],
    highlights: ["Lead author for APMG Earned Value Management", "Contributor to project controls standards", "Contributor to the APM Chartered Status journey", "Specialist in professional project controls capability"],
  },
  {
    id: "andrew-millington",
    name: "Andrew Millington",
    role: "Strategic Projects & Programmes Specialist",
    organisation: "Associate Professor and strategic P3M leader",
    bio: "Strategic leader and Associate Professor with senior project, programme and portfolio leadership experience across manufacturing, defence, technology and services.",
    image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/a2be2ade866f464cae0f60aa3bae25c4.webp",
    linkedIn: "https://www.linkedin.com/in/andrew-millington-7087711/",
    credentials: "Associate Professor · Strategic Leadership · P3M",
    expertise: ["Complex programmes", "Portfolio leadership", "Strategic delivery", "Organisational capability"],
    profile: [
      "Andrew Millington is a strategic leader and Associate Professor with senior experience across projects, programmes and portfolios.",
      "His professional perspective is grounded in leadership across manufacturing, defence, technology and services, where delivery depends on clear governance and coordinated decision-making.",
      "He supports professionals in connecting strategic intent with practical project, programme and portfolio delivery.",
    ],
    highlights: ["Senior project, programme and portfolio leadership", "Experience across manufacturing and defence", "Experience across technology and services", "Associate Professor and strategic capability specialist"],
  },
  {
    id: "femi-falodun",
    name: "Femi Falodun",
    role: "Marketing & Communications Specialist",
    organisation: "Marketing Tutor, Kent Business College",
    bio: "A marketing and communications professional with more than 12 years of experience across strategy, public relations, content, digital marketing, teaching and professional mentoring.",
    image: "/assets/images/experts/femi-falodun.jpg",
    linkedIn: "https://www.linkedin.com/in/femifalodun/",
    credentials: "CFCIM · CMktr · MBA · MRes",
    expertise: ["Marketing strategy", "Content and communications", "Customer experience", "Professional mentoring"],
    profile: [
      "Femi Falodun is a marketing and communications professional with more than 12 years of industry experience. As a Marketing Tutor at Kent Business College, he helps learners connect marketing theory with practical decisions across strategy, content, customer experience and communications.",
      "He is a Chartered Fellow of the Chartered Institute of Marketing and a Chartered Marketer. His academic background includes an MBA in Marketing, an MRes in Advanced Marketing Management and a Chartered Postgraduate Diploma in Marketing. He is also undertaking doctoral research at Kent Business School into corporate sustainability communication in emerging markets.",
      "Femi combines industry practice with teaching, coaching and mentoring. His work spans public relations, content marketing, digital marketing and strategic communications, and he contributes to the profession as a CIM mentor, writer and speaker.",
    ],
    highlights: ["Marketing Tutor at Kent Business College", "Chartered Fellow and Chartered Marketer", "Doctoral researcher at Kent Business School", "CIM mentor, industry writer and speaker"],
  },
];

export function getExpert(id: string | undefined) {
  return experts.find((expert) => expert.id === id);
}
