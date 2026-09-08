// Content extracted from the supplied Readdy News reference; page label renamed at the user's request.
// See tests/fixtures/news-source.json for source copy and image associations.

export const newsPath = "/blogs-and-news";

export const newsCategories = ["All","News","Blog","Case Studies","Guides","Events"] as const;
export type NewsCategory = typeof newsCategories[number];

export interface NewsArticle {
  id: string;
  category: Exclude<NewsCategory, "All">;
  featured?: boolean;
  title: string;
  excerpt: string;
  body: readonly string[];
  keyPoints?: readonly string[];
  date: string;
  publishedAt: string;
  readTime: string;
  author: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  href: string;
}

export const newsHero = {
  "eyebrow": "Blogs & News",
  "title": "Ideas, evidence and insight for",
  "titleAccent": "professional work",
  "description": "News, guidance and specialist perspective from Kent Business College — covering programmes, funding, professional progression and the Project Controls capability your organisation relies on.",
  "image": "/assets/images/news/hero.webp",
  "imageWidth": 1792,
  "imageHeight": 1000
};

export const newsCatalogue = {
  "eyebrow": "All articles",
  "title": "Browse the latest insight",
  "readAction": "Read the full article",
  "empty": "No articles in this category yet. Check back soon."
};

export const newsNewsletter = {
  "eyebrow": "Stay informed",
  "title": "Receive programme updates and professional insight",
  "description": "Get funding news, information-session invites and specialist Project Controls guidance — delivered when it matters, not every day.",
  "label": "Email address",
  "placeholder": "you@company.co.uk",
  "action": "Subscribe",
  "success": "Thank you for subscribing."
};

export const newsCta = {
  "eyebrow": "Take the next step",
  "title": "Ready to explore a programme or funding route that fits you?",
  "description": "Tell us about your role, employer and professional goals — we’ll help you understand which programme, funding route or specialist Project Controls option may fit your circumstances.",
  "actions": [
    {
      "label": "Check eligibility & funding",
      "href": "/funding-eligibility"
    },
    {
      "label": "Talk to the team",
      "href": "/contact"
    }
  ]
};

export const newsDetail = {
  "keyPoints": "Key points",
  "relatedEyebrow": "Related reading",
  "relatedTitle": "Keep exploring",
  "allAction": "View all articles",
  "notFoundTitle": "Article not found",
  "notFoundDescription": "The article you’re looking for may have moved or no longer exists.",
  "backAction": "Back to Blogs & News"
};

