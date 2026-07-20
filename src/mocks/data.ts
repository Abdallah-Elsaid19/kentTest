import type {
  College,
  Programme,
  Course,
  EventItem,
  BlogArticle,
  Testimonial,
  CaseStudy,
  Partner,
  TeamMember,
  NavigationItem,
  FooterLinkGroup,
  Achievement,
} from "../types";

export const colleges: College[] = [
  {
    id: "cpm",
    name: "College of Project Management",
    slug: "college-of-project-management",
    shortDescription:
      "Develop skilled project professionals through globally recognised qualifications in Project Controls and Associate Project Management.",
    fullDescription:
      "The College of Project Management at Kent Business College is dedicated to developing skilled project professionals through globally recognised qualifications. We offer programmes in Project Controls and Associate Project Management, supported by professional bodies including the APM and CMI.",
    programmes: ["apm-level-4", "pcp-level-6"],
    image:
      "https://readdy.ai/api/search-image?query=Professional%20project%20management%20training%20session%20in%20modern%20classroom%20with%20diverse%20professionals%2C%20purple%20accent%20lighting%2C%20clean%20corporate%20environment%2C%20editorial%20photography&width=800&height=600&seq=college-pm-1&orientation=landscape",
    color: "kbc-purple-500",
  },
  {
    id: "cpc",
    name: "College of Project Controls",
    slug: "college-of-project-controls",
    shortDescription:
      "Advance your career in project controls with professional qualifications recognised by APM and the Institute of Project Controls.",
    fullDescription:
      "The College of Project Controls delivers advanced programmes for professionals seeking to master cost engineering, planning, and project controls. Our qualifications are recognised by APM and the Institute of Project Controls Fellowship.",
    programmes: ["pcp-level-6"],
    image:
      "https://readdy.ai/api/search-image?query=Project%20controls%20professional%20analysing%20data%20on%20screens%20in%20modern%20office%2C%20purple%20and%20gold%20accents%2C%20corporate%20editorial%20photography%2C%20clean%20lighting&width=800&height=600&seq=college-pc-1&orientation=landscape",
    color: "kbc-purple-600",
  },
  {
    id: "com",
    name: "College of Marketing",
    slug: "college-of-marketing",
    shortDescription:
      "Build stronger brands and marketing teams with CIM-recognised qualifications from Level 4 to Level 6.",
    fullDescription:
      "The College of Marketing offers CIM-recognised qualifications designed to help marketing professionals at every stage of their career. From Level 4 Marketing Executive to Level 6 Marketing Manager, our programmes are fully funded and professionally accredited.",
    programmes: ["me-level-4", "mm-level-6"],
    image:
      "https://readdy.ai/api/search-image?query=Marketing%20professionals%20collaborating%20in%20creative%20modern%20workspace%2C%20brand%20strategy%20boards%2C%20purple%20and%20gold%20tones%2C%20editorial%20photography&width=800&height=600&seq=college-mkt-1&orientation=landscape",
    color: "kbc-purple-500",
  },
  {
    id: "col",
    name: "College of Leadership",
    slug: "college-of-leadership",
    shortDescription:
      "Develop transformational leaders with programmes in Strategic Management, Leadership, and HR at Level 7.",
    fullDescription:
      "The College of Leadership delivers MBA and Diploma Level 7 programmes in Strategic Management, Leadership, Marketing, Financial Management, and HR. Our qualifications are designed for senior professionals seeking to drive organisational change.",
    programmes: ["mba-level-7", "strategic-management", "strategic-leadership", "strategic-marketing", "strategic-hr"],
    image:
      "https://readdy.ai/api/search-image?query=Executive%20leadership%20seminar%20in%20prestige%20boardroom%2C%20senior%20professionals%20discussing%20strategy%2C%20purple%20and%20gold%20lighting%2C%20editorial%20photography&width=800&height=600&seq=college-lead-1&orientation=landscape",
    color: "kbc-purple-600",
  },
];

