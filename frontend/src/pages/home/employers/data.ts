export type CollegeKey = "projects" | "marketing" | "leadership";

export type HomeProgramme = {
  title: string;
  image: string;
  duration: string;
  recognition?: string;
  level: string;
  description: string;
  href: string;
  college: CollegeKey;
};

export const organisationLogos = [
  { name: "Crazy Bear", image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/4595895af96c4c4d9218658cad3c3944.webp" },
  { name: "University of Lincoln", image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/347e5d11627e434882f84a1935eaa5b2.webp" },
  { name: "BMT", image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/d41fcca69ced4ee19edf5f3602d7bba4.webp" },
  { name: "Nolan Business Solutions", image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/53ea37c179fe4ccbba9069eb100845a8.webp" },
  { name: "Network Rail", image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/b8214283f7614be988da19816c56a574.webp" },
  { name: "Liverpool City Council", image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/f5447dee04af4c6099e225dd30c2b827.webp" },
  { name: "Wincanton", image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/4c25df04ce73469b88478cdc5c46e105.webp" },
  { name: "West Lancashire College", image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/ff3503a090c3485da3f2d6a86f969d86.webp" },
  { name: "Watts", image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/b26010f18a3348fe92b8dbce19891671.webp" },
  { name: "London School of Economics and Political Science", image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/e627bc942684469b9dd178b3406c7bec.webp" },
  { name: "Lolly", image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/6fcac89d80884b38a37f1953d78f7f61.webp" },
  { name: "Judytia", image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/84aa2073f38f4633a76bb23595345096.webp" },
  { name: "Partner organisation 13", image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/5dd67e4ddf6e4e02b81a661ef5551836.webp" },
  { name: "Partner organisation 14", image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/7e9051fb549347e9a6212c864edc42b1.webp" },
  { name: "Partner organisation 15", image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/5105df9217d045eba0172fd4cc9dbb6d.webp" },
  { name: "Partner organisation 16", image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/7cea1542235244e08e459d0e7ee6ab6d.webp" },
  { name: "Partner organisation 17", image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/a0159d25123a42c7b5f0d74a45034539.webp" },
  { name: "Partner organisation 18", image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/0a13aaaea52c4be89a25d1b7fca46826.webp" },
  { name: "Partner organisation 19", image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/2bbe1002ee184df49500182d928c2f2b.webp" },
  { name: "Partner organisation 20", image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/61cab00535584d48be4866a63fdb3fc3.webp" },
  { name: "Partner organisation 21", image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/be8a4a24f484456eac6e5fd1ad14e719.webp" },
  { name: "Partner organisation 22", image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/a5bf37dd21ec49ce9c5401526bc0cd67.webp" },
  { name: "Partner organisation 23", image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/b0153e509a2e4c1eba48d2a60c9740d2.webp" },
  { name: "Partner organisation 24", image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/e8bf62c676b549d2b682f97d10e503ab.webp" },
];

export const colleges = [
  {
    key: "projects" as const,
    title: "College of Project Controls & Project Management",
    description:
      "Develop skilled project professionals, through official qualifications in Project Controls and Associate Project Management, supported by globally recognised certifications from PMI, APM and APMG.",
    programmes: [
      "Associate Project Manager Level 4 with PMP® & AI in Projects Certificate",
      "Project Controls Professional Level 6 with APM ChPP, CaSA ICostE & IPC Fellowship",
    ],
    href: "/college-of-project-management",
    image: "/assets/images/programme-project-management.jpg",
  },
  {
    key: "marketing" as const,
    title: "College of Marketing",
    description:
      "Fully funded CIM Level 4 and Level 6 marketing apprenticeships designed to help learners grow their careers and employers build stronger, smarter and more commercially focused marketing teams, with a pathway to Fellowship from the Institute of Marketing Professionals.",
    programmes: [
      "Marketing Executive Level 4 with CIM Certificate Level 4 in Professional and Digital Marketing",
      "Marketing Manager Level 6 with CIM Diploma Level 6 in Professional and Digital Marketing",
    ],
    href: "/college-of-marketing",
    image: "/assets/images/programme-marketing-executive.jpg",
  },
  {
    key: "leadership" as const,
    title: "College of Leadership",
    description:
      "Fully funded with any apprenticeship programme, our OTHM Level 7 Executive Leadership Programme runs on Saturdays from 9:00 to 11:00 AM, helping professionals strengthen strategic thinking, lead transformation and progress towards senior management and board-level impact.",
    programmes: [
      "Strategic management",
      "Human resource",
      "Strategic Marketing",
      "Advanced Research Methods",
      "Strategic Leadership",
      "Strategic Financial Management",
    ],
    href: "/college-of-leadership",
    image: "/assets/images/programme-leadership.jpg",
  },
];

export const programmes: HomeProgramme[] = [
  {
    title: "Associate Project Manager Level 4 with PMP® & AI in Projects Certificate",
    image: "/assets/images/programme-project-management.jpg",
    duration: "12 months",
    recognition: "PMI or APM Qualification",
    level: "Level 4",
    description:
      "Fully funded training to develop confident project managers with globally recognised project management knowledge and practical AI skills for modern project delivery.",
    href: "/associate-project-manager-level-4",
    college: "projects",
  },
  {
    title: "Project Control Professional level 6 with APM- Chartered Project Professional (APM-ChPP)",
    image: "/assets/images/programme-project-controls.jpg",
    duration: "27 months",
    recognition: "Chartered Status",
    level: "Level 6",
    description:
      "Develop advanced project controls capability through a Level 6 programme with professional pathways to APM Chartered Project Professional (ChPP), CaSA Incorporated Cost Engineer (ICostE) and Institute of Project Controls Fellowship.",
    href: "/project-controls-professional-level-6",
    college: "projects",
  },
  {
    title: "Marketing Executive Level 4 Apprenticeship CIM Certificate Level 4 in Professional and Digital Marketing",
    image: "/assets/images/programme-marketing-executive.jpg",
    duration: "12 months",
    level: "Level 4",
    description:
      "Fully funded CIM Level 4 marketing apprenticeship designed to help learners build strong professional and digital marketing skills and employers develop confident, capable and commercially focused marketing talent, with CIM Certificate Level 4 in Professional and Digital Marketing and Associate Fellowship of the Institute of Marketing Professionals.",
    href: "/marketing-executive-level-4",
    college: "marketing",
  },
  {
    title: "Marketing Manager Level 6 Apprenticeship CIM Diploma Level 6 in Professional and Digital Marketing",
    image: "/assets/images/programme-marketing-manager.jpg",
    duration: "18 months",
    level: "Level 6",
    description:
      "Fully funded CIM Level 6 marketing apprenticeship designed to help learners progress towards senior marketing roles and employers build stronger, smarter and more commercially focused marketing teams, with a pathway to CIM Chartered Marketer status and Fellowship from the Institute of Marketing Professionals.",
    href: "/marketing-manager-level-6",
    college: "marketing",
  },
  {
    title: "Diploma Level 7 in Strategy and Leadership (MBA)",
    image: "/assets/images/programme-leadership.jpg",
    duration: "18 months",
    recognition: "MBA",
    level: "Level 7",
    description:
      "Empower your senior leaders with the Level 7 Diploma in Strategy and Leadership, accredited by OTHM. This programme not only sharpens strategic thinking and leadership capability but also offers a direct MBA Top-Up pathway with Cardiff Metropolitan University – giving your organisation world-class leadership talent at minimal cost.",
    href: "/mba-diploma-level-7",
    college: "leadership",
  },
];

export const benefits = [
  {
    title: "Wellbeing & Learner Support",
    description: "Supporting you personally, professionally and academically throughout your learning journey.",
    items: [
      "Private healthcare insurance through Benenden Health",
      "Mental wellbeing self-assessment tools",
      "AI-powered Learning Management System",
      "Learner dashboards to track progress and development",
      "Original hard-copy and soft-copy learning materials",
    ],
  },
  {
    title: "Know Yourself & Build Your Career",
    description: "Helping you understand your strengths, personality, interests and career direction.",
    items: [
      "Personality traits assessment",
      "RAISEC career interest test",
      "Job-fit and career-fit assessments",
      "Personal development dashboards",
      "Career guidance to identify the right professional pathway",
    ],
  },
  {
    title: "Professional Recognition & Networking",
    description: "Connecting you with professional bodies, events and recognition opportunities.",
    items: [
      "Graduation ceremony",
      "London Masterclass events",
      "Professional body memberships linked to your programme",
      "Club memberships and networking opportunities",
      "Opportunities to build your professional profile and career confidence",
    ],
  },
];

export const achievers = [
  {
    name: "Ella Pennells",
    employer: "Black White Denim Ltd",
    role: "Buying and Marketing Manager",
    programme: "Marketing Executive Level 4 Apprenticeship, July cohort 2026",
    message: "Congratulations on your outstanding effort in the Marketing Executive Level 4 Apprenticeship, July cohort 2026. We truly appreciate your top performance and dedication for your company “Black White Denim Ltd”",
    image: "/assets/people/ella-pennells.jpg",
    employerLogo: "/assets/logos/employers/black-white-denim.png",
    linkedin: "/people",
  },
  {
    name: "Nicola Porteous",
    employer: "GTT Wireless Ltd",
    role: "Sales & Marketing Manager",
    programme: "Marketing Executive Level 4 Apprenticeship, July cohort 2026",
    message: "Congratulations on your outstanding effort in the Marketing Executive Level 4 Apprenticeship, July cohort 2026. We truly appreciate your top performance and dedication for your company “GTT Wireless Ltd”",
    image: "/assets/people/nicola-porteous.jpg",
    employerLogo: "/assets/logos/employers/gtt-wireless.png",
    linkedin: "/people",
  },
  {
    name: "Cheska Hardie",
    employer: "Bauer Media Group",
    role: "Commercial Customer Marketing Specialist",
    programme: "Marketing Manager Level 6 Apprenticeship, May cohort 2026",
    message: "Congratulations on your outstanding effort in the Marketing Manager Level 6 Apprenticeship, May cohort 2026. We truly appreciate your top performance and dedication for your company “Bauer Media Group.”",
    image: "/assets/people/cheska-hardie.jpg",
    employerLogo: "/assets/logos/employers/bauer-media-group.png",
    linkedin: "/people",
  },
  {
    name: "Leigh Millington",
    employer: "Bowker Motor Group",
    role: "Digital Marketing Executive – Paid Media – Ecommerce Growth",
    programme: "Marketing Manager Level 6 Apprenticeship, May cohort 2026",
    message: "Congratulations on your outstanding effort in the Marketing Manager Level 6 Apprenticeship, May cohort 2026. We truly appreciate your top performance and dedication for your company “Bowker Motor Group.”",
    image: "/assets/people/leigh-millington.jpg",
    employerLogo: "/assets/logos/employers/bowker-motor-group.png",
    linkedin: "/people",
  },
];

export const caseStudies = [
  {
    name: "Corinna Denbow",
    programme: "Marketing Manager Level 6",
    image: "/assets/people/corinna-denbow.webp",
    linkedin: "/people",
    quote:
      "I’m currently completing a Level 6 Marketing Manager apprenticeship alongside my role as Marketing Manager at Clevertouch, a global display technology company. I have been with the business for over ten years, working my way up to my current role, so I already had a lot of hands-on experience. The apprenticeship has been really valuable in helping me connect that experience to proper marketing theory.",
  },
  {
    name: "Mark Jackson",
    programme: "Project Control Professional Level 6",
    image: "/assets/people/mark-jackson.webp",
    linkedin: "/people",
    quote:
      "How My Apprenticeship Supports My Development, and Helps Me in My Job Role. My apprenticeship has played a significant role in both my personal development and my effectiveness within my current job role as a Senior Project Manager working in systems, controls, and business improvement. It has provided me with a structured framework to build on my existing experience while developing new knowledge, behaviours, and technical skills that directly benefit my organisation and career progression.",
  },
  {
    name: "Connor Hewitson",
    programme: "Marketing Manager Level 6",
    image: "/assets/people/connor-hewitson.webp",
    linkedin: "/people",
    quote:
      "I’ll be honest. When I started the Level 6 Marketing Manager apprenticeship, I wasn’t entirely sure what it would add. I know the business I work in, and I had views on what good looked like. What I didn’t expect was how quickly the programme would challenge those views in ways that actually mattered.",
  },
];

export const testimonials = [
  {
    name: "Gill Stoney",
    role: "Workforce Scheduling Team Manager at St John Ambulance",
    image: "/assets/people/gill-stoney.webp",
    quote:
      "It was really good to go through all the system elements, especially considering how confused we were and that we had all been together for nearly two weeks. If we had had this before the course started, it would have been much easier and far less stressful. Affan was very good at explaining the elements of the online system for recording our work and hours, and I now feel much more comfortable using it.",
  },
  {
    name: "Andrew Hurll",
    role: "Commercial Manager at SCA Group Limited",
    image: "/assets/people/andrew-hurll.webp",
    quote:
      "I am currently studying on the Executive Marketing Manager Level 4 programme at Kent Business College. The course is very well organised and delivered, and the lecturers are engaging and friendly. I am thoroughly enjoying the content, and all materials and support are easily accessible. I am looking forward to completing the course and gaining my qualification.",
  },
  {
    name: "Lauren Hiney",
    role: "Digital marketing | Strategic marketing | B2B & B2C | Measuring metrics",
    image: "/assets/people/lauren-hiney.webp",
    quote:
      "The team at Kent Business College has been extremely supportive. Since starting my diploma, I have received great advice, clear information, and excellent teaching from the team.",
  },
  {
    name: "Alicia Mouskovias",
    role: "Internal Sales and Marketing at 2B Heard and Sontronics",
    image: "/assets/people/alicia-mouskovias.webp",
    quote:
      "I am really enjoying the Level 4 Marketing training with Kent Business College. The lectures, one-to-one tutor support, and online learning platforms have all been very helpful. The resources provided make it easy to stay on track, and the experience has been extremely positive for my career development.",
  },
  {
    name: "Inga Lightley",
    role: "Administrator & Marketing Professional, YouTube Creator, Property Investor",
    image: "/assets/people/inga-lightley.webp",
    quote:
      "I am enjoying the Level 4 Executive Marketing programme at Kent Business College. The lecturers are knowledgeable and friendly, and I really enjoy the live sessions with high-quality slides and the option to rewatch recordings later. The additional quizzes also make the learning experience engaging and interactive.",
  },
  {
    name: "Dawn Taylor",
    role: "Head of Projects Roadchef",
    image: "/assets/people/dawn-taylor.webp",
    quote:
      "For all project management professionals, I would highly recommend this course. I have been enrolled for over two years and have thoroughly enjoyed it while learning a great deal of relevant content. The lecturers are excellent, the cohort is incredibly supportive, and the fact that the programme is fully funded makes it a complete win-win.",
  },
  {
    name: "Joanna Monika Jablonska",
    role: "Project Control Professional Level 6",
    image: "/assets/people/joanna-monika-jablonska.webp",
    quote:
      "Overall, my experience with the provider’s leadership and management has been very positive, with clear communication, good support, and effective programme delivery.",
  },
  {
    name: "Giles Magee",
    role: "Project Control Professional Level 6",
    image: "/assets/people/giles-magee.webp",
    quote:
      "I have had little direct experience with the management or leadership, but from the brief interactions I have had relating to it, the provider seems well organised and is very supportive of their learners.",
  },
];

export const fallbackEvents = [
  {
    id: -1,
    slug: "fully-funded-project-control-chpp-august-2026",
    title: "Fully Funded Project Control with APM Chartered Project Professional (ChPP)",
    status: "upcoming" as const,
    startAt: "2026-08-17T13:00:00+01:00",
    endAt: "2026-08-17T15:00:00+01:00",
    timezone: "Europe/London",
    isOnline: true,
    bookingUrl: "/events",
    categories: [],
  },
  {
    id: -2,
    slug: "upskill-your-team-dfe-kbc-funding",
    title: "Upskill Your Team with DfE and Kent Business College Funding",
    status: "upcoming" as const,
    startAt: "2026-08-18T13:00:00+01:00",
    endAt: "2026-08-18T15:00:00+01:00",
    timezone: "Europe/London",
    isOnline: true,
    bookingUrl: "/events",
    categories: [],
  },
  {
    id: -3,
    slug: "fully-funded-cim-level-4-august-2026",
    title: "Fully Funded CIM Level 4 Certificate in Professional and Digital Marketing",
    status: "upcoming" as const,
    startAt: "2026-08-20T13:00:00+01:00",
    endAt: "2026-08-20T15:00:00+01:00",
    timezone: "Europe/London",
    isOnline: true,
    bookingUrl: "/events",
    categories: [],
  },
];