export const newsArticles: readonly NewsArticle[] = [
  {
    "id": "pc-commercial-access",
    "category": "News",
    "featured": true,
    "title": "Kent Business College expands specialist Project Controls commercial access",
    "excerpt": "Professionals and employers can now select individual Project Controls modules or combine several subjects into a broader development route — with applicable IPC bursary support of 50% or 75% depending on the selected module.",
    "body": [
      "Project Controls is the discipline that keeps complex delivery on track — combining planning, cost engineering, risk management and performance reporting into a single professional capability. As employers look for stronger certainty across their portfolios, the demand for people who can plan, forecast and control work continues to grow.",
      "Kent Business College has expanded its specialist Project Controls provision so that professionals and employers can access it in a way that suits their circumstances. Rather than committing to a fixed full programme from day one, learners can select individual modules, or combine several subjects into a broader development route that reflects the work they actually do.",
      "The commercial route is designed for organisations and individuals who are not accessing levy or other funded pathways, or who want to build capability in a specific area of Project Controls. This flexibility means a planning specialist can focus on scheduling, while a cost professional can deepen their understanding of estimating and budgeting — without spending time on areas outside their role.",
      "Applicable modules receive IPC bursary support of 50% or 75% depending on the selected module, subject to approval and availability. This bursary helps reduce the cost of specialist development and makes advanced Project Controls learning more accessible to a wider range of professionals.",
      "For employers, the benefit is practical: teams can be upskilled in the precise areas where capability gaps exist, with learning that connects directly back to live project responsibilities. For individuals, the route offers a credible way to build recognised, specialised expertise that supports career progression and, where relevant, preparation for chartership."
    ],
    "keyPoints": [
      "Select individual modules or combine several subjects into a broader route",
      "Applicable IPC bursary support of 50% or 75% depending on the selected module",
      "Learning connects directly to live project responsibilities",
      "Subject to approval and availability"
    ],
    "date": "21 Aug 2026",
    "readTime": "6 min read",
    "author": "KBC Editorial",
    "image": "/assets/images/news/pc-commercial-access.webp",
    "imageWidth": 1350,
    "imageHeight": 900,
    "publishedAt": "2026-08-21",
    "href": "/blogs-and-news/pc-commercial-access"
  },
  {
    "id": "dfe-funding-explained",
    "category": "Blog",
    "title": "How DfE funding supports professional apprenticeship development",
    "excerpt": "Government-funded apprenticeships are workplace-development routes. Here we unpack the learner and employer criteria that shape eligibility — from residency and paid employment to Apprenticeship Service setup.",
    "body": [
      "Apprenticeships have changed. Far from being limited to early-career entry routes, modern apprenticeships funded by the Department for Education (DfE) are sophisticated workplace-development programmes that support professionals at every stage — including those with significant experience already behind them.",
      "The funding model is designed to align the cost of training with the real value it creates. For employers paying into the levy, apprenticeship funding is drawn directly from the Apprenticeship Service account. For employers who do not pay the levy, the Government co-invests, contributing the large majority of the training cost with a smaller employer contribution.",
      "Learner eligibility sits alongside employer eligibility. In most cases, a learner must be resident in England for the duration of the programme, in paid employment with an employer that supports the training, and be spending at least 50% of their working time in England. There is no upper age limit — professional apprenticeships are designed for working adults.",
      "It is important to understand that funded apprenticeships are jobs with training, not courses bolted onto a job. The learning is structured around the learner's actual responsibilities, with off-the-job training time protected within the working week. This is what makes the model so effective for genuine capability development.",
      "For anyone considering a funded programme, the practical first step is to understand your own circumstances against the criteria, then speak to a training provider who can confirm your eligibility and guide the application. Getting this right early saves time and avoids surprises later."
    ],
    "keyPoints": [
      "No upper age limit — professional apprenticeships are for working adults",
      "Levy-paying employers draw funding from the Apprenticeship Service account",
      "Learners are typically resident in England and in paid employment",
      "Off-the-job training time is protected within the working week"
    ],
    "date": "18 Aug 2026",
    "readTime": "5 min read",
    "author": "KBC Editorial",
    "image": "/assets/images/news/dfe-funding-explained.webp",
    "imageWidth": 900,
    "imageHeight": 600,
    "publishedAt": "2026-08-18",
    "href": "/blogs-and-news/dfe-funding-explained"
  },
  {
    "id": "chpp-preparation",
    "category": "Guides",
    "title": "ChPP preparation: building a route to Chartered Project Professional",
    "excerpt": "Chartered status is not automatically awarded — it reflects assessed professional competence. A practical look at how preparation, evidence and the relevant APM pathway fit together.",
    "body": [
      "Chartered Project Professional (ChPP) status is a mark of professional competence in project management, awarded by the Association for Project Management (APM). It is not something you can simply enrol for — it is a standard you must demonstrate against, through evidence and assessment.",
      "The route to chartership is built on demonstrated capability across the APM's framework of technical knowledge, professional practice and behaviour. Candidates gather evidence from their own experience, showing how they have applied project management in real situations, made decisions under uncertainty and delivered value through their work.",
      "Preparation matters because chartership is an assessment of practice, not a memory test. Many professionals find that structured learning — such as a Project Controls or project management programme — helps them reflect on their experience, fill knowledge gaps and build the vocabulary to describe their competence clearly.",
      "A common first step is to review the ChPP standard against your own experience and identify where your evidence is strongest and where it needs development. This self-assessment shapes what learning you pursue and how you sequence your preparation.",
      "It is also worth remembering that chartership is not the only route to professional recognition. The right pathway depends on your role, your goals and your current level of responsibility. Speaking to a provider who understands the APM framework can help you map the most sensible next step."
    ],
    "keyPoints": [
      "ChPP is awarded by the APM and assessed against a competence framework",
      "Evidence is drawn from your own professional experience",
      "Structured learning supports reflection and fills knowledge gaps",
      "Begin with a self-assessment against the ChPP standard"
    ],
    "date": "14 Aug 2026",
    "readTime": "7 min read",
    "author": "KBC Editorial",
    "image": "/assets/images/news/chpp-preparation.webp",
    "imageWidth": 900,
    "imageHeight": 600,
    "publishedAt": "2026-08-14",
    "href": "/blogs-and-news/chpp-preparation"
  },
  {
    "id": "forecasting-capability",
    "category": "Case Studies",
    "title": "Building forecasting capability across project teams",
    "excerpt": "A concise look at how structured, work-based learning builds the forecasting and planning capability professionals draw on every day — connecting programme content directly to real project responsibilities.",
    "body": [
      "Forecasting is one of the most valuable — and most misunderstood — capabilities in project delivery. Done well, it gives leaders early visibility of risk and lets them act before small issues become significant problems. Done poorly, it becomes an exercise in optimistic guesswork that undermines confidence in the whole delivery function.",
      "The challenge for many organisations is that forecasting capability develops unevenly. Individual professionals may be highly skilled, but the wider team lacks a shared approach, common terminology and consistent methods. This is where structured, work-based learning makes a tangible difference.",
      "By connecting learning directly to live project responsibilities, professionals develop forecasting skills in the context of the work they already do. They learn to build credible estimates, track performance against plan, and interpret variance — then apply those techniques immediately to the projects in front of them.",
      "The result is not just individual improvement but a shared capability that lifts the whole team. When people use consistent methods and a common language, forecasts become comparable, decisions become faster, and senior leaders gain the confidence to trust the numbers they are presented with.",
      "For organisations looking to strengthen delivery certainty, investing in forecasting capability is one of the most direct levers available. It is a skill that compounds — the more people practise it against real work, the more reliable the organisation's planning becomes."
    ],
    "date": "11 Aug 2026",
    "readTime": "5 min read",
    "author": "KBC Editorial",
    "image": "/assets/images/news/forecasting-capability.webp",
    "imageWidth": 900,
    "imageHeight": 600,
    "publishedAt": "2026-08-11",
    "href": "/blogs-and-news/forecasting-capability"
  },
  {
    "id": "marketing-progression",
    "category": "Blog",
    "title": "Marketing apprenticeships: from Level 4 to Level 6 progression",
    "excerpt": "How Marketing Executive Level 4 and Marketing Manager Level 6 connect into a longer professional-development pathway — including the CIM and progression options available where applicable.",
    "body": [
      "Marketing is a profession in which progression is rarely a straight line. People move between specialist and generalist roles, between agency and client-side, and between tactical delivery and strategic leadership. A structured apprenticeship pathway gives that progression a clear, recognised shape.",
      "The Marketing Executive Level 4 apprenticeship builds the practical, day-to-day skills that underpin effective marketing delivery — campaign execution, content, data and communication. It is designed for people who are building their professional foundation, often early in their marketing career or moving into the discipline.",
      "The Marketing Manager Level 6 apprenticeship takes that foundation further, developing the strategic and leadership capability needed to plan and direct marketing activity, manage budgets and people, and connect marketing to wider business objectives.",
      "Where applicable, these programmes connect to professional bodies such as the Chartered Institute of Marketing (CIM), adding recognised professional standing to the apprenticeship qualification. This combination of workplace experience, formal learning and professional recognition is what makes the pathway valuable.",
      "The key is choosing the right entry point for your current level and ambitions. A conversation about your role, your experience and where you want to be in three to five years will help identify whether Level 4, Level 6 — or a direct route to a professional qualification — is the better fit."
    ],
    "keyPoints": [
      "Level 4 builds practical campaign and delivery skills",
      "Level 6 develops strategic and leadership capability",
      "Programmes connect to professional bodies such as CIM where applicable",
      "Choose the entry point that matches your current level and goals"
    ],
    "date": "8 Aug 2026",
    "readTime": "4 min read",
    "author": "KBC Editorial",
    "image": "/assets/images/news/marketing-progression.webp",
    "imageWidth": 900,
    "imageHeight": 600,
    "publishedAt": "2026-08-08",
    "href": "/blogs-and-news/marketing-progression"
  },
  {
    "id": "ipc-bursary-explained",
    "category": "News",
    "title": "IPC bursary support explained for Project Controls modules",
    "excerpt": "Applicable Project Controls commercial modules receive 50% or 75% IPC bursary support depending on the selected module — subject to approval and availability. Here's what that means in practice.",
    "body": [
      "The cost of specialist professional development is one of the most common barriers people cite when considering a Project Controls qualification. The IPC bursary is designed to address exactly that — reducing the financial commitment so that more professionals can access advanced capability-building.",
      "In practice, the bursary applies to applicable commercial Project Controls modules, providing either 50% or 75% support depending on the specific module selected. This means the level of support reflects the nature and cost of the learning, rather than being a single flat rate applied to everything.",
      "It is important to understand that bursary support is subject to approval and availability. It is a limited resource intended to widen access to specialist learning, so it is worth checking eligibility and current availability early in your planning rather than assuming it will automatically apply.",
      "The bursary is particularly relevant for professionals whose employers are not funding their development, or who are accessing commercial modules outside the levy-funded routes. In these cases, the reduction can be the difference between pursuing specialist training and putting it off.",
      "The best way to understand how the bursary applies to your situation is to discuss it directly. A conversation about the modules you are considering, your circumstances and your goals will clarify the level of support available and help you plan your investment sensibly."
    ],
    "keyPoints": [
      "50% or 75% support depending on the selected module",
      "Applies to applicable commercial Project Controls modules",
      "Subject to approval and availability",
      "Particularly relevant where development is not employer-funded"
    ],
    "date": "4 Aug 2026",
    "readTime": "4 min read",
    "author": "KBC Editorial",
    "image": "/assets/images/news/ipc-bursary-explained.webp",
    "imageWidth": 900,
    "imageHeight": 600,
    "publishedAt": "2026-08-04",
    "href": "/blogs-and-news/ipc-bursary-explained"
  },
  {
    "id": "employer-das-guide",
    "category": "Guides",
    "title": "Employer guide to the Apprenticeship Service (DAS) setup",
    "excerpt": "Setting up a funded programme is straightforward. A step-by-step look at the Digital Contract, adding Kent Business College as your training provider (UKPRN 10093689) and Government Gateway credentials.",
    "body": [
      "For employers accessing levy-funded apprenticeships, the Apprenticeship Service — sometimes referred to by its platform name, DAS — is the system through which funding is managed, providers are appointed and learners are registered. Getting the setup right at the start makes everything that follows smoother.",
      "The first step is ensuring you have the right access. You will need your Government Gateway credentials and, for levy-paying employers, access to the Apprenticeship Service account where your levy funds are held. This is the account from which training costs are drawn.",
      "Next, you appoint your training provider. This is done by adding the provider to your account using their UK Provider Reference Number (UKPRN). Kent Business College's UKPRN is 10093689. Appointing the provider creates the link that allows programme details, costs and learner records to be managed through the service.",
      "The Digital Contract (sometimes called the Apprenticeship Agreement) records the relationship between the employer, the provider and the learner. It sets out the programme, the cost and the responsibilities of each party. This document should be completed before the learner starts.",
      "From there, the day-to-day operation is familiar: learners are added to the account, progress is recorded, and funding is released as milestones are met. The key to a smooth experience is accurate data and clear communication between the employer and the provider throughout the programme."
    ],
    "keyPoints": [
      "Kent Business College UKPRN is 10093689",
      "Appoint your provider through the Apprenticeship Service account",
      "The Digital Contract records the programme, cost and responsibilities",
      "Complete setup before the learner starts"
    ],
    "date": "30 Jul 2026",
    "readTime": "6 min read",
    "author": "KBC Editorial",
    "image": "/assets/images/news/employer-das-guide.webp",
    "imageWidth": 900,
    "imageHeight": 600,
    "publishedAt": "2026-07-30",
    "href": "/blogs-and-news/employer-das-guide"
  },
  {
    "id": "leadership-development",
    "category": "Blog",
    "title": "Leadership development for working professionals",
    "excerpt": "Professional leadership development should build on the experience you already have — not start again. How structured learning connects to the responsibilities and challenges you hold today.",
    "body": [
      "There is a persistent myth that leadership development means going back to school — that it is for people early in their careers, or that it takes you away from the real work of leading. In practice, the most effective leadership development is the opposite: it is grounded in the responsibilities you already hold.",
      "Working professionals bring something no classroom can replicate — lived experience of leading teams, making decisions under pressure and navigating organisational complexity. Structured learning should build on that experience, giving it structure, language and a stronger evidence base.",
      "A well-designed leadership programme connects directly to the challenges of the role. Learners reflect on their own leadership practice, explore the behaviours that build effective teams, and develop the capability to lead through change and uncertainty — all while continuing to do the job.",
      "The benefit compounds. Because the learning is applied immediately, it becomes part of how the professional leads, rather than a set of ideas that fade after a course ends. This is what separates genuine development from a box-ticking exercise.",
      "For professionals who want to lead more effectively — and for employers who want to grow their future leaders — the key is to choose development that respects experience, connects to real work and builds capability that lasts."
    ],
    "keyPoints": [
      "Effective leadership development builds on existing experience",
      "Learning is applied immediately to real leadership challenges",
      "Develops the capability to lead through change and uncertainty",
      "Genuine development becomes part of how the professional leads"
    ],
    "date": "25 Jul 2026",
    "readTime": "5 min read",
    "author": "KBC Editorial",
    "image": "/assets/images/news/leadership-development.webp",
    "imageWidth": 900,
    "imageHeight": 600,
    "publishedAt": "2026-07-25",
    "href": "/blogs-and-news/leadership-development"
  },
  {
    "id": "info-session-apm",
    "category": "Events",
    "title": "Information session: Project Controls with APM Chartered Project Professional",
    "excerpt": "Join our online information session to explore the Project Control Professional Level 6 programme, professional progression and how funded and commercial routes compare.",
    "body": [
      "Choosing the right professional-development route is easier when you can ask questions directly. Our online information sessions are designed for exactly that — an opportunity to explore a programme in depth, understand how it maps to your role, and get clear answers on eligibility and funding.",
      "This session focuses on the Project Control Professional Level 6 programme and the APM Chartered Project Professional route. It is relevant for professionals working in planning, scheduling, cost engineering, risk or performance management — and for employers building Project Controls capability.",
      "During the session we cover the programme structure, the professional progression it supports, and how funded and commercial routes compare in practice. There is time for questions, so you can explore the points that matter most to your own circumstances.",
      "Sessions are held online, making them accessible wherever you are based, and are delivered by people who understand both the discipline and the practicalities of funding and application.",
      "If you are weighing up your options or simply want to understand what a Project Controls qualification could mean for your career, joining a session is a practical, low-commitment first step."
    ],
    "keyPoints": [
      "Focuses on Project Control Professional Level 6 and the ChPP route",
      "Covers programme structure, progression and funding",
      "Held online with time for questions",
      "Relevant for planning, cost, risk and performance professionals"
    ],
    "date": "17 Aug 2026",
    "readTime": "1 min read",
    "author": "KBC Events",
    "image": "/assets/images/news/info-session-apm.webp",
    "imageWidth": 900,
    "imageHeight": 600,
    "publishedAt": "2026-08-17",
    "href": "/blogs-and-news/info-session-apm"
  },
  {
    "id": "earned-value-matters",
    "category": "Blog",
    "title": "Why earned value management matters for project delivery",
    "excerpt": "Stronger cost visibility and performance measurement help professionals and employers deliver with greater confidence. What earned value management is — and why it matters for control.",
    "body": [
      "Earned value management (EVM) is one of the most powerful tools in Project Controls, yet it is often under-used. At its heart, EVM gives you an objective answer to a simple but difficult question: are we getting the value we planned to get, for the cost we are spending?",
      "Traditional reporting often separates schedule from cost, making it hard to see how the two interact. A project can appear on schedule while costs quietly overrun, or appear under budget while actually delivering less than planned. EVM brings schedule, cost and scope together into a single view.",
      "By measuring earned value — the value of work actually completed — against planned value and actual cost, professionals can identify variance early and act while there is still time to correct course. This early visibility is the real benefit: it turns reporting into a decision-making tool.",
      "For employers, EVM capability supports stronger governance and more confident forecasting. When the numbers are credible and consistently produced, senior leaders can make investment and resource decisions with far greater assurance.",
      "Building EVM capability is a practical, high-value investment for any organisation that depends on predictable delivery. It is a skill that, once embedded, pays for itself many times over through better control and fewer surprises."
    ],
    "keyPoints": [
      "EVM brings schedule, cost and scope into a single view",
      "Identifies variance early while there is still time to act",
      "Turns reporting into a decision-making tool",
      "Supports stronger governance and confident forecasting"
    ],
    "date": "20 Jul 2026",
    "readTime": "5 min read",
    "author": "KBC Editorial",
    "image": "/assets/images/news/earned-value-matters.webp",
    "imageWidth": 900,
    "imageHeight": 600,
    "publishedAt": "2026-07-20",
    "href": "/blogs-and-news/earned-value-matters"
  }
];