export const programmes: Programme[] = [
  {
    id: "apm-level-4",
    title: "Associate Project Manager Level 4",
    slug: "associate-project-manager-level-4",
    collegeId: "cpm",
    collegeName: "College of Project Management",
    level: "Level 4",
    duration: "15 months",
    fundingStatus: "Fully Funded",
    qualification: "APM Project Management Qualification (PMQ)",
    professionalRecognition: ["APM", "CMI"],
    description:
      "Fully funded training to develop confident project managers with globally recognised project management knowledge and practical skills for modern project delivery.",
    image:
      "https://readdy.ai/api/search-image?query=Diverse%20team%20of%20project%20managers%20in%20modern%20training%20room%2C%20flip%20charts%20and%20planning%20boards%2C%20purple%20and%20gold%20accents%2C%20editorial%20photography&width=800&height=500&seq=prog-apm-1&orientation=landscape",
    features: [
      "APM Project Management Qualification (PMQ)",
      "AI in Projects Certificate",
      "Real-world project simulations",
      "Mentor support throughout",
    ],
  },
  {
    id: "pcp-level-6",
    title: "Project Controls Professional Level 6",
    slug: "project-controls-professional-level-6",
    collegeId: "cpc",
    collegeName: "College of Project Controls",
    level: "Level 6",
    duration: "27 months",
    fundingStatus: "Fully Funded",
    qualification: "APM Chartered Project Professional (ChPP)",
    professionalRecognition: ["APM", "ICostE", "Institute of Project Controls Fellowship"],
    description:
      "Develop advanced project controls capability through a Level 6 programme with professional pathways to APM Chartered Project Professional (ChPP), Cost Engineer (ICostE) and Institute of Project Controls Fellowship.",
    image:
      "https://readdy.ai/api/search-image?query=Project%20controls%20engineer%20reviewing%20Gantt%20charts%20and%20cost%20reports%20on%20multiple%20monitors%2C%20modern%20office%2C%20purple%20and%20gold%20lighting%2C%20editorial%20photography&width=800&height=500&seq=prog-pcp-1&orientation=landscape",
    features: [
      "APM Chartered Project Professional (ChPP)",
      "Cost Engineer (ICostE) pathway",
      "Institute of Project Controls Fellowship",
      "Advanced risk and cost management",
    ],
  },
  {
    id: "me-level-4",
    title: "Marketing Executive Level 4 Apprenticeship",
    slug: "marketing-executive-level-4",
    collegeId: "com",
    collegeName: "College of Marketing",
    level: "Level 4",
    duration: "15 months",
    fundingStatus: "Fully Funded",
    qualification: "CIM Certificate in Professional and Digital Marketing",
    professionalRecognition: ["CIM", "Apprenticeship Standard"],
    description:
      "Build the foundations of a successful marketing career with a fully funded Level 4 apprenticeship. Gain practical skills in digital marketing, campaign planning, and brand management.",
    image:
      "https://readdy.ai/api/search-image?query=Young%20marketing%20professional%20working%20on%20digital%20campaign%20strategy%20in%20modern%20creative%20office%2C%20multiple%20screens%2C%20purple%20and%20gold%20accents%2C%20editorial%20photography&width=800&height=500&seq=prog-me-1&orientation=landscape",
    features: [
      "CIM Certificate in Professional Marketing",
      "Digital marketing specialisation",
      "Campaign planning & analytics",
      "Mentor and portfolio support",
    ],
  },
  {
    id: "mm-level-6",
    title: "Marketing Manager Level 6 Apprenticeship",
    slug: "marketing-manager-level-6",
    collegeId: "com",
    collegeName: "College of Marketing",
    level: "Level 6",
    duration: "24 months",
    fundingStatus: "Fully Funded",
    qualification: "CIM Diploma in Professional Marketing",
    professionalRecognition: ["CIM", "Apprenticeship Standard"],
    description:
      "Advance your marketing leadership with a Level 6 apprenticeship designed for managers. Develop strategic marketing skills, team leadership, and budget management capabilities.",
    image:
      "https://readdy.ai/api/search-image?query=Marketing%20manager%20leading%20team%20strategy%20session%20in%20modern%20boardroom%2C%20brand%20presentations%20on%20screen%2C%20purple%20and%20gold%20accents%2C%20editorial%20photography&width=800&height=500&seq=prog-mm-1&orientation=landscape",
    features: [
      "CIM Diploma in Professional Marketing",
      "Strategic marketing planning",
      "Team leadership development",
      "Budget and ROI management",
    ],
  },
  {
    id: "mba-level-7",
    title: "MBA / Diploma Level 7",
    slug: "mba-diploma-level-7",
    collegeId: "col",
    collegeName: "College of Leadership",
    level: "Level 7",
    duration: "18 months",
    fundingStatus: "Fully Funded",
    qualification: "Level 7 Diploma in Strategic Management and Leadership",
    professionalRecognition: ["CMI", "QAA"],
    description:
      "An executive-level qualification for senior leaders and managers. The Level 7 Diploma is equivalent to an MBA and provides strategic management capabilities for organisational success.",
    image:
      "https://readdy.ai/api/search-image?query=Senior%20executives%20in%20strategic%20planning%20workshop%20at%20prestigious%20venue%2C%20flip%20charts%20and%20data%20visualisations%2C%20purple%20and%20gold%20tones%2C%20editorial%20photography&width=800&height=500&seq=prog-mba-1&orientation=landscape",
    features: [
      "MBA-equivalent qualification",
      "Strategic leadership focus",
      "Executive coaching included",
      "Networking with senior leaders",
    ],
  },
  {
    id: "strategic-management",
    title: "Strategic Management",
    slug: "strategic-management",
    collegeId: "col",
    collegeName: "College of Leadership",
    level: "Level 7",
    duration: "12 months",
    fundingStatus: "Fully Funded",
    qualification: "CMI Level 7 Award in Strategic Management",
    professionalRecognition: ["CMI"],
    description:
      "Develop advanced strategic management skills to lead organisational change, drive growth, and deliver sustainable competitive advantage.",
    image:
      "https://readdy.ai/api/search-image?query=Strategic%20management%20consultant%20presenting%20growth%20strategy%20to%20board%20in%20executive%20suite%2C%20purple%20and%20gold%20lighting%2C%20editorial%20photography&width=800&height=500&seq=prog-sm-1&orientation=landscape",
    features: [
      "Organisational strategy development",
      "Change management frameworks",
      "Competitive analysis tools",
      "Case study-based learning",
    ],
  },
  {
    id: "strategic-marketing",
    title: "Strategic Marketing",
    slug: "strategic-marketing",
    collegeId: "col",
    collegeName: "College of Leadership",
    level: "Level 7",
    duration: "12 months",
    fundingStatus: "Fully Funded",
    qualification: "CMI Level 7 Award in Strategic Marketing",
    professionalRecognition: ["CMI", "CIM"],
    description:
      "Master strategic marketing at the highest level. Learn to develop marketing strategies that align with organisational objectives and drive measurable business results.",
    image:
      "https://readdy.ai/api/search-image?query=Senior%20marketing%20director%20reviewing%20global%20brand%20strategy%20on%20large%20screen%20in%20executive%20office%2C%20purple%20and%20gold%20accents%2C%20editorial%20photography&width=800&height=500&seq=prog-smark-1&orientation=landscape",
    features: [
      "Global marketing strategy",
      "Brand portfolio management",
      "Market entry strategies",
      "Digital transformation",
    ],
  },
  {
    id: "strategic-leadership",
    title: "Strategic Leadership",
    slug: "strategic-leadership",
    collegeId: "col",
    collegeName: "College of Leadership",
    level: "Level 7",
    duration: "12 months",
    fundingStatus: "Fully Funded",
    qualification: "CMI Level 7 Award in Strategic Leadership",
    professionalRecognition: ["CMI"],
    description:
      "Develop the leadership capabilities required to inspire teams, manage complexity, and lead with vision in rapidly changing business environments.",
    image:
      "https://readdy.ai/api/search-image?query=Transformational%20leader%20addressing%20diverse%20team%20in%20modern%20amphitheatre%20style%20meeting%20room%2C%20natural%20light%2C%20purple%20and%20gold%20accents%2C%20editorial%20photography&width=800&height=500&seq=prog-sl-1&orientation=landscape",
    features: [
      "Transformational leadership models",
      "Emotional intelligence at scale",
      "Crisis leadership frameworks",
      "Executive presence coaching",
    ],
  },
  {
    id: "strategic-hr",
    title: "Human Resources",
    slug: "human-resources",
    collegeId: "col",
    collegeName: "College of Leadership",
    level: "Level 7",
    duration: "12 months",
    fundingStatus: "Fully Funded",
    qualification: "CMI Level 7 Award in Strategic HR Management",
    professionalRecognition: ["CMI", "CIPD"],
    description:
      "Develop strategic human resource management capabilities to build high-performing teams, design talent strategies, and lead organisational culture.",
    image:
      "https://readdy.ai/api/search-image?query=HR%20director%20leading%20talent%20strategy%20workshop%20with%20diverse%20senior%20leaders%2C%20modern%20corporate%20boardroom%2C%20purple%20and%20gold%20lighting%2C%20editorial%20photography&width=800&height=500&seq=prog-hr-1&orientation=landscape",
    features: [
      "Strategic talent management",
      "Organisational design",
      "Culture transformation",
      "HR analytics and metrics",
    ],
  },
];

export const courses: Course[] = [
  {
    id: "advanced-research",
    title: "Advanced Research Methods",
    slug: "advanced-research-methods",
    description:
      "Master quantitative and qualitative research methodologies for business and academic contexts. Ideal for professionals undertaking dissertations, reports, or evidence-based decision making.",
    outline: [
      "Research design and methodology selection",
      "Quantitative data collection and analysis",
      "Qualitative interviewing and thematic analysis",
      "Literature review and synthesis techniques",
      "Ethical considerations in research",
      "Academic writing and presentation",
    ],
    duration: "8 weeks",
    level: "Level 7",
  },
  {
    id: "strategic-finance",
    title: "Strategic Financial Management",
    slug: "strategic-financial-management",
    description:
      "Develop advanced financial management skills for senior leaders. Covers financial strategy, investment appraisal, risk management, and corporate governance.",
    outline: [
      "Financial strategy and planning",
      "Investment appraisal techniques",
      "Risk management frameworks",
      "Corporate finance and funding",
      "Financial reporting and governance",
      "Mergers and acquisitions analysis",
    ],
    duration: "12 weeks",
    level: "Level 7",
  },
];

export const events: EventItem[] = [
  {
    id: "evt-1",
    title: "Fully Funded Project Control with APM Chartered Project Professional (ChPP)",
    slug: "fully-funded-project-control-chpp",
    date: "2026-08-15",
    startTime: "10:00",
    endTime: "15:00",
    location: "Online",
    isOnline: true,
    status: "upcoming",
    image:
      "https://readdy.ai/api/search-image?query=Virtual%20webinar%20on%20project%20management%20with%20professional%20speaker%20on%20screen%2C%20modern%20home%20office%20setup%2C%20purple%20and%20gold%20accents%2C%20editorial%20photography&width=600&height=400&seq=evt-1&orientation=landscape",
    description:
      "Learn about our fully funded Project Controls Professional Level 6 programme and pathways to APM Chartered Project Professional (ChPP).",
  },
  {
    id: "evt-2",
    title: "Upskill Your Team with DfE and Kent Business College Funding",
    slug: "upskill-your-team-dfe-funding",
    date: "2026-08-22",
    startTime: "14:00",
    endTime: "16:00",
    location: "Online",
    isOnline: true,
    status: "upcoming",
    image:
      "https://readdy.ai/api/search-image?query=Corporate%20team%20training%20session%20in%20bright%20modern%20office%2C%20diverse%20professionals%20engaged%20in%20learning%2C%20purple%20and%20gold%20lighting%2C%20editorial%20photography&width=600&height=400&seq=evt-2&orientation=landscape",
    description:
      "Discover how employers can access government funding to upskill teams through apprenticeships and professional qualifications at Kent Business College.",
  },
  {
    id: "evt-3",
    title: "Fully Funded Project Management Professional with AI Dashboards and Agents",
    slug: "fully-funded-project-management-ai",
    date: "2026-09-05",
    startTime: "11:00",
    endTime: "13:00",
    location: "Online",
    isOnline: true,
    status: "upcoming",
    image:
      "https://readdy.ai/api/search-image?query=AI%20technology%20presentation%20with%20data%20dashboards%20and%20project%20management%20interfaces%20on%20screens%2C%20modern%20tech%20office%2C%20purple%20and%20gold%20accents%2C%20editorial%20photography&width=600&height=400&seq=evt-3&orientation=landscape",
    description:
      "Explore how AI is transforming project management and how our Level 4 programme equips professionals with AI-powered tools and techniques.",
  },
  {
    id: "evt-4",
    title: "Marketing Executive Apprenticeship Open Evening",
    slug: "marketing-executive-open-evening",
    date: "2026-07-10",
    startTime: "18:00",
    endTime: "20:00",
    location: "Maidstone Campus",
    isOnline: false,
    status: "ended",
    image:
      "https://readdy.ai/api/search-image?query=University%20campus%20open%20evening%20event%20with%20prospective%20students%20and%20staff%20networking%2C%20warm%20evening%20lighting%2C%20purple%20and%20gold%20decorations%2C%20editorial%20photography&width=600&height=400&seq=evt-4&orientation=landscape",
    description:
      "Meet our marketing faculty, learn about the Level 4 Marketing Executive apprenticeship, and tour our facilities.",
  },
  {
    id: "evt-5",
    title: "Leadership Development Workshop for HR Professionals",
    slug: "leadership-development-hr-workshop",
    date: "2026-07-05",
    startTime: "09:30",
    endTime: "16:30",
    location: "London Hub",
    isOnline: false,
    status: "ended",
    image:
      "https://readdy.ai/api/search-image?query=HR%20professionals%20in%20interactive%20leadership%20workshop%20with%20facilitator%20and%20flip%20charts%2C%20modern%20training%20venue%2C%20purple%20and%20gold%20accents%2C%20editorial%20photography&width=600&height=400&seq=evt-5&orientation=landscape",
    description:
      "A full-day workshop covering strategic HR leadership, talent management, and organisational culture transformation.",
  },
];

export const blogArticles: BlogArticle[] = [
  {
    id: "blog-1",
    title: "Why Project Management Apprenticeships Are the Future of Professional Development",
    slug: "project-management-apprenticeships-future",
    excerpt:
      "Discover how apprenticeship-based project management training is reshaping professional development and delivering measurable ROI for employers.",
    content:
      "Project management apprenticeships represent a fundamental shift in how organisations develop talent...",
    author: "Dr. Sarah Mitchell",
    date: "2026-07-15",
    category: "Apprenticeships",
    image:
      "https://readdy.ai/api/search-image?query=Modern%20project%20manager%20leading%20agile%20stand-up%20meeting%20in%20tech%20office%2C%20sticky%20notes%20and%20whiteboard%2C%20purple%20and%20gold%20accents%2C%20editorial%20photography&width=800&height=500&seq=blog-1&orientation=landscape",
    readTime: "5 min",
  },
  {
    id: "blog-2",
    title: "How AI Is Transforming Marketing Careers",
    slug: "ai-transforming-marketing-careers",
    excerpt:
      "Artificial intelligence is reshaping marketing roles. Learn how our programmes prepare marketing professionals for an AI-driven future.",
    content:
      "The integration of artificial intelligence into marketing is no longer optional...",
    author: "James Crawford",
    date: "2026-07-08",
    category: "Marketing",
    image:
      "https://readdy.ai/api/search-image?query=Marketing%20professional%20analysing%20AI%20generated%20data%20insights%20on%20large%20monitor%2C%20modern%20creative%20office%2C%20purple%20and%20gold%20lighting%2C%20editorial%20photography&width=800&height=500&seq=blog-2&orientation=landscape",
    readTime: "4 min",
  },
  {
    id: "blog-3",
    title: "The ROI of Strategic Leadership Training",
    slug: "roi-strategic-leadership-training",
    excerpt:
      "Research-backed evidence shows that strategic leadership training delivers 4x ROI within 18 months. Here's the data.",
    content:
      "Investing in strategic leadership development is one of the highest-impact decisions an organisation can make...",
    author: "Prof. Alan Davies",
    date: "2026-06-28",
    category: "Leadership",
    image:
      "https://readdy.ai/api/search-image?query=Executive%20team%20reviewing%20business%20growth%20charts%20in%20boardroom%2C%20data%20visualisations%20on%20screen%2C%20purple%20and%20gold%20accents%2C%20editorial%20photography&width=800&height=500&seq=blog-3&orientation=landscape",
    readTime: "6 min",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Andrew Hurll",
    role: "Commercial Manager",
    organisation: "SCA Group Limited",
    quote:
      "The programme has completely transformed my approach to commercial management. The blend of theory and practical application, combined with expert mentoring, has accelerated my career in ways I never expected.",
    rating: 5,
  },
  {
    id: "test-2",
    name: "Sarah Thompson",
    role: "Project Controls Engineer",
    organisation: "Balfour Beatty",
    quote:
      "Kent Business College provided me with the qualifications and confidence to move from technician to chartered professional. The funding made it accessible and the support was outstanding.",
    rating: 5,
  },
  {
    id: "test-3",
    name: "David Chen",
    role: "Marketing Director",
    organisation: "Virtus Tech",
    quote:
      "Our entire marketing team has been through KBC programmes. The ROI has been exceptional, and the CIM recognition gives our team real credibility in the market.",
    rating: 5,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-1",
    name: "Corinna Denbow",
    role: "Marketing Manager Level 6",
    programme: "Marketing Manager Level 6 Apprenticeship",
    quote:
      "I'm currently completing a Level 6 Marketing Manager apprenticeship alongside my role as Marketing Manager at Clymowest, a global display technology company. I have been with the business for over ten years, working...",
    slug: "corinna-denbow",
    linkedinUrl: "#",
  },
  {
    id: "cs-2",
    name: "Mark Jackson",
    role: "Project Control Professional Level 6",
    programme: "Project Controls Professional Level 6",
    quote:
      "How My Apprenticeship Supports My Development, and Helps Me in My Job. My apprenticeship has played a significant role in both my personal development and my effectiveness within...",
    slug: "mark-jackson",
    linkedinUrl: "#",
  },
  {
    id: "cs-3",
    name: "Connor Hewitson",
    role: "Marketing Manager Level 6",
    programme: "Marketing Manager Level 6 Apprenticeship",
    quote:
      "I'll be honest. When I started the Level 6 Marketing Manager apprenticeship, I wasn't entirely sure what it would add. I knew the business I work in, and I had views on what good looked like. What I didn't expect was how quickly the...",
    slug: "connor-hewitson",
    linkedinUrl: "#",
  },
];

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    name: "Ella Pennells",
    role: "Buying and Marketing Manager",
    company: "Black White Denim Ltd",
    programme: "Marketing Executive Level 4",
    linkedinUrl: "#",
  },
  {
    id: "ach-2",
    name: "Nicola Pomeroy",
    role: "Buying and Marketing Manager",
    company: "GTI Wireless Ltd",
    programme: "Marketing Executive Level 4",
    linkedinUrl: "#",
  },
  {
    id: "ach-3",
    name: "Chelsie Hardie",
    role: "Buying and Marketing Manager",
    company: "Base Media Group",
    programme: "Marketing Executive Level 4",
    linkedinUrl: "#",
  },
  {
    id: "ach-4",
    name: "Leigh Millington",
    role: "Digital Marketing Executive",
    company: "Baxter Motor Group",
    programme: "Marketing Executive Level 4",
    linkedinUrl: "#",
  },
];

export const partners: Partner[] = [
  { id: "p1", name: "Virtus", logo: "/partners/virtus.png" },
  { id: "p2", name: "Wincanton", logo: "/partners/wincanton.png" },
  { id: "p3", name: "BMT", logo: "/partners/bmt.png" },
  { id: "p4", name: "Clymowest", logo: "/partners/clymowest.png" },
  { id: "p5", name: "SCA Group", logo: "/partners/sca.png" },
  { id: "p6", name: "Black White Denim", logo: "/partners/bwd.png" },
  { id: "p7", name: "GTI Wireless", logo: "/partners/gti.png" },
  { id: "p8", name: "Base Media", logo: "/partners/base-media.png" },
  { id: "p9", name: "Balfour Beatty", logo: "/partners/balfour-beatty.png" },
  { id: "p10", name: "Kent County Council", logo: "/partners/kcc.png" },
];

export const teamMembers: TeamMember[] = [
  {
    id: "tm-1",
    name: "Dr. Sarah Mitchell",
    role: "Principal & Academic Director",
    bio: "Dr. Mitchell leads the academic strategy at Kent Business College with over 20 years of experience in professional education and apprenticeship development.",
  },
  {
    id: "tm-2",
    name: "James Crawford",
    role: "Head of Marketing College",
    bio: "James brings extensive industry experience from senior marketing roles at Fortune 500 companies and is a Chartered Marketer with the CIM.",
  },
  {
    id: "tm-3",
    name: "Prof. Alan Davies",
    role: "Head of Leadership College",
    bio: "Professor Davies is a renowned leadership scholar and executive coach who has advised government and corporate boards on strategic leadership development.",
  },
  {
    id: "tm-4",
    name: "Rebecca Stone",
    role: "Head of Project Management College",
    bio: "Rebecca is a Fellow of the APM and has led major infrastructure projects before dedicating her career to developing the next generation of project professionals.",
  },
];

export const navigationItems: NavigationItem[] = [
  {
    id: "nav-home",
    label: "Home",
    href: "/",
  },
  {
    id: "nav-colleges",
    label: "Colleges",
    href: "/colleges",
    megaMenu: true,
    children: [
      { id: "nav-cpm", label: "College of Project Management", href: "/colleges/college-of-project-management" },
      { id: "nav-cpc", label: "College of Project Controls", href: "/colleges/college-of-project-controls" },
      { id: "nav-com", label: "College of Marketing", href: "/colleges/college-of-marketing" },
      { id: "nav-col", label: "College of Leadership", href: "/colleges/college-of-leadership" },
    ],
  },
  {
    id: "nav-courses",
    label: "Courses",
    href: "/courses",
  },
  {
    id: "nav-events",
    label: "Events",
    href: "/events",
  },
  {
    id: "nav-about",
    label: "Who We Are",
    href: "/who-we-are",
    megaMenu: true,
    children: [
      { id: "nav-about-main", label: "About Us", href: "/who-we-are" },
      { id: "nav-faq", label: "FAQ", href: "/faq" },
      { id: "nav-blog", label: "Blog", href: "/blog" },
      { id: "nav-learners", label: "Star Learners", href: "/star-learners" },
      { id: "nav-experts", label: "Our Experts", href: "/our-experts" },
      { id: "nav-partners", label: "Our Partners", href: "/our-partners" },
      { id: "nav-governance", label: "Governance Board", href: "/governance-board" },
      { id: "nav-safeguarding", label: "Safeguarding Handbook", href: "/safeguarding-handbook" },
    ],
  },
  {
    id: "nav-apprentices",
    label: "Apprentices",
    href: "/apprentices",
    megaMenu: true,
    children: [
      { id: "nav-app-main", label: "Apprentices Overview", href: "/apprentices" },
      { id: "nav-app-stories", label: "Apprentices' Stories", href: "/apprentices/stories" },
      { id: "nav-app-jobs", label: "Explore Jobs", href: "/explore-jobs" },
    ],
  },
  {
    id: "nav-employer",
    label: "Employer",
    href: "/employer-agreement",
    megaMenu: true,
    children: [
      { id: "nav-emp-agree", label: "Employer Agreement", href: "/employer-agreement" },
      { id: "nav-emp-contact", label: "Contact Us", href: "/contact" },
    ],
  },
  {
    id: "nav-support",
    label: "KBC Support",
    href: "/support",
  },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Colleges",
    links: [
      { label: "College of Project Management", href: "/colleges/college-of-project-management" },
      { label: "College of Project Controls", href: "/colleges/college-of-project-controls" },
      { label: "College of Marketing", href: "/colleges/college-of-marketing" },
      { label: "College of Leadership", href: "/colleges/college-of-leadership" },
    ],
  },
  {
    title: "Programmes",
    links: [
      { label: "Associate Project Manager L4", href: "/programmes/associate-project-manager-level-4" },
      { label: "Project Controls Professional L6", href: "/programmes/project-controls-professional-level-6" },
      { label: "Marketing Executive L4", href: "/programmes/marketing-executive-level-4" },
      { label: "Marketing Manager L6", href: "/programmes/marketing-manager-level-6" },
      { label: "MBA / Diploma L7", href: "/programmes/mba-diploma-level-7" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Who We Are", href: "/who-we-are" },
      { label: "Our Experts", href: "/our-experts" },
      { label: "Our Partners", href: "/our-partners" },
      { label: "Governance Board", href: "/governance-board" },
      { label: "Safeguarding Handbook", href: "/safeguarding-handbook" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "KBC Support", href: "/support" },
      { label: "Contact Us", href: "/contact" },
      { label: "Book a Session", href: "/book-session" },
    ],
  },
  {
    title: "Apprentices",
    links: [
      { label: "Apprentices Overview", href: "/apprentices" },
      { label: "Apprentices' Stories", href: "/apprentices/stories" },
      { label: "Explore Jobs", href: "/explore-jobs" },
      { label: "Apply Now", href: "/apply" },
    ],
  },
];