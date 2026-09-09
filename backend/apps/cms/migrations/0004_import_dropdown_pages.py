"""Frozen dropdown content import. Insert missing rows only; never reset editorial work.

Source inventory: docs/CMS_ROUTE_INVENTORY.md, 2026-09-09.
This file is a one-time migration, not a runtime fallback.
"""
import json
from django.db import migrations
from django.utils import timezone

PAGES = {'home': {'title': 'Home Content', 'route': '/', 'group': 'Home'},
 'college_project_controls': {'title': 'Project Controls & Project Management',
                              'route': '/college-of-project-controls-and-project-management',
                              'group': 'Colleges'},
 'college_marketing': {'title': 'Marketing', 'route': '/college-of-marketing', 'group': 'Colleges'},
 'programmes': {'title': 'All Programmes', 'route': '/programmes', 'group': 'Programmes'},
 'programme_apm_l4': {'title': 'Associate Project Manager Level 4', 'route': '/associate-project-manager-level-4', 'group': 'Programmes'},
 'programme_pcp_l6': {'title': 'Project Controls Professional Level 6',
                      'route': '/project-controls-professional-level-6',
                      'group': 'Programmes'},
 'programme_marketing_l4': {'title': 'Marketing Executive Level 4', 'route': '/marketing-executive-level-4', 'group': 'Programmes'},
 'programme_marketing_l6': {'title': 'Marketing Manager Level 6', 'route': '/marketing-manager-level-6', 'group': 'Programmes'},
 'about': {'title': 'Our Story', 'route': '/about', 'group': 'Information'},
 'partners': {'title': 'Our Partners', 'route': '/our-partners', 'group': 'Information'},
 'experts': {'title': 'Our Experts', 'route': '/our-experts', 'group': 'Information'},
 'governance': {'title': 'Governance Board', 'route': '/governance-board', 'group': 'Information'},
 'safeguarding': {'title': 'Safeguarding Handbook', 'route': '/safeguarding-handbook', 'group': 'Information'},
 'faq': {'title': 'FAQ', 'route': '/faq', 'group': 'Information'},
 'case_studies': {'title': 'Case Studies', 'route': '/case-studies', 'group': 'Information'},
 'events': {'title': 'Events', 'route': '/events', 'group': 'Information'},
 'bookshop': {'title': 'Bookshop', 'route': '/bookshop', 'group': 'Information'},
 'news': {'title': 'Blogs & News', 'route': '/blogs-and-news', 'group': 'Information'},
 'awards': {'title': 'Awards & Recognition', 'route': '/awards', 'group': 'Information'},
 'learners': {'title': 'For Learners', 'route': '/learners', 'group': 'Apprentice'},
 'funding': {'title': 'Funding & Eligibility', 'route': '/funding-eligibility', 'group': 'Information'},
 'support': {'title': 'KBC Support', 'route': '/support', 'group': 'Information'},
 'employers': {'title': 'For Employers', 'route': '/employers', 'group': 'Employer'},
 'contact': {'title': 'Contact Us', 'route': '/contact', 'group': 'Information'}}

# Frozen JSON payload also supports source-fidelity tests without a second copy.
ENTRIES = json.loads(r'''
[
  {
    "key": "college_project_controls.pages_project_controls_page_page_project_controls_page",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_page_project_controls_page",
    "title": "Project Controls Page",
    "sort_order": 0,
    "content": {
      "fallback_title_001": "College of Project Controls and Project Management | Kent Business College",
      "fallback_description_002": "Discover Kent Business College's College of Project Controls and Project Management — DfE-funded project management and project controls apprenticeships, from Associate Project Manager to Project Control Professional.",
      "to_003": "/book-session"
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_component_he_hero_section",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_component_he_hero_section",
    "title": "Hero Section",
    "sort_order": 1,
    "content": {
      "to_001": "#pc-programmes",
      "to_002": "/book-session",
      "aria_label_003": "Areas of study"
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_data_hero",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_data_hero",
    "title": "Hero",
    "sort_order": 2,
    "content": {
      "image_001": "/assets/images/project-controls-hero.webp",
      "eyebrow_002": "College of Project Controls and Project Management",
      "title_003": "Plan, lead and control with",
      "accent_004": "greater certainty",
      "description_005": "The College of Project Controls and Project Management develops the professionals who plan, lead and deliver complex work — people who engage stakeholders, govern delivery and turn project data into confident, evidence-based decisions.",
      "primary_label_006": "Explore our programmes",
      "secondary_label_007": "Speak to our team"
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_data_page_navigation",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_data_page_navigation",
    "title": "Page Navigation",
    "sort_order": 3,
    "content": {
      "label_008": "About the college",
      "href_009": "#pc-overview",
      "label_010": "Our programmes",
      "href_011": "#pc-programmes",
      "label_012": "Core capabilities",
      "href_013": "#pc-capabilities",
      "label_014": "Course content",
      "href_015": "#pc-course-content",
      "label_016": "Why choose us",
      "href_017": "#why-choose-us",
      "label_018": "Career pathways",
      "href_019": "#pc-outcomes",
      "label_020": "Events",
      "href_021": "#pc-events",
      "label_022": "Recognition",
      "href_023": "#pc-recognition",
      "label_024": "Trusted by",
      "href_025": "#pc-trusted",
      "label_026": "FAQs",
      "href_027": "#faq"
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_data_overview",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_data_overview",
    "title": "Overview",
    "sort_order": 4,
    "content": {
      "eyebrow_028": "About the college",
      "title_029": "Project controls and project management that turn ambition into delivered outcomes",
      "paragraphs_030": "Every successful organisation depends on people who can plan, deliver and control. The College of Project Controls and Project Management equips professionals to lead work end to end — from stakeholder alignment and risk management to scheduling, cost and forecasting.",
      "paragraphs_031": "Our programmes blend rigorous project management and controls practice with real workplace application, building capability you can use from day one — and the credentials to progress toward Chartered status and senior responsibility.",
      "image_032": "/assets/images/project-controls/overview.jpg"
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_data_programme_copy",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_data_programme_copy",
    "title": "Programme Copy",
    "sort_order": 5,
    "content": {
      "eyebrow_033": "Our programmes",
      "title_034": "Two accredited routes into project delivery",
      "description_035": "Whether you are starting in project management or stepping into senior delivery leadership, there is a funded programme built for you.",
      "learning_label_036": "What you will learn",
      "audience_label_037": "Ideal for:",
      "apply_label_038": "Apply now",
      "funding_label_039": "Check funding",
      "image_040": "/assets/images/project-controls/practice.jpg",
      "image_label_041": "Work-based learning",
      "image_caption_042": "Apply what you learn through real project delivery and controls work"
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_data_capability_copy",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_data_capability_copy",
    "title": "Capability Copy",
    "sort_order": 6,
    "content": {
      "eyebrow_043": "Core capabilities",
      "title_044": "The full project delivery toolkit",
      "description_045": "Develop the end-to-end capabilities professionals need to plan, lead and control projects — from stakeholders and governance to cost, risk and forecasting."
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_data_benefit_copy",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_data_benefit_copy",
    "title": "Benefit Copy",
    "sort_order": 7,
    "content": {
      "eyebrow_046": "Why choose us",
      "title_047": "A college built around delivering complex work with certainty",
      "description_048": "We combine accredited programmes, expert practitioners and fully funded routes — so you can plan, lead and control projects with confidence, without the cost getting in the way."
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_data_testimonial_copy",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_data_testimonial_copy",
    "title": "Testimonial Copy",
    "sort_order": 8,
    "content": {
      "eyebrow_049": "What our learners say",
      "title_050": "Real progress, real careers"
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_data_career_copy",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_data_career_copy",
    "title": "Career Copy",
    "sort_order": 9,
    "content": {
      "eyebrow_051": "Career pathways",
      "title_052": "Where project management and controls can take you",
      "description_053": "From your first project role to leading the function, our programmes build the capability and credentials to progress toward Chartered status and senior responsibility."
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_data_faq_copy",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_data_faq_copy",
    "title": "Faq Copy",
    "sort_order": 10,
    "content": {
      "eyebrow_054": "Frequently asked questions",
      "title_055": "Your questions, answered",
      "description_056": "Everything you need to know about our programmes, funding and how to get started. Can’t find what you’re looking for? Our team is here to help.",
      "cta_057": "Speak to our team"
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_data_final_cta",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_data_final_cta",
    "title": "Final Cta",
    "sort_order": 11,
    "content": {
      "eyebrow_058": "Start your project delivery journey",
      "title_059": "Build a career that plans, leads and controls with certainty",
      "description_060": "Whether you are new to project delivery or an experienced professional ready for greater responsibility, our DfE-funded programmes help you develop the capability employers rely on.",
      "primary_label_061": "Book information session",
      "secondary_label_062": "Check your eligibility"
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_data_project_controls_programmes",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_data_project_controls_programmes",
    "title": "Project Controls Programmes",
    "sort_order": 12,
    "content": {
      "discipline_063": "Project Management",
      "image_064": "/assets/images/learner-home/associate-project-manager.webp",
      "href_065": "/associate-project-manager-level-4",
      "title_066": "Associate Project Manager",
      "duration_067": "Typically 12 months",
      "funding_068": "DfE funded (levy 100%)",
      "summary_069": "Build the practical project management skills to plan, organise and deliver work — from stakeholder engagement and risk management to governance and confident delivery.",
      "outcomes_070": "Planning & scheduling",
      "outcomes_071": "Stakeholder management",
      "outcomes_072": "Risk & issue management",
      "outcomes_073": "Governance & delivery",
      "ideal_for_074": "New and developing project professionals building a strong foundation in project delivery.",
      "discipline_075": "Project Controls",
      "image_076": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/2986ecbd61fc4774b1b641ec903368e3.webp",
      "href_077": "/project-controls-professional-level-6",
      "title_078": "Project Controls Professional",
      "duration_079": "Typically 27 months",
      "funding_080": "DfE funded (levy 100% / non-levy 95%)",
      "summary_081": "Lead complex projects end to end — integrating scope, schedule, budget and risk to deliver confident outcomes and progress toward Chartered status.",
      "outcomes_082": "Strategic project leadership",
      "outcomes_083": "Commercial & budget management",
      "outcomes_084": "Stakeholder & governance",
      "outcomes_085": "ChPP preparation",
      "ideal_for_086": "Experienced project professionals stepping into senior and leadership responsibility."
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_data_project_controls_capabilities",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_data_project_controls_capabilities",
    "title": "Project Controls Capabilities",
    "sort_order": 13,
    "content": {
      "title_087": "Planning & Scheduling",
      "desc_088": "Build and maintain reliable plans and schedules that keep delivery on track.",
      "title_089": "Stakeholder Management",
      "desc_090": "Engage, influence and align the people who shape your project.",
      "title_091": "Risk & Issue Management",
      "desc_092": "Identify, assess and manage uncertainty before it becomes a problem.",
      "title_093": "Governance & Compliance",
      "desc_094": "Deliver within a clear framework of accountability and control.",
      "title_095": "Cost Engineering & Budgeting",
      "desc_096": "Estimate, track and control cost across the project lifecycle.",
      "title_097": "Leadership & Communication",
      "desc_098": "Lead teams and communicate clearly to drive successful outcomes.",
      "title_099": "Earned Value Management",
      "desc_100": "Measure performance and progress against plan with confidence.",
      "title_101": "Forecasting & Change",
      "desc_102": "Predict outcomes and manage change with clear, defensible baselines.",
      "title_103": "Data & Reporting",
      "desc_104": "Turn project data into insight that drives better decision-making."
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_data_course_content_copy",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_data_course_content_copy",
    "title": "Course Content Copy",
    "sort_order": 14,
    "content": {
      "eyebrow_105": "Course content",
      "title_106": "Courses at the College of Project Controls and Project Management",
      "description_107": "Combine recognised project management, project controls and AI courses into a practical pathway."
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_data_project_controls_course_groups",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_data_project_controls_course_groups",
    "title": "Project Controls Course Groups",
    "sort_order": 15,
    "content": {
      "provider_108": "Association for Project Management courses",
      "courses_title_109": "Risk Management Subject Matter",
      "courses_description_110": "Risk thinking, analysis, response planning and professional risk practice.",
      "courses_title_111": "Project Management Qualification",
      "courses_description_112": "Broad project management knowledge for people managing or supporting projects.",
      "courses_title_113": "Project Fundamentals Qualification",
      "courses_description_114": "Introductory project management knowledge for new or developing project professionals.",
      "provider_115": "APMG International courses",
      "courses_title_116": "Management of Portfolios",
      "courses_description_117": "Portfolio governance, prioritisation, benefits and strategic alignment.",
      "courses_title_118": "Managing Successful Programmes",
      "courses_description_119": "Programme governance, benefits, leadership and complex change delivery.",
      "courses_title_120": "Project Planning and Control",
      "courses_description_121": "Planning, baselining, progress monitoring, controls and recovery planning.",
      "courses_title_122": "Earned Value Management",
      "courses_description_123": "Cost and schedule performance measurement, variance and forecasting.",
      "provider_124": "Project Management Institute courses",
      "courses_title_125": "Project Management Professional certificate",
      "courses_description_126": "Advanced project management preparation.",
      "courses_title_127": "Certified Associate in Project Management",
      "courses_description_128": "Foundation route for learners developing structured project management knowledge.",
      "courses_title_129": "Risk Management Professional certificate",
      "courses_description_130": "Specialist risk management preparation for project environments.",
      "courses_title_131": "Scheduling Professional certificate",
      "courses_description_132": "Specialist scheduling, planning and time-management preparation.",
      "courses_title_133": "Project Management Office course",
      "courses_description_134": "Project Management Office structure, services, governance and reporting practice.",
      "provider_135": "Institute of Project Controls courses",
      "courses_title_136": "Project Management Office fundamentals and organisational governance",
      "courses_description_137": "Operating model, authority, assurance, stage-gates and governance design.",
      "courses_title_138": "Project planning, scheduling and integrated controls",
      "courses_description_139": "Integrated baselines, schedule logic, cost control, forecasting and change control.",
      "courses_title_140": "Risk, issue and quality management in projects",
      "courses_description_141": "Risk, issue, quality, assurance, continuous improvement and team behaviours.",
      "courses_title_142": "Stakeholder management, communications and reporting",
      "courses_description_143": "Stakeholder engagement, executive reporting, dashboards, influence and benefits.",
      "courses_title_144": "Artificial Intelligence in Project Controls",
      "courses_description_145": "Artificial intelligence tools for dashboards, insight, recommendation and reporting workflows.",
      "courses_title_146": "Project data, simulation and dashboard practice",
      "courses_description_147": "Project data analysis, simulation modelling, data management and AI-supported dashboard practice."
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_data_project_controls_outcomes",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_data_project_controls_outcomes",
    "title": "Project Controls Outcomes",
    "sort_order": 16,
    "content": {
      "role_148": "Associate Project Manager",
      "desc_149": "Support and deliver projects with solid, reliable capability.",
      "role_150": "Project Manager",
      "desc_151": "Own and deliver complex projects end to end.",
      "role_152": "Senior Project Manager",
      "desc_153": "Lead larger, higher-risk and more strategic initiatives.",
      "role_154": "Programme Manager",
      "desc_155": "Coordinate multiple related projects toward shared outcomes.",
      "role_156": "Portfolio Manager",
      "desc_157": "Shape and prioritise the whole portfolio of change.",
      "role_158": "Head of Project Management",
      "desc_159": "Lead the project function and its contribution to the business.",
      "role_160": "Project Controls Technician",
      "desc_161": "Support project delivery with reliable schedules, cost and reporting.",
      "role_162": "Planning Engineer",
      "desc_163": "Own the schedule and sequence of complex programmes of work.",
      "role_164": "Cost Engineer",
      "desc_165": "Lead cost estimation, tracking and commercial control.",
      "role_166": "Risk Manager",
      "desc_167": "Shape risk strategy and turn uncertainty into informed decisions.",
      "role_168": "Project Controls Manager",
      "desc_169": "Integrate schedule, cost and risk to steer major projects.",
      "role_170": "Head of Project Controls",
      "desc_171": "Lead the controls function and its contribution to business outcomes."
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_data_project_controls_stats",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_data_project_controls_stats",
    "title": "Project Controls Stats",
    "sort_order": 17,
    "content": {
      "label_172": "Accredited programmes",
      "label_173": "DfE funded routes",
      "label_174": "Core capability areas",
      "label_175": "Career pathways"
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_data_project_controls_why_choose_us",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_data_project_controls_why_choose_us",
    "title": "Project Controls Why Choose Us",
    "sort_order": 18,
    "content": {
      "title_176": "Work-based learning",
      "desc_177": "Develop capability while you work, applying every concept to real project delivery and live controls data from day one.",
      "title_178": "Fully funded",
      "desc_179": "DfE-funded routes with little to no cost for eligible employers and learners.",
      "title_180": "Professionally recognised",
      "desc_181": "Aligned to APM standards, with progression toward Chartered Project Professional and recognised project controls credentials.",
      "title_182": "Expert practitioners",
      "desc_183": "Learn from experienced project leaders and controls professionals across major projects and sectors.",
      "title_184": "Career progression",
      "desc_185": "Clear pathways from technician and associate roles through to senior, specialist and leadership positions.",
      "title_186": "Governance, rigour & certainty",
      "desc_187": "A disciplined, data-led, outcome-focused approach to planning, risk and confident delivery.",
      "title_188": "Support that fits your working week",
      "desc_189": "Live interactive learning, session recordings, catch-up support and one-to-one guidance available seven days a week until 9:00 PM.",
      "title_190": "Masterclasses & professional community",
      "desc_191": "Extend your learning through professional masterclasses, networking events and optional in-person workshops across the UK.",
      "title_192": "More included through the KBC Fund",
      "desc_193": "Selected routes include added support for professional fees, travel, graduation and further development, subject to eligibility and availability."
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_data_project_controls_why_choose_us_stats",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_data_project_controls_why_choose_us_stats",
    "title": "Project Controls Why Choose Us Stats",
    "sort_order": 19,
    "content": {
      "label_194": "Employed in role within 6 months",
      "label_195": "Learner satisfaction score",
      "label_196": "Programme completion rate",
      "label_197": "Advance into senior, leadership or specialist roles"
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_data_project_controls_testimonials",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_data_project_controls_testimonials",
    "title": "Project Controls Testimonials",
    "sort_order": 20,
    "content": {
      "quote_198": "The Associate Project Manager programme gave me a structured way to plan and deliver work I was already responsible for. I'm noticeably more confident leading stakeholders now.",
      "name_199": "Sarah Mitchell",
      "role_200": "Project Coordinator, Facilities & Estates",
      "image_201": "/assets/images/project-controls/testimonial-1.jpg",
      "quote_202": "The blend of theory and workplace application is excellent. My employer saw the difference within months — better plans, clearer risk management and stronger delivery.",
      "name_203": "Daniel Okafor",
      "role_204": "Assistant Project Manager, Infrastructure",
      "image_205": "/assets/images/project-controls/testimonial-2.jpg",
      "quote_206": "Progressing toward Chartered status was a real motivator. The support from tutors and my mentor made it feel genuinely achievable.",
      "name_207": "Priya Shah",
      "role_208": "Project Manager, Construction",
      "image_209": "/assets/images/project-controls/testimonial-3.jpg",
      "quote_210": "The Project Controls Technician programme gave me the technical skills — scheduling, cost, EVM — to add real value from day one.",
      "name_211": "James Walker",
      "role_212": "Planning Assistant, Rail",
      "image_213": "/assets/images/project-controls/testimonial-4.jpg",
      "quote_214": "I moved from a general admin role into a proper controls career. The forecasting and risk modules transformed how I support my team.",
      "name_215": "Hannah Price",
      "role_216": "Cost Analyst, Energy",
      "image_217": "/assets/images/project-controls/testimonial-5.jpg",
      "quote_218": "The Level 6 programme sharpened my leadership and commercial thinking. I now run the controls function on major work.",
      "name_219": "Michael Chen",
      "role_220": "Project Controls Manager, Construction",
      "image_221": "/assets/images/project-controls/testimonial-6.jpg"
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_data_project_controls_faqs",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_data_project_controls_faqs",
    "title": "Project Controls Faqs",
    "sort_order": 21,
    "content": {
      "question_222": "Who is the College of Project Controls and Project Management for?",
      "answer_223": "It is for professionals across the project delivery spectrum — from project managers who plan, lead and deliver work, to controls specialists in scheduling, cost, risk and data. Whether you are early-career or stepping into senior and leadership responsibility, there is a programme built for you.",
      "question_224": "What is the difference between project management and project controls?",
      "answer_225": "Project management focuses on leading and delivering the project end to end — scope, stakeholders, governance and outcomes. Project controls focuses on the data and insight that keep delivery on track — scheduling, cost, risk, forecasting and reporting. Our college develops capability in both, so you can choose the path that fits you.",
      "question_226": "What programmes are available?",
      "answer_227": "We offer four accredited apprenticeship programmes: Associate Project Manager (Level 4), Project Manager (Level 6), Project Controls Technician (Level 3) and Project Control Professional (Level 6).",
      "question_228": "How are the programmes funded?",
      "answer_229": "Programmes are funded through the Apprenticeship Levy or DfE funding. Levy-paying employers fund 100% through their levy, while non-levy employers typically contribute 5% with the government funding the remaining 95%.",
      "question_230": "Do I need to be employed to join?",
      "answer_231": "Yes. These are apprenticeship programmes, so you need to be employed in a relevant project or project controls role. We work with employers across Kent to match learners to suitable positions.",
      "question_232": "How long does each programme take?",
      "answer_233": "The Project Controls Technician (Level 3) typically takes around 18 months, while the Associate Project Manager (Level 4) and Project Manager (Level 6) typically take around 24 months, and the Project Control Professional (Level 6) around 30 months — depending on your pace and prior experience.",
      "question_234": "What qualification will I earn?",
      "answer_235": "You will earn a recognised apprenticeship qualification, plus professional recognition aligned to the Association for Project Management (APM), supporting progression toward Chartered Project Professional status — alongside recognised project controls credentials for the controls pathways.",
      "question_236": "How do I apply?",
      "answer_237": "Get in touch through our contact page and our team will guide you through eligibility, funding and next steps — whether you are an individual learner or an employer."
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_component_ov_overview_section",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_component_ov_overview_section",
    "title": "Overview Section",
    "sort_order": 22,
    "content": {
      "src_001": "/assets/patterns/kbc-ibis-wreath.png",
      "alt_002": "Project controls professionals analysing schedules and risk registers"
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_component_pr_programmes_section",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_component_pr_programmes_section",
    "title": "Programmes Section",
    "sort_order": 23,
    "content": {
      "alt_001": "Project controls specialist reviewing a schedule and risk matrix"
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_component_co_group_styles",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_component_co_group_styles",
    "title": "Group Styles",
    "sort_order": 24,
    "content": {
      "accent_001": "#6658d3",
      "accent_002": "#b94fca",
      "accent_003": "#d54e7a",
      "accent_004": "#b78d32"
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_component_co_course_content_section",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_component_co_course_content_section",
    "title": "Course Content Section",
    "sort_order": 25,
    "content": {
      "text_005": "courses",
      "text_006": "Offered by"
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_component_be_benefits_section",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_component_be_benefits_section",
    "title": "Benefits Section",
    "sort_order": 26,
    "content": {
      "src_001": "/assets/patterns/kbc-gold-leaf.png"
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_component_ca_career_pathways_section",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_component_ca_career_pathways_section",
    "title": "Career Pathways Section",
    "sort_order": 27,
    "content": {
      "src_001": "/assets/patterns/kbc-horse-growth.png"
    }
  },
  {
    "key": "college_project_controls.pages_project_controls_page_component_fi_final_ctasection",
    "page": "college_project_controls",
    "section": "pages_project_controls_page_component_fi_final_ctasection",
    "title": "Final Ctasection",
    "sort_order": 28,
    "content": {
      "to_001": "/book-session",
      "to_002": "/funding-eligibility"
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_page_marketing_college_page",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_page_marketing_college_page",
    "title": "Marketing College Page",
    "sort_order": 0,
    "content": {
      "fallback_title_001": "College of Marketing | Kent Business College",
      "fallback_description_002": "Discover Kent Business College's College of Marketing — DfE-funded Marketing Executive and Marketing Manager apprenticeships that turn customer insight into measurable commercial growth.",
      "to_003": "/book-session"
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_component_b_benefits_section",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_component_b_benefits_section",
    "title": "Benefits Section",
    "sort_order": 1,
    "content": {
      "src_001": "/assets/patterns/kbc-gold-leaf.png"
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_data_hero",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_data_hero",
    "title": "Hero",
    "sort_order": 2,
    "content": {
      "image_001": "/assets/images/project-controls-hero.webp",
      "eyebrow_002": "College of Marketing",
      "title_003": "Turn customer insight into",
      "accent_004": "commercial growth",
      "description_005": "The College of Marketing develops the marketers modern organisations need — professionals who can understand customers, shape strategy and deliver measurable commercial results.",
      "primary_label_006": "Explore our programmes",
      "secondary_label_007": "Speak to our team",
      "highlights_008": "Customer Insight",
      "highlights_009": "Digital Marketing",
      "highlights_010": "Strategy & Planning"
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_data_page_navigation",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_data_page_navigation",
    "title": "Page Navigation",
    "sort_order": 3,
    "content": {
      "label_011": "About the college",
      "href_012": "#marketing-overview",
      "label_013": "Our programmes",
      "href_014": "#marketing-programmes",
      "label_015": "Core capabilities",
      "href_016": "#marketing-capabilities",
      "label_017": "Why choose us",
      "href_018": "#marketing-benefits",
      "label_019": "Learning",
      "href_020": "#marketing-learning",
      "label_021": "Career pathways",
      "href_022": "#marketing-outcomes",
      "label_023": "Events",
      "href_024": "#marketing-events",
      "label_025": "Recognition",
      "href_026": "#marketing-recognition",
      "label_027": "Trusted by",
      "href_028": "#marketing-trusted",
      "label_029": "FAQs",
      "href_030": "#marketing-faq"
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_data_overview",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_data_overview",
    "title": "Overview",
    "sort_order": 4,
    "content": {
      "eyebrow_031": "About the college",
      "title_032": "Marketing that connects customer understanding to business results",
      "paragraphs_033": "Great marketing is more than activity — it is the disciplined practice of understanding customers and turning that insight into sustainable commercial growth. The College of Marketing equips professionals to do exactly that.",
      "paragraphs_034": "Our programmes blend the latest marketing practice with real workplace application, so learners build capability they can use from day one — and evidence they can carry into greater responsibility.",
      "image_035": "/assets/images/programme-marketing-manager.jpg"
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_data_programme_copy",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_data_programme_copy",
    "title": "Programme Copy",
    "sort_order": 5,
    "content": {
      "eyebrow_036": "Our programmes",
      "title_037": "Two accredited routes into professional marketing",
      "description_038": "Whether you are building your professional foundation or preparing to lead strategy, there is a funded marketing programme built for you.",
      "learning_label_039": "What you will learn",
      "audience_label_040": "Ideal for:",
      "image_041": "/assets/images/figma-home/marketing-event.png",
      "image_label_042": "Work-based learning",
      "image_caption_043": "Apply customer insight, campaign planning and strategic marketing to live workplace priorities"
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_data_capability_copy",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_data_capability_copy",
    "title": "Capability Copy",
    "sort_order": 6,
    "content": {
      "eyebrow_044": "Core capabilities",
      "title_045": "The complete modern marketing toolkit",
      "description_046": "Build the customer, commercial, digital and strategic capabilities needed to create measurable growth."
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_data_benefit_copy",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_data_benefit_copy",
    "title": "Benefit Copy",
    "sort_order": 7,
    "content": {
      "eyebrow_047": "Why choose us",
      "title_048": "A marketing college built around commercial growth",
      "description_049": "We combine accredited programmes, expert marketers and funded routes — so you can turn customer insight into measurable commercial results."
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_data_learning_copy",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_data_learning_copy",
    "title": "Learning Copy",
    "sort_order": 8,
    "content": {
      "eyebrow_050": "Learning experience",
      "title_051": "Flexible Learning & Personalised Support",
      "description_052": "Our programs are designed to fit around your work commitments with comprehensive support to ensure your success."
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_data_testimonial_copy",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_data_testimonial_copy",
    "title": "Testimonial Copy",
    "sort_order": 9,
    "content": {
      "eyebrow_053": "What our learners say",
      "title_054": "Real progress, real careers"
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_data_career_copy",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_data_career_copy",
    "title": "Career Copy",
    "sort_order": 10,
    "content": {
      "eyebrow_055": "Career pathways",
      "title_056": "Where professional marketing can take you",
      "description_057": "From campaign delivery and customer research to strategic leadership, our programmes build the capability and evidence to progress."
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_data_faq_copy",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_data_faq_copy",
    "title": "Faq Copy",
    "sort_order": 11,
    "content": {
      "eyebrow_058": "Frequently asked questions",
      "title_059": "Your questions, answered",
      "description_060": "Everything you need to know about our programmes, funding and how to get started. Can’t find what you’re looking for? Our team is here to help.",
      "cta_061": "Speak to our team"
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_data_final_cta",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_data_final_cta",
    "title": "Final Cta",
    "sort_order": 12,
    "content": {
      "eyebrow_062": "Start your marketing journey",
      "title_063": "Build a marketing career that drives real growth",
      "description_064": "Whether you are a new marketer or an experienced professional ready for greater responsibility, our DfE-funded programmes help you develop the capability employers are looking for.",
      "primary_label_065": "Book information session",
      "secondary_label_066": "Check your eligibility"
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_data_executive_modules",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_data_executive_modules",
    "title": "Executive Modules",
    "sort_order": 13,
    "content": {
      "title_067": "Marketing Impact & Planning",
      "duration_068": "4 months",
      "description_069": "Focus on strategic analysis, marketing metrics, and campaign planning. Learn to evaluate market conditions, set measurable objectives, and plan integrated marketing campaigns that deliver commercial results.",
      "outcomes_070": "Analyse market data and customer insight",
      "outcomes_071": "Set measurable campaign objectives",
      "outcomes_072": "Plan integrated marketing activities",
      "outcomes_073": "Evaluate marketing impact and ROI",
      "title_074": "Social Media Marketing Executive",
      "duration_075": "4 months",
      "description_076": "Master the use of social media as a marketing channel. Build skills in content creation, community management, paid social campaigns, and analytics to drive engagement and conversion across platforms.",
      "outcomes_077": "Create engaging social content strategies",
      "outcomes_078": "Manage paid and organic social campaigns",
      "outcomes_079": "Use platform analytics to optimise performance",
      "outcomes_080": "Build and nurture online communities",
      "title_081": "Marketing Technology Executive",
      "duration_082": "4 months",
      "description_083": "Explore marketing automation, CRM platforms, and data tools. Develop practical skills in using technology to streamline marketing operations, personalise customer journeys, and report on performance.",
      "outcomes_084": "Operate marketing automation platforms",
      "outcomes_085": "Manage CRM data and segmentation",
      "outcomes_086": "Build dashboards and performance reports",
      "outcomes_087": "Integrate tools for campaign efficiency"
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_data_manager_modules",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_data_manager_modules",
    "title": "Manager Modules",
    "sort_order": 14,
    "content": {
      "title_088": "Strategy and Planning",
      "description_089": "The foundation stage connects Level 6 marketing theory with strategic business decisions and organisational objectives.",
      "outcomes_090": "Strategic marketing theory and the extended marketing mix",
      "outcomes_091": "Product, service and brand development",
      "outcomes_092": "Market research, communications and business context",
      "outcomes_093": "Evidence-led marketing plans, risks and priorities",
      "title_094": "Customer Journey Optimisation",
      "description_095": "Develop a customer-focused view of the complete experience, from initial engagement to satisfaction, retention and loyalty.",
      "outcomes_096": "Customer behaviours across B2B and B2C contexts",
      "outcomes_097": "Journey mapping, touchpoints and friction analysis",
      "outcomes_098": "CRM, brand perception, feedback and channel choices",
      "outcomes_099": "Stakeholder collaboration and experience improvement",
      "title_100": "Commercial Intelligence",
      "description_101": "Strengthen commercial judgement by connecting data, financial awareness and marketing performance to business value.",
      "outcomes_102": "Campaign performance, KPIs and reliable information",
      "outcomes_103": "Return on investment, customer value and budget use",
      "outcomes_104": "Analytics, market insight and evidence-based decisions",
      "outcomes_105": "Business cases, recommendations and growth opportunities",
      "title_106": "AI in Marketing",
      "description_107": "Explore how emerging technology can improve planning, personalisation, customer insight and performance.",
      "outcomes_108": "Artificial intelligence, automation and marketing systems",
      "outcomes_109": "Campaign planning, optimisation and content development",
      "outcomes_110": "Analytics, digital tools and faster insight generation",
      "outcomes_111": "Responsible, ethical and commercially appropriate use"
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_data_marketing_programmes",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_data_marketing_programmes",
    "title": "Marketing Programmes",
    "sort_order": 15,
    "content": {
      "image_112": "/assets/images/learner-home/marketing-executive.webp",
      "href_113": "/marketing-executive-level-4",
      "title_114": "Marketing Executive",
      "duration_115": "Typically 18 months",
      "funding_116": "DfE fully funded",
      "qualification_117": "Optional CIM Level 4 Certificate in Professional and Digital Marketing",
      "summary_118": "Build the practical marketing skills to research customers, plan campaigns and deliver measurable commercial results across digital and traditional channels.",
      "outcomes_119": "Customer insight & research",
      "outcomes_120": "Campaign planning & delivery",
      "outcomes_121": "Digital & content marketing",
      "outcomes_122": "Performance & analytics",
      "ideal_for_123": "New and early-career marketers building a strong professional foundation.",
      "image_124": "/assets/images/learner-home/marketing-manager.webp",
      "href_125": "/marketing-manager-level-6",
      "title_126": "Marketing Manager",
      "duration_127": "Typically 24 months",
      "funding_128": "DfE fully funded",
      "qualification_129": "CIM Level 6 Diploma in Professional and Digital Marketing pathway",
      "intake_130": "September 2026",
      "summary_131": "Lead marketing strategy, brand direction and performance to shape how an organisation grows — turning customer insight into commercial advantage.",
      "outcomes_132": "Strategic marketing leadership",
      "outcomes_133": "Brand & proposition development",
      "outcomes_134": "Data-driven decision making",
      "outcomes_135": "Team & budget management",
      "ideal_for_136": "Experienced marketers stepping into strategic and leadership responsibility."
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_data_marketing_capabilities",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_data_marketing_capabilities",
    "title": "Marketing Capabilities",
    "sort_order": 16,
    "content": {
      "title_137": "Customer Insight",
      "desc_138": "Understand audiences, behaviours and needs to inform every decision.",
      "title_139": "Strategy & Planning",
      "desc_140": "Turn insight into focused marketing strategy and measurable plans.",
      "title_141": "Digital Marketing",
      "desc_142": "Master paid, owned and earned channels from SEO to social.",
      "title_143": "Performance & Analytics",
      "desc_144": "Measure what matters and use data to continuously improve.",
      "title_145": "Brand & Content",
      "desc_146": "Shape distinctive brands and craft content that connects and converts.",
      "title_147": "CRM & Loyalty",
      "desc_148": "Build customer relationships that drive retention and lifetime value.",
      "title_149": "Marketing Technology",
      "desc_150": "Use CRM, automation and connected tools to improve campaign efficiency.",
      "title_151": "AI in Marketing",
      "desc_152": "Use AI responsibly to strengthen insight, planning, content and optimisation."
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_data_marketing_stats",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_data_marketing_stats",
    "title": "Marketing Stats",
    "sort_order": 17,
    "content": {
      "label_153": "Accredited programmes",
      "label_154": "DfE funded routes",
      "label_155": "Core capability areas",
      "label_156": "Career pathways"
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_data_marketing_why_choose_us",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_data_marketing_why_choose_us",
    "title": "Marketing Why Choose Us",
    "sort_order": 18,
    "content": {
      "title_157": "Work-based learning",
      "desc_158": "Build marketing capability while working on real campaigns, customers and results.",
      "title_159": "Fully funded",
      "desc_160": "DfE-funded routes with little to no cost for eligible employers and learners.",
      "title_161": "Professionally recognised",
      "desc_162": "Aligned to industry standards, supporting progression toward Chartered Marketer status.",
      "title_163": "Expert marketers",
      "desc_164": "Learn from experienced practitioners who have grown brands and driven growth.",
      "title_165": "Career progression",
      "desc_166": "Clear pathways from Marketing Executive through to Head of Marketing.",
      "title_167": "Commercial impact",
      "desc_168": "Turn customer insight into measurable commercial growth for your organisation."
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_data_marketing_why_choose_us_stats",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_data_marketing_why_choose_us_stats",
    "title": "Marketing Why Choose Us Stats",
    "sort_order": 19,
    "content": {
      "label_169": "Employed in role within 6 months",
      "label_170": "Learner satisfaction score",
      "label_171": "Programme completion rate",
      "label_172": "Progress to strategic marketing roles"
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_data_learning_experience",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_data_learning_experience",
    "title": "Learning Experience",
    "sort_order": 20,
    "content": {
      "title_173": "Interactive Learning",
      "items_title_174": "Live Classes",
      "items_description_175": "Interactive, live online sessions held weekly.",
      "items_title_176": "Recordings Available",
      "items_description_177": "Access session recordings anytime to review and consolidate your learning.",
      "items_title_178": "Peer Learning",
      "items_description_179": "Collaborate with fellow marketers through discussion forums and group projects.",
      "title_180": "Personalised Tutoring",
      "items_title_181": "One-to-One Support",
      "items_description_182": "Free tutoring available seven days a week until 9:00 PM, including weekends.",
      "items_title_183": "Interactive Resources",
      "items_description_184": "Engage with quizzes, homework assignments, and real-world case studies.",
      "items_title_185": "Regular Feedback",
      "items_description_186": "Receive detailed feedback on assignments and projects to accelerate your growth.",
      "title_187": "Networking Workshops",
      "items_title_188": "Face-to-Face Interaction",
      "items_description_189": "Enhance your learning with optional workshops in Nottingham, London, Birmingham.",
      "items_title_190": "Networking Benefits",
      "items_description_191": "Gain insights, connect with industry peers, and expand your professional network.",
      "items_title_192": "Industry Connections",
      "items_description_193": "Meet representatives from leading marketing agencies and brands at special events."
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_data_career_routes",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_data_career_routes",
    "title": "Career Routes",
    "sort_order": 21,
    "content": {
      "label_194": "Marketing Executive route",
      "title_195": "Build the foundation for campaign delivery",
      "skills_196": "Marketing Impact & Planning",
      "skills_197": "Social Media Marketing",
      "skills_198": "Marketing Technology",
      "outcomes_199": "Marketing Executive",
      "outcomes_200": "Digital Marketing Specialist",
      "label_201": "Marketing Manager route",
      "title_202": "Progress from execution to strategic leadership",
      "skills_203": "Strategy and Planning",
      "skills_204": "Commercial Intelligence",
      "skills_205": "AI in Marketing",
      "skills_206": "Customer Journey",
      "outcomes_207": "Marketing Manager",
      "outcomes_208": "Brand Manager",
      "outcomes_209": "Head of Marketing",
      "label_210": "Marketing research route",
      "title_211": "Turn customer and market evidence into direction",
      "skills_212": "Customer and market insight",
      "skills_213": "Performance analysis",
      "outcomes_214": "CRM & Insight Manager",
      "outcomes_215": "Market Research specialist"
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_data_marketing_outcomes",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_data_marketing_outcomes",
    "title": "Marketing Outcomes",
    "sort_order": 22,
    "content": {
      "role_216": "Marketing Executive",
      "desc_217": "Deliver campaigns and activities that drive measurable results.",
      "role_218": "Marketing Manager",
      "desc_219": "Lead strategy and performance across the marketing function.",
      "role_220": "Digital Marketing Specialist",
      "desc_221": "Specialise in channels, performance and data-led growth.",
      "role_222": "Brand Manager",
      "desc_223": "Own brand direction, proposition and customer experience.",
      "role_224": "CRM & Insight Manager",
      "desc_225": "Use data and customer understanding to drive loyalty and value.",
      "role_226": "Head of Marketing",
      "desc_227": "Lead the marketing function and commercial strategy."
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_data_marketing_testimonials",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_data_marketing_testimonials",
    "title": "Marketing Testimonials",
    "sort_order": 23,
    "content": {
      "quote_228": "The Marketing Executive programme taught me to turn customer insight into campaigns that actually convert. My employer trusted me with more from month one.",
      "name_229": "Emily Foster",
      "role_230": "Marketing Assistant, Retail",
      "image_231": "/assets/people/lauren-hiney.webp",
      "quote_232": "Data and analytics were a game-changer. I now measure everything and make decisions with real confidence.",
      "name_233": "Tom Adeyemi",
      "role_234": "Digital Marketing Executive, Technology",
      "image_235": "/assets/people/andrew-hurll.webp",
      "quote_236": "The Level 6 programme elevated me from ‘doing marketing’ to leading strategy. I’m now heading the function.",
      "name_237": "Rachel Green",
      "role_238": "Marketing Manager, Professional Services",
      "image_239": "/assets/people/corinna-denbow.webp"
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_data_marketing_faqs",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_data_marketing_faqs",
    "title": "Marketing Faqs",
    "sort_order": 24,
    "content": {
      "question_240": "Who is the College of Marketing for?",
      "answer_241": "It is for marketers at any stage — from those starting their career building a strong foundation, to experienced professionals ready to lead strategy and drive commercial growth.",
      "question_242": "How is the programme funded?",
      "answer_243": "Programmes are funded through the Apprenticeship Levy or DfE funding. Levy-paying employers fund 100% through their levy, while non-levy employers typically contribute 5% with the government funding the remaining 95%.",
      "question_244": "Do I need to be employed to join?",
      "answer_245": "Yes. These are apprenticeship programmes, so you need to be employed in a relevant marketing role. We work with employers across Kent to match learners to suitable positions.",
      "question_246": "How long does the programme take?",
      "answer_247": "The Marketing Executive (Level 4) typically takes around 18 months, and the Marketing Manager (Level 6) around 24 months, depending on your pace and experience.",
      "question_248": "What qualification will I earn?",
      "answer_249": "You will earn a recognised apprenticeship qualification, plus professional recognition aligned to industry marketing standards, supporting progression toward Chartered Marketer status.",
      "question_250": "Does the programme automatically make me a Chartered Marketer?",
      "answer_251": "No. Chartered Marketer status is awarded separately by CIM and is subject to its current membership, experience, CPD and application requirements.",
      "question_252": "How do I apply?",
      "answer_253": "Get in touch through our contact page and our team will guide you through eligibility, funding and next steps — whether you are an individual learner or an employer."
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_component_c_career_pathways_section",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_component_c_career_pathways_section",
    "title": "Career Pathways Section",
    "sort_order": 25,
    "content": {
      "src_001": "/assets/patterns/kbc-horse-growth.png",
      "text_002": "Career outcomes:"
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_component_f_final_ctasection",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_component_f_final_ctasection",
    "title": "Final Ctasection",
    "sort_order": 26,
    "content": {
      "src_001": "/assets/patterns/kbc-horse-growth.png",
      "to_002": "/book-session",
      "to_003": "/funding-eligibility"
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_component_h_hero_section",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_component_h_hero_section",
    "title": "Hero Section",
    "sort_order": 27,
    "content": {
      "to_001": "#marketing-programmes",
      "to_002": "/book-session",
      "aria_label_003": "Areas of study"
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_component_o_overview_section",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_component_o_overview_section",
    "title": "Overview Section",
    "sort_order": 28,
    "content": {
      "src_001": "/assets/patterns/kbc-ibis-wreath.png",
      "alt_002": "Marketing professionals learning at a Kent Business College event"
    }
  },
  {
    "key": "college_marketing.pages_marketing_college_page_component_p_programmes_section",
    "page": "college_marketing",
    "section": "pages_marketing_college_page_component_p_programmes_section",
    "title": "Programmes Section",
    "sort_order": 29,
    "content": {
      "text_001": "Next intake:",
      "alt_002": "Marketing workshop at Kent Business College"
    }
  },
  {
    "key": "programmes.pages_programme_listing_page_page_programme_listing_page",
    "page": "programmes",
    "section": "pages_programme_listing_page_page_programme_listing_page",
    "title": "Programme Listing Page",
    "sort_order": 0,
    "content": {
      "fallback_title_001": "All Programmes | Kent Business College",
      "fallback_description_002": "Explore Kent Business College apprenticeships, qualifications and professional development. Search programmes by College, level and career interest.",
      "image_003": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/7e82608f80bf412388f97694936a4641.png",
      "eyebrow_004": "Discover your next step",
      "title_005": "All Programmes",
      "summary_006": "Explore our range of programmes designed to accelerate your career and develop in-demand business skills.",
      "eyebrow_007": "Find the right route",
      "title_008": "Let’s find your next step.",
      "description_009": "Whether you are advancing your career, developing your team or exploring apprenticeship opportunities, Kent Business College can help you find the right route for your goals.",
      "to_010": "/book-session",
      "text_011": "Book an information session",
      "to_012": "/contact",
      "text_013": "Speak to our team"
    }
  },
  {
    "key": "programmes.pages_programme_listing_page_component_p_filters",
    "page": "programmes",
    "section": "pages_programme_listing_page_component_p_filters",
    "title": "Filters",
    "sort_order": 1,
    "content": {
      "label_001": "College",
      "label_002": "Level",
      "label_003": "Programme type"
    }
  },
  {
    "key": "programmes.pages_programme_listing_page_component_p_programme_explorer",
    "page": "programmes",
    "section": "pages_programme_listing_page_component_p_programme_explorer",
    "title": "Programme Explorer",
    "sort_order": 2,
    "content": {
      "eyebrow_004": "Explore your options",
      "title_005": "Find your programme.",
      "text_006": "Search by interest, qualification or career direction, then narrow your options by College and level.",
      "aria_label_007": "Find a KBC programme",
      "text_008": "Search programmes",
      "placeholder_009": "Try marketing, project management or CIM",
      "text_010": "Unknown",
      "text_011": "across all Colleges",
      "text_012": "Clear filters",
      "title_013": "No programmes match your current filters."
    }
  },
  {
    "key": "programmes.data_programmes_programme_colleges",
    "page": "programmes",
    "section": "data_programmes_programme_colleges",
    "title": "Programme Colleges",
    "sort_order": 3,
    "content": {
      "project_controls_title_001": "College of Project Controls and Project Management",
      "project_controls_label_002": "Project Controls & Project Management",
      "marketing_title_003": "College of Marketing",
      "marketing_label_004": "Marketing",
      "leadership_title_005": "College of Leadership",
      "leadership_label_006": "Leadership"
    }
  },
  {
    "key": "programmes.data_programmes_programme_type_labels",
    "page": "programmes",
    "section": "data_programmes_programme_type_labels",
    "title": "Programme Type Labels",
    "sort_order": 4,
    "content": {
      "professional_pathway_007": "Professional pathway"
    }
  },
  {
    "key": "programmes.data_programmes_programmes",
    "page": "programmes",
    "section": "data_programmes_programmes",
    "title": "Programmes",
    "sort_order": 5,
    "content": {
      "title_008": "Associate Project Manager Level 4",
      "summary_009": "Build practical project management capability through a focused route combining PMP preparation with applied AI expertise in project controls.",
      "duration_010": "12 months",
      "next_intake_label_011": "September",
      "funding_label_012": "Fully funded for eligible learners",
      "professional_recognition_013": "PMP preparation",
      "image_014": "/assets/images/learner-home/associate-project-manager.webp",
      "image_alt_015": "Associate Project Manager learning at Kent Business College",
      "href_016": "/associate-project-manager-level-4",
      "source_url_017": "https://kentbusinesscollege.com/associate-project-manager-level-4/",
      "title_018": "Project Controls Professional Level 6",
      "summary_019": "Develop work-based capability in planning, cost, forecasting and governance, with Operational, Strategic and Chartered Project Professional routes.",
      "duration_020": "27 months",
      "next_intake_label_021": "September",
      "funding_label_022": "Fully funded for eligible learners",
      "professional_recognition_023": "Chartered pathway: APM-recognised technical-knowledge assessment. ChPP status requires separate APM assessment.",
      "image_024": "/assets/images/programme-project-controls.jpg",
      "image_alt_025": "Project controls programme at Kent Business College",
      "href_026": "/project-controls-professional-level-6",
      "source_url_027": "https://kentbusinesscollege.com/project-control-professional-level-6/",
      "title_028": "Marketing Executive Level 4 Apprenticeship",
      "summary_029": "Develop practical marketing skills through workplace activity while working towards the CIM Level 4 Certificate in Professional and Digital Marketing.",
      "duration_030": "12 months",
      "duration_source_url_031": "https://kentbusinesscollege.com/college-of-marketing-2/",
      "next_intake_label_032": "September 2026",
      "funding_label_033": "Limited funded places, subject to eligibility and programme terms",
      "qualification_034": "CIM Level 4 Certificate in Professional and Digital Marketing",
      "image_035": "/assets/images/programme-marketing-executive.jpg",
      "image_alt_036": "Marketing Executive programme at Kent Business College",
      "href_037": "/marketing-executive-level-4",
      "source_url_038": "https://kentbusinesscollege.com/fully-funded-marketing-executive-level-4-apprenticeship/",
      "title_039": "Marketing Manager Level 6 Apprenticeship",
      "summary_040": "Build strategic thinking, commercial confidence and AI-enabled marketing skills through a workplace-focused apprenticeship with measurable business impact.",
      "duration_041": "16 months",
      "duration_source_url_042": "https://kentbusinesscollege.com/college-of-marketing-2/",
      "next_intake_label_043": "September 2026",
      "funding_label_044": "Limited funded places, subject to eligibility and programme terms",
      "qualification_045": "CIM Diploma Level 6 in Professional and Digital Marketing",
      "image_046": "/assets/images/programme-marketing-manager.jpg",
      "image_alt_047": "Marketing Manager programme at Kent Business College",
      "href_048": "/marketing-manager-level-6",
      "source_url_049": "https://kentbusinesscollege.com/marketing-manager-level-6-apprenticeship/",
      "title_050": "AI in Project Controls Certificate",
      "summary_051": "Build responsible AI workflows, dashboards, automations and governed agents using real project controls data, with a practical workplace capstone.",
      "duration_052": "4 months",
      "next_intake_label_053": "September 2026",
      "image_054": "/assets/images/ai-project-controls-ai-right-hd-v2.png",
      "image_alt_055": "AI in Project Controls course illustration",
      "href_056": "/ai-in-project-controls-certificate",
      "source_url_057": "https://kentbusinesscollege.com/ai-in-project-controls-certificate/"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_pag_associate_project_manager_page",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_pag_associate_project_manager_page",
    "title": "Associate Project Manager Page",
    "sort_order": 0,
    "content": {
      "eyebrow_001": "Programme questions",
      "title_002": "What professionals and employers usually want to know",
      "to_003": "/book-session",
      "text_004": "Book an information session"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_com_funding_section",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_com_funding_section",
    "title": "Funding Section",
    "sort_order": 1,
    "content": {
      "eyebrow_001": "Funding routes for eligible learners",
      "title_002": "Apprenticeship funding and wider professional development support",
      "description_003": "KBC confirms programme suitability, apprenticeship eligibility, employer support and the most appropriate route before enrolment.",
      "text_004": "Department for Education",
      "text_005": "DfE funded",
      "text_006": "Levy and non-levy employer funding",
      "text_007": "Eligible apprenticeship training costs may be funded through the employer’s levy arrangements",
      "text_008": "95% for non-levy employers",
      "text_009": "with 5% employer contribution",
      "text_010": "Education and training delivery",
      "text_011": "End-Point Assessment costs and coaching services",
      "text_012": "Learning materials and portfolio support",
      "text_013": "Current non-levy employer contribution example:",
      "text_014": "£350 total",
      "text_015": ", or",
      "text_016": "£35 per month for 10 months",
      "text_017": ".",
      "text_018": "Kent Business College Fund",
      "text_019": "Separate from DfE funding",
      "text_020": "£1,000",
      "text_021": "Additional professional development support",
      "text_022": "Selected KBC Fund benefits are limited to the first 10 eligible learners per applicable cohort where specified.",
      "to_023": "/funding-eligibility",
      "text_024": "See full funding details",
      "text_025": "Funding is subject to current rules, learner eligibility, employer agreement, prior-learning review, residency and work-location checks, programme suitability and written confirmation."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_com_eligibility_section",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_com_eligibility_section",
    "title": "Eligibility Section",
    "sort_order": 2,
    "content": {
      "eyebrow_026": "DfE funding eligibility",
      "title_027": "Could this funded route work for you?",
      "description_028": "Funding eligibility depends on learner circumstances, paid employment and employer participation.",
      "to_029": "/funding-eligibility",
      "text_030": "Check my eligibility",
      "to_031": "mailto:office@kentbusinesscollege.org?subject=Funding%20advice%20enquiry%20%E2%80%94%20Associate%20Project%20Manager%20Level%204",
      "text_032": "Speak to a funding adviser",
      "text_033": "Initial guidance only. Final eligibility and funding are confirmed through formal assessment.",
      "text_034": "Professional development at any stage of your career",
      "text_035": "Apprenticeships are professional, work-based training programmes for eligible employees. They are not restricted by age, seniority or maximum salary; the programme must be suitable for the learner’s role and development needs."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_com_employer_section",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_com_employer_section",
    "title": "Employer Section",
    "sort_order": 3,
    "content": {
      "eyebrow_036": "For employers",
      "title_037": "Develop project capability without taking people away from the work",
      "description_038": "Use the programme to develop employees already contributing to projects, strengthen core project-management capability and connect learning directly to organisational responsibilities.",
      "to_039": "/employer-agreement",
      "text_040": "Discuss this programme for your team",
      "to_041": "/contact",
      "text_042": "Speak to an employer adviser"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_com_setup_section",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_com_setup_section",
    "title": "Setup Section",
    "sort_order": 4,
    "content": {
      "eyebrow_043": "For employers",
      "title_044": "Setting up the funded route",
      "description_045": "Four clear steps to enrol your team through the Apprenticeship Service. KBC supports you at every stage.",
      "text_046": "KBC UKPRN:",
      "text_047": "Enter this number when adding KBC to your Apprenticeship Service account.",
      "text_048": "Need help with the Apprenticeship Service?",
      "text_049": "KBC can guide you through creating an account, adding KBC as a training provider, and understanding your levy balance.",
      "href_050": "/contact",
      "text_051": "Speak to our employer team",
      "text_052": "for personalised support."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_employer_partner_sectors",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_employer_partner_sectors",
    "title": "Employer Partner Sectors",
    "sort_order": 5,
    "content": {
      "title_001": "Infrastructure and construction sector",
      "logos_name_002": "Barhale",
      "logos_image_003": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/f5beb45c8f87434cb8e0ad7101d78bf8.png",
      "logos_name_004": "Morgan Sindall Construction",
      "logos_image_005": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/7271b55bb1b446e584b073510b28f6f8.webp",
      "logos_name_006": "Primech Building Services",
      "logos_image_007": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/e9de0358e2d44b6bbcb079b185c233cf.webp",
      "logos_name_008": "Oakes Power Services",
      "logos_image_009": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/38b930cb188448b78299666e0db213ad.webp",
      "title_010": "Councils and public sector",
      "logos_name_011": "Kirklees Council",
      "logos_image_012": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/7b6dafb375434e64a4b683168767235d.png",
      "logos_name_013": "North Yorkshire Council",
      "logos_image_014": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/a4c109fe488c4349b2972fab1c9ee9ff.jpg",
      "logos_name_015": "Trafford Council",
      "logos_image_016": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/cbbf5da68c574c0f9bc99fb3005a8d9b.png",
      "title_017": "Healthcare and pharmaceutical sector",
      "logos_name_018": "Amber Therapeutics",
      "logos_image_019": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/afbe20b633ab4c8d9026e4debe777b62.png",
      "logos_name_020": "Callisto Pharma Group",
      "logos_image_021": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/cf8648722b7840e090edaf38dc816930.jpg",
      "logos_name_022": "DHU Healthcare",
      "logos_image_023": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/1a958ae70991424ab0c579e0bdfadf3d.png",
      "logos_name_024": "St John Ambulance Jersey",
      "logos_image_025": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/fcfd872608be4b098fc0206b5a28d93f.png",
      "title_026": "Business and engineering consultancy sector",
      "logos_name_027": "PKF Smith Cooper Systems",
      "logos_image_028": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/803a2b1b6dd4415b867b4782dd375144.png",
      "logos_name_029": "Pragmatics 3D",
      "logos_image_030": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/7159aaccc16a4960bc836bde28ce3fae.jpg",
      "logos_name_031": "NuVision",
      "logos_image_032": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/d21b0abd8b2d43aaa23b39ef7df0e3e8.webp",
      "logos_name_033": "Indeed",
      "logos_image_034": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/e09fd88d0e9044a8b4176ffd6620dcdf.png",
      "title_035": "University and education sector",
      "logos_name_036": "Education and Training Foundation",
      "logos_image_037": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/f15e55ea1ece49db8ffeff434be201f3.webp",
      "logos_name_038": "University of Hull",
      "logos_image_039": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/1b2b90f68df74a29a73e335d56d1b396.png",
      "logos_name_040": "University of Sheffield",
      "logos_image_041": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/7229de2ab02f4a51b8494ffb535f95e1.png",
      "logos_name_042": "UK Agri-Tech Centre",
      "logos_image_043": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/ea7df07fb94b4197952ec747691dee5d.png",
      "title_044": "Aerospace, defence and oil and gas sector",
      "logos_name_045": "BMT",
      "logos_image_046": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/83e94db7f0ff4d74905b473bb6a5b186.jpg",
      "logos_name_047": "Bilfinger",
      "logos_image_048": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/8df9f6d6e18e4858bf6e874f1b837d7c.jpg",
      "logos_name_049": "Stanlow Terminals",
      "logos_image_050": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/1f503c4620f84b4c85b8d4db74f86a94.png",
      "logos_name_051": "Wincanton",
      "logos_image_052": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/298a6f8233a049e384cb3ac72f667b4b.webp"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_programme_meta",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_programme_meta",
    "title": "Programme Meta",
    "sort_order": 6,
    "content": {
      "title_053": "Associate Project Manager Level 4 | PMP + AI in Project Controls | Kent Business College",
      "description_054": "A 12-month work-based Associate Project Manager Level 4 programme combining PMP preparation with practical AI in project controls."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_hero",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_hero",
    "title": "Hero",
    "sort_order": 7,
    "content": {
      "eyebrow_055": "Level 4 • Project Management",
      "title_056": "Associate Project Manager",
      "title_lines_057": "Associate Project",
      "accent_058": "Level 4",
      "lead_059": "Build practical project management capability through a focused route combining PMP preparation with applied AI expertise in project controls.",
      "funding_title_060": "Fully funded for eligible learners",
      "funding_description_061": "Government-funded apprenticeship route, subject to eligibility.",
      "audience_062": "For professionals who manage, coordinate or support projects across business and consultancy.",
      "intake_063": "September 2026",
      "deadline_064": "8 September 2026",
      "availability_065": "Places are limited and allocated on a first-come, first-served basis where applicable.",
      "image_066": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/3d7cdf074fc541438b52cff451f31120.jpg"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_programme_facts",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_programme_facts",
    "title": "Programme Facts",
    "sort_order": 8,
    "content": {
      "label_067": "Level",
      "label_068": "Duration",
      "label_069": "Weekly commitment",
      "label_070": "Delivery",
      "label_071": "Funding",
      "label_072": "Professional enhancement"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_cohorts",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_cohorts",
    "title": "Cohorts",
    "sort_order": 9,
    "content": {
      "label_073": "January",
      "label_074": "April",
      "label_075": "September"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_hero_programme_highlights",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_hero_programme_highlights",
    "title": "Hero Programme Highlights",
    "sort_order": 10,
    "content": {
      "title_076": "12 months",
      "description_077": "A focused, one-year work-based programme.",
      "title_078": "PMP preparation",
      "description_079": "Structured learning for professional progression.",
      "title_080": "Applied AI",
      "description_081": "AI dashboards and agents for project controls.",
      "title_082": "Work-based",
      "description_083": "Apply your learning directly within your role."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_hero_programme_commitments",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_hero_programme_commitments",
    "title": "Hero Programme Commitments",
    "sort_order": 11,
    "content": {
      "label_084": "Applied route:",
      "description_085": "workplace projects, coaching and portfolio support designed around professional practice.",
      "label_086": "Structured learning:",
      "description_087": "around 8.5 hours weekly, planned to fit alongside your role."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_accreditation_marks",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_accreditation_marks",
    "title": "Accreditation Marks",
    "sort_order": 12,
    "content": {
      "name_088": "Project Management Institute Authorized Training Partner",
      "image_089": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/4262c239e6784167ad48b921dbe2dedc.webp",
      "name_090": "APM Project Risk Management accredited training provider",
      "image_091": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/1722c9412a53486c91963042a0cb14b3.webp"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_page_navigation",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_page_navigation",
    "title": "Page Navigation",
    "sort_order": 13,
    "content": {
      "label_092": "Overview",
      "href_093": "#overview",
      "label_094": "Who it is for",
      "href_095": "#audience",
      "label_096": "Pathway",
      "href_097": "#pathway",
      "label_098": "Curriculum",
      "href_099": "#curriculum",
      "label_100": "Practical outputs",
      "href_101": "#outputs",
      "label_102": "Delivery",
      "href_103": "#delivery",
      "label_104": "Workload",
      "href_105": "#workload",
      "label_106": "Coaches",
      "href_107": "#coaches",
      "label_108": "Benefits",
      "href_109": "#benefits",
      "label_110": "Funding",
      "href_111": "#funding",
      "label_112": "Alternative funding",
      "href_113": "#alternative-funding",
      "label_114": "Eligibility",
      "href_115": "#eligibility",
      "label_116": "Events",
      "href_117": "#events",
      "label_118": "Recognition",
      "href_119": "#recognition",
      "label_120": "Employer partners",
      "href_121": "#partners",
      "label_122": "Testimonials",
      "href_123": "#proof",
      "label_124": "FAQs",
      "href_125": "#apm-faq"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_trust_facts",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_trust_facts",
    "title": "Trust Facts",
    "sort_order": 14,
    "content": {
      "text_126": "September 2026 intake",
      "text_127": "Approximately 8 hours weekly",
      "text_128": "12-month route",
      "text_129": "Online delivery",
      "text_130": "8 months of PMP preparation",
      "text_131": "4 months of applied AI"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_audience_profiles",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_audience_profiles",
    "title": "Audience Profiles",
    "sort_order": 15,
    "content": {
      "title_132": "Project Coordinators & Project Officers",
      "description_133": "Build greater structure and confidence across planning, reporting, stakeholders and delivery.",
      "title_134": "Professionals taking on more project responsibility",
      "description_135": "Develop the methods and tools required to manage more complex work.",
      "title_136": "Employers developing existing talent",
      "description_137": "Strengthen project capability without taking employees away from their day-to-day responsibilities."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_capabilities",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_capabilities",
    "title": "Capabilities",
    "sort_order": 16,
    "content": {
      "title_138": "Governance",
      "description_139": "Work within clearer project structures, controls and decision-making frameworks.",
      "title_140": "Planning & Scheduling",
      "description_141": "Build stronger project plans, schedules and delivery visibility.",
      "title_142": "Cost & Control",
      "description_143": "Develop more structured approaches to project cost and performance.",
      "title_144": "Risk & Quality",
      "description_145": "Identify uncertainty, manage risk and strengthen project quality.",
      "title_146": "Stakeholder Communication",
      "description_147": "Communicate project information more effectively with stakeholders and teams.",
      "title_148": "Procurement",
      "description_149": "Understand procurement considerations within project delivery.",
      "title_150": "Leadership",
      "description_151": "Develop stronger project-team and delivery leadership.",
      "title_152": "AI Application",
      "description_153": "Use practical AI Dashboards and AI Agents to support project information, reporting and workflow."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_ai_layers",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_ai_layers",
    "title": "Ai Layers",
    "sort_order": 17,
    "content": {
      "title_154": "Project Management Practice",
      "title_155": "Practical AI Application",
      "items_156": "AI Dashboard Development & Design",
      "items_157": "AI Agents using n8n",
      "title_158": "Professional Development",
      "items_159": "Relevant professional exam / qualification support where included"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_curriculum_phases",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_curriculum_phases",
    "title": "Curriculum Phases",
    "sort_order": 18,
    "content": {
      "label_160": "Foundations",
      "topics_161": "Project Management Governance",
      "topics_162": "Agile Project Management",
      "topics_163": "Project Scope Management",
      "label_164": "Plan & Control",
      "topics_165": "Project Cost Management",
      "topics_166": "Project Schedule Management",
      "topics_167": "Project Quality Management",
      "topics_168": "Project Risk Management",
      "label_169": "Engage & Deliver",
      "topics_170": "Project Communications",
      "topics_171": "Stakeholder Engagement",
      "topics_172": "Project Reporting",
      "topics_173": "Project Procurement",
      "label_174": "Lead",
      "topics_175": "Project Leadership and Team Management",
      "label_176": "Apply AI",
      "topics_177": "AI Dashboards Development and Design",
      "topics_178": "AI Agents using n8n"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_learning_steps",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_learning_steps",
    "title": "Learning Steps",
    "sort_order": 19,
    "content": {
      "title_179": "Live Learning",
      "detail_180": "Interactive online sessions led by professional coaches",
      "title_181": "Workplace Application",
      "detail_182": "Apply concepts directly to real projects in your role",
      "title_183": "Coaching",
      "detail_184": "One-to-one support and structured guidance",
      "title_185": "Reflection & Evidence",
      "detail_186": "Build workplace-based reflective reports and portfolios",
      "title_187": "Progress Review",
      "detail_188": "Regular reviews to track capability development",
      "title_189": "EPA Preparation",
      "detail_190": "Structured preparation for end-point assessment"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_learning_inclusions",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_learning_inclusions",
    "title": "Learning Inclusions",
    "sort_order": 20,
    "content": {
      "text_191": "Live interactive sessions",
      "text_192": "Recordings after every session",
      "text_193": "Catch-up support",
      "text_194": "Workplace-based reflective reports",
      "text_195": "Structured coaching",
      "text_196": "Assessment preparation"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_workload",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_workload",
    "title": "Workload",
    "sort_order": 21,
    "content": {
      "label_197": "Live online classes",
      "description_198": "Interactive tutor-led project management and applied learning, with tutor explanation, discussion, project examples and practical activities.",
      "label_199": "Reading & quizzes",
      "description_200": "Guided independent learning and knowledge checks through structured reading, quizzes and supporting learning materials.",
      "label_201": "Reflective workplace application",
      "description_202": "Connect your development with real project responsibilities and evidence, capturing anonymised examples of how project management and AI in project controls are applied at work."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_monthly_submissions",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_monthly_submissions",
    "title": "Monthly Submissions",
    "sort_order": 22,
    "content": {
      "title_203": "Learning platform activities",
      "description_204": "Reading materials, quizzes, podcasts and online learning tasks completed through the learning management system.",
      "title_205": "Portfolio-building activities",
      "description_206": "Evidence of applied project management and AI in project controls practice, supported by reflection and professional commentary."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_workload_support",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_workload_support",
    "title": "Workload Support",
    "sort_order": 23,
    "content": {
      "title_207": "Monthly coaching meeting",
      "description_208": "You will have a one-hour monthly coaching meeting. During this meeting, you make a short presentation to your coach about your knowledge, skills and behaviours progression and discuss your evidence, learning needs and next actions.",
      "title_209": "Progress review every 10 weeks",
      "description_210": "Every 10 weeks, there is a one-hour progress review with your line manager and coach. Your coach presents your progression, listens to feedback from your line manager and identifies learning needs to support your development and career progression.",
      "title_211": "Workplace support",
      "description_212": "Apprenticeship learners need employer support for off-the-job learning. Your line manager should help protect learning time, support workplace application and provide feedback on how your learning is supporting your role and organisation."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_locations",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_locations",
    "title": "Locations",
    "sort_order": 24,
    "content": {
      "descriptor_213": "Professional masterclasses & networking",
      "descriptor_214": "Local workshops & community",
      "descriptor_215": "Regional professional events",
      "descriptor_216": "Regional professional events",
      "descriptor_217": "Central networking hub",
      "descriptor_218": "Northern professional events",
      "descriptor_219": "Northern networking hub"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_coaching_items",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_coaching_items",
    "title": "Coaching Items",
    "sort_order": 25,
    "content": {
      "text_220": "Free one-to-one tutoring",
      "text_221": "Live interactive lessons",
      "text_222": "Catch-up support"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_kbc_fund_benefits",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_kbc_fund_benefits",
    "title": "Kbc Fund Benefits",
    "sort_order": 26,
    "content": {
      "text_223": "Professional membership fees",
      "text_224": "Registration and professional examination fees",
      "text_225": "Workshop travel",
      "text_226": "Graduation ceremony support and rewards",
      "text_227": "Professional pathway support, including APM ChPP and ICostE / Certified Professional Cost Engineer routes"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_coaches",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_coaches",
    "title": "Coaches",
    "sort_order": 27,
    "content": {
      "name_228": "Adeyemi",
      "image_229": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/6089f4c705754c1dbeab2b0e046539fd.webp",
      "role_230": "Project Management Coach",
      "specialism_231": "PMP, Scheduling, Earned Value Management, CIM",
      "bio_232": "Master of Science in Strategic Project Management and Master of Science in Urban Planning. Certified in Project Management Professional (PMP), Scheduling Professional, Earned Value Management and Chartered Institute of Marketing routes.",
      "name_233": "Patryk",
      "image_234": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/d185a483d9b3495dbe5c3d3bcf39aa23.webp",
      "role_235": "Study & Portfolio Coach",
      "specialism_236": "Strategic Project Management",
      "bio_237": "Master of Science in Strategic Project Management, supporting learners with project management thinking, evidence development and applied study progress.",
      "tags_238": "Strategic PM",
      "name_239": "Aryan",
      "image_240": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/7553095cab4148ef80c0c338b8c21b55.webp",
      "role_241": "Portfolio & Application Coach",
      "specialism_242": "Evidence development & study planning",
      "bio_243": "Master of Science in Strategic Project Management, supporting learners with portfolio evidence, study planning and workplace application of learning.",
      "tags_244": "Study Planning",
      "name_245": "Randa",
      "image_246": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/e3817d1909a14bfeb48314cf6cc5c45c.webp",
      "role_247": "Analytics & Evidence Coach",
      "specialism_248": "Operations Research",
      "bio_249": "Master of Science and Doctor of Philosophy in Operations Research, supporting learners with analytical thinking, data-informed decisions and structured evidence.",
      "tags_250": "Operations Research"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_eligibility_groups",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_eligibility_groups",
    "title": "Eligibility Groups",
    "sort_order": 28,
    "content": {
      "title_251": "UK Residency",
      "points_252": "UK resident for the past 3 years.",
      "title_253": "Right to Work",
      "points_254": "Must meet the relevant right-to-work and residency requirements.",
      "title_255": "Current Training",
      "points_256": "Not enrolled in other government-funded training at the time of the programme.",
      "title_257": "Employment",
      "points_258": "Self-employed individuals are not eligible for DfE funding.",
      "points_259": "Paid employment in England.",
      "points_260": "Normally 30+ hours per week.",
      "points_261": "Minimum 16 hours where applicable.",
      "title_262": "Employer",
      "points_263": "Employer based in England.",
      "points_264": "Employer registered with the Apprenticeship Service.",
      "title_265": "Working Location",
      "points_266": "Spend at least 50% of working hours within England."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_employer_benefits",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_employer_benefits",
    "title": "Employer Benefits",
    "sort_order": 29,
    "content": {
      "title_267": "Develop existing talent",
      "description_268": "Strengthen the project capability of employees already contributing to delivery — without recruiting externally.",
      "title_269": "Build stronger project capability",
      "description_270": "Structured methodology, governance and planning skills that improve project outcomes across your organisation.",
      "title_271": "Connect learning to real work",
      "description_272": "Programme tasks are applied directly to live projects, so learning delivers immediate workplace value.",
      "title_273": "Use eligible funding appropriately",
      "description_274": "Leverage DfE apprenticeship funding to invest in your people with minimal or no direct cost.",
      "title_275": "Support longer-term development",
      "description_276": "Create a clear progression pathway from project coordinator to project manager and beyond."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_setup_steps",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_setup_steps",
    "title": "Setup Steps",
    "sort_order": 30,
    "content": {
      "title_277": "Confirm the programme",
      "description_278": "Identify the employee, role and programme fit. KBC will guide you through the right pathway for your team.",
      "title_279": "Sign the digital contract",
      "description_280": "Complete the employer agreement via our digital route. This secures the programme place and confirms employer commitment.",
      "cta_label_281": "Employer agreement",
      "cta_href_282": "/employer-agreement",
      "title_283": "Add KBC to the Apprenticeship Service",
      "description_284": "Use the Government Apprenticeship Service route. If no account exists, Government Gateway credentials can be used to create one.",
      "cta_label_285": "Access Digital Apprenticeship Service",
      "cta_href_286": "https://www.gov.uk/guidance/login-to-your-apprenticeship-service-account",
      "title_287": "Continue the application",
      "description_288": "Once these steps are completed, KBC will send the next application step and guide you through onboarding."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_testimonials",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_testimonials",
    "title": "Testimonials",
    "sort_order": 31,
    "content": {
      "name_289": "Gill Stoney",
      "role_290": "Workforce Scheduling Team Manager",
      "company_291": "St John Ambulance",
      "programme_292": "Project Management",
      "quote_293": "It was really good to go through all the system elements, especially considering how confused we were and that we had all been together for nearly two weeks. If we had had this before the course started, it would have been much easier and far less stressful. Affan was very good at explaining the elements of the online system for recording our work and hours, and I now feel much more comfortable using it.",
      "name_294": "Inga Lightley",
      "role_295": "Administrator & Marketing Professional",
      "company_296": "Independent professional",
      "programme_297": "Executive Marketing",
      "quote_298": "I am enjoying the Level 4 Executive Marketing programme at Kent Business College. The lecturers are knowledgeable and friendly, and I really enjoy the live sessions with high-quality slides and the option to rewatch recordings later. The additional quizzes also make the learning experience engaging and interactive.",
      "name_299": "Andrew Hurll",
      "role_300": "Commercial Manager",
      "company_301": "SCA Group Limited",
      "programme_302": "Executive Marketing",
      "quote_303": "I am currently studying on the Executive Marketing Manager Level 4 programme at Kent Business College. The course is very well organised and delivered, and the lecturers are engaging and friendly. I am thoroughly enjoying the content, and all materials and support are easily accessible. I am looking forward to completing the course and gaining my qualification."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_recognition",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_recognition",
    "title": "Recognition",
    "sort_order": 32,
    "content": {
      "name_304": "APM",
      "relationship_305": "Professional body",
      "description_306": "The Association for Project Management — a recognised professional body for project management practice.",
      "name_307": "PMI",
      "relationship_308": "Professional body",
      "description_309": "The Project Management Institute — a recognised professional body for project management.",
      "name_310": "ChPP",
      "relationship_311": "Chartered progression pathway",
      "description_312": "Chartered Project Professional — a Chartered progression pathway where applicable.",
      "name_313": "Professional exams",
      "relationship_314": "Qualification / exam support",
      "description_315": "Relevant professional exam and qualification support is available where included."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_overview_stats",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_overview_stats",
    "title": "Overview Stats",
    "sort_order": 33,
    "content": {
      "label_316": "Work-based route",
      "label_317": "PMP preparation",
      "label_318": "Applied AI",
      "label_319": "Structured learning"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_overview_capabilities",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_overview_capabilities",
    "title": "Overview Capabilities",
    "sort_order": 34,
    "content": {
      "title_320": "Project Management",
      "description_321": "Develop practical capability across governance, scope, cost, schedule, quality, risk, procurement, communication and leadership.",
      "title_322": "PMP Preparation",
      "description_323": "Build structured knowledge and exam preparation aligned with professional project management development.",
      "title_324": "Applied AI",
      "description_325": "Create practical AI dashboards and explore governed AI agents using tools including n8n.",
      "title_326": "Workplace Application",
      "description_327": "Connect your learning with real responsibilities, project challenges and professional evidence from your role."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_audience_groups",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_audience_groups",
    "title": "Audience Groups",
    "sort_order": 35,
    "content": {
      "title_328": "Project management and delivery roles",
      "items_329": "Project managers",
      "items_330": "Assistant and junior project managers",
      "items_331": "Project coordinators and project officers",
      "items_332": "Delivery coordinators",
      "items_333": "Workstream and implementation leads",
      "items_334": "Professionals already managing projects without a formal project management qualification",
      "title_335": "Business and operational roles",
      "items_336": "Business and management consultants",
      "items_337": "Operations professionals",
      "items_338": "Business transformation professionals",
      "items_339": "Client-service professionals",
      "items_340": "Marketing project managers",
      "items_341": "Digital transformation professionals",
      "items_342": "Finance and commercial professionals involved in project delivery",
      "title_343": "Engineering and technical environments",
      "items_344": "Project engineers",
      "items_345": "Site and technical coordinators",
      "items_346": "Construction and infrastructure project professionals",
      "items_347": "Manufacturing project teams",
      "items_348": "Planning and reporting professionals",
      "items_349": "Risk and project controls professionals"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_pathway_stages",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_pathway_stages",
    "title": "Pathway Stages",
    "sort_order": 36,
    "content": {
      "period_350": "Months 1–8",
      "title_351": "Project Management Professional preparation",
      "description_352": "Core delivery, governance, leadership and project decision-making.",
      "period_353": "Months 9–12",
      "title_354": "AI in Project Controls",
      "description_355": "Dashboards, automation and governed AI agents."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_pathway_details",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_pathway_details",
    "title": "Pathway Details",
    "sort_order": 37,
    "content": {
      "title_356": "Months 1–8: Project Management Professional (PMP)",
      "description_357": "Complete two credits focused on the project management methods, leadership judgement, governance, planning, delivery, risk, stakeholder and business skills needed by project managers.",
      "title_358": "Months 9–12: AI in Project Controls",
      "description_359": "Complete one credit focused on practical AI dashboards, automation, project data, workflows, reporting, meeting analysis and governed AI agents.",
      "title_360": "Recognition and portfolio",
      "description_361": "Build credible workplace evidence throughout the programme while working towards Associate Fellow Level 4 — AFIPC Level 4 — from the Institute of Project Controls."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_curriculum_tracks",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_curriculum_tracks",
    "title": "Curriculum Tracks",
    "sort_order": 38,
    "content": {
      "eyebrow_362": "Professional project management · 8 months",
      "title_363": "Project Management Professional (PMP)",
      "description_364": "Strengthen your ability to manage projects from initiation to closure, with practical attention to people, process, business value and delivery discipline.",
      "items_365": "Project initiation, business case, scope and requirements",
      "items_366": "Planning, scheduling, resources, budgeting and procurement",
      "items_367": "Risk, issue, quality, change and stakeholder management",
      "items_368": "Leadership, team development, communication and conflict resolution",
      "items_369": "Governance, reporting, benefits, value and project closure",
      "items_370": "Professional exam preparation, revision planning and practice questions",
      "eyebrow_371": "AI-enabled project controls · 4 months",
      "title_372": "AI in Project Controls Certificate",
      "description_373": "Develop responsible, practical uses of artificial intelligence in project controls, project reporting and project decision support.",
      "items_374": "Using ChatGPT and Claude for project analysis, reporting and meeting intelligence",
      "items_375": "Using n8n to automate workflows and approval routes",
      "items_376": "Using Google Sheets as a structured project controls data layer",
      "items_377": "Using Lovable to create dashboards and simple project controls applications",
      "items_378": "Designing AI agents with human review, approval gates and audit trails",
      "items_379": "Building an applied AI project controls portfolio output"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_practical_outputs",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_practical_outputs",
    "title": "Practical Outputs",
    "sort_order": 39,
    "content": {
      "text_380": "Project charter or project brief",
      "text_381": "Stakeholder map",
      "text_382": "Project schedule",
      "text_383": "Cost and performance information",
      "text_384": "Risk and issue register",
      "text_385": "Communication plan",
      "text_386": "Change control records",
      "text_387": "Project status reports",
      "text_388": "Lessons learned documentation",
      "text_389": "Project management dashboard",
      "text_390": "AI-assisted reporting workflow",
      "text_391": "Automation workflow",
      "text_392": "Governed AI agent design"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_delivery_steps",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_delivery_steps",
    "title": "Delivery Steps",
    "sort_order": 40,
    "content": {
      "title_393": "Prepare",
      "description_394": "Complete reading, quizzes, podcasts, diagnostic activities and short preparation tasks before class.",
      "title_395": "Attend live online teaching",
      "description_396": "Join 2-hour live interactive classes with tutor explanation, examples, discussion and workshops.",
      "title_397": "Apply at work",
      "description_398": "Apply your learning in the workplace or an approved simulated project context, while collecting credible professional evidence.",
      "title_399": "Build your portfolio",
      "description_400": "Submit practical evidence, reflective notes and development updates through the learning platform.",
      "title_401": "Prepare for professional exams",
      "description_402": "Use revision planning, practice questions and tutor support to prepare for the Project Management Professional (PMP) route.",
      "title_403": "Complete the AI project",
      "description_404": "Produce a practical AI project controls output, such as a dashboard, workflow, reporting assistant or governed AI agent."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_learner_benefits",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_learner_benefits",
    "title": "Learner Benefits",
    "sort_order": 41,
    "content": {
      "title_405": "Wellbeing and learner support",
      "description_406": "Receive personal, professional and academic support throughout your learning journey.",
      "items_407": "One-to-one tutoring, available seven days a week.",
      "items_408": "Live teaching and session recordings.",
      "items_409": "Private healthcare insurance through Benenden Health.",
      "items_410": "Structured workplace application support.",
      "title_411": "Know yourself and build your career",
      "description_412": "Gain greater clarity about your strengths, personality, interests and future career direction.",
      "items_413": "Free optional personality traits assessment.",
      "items_414": "RAISEC career interest test.",
      "items_415": "Job-fit and career-fit psychological tests.",
      "items_416": "Career guidance to identify the right professional pathway.",
      "items_417": "Personal development dashboards.",
      "title_418": "Professional recognition and networking",
      "description_419": "Build valuable connections through professional bodies, events and recognition opportunities.",
      "items_420": "Project Management Professional preparation.",
      "items_421": "Professional examination support where included in the offer.",
      "items_422": "Institute of Project Controls membership support.",
      "items_423": "Project management and AI learning materials.",
      "items_424": "Optional UK networking workshops.",
      "items_425": "Student club membership opportunities in London, Kent, Manchester, Liverpool and Birmingham.",
      "items_426": "Professional events and networking opportunities.",
      "items_427": "Learners completing the applicable programme route may participate in the graduation ceremony at Rochester Cathedral, Kent."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_alternative_funding_routes",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_alternative_funding_routes",
    "title": "Alternative Funding Routes",
    "sort_order": 42,
    "content": {
      "eyebrow_428": "Individual bursary route",
      "support_429": "70% bursary support",
      "description_430": "For unemployed or self-employed applicants, or applicants who cannot secure employer support, subject to acceptance and availability.",
      "eyebrow_431": "Employer-funded route",
      "support_432": "50% bursary support",
      "description_433": "For employers choosing to fund the programme directly, subject to acceptance and availability."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_faqs",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_faqs",
    "title": "Faqs",
    "sort_order": 43,
    "content": {
      "question_434": "When do the courses start?",
      "answer_435": "The course start windows are September, January and April. The team will confirm which cohort and sequence is available for your chosen intake.",
      "question_436": "What if I am not eligible for apprenticeship funding?",
      "answer_437": "Kent Business College can assist you in exploring the Institute of Project Controls fund. This may be relevant for international applicants, learners outside apprenticeship eligibility, unemployed applicants, self-employed applicants, or employed applicants whose employers cannot support 7 to 8 hours of off-the-job study time. The fund application may require your curriculum vitae, a positive-character statement and a statement about your future passions and goals.",
      "question_438": "Can I take modules from another level if they fit my job better?",
      "answer_439": "This programme has one standard pathway. However, Kent Business College can review your job duties and advise whether the Level 3, Level 4 or Level 6 route is a better fit. The credit model makes the wider college portfolio flexible, but the funded programme must still meet job-role, evidence and funding requirements."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_dat_workload_section_data",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_dat_workload_section_data",
    "title": "Workload Section Data",
    "sort_order": 44,
    "content": {
      "eyebrow_440": "Expected workload and learning commitment",
      "title_441": "A structured weekly commitment that works alongside your career",
      "description_442": "The programme combines live online learning, guided independent study, practical portfolio-building and regular coaching. You will apply project management and AI in project controls principles to real workplace contexts and build evidence of your knowledge, skills and behaviours progression throughout the programme.",
      "stats_title_443": "Apprenticeship allocation",
      "stats_description_444": "To complete the apprenticeship programme, learners complete the required off-the-job training hours across the 12-month programme.",
      "stats_title_445": "Weekly live teaching",
      "stats_description_446": "Live, interactive online class with your tutor, including discussion, worked examples, case analysis and applied project management practice.",
      "stats_title_447": "Typical weekly study",
      "stats_description_448": "A balanced weekly commitment combining live learning, guided reading and practical portfolio-building activities.",
      "weekly_title_449": "Your weekly learning commitment",
      "weekly_description_450": "Each week is designed to help you learn, apply, evidence and reflect. The expected weekly workload is approximately 8 hours.",
      "note_451": "Important: Portfolio evidence should be authentic, relevant and professionally presented. Learners should anonymise confidential employer, client, project and commercial information where required.",
      "monthly_title_452": "What you submit each month",
      "monthly_description_453": "There are two regular monthly submissions to your coach. These help keep your progress visible, structured and aligned with programme requirements.",
      "image_454": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/beae621f6ac34c18ae0107e904451b1f.webp",
      "image_alt_455": "KBC learners attending a professional project controls workshop"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_com_learning_section",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_com_learning_section",
    "title": "Learning Section",
    "sort_order": 45,
    "content": {
      "eyebrow_001": "Applied learning",
      "title_002": "Learn it. Apply it. Evidence it.",
      "description_003": "The programme combines live professional learning with workplace application, structured support and evidence-building."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_com_locations_section",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_com_locations_section",
    "title": "Locations Section",
    "sort_order": 46,
    "content": {
      "eyebrow_004": "Beyond online learning",
      "title_005": "Join professional workshops across the UK",
      "description_006": "The core programme is delivered online, with optional in-person workshops providing additional opportunities for professional learning and networking.",
      "text_007": "Travel costs covered where included"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_com_why_kbc_section",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_com_why_kbc_section",
    "title": "Why Kbc Section",
    "sort_order": 47,
    "content": {
      "eyebrow_008": "Why Kent Business College",
      "title_009": "The programme is only part of the experience",
      "description_010": "KBC combines workplace-focused learning with extended professional support and additional investment designed to help you get more from your development.",
      "text_011": "Coaching",
      "text_012": "Support beyond the weekly lesson",
      "text_013": "7 days",
      "text_014": "a week · until 9 pm",
      "text_015": "Professional community & networking",
      "text_016": "Optional UK networking workshops and professional events, with club memberships where applicable.",
      "text_017": "Graduation ceremony",
      "text_018": "Rochester Cathedral, Kent. Graduation rewards and a laptop prize where applicable.",
      "text_019": "Travel & access",
      "text_020": "Workshop travel support where included.",
      "text_021": "Wellbeing & benefits",
      "text_022": "Private health care insurance available where included.",
      "text_023": "Kent Business College Fund",
      "text_024": "Additional investment from KBC",
      "text_025": "Separate from Department for Education apprenticeship funding, extending your development beyond the core programme.",
      "text_026": "Selected KBC Fund benefits are limited to the first 10 eligible learners per applicable cohort where specified."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_com_coaches_section",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_com_coaches_section",
    "title": "Coaches Section",
    "sort_order": 48,
    "content": {
      "eyebrow_027": "Coaching support",
      "title_028": "Coaches who support your portfolio and skills",
      "description_029": "Coaches support study habits, evidence development, professional confidence and the connection between training and workplace performance.",
      "text_030": "Want to discuss the programme and learner support?",
      "text_031": "Book a session to explore the coaching approach, programme fit and the next available cohort.",
      "to_032": "/book-session",
      "text_033": "Book a session"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_com_actions",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_com_actions",
    "title": "Actions",
    "sort_order": 49,
    "content": {
      "label_001": "Check funding eligibility"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_com_programme_overview_section",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_com_programme_overview_section",
    "title": "Programme Overview Section",
    "sort_order": 50,
    "content": {
      "src_001": "/assets/patterns/kbc-ibis-wreath.png",
      "eyebrow_002": "Programme overview",
      "title_003": "Practical project management development for the way projects are delivered today",
      "description_004": "Build core project management capability while learning how dashboards, automation and AI agents can support better visibility, reporting and project decision-making.",
      "to_005": "/book-session",
      "text_006": "Book an information session",
      "to_007": "#funding",
      "text_008": "View funding details"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_com_audience_roles_section",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_com_audience_roles_section",
    "title": "Audience Roles Section",
    "sort_order": 51,
    "content": {
      "eyebrow_009": "Who should apply",
      "title_010": "For professionals who manage, coordinate or support projects across different sectors",
      "description_011": "This programme is designed for working professionals who want to formalise their project management capability, strengthen their professional credibility and understand how AI can be applied responsibly within project delivery and controls."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_com_pathway_section",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_com_pathway_section",
    "title": "Pathway Section",
    "sort_order": 52,
    "content": {
      "src_012": "/assets/patterns/kbc-horse-growth.png",
      "eyebrow_013": "One pathway",
      "title_014": "Project Management Professional (PMP) + AI in Project Controls",
      "description_015": "Follow a clearly structured 12-month learning journey: eight months dedicated to PMP preparation, followed by four months focused on the AI in Project Controls Certificate.",
      "to_016": "/ai-in-project-controls-certificate",
      "text_017": "View the AI in Project Controls Certificate",
      "text_018": "External certificates, memberships and professional recognition are subject to the relevant organisation’s assessment, evidence, membership and exam requirements. KBC confirms the exact route and included costs before enrolment."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_com_programme_curriculum_section",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_com_programme_curriculum_section",
    "title": "Programme Curriculum Section",
    "sort_order": 53,
    "content": {
      "eyebrow_019": "Programme content",
      "title_020": "What you study across the 12 months",
      "description_021": "The programme combines core project management capability and applied AI skills to improve project reporting, control and decision-making.",
      "text_022": "Relevant to different professional backgrounds and cohorts",
      "text_023": "Case studies, examples and study materials can reflect each learner’s professional background—from engineering, construction and manufacturing to consultancy, marketing, finance, information technology and digital transformation."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_com_eyebrow",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_com_eyebrow",
    "title": "Eyebrow",
    "sort_order": 54,
    "content": {
      "text_024": "Practical outputs",
      "text_032": "Benefits of studying with Kent Business College",
      "text_042": "Employer partnerships"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_com_title",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_com_title",
    "title": "Title",
    "sort_order": 55,
    "content": {
      "text_025": "Build evidence you can apply in your role",
      "text_033": "More than a qualification",
      "text_043": "Trusted by employers across project-driven sectors"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_com_description",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_com_description",
    "title": "Description",
    "sort_order": 56,
    "content": {
      "text_026": "Develop practical project management and AI outputs that support workplace performance and professional development.",
      "text_034": "Your funded learning journey is designed to strengthen wellbeing, career confidence, professional recognition and long-term success.",
      "text_044": "Established partnerships across construction, the public sector, healthcare, consultancy, education, aerospace, defence and energy."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_com_note",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_com_note",
    "title": "Note",
    "sort_order": 57,
    "content": {
      "text_027": "Workplace information should be appropriately anonymised where confidentiality, client or commercial restrictions apply."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_com_delivery_section",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_com_delivery_section",
    "title": "Delivery Section",
    "sort_order": 58,
    "content": {
      "src_028": "/assets/patterns/kbc-gold-leaf.png",
      "eyebrow_029": "Delivery and assessment",
      "title_030": "Live, interactive and applied to real work",
      "description_031": "Designed around the responsibilities of working professionals, the programme combines live online sessions, guided independent study, portfolio development, regular coaching and progress support."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_com_alternative_funding_section",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_com_alternative_funding_section",
    "title": "Alternative Funding Section",
    "sort_order": 59,
    "content": {
      "src_035": "/assets/patterns/kbc-horse-growth.png",
      "eyebrow_036": "If you are not eligible for apprenticeship funding",
      "title_037": "Alternative support may still be available",
      "description_038": "Alternative support may be available through the Kent Business College Fund and Institute of Project Controls, subject to acceptance and availability.",
      "text_039": "Funding is subject to current rules, learner eligibility, employer agreement, prior-learning review, residency and work-location checks, programme suitability and written confirmation. Bursary places and KBC-funded professional extras are limited.",
      "to_040": "https://instituteofprojectcontrols.com/scholarships",
      "text_041": "Explore IPC bursaries"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_com_programme_search",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_com_programme_search",
    "title": "Programme Search",
    "sort_order": 60,
    "content": {
      "text_045": "\"project manag\""
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_com_programme_events_section",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_com_programme_events_section",
    "title": "Programme Events Section",
    "sort_order": 61,
    "content": {
      "eyebrow_046": "Upcoming Project Management Professional events",
      "title_047": "Learn more about the programme, funding and application process",
      "description_048": "Join an online information event covering the project management programme, AI dashboards, AI agents, funding and the application process."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_com_alternative_route_notice",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_com_alternative_route_notice",
    "title": "Alternative Route Notice",
    "sort_order": 62,
    "content": {
      "aria_label_049": "Alternative route support",
      "src_050": "/assets/patterns/kbc-horse-growth.png",
      "text_051": "Need an alternative route?",
      "text_052": "If your line manager cannot support off-the-job hours, speak to us",
      "text_053": "If your employer or line manager is not able to support the required off-the-job learning hours, you may still be able to explore an Institute of Project Controls funded route or an employer-supported route, subject to eligibility and approval.",
      "text_054": "Our admissions team will explain the apprenticeship route, employer responsibilities, Institute of Project Controls funding options and the best route for your situation.",
      "to_055": "/book-session",
      "text_056": "Book an information session"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_com_workload_intro_card",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_com_workload_intro_card",
    "title": "Workload Intro Card",
    "sort_order": 63,
    "content": {
      "text_057": "Apprenticeship allocation",
      "text_058": "370 hours",
      "text_059": "Required off-the-job training across the 12-month programme."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_com_live_learning_badge",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_com_live_learning_badge",
    "title": "Live Learning Badge",
    "sort_order": 64,
    "content": {
      "text_060": "Live, expert-led and applied"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_com_professional_community_badge",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_com_professional_community_badge",
    "title": "Professional Community Badge",
    "sort_order": 65,
    "content": {
      "text_061": "Professional community"
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_com_recognition_section",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_com_recognition_section",
    "title": "Recognition Section",
    "sort_order": 66,
    "content": {
      "eyebrow_001": "Professional standards & progression",
      "title_002": "Professional development connected to recognised practice",
      "description_003": "Selected KBC programme elements connect learning with relevant professional standards, qualifications and progression opportunities.",
      "text_004": "Professional qualifications, membership and Chartered progression remain subject to relevant body requirements."
    }
  },
  {
    "key": "programme_apm_l4.pages_associate_project_manager_page_com_final_cta_section",
    "page": "programme_apm_l4",
    "section": "pages_associate_project_manager_page_com_final_cta_section",
    "title": "Final Cta Section",
    "sort_order": 67,
    "content": {
      "eyebrow_005": "Take the next step",
      "title_006": "Discover whether this Level 4 route is right for you",
      "text_007": "Developing someone in your team?",
      "text_008": "Discuss the programme as an employer route.",
      "to_009": "/employer-agreement",
      "text_010": "Speak to KBC as an employer",
      "to_011": "/funding-eligibility",
      "text_012": "Check funding eligibility",
      "text_013": "Start windows: September, January and April"
    }
  },
  {
    "key": "programme_pcp_l6.pages_project_controls_professional_leve_project_controls_professional_level6_page",
    "page": "programme_pcp_l6",
    "section": "pages_project_controls_professional_leve_project_controls_professional_level6_page",
    "title": "Project Controls Professional Level6 Page",
    "sort_order": 0,
    "content": {
      "eyebrow_001": "Frequently asked questions",
      "title_002": "Practical answers before you apply",
      "to_003": "/book-session",
      "text_004": "Book an information session"
    }
  },
  {
    "key": "programme_pcp_l6.pages_project_controls_professional_leve_pathways_section",
    "page": "programme_pcp_l6",
    "section": "pages_project_controls_professional_leve_pathways_section",
    "title": "Pathways Section",
    "sort_order": 1,
    "content": {
      "text_001": "Select six credits",
      "text_002": "Association for Project Management recognised assessment route",
      "text_003": "modules, professional bodies, credits and typical durations",
      "text_004": "Course / professional qualification",
      "text_005": "Professional body or owner",
      "text_006": "Credits",
      "text_007": "Typical duration",
      "text_008": "Professional body or owner",
      "to_009": "/chartered-pathway",
      "text_010": "Chartered Pathway",
      "to_011": "/book-session",
      "text_012": "Discuss your pathway"
    }
  },
  {
    "key": "programme_pcp_l6.pages_project_controls_professional_leve_hero_data",
    "page": "programme_pcp_l6",
    "section": "pages_project_controls_professional_leve_hero_data",
    "title": "Hero Data",
    "sort_order": 2,
    "content": {
      "cohort_action_label_001": "Save your place",
      "hero_eyebrow_002": "Project Controls",
      "hero_title_003": "Project Controls Professional",
      "hero_accent_004": "Level 6",
      "hero_lead_005": "A fully funded, work-based pathway for professionals who plan, control, forecast and govern complex projects with Operational, Strategic and Chartered Project Professional routes.",
      "hero_funding_title_006": "Fully funded for eligible learners",
      "hero_funding_description_007": "Government-funded apprenticeship route, subject to eligibility.",
      "hero_audience_008": "For professionals working across project controls, planning, cost, risk, reporting, governance and transformation.",
      "hero_image_009": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/3d7cdf074fc541438b52cff451f31120.jpg",
      "cohorts_label_010": "January",
      "cohorts_label_011": "April",
      "cohorts_label_012": "September",
      "highlights_title_013": "27 months",
      "highlights_description_014": "Soft start, modules and final workshops.",
      "highlights_title_015": "6 credits",
      "highlights_description_016": "Each credit is delivered as a four-month block.",
      "highlights_title_017": "3 pathways",
      "highlights_description_018": "Operational, Strategic or Chartered Professional.",
      "highlights_title_019": "£34,000 support",
      "highlights_description_020": "Potential package, subject to eligibility.",
      "commitments_label_021": "Tailored route:",
      "commitments_description_022": "module mix can reflect employer requirements.",
      "commitments_label_023": "Level 7 access:",
      "commitments_description_024": "Strategy and Leadership sessions on Saturdays.",
      "secondary_action_label_025": "Compare pathways"
    }
  },
  {
    "key": "programme_pcp_l6.pages_project_controls_professional_leve_overview_data",
    "page": "programme_pcp_l6",
    "section": "pages_project_controls_professional_leve_overview_data",
    "title": "Overview Data",
    "sort_order": 3,
    "content": {
      "eyebrow_026": "Programme overview",
      "title_027": "From project controls practice to senior delivery confidence",
      "description_028": "Project Controls Professional Level 6 is for people who need to turn project data into reliable plans, controlled costs, credible schedules, early warnings, governance decisions and executive confidence.",
      "items_title_029": "Build senior project controls capability",
      "items_description_030": "Develop stronger capability in planning, scheduling, cost control, performance measurement, risk, reporting, governance and decision support.",
      "items_title_031": "Apply learning at work",
      "items_description_032": "Use your own job duties, projects, reports, dashboards, controls challenges and employer context as the basis for applied learning and evidence.",
      "items_title_033": "Progress towards recognition",
      "items_description_034": "Each pathway supports Project Controls Professional Level 6, with route-specific recognition opportunities through the Institute of Project Controls, the Controls and Skills Authority, and the Association for Project Management.",
      "note_035": "Recognition summary All pathways lead to the Project Controls Professional Level 6 work-based route and are designed to support Institute of Project Controls Fellowship and Incorporated Cost Engineer progression. The Chartered Pathway is the route designed around the Association for Project Management recognised assessment for Chartered Project Professional technical knowledge. Chartered Project Professional status is awarded only by the Association for Project Management after its full requirements are met."
    }
  },
  {
    "key": "programme_pcp_l6.pages_project_controls_professional_leve_audience_data",
    "page": "programme_pcp_l6",
    "section": "pages_project_controls_professional_leve_audience_data",
    "title": "Audience Data",
    "sort_order": 4,
    "content": {
      "eyebrow_036": "Who should apply",
      "title_037": "For professionals who plan, control, analyse, govern and deliver projects",
      "description_038": "The programme is not only for Project Management Office professionals. It is also suitable for engineering, infrastructure, construction, consultancy, digital transformation, marketing and business-service environments where project performance matters.",
      "items_title_039": "Project controls and performance roles",
      "items_items_040": "Project controls managers and project controllers.",
      "items_items_041": "Planning leads, planners and schedulers.",
      "items_items_042": "Cost engineering leads, cost engineers and cost controllers.",
      "items_items_043": "Estimators, reporting analysts and performance analysts.",
      "items_title_044": "Project engineering and delivery roles",
      "items_items_045": "Project engineers, site engineers and delivery coordinators.",
      "items_items_046": "Project managers, programme managers and delivery leads.",
      "items_items_047": "Risk practitioners, assurance practitioners and change professionals.",
      "items_items_048": "People working in complex project environments who need better control systems.",
      "items_title_049": "Strategic governance and leadership roles",
      "items_items_050": "Heads of project controls, senior planning leads and scheduling leads.",
      "items_items_051": "Heads of Project Management Office and portfolio governance professionals.",
      "items_items_052": "Senior risk, assurance, transformation and benefits practitioners.",
      "items_items_053": "Professionals preparing for senior controls, portfolio or governance leadership."
    }
  },
  {
    "key": "programme_pcp_l6.pages_project_controls_professional_leve_structure_data",
    "page": "programme_pcp_l6",
    "section": "pages_project_controls_professional_leve_structure_data",
    "title": "Structure Data",
    "sort_order": 5,
    "content": {
      "eyebrow_054": "How the programme works",
      "title_055": "A six-credit work-based programme over 27 months",
      "description_056": "The programme uses a credit system. A normal credit is one four-month course. The Project Management Professional course is two credits because it is delivered over eight months.",
      "items_title_057": "One-month soft start",
      "items_description_058": "Induction, role review, employer engagement, funding checks, diagnostic review, learning platform access and pathway confirmation.",
      "items_title_059": "Six credits over 24 months",
      "items_description_060": "Select a standard pathway or tailor your six credits to match your current job duties, evidence opportunities and employer priorities.",
      "items_tags_061": "Operational route",
      "items_tags_062": "Strategic route",
      "items_tags_063": "Chartered route",
      "items_tags_064": "Tailored route",
      "items_title_065": "Two-month closing workshops",
      "items_description_066": "Portfolio consolidation, employer progress review, professional discussion preparation and End-Point Assessment readiness support.",
      "note_067": "Additional professional development access Learners also receive access to the Diploma Level 7 in Strategy and Leadership, delivered on Saturdays from 9:00 AM to 11:00 AM. The diploma structure includes six modules, each lasting three months, with an overall duration of 18 months."
    }
  },
  {
    "key": "programme_pcp_l6.pages_project_controls_professional_leve_pathway_data",
    "page": "programme_pcp_l6",
    "section": "pages_project_controls_professional_leve_pathway_data",
    "title": "Pathway Data",
    "sort_order": 6,
    "content": {
      "eyebrow_068": "Choose your pathway",
      "title_069": "Pick a standard route or tailor the six credits around your job duties",
      "description_070": "There are three standard pathways. Learners can also tailor the module mix after employer engagement and approval where their current duties require a different balance of planning, controls, governance, portfolio, artificial intelligence or reporting capability.",
      "routes_name_071": "Operational Pathway",
      "routes_title_072": "For project controls delivery, planning and performance roles",
      "routes_description_073": "Best suited to learners focused on schedules, earned value, planning, control, reporting and operational delivery confidence.",
      "routes_tags_074": "Operational Pathway",
      "routes_detail_075": "This route is designed for people working close to operational project controls, planning, scheduling, earned value, delivery reporting and performance control.",
      "routes_note_076": "Operational Pathway select six credits",
      "routes_modules_title_077": "Project Management Professional",
      "routes_modules_body_078": "Project Management Institute",
      "routes_modules_credits_079": "2 credits",
      "routes_modules_duration_080": "8 months",
      "routes_modules_title_081": "Artificial Intelligence in Project Controls Certificate",
      "routes_modules_body_082": "Institute of Project Controls",
      "routes_modules_credits_083": "1 credit",
      "routes_modules_duration_084": "4 months",
      "routes_modules_title_085": "Risk Management",
      "routes_modules_body_086": "Association for Project Management",
      "routes_modules_credits_087": "1 credit",
      "routes_modules_duration_088": "4 months",
      "routes_modules_title_089": "Scheduling Professional",
      "routes_modules_body_090": "Project Management Institute",
      "routes_modules_credits_091": "1 credit",
      "routes_modules_duration_092": "4 months",
      "routes_modules_title_093": "Earned Value Management",
      "routes_modules_body_094": "APMG International",
      "routes_modules_credits_095": "1 credit",
      "routes_modules_duration_096": "4 months",
      "routes_modules_title_097": "Project Planning and Controls",
      "routes_modules_body_098": "APMG International",
      "routes_modules_credits_099": "1 credit",
      "routes_modules_duration_100": "4 months",
      "routes_name_101": "Strategic Pathway",
      "routes_title_102": "For senior project control, portfolio and governance roles",
      "routes_description_103": "Best suited to learners working with strategic governance, programme management, portfolios, Project Management Office leadership and senior decision support.",
      "routes_tags_104": "Strategic Pathway",
      "routes_detail_105": "This route is designed for senior project control roles, leading project controls, Project Management Offices, risk practitioners, heads of project controls and professionals preparing for strategic positions.",
      "routes_note_106": "Strategic Pathway select six credits",
      "routes_modules_title_107": "Project Management Professional",
      "routes_modules_body_108": "Project Management Institute",
      "routes_modules_credits_109": "2 credits",
      "routes_modules_duration_110": "8 months",
      "routes_modules_title_111": "Artificial Intelligence in Project Controls Certificate",
      "routes_modules_body_112": "Institute of Project Controls",
      "routes_modules_credits_113": "1 credit",
      "routes_modules_duration_114": "4 months",
      "routes_modules_title_115": "Risk Management",
      "routes_modules_body_116": "Association for Project Management",
      "routes_modules_credits_117": "1 credit",
      "routes_modules_duration_118": "4 months",
      "routes_modules_title_119": "Managing Successful Programmes",
      "routes_modules_body_120": "PeopleCert / AXELOS",
      "routes_modules_credits_121": "1 credit",
      "routes_modules_duration_122": "4 months",
      "routes_modules_title_123": "Management of Portfolios",
      "routes_modules_body_124": "APMG International",
      "routes_modules_credits_125": "1 credit",
      "routes_modules_duration_126": "4 months",
      "routes_modules_title_127": "Project Management Office course",
      "routes_modules_body_128": "Project Management Institute",
      "routes_modules_credits_129": "1 credit",
      "routes_modules_duration_130": "4 months",
      "routes_name_131": "Chartered Pathway",
      "routes_action_label_132": "Explore Chartered Pathway",
      "routes_title_133": "For Chartered Project Professional readiness",
      "routes_description_134": "Best suited to learners who want the Association for Project Management recognised assessment route for Chartered Project Professional technical knowledge.",
      "routes_tags_135": "Chartered Pathway",
      "routes_detail_136": "This route is designed for learners whose priority is Chartered Project Professional technical-knowledge recognition through the Project Management Office Professional Level 6 route.",
      "routes_note_137": "Chartered Pathway Association for Project Management recognised assessment route",
      "routes_modules_title_138": "Certified Project Management Office Professional Level 6: Module 1 — Project Planning and Control",
      "routes_modules_body_139": "Institute of Project Controls / recognised assessment route for Association for Project Management technical knowledge",
      "routes_modules_credits_140": "1 credit",
      "routes_modules_duration_141": "4 months",
      "routes_modules_title_142": "Certified Project Management Office Professional Level 6: Module 2 — Risk, Issue and Quality Management",
      "routes_modules_body_143": "Institute of Project Controls / recognised assessment route for Association for Project Management technical knowledge",
      "routes_modules_credits_144": "1 credit",
      "routes_modules_duration_145": "4 months",
      "routes_modules_title_146": "Certified Project Management Office Professional Level 6: Module 3 — Stakeholder Engagement, Communications Management and Reporting Systems",
      "routes_modules_body_147": "Institute of Project Controls / recognised assessment route for Association for Project Management technical knowledge",
      "routes_modules_credits_148": "1 credit",
      "routes_modules_duration_149": "4 months",
      "routes_modules_title_150": "Certified Project Management Office Professional Level 6: Module 4 — Project Management Office",
      "routes_modules_body_151": "Institute of Project Controls / recognised assessment route for Association for Project Management technical knowledge",
      "routes_modules_credits_152": "1 credit",
      "routes_modules_duration_153": "4 months",
      "routes_modules_title_154": "Artificial Intelligence in Project Controls Certificate",
      "routes_modules_body_155": "Institute of Project Controls",
      "routes_modules_credits_156": "1 credit",
      "routes_modules_duration_157": "4 months",
      "routes_modules_title_158": "Earned Value Management or Management of Portfolios",
      "routes_modules_body_159": "APMG International",
      "routes_modules_credits_160": "1 credit",
      "routes_modules_duration_161": "4 months"
    }
  },
  {
    "key": "programme_pcp_l6.pages_project_controls_professional_leve_cohort_data",
    "page": "programme_pcp_l6",
    "section": "pages_project_controls_professional_leve_cohort_data",
    "title": "Cohort Data",
    "sort_order": 7,
    "content": {
      "eyebrow_162": "Cohort orientation",
      "title_163": "Case studies and study materials can be tailored to your sector",
      "description_164": "The same professional standard can be applied to different industries. Kent Business College can tailor case studies, exercises, examples and templates to match the orientation of each cohort.",
      "items_title_165": "Cohort 1: Engineering, construction and infrastructure projects",
      "items_description_166": "For learners working in construction, civil engineering, infrastructure, manufacturing, carbon sustainability, complex engineering delivery, project controls, cost engineering and major project environments.",
      "items_tags_167": "Carbon sustainability",
      "items_tags_168": "Engineering delivery",
      "items_title_169": "Cohort 2: Business, consultancy, digital and service-sector projects",
      "items_description_170": "For learners working in management, consultancy, marketing, accountancy, financial services, management services, strategic management solutions, information technology and digital transformation services.",
      "items_tags_171": "Business consultancy",
      "items_tags_172": "Financial services",
      "items_tags_173": "Digital transformation"
    }
  },
  {
    "key": "programme_pcp_l6.pages_project_controls_professional_leve_outputs_data",
    "page": "programme_pcp_l6",
    "section": "pages_project_controls_professional_leve_outputs_data",
    "title": "Outputs Data",
    "sort_order": 8,
    "content": {
      "eyebrow_174": "Capability and workplace outputs",
      "title_175": "What learners can evidence at work",
      "description_176": "The programme is designed to turn learning into visible project controls evidence, stronger decisions and better workplace systems.",
      "items_177": "Integrated project baseline",
      "items_178": "Project schedule and critical path analysis",
      "items_179": "Earned value performance report",
      "items_180": "Cost forecast and variance analysis",
      "items_181": "Risk and issue register",
      "items_182": "Change control process",
      "items_183": "Executive project dashboard",
      "items_184": "Stakeholder engagement plan",
      "items_185": "Project Management Office operating model",
      "items_186": "Portfolio or programme governance pack",
      "items_187": "Artificial intelligence workflow or dashboard",
      "items_188": "Professional practice portfolio",
      "image_189": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/eb52115f56cf48c682a1a336ceb560b3.jpg",
      "image_alt_190": "Project controls professionals collaborating during a learning session"
    }
  },
  {
    "key": "programme_pcp_l6.pages_project_controls_professional_leve_delivery_data",
    "page": "programme_pcp_l6",
    "section": "pages_project_controls_professional_leve_delivery_data",
    "title": "Delivery Data",
    "sort_order": 9,
    "content": {
      "eyebrow_191": "Delivery and assessment",
      "title_192": "Live, applied and work-based",
      "description_193": "The programme is designed for working professionals. Learners prepare before class, explore concepts with tutors, apply tools at work and reflect on evidence, impact and professional judgement.",
      "items_title_194": "Prepare",
      "items_description_195": "Short reading, diagnostic questions, project evidence review or workplace context preparation.",
      "items_title_196": "Explore",
      "items_description_197": "Live tutor-led classes, cases, worked examples, professional discussion and practical workshops.",
      "items_title_198": "Apply",
      "items_description_199": "Use the framework, template or technique in a real project, approved workplace scenario or simulated professional context.",
      "items_title_200": "Reflect",
      "items_description_201": "Capture evidence, evaluate impact, improve the artefact and prepare for portfolio or End-Point Assessment review.",
      "items_title_202": "Assessment approach",
      "items_items_203": "Applied work-based evidence aligned to programme outcomes.",
      "items_items_204": "Professional portfolio development and reflective commentary.",
      "items_items_205": "Knowledge, practice and evidence review throughout the journey.",
      "items_items_206": "Final workshops to prepare for professional discussion and End-Point Assessment.",
      "items_title_207": "Employer involvement",
      "items_items_208": "Confirm suitable duties, evidence opportunities and route fit.",
      "items_items_209": "Support the learner with protected off-the-job learning time.",
      "items_items_210": "Review workplace application and progression where relevant.",
      "items_items_211": "Help align the module mix with operational and strategic business needs."
    }
  },
  {
    "key": "programme_pcp_l6.pages_project_controls_professional_leve_workload_data",
    "page": "programme_pcp_l6",
    "section": "pages_project_controls_professional_leve_workload_data",
    "title": "Workload Data",
    "sort_order": 10,
    "content": {
      "eyebrow_212": "Expected workload and learning commitment",
      "title_213": "A structured weekly rhythm designed for working professionals",
      "description_214": "The programme combines live online learning, guided independent study, practical portfolio-building and regular coaching. Learners apply project controls and project management principles to real work-life contexts and build evidence of their Knowledge, Skills and Behaviours progression throughout the programme.",
      "stats_title_215": "Apprenticeship requirement",
      "stats_description_216": "Apprenticeship learners must complete the required off-the-job training hours across the programme.",
      "stats_title_217": "Weekly live teaching",
      "stats_description_218": "Live, interactive online class with your tutor, including discussion, worked examples, case analysis and applied project controls practice.",
      "stats_title_219": "Typical weekly study",
      "stats_description_220": "A balanced weekly commitment combining live learning, guided reading and practical portfolio-building activities.",
      "weekly_title_221": "Your weekly learning commitment",
      "weekly_description_222": "Each week is designed to help you learn, apply, evidence and reflect. The expected weekly workload is approximately eight hours.",
      "hours_hours_223": "2 h",
      "hours_label_224": "Live online interactive session",
      "hours_description_225": "Tutor-led online class with explanation, group discussion, workshops, project controls examples and practical application.",
      "hours_hours_226": "3 h",
      "hours_label_227": "Reading, quizzes and podcasts",
      "hours_description_228": "Guided Learning Management System activities including reading materials, quizzes, podcasts, reflective prompts and learning checks.",
      "hours_hours_229": "3 h",
      "hours_label_230": "Portfolio-building activities",
      "hours_description_231": "Practical evidence-building tasks, such as capturing workplace examples, screenshots, anonymised documents, photos or reflections showing how project controls and project management are applied in real work-life contexts.",
      "note_232": "Important: Portfolio evidence should be authentic, relevant and professionally presented. Learners should anonymise confidential employer, client, project and commercial information where required.",
      "monthly_title_233": "What you submit each month",
      "monthly_description_234": "There are two regular monthly submissions to your coach. These help keep your progress visible, structured and aligned with the programme requirements.",
      "submissions_title_235": "Learning Management System activities",
      "submissions_description_236": "Reading materials, quizzes, podcasts and online learning tasks completed through the Learning Management System.",
      "submissions_title_237": "Portfolio-building activities",
      "submissions_description_238": "Evidence of applied project controls and project management practice, supported by reflection and professional commentary.",
      "reviews_title_239": "Monthly coaching meeting",
      "reviews_description_240": "You will have a one-hour monthly coaching meeting. During this meeting, you make a short presentation to your coach about your Knowledge, Skills and Behaviours progression and discuss your evidence, learning needs and next actions.",
      "reviews_title_241": "Progress review every 10 weeks",
      "reviews_description_242": "Every 10 weeks, there is a one-hour progress review with your line manager and coach. Your coach presents your progression, listens to feedback from your line manager and identifies learning needs to support your development and career progression.",
      "reviews_title_243": "Workplace support matters",
      "reviews_description_244": "Apprenticeship learners need employer support for off-the-job learning. Your line manager should help protect learning time, support workplace application and provide feedback on how your learning is supporting your role and organisation.",
      "alternative_title_245": "If your line manager cannot support off-the-job hours, speak to us",
      "alternative_paragraphs_246": "If your employer or line manager is not able to support the required off-the-job learning hours, you may still be able to join through a partially funded programme supported by the Institute of Project Controls. Funding support may be available from 50% to 75%, depending on eligibility and approval.",
      "alternative_paragraphs_247": "Our admissions team will explain the apprenticeship route, employer responsibilities, Institute of Project Controls funding options and the best route for your situation."
    }
  },
  {
    "key": "programme_pcp_l6.pages_project_controls_professional_leve_coach_data",
    "page": "programme_pcp_l6",
    "section": "pages_project_controls_professional_leve_coach_data",
    "title": "Coach Data",
    "sort_order": 11,
    "content": {
      "eyebrow_248": "Coaching support",
      "title_249": "Coaches who support your portfolio, skills and progress",
      "description_250": "Coaches support study habits, evidence development, professional confidence and the connection between training and workplace performance.",
      "people_name_251": "Adeyomi",
      "people_bio_252": "Master of Science in Strategic Project Management and Master of Science in Urban Planning. Certified in Project Management Professional, Scheduling Professional, Earned Value Management and Chartered Institute of Marketing routes.",
      "people_image_253": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/9bf28cbc8b24423e8168e9ba2f6c3496.png",
      "people_image_alt_254": "Adeyomi photo",
      "people_name_255": "Patryck",
      "people_bio_256": "Master of Science in Strategic Project Management, supporting learners with project management thinking, evidence development and applied study progress.",
      "people_image_257": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/73ddd02520ed4db48e96eb2ab8fc3d2a.png",
      "people_image_alt_258": "Patryck photo",
      "people_name_259": "Aryan",
      "people_bio_260": "Master of Science in Strategic Project Management, supporting learners with portfolio evidence, study planning and workplace application of learning.",
      "people_image_261": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/cfe680627d044677a09533a28f66b7d9.png",
      "people_image_alt_262": "Aryan photo",
      "people_name_263": "Dr Randa",
      "people_bio_264": "Master of Science and Doctor of Philosophy in Operations Research, supporting learners with analytical thinking, data-informed decisions and structured evidence.",
      "people_image_265": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/91303f2a88114537bc61d8a8af805e21.png",
      "people_image_alt_266": "Dr Randa photo"
    }
  },
  {
    "key": "programme_pcp_l6.pages_project_controls_professional_leve_benefits_data",
    "page": "programme_pcp_l6",
    "section": "pages_project_controls_professional_leve_benefits_data",
    "title": "Benefits Data",
    "sort_order": 12,
    "content": {
      "eyebrow_267": "Benefits of studying with Kent Business College",
      "title_268": "More than a qualification",
      "description_269": "Your funded learning journey is designed to support your wellbeing, confidence, career direction, professional recognition and long-term success.",
      "items_title_270": "Wellbeing and learner support",
      "items_description_271": "Supporting you personally, professionally and academically throughout your learning journey.",
      "items_items_272": "Private healthcare insurance through Benenden Health.",
      "items_items_273": "Access to our mental wellbeing system.",
      "items_items_274": "Mental wellbeing self-assessment tools.",
      "items_items_275": "Inclusiveness assessments.",
      "items_items_276": "Free optional assessment of potential barriers to education, such as attention, anxiety or learning-support needs.",
      "items_items_277": "Artificial intelligence-powered learning management system and learner dashboards.",
      "items_items_278": "Original hard-copy and soft-copy learning materials.",
      "items_title_279": "Know yourself and build your career",
      "items_description_280": "Helping you understand your strengths, personality, interests and career direction.",
      "items_items_281": "Free optional personality traits assessment.",
      "items_items_282": "RAISEC career interest test.",
      "items_items_283": "Job-fit and career-fit psychological tests.",
      "items_items_284": "Personal development dashboards.",
      "items_items_285": "Career guidance to identify the right pathway and module mix.",
      "items_title_286": "Professional recognition and networking",
      "items_description_287": "Connecting you with professional bodies, events and recognition opportunities.",
      "items_items_288": "Graduation ceremony.",
      "items_items_289": "London Masterclass events three times a year.",
      "items_items_290": "Professional body memberships linked to your programme.",
      "items_items_291": "Institute of Project Controls membership for two years.",
      "items_items_292": "Professional clubs, workshops and networking opportunities in different cities."
    }
  },
  {
    "key": "programme_pcp_l6.pages_project_controls_professional_leve_funding_data",
    "page": "programme_pcp_l6",
    "section": "pages_project_controls_professional_leve_funding_data",
    "title": "Funding Data",
    "sort_order": 13,
    "content": {
      "eyebrow_293": "Funding and included package",
      "title_294": "Funding options after we confirm fit",
      "description_295": "Kent Business College confirms programme suitability, apprenticeship eligibility, employer support and the most suitable route before enrolment. The funding package is designed to remove barriers and include more than tuition alone.",
      "items_title_296": "Department for Education apprenticeship funding",
      "items_description_297": "Designed to support the eligible apprenticeship route where learner, employer and programme conditions are met.",
      "items_items_298": "Education and training delivery.",
      "items_items_299": "End-Point Assessment costs.",
      "items_items_300": "Coaching services.",
      "items_items_301": "Learning materials.",
      "items_title_302": "Institute of Project Controls support package",
      "items_description_303": "Designed to support the wider professional development package for eligible learners.",
      "items_items_304": "Memberships and professional exam costs.",
      "items_items_305": "Diploma Level 7 in Strategy and Leadership.",
      "items_items_306": "Transport and attendance support for London Masterclass events.",
      "items_items_307": "Club and workshop costs in different cities.",
      "items_items_308": "Private healthcare insurance during the programme.",
      "items_items_309": "Graduation ceremony costs.",
      "note_310": "Important: Funding is subject to current rules, learner eligibility, employer agreement, prior-learning review, residency and work-location checks, programme suitability and written confirmation. Professional-body membership, exam, fellowship, incorporated status and chartered outcomes are subject to the relevant organisation’s own rules and assessment requirements."
    }
  },
  {
    "key": "programme_pcp_l6.pages_project_controls_professional_leve_partner_data",
    "page": "programme_pcp_l6",
    "section": "pages_project_controls_professional_leve_partner_data",
    "title": "Partner Data",
    "sort_order": 14,
    "content": {
      "eyebrow_311": "Employer partnerships",
      "title_312": "Employer partnerships across project-driven sectors",
      "description_313": "Trusted partnerships across construction, public sector, healthcare, consultancy, education, aerospace, defence and energy.",
      "sectors_title_314": "Infrastructure and construction sector",
      "sectors_logos_name_315": "Barhale",
      "sectors_logos_image_316": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/edf9285f313b4fc7bebc2a6f92f0492c.png",
      "sectors_logos_name_317": "Morgan Sindall Construction",
      "sectors_logos_image_318": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/f17b25910a6942deacf83df93000e1d4.webp",
      "sectors_logos_name_319": "Primech Building Services",
      "sectors_logos_image_320": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/6e5e38eb6e1e44ed84032e856ab0d5cd.webp",
      "sectors_logos_name_321": "Oakes Power Services",
      "sectors_logos_image_322": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/cded24f7b7cb430195e825af07d7355a.webp",
      "sectors_title_323": "Councils and public sector",
      "sectors_logos_name_324": "Kirklees Council",
      "sectors_logos_image_325": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/2284f4f65590424a942faf24bc04666a.png",
      "sectors_logos_name_326": "North Yorkshire Council",
      "sectors_logos_image_327": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/7727308e293245f1962419946ec16ad0.jfif",
      "sectors_logos_name_328": "Trafford Council",
      "sectors_logos_image_329": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/1077053bf11c40399c194b6bf74c1c33.png",
      "sectors_title_330": "Healthcare and pharmaceutical sector",
      "sectors_logos_name_331": "Amber Therapeutics",
      "sectors_logos_image_332": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/1c5c753910a343858dd6cf7ac15f6c70.png",
      "sectors_logos_name_333": "Callisto Pharma Group",
      "sectors_logos_image_334": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/2728569ca4e74a26b44d1787983f88d1.jfif",
      "sectors_logos_name_335": "DHU Healthcare",
      "sectors_logos_image_336": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/c5bdf826bfae4bcc864fffffa345cdc9.png",
      "sectors_logos_name_337": "St John Ambulance Jersey",
      "sectors_logos_image_338": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/cf7ca0ac5a3b41a4a73b57204ec94004.png",
      "sectors_title_339": "Business and engineering consultancy sector",
      "sectors_logos_name_340": "PKF Smith Cooper Systems",
      "sectors_logos_image_341": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/d25085e03e8049b690fb7510ac18ff61.png",
      "sectors_logos_name_342": "Pragmatics 3D",
      "sectors_logos_image_343": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/db02979c2ea049aab6bb767bbbe82ce8.jfif",
      "sectors_logos_name_344": "NuVision",
      "sectors_logos_image_345": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/b47cf844b33c45f2bf8d32e23b678293.webp",
      "sectors_logos_name_346": "Indeed",
      "sectors_logos_image_347": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/572c55cfe2c84390a6d122b946061a6a.png",
      "sectors_title_348": "University and education sector",
      "sectors_logos_name_349": "Education and Training Foundation",
      "sectors_logos_image_350": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/245be9c28efb4622940cbed048324b01.webp",
      "sectors_logos_name_351": "University of Hull",
      "sectors_logos_image_352": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/7bad9e0e4b8a4b308206b3561d538063.png",
      "sectors_logos_name_353": "University of Sheffield",
      "sectors_logos_image_354": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/4dfd6a8809d74ca88831efbd34c7c480.png",
      "sectors_logos_name_355": "UK Agri-Tech Centre",
      "sectors_logos_image_356": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/abe2fdd4255447a3a8c8211ffabdb066.png",
      "sectors_title_357": "Aerospace, defence and oil and gas sector",
      "sectors_logos_name_358": "BMT",
      "sectors_logos_image_359": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/dcc7742ecfb84cbab3a835e956f1103b.jfif",
      "sectors_logos_name_360": "Bilfinger",
      "sectors_logos_image_361": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/b25f42a62d564028b7fc2ee9e87ccd83.jpg",
      "sectors_logos_name_362": "Stanlow Terminals",
      "sectors_logos_image_363": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/4d32dd29a0f54f96911429817594774f.png",
      "sectors_logos_name_364": "Wincanton",
      "sectors_logos_image_365": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/f1b007c5c5314826b51cc5e408ad4322.webp"
    }
  },
  {
    "key": "programme_pcp_l6.pages_project_controls_professional_leve_events_data",
    "page": "programme_pcp_l6",
    "section": "pages_project_controls_professional_leve_events_data",
    "title": "Events Data",
    "sort_order": 15,
    "content": {
      "upcoming_title_366": "Find the right upcoming event",
      "upcoming_description_367": "See dates and formats for programme, employer funding and professional recognition sessions in one place.",
      "eyebrow_368": "Upcoming programme events",
      "search_369": "\"project control\""
    }
  },
  {
    "key": "programme_pcp_l6.pages_project_controls_professional_leve_final_cta",
    "page": "programme_pcp_l6",
    "section": "pages_project_controls_professional_leve_final_cta",
    "title": "Final Cta",
    "sort_order": 16,
    "content": {
      "eyebrow_370": "Take the next step",
      "title_371": "Ready to choose the right Project Controls Professional Level 6 pathway?",
      "description_372": "Start with a one-to-one conversation. The team can help you understand your pathway, employer requirements, funding eligibility, professional recognition route and next intake.",
      "action_label_373": "Book an information session"
    }
  },
  {
    "key": "programme_pcp_l6.pages_project_controls_professional_leve_faqs",
    "page": "programme_pcp_l6",
    "section": "pages_project_controls_professional_leve_faqs",
    "title": "Faqs",
    "sort_order": 17,
    "content": {
      "question_374": "When do the courses start?",
      "answer_375": "The course start windows are September, January and April. The team will confirm which pathway and module sequence is available for your chosen intake.",
      "question_376": "How long is the programme?",
      "answer_377": "The full Project Controls Professional Level 6 journey is designed as a 27-month programme: one month of soft start, six credits delivered over 24 months, and two months of closing workshops for End-Point Assessment preparation.",
      "question_378": "Can I tailor the programme rather than follow one standard route?",
      "answer_379": "Yes. The programme is built on a credit system. You can choose a standard route or tailor your six credits based on your current job description, duties, employer needs and evidence opportunities, subject to employer engagement and approval.",
      "question_380": "I want to do Level 6, but some Level 3 modules fit my job. Can I take them?",
      "answer_381": "Yes, this can be discussed. Our programmes are built on the credit system. Each module is a credit and each normal credit is delivered over four months. The only module that is two credits is the Project Management Professional or Certified Associate in Project Management route. Any cross-level choice must still make sense for your job duties, evidence and funding route.",
      "question_382": "What is the apprenticeship funding eligibility for the 100% funded route?",
      "answer_383": "Typical apprenticeship funding checks include that the learner lives and works in England, spends at least 50% of working time in England, and has an employer who supports the learner with around 7 to 8 hours per week for off-the-job study. Apprenticeships are not based on age, seniority or maximum salary. The learner must be employed and paid at least the applicable minimum wage rules. Final eligibility is confirmed before enrolment.",
      "question_384": "What if I am not eligible for apprenticeship funding?",
      "answer_385": "Kent Business College can assist you in exploring the Institute of Project Controls fund. This may be relevant for international applicants, learners outside apprenticeship eligibility, unemployed applicants, self-employed applicants, or employed applicants whose employers cannot support 7 to 8 hours of off-the-job study time. The fund application may require your curriculum vitae, a positive-character statement and a statement about your future passions and goals.",
      "question_386": "Which route should I choose if I want Chartered Project Professional status?",
      "answer_387": "The Chartered Pathway is the route designed around the Association for Project Management recognised assessment for Chartered Project Professional technical knowledge. Completion of the programme does not automatically confer Chartered Project Professional status. The Association for Project Management awards Chartered Project Professional status only when the candidate meets its current professional practice, continuing professional development, ethics and assessment requirements.",
      "question_388": "Does every pathway include Institute of Project Controls Fellowship and Incorporated Cost Engineer progression?",
      "answer_389": "The programme is designed so all pathways support Project Controls Professional Level 6 and the professional development route towards Institute of Project Controls Fellowship and Controls and Skills Authority Incorporated Cost Engineer recognition. Final recognition depends on the relevant organisation’s assessment, membership and evidence requirements.",
      "question_390": "Is the Level 7 Diploma in Strategy and Leadership included?",
      "answer_391": "Yes, access to the Diploma Level 7 in Strategy and Leadership is included in the wider support package. It is scheduled on Saturdays from 9:00 AM to 11:00 AM, with six modules, each lasting three months, over an 18-month structure.",
      "question_392": "What does the funding package include?",
      "answer_393": "The Department for Education apprenticeship funding package is designed to cover education, End-Point Assessment costs, coaching services and materials. The Institute of Project Controls package is designed to support memberships, professional exams, Diploma Level 7 access, London Masterclass attendance and transport, professional clubs and workshops, private healthcare insurance and graduation ceremony costs.",
      "question_394": "Is this suitable outside engineering and construction?",
      "answer_395": "Yes. The programme has two orientation options: one for construction, engineering and infrastructure projects, and one for management, consultancy, information technology, digital transformation, marketing and wider business-service environments.",
      "question_396": "What is the best next step?",
      "answer_397": "The best next step is to book a one-to-one information session with a coach. They can review your current duties, employer position, funding route, cohort orientation and most suitable pathway."
    }
  },
  {
    "key": "programme_pcp_l6.pages_project_controls_professional_leve_page_navigation",
    "page": "programme_pcp_l6",
    "section": "pages_project_controls_professional_leve_page_navigation",
    "title": "Page Navigation",
    "sort_order": 18,
    "content": {
      "label_398": "Overview",
      "href_399": "#overview",
      "label_400": "Who it is for",
      "href_401": "#who",
      "label_402": "Structure",
      "href_403": "#structure",
      "label_404": "Pathways",
      "href_405": "#pathways",
      "label_406": "Cohorts",
      "href_407": "#cohorts",
      "label_408": "Outputs",
      "href_409": "#outputs",
      "label_410": "Delivery",
      "href_411": "#delivery",
      "label_412": "Workload",
      "href_413": "#workload",
      "label_414": "Coaches",
      "href_415": "#coaches",
      "label_416": "Benefits",
      "href_417": "#benefits",
      "label_418": "Funding",
      "href_419": "#funding",
      "label_420": "Events",
      "href_421": "#upcoming-programme-events",
      "label_422": "Recognition",
      "href_423": "#recognition",
      "label_424": "Employer partners",
      "href_425": "#employers",
      "label_426": "Testimonials",
      "href_427": "#testimonials",
      "label_428": "FAQs",
      "href_429": "#faq",
      "label_430": "Next step",
      "href_431": "#next-step"
    }
  },
  {
    "key": "programme_pcp_l6.pages_project_controls_professional_leve_programme_meta",
    "page": "programme_pcp_l6",
    "section": "pages_project_controls_professional_leve_programme_meta",
    "title": "Programme Meta",
    "sort_order": 19,
    "content": {
      "title_432": "Project Controls Professional Level 6 | Kent Business College"
    }
  },
  {
    "key": "programme_marketing_l4.pages_marketing_executive_level4_page_da_hero_data",
    "page": "programme_marketing_l4",
    "section": "pages_marketing_executive_level4_page_da_hero_data",
    "title": "Hero Data",
    "sort_order": 0,
    "content": {
      "hero_eyebrow_001": "Level 4 · Professional & Digital Marketing",
      "hero_title_002": "Gain a",
      "hero_accent_003": "Fully Funded CIM Level 4 Certification",
      "hero_title_suffix_004": "in Professional and Digital Marketing",
      "hero_lead_005": "Build practical marketing capability through real workplace activity and work towards the CIM Level 4 Certificate in Professional and Digital Marketing from the Chartered Institute of Marketing.",
      "hero_funding_title_006": "Fully funded route",
      "hero_funding_description_007": "Apprenticeship training can be fully funded through an eligible funding route. The CIM Level 4 qualification is funded by Kent Business College as part of the dual programme, subject to eligibility, engagement, achievement and the applicable programme terms.",
      "hero_audience_label_008": "Applied progression",
      "hero_audience_009": "Build measurable marketing capability.",
      "hero_catalogue_label_010": "Download catalogue",
      "hero_image_011": "/assets/images/programme-marketing-executive.jpg",
      "cohorts_label_012": "September 2026 intake",
      "highlights_title_013": "Marketing Impact",
      "highlights_description_014": "Research, planning and customer value",
      "highlights_title_015": "Social Media",
      "highlights_description_016": "Content, channels and audience engagement",
      "highlights_title_017": "Marketing Technology",
      "highlights_description_018": "CRM, analytics, automation and MarTech",
      "highlights_title_019": "Workplace Evidence",
      "highlights_description_020": "Real campaigns, coaching and EPA readiness",
      "secondary_action_label_021": "Explore the curriculum",
      "cohort_action_label_022": "Book an information session",
      "cohort_title_023": "Limited funded places from Kent Business College",
      "qualification_image_image_024": "/assets/images/cim-level-4-certificate.png",
      "qualification_image_name_025": "CIM Level 4 Certificate in Professional and Digital Marketing"
    }
  },
  {
    "key": "programme_marketing_l4.pages_marketing_executive_level4_page_da_programme_stats",
    "page": "programme_marketing_l4",
    "section": "pages_marketing_executive_level4_page_da_programme_stats",
    "title": "Programme Stats",
    "sort_order": 1,
    "content": {
      "label_026": "funded subject to eligibility",
      "label_027": "advanced practical capability",
      "label_028": "projects linked to business needs",
      "label_029": "professional qualification included"
    }
  },
  {
    "key": "programme_marketing_l4.pages_marketing_executive_level4_page_da_overview_data",
    "page": "programme_marketing_l4",
    "section": "pages_marketing_executive_level4_page_da_overview_data",
    "title": "Overview Data",
    "sort_order": 2,
    "content": {
      "eyebrow_030": "Practical marketing capability",
      "title_031": "That performs in the real world.",
      "description_032": "This programme connects marketing activity to customer needs, commercial priorities and measurable business outcomes. You learn by applying structured marketing practice in your organisation.",
      "items_title_033": "Market and customer insight",
      "items_description_034": "Gather, interpret and use customer, competitor and market evidence to improve marketing decisions.",
      "items_title_035": "Campaign planning",
      "items_description_036": "Turn objectives into joined-up campaigns with audiences, channels, messages, budgets and measures.",
      "items_title_037": "Content and channels",
      "items_description_038": "Create relevant content and select channels that fit the audience, campaign objective and customer journey.",
      "items_title_039": "Data and optimisation",
      "items_description_040": "Use analytics to evaluate performance, test ideas, identify improvement and explain what the data means.",
      "items_title_041": "Professional practice",
      "items_description_042": "Develop communication, collaboration, ethics, organisation and continuous learning in a marketing role."
    }
  },
  {
    "key": "programme_marketing_l4.pages_marketing_executive_level4_page_da_learner_experience",
    "page": "programme_marketing_l4",
    "section": "pages_marketing_executive_level4_page_da_learner_experience",
    "title": "Learner Experience",
    "sort_order": 3,
    "content": {
      "eyebrow_043": "Complete support experience",
      "title_044": "More than online classes.",
      "description_045": "A structured learner experience combines live teaching, skills coaching, workplace application and professional development.",
      "items_title_046": "Live professional learning",
      "items_description_047": "Interactive teaching, examples, workshops and peer discussion.",
      "items_title_048": "Dedicated skills coach",
      "items_description_049": "Regular coaching focused on progress, evidence and workplace impact.",
      "items_title_050": "Workplace projects",
      "items_description_051": "Apply learning through relevant marketing activity agreed with your employer.",
      "items_title_052": "Professional progression",
      "items_description_053": "Build evidence, confidence and a foundation for future CIM progression."
    }
  },
  {
    "key": "programme_marketing_l4.pages_marketing_executive_level4_page_da_weekly_commitment",
    "page": "programme_marketing_l4",
    "section": "pages_marketing_executive_level4_page_da_weekly_commitment",
    "title": "Weekly Commitment",
    "sort_order": 4,
    "content": {
      "title_054": "Your weekly learning commitment",
      "description_055": "A balanced weekly workload of approximately 8 hours, combining live learning, guided reading and workplace application.",
      "hours_label_056": "Live online classes",
      "hours_description_057": "Interactive tutor-led teaching, discussion, examples and practical activities.",
      "hours_label_058": "Reading & quizzes",
      "hours_description_059": "Guided independent learning and knowledge checks through structured materials.",
      "hours_label_060": "Workplace application",
      "hours_description_061": "Apply your learning to real marketing activity and build evidence for assessment."
    }
  },
  {
    "key": "programme_marketing_l4.pages_marketing_executive_level4_page_da_curriculum_journey",
    "page": "programme_marketing_l4",
    "section": "pages_marketing_executive_level4_page_da_curriculum_journey",
    "title": "Curriculum Journey",
    "sort_order": 5,
    "content": {
      "eyebrow_062": "Catalogue-aligned curriculum",
      "title_063": "Marketing Executive Level 4 curriculum.",
      "description_064": "The programme moves from marketing foundations into social media application, marketing technology, Gateway and End Point Assessment. Knowledge, skills and behaviours are revisited and strengthened through live learning, workplace activity, coaching and evidence.",
      "caption_065": "Programme journey adapted from the Kent Business College Marketing Executive Level 4 Apprentice Commitment Charter.",
      "image_066": "/assets/images/marketing-executive-curriculum.png",
      "image_alt_067": "Marketing Executive Level 4 curriculum journey from Soft Start through Marketing Impact and Analysis, Social Media Executive, Marketing Technology, Gateway, End Point Assessment, final MarTech exam and graduation",
      "modules_eyebrow_068": "Months 2-5",
      "modules_title_069": "Marketing Impact and Planning",
      "modules_description_070": "Build the foundations of confident marketing practice and understand how marketing supports wider business objectives.",
      "modules_items_071": "Extended marketing mix, segmentation and product development",
      "modules_items_072": "Customer decision-making, brand positioning and reputation",
      "modules_items_073": "Market research, data sources and marketing insight",
      "modules_items_074": "Business context, legal requirements and ethical practice",
      "modules_items_075": "Campaign structures, SMART objectives and planning discipline",
      "modules_eyebrow_076": "Months 6-9",
      "modules_title_077": "Social Media Executive",
      "modules_description_078": "Move from understanding into practical application through content, digital channels, audience engagement and campaign delivery.",
      "modules_items_079": "Social media content, channel coordination and brand presence",
      "modules_items_080": "Creative communications, copy, briefs and presentations",
      "modules_items_081": "Campaign planning, delivery and project management",
      "modules_items_082": "Stakeholder, supplier and cross-functional collaboration",
      "modules_items_083": "Formal CIM Social Media assessment during the programme",
      "modules_eyebrow_084": "Later learning stage",
      "modules_title_085": "Marketing Technology Executive",
      "modules_description_086": "Bring strategy and execution together through the systems, data and technologies that support modern marketing performance.",
      "modules_items_087": "CRM, marketing platforms, digital tools and business systems",
      "modules_items_088": "Automation, analytics and evidence-led optimisation",
      "modules_items_089": "Campaign measurement, reporting and performance insight",
      "modules_items_090": "Agile working, time management and multiple-project delivery",
      "modules_items_091": "Final CIM Marketing Technology assessment after the EPA",
      "milestones_title_092": "Soft Start",
      "milestones_description_093": "Induction, coach relationship, systems, evidence and expectations.",
      "milestones_title_094": "EPA Gateway",
      "milestones_description_095": "Confirm that required knowledge, skills, behaviours and evidence are ready.",
      "milestones_title_096": "End Point Assessment",
      "milestones_description_097": "Independent assessment, including a real-work project showcase and professional evidence.",
      "milestones_title_098": "Completion",
      "milestones_description_099": "Final MarTech assessment and graduation following successful achievement.",
      "evidence_100": "EPA project evidence: the catalogue describes a real workplace project with planning, research, execution and evaluation; recognised marketing frameworks; SMART objectives; performance data; stakeholder collaboration; time and budget controls; and supporting annex evidence."
    }
  },
  {
    "key": "programme_marketing_l4.pages_marketing_executive_level4_page_da_knowledge_skills_behaviours",
    "page": "programme_marketing_l4",
    "section": "pages_marketing_executive_level4_page_da_knowledge_skills_behaviours",
    "title": "Knowledge Skills Behaviours",
    "sort_order": 6,
    "content": {
      "title_101": "Knowledge",
      "description_102": "Marketing theory, customer behaviour, brand, CRM, market research, routes to market, communication channels, regulation and business context.",
      "title_103": "Skills",
      "description_104": "Coordinate channels, deliver SMART campaigns, create content, work with stakeholders, manage projects and budgets, analyse data and use marketing technology.",
      "title_105": "Behaviours",
      "description_106": "Professionalism, initiative, creativity, analytical thinking, collaboration, adaptability, resilience, ethical practice and customer focus."
    }
  },
  {
    "key": "programme_marketing_l4.pages_marketing_executive_level4_page_da_ai_marketing_data",
    "page": "programme_marketing_l4",
    "section": "pages_marketing_executive_level4_page_da_ai_marketing_data",
    "title": "Ai Marketing Data",
    "sort_order": 7,
    "content": {
      "eyebrow_107": "AI-enabled marketing",
      "title_108": "Use AI to work smarter without losing judgement, evidence or brand trust.",
      "description_109": "Learners explore responsible uses of AI for research, ideation, content support, analysis and workflow efficiency, while keeping human review and data protection at the centre.",
      "items_title_110": "Plan",
      "items_description_111": "Use structured prompts to explore audiences, campaign options and content requirements.",
      "items_title_112": "Analyse",
      "items_description_113": "Summarise performance signals, identify patterns and challenge assumptions.",
      "items_title_114": "Create",
      "items_description_115": "Accelerate drafts and ideas while preserving brand voice, originality and approval.",
      "items_title_116": "Govern",
      "items_description_117": "Apply human review, confidentiality, accuracy checks and responsible-use controls."
    }
  },
  {
    "key": "programme_marketing_l4.pages_marketing_executive_level4_page_da_eligibility_data",
    "page": "programme_marketing_l4",
    "section": "pages_marketing_executive_level4_page_da_eligibility_data",
    "title": "Eligibility Data",
    "sort_order": 8,
    "content": {
      "eyebrow_118": "Eligibility Criteria",
      "title_119": "Check that you meet the apprenticeship funding requirements.",
      "main_eyebrow_120": "Who is eligible?",
      "main_title_121": "Eligibility Criteria",
      "main_items_122": "UK resident for the past 3 years",
      "main_items_123": "Must not require sponsorship to work and must hold a British Passport, Indefinite Leave to Remain, or a Tier 2 visa with at least three years of UK residency",
      "main_items_124": "Not enrolled in other government-funded training at the time of this programme",
      "main_items_125": "Self-employed individuals are not eligible for DfE funding",
      "main_items_126": "Paid employment in England, normally 30 or more hours per week with a minimum of 16",
      "main_items_127": "Employer based in England and registered with the Apprenticeship Service",
      "main_items_128": "Spend at least 50% of their working hours within England",
      "aside_eyebrow_129": "Limited",
      "aside_title_130": "Funded apprenticeship spaces",
      "aside_description_131": "Please note: We have a limited number of funded apprenticeship spaces available, and they are offered strictly on a first-come, first-served basis. Due to high demand, we encourage early applications to avoid disappointment.",
      "aside_action_label_132": "Check Eligibility"
    }
  },
  {
    "key": "programme_marketing_l4.pages_marketing_executive_level4_page_da_funding_data",
    "page": "programme_marketing_l4",
    "section": "pages_marketing_executive_level4_page_da_funding_data",
    "title": "Funding Data",
    "sort_order": 9,
    "content": {
      "eyebrow_133": "Funding and limited places",
      "title_134": "Fully funded development with limited places.",
      "description_135": "Limited funded places from Kent Business College combine apprenticeship funding with an integrated CIM Level 4 professional qualification offer.",
      "main_eyebrow_136": "Fully funded apprenticeship route",
      "main_title_137": "Fully funded apprenticeship training",
      "main_description_138": "The Marketing Executive Level 4 apprenticeship training can be covered through eligible Department for Education apprenticeship funding. Kent Business College also funds the integrated CIM Level 4 qualification, membership and examination costs under the programme terms.",
      "main_items_139": "The learner is not personally charged for eligible apprenticeship training.",
      "main_items_140": "The employer and KBC agree the training plan and funding route.",
      "main_items_141": "Funded places remain limited and are confirmed after suitability, employer and funding checks.",
      "main_action_label_142": "Discuss funding with KBC",
      "items_title_143": "Limited funded places",
      "items_description_144": "Kent Business College has a limited funded-place allocation for each intake. Places are confirmed only after eligibility and employer checks.",
      "items_title_145": "Levy-funded",
      "items_description_146": "Employers with available levy funds can use their apprenticeship service account, subject to the applicable rules and funding band.",
      "items_title_147": "Co-investment route",
      "items_description_148": "Where levy funds are not available, an applicable government co-investment arrangement may be considered and confirmed by KBC.",
      "note_149": "Funding and the KBC-funded CIM offer are subject to apprenticeship eligibility, prior learning, employer support, available allocation, learner engagement, achievement requirements and the programme terms confirmed before enrolment."
    }
  },
  {
    "key": "programme_marketing_l4.pages_marketing_executive_level4_page_da_cim_qualification",
    "page": "programme_marketing_l4",
    "section": "pages_marketing_executive_level4_page_da_cim_qualification",
    "title": "Cim Qualification",
    "sort_order": 10,
    "content": {
      "eyebrow_150": "Dual programme and professional qualification",
      "title_151": "CIM Level 4 from the Chartered Institute of Marketing.",
      "description_152": "Alongside the Marketing Executive Level 4 apprenticeship, learners work towards the CIM Level 4 Certificate in Professional and Digital Marketing through an integrated, workplace-focused pathway.",
      "title_detail_153": "Two recognised outcomes in one connected journey",
      "description_detail_154": "The apprenticeship develops practical competence through real work-based learning. The CIM Level 4 Certificate adds professional marketing recognition and is funded by Kent Business College as part of the programme offer, including membership and examination costs under the applicable terms.",
      "items_eyebrow_155": "Integrated recognition",
      "items_title_156": "Marketing Impact and Campaigns",
      "items_description_157": "The catalogue states that these units are exempt from separate external CIM assessment when the learner successfully passes the apprenticeship EPA.",
      "items_eyebrow_158": "Formal CIM assessment",
      "items_title_159": "Social Media",
      "items_description_160": "A formal CIM Social Media assessment is completed during the apprenticeship after the relevant module and revision activity.",
      "items_eyebrow_161": "Post-EPA assessment",
      "items_title_162": "Marketing Technology",
      "items_description_163": "The final MarTech assessment is completed after successful End Point Assessment to achieve the full CIM certificate.",
      "note_164": "Professional title clarification: the accurate qualification name is the CIM Level 4 Certificate in Professional and Digital Marketing, awarded by the Chartered Institute of Marketing. It does not itself confer Chartered Marketer status.",
      "search_note_165": "This programme is sometimes searched for using the phrase “CIM Chartered L4”; the page uses the official qualification wording while supporting that search intent."
    }
  },
  {
    "key": "programme_marketing_l4.pages_marketing_executive_level4_page_da_employer_benefits",
    "page": "programme_marketing_l4",
    "section": "pages_marketing_executive_level4_page_da_employer_benefits",
    "title": "Employer Benefits",
    "sort_order": 11,
    "content": {
      "eyebrow_166": "Employer value",
      "title_167": "Invest in marketing capability that stays in the business.",
      "description_168": "The learner applies each stage of the programme to relevant workplace activity, creating practical value while developing professionally.",
      "items_title_169": "Accountable campaigns",
      "items_description_170": "Clearer objectives, ownership, measures and learning across campaign activity.",
      "items_title_171": "Customer understanding",
      "items_description_172": "Better use of research and customer evidence to shape decisions.",
      "items_title_173": "Data confidence",
      "items_description_174": "Stronger interpretation of performance, not simply reporting numbers.",
      "items_title_175": "Retention and progression",
      "items_description_176": "A visible development route for capable marketing employees."
    }
  },
  {
    "key": "programme_marketing_l4.pages_marketing_executive_level4_page_da_faq_heading",
    "page": "programme_marketing_l4",
    "section": "pages_marketing_executive_level4_page_da_faq_heading",
    "title": "Faq Heading",
    "sort_order": 12,
    "content": {
      "eyebrow_177": "Frequently asked questions",
      "title_178": "Clear answers before you take the next step."
    }
  },
  {
    "key": "programme_marketing_l4.pages_marketing_executive_level4_page_da_faqs",
    "page": "programme_marketing_l4",
    "section": "pages_marketing_executive_level4_page_da_faqs",
    "title": "Faqs",
    "sort_order": 13,
    "content": {
      "question_179": "What is the entry requirement?",
      "answer_180": "Admissions are experience-led. You should be employed in a relevant marketing role, have employer support, be able to work at Level 4 and need substantial new learning. KBC will also review prior qualifications, English and maths requirements where applicable, and funding eligibility.",
      "question_181": "Is the programme fully funded?",
      "answer_182": "It can be fully funded through an eligible apprenticeship funding arrangement. The final route depends on the employer, learner circumstances, prior learning, the current funding rules and available funded places.",
      "question_183": "Are places limited?",
      "answer_184": "Yes. Kent Business College operates a limited funded-place allocation for each intake. Enquiry or application does not reserve a place; the place is secured after suitability, employer and funding checks are complete.",
      "question_185": "Does the programme include a CIM Level 4 qualification?",
      "answer_186": "Yes. The dual programme includes the CIM Level 4 Certificate in Professional and Digital Marketing. The catalogue explains how apprenticeship achievement, the Social Media assessment and the final Marketing Technology assessment combine toward the certificate. The qualification does not automatically award Chartered Marketer status.",
      "question_187": "How is learning delivered?",
      "answer_188": "The programme combines live online teaching, coaching, independent study, workplace activity, evidence development and end-point assessment preparation. The final schedule and duration are confirmed during enrolment.",
      "question_189": "What happens after I apply?",
      "answer_190": "KBC will review your role, goals and prior learning, speak with your employer, complete the eligibility and funding checks, confirm the programme offer and then arrange onboarding and induction."
    }
  },
  {
    "key": "programme_marketing_l4.pages_marketing_executive_level4_page_da_final_cta",
    "page": "programme_marketing_l4",
    "section": "pages_marketing_executive_level4_page_da_final_cta",
    "title": "Final Cta",
    "sort_order": 14,
    "content": {
      "eyebrow_191": "September 2026 intake",
      "title_192": "Ready to build marketing capability that creates visible business value?",
      "description_193": "Apply early for one of the limited funded Marketing Executive Level 4 apprenticeship places available through Kent Business College.",
      "actions_label_194": "Apply for a funded place",
      "actions_label_195": "Email the admissions team"
    }
  },
  {
    "key": "programme_marketing_l4.pages_marketing_executive_level4_page_da_page_navigation",
    "page": "programme_marketing_l4",
    "section": "pages_marketing_executive_level4_page_da_page_navigation",
    "title": "Page Navigation",
    "sort_order": 15,
    "content": {
      "label_196": "Practical marketing capability",
      "href_197": "#overview",
      "label_198": "Complete support experience",
      "href_199": "#learning",
      "label_200": "Curriculum",
      "href_201": "#curriculum",
      "label_202": "AI-enabled marketing",
      "href_203": "#ai",
      "label_204": "Eligibility Criteria",
      "href_205": "#eligibility",
      "label_206": "Funding",
      "href_207": "#funding",
      "label_208": "CIM Level 4",
      "href_209": "#cim",
      "label_210": "Employer value",
      "href_211": "#employers",
      "label_212": "Events",
      "href_213": "#events",
      "label_214": "Recognition",
      "href_215": "#recognition",
      "label_216": "Employer partnerships",
      "href_217": "#partners",
      "label_218": "Learner testimonials",
      "href_219": "#testimonials",
      "label_220": "FAQs",
      "href_221": "#faq"
    }
  },
  {
    "key": "programme_marketing_l4.pages_marketing_executive_level4_page_da_programme_meta",
    "page": "programme_marketing_l4",
    "section": "pages_marketing_executive_level4_page_da_programme_meta",
    "title": "Programme Meta",
    "sort_order": 16,
    "content": {
      "title_222": "Marketing Executive Level 4 Apprenticeship | Kent Business College"
    }
  },
  {
    "key": "programme_marketing_l6.pages_marketing_manager_level6_page_data_hero_data",
    "page": "programme_marketing_l6",
    "section": "pages_marketing_manager_level6_page_data_hero_data",
    "title": "Hero Data",
    "sort_order": 0,
    "content": {
      "hero_eyebrow_001": "Level 6 Strategic Professional Marketing",
      "hero_title_002": "Gain a",
      "hero_accent_003": "CIM Diploma Level 6",
      "hero_title_suffix_004": "in Professional and Digital Marketing",
      "hero_lead_005": "Advance your marketing career through a workplace-focused Level 6 apprenticeship that develops strategic thinking, commercial confidence, AI-enabled marketing capability and measurable business impact.",
      "hero_funding_title_006": "Fully funded route*",
      "hero_funding_description_007": "Limited funded places are available through Kent Business College. Final funding, suitability and programme terms are confirmed before enrolment.",
      "hero_audience_label_008": "Applied progression",
      "hero_audience_009": "Build strategic marketing leadership capability.",
      "hero_catalogue_label_010": "Download catalogue",
      "hero_image_011": "/assets/images/programme-marketing-manager.jpg",
      "cohorts_label_012": "September 2026 intake",
      "highlights_title_013": "Strategy & Planning",
      "highlights_description_014": "Set direction, priorities and evidence-led marketing plans.",
      "highlights_title_015": "Customer Journey",
      "highlights_description_016": "Optimise experience, value, retention and loyalty.",
      "highlights_title_017": "Commercial Intelligence",
      "highlights_description_018": "Connect analytics, budgets and performance to growth.",
      "highlights_title_019": "AI in Marketing",
      "highlights_description_020": "Apply AI responsibly across insight, planning and delivery.",
      "secondary_action_label_021": "Explore the curriculum",
      "cohort_action_label_022": "Book an information session",
      "cohort_title_023": "Limited funded places from Kent Business College",
      "qualification_image_image_024": "/assets/images/cim-level-6-diploma.png",
      "qualification_image_name_025": "CIM Diploma in Professional Marketing Level 6 logo"
    }
  },
  {
    "key": "programme_marketing_l6.pages_marketing_manager_level6_page_data_programme_stats",
    "page": "programme_marketing_l6",
    "section": "pages_marketing_manager_level6_page_data_programme_stats",
    "title": "Programme Stats",
    "sort_order": 1,
    "content": {
      "label_026": "Fully funded routes",
      "description_027": "Subject to eligibility and available funding.",
      "label_028": "Advanced Level 6",
      "description_029": "Strategic judgement and commercial leadership.",
      "label_030": "Chartered pathway support",
      "description_031": "Preparation for professional progression."
    }
  },
  {
    "key": "programme_marketing_l6.pages_marketing_manager_level6_page_data_overview_data",
    "page": "programme_marketing_l6",
    "section": "pages_marketing_manager_level6_page_data_overview_data",
    "title": "Overview Data",
    "sort_order": 2,
    "content": {
      "eyebrow_032": "Why this programme",
      "title_033": "Strategic marketing leadership grounded in commercial reality.",
      "description_034": "Develop the strategic, analytical and leadership capability expected from senior marketing professionals while delivering measurable workplace value throughout the apprenticeship.",
      "feature_title_035": "From marketing execution to strategic influence",
      "feature_description_036": "Move beyond campaigns and channels. Learn to shape strategy, influence investment, connect customer value to organisational priorities and lead cross-functional decision-making.",
      "feature_items_037": "Commercial marketing strategy",
      "feature_items_038": "Customer and market insight",
      "feature_items_039": "Leadership and stakeholder influence",
      "feature_items_040": "Performance, value and accountability",
      "feature_image_041": "/assets/images/marketing-manager-strategy.jpg",
      "feature_image_alt_042": "Marketing professional developing a strategic marketing plan",
      "items_title_043": "Set strategic direction",
      "items_description_044": "Translate business priorities into evidence-led marketing objectives, positioning and investment choices.",
      "items_title_045": "Lead people and delivery",
      "items_description_046": "Build alignment, manage agencies and teams, and strengthen marketing capability across the organisation.",
      "items_title_047": "Use insight and analytics",
      "items_description_048": "Interpret customer, competitor, channel and commercial data to recommend action with confidence.",
      "items_title_049": "Apply AI responsibly",
      "items_description_050": "Use AI to accelerate research, analysis, planning and content while maintaining professional judgement."
    }
  },
  {
    "key": "programme_marketing_l6.pages_marketing_manager_level6_page_data_curriculum_data",
    "page": "programme_marketing_l6",
    "section": "pages_marketing_manager_level6_page_data_curriculum_data",
    "title": "Curriculum Data",
    "sort_order": 3,
    "content": {
      "eyebrow_051": "Marketing Manager Level 6 curriculum",
      "title_052": "Four connected modules from strategic planning to AI-enabled marketing.",
      "description_053": "The curriculum follows the learner journey in the Marketing Manager Level 6 programme: Strategy and Planning, Customer Journey Optimisation, Commercial Intelligence and AI in Marketing. Each module develops relevant knowledge, skills and behaviours through live learning, workplace application, reflection and evidence building before Gateway and End Point Assessment.",
      "modules_title_054": "Strategy and Planning",
      "modules_description_055": "The foundation stage connects Level 6 marketing theory with strategic business decisions and organisational objectives.",
      "modules_items_056": "Strategic marketing theory and the extended marketing mix",
      "modules_items_057": "Product, service and brand development",
      "modules_items_058": "Market research, communications and business context",
      "modules_items_059": "Evidence-led marketing plans, risks and priorities",
      "modules_title_060": "Customer Journey Optimisation",
      "modules_description_061": "Develop a customer-focused view of the complete experience, from initial engagement to satisfaction, retention and loyalty.",
      "modules_items_062": "Customer behaviours across B2B and B2C contexts",
      "modules_items_063": "Journey mapping, touchpoints and friction analysis",
      "modules_items_064": "CRM, brand perception, feedback and channel choices",
      "modules_items_065": "Stakeholder collaboration and experience improvement",
      "modules_title_066": "Commercial Intelligence",
      "modules_description_067": "Strengthen commercial judgement by connecting data, financial awareness and marketing performance to business value.",
      "modules_items_068": "Campaign performance, KPIs and reliable information",
      "modules_items_069": "Return on investment, customer value and budget use",
      "modules_items_070": "Analytics, market insight and evidence-based decisions",
      "modules_items_071": "Business cases, recommendations and growth opportunities",
      "modules_title_072": "AI in Marketing",
      "modules_description_073": "Explore how emerging technology can improve marketing planning, personalisation, customer insight and performance.",
      "modules_items_074": "Artificial intelligence, automation and marketing systems",
      "modules_items_075": "Campaign planning, optimisation and content development",
      "modules_items_076": "Analytics, digital tools and faster insight generation",
      "modules_items_077": "Responsible, ethical and commercially appropriate use",
      "progression_title_078": "Progression after the four modules",
      "progression_description_079": "Learners consolidate workplace evidence and prepare for Gateway. The End Point Assessment can include the Multiple Choice Test, Project Showcase and Professional Discussion. Learners completing the CIM route may then complete the remaining CIM Level 6 assessments before graduation.",
      "progression_items_080": "EPA Gateway",
      "progression_items_081": "End Point Assessment",
      "progression_items_082": "Final CIM Level 6 assessments",
      "progression_items_083": "Graduation and progression"
    }
  },
  {
    "key": "programme_marketing_l6.pages_marketing_manager_level6_page_data_core_marketing_disciplines",
    "page": "programme_marketing_l6",
    "section": "pages_marketing_manager_level6_page_data_core_marketing_disciplines",
    "title": "Core Marketing Disciplines",
    "sort_order": 4,
    "content": {
      "eyebrow_084": "Core marketing disciplines",
      "title_085": "Build the capabilities behind effective marketing leadership.",
      "description_086": "A balanced curriculum covering strategy, customers, brand, communications, analytics, digital capability, innovation and leadership.",
      "items_title_087": "Strategy and planning",
      "items_description_088": "Business alignment, market opportunity, positioning, objectives, investment priorities and execution roadmaps.",
      "items_title_089": "Customer and market insight",
      "items_description_090": "Research, segmentation, behaviour, customer experience, competitor intelligence and evidence quality.",
      "items_title_091": "Brand and communications",
      "items_description_092": "Brand strategy, integrated communications, channel decisions, agency leadership and reputation.",
      "items_title_093": "Commercial analytics",
      "items_description_094": "Measurement frameworks, performance interpretation, attribution, forecasting and decision-ready reporting.",
      "items_title_095": "Digital and AI capability",
      "items_description_096": "Digital ecosystems, marketing technology, automation, responsible AI and data-informed optimisation.",
      "items_title_097": "Leadership and change",
      "items_description_098": "Stakeholder influence, team development, ethical practice, organisational change and strategic communication."
    }
  },
  {
    "key": "programme_marketing_l6.pages_marketing_manager_level6_page_data_cim_qualification",
    "page": "programme_marketing_l6",
    "section": "pages_marketing_manager_level6_page_data_cim_qualification",
    "title": "Cim Qualification",
    "sort_order": 5,
    "content": {
      "eyebrow_099": "CIM Chartered Level 6 pathway",
      "title_100": "Turn advanced study into credible professional progression.",
      "description_101": "The programme develops strategic marketing capability and supports learners to organise professional evidence, CPD and career progression towards Chartered Marketer status.",
      "items_title_102": "Level 6 strategic capability",
      "items_description_103": "Demonstrate critical analysis, commercial judgement, leadership and the ability to apply marketing strategy autonomously.",
      "items_title_104": "Professional evidence and CPD",
      "items_description_105": "Build a portfolio of workplace outputs, reflective practice and continuing professional development that supports future professional applications.",
      "note_106": "Important: Chartered Marketer status is awarded separately by the Chartered Institute of Marketing and is subject to CIM membership, experience, CPD and application requirements. Completion of this apprenticeship does not automatically confer chartered status."
    }
  },
  {
    "key": "programme_marketing_l6.pages_marketing_manager_level6_page_data_ai_marketing_data",
    "page": "programme_marketing_l6",
    "section": "pages_marketing_manager_level6_page_data_ai_marketing_data",
    "title": "Ai Marketing Data",
    "sort_order": 6,
    "content": {
      "eyebrow_107": "AI-enabled marketing",
      "title_108": "Use AI to strengthen strategy while keeping leaders accountable.",
      "description_109": "Learners use AI as a practical marketing tool for research, planning, analysis and content development, while applying responsible governance and human review.",
      "applied_title_110": "Applied AI capability",
      "items_title_111": "Plan",
      "items_description_112": "Structure research and priorities",
      "items_title_113": "Analyse",
      "items_description_114": "Explore customer and performance data",
      "items_title_115": "Challenge",
      "items_description_116": "Test assumptions and scenarios",
      "items_title_117": "Create",
      "items_description_118": "Develop and refine outputs",
      "controls_title_119": "Professional controls",
      "controls_120": "Human review for important decisions",
      "controls_121": "Confidentiality and approved data use",
      "controls_122": "Evidence checks and source validation",
      "controls_123": "Bias, ethics and brand-risk awareness",
      "controls_124": "Clear accountability for final outputs"
    }
  },
  {
    "key": "programme_marketing_l6.pages_marketing_manager_level6_page_data_eligibility_data",
    "page": "programme_marketing_l6",
    "section": "pages_marketing_manager_level6_page_data_eligibility_data",
    "title": "Eligibility Data",
    "sort_order": 7,
    "content": {
      "eyebrow_125": "Eligibility Criteria",
      "title_126": "Check that you meet the apprenticeship funding requirements.",
      "main_title_127": "Eligibility Criteria",
      "main_items_128": "UK resident for the past 3 years",
      "main_items_129": "Must not require sponsorship to work (must hold a British Passport, Indefinite Leave to Remain, or Tier 2 visa with at least three years of UK residency)",
      "main_items_130": "Not enrolled in other government-funded training at the time of this programme",
      "main_items_131": "Self-employed individuals are not eligible for DfE funding",
      "main_items_132": "Paid employment in England (normally 30+ hrs/week; minimum 16)",
      "main_items_133": "Employer based in England and registered with the Apprenticeship Service",
      "main_items_134": "Spend at least 50% of their working hours within England",
      "main_eyebrow_135": "Who is eligible?",
      "aside_title_136": "Funded apprenticeship spaces",
      "aside_description_137": "Please note: We have a limited number of funded apprenticeship spaces available, and they are offered strictly on a first-come, first-served basis. Due to high demand, we encourage early applications to avoid disappointment.",
      "aside_eyebrow_138": "Limited",
      "aside_action_label_139": "Check Eligibility"
    }
  },
  {
    "key": "programme_marketing_l6.pages_marketing_manager_level6_page_data_employer_benefits",
    "page": "programme_marketing_l6",
    "section": "pages_marketing_manager_level6_page_data_employer_benefits",
    "title": "Employer Benefits",
    "sort_order": 8,
    "content": {
      "eyebrow_140": "Employer value",
      "title_141": "Develop marketing leadership that stays in the business.",
      "description_142": "The apprenticeship connects learning to real organisational priorities, giving employers practical outputs as well as long-term capability.",
      "items_title_143": "Commercial performance",
      "items_description_144": "Stronger links between marketing objectives, customer value, investment and business outcomes.",
      "items_title_145": "Strategic capability",
      "items_description_146": "More confident planning, prioritisation, challenge and decision support at senior level.",
      "items_title_147": "Applied innovation",
      "items_description_148": "Responsible use of AI, digital capability and experimentation to improve marketing effectiveness.",
      "items_title_149": "Retention and progression",
      "items_description_150": "A visible development route for high-potential marketing professionals and future leaders."
    }
  },
  {
    "key": "programme_marketing_l6.pages_marketing_manager_level6_page_data_faq_heading",
    "page": "programme_marketing_l6",
    "section": "pages_marketing_manager_level6_page_data_faq_heading",
    "title": "Faq Heading",
    "sort_order": 9,
    "content": {
      "eyebrow_151": "Frequently asked questions",
      "title_152": "Clear answers before you take the next step."
    }
  },
  {
    "key": "programme_marketing_l6.pages_marketing_manager_level6_page_data_faqs",
    "page": "programme_marketing_l6",
    "section": "pages_marketing_manager_level6_page_data_faqs",
    "title": "Faqs",
    "sort_order": 10,
    "content": {
      "question_153": "Is the Marketing Manager Level 6 Apprenticeship fully funded?",
      "answer_154": "It may be fully funded for eligible learners and employers through levy funding, levy transfer or applicable government support. Funding is confirmed after suitability, prior-learning and employer checks.",
      "question_155": "Are funded places limited?",
      "answer_156": "Yes. Kent Business College has limited funded places for each intake, and places are confirmed only after the funding and suitability process is complete.",
      "question_157": "Does the programme automatically make me a Chartered Marketer?",
      "answer_158": "No. Chartered Marketer status is awarded separately by CIM and is subject to its current membership, experience, CPD and application requirements. The programme supports advanced capability and professional evidence for progression.",
      "question_159": "Who is the programme designed for?",
      "answer_160": "It is designed for employed marketing professionals whose role includes strategic planning, customer or market insight, integrated campaigns, performance management, leadership or cross-functional influence.",
      "question_161": "Can an existing employee become an apprentice?",
      "answer_162": "Yes, where the apprenticeship develops substantial new knowledge, skills and behaviours and all eligibility and funding requirements are met.",
      "question_163": "How do I secure a limited funded place?",
      "answer_164": "Book an information session or request an eligibility review. Kent Business College will discuss your role, employer support, prior learning and available funding before issuing an enrolment offer."
    }
  },
  {
    "key": "programme_marketing_l6.pages_marketing_manager_level6_page_data_final_cta",
    "page": "programme_marketing_l6",
    "section": "pages_marketing_manager_level6_page_data_final_cta",
    "title": "Final Cta",
    "sort_order": 11,
    "content": {
      "eyebrow_165": "September 2026 intake",
      "title_166": "Ready to lead marketing with greater strategic and commercial confidence?",
      "description_167": "Start with an eligibility and funding review. Limited fully funded Marketing Manager Level 6 places are available through Kent Business College.",
      "actions_label_168": "Check eligibility",
      "actions_label_169": "Email the admissions team",
      "contact_170": "Office@Kentbusinesscollege.org | kentbusinesscollege.com"
    }
  },
  {
    "key": "programme_marketing_l6.pages_marketing_manager_level6_page_data_enquiry_data",
    "page": "programme_marketing_l6",
    "section": "pages_marketing_manager_level6_page_data_enquiry_data",
    "title": "Enquiry Data",
    "sort_order": 12,
    "content": {
      "title_171": "Start your apprenticeship enquiry",
      "description_172": "Share a few details so our admissions team can review your eligibility, potential funding route and programme suitability.",
      "programme_173": "Marketing Manager Level 6 Apprenticeship",
      "enquiry_eyebrow_174": "Application enquiry",
      "enquiry_steps_title_175": "Step 1: Your details",
      "enquiry_steps_fields_name_176": "name",
      "enquiry_steps_fields_label_177": "Full name",
      "enquiry_steps_fields_placeholder_178": "Enter your full name",
      "enquiry_steps_fields_name_179": "email",
      "enquiry_steps_fields_label_180": "Email address",
      "enquiry_steps_fields_placeholder_181": "name@example.com",
      "enquiry_steps_fields_name_182": "phone",
      "enquiry_steps_fields_label_183": "Phone number",
      "enquiry_steps_fields_placeholder_184": "Optional",
      "enquiry_steps_fields_name_185": "jobTitle",
      "enquiry_steps_fields_label_186": "Current job title",
      "enquiry_steps_fields_placeholder_187": "Enter your current role",
      "enquiry_steps_fields_name_188": "preferredContact",
      "enquiry_steps_fields_label_189": "Preferred contact method",
      "enquiry_steps_title_190": "Step 2: Employment and eligibility",
      "enquiry_steps_fields_name_191": "organisation",
      "enquiry_steps_fields_label_192": "Employer or organisation",
      "enquiry_steps_fields_placeholder_193": "Enter your employer's name",
      "enquiry_steps_fields_name_194": "location",
      "enquiry_steps_fields_label_195": "Main workplace location",
      "enquiry_steps_fields_placeholder_196": "Town or city",
      "enquiry_steps_fields_name_197": "workplaceEngland",
      "enquiry_steps_fields_label_198": "Is your main workplace in England?",
      "enquiry_steps_fields_placeholder_199": "Select an option",
      "enquiry_steps_fields_name_200": "employerSupport",
      "enquiry_steps_fields_label_201": "Has your employer agreed to support the apprenticeship?",
      "enquiry_steps_fields_options_202": "Yes, confirmed",
      "enquiry_steps_fields_options_203": "Currently discussing it",
      "enquiry_steps_fields_options_204": "Not yet discussed",
      "enquiry_steps_fields_options_205": "I am completing this as an employer",
      "enquiry_steps_fields_placeholder_206": "Select an option",
      "enquiry_steps_fields_name_207": "programme",
      "enquiry_steps_fields_label_208": "Programme of interest",
      "enquiry_steps_fields_name_209": "helpWith",
      "enquiry_steps_fields_label_210": "What would you like help with?",
      "enquiry_steps_fields_options_211": "Checking eligibility",
      "enquiry_steps_fields_options_212": "Apprenticeship funding",
      "enquiry_steps_fields_options_213": "Employer requirements",
      "enquiry_steps_fields_options_214": "Programme content",
      "enquiry_steps_fields_options_215": "Application process",
      "enquiry_steps_fields_options_216": "Something else",
      "enquiry_steps_fields_name_217": "message",
      "enquiry_steps_fields_label_218": "Questions or additional information",
      "enquiry_steps_fields_placeholder_219": "Tell us about your role, career goals or any questions about the programme.",
      "enquiry_consent_220": "I agree that Kent Business College may use my information to respond to this enquiry.",
      "enquiry_note_221": "Our admissions team will review your enquiry and contact you with the appropriate next steps. Submitting this form does not guarantee eligibility or funding.",
      "enquiry_submit_label_222": "Submit enquiry"
    }
  },
  {
    "key": "programme_marketing_l6.pages_marketing_manager_level6_page_data_page_navigation",
    "page": "programme_marketing_l6",
    "section": "pages_marketing_manager_level6_page_data_page_navigation",
    "title": "Page Navigation",
    "sort_order": 13,
    "content": {
      "label_223": "Why this programme",
      "href_224": "#overview",
      "label_225": "Curriculum",
      "href_226": "#curriculum",
      "label_227": "Core marketing disciplines",
      "href_228": "#disciplines",
      "label_229": "CIM Chartered Level 6 pathway",
      "href_230": "#cim",
      "label_231": "AI-enabled marketing",
      "href_232": "#ai",
      "label_233": "Eligibility Criteria",
      "href_234": "#funding",
      "label_235": "Employer value",
      "href_236": "#employers",
      "label_237": "Events",
      "href_238": "#events",
      "label_239": "Recognition",
      "href_240": "#recognition",
      "label_241": "Employer partnerships",
      "href_242": "#partners",
      "label_243": "Learner testimonials",
      "href_244": "#testimonials"
    }
  },
  {
    "key": "programme_marketing_l6.pages_marketing_manager_level6_page_data_mobile_actions",
    "page": "programme_marketing_l6",
    "section": "pages_marketing_manager_level6_page_data_mobile_actions",
    "title": "Mobile Actions",
    "sort_order": 14,
    "content": {
      "label_245": "Check eligibility",
      "label_246": "Funding places"
    }
  },
  {
    "key": "programme_marketing_l6.pages_marketing_manager_level6_page_data_programme_meta",
    "page": "programme_marketing_l6",
    "section": "pages_marketing_manager_level6_page_data_programme_meta",
    "title": "Programme Meta",
    "sort_order": 15,
    "content": {
      "title_247": "Marketing Manager Level 6 Apprenticeship | Kent Business College"
    }
  },
  {
    "key": "about.pages_about_page_page_about_page",
    "page": "about",
    "section": "pages_about_page_page_about_page",
    "title": "About Page",
    "sort_order": 0,
    "content": {
      "fallback_title_001": "Who We Are | Kent Business College",
      "fallback_description_002": "From IBIS Consultancy to Kent Business College: a decade of wisdom, transformation and momentum."
    }
  },
  {
    "key": "about.pages_about_page_components_hero_hero",
    "page": "about",
    "section": "pages_about_page_components_hero_hero",
    "title": "Hero",
    "sort_order": 1,
    "content": {
      "text_001": "Kent Business College — Kent Business College — Kent Business College — Kent Business College —",
      "text_002": "Kent Business College — Kent Business College — Kent Business College — Kent Business College —",
      "text_003": "Kent Business College — Kent Business College — Kent Business College — Kent Business College —",
      "text_004": "Kent Business College — Kent Business College — Kent Business College — Kent Business College —",
      "aria_label_005": "Kent Business College hero portrait — the IBIS bird",
      "text_006": "Loading portrait…",
      "text_007": "Serve this folder over http(s) to preview the hero portrait — see README",
      "text_008": "Scroll"
    }
  },
  {
    "key": "about.pages_about_page_components_impact_impact",
    "page": "about",
    "section": "pages_about_page_components_impact_impact",
    "title": "Impact",
    "sort_order": 2,
    "content": {
      "text_001": "Our Impact",
      "text_002": "A decade, measured in people",
      "text_003": "Every number below is a person whose career, business or organisation we helped move forward.",
      "text_004": "0",
      "text_005": "Students Enrolled",
      "text_006": "0",
      "text_007": "Employer Partners",
      "text_008": "0",
      "text_009": "Successful Graduates",
      "text_010": "0",
      "text_011": "Years of Excellence"
    }
  },
  {
    "key": "about.pages_about_page_components_partners_partners",
    "page": "about",
    "section": "pages_about_page_components_partners_partners",
    "title": "Partners",
    "sort_order": 3,
    "content": {
      "text_001": "Partners in Success",
      "text_002": "Meet our visionary partners",
      "text_003": "Together, we deliver exceptional results for our clients and communities.",
      "to_004": "/our-partners",
      "text_005": "View More Partners →"
    }
  },
  {
    "key": "about.pages_about_page_components_then_now_then_now",
    "page": "about",
    "section": "pages_about_page_components_then_now_then_now",
    "title": "Then Now",
    "sort_order": 4,
    "content": {
      "text_001": "Then &amp; Now",
      "text_002": "Same purpose New emblem.",
      "text_003": "The transformation was never about leaving the past behind — it was about giving a decade of expertise a bolder identity.",
      "text_004": "Then",
      "text_005": "IBIS Consultancy",
      "text_006": "2016 – 2024",
      "text_007": "Wisdom · Knowledge · Contemplation — the ibis, symbol of Thoth, represented deep expertise and considered strategy.",
      "text_008": "Now",
      "text_009": "Kent Business College",
      "text_010": "2024 – Present",
      "text_011": "Strength · Momentum · Empowerment — the Kent horse carries that same wisdom forward, in motion.",
      "alt_012": "The IBIS Consultancy mascot",
      "alt_013": "The Kent Business College horse emblem"
    }
  },
  {
    "key": "about.pages_about_page_components_values_values",
    "page": "about",
    "section": "pages_about_page_components_values_values",
    "title": "Values",
    "sort_order": 5,
    "content": {
      "text_001": "What We Stand For",
      "text_002": "Our Values",
      "text_003": "Empowering Futures",
      "text_004": "Providing outstanding education, targeted training and continuous professional development that opens real career pathways.",
      "text_005": "Reducing Footprint",
      "text_006": "Embedding environmental sustainability into every operation — because responsible growth is the only growth worth having.",
      "text_007": "Strengthening Partnerships",
      "text_008": "Building collaborative relationships with employers and communities that create mutual, lasting value."
    }
  },
  {
    "key": "about.pages_about_page_components_vision_missi_vision_mission",
    "page": "about",
    "section": "pages_about_page_components_vision_missi_vision_mission",
    "title": "Vision Mission",
    "sort_order": 6,
    "content": {
      "text_001": "Vision &amp; Mission",
      "text_002": "What drives us forward",
      "text_003": "Our Vision",
      "text_004": "To establish Kent Business College as a globally recognised leader in consultancy and education — renowned for translating cutting-edge academic research into practical strategies that drive industry innovation and sustainable growth.",
      "text_005": "Our Mission",
      "text_006": "To bridge the gap between rigorous academic research and real-world application — fostering meaningful partnerships with employers through tailored recruitment services and bespoke training programmes."
    }
  },
  {
    "key": "partners.pages_information_page_partners_page_page_title",
    "page": "partners",
    "section": "pages_information_page_partners_page_page_title",
    "title": "Page Title",
    "sort_order": 0,
    "content": {
      "text_001": "Organisations connected to KBC"
    }
  },
  {
    "key": "partners.pages_information_page_partners_page_page_summary",
    "page": "partners",
    "section": "pages_information_page_partners_page_page_summary",
    "title": "Page Summary",
    "sort_order": 1,
    "content": {
      "text_002": "Employer and professional relationships help keep learning relevant to real roles, teams and sectors."
    }
  },
  {
    "key": "partners.pages_information_page_partners_page_partners_page",
    "page": "partners",
    "section": "pages_information_page_partners_page_partners_page",
    "title": "Partners Page",
    "sort_order": 2,
    "content": {
      "src_003": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/ebbbd02b5ed241478e0ef1152f4835e1.webp",
      "text_004": "Our partners",
      "text_005": "Trusted organisations, moving forward together.",
      "text_006": "We work with employers and professional communities to connect development with workplace priorities and long-term capability.",
      "aria_label_007": "Partner organisations",
      "aria_label_008": "Organisations whose professionals learn with Kent Business College"
    }
  },
  {
    "key": "partners.components_common_trusted_logos_trusted_organisation_logos",
    "page": "partners",
    "section": "components_common_trusted_logos_trusted_organisation_logos",
    "title": "Trusted Organisation Logos",
    "sort_order": 3,
    "content": {
      "name_001": "Crazy Bear",
      "image_002": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/4595895af96c4c4d9218658cad3c3944.webp",
      "name_003": "University of Lincoln",
      "image_004": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/347e5d11627e434882f84a1935eaa5b2.webp",
      "name_005": "BMT",
      "image_006": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/d41fcca69ced4ee19edf5f3602d7bba4.webp",
      "name_007": "Nolan Business Solutions",
      "image_008": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/53ea37c179fe4ccbba9069eb100845a8.webp",
      "name_009": "Network Rail",
      "image_010": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/b8214283f7614be988da19816c56a574.webp",
      "name_011": "Liverpool City Council",
      "image_012": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/f5447dee04af4c6099e225dd30c2b827.webp",
      "name_013": "Wincanton",
      "image_014": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/4c25df04ce73469b88478cdc5c46e105.webp",
      "name_015": "West Lancashire College",
      "image_016": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/ff3503a090c3485da3f2d6a86f969d86.webp",
      "name_017": "Watts",
      "image_018": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/b26010f18a3348fe92b8dbce19891671.webp",
      "name_019": "London School of Economics and Political Science",
      "image_020": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/e627bc942684469b9dd178b3406c7bec.webp",
      "name_021": "Lolly",
      "image_022": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/6fcac89d80884b38a37f1953d78f7f61.webp",
      "name_023": "Judytia",
      "image_024": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/84aa2073f38f4633a76bb23595345096.webp",
      "name_025": "Partner organisation 13",
      "image_026": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/5dd67e4ddf6e4e02b81a661ef5551836.webp",
      "name_027": "Partner organisation 14",
      "image_028": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/7e9051fb549347e9a6212c864edc42b1.webp",
      "name_029": "Partner organisation 15",
      "image_030": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/5105df9217d045eba0172fd4cc9dbb6d.webp",
      "name_031": "Partner organisation 16",
      "image_032": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/7cea1542235244e08e459d0e7ee6ab6d.webp",
      "name_033": "Partner organisation 17",
      "image_034": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/a0159d25123a42c7b5f0d74a45034539.webp",
      "name_035": "Partner organisation 18",
      "image_036": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/0a13aaaea52c4be89a25d1b7fca46826.webp",
      "name_037": "Partner organisation 19",
      "image_038": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/2bbe1002ee184df49500182d928c2f2b.webp",
      "name_039": "Partner organisation 20",
      "image_040": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/61cab00535584d48be4866a63fdb3fc3.webp",
      "name_041": "Partner organisation 21",
      "image_042": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/be8a4a24f484456eac6e5fd1ad14e719.webp",
      "name_043": "Partner organisation 22",
      "image_044": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/a5bf37dd21ec49ce9c5401526bc0cd67.webp",
      "name_045": "Partner organisation 23",
      "image_046": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/b0153e509a2e4c1eba48d2a60c9740d2.webp",
      "name_047": "Partner organisation 24",
      "image_048": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/e8bf62c676b549d2b682f97d10e503ab.webp",
      "name_049": "Partner organisation 25",
      "image_050": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/34ead1b2cc0c4d54863e94e1443ab705.webp"
    }
  },
  {
    "key": "experts.pages_people_page_page_people_page",
    "page": "experts",
    "section": "pages_people_page_page_people_page",
    "title": "People Page",
    "sort_order": 0,
    "content": {
      "fallback_title_001": "Our Experts | Kent Business College",
      "fallback_description_002": "Meet the portfolio, project, programme and benefits-realisation experts supporting professional learning at Kent Business College.",
      "text_003": "Our experts",
      "text_004": "Expertise that moves",
      "text_005": "practice forward.",
      "text_006": "Learn from recognised specialists who connect rigorous thinking with real-world portfolio, programme and project delivery.",
      "src_007": "/assets/patterns/kbc-horse-growth.png",
      "text_008": "Learn with specialists",
      "text_009": "Find the right professional route for your goals.",
      "text_010": "Talk to the KBC team about programmes, expert-led sessions and organisational development.",
      "to_011": "/courses",
      "text_012": "Explore programmes",
      "to_013": "/book-session",
      "text_014": "Book an information session"
    }
  },
  {
    "key": "experts.pages_people_page_components_faculty_sec_faculty_section",
    "page": "experts",
    "section": "pages_people_page_components_faculty_sec_faculty_section",
    "title": "Faculty Section",
    "sort_order": 1,
    "content": {
      "text_001": "Professional faculty",
      "text_002": "Meet the people behind the insight.",
      "text_003": "View Profile"
    }
  },
  {
    "key": "experts.pages_people_page_data_people_hero_image",
    "page": "experts",
    "section": "pages_people_page_data_people_hero_image",
    "title": "People Hero Image",
    "sort_order": 2,
    "content": {
      "text_001": "/assets/images/experts/experts-hero-split-amgad.png"
    }
  },
  {
    "key": "experts.pages_people_page_data_amgad_hero_image",
    "page": "experts",
    "section": "pages_people_page_data_amgad_hero_image",
    "title": "Amgad Hero Image",
    "sort_order": 3,
    "content": {
      "text_002": "/assets/images/experts/dr-amgad-hero-original.png"
    }
  },
  {
    "key": "experts.pages_people_page_data_experts",
    "page": "experts",
    "section": "pages_people_page_data_experts",
    "title": "Experts",
    "sort_order": 4,
    "content": {
      "name_003": "Dr. Stephen Jenner",
      "role_004": "Managing Portfolio Specialist",
      "organisation_005": "Chief Examiner, APMG Managing Benefits & Managing Portfolios",
      "bio_006": "Stephen Jenner has extensive experience at senior level of the UK Senior Civil Service, where he was Director of Criminal Justice IT and benefits management adviser on a range of cross-government programmes.",
      "image_007": "https://kentbusinesscollege.com/wp-content/uploads/2026/06/Stephen-Jenner-Project-Control-Professional-819x1024.webp",
      "credentials_008": "Author · Chief Examiner · International Speaker",
      "expertise_009": "Portfolio governance",
      "expertise_010": "Benefits realisation",
      "expertise_011": "Strategic investment",
      "expertise_012": "Public-sector transformation",
      "profile_013": "Stephen Jenner brings senior public-sector leadership and international subject-matter expertise to portfolio and benefits management. During his UK Civil Service career, he served as Director of Criminal Justice IT and advised cross-government programmes on benefits management.",
      "profile_014": "Since leaving the Civil Service, he has become an internationally recognised specialist in project portfolio and benefits realisation management. His work helps leaders connect investment decisions to measurable outcomes through practical governance and benefits disciplines.",
      "profile_015": "Stephen is a regular international speaker and author, and designs and delivers postgraduate and corporate learning for professional audiences.",
      "highlights_016": "Chief Examiner for APMG Managing Benefits",
      "highlights_017": "Chief Examiner for APMG Managing Portfolios",
      "highlights_018": "Former Director of Criminal Justice IT",
      "highlights_019": "Author and international conference speaker",
      "name_020": "Dr. Ray Mead",
      "role_021": "Project Management Consultant",
      "organisation_022": "Founding Partner, p3m global",
      "bio_023": "Ray is a Founding Partner at p3m global, a leading consultancy in sustainable change and strategic execution. With more than 20 years in P3M, he is a recognised thought leader and board adviser.",
      "image_024": "https://kentbusinesscollege.com/wp-content/uploads/2026/06/Ray-Mead-Project-Control-Professional-819x1024.webp",
      "credentials_025": "MBA · PMP · Author · Executive Adviser",
      "expertise_026": "P3M capability",
      "expertise_027": "PMO strategy",
      "expertise_028": "Executive advisory",
      "profile_029": "Ray Mead is a founding partner of p3m global and a specialist in organisational project, programme and portfolio capability. He works with leadership teams to make governance, delivery structures and PMOs more effective in complex change environments.",
      "profile_030": "His approach combines executive advice, capability assessment, targeted development and practical operating models. His professional work supports organisations in turning strategic priorities into sustainable change.",
      "profile_031": "Ray is the author of Delivering Successful PMOs and a regular contributor to professional conversations about transformation, organisational maturity and the future of P3M delivery.",
      "highlights_032": "Founding Partner at p3m global",
      "highlights_033": "More than 20 years across the P3M profession",
      "highlights_034": "Author of Delivering Successful PMOs",
      "highlights_035": "Executive and board-level adviser",
      "name_036": "Dr. Amgad Badewi",
      "role_037": "Project Management Specialist",
      "organisation_038": "Kent Business School, University of Kent",
      "bio_039": "A highly accomplished academic and practitioner in Project and Programme Management, with a PhD from Cranfield University and extensive experience in executive education and consultancy.",
      "image_040": "https://kentbusinesscollege.com/wp-content/uploads/2026/04/WeStream2026-337-2-805x1024.webp",
      "credentials_041": "PhD · PMP · MSP AP · ITIL",
      "expertise_042": "Benefits realisation",
      "expertise_043": "Programme management",
      "expertise_044": "Transformation governance",
      "expertise_045": "Executive education",
      "profile_046": "Dr. Amgad Badewi is an academic, consultant and executive educator in project and programme management. He holds a PhD from Cranfield University and a postgraduate teaching qualification from the University of Kent.",
      "profile_047": "His research and professional practice connect benefits realisation, transformation governance and organisational capability with applied delivery. His teaching and consultancy span project management, programme management, agile delivery and organisational change.",
      "profile_048": "Amgad has designed and delivered executive learning for international public- and private-sector organisations and contributes actively to professional and academic project-management communities.",
      "highlights_049": "Reader at Kent Business School",
      "highlights_050": "APM Herbert Walton Prize recipient",
      "highlights_051": "Contributor to PMI benefits-realisation guidance",
      "highlights_052": "International executive educator and consultant",
      "name_053": "Steven Wake",
      "role_054": "Earned Value & Project Controls Specialist",
      "organisation_055": "APMG International and the project controls profession",
      "bio_056": "Lead author for Earned Value Management through APMG International, contributor to project controls standards and a key figure in the Association for Project Management Chartered Status journey.",
      "image_057": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/031b05260ce4497fa63970e9f76a3ab4.webp",
      "credentials_058": "Earned Value Management · Project Controls · Professional Standards",
      "expertise_059": "Earned value management",
      "expertise_060": "Project controls standards",
      "expertise_061": "Professional recognition",
      "expertise_062": "Capability development",
      "profile_063": "Steven Wake is a project controls specialist whose work connects earned value management, professional standards and practical capability development.",
      "profile_064": "As lead author for Earned Value Management through APMG International, he has helped translate project controls principles into structured professional practice.",
      "profile_065": "He has also contributed to project controls standards and the Association for Project Management Chartered Status journey.",
      "highlights_066": "Lead author for APMG Earned Value Management",
      "highlights_067": "Contributor to project controls standards",
      "highlights_068": "Contributor to the APM Chartered Status journey",
      "highlights_069": "Specialist in professional project controls capability",
      "name_070": "Andrew Millington",
      "role_071": "Strategic Projects & Programmes Specialist",
      "organisation_072": "Associate Professor and strategic P3M leader",
      "bio_073": "Strategic leader and Associate Professor with senior project, programme and portfolio leadership experience across manufacturing, defence, technology and services.",
      "image_074": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/a2be2ade866f464cae0f60aa3bae25c4.webp",
      "credentials_075": "Associate Professor · Strategic Leadership · P3M",
      "expertise_076": "Complex programmes",
      "expertise_077": "Portfolio leadership",
      "expertise_078": "Strategic delivery",
      "expertise_079": "Organisational capability",
      "profile_080": "Andrew Millington is a strategic leader and Associate Professor with senior experience across projects, programmes and portfolios.",
      "profile_081": "His professional perspective is grounded in leadership across manufacturing, defence, technology and services, where delivery depends on clear governance and coordinated decision-making.",
      "profile_082": "He supports professionals in connecting strategic intent with practical project, programme and portfolio delivery.",
      "highlights_083": "Senior project, programme and portfolio leadership",
      "highlights_084": "Experience across manufacturing and defence",
      "highlights_085": "Experience across technology and services",
      "highlights_086": "Associate Professor and strategic capability specialist",
      "name_087": "Femi Falodun",
      "role_088": "Marketing & Communications Specialist",
      "organisation_089": "Marketing Tutor, Kent Business College",
      "bio_090": "A marketing and communications professional with more than 12 years of experience across strategy, public relations, content, digital marketing, teaching and professional mentoring.",
      "image_091": "/assets/images/experts/femi-falodun.jpg",
      "credentials_092": "CFCIM · CMktr · MBA · MRes",
      "expertise_093": "Marketing strategy",
      "expertise_094": "Content and communications",
      "expertise_095": "Customer experience",
      "expertise_096": "Professional mentoring",
      "profile_097": "Femi Falodun is a marketing and communications professional with more than 12 years of industry experience. As a Marketing Tutor at Kent Business College, he helps learners connect marketing theory with practical decisions across strategy, content, customer experience and communications.",
      "profile_098": "He is a Chartered Fellow of the Chartered Institute of Marketing and a Chartered Marketer. His academic background includes an MBA in Marketing, an MRes in Advanced Marketing Management and a Chartered Postgraduate Diploma in Marketing. He is also undertaking doctoral research at Kent Business School into corporate sustainability communication in emerging markets.",
      "profile_099": "Femi combines industry practice with teaching, coaching and mentoring. His work spans public relations, content marketing, digital marketing and strategic communications, and he contributes to the profession as a CIM mentor, writer and speaker.",
      "highlights_100": "Marketing Tutor at Kent Business College",
      "highlights_101": "Chartered Fellow and Chartered Marketer",
      "highlights_102": "Doctoral researcher at Kent Business School",
      "highlights_103": "CIM mentor, industry writer and speaker"
    }
  },
  {
    "key": "governance.pages_governance_board_page_component_go_governance_hero",
    "page": "governance",
    "section": "pages_governance_board_page_component_go_governance_hero",
    "title": "Governance Hero",
    "sort_order": 0,
    "content": {
      "text_001": "Governance Board"
    }
  },
  {
    "key": "governance.pages_governance_board_page_data_governance_meta",
    "page": "governance",
    "section": "pages_governance_board_page_data_governance_meta",
    "title": "Governance Meta",
    "sort_order": 1,
    "content": {
      "title_001": "Governance Board | Kent Business College",
      "description_002": "Kent Business College governance arrangements, independent oversight and public accountability, including an expression of interest for future governance roles."
    }
  },
  {
    "key": "governance.pages_governance_board_page_data_governance_hero",
    "page": "governance",
    "section": "pages_governance_board_page_data_governance_hero",
    "title": "Governance Hero",
    "sort_order": 2,
    "content": {
      "eyebrow_003": "Governance Board",
      "title_004": "Current Governance and Oversight",
      "description_005": "Kent Business College maintains governance and oversight arrangements that provide independent scrutiny, support and challenge to senior leaders. Governance activity focuses on learners and apprentices, safeguarding, quality of education, employer engagement, responsible use of resources and compliance with current apprenticeship requirements.",
      "action_label_006": "View Details",
      "action_href_007": "#current-governance",
      "image_008": "/assets/images/about-campus.jpg"
    }
  },
  {
    "key": "governance.pages_governance_board_page_data_governance_page_nav",
    "page": "governance",
    "section": "pages_governance_board_page_data_governance_page_nav",
    "title": "Governance Page Nav",
    "sort_order": 3,
    "content": {
      "label_009": "Provider Status",
      "href_010": "#provider-status",
      "label_011": "About",
      "href_012": "#current-governance",
      "label_013": "Structure",
      "href_014": "#governance-structure",
      "label_015": "Board",
      "href_016": "#governance-board-members",
      "label_017": "Assurance",
      "href_018": "#oversight-assurance",
      "label_019": "Accountability",
      "href_020": "#roles-accountability",
      "label_021": "Expression of Interest",
      "href_022": "#eoi-form"
    }
  },
  {
    "key": "governance.pages_governance_board_page_data_provider_status",
    "page": "governance",
    "section": "pages_governance_board_page_data_provider_status",
    "title": "Provider Status",
    "sort_order": 4,
    "content": {
      "title_023": "Provider Status",
      "description_024": "These details help employers, apprentices, governors and stakeholders identify the provider correctly across public education, funding and company records.",
      "items_label_025": "Legal and trading name",
      "items_label_026": "UKPRN",
      "items_label_027": "Ofsted URN",
      "items_label_028": "Provider type"
    }
  },
  {
    "key": "governance.pages_governance_board_page_data_governance_overview",
    "page": "governance",
    "section": "pages_governance_board_page_data_governance_overview",
    "title": "Governance Overview",
    "sort_order": 5,
    "content": {
      "title_029": "About the Governance Board",
      "paragraphs_030": "The Governance Board provides independent oversight of Kent Business College's apprenticeship and training provision. It reviews evidence from senior leaders, tests the accuracy of self-assessment, monitors improvement activity and checks that decisions remain focused on the interests of learners, apprentices, employers and stakeholders.",
      "paragraphs_031": "Governors receive assurance on curriculum quality, teaching and training, safeguarding, learner voice, employer engagement, finance, risk, data and funding compliance. Challenge and agreed actions are recorded through normal governance papers, minutes and action tracking.",
      "paragraphs_032": "The Governance Board does not replace the statutory duties of the company directors or the operational responsibilities of senior leaders. Its purpose is to provide scrutiny, support, challenge and public accountability.",
      "key_details_title_033": "Key Details",
      "key_details_label_034": "Current Chair",
      "key_details_label_035": "Board Meetings",
      "key_details_label_036": "Primary Responsibilities",
      "key_details_label_037": "Governance Contact",
      "key_details_href_038": "mailto:office@kentbusinesscollege.org"
    }
  },
  {
    "key": "governance.pages_governance_board_page_data_governance_structure",
    "page": "governance",
    "section": "pages_governance_board_page_data_governance_structure",
    "title": "Governance Structure",
    "sort_order": 6,
    "content": {
      "title_039": "Governance Structure",
      "description_040": "The structure separates independent oversight from day-to-day leadership and statutory company responsibilities.",
      "items_eyebrow_041": "Independent oversight",
      "items_title_042": "Governance Board",
      "items_description_043": "Reviews evidence, challenges leaders, monitors agreed actions and checks the impact of provision on learners and apprentices.",
      "items_eyebrow_044": "Operational leadership",
      "items_title_045": "Senior Leadership Team",
      "items_description_046": "Leads delivery, safeguarding, quality improvement, employer engagement, learner support and compliance activity.",
      "items_eyebrow_047": "Corporate accountability",
      "items_title_048": "Company Directors",
      "items_description_049": "Hold statutory and corporate responsibilities for Kent Business College Ltd and receive assurance through governance and leadership processes."
    }
  },
  {
    "key": "governance.pages_governance_board_page_data_governance_members",
    "page": "governance",
    "section": "pages_governance_board_page_data_governance_members",
    "title": "Governance Members",
    "sort_order": 7,
    "content": {
      "title_050": "Current Governance Board and Attendees",
      "description_051": "The people below contribute to governance, assurance, reporting and operational oversight. Director and staff roles are shown transparently so they are not confused with independent governor roles.",
      "items_name_052": "Dr Amgad Badewi",
      "items_role_053": "Director and Chair of Governance Board",
      "items_description_054": "Chairs governance discussions, supports transparent accountability and ensures agreed actions are followed through.",
      "items_image_055": "/assets/images/governance-board/dr-amgad-badewi.png",
      "items_name_056": "Nada Ibrahim",
      "items_role_057": "Executive Director",
      "items_description_058": "Provides director-level assurance on leadership, compliance, finance, risk and the delivery of improvement priorities.",
      "items_image_059": "/assets/images/governance-board/nada-ibrahim.png",
      "items_name_060": "Graham Heath",
      "items_role_061": "Head of Quality and Compliance",
      "items_description_062": "Reports on curriculum quality, teaching, training, assessment, learner progress and compliance evidence.",
      "items_image_063": "/assets/images/governance-board/graham-heath.png",
      "items_name_064": "Tina Wright",
      "items_role_065": "Designated Safeguarding Lead",
      "items_description_066": "Provides assurance on safeguarding, Prevent, safer recruitment, staff training, referrals and learner wellbeing.",
      "items_image_067": "/assets/images/governance-board/tina-wright.png",
      "items_name_068": "Lisa Sedge",
      "items_role_069": "Finance and Compliance Manager",
      "items_description_070": "Supports oversight of financial controls, funding compliance, audit evidence, data quality and risk tracking.",
      "items_image_071": "/assets/images/governance-board/lisa-sedge.png",
      "items_name_072": "Prof. Yousef Sultan",
      "items_role_073": "Performance Delivery Manager",
      "items_description_074": "Contributes assurance on delivery performance, employer engagement, skills outcomes and learner progress.",
      "items_image_075": "/assets/images/governance-board/prof-yousef-sultan.png",
      "items_name_076": "Mohamed Elmasry",
      "items_role_077": "Chief Technology Officer",
      "items_description_078": "Attends as a senior leader to provide assurance on technology, systems, data security and online learning support.",
      "items_image_079": "/assets/images/governance-board/mohamed-elmasry.png",
      "items_name_080": "Alex Pennington",
      "items_role_081": "HR Manager",
      "items_description_082": "Provides assurance on people processes, safer recruitment, staff training, workforce capacity and HR compliance.",
      "items_image_083": "/assets/images/governance-board/alex-pennington.png",
      "items_name_084": "Youmna Ibrahim",
      "items_role_085": "Corporate Account Executive",
      "items_description_086": "Supports employer communication, stakeholder engagement and feedback evidence for governance reporting.",
      "items_image_087": "/assets/images/governance-board/youmna-ibrahim.png"
    }
  },
  {
    "key": "governance.pages_governance_board_page_data_oversight_and_assurance",
    "page": "governance",
    "section": "pages_governance_board_page_data_oversight_and_assurance",
    "title": "Oversight And Assurance",
    "sort_order": 8,
    "content": {
      "title_088": "Oversight and Assurance",
      "description_089": "The Board uses routine evidence from directors and operational leads to provide support, challenge and assurance. Its work focuses on the quality and impact of provision rather than paperwork alone.",
      "items_title_090": "Quality of Education",
      "items_description_091": "Curriculum quality, teaching, training, assessment, progress, achievement and learner feedback.",
      "items_title_092": "Safeguarding and Prevent",
      "items_description_093": "Safeguarding leadership, Prevent, safer recruitment, online safety, concerns, referrals and wellbeing.",
      "items_title_094": "Learner Voice and Inclusion",
      "items_description_095": "Apprentice experience, complaints, barriers to learning, reasonable adjustments and support for those with additional needs.",
      "items_title_096": "Funding and Data",
      "items_description_097": "Assurance on learner eligibility, recognition of prior learning, training plans, off-the-job training evidence, progress reviews and ILR data.",
      "items_title_098": "Employers and Skills",
      "items_description_099": "Employer engagement, workplace application of skills, skills needs, partnerships and feedback from employers.",
      "items_title_100": "Action Tracking",
      "items_description_101": "Board minutes record support, challenge, decisions, owners, target dates and follow-up on agreed improvement actions."
    }
  },
  {
    "key": "governance.pages_governance_board_page_data_governance_accountability",
    "page": "governance",
    "section": "pages_governance_board_page_data_governance_accountability",
    "title": "Governance Accountability",
    "sort_order": 9,
    "content": {
      "title_102": "Governance Roles and Accountability",
      "columns_103": "Main Responsibility",
      "columns_104": "How It Connects to Governance",
      "rows_role_105": "Company Directors",
      "rows_responsibility_106": "Statutory and corporate responsibilities for Kent Business College Ltd, including director duties held by Dr Amgad Badewi and Nada Ibrahim.",
      "rows_connection_107": "Receive assurance from governance and leadership processes while retaining company responsibilities. Director roles are shown separately from independent governor roles.",
      "rows_role_108": "Governance Board",
      "rows_responsibility_109": "Strategic oversight, scrutiny, support, challenge, assurance and public accountability.",
      "rows_connection_110": "Reviews evidence, challenges leaders and monitors whether improvement actions are effective across quality, safeguarding, finance, risk, employers and skills.",
      "rows_role_111": "Operational Assurance Leads",
      "rows_responsibility_112": "Day-to-day leadership and evidence for quality, safeguarding, finance, compliance, HR, employer engagement, technology and delivery performance.",
      "rows_connection_113": "Provide reports and evidence to governance. These roles support assurance and are not presented as independent governor roles unless formally appointed."
    }
  },
  {
    "key": "governance.pages_governance_board_page_data_funding_and_quality_assurance",
    "page": "governance",
    "section": "pages_governance_board_page_data_funding_and_quality_assurance",
    "title": "Funding And Quality Assurance",
    "sort_order": 10,
    "content": {
      "title_114": "Funding and Quality Assurance",
      "paragraphs_115": "Kent Business College is listed on the Apprenticeship Provider and Assessment Register as a main provider. Governors receive assurance that apprenticeship provision is managed in line with current government apprenticeship funding rules, provider agreement requirements and normal quality assurance processes.",
      "paragraphs_116": "This includes assurance on learner eligibility, recognition of prior learning, agreed training plans, off-the-job training evidence, progress reviews, English and maths support where required, subcontracting where applicable, ILR/data compliance and end-point assessment arrangements."
    }
  },
  {
    "key": "governance.pages_governance_board_page_data_safeguarding_and_prevent",
    "page": "governance",
    "section": "pages_governance_board_page_data_safeguarding_and_prevent",
    "title": "Safeguarding And Prevent",
    "sort_order": 11,
    "content": {
      "title_117": "Safeguarding and Prevent",
      "details_label_118": "Who is covered",
      "details_label_119": "Governance assurance",
      "public_information_label_120": "Public information",
      "public_information_action_121": "View the Safeguarding Handbook",
      "public_information_href_122": "/safeguarding-handbook"
    }
  },
  {
    "key": "governance.pages_governance_board_page_data_expression_of_interest",
    "page": "governance",
    "section": "pages_governance_board_page_data_expression_of_interest",
    "title": "Expression Of Interest",
    "sort_order": 12,
    "content": {
      "title_123": "Expression of Interest",
      "description_124": "Recruitment for future governance roles is separate from the current governance information above. Expressions of interest are welcome from people with relevant expertise and a commitment to improving outcomes for learners and apprentices.",
      "form_title_125": "Governance Board EOI"
    }
  },
  {
    "key": "governance.pages_governance_board_page_component_go_governance_members_section",
    "page": "governance",
    "section": "pages_governance_board_page_component_go_governance_members_section",
    "title": "Governance Members Section",
    "sort_order": 13,
    "content": {
      "eyebrow_001": "People and roles"
    }
  },
  {
    "key": "governance.pages_governance_board_page_component_go_provider_status_section",
    "page": "governance",
    "section": "pages_governance_board_page_component_go_provider_status_section",
    "title": "Provider Status Section",
    "sort_order": 14,
    "content": {
      "eyebrow_001": "Provider information"
    }
  },
  {
    "key": "governance.pages_governance_board_page_component_go_governance_overview_section",
    "page": "governance",
    "section": "pages_governance_board_page_component_go_governance_overview_section",
    "title": "Governance Overview Section",
    "sort_order": 15,
    "content": {
      "eyebrow_002": "Current governance",
      "text_003": "Governance at a glance"
    }
  },
  {
    "key": "governance.pages_governance_board_page_component_go_governance_structure_section",
    "page": "governance",
    "section": "pages_governance_board_page_component_go_governance_structure_section",
    "title": "Governance Structure Section",
    "sort_order": 16,
    "content": {
      "eyebrow_004": "Governance framework"
    }
  },
  {
    "key": "governance.pages_governance_board_page_component_go_governance_assurance_section",
    "page": "governance",
    "section": "pages_governance_board_page_component_go_governance_assurance_section",
    "title": "Governance Assurance Section",
    "sort_order": 17,
    "content": {
      "eyebrow_005": "Oversight"
    }
  },
  {
    "key": "governance.pages_governance_board_page_component_go_governance_accountability_section",
    "page": "governance",
    "section": "pages_governance_board_page_component_go_governance_accountability_section",
    "title": "Governance Accountability Section",
    "sort_order": 18,
    "content": {
      "eyebrow_006": "Accountability"
    }
  },
  {
    "key": "governance.pages_governance_board_page_component_go_governance_eoi_section",
    "page": "governance",
    "section": "pages_governance_board_page_component_go_governance_eoi_section",
    "title": "Governance Eoi Section",
    "sort_order": 19,
    "content": {
      "eyebrow_007": "Future governance roles"
    }
  },
  {
    "key": "governance.pages_governance_board_page_component_go_governance_accountability_table",
    "page": "governance",
    "section": "pages_governance_board_page_component_go_governance_accountability_table",
    "title": "Governance Accountability Table",
    "sort_order": 20,
    "content": {
      "text_001": "Governance roles, responsibilities and their connection to governance"
    }
  },
  {
    "key": "safeguarding.pages_information_page_safeguarding_page_policy_sections",
    "page": "safeguarding",
    "section": "pages_information_page_safeguarding_page_policy_sections",
    "title": "Policy Sections",
    "sort_order": 0,
    "content": {
      "eyebrow_001": "Safeguarding",
      "title_002": "Commitment to Safeguarding Adult Learners (18+)",
      "paragraphs_003": "KBC is committed to safeguarding all of our learners and protecting their right to live and learn in safety, free from abuse or neglect. We maintain thorough and effective safeguarding arrangements that meet or exceed legal requirements. Safeguarding is everyone’s responsibility at KBC – all staff and associates have an active role in protecting learners from harm, and learner welfare is our paramount concern. We foster a culture where staff are vigilant and learners feel safe, valued, and respected enough to speak up about any issue. Our approach to safeguarding aligns with relevant legislation and guidance (e.g. the Education Acts, Care Act 2014, and Keeping Children Safe in Education) to ensure an outstanding standard of care and protection.",
      "paragraphs_004": "KBC’s safeguarding practices extend to all adult learners, including those who may be vulnerable adults. We fully recognize our duty to promote the welfare of vulnerable adult learners (for example, individuals with care needs or disabilities) and we are morally committed to the safeguarding of all learners regardless of age or vulnerability. We emphasize the principle of empowerment: adults are involved in decisions about their safety. Our staff take into account each learner’s views, wishes, beliefs, and feelings when deciding any safeguarding action. We also work proactively with external agencies and partners where necessary to prevent harm, protect learners’ rights to safety, and ensure safeguarding is effective across all our programs.",
      "eyebrow_005": "Prevent Duty",
      "title_006": "Compliance with the Prevent Duty (Anti-Radicalisation)",
      "paragraphs_007": "KBC fully complies with the Prevent Duty, which is part of the UK government’s counter-terrorism strategy. The Counter Terrorism and Security Act 2015 places a statutory duty on education providers to “have due regard to the need to prevent people from being drawn into terrorism”. In line with this duty, we have robust policies and staff training in place to prevent radicalisation and extremist influence among our learners. Prevent concerns are treated with the same urgency as any safeguarding concern – any member of our college community who is at risk of radicalisation will receive prompt support and intervention. We raise awareness among learners and staff about the dangers of extremist ideologies and how to report any concerns. KBC acts responsibly and swiftly if we suspect any learner is being exposed to or influenced by extremist activities. Through these measures, we actively support the protection of our learners from terrorism, in harmony with our safeguarding obligations.",
      "eyebrow_008": "College culture",
      "title_009": "Promoting British Values",
      "paragraphs_010": "As part of our Prevent Duty and our broader educational mission, KBC actively promotes the fundamental British values of democracy, the rule of law, individual liberty, and mutual respect and tolerance of those with different faiths and beliefs. These values are integrated into our curriculum and college culture. We encourage open discussion and critical thinking so that learners gain an understanding of citizens’ rights and responsibilities in a democratic society and the importance of respect and tolerance. KBC challenges any opinions or behaviors that contravene these fundamental values. By embedding British values, we aim to equip learners to become respectful, responsible members of society and to strengthen the barriers against extremism. Our college community stands for respect, diversity, and equal opportunity, reflecting the ideals of modern British society in which our learners live and work.",
      "eyebrow_011": "Inclusive learning",
      "title_012": "Equality, Diversity, and Inclusion (EDI)",
      "paragraphs_013": "Equality, diversity, and inclusion are at the heart of KBC’s ethos. We are committed to treating everyone fairly and with respect, valuing the rich diversity of our learners, staff, and partners. In line with the Equality Act 2010, we strive to eliminate discrimination and provide equal opportunities in all aspects of teaching, learning, and support.",
      "paragraphs_014": "This commitment means embedding EDI principles into our curriculum design, classroom practice, and support services.",
      "paragraphs_015": "We actively ensure that no learner is excluded or disadvantaged on the basis of characteristics such as age, disability, sex or gender identity, race or ethnicity, sexual orientation, religion or belief, or any other protected characteristic.",
      "paragraphs_016": "All learners are encouraged to share their perspectives and experiences, which enriches our learning environment.",
      "paragraphs_017": "KBC provides inclusive learner support to meet diverse needs, including those of learners with disabilities or additional learning needs. We make reasonable adjustments wherever necessary to help every learner participate fully. Our staff receive training on cultural competence, unconscious bias, and inclusive teaching strategies to maintain a learning environment where everyone feels respected and safe to be themselves. By embedding EDI in daily practice, we nurture a culture that celebrates differences and promotes dignity, tolerance, and fairness for all.",
      "eyebrow_018": "Learner welfare",
      "title_019": "Learner Safety, Wellbeing, and Mental Health Support",
      "paragraphs_020": "We recognise that safeguarding goes beyond protection from immediate harm – it encompasses the broader wellbeing and mental health of our learners. KBC is committed to promoting learner health and wellbeing alongside academic progress. We have systems in place to identify and support learners who may be struggling with mental health issues, stress, or personal difficulties. Our Learner Support Team offers confidential advice and can assist learners with mental health needs or learning difficulties, ensuring they receive appropriate support and adjustments. We also proactively signpost learners to external mental health services or counseling as needed.",
      "paragraphs_021": "The college’s safeguarding approach is founded on the principle of doing what is in the best interests of the learner. We aim to empower adult learners by involving them in decisions and respecting their autonomy, while still providing robust protection. We promote the wellbeing of adults by considering their views and feelings and protecting their right to live in safety, free from abuse and neglect. Any learner who has a concern about their own safety or wellbeing will be listened to and supported. By cultivating an environment of trust and care, we ensure that learners feel comfortable seeking help – whether they face bullying, harassment, mental health challenges, or any form of abuse. KBC’s overarching goal is that every learner feels safe, supported, and able to thrive both academically and personally.",
      "eyebrow_022": "Digital learning",
      "title_023": "Online Safety",
      "paragraphs_024": "KBC takes online safety as seriously as physical on-site safety. Many of our learning activities and resources are digital, and we recognise the potential risks that come with online engagement – such as cyberbullying, online harassment, radicalisation, fraud, or exposure to harmful content. We therefore maintain a robust approach to e-safety to protect our learners and staff in virtual spaces. Our college provides guidance and training on safe and responsible online behavior. Learners are taught about protecting their personal data, using social media responsibly, and recognizing and reporting online risks. We ensure that our online learning platforms are secure (password-protected and monitored) and that only authorised users can access them.",
      "paragraphs_025": "To reinforce safe online practices, we keep our community informed of up-to-date cyber safety advice. For example, we encourage learners and staff to follow the UK National Cyber Security Centre’s Stay Safe Online guidance, which offers practical tips for online security. Our IT usage is monitored in line with our safeguarding policy to detect and prevent inappropriate activity. Any incidents of cyberbullying or online misconduct are taken seriously and dealt with under our safeguarding and disciplinary procedures. By combining technological safeguards with education on digital citizenship, KBC ensures that learners can benefit from online resources confidently and safely.",
      "eyebrow_026": "Staff standards",
      "title_027": "Safer Recruitment and Staff Training",
      "paragraphs_028": "KBC employs rigorous safer recruitment practices to prevent unsuitable individuals from working with our learners. All prospective staff and volunteers who will have substantial access to learners undergo thorough vetting and background checks. This includes verification of identity, qualifications and experience, receipt of satisfactory references, and an enhanced DBS check (Disclosure and Barring Service) for roles involving regulated activity. Where relevant, we also conduct barred list checks and obtain additional overseas police checks for candidates who have lived or worked abroad. We maintain a single central record of all required pre-employment checks. Furthermore, at least one member of every hiring panel is trained in safer recruitment techniques to ensure our hiring decisions keep safeguarding considerations at the forefront. These measures reflect our unwavering commitment to learner safety from the outset of any staff member’s engagement.",
      "paragraphs_029": "All KBC staff (including academic, support, and contracted staff) receive comprehensive induction and ongoing training in safeguarding. This training covers child and adult protection procedures, Prevent Duty (anti-radicalisation), equality and diversity, professional boundaries, and how to respond to and report concerns. We provide regular refresher training and updates so that everyone remains aware of the latest safeguarding guidelines and understands their responsibilities. Safeguarding and Prevent updates are embedded into staff continuous professional development, and our Designated Safeguarding Leads offer workshops or briefings throughout the year to reinforce best practices. By ensuring our staff are well-trained and confident, we embed a vigilant, safety-first culture within the college’s workforce. No staff member is allowed unsupervised contact with learners until all checks are complete and essential safeguarding training is undertaken. This vigilant approach to recruitment and training helps maintain an environment where learner safety is always the top priority.",
      "eyebrow_030": "Openness",
      "title_031": "Whistleblowing Procedures",
      "paragraphs_032": "We are committed to an atmosphere of openness and accountability. KBC has a clear whistleblowing policy that encourages staff to voice any concerns about wrongdoing or poor practice, especially relating to the safety and wellbeing of learners. We promote a culture of respect, openness, vigilance and whistleblowing in which all employees feel able to raise concerns without fear. All staff are regularly reminded that they have a duty to speak up if they observe behavior by colleagues (or even senior managers) that compromises learner safety or contravenes our safeguarding standards.",
      "paragraphs_033": "Our whistleblowing procedures ensure that such concerns can be reported confidentially and will be taken seriously and handled appropriately. Staff know how to raise concerns and who to approach – concerns can be reported directly to the Designated Safeguarding Lead or senior management, or even externally to authorities if necessary, in line with our policy. We assure all whistleblowers that they will be protected from retaliation. By empowering staff to report issues and by acting promptly on every concern raised, we reinforce our safeguarding culture and continuously improve our practices. (For instance, staff can also access the NSPCC Whistleblowing Helpline for independent advice if they feel unable to report internally.) Maintaining these whistleblowing avenues helps ensure that any potential safeguarding problems are identified and addressed at an early stage, keeping our learners safe.",
      "eyebrow_034": "Speak up",
      "title_035": "Raising Safeguarding Concerns (Learners)",
      "paragraphs_036": "It is vitally important to us that learners themselves feel able to raise any safeguarding concerns. We ensure that all learners are made aware of how they can report a safeguarding issue – whether it’s something affecting them personally or concerns about a fellow learner. We clearly communicate the reporting channels during learner induction and in student handbooks, tutorials, and posters. Learners are informed that they can talk to any staff member (for example, their tutor or a trusted member of staff) about a safeguarding or wellbeing concern, and that staff member will help. We also publish guidance on our website and learner platforms about how to recognize safeguarding issues and who to contact. As a result, all learners know how they can raise concerns about themselves or others, and how those concerns will be dealt with."
    }
  },
  {
    "key": "safeguarding.pages_information_page_safeguarding_page_safeguarding_leads",
    "page": "safeguarding",
    "section": "pages_information_page_safeguarding_page_safeguarding_leads",
    "title": "Safeguarding Leads",
    "sort_order": 1,
    "content": {
      "text_037": "Paul Hibbins",
      "text_038": "Professor Yousef Sultan",
      "text_039": "Tina Wright"
    }
  },
  {
    "key": "safeguarding.pages_information_page_safeguarding_page_safeguarding_page",
    "page": "safeguarding",
    "section": "pages_information_page_safeguarding_page_safeguarding_page",
    "title": "Safeguarding Page",
    "sort_order": 2,
    "content": {
      "fallback_title_040": "Safeguarding, Prevent and Inclusion | Kent Business College",
      "fallback_description_041": "Kent Business College safeguarding, Prevent Duty, equality, diversity and inclusion policy statement for adult learners.",
      "src_042": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/64f1a25597dd489bad84534465bcc5c3.webp",
      "text_043": "Safety, dignity and inclusion",
      "text_044": "Safeguarding, Prevent, and",
      "text_045": "Inclusion.",
      "text_046": "Kent Business College is dedicated to providing a safe, inclusive environment in which all adult learners can learn and thrive.",
      "text_047": "Policy statement",
      "text_048": "Every learner has the right to feel safe, valued and able to thrive.",
      "text_049": "Kent Business College (KBC) is dedicated to providing a safe, inclusive environment in which all adult learners can learn and thrive. We recognize that safeguarding describes the function of protecting all our learners, including those over 18.",
      "text_050": "As a provider of higher-level apprenticeships and adult education, we fully commit to safeguarding every learner’s welfare and meeting our statutory and moral responsibilities to an Outstanding standard.",
      "text_051": "This statement outlines our commitment to safeguarding, compliance with the Prevent Duty, and the embedding of equality, diversity, and inclusion in all aspects of college life.",
      "text_052": "Protecting every learner’s right to live and learn safely.",
      "text_053": "Prevent Duty",
      "text_054": "Acting promptly to prevent radicalisation and extremist influence.",
      "text_055": "Embedding equality, dignity and fair opportunity in college life.",
      "aria_label_056": "Safeguarding policy",
      "text_057": "Choose a section",
      "text_058": "Safeguarding Contacts",
      "aria_label_059": "Policy contents",
      "text_060": "Safeguarding Contacts",
      "text_061": "10",
      "text_062": "Safeguarding contacts",
      "text_063": "Speak up. We are here to help.",
      "text_064": "KBC’s designated safeguarding leads (DSLs) are the primary points of contact for any safeguarding or Prevent concerns. Our DSL team provides expert guidance and support to ensure the safety of our college community.",
      "text_065": "Designated Safeguarding Lead",
      "text_066": "Learners or staff can reach the Safeguarding Team for advice, support, or to report a concern. We encourage you to contact us immediately if you have any worries about safety or wellbeing.",
      "href_067": "mailto:safeguarding@kentbusinesscollege.com",
      "text_068": "safeguarding@kentbusinesscollege.com"
    }
  },
  {
    "key": "faq.pages_information_page_faq_page_faq_items",
    "page": "faq",
    "section": "pages_information_page_faq_page_faq_items",
    "title": "Faq Items",
    "sort_order": 0,
    "content": {
      "question_001": "What are the requirements to join the Associate Project Manager apprenticeship programme?",
      "answer_002": "The apprentice must be employed within an organisation. If you are currently unemployed, you can apply only if you have resided in the UK for at least three years, and we can assist you in securing an apprenticeship with one of our partner organisations.",
      "question_003": "Can I apply for this programme as an individual?",
      "answer_004": "No, this programme is designed for employees within organisations. If you are not currently employed, you can apply through your current company or secure an apprenticeship with one of our partner organisations in the UK.",
      "question_005": "How is an apprenticeship different from traditional education programmes?",
      "answer_006": "The apprenticeship programme is designed to meet the specific needs of both employees and employers, focusing on practical application of tools rather than only theoretical knowledge and aiming to achieve work-related outcomes.",
      "question_007": "Do I need to travel to London or Kent to attend sessions?",
      "answer_008": "No, all sessions and supervision are conducted online. If there are four or more apprentices from the same workplace, the tutor will visit your workplace for teaching, or face-to-face sessions can be arranged near your workplace.",
      "question_009": "Are exam fees and certifications included in the programme?",
      "answer_010": "Yes, the apprenticeship programme includes full financial support for exam fees, certifications, optional workshops and the graduation ceremony. These additional costs are provided by Kent Business College on a discretionary basis.",
      "question_011": "What are the benefits of enrolling in the Leadership programme for my employees?",
      "answer_012": "The Leadership programme develops high-level managerial skills, including strategic decision-making, team leadership and effective communication. This enables employees to lead teams successfully, drive organisational change and improve performance across departments.",
      "question_013": "What is the cost of the Leadership programme for employers?",
      "answer_014": "The cost varies depending on the available funding option. Organisations that pay into the Apprenticeship Levy may fund the programme through the levy. For eligible non-levy employers, government co-investment may cover up to 95% of the training cost, with the employer contributing 5%. Additional support from KBC remains discretionary.",
      "question_015": "How will the Leadership programme enhance my organisation’s performance?",
      "answer_016": "The programme equips employees to manage teams effectively, handle challenges with resilience and make strategic decisions aligned with business goals. Developing strong leaders can improve collaboration, productivity and innovation across the organisation.",
      "question_017": "Can I track my employee’s progress during the Leadership programme?",
      "answer_018": "Yes. Employers receive regular progress updates. Apprentices complete assignments, reflect on their learning through written reports and receive tutor feedback. Practical assessments also help confirm that learning is being applied in real workplace situations.",
      "question_019": "How long does the Leadership programme take to complete?",
      "answer_020": "The programme is typically completed over 12 to 18 months, depending on the individual’s pace and qualification level. It combines online learning, one-to-one tutoring, optional workshops and an End Point Assessment where applicable.",
      "question_021": "Can I apply for the Marketing Executive Apprenticeship as an individual?",
      "answer_022": "No, this apprenticeship is designed for employees working within organisations. If you are currently unemployed but meet the residency requirements, we can help you explore an apprenticeship opportunity with one of our partner organisations.",
      "question_023": "How is an apprenticeship different from traditional education programmes?",
      "answer_024": "The apprenticeship is focused on practical application as well as theory. It is designed around employer and employee needs, allowing apprentices to gain workplace experience while learning and applying current marketing tools and techniques.",
      "question_025": "Do I need to attend classes in person, or can I complete the programme online?",
      "answer_026": "All sessions are delivered online, with optional face-to-face workshops available at the end of each module. Workshops may be held in major UK locations such as London, Kent, Nottingham and Manchester.",
      "question_027": "What are the costs involved in the programme?",
      "answer_028": "The total training cost for the Marketing Executive Level 4 Apprenticeship is £6,000. Kent Business College provides financial support for selected exams, professional qualifications, memberships, graduation activity and optional workshops on a discretionary basis.",
      "question_029": "What is the End Point Assessment process?",
      "answer_030": "The End Point Assessment includes a multiple-choice test, a project showcase and a professional discussion. These assessments evaluate the apprentice’s practical marketing skills and knowledge, and all required components must be passed to complete the apprenticeship.",
      "question_031": "What are the benefits of enrolling my employees in the Marketing Executive Apprenticeship?",
      "answer_032": "The apprenticeship helps organisations build a skilled workforce capable of managing complex marketing campaigns. Apprentices develop digital marketing, campaign planning, data analysis and customer-engagement skills that can support productivity, performance and employee retention.",
      "question_033": "What is the cost for employers to participate in the Marketing Executive Apprenticeship programme?",
      "answer_034": "Employers with an annual payroll above £3 million may use available Apprenticeship Levy funds. For eligible employers with a payroll below £3 million, government co-investment may cover 95% of the £6,000 training cost, with the employer contributing 5% (£300). Additional KBC support is discretionary.",
      "question_035": "How does the apprenticeship support my organisation’s development goals?",
      "answer_036": "The apprenticeship aligns professional learning with business goals by developing employees who can plan impactful campaigns, optimise customer engagement and strengthen market positioning. Applied workplace activity connects learning directly with organisational priorities.",
      "question_037": "Can I enrol multiple employees in the programme at once?",
      "answer_038": "Yes. You can enrol multiple eligible employees. If four or more employees participate from the same workplace, KBC may arrange workplace-based face-to-face teaching to support relevant, collaborative learning.",
      "question_039": "How will I track the progress and performance of my apprentices?",
      "answer_040": "Employers receive progress updates, performance information and tutor feedback. Reflective writing, assignments and practical assessments show how apprentices are applying learning in their roles, while the End Point Assessment confirms achievement against the required standard."
    }
  },
  {
    "key": "faq.pages_information_page_faq_page_faq_page",
    "page": "faq",
    "section": "pages_information_page_faq_page_faq_page",
    "title": "Faq Page",
    "sort_order": 1,
    "content": {
      "fallback_title_041": "Frequently Asked Questions | Kent Business College",
      "fallback_description_042": "Find answers about KBC apprenticeships, programme delivery, funding, assessment and employer support.",
      "text_043": "FAQ",
      "text_044": "Frequently Asked",
      "text_045": "Questions",
      "text_046": "Find clear answers about programmes, eligibility, delivery, funding, assessment and employer support.",
      "text_047": "?",
      "text_048": "Search frequently asked questions",
      "placeholder_049": "Ask us something you would like to know...",
      "text_050": "?",
      "aria_label_051": "FAQ categories",
      "aria_label_052": "Frequently asked questions",
      "text_053": "No matching questions",
      "text_054": "Try another phrase or choose a different category.",
      "text_055": "Still need help?",
      "text_056": "Ask the KBC team directly.",
      "text_057": "Tell us about your role, organisation or programme question and we’ll help you find the right next step.",
      "to_058": "/contact",
      "text_059": "Ask the KBC team",
      "to_060": "/book-session",
      "text_061": "Book an information session"
    }
  },
  {
    "key": "case_studies.pages_stories_page_page_stories_page",
    "page": "case_studies",
    "section": "pages_stories_page_page_stories_page",
    "title": "Stories Page",
    "sort_order": 0,
    "content": {
      "fallback_title_001": "Case Studies | Kent Business College",
      "fallback_description_002": "Explore privacy-approved learner stories and see how Kent Business College learning connects professional theory with workplace practice."
    }
  },
  {
    "key": "case_studies.pages_stories_page_components_capability_capability_cta_section",
    "page": "case_studies",
    "section": "pages_stories_page_components_capability_capability_cta_section",
    "title": "Capability Cta Section",
    "sort_order": 1,
    "content": {
      "src_001": "/assets/patterns/kbc-horse-growth.png",
      "text_002": "Build capability your organisation can use.",
      "text_003": "Discuss workforce needs, programme fit and possible apprenticeship funding with Kent Business College.",
      "to_004": "/book-session",
      "text_005": "Book information session",
      "to_006": "/programmes",
      "text_007": "Explore programmes"
    }
  },
  {
    "key": "case_studies.pages_stories_page_components_case_studi_case_studies_hero_image",
    "page": "case_studies",
    "section": "pages_stories_page_components_case_studi_case_studies_hero_image",
    "title": "Case Studies Hero Image",
    "sort_order": 2,
    "content": {
      "text_001": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/0f73bc4266b04045946adf6c279d10db.webp"
    }
  },
  {
    "key": "case_studies.pages_stories_page_components_case_studi_case_studies_hero",
    "page": "case_studies",
    "section": "pages_stories_page_components_case_studi_case_studies_hero",
    "title": "Case Studies Hero",
    "sort_order": 3,
    "content": {
      "text_002": "Learner case studies",
      "text_003": "Professional learning seen through the people",
      "text_004": "doing the work.",
      "text_005": "Explore how apprenticeships can strengthen practical capability, develop role-relevant expertise and support professional growth inside an organisation."
    }
  },
  {
    "key": "case_studies.pages_stories_page_components_case_studi_label",
    "page": "case_studies",
    "section": "pages_stories_page_components_case_studi_label",
    "title": "Label",
    "sort_order": 4,
    "content": {
      "text_006": "Explore the stories",
      "text_007": "Book an information session"
    }
  },
  {
    "key": "case_studies.pages_stories_page_components_case_studi_story_card",
    "page": "case_studies",
    "section": "pages_stories_page_components_case_studi_story_card",
    "title": "Story Card",
    "sort_order": 5,
    "content": {
      "src_001": "/assets/logos/kbc-logo.png",
      "alt_002": "Kent Business College",
      "text_003": "Linkedin"
    }
  },
  {
    "key": "case_studies.pages_stories_page_components_case_studi_case_studies_listing",
    "page": "case_studies",
    "section": "pages_stories_page_components_case_studi_case_studies_listing",
    "title": "Case Studies Listing",
    "sort_order": 6,
    "content": {
      "eyebrow_004": "The learner perspective",
      "text_005": "Find the experience most relevant to your role and ambition.",
      "text_006": "Search the current learner experiences by topic or name and explore how professional learning connects with workplace responsibility.",
      "text_007": "Search stories",
      "placeholder_008": "Search by learner, programme or theme",
      "text_009": "Category",
      "text_010": "All categories",
      "text_011": "Showing",
      "text_012": "No matching stories",
      "text_013": "Try a different search term or category."
    }
  },
  {
    "key": "case_studies.pages_stories_page_data_fallback_stories",
    "page": "case_studies",
    "section": "pages_stories_page_data_fallback_stories",
    "title": "Fallback Stories",
    "sort_order": 7,
    "content": {
      "title_001": "Building breadth across a multi-property marketing role.",
      "name_002": "Lauren-Eden Sullivan",
      "role_003": "Digital Marketing Associate at Oceana Hotels & Restaurants",
      "programme_004": "Marketing Executive Level 4",
      "summary_005": "I am currently working as a Digital Marketing Associate at Oceana Hotels & Restaurants, where I am responsible for supporting marketing activity across a group of ten properties, including The Cumberland Hotel. My role is varied and fast-paced, covering social media management, email marketing, content creation, campaign planning, and performance analysis. I also contribute to wider marketing activity such as graphic design, website updates and supporting promotional campaigns across the group.",
      "image_006": "https://kentbusinesscollege.com/wp-content/uploads/2026/07/Lauren-Eden-Sulliva.webp",
      "image_alt_007": "Lauren-Eden Sullivan",
      "href_008": "/case-studies/lauren-eden-sullivan",
      "cta_label_009": "View learner profile",
      "title_010": "Continuing to develop without needing to leave a valued role.",
      "name_011": "Rachel King",
      "programme_012": "Marketing Manager Level 6",
      "summary_013": "This year, I turn 50. This has been an incentive for me to review where I am in my career and personally. I am very happy in my job and don’t have any particular urge to progress, as such. However, I want to be the best I can be in my current role and I saw this course as helping me to achieve this. I don’t want my knowledge and skills to be ‘aged out’. Personally, I felt the need to demonstrate that I can still embrace new concepts and continue to develop. I’ve found that the apprenticeship has really helped me to feel I can achieve this.",
      "image_014": "https://kentbusinesscollege.com/wp-content/uploads/2026/07/Rachel-King.webp",
      "image_alt_015": "Rachel King",
      "href_016": "/case-studies/rachel-king",
      "cta_label_017": "View learner profile",
      "title_018": "Connecting more than a decade of experience with formal theory.",
      "name_019": "Corinna Denbow",
      "role_020": "Marketing Manager at Clevertouch",
      "programme_021": "Marketing Manager Level 6",
      "summary_022": "I’m currently completing a Level 6 Marketing Manager apprenticeship alongside my role as Marketing Manager at Clevertouch, a global display technology company. I have been with the business for over ten years, working my way up to my current role, so I already had a lot of hands-on experience. The apprenticeship has been really valuable in helping me connect that experience to proper marketing theory.",
      "image_023": "https://kentbusinesscollege.com/wp-content/uploads/2026/07/Corinna-Denbow.webp",
      "image_alt_024": "Corinna Denbow",
      "href_025": "/case-studies/corinna-denbow",
      "cta_label_026": "View learner profile",
      "title_027": "Using a structured framework to strengthen an established role.",
      "name_028": "Mark Jackson",
      "role_029": "Senior Project Manager",
      "programme_030": "Project Control Professional Level 6",
      "summary_031": "How My Apprenticeship Supports My Development, and Helps Me in My Job Role. My apprenticeship has played a significant role in both my personal development and my effectiveness within my current job role as a Senior Project Manager working in systems, controls, and business improvement. It has provided me with a structured framework to build on my existing experience while developing new knowledge, behaviours, and technical skills that directly benefit my organisation and career progression.",
      "image_032": "https://kentbusinesscollege.com/wp-content/uploads/2026/07/Mark-Jackson.webp",
      "image_alt_033": "Mark Jackson",
      "href_034": "/case-studies/mark-jackson",
      "cta_label_035": "View learner profile",
      "title_036": "Finding value in having established assumptions challenged.",
      "name_037": "Connor Hewitson",
      "programme_038": "Marketing Manager Level 6",
      "summary_039": "I’ll be honest. When I started the Level 6 Marketing Manager apprenticeship, I wasn’t entirely sure what it would add. I know the business I work in, and I had views on what good looked like. What I didn’t expect was how quickly the programme would challenge those views in ways that actually mattered.",
      "image_040": "https://kentbusinesscollege.com/wp-content/uploads/2026/07/Connor-Hewitson.webp",
      "image_alt_041": "Connor Hewitson",
      "href_042": "/case-studies/connor-hewitson",
      "cta_label_043": "View learner profile",
      "title_044": "Applying newly structured knowledge directly in practice.",
      "name_045": "Edirisinghege Wimalaratne",
      "programme_046": "Marketing Executive Level 4",
      "summary_047": "So far, the apprenticeship has significantly strengthened my understanding of core insurance principles, including risk assessment, underwriting processes, policy wordings, claims considerations, and regulatory frameworks within the UK insurance market. It has also helped me build a stronger understanding of the London Market structure and how brokers and insurers collaborate to deliver tailored insurance solutions for clients. One of the most important aspects of my learning journey has been the ability to apply theory directly into practice.",
      "image_048": "https://kentbusinesscollege.com/wp-content/uploads/2026/07/Edirisinghege-Wimalaratne.webp",
      "image_alt_049": "Edirisinghege Wimalaratne",
      "href_050": "/case-studies/edirisinghege-wimalaratne",
      "cta_label_051": "View learner profile",
      "title_052": "Moving from instinctive delivery towards more structured practice.",
      "name_053": "Abigail Reece",
      "role_054": "Marketing Manager",
      "programme_055": "Marketing Executive Level 4",
      "summary_056": "Since starting my Marketing Executive apprenticeship, it’s genuinely changed the way I see my role and how I approach my work day to day. I’m currently working as a Marketing Manager in a fast-paced SaaS environment, so I was already doing a lot of the hands-on work, planning campaigns, creating content, and managing multiple projects at once. But if I’m being honest, a lot of what I was doing came from experience, instinct, and just figuring things out as I went.",
      "image_057": "https://kentbusinesscollege.com/wp-content/uploads/2026/07/Abigail-Reece.webp",
      "image_alt_058": "Abigail Reece",
      "href_059": "/case-studies/abigail-reece",
      "cta_label_060": "View learner profile"
    }
  },
  {
    "key": "case_studies.pages_stories_page_data_cta_label",
    "page": "case_studies",
    "section": "pages_stories_page_data_cta_label",
    "title": "Cta Label",
    "sort_order": 8,
    "content": {
      "text_061": "Read case study"
    }
  },
  {
    "key": "case_studies.pages_stories_page_data_outcomes",
    "page": "case_studies",
    "section": "pages_stories_page_data_outcomes",
    "title": "Outcomes",
    "sort_order": 9,
    "content": {
      "label_062": "Experience",
      "title_063": "Start with real responsibility.",
      "description_064": "Learners enter with active roles, existing judgement and practical challenges rather than learning in isolation.",
      "label_065": "Structure",
      "title_066": "Connect practice to recognised theory.",
      "description_067": "Frameworks and concepts help professionals understand why approaches work and where practice can improve.",
      "label_068": "Application",
      "title_069": "Use learning inside the workplace.",
      "description_070": "The stories describe campaign delivery, systems, controls, analysis, planning and other activity grounded in current work.",
      "label_071": "Reflection",
      "title_072": "Challenge assumptions and build confidence.",
      "description_073": "Progress can mean stronger judgement, renewed confidence or deeper capability in a role, not only a change of job title."
    }
  },
  {
    "key": "case_studies.pages_stories_page_components_journey_ct_journey_cta_section",
    "page": "case_studies",
    "section": "pages_stories_page_components_journey_ct_journey_cta_section",
    "title": "Journey Cta Section",
    "sort_order": 10,
    "content": {
      "src_001": "https://kentbusinesscollege.com/wp-content/uploads/2026/07/Abigail-Reece.webp",
      "alt_002": "Abigail Reece",
      "src_003": "/assets/people/corinna-denbow.webp",
      "alt_004": "Corinna Denbow",
      "src_005": "/assets/people/connor-hewitson.webp",
      "alt_006": "Connor Hewitson",
      "src_007": "/assets/people/mark-jackson.webp",
      "alt_008": "Mark Jackson",
      "text_009": "Add your perspective",
      "text_010": "Your professional journey could help someone take their next step.",
      "text_011": "Current learners and employers can speak with KBC about sharing a workplace learning story, an achievement or a reflection on professional development.",
      "to_012": "/contact",
      "text_013": "Share your story",
      "to_014": "/apprentices/stories",
      "text_015": "View apprentice stories"
    }
  },
  {
    "key": "case_studies.pages_stories_page_components_learning_p_pathway_content",
    "page": "case_studies",
    "section": "pages_stories_page_components_learning_p_pathway_content",
    "title": "Pathway Content",
    "sort_order": 11,
    "content": {
      "title_001": "Marketing Executive Level 4",
      "description_002": "For professionals developing practical marketing, digital, content, campaign and measurement capability.",
      "tags_003": "Level 4",
      "tags_004": "CIM pathway",
      "accent_005": "!border-t-kbc-purple-700",
      "title_006": "Marketing Manager Level 6",
      "description_007": "For professionals strengthening strategic, commercial and data-led marketing management.",
      "tags_008": "Level 6",
      "tags_009": "CIM pathway",
      "accent_010": "!border-t-kbc-purple-700",
      "title_011": "Project Controls Professional Level 6",
      "description_012": "For professionals developing planning, cost, risk, governance, systems and controls capability.",
      "tags_013": "Level 6",
      "tags_014": "Professional pathways",
      "accent_015": "!border-t-[#0f6667]"
    }
  },
  {
    "key": "case_studies.pages_stories_page_components_learning_p_learning_pathways_section",
    "page": "case_studies",
    "section": "pages_stories_page_components_learning_p_learning_pathways_section",
    "title": "Learning Pathways Section",
    "sort_order": 12,
    "content": {
      "eyebrow_016": "Explore the routes behind the stories",
      "text_017": "Choose the professional pathway aligned with the capability you want to build.",
      "text_018": "Programme availability, funding and professional recognition are subject to eligibility and the requirements of the relevant apprenticeship or external body.",
      "text_019": "Explore the programme"
    }
  },
  {
    "key": "case_studies.pages_stories_page_components_outcomes_s_outcomes_section",
    "page": "case_studies",
    "section": "pages_stories_page_components_outcomes_s_outcomes_section",
    "title": "Outcomes Section",
    "sort_order": 13,
    "content": {
      "text_001": "What the accounts reveal",
      "text_002": "Professional development is strongest when learning remains connected to the role.",
      "text_003": "Across the published stories, learners describe a recurring journey from existing experience to structured reflection and practical application.",
      "text_004": "·",
      "text_005": "These are individual learner accounts, not guaranteed outcomes.",
      "text_006": "Results vary according to role, workplace opportunity, engagement and programme requirements."
    }
  },
  {
    "key": "events.pages_events_page_page_events_page",
    "page": "events",
    "section": "pages_events_page_page_events_page",
    "title": "Events Page",
    "sort_order": 0,
    "content": {
      "fallback_title_001": "Events | Kent Business College",
      "fallback_description_002": "Workshops, information sessions, masterclasses and networking events from Kent Business College across Project Management, Project Controls, Marketing and Leadership."
    }
  },
  {
    "key": "events.pages_events_page_components_audience_se_audiences",
    "page": "events",
    "section": "pages_events_page_components_audience_se_audiences",
    "title": "Audiences",
    "sort_order": 1,
    "content": {
      "title_001": "Learners & Apprentices",
      "description_002": "Explore professional pathways and develop workplace-ready skills.",
      "title_003": "Working Professionals",
      "description_004": "Build expertise and explore recognised professional development routes.",
      "title_005": "Managers & Future Leaders",
      "description_006": "Strengthen leadership, strategic and management capability.",
      "title_007": "Employers",
      "description_008": "Discover ways to develop teams through apprenticeships and professional programmes.",
      "title_009": "Project & Marketing Professionals",
      "description_010": "Join specialist sessions across Project Management, Project Controls, Marketing and Leadership."
    }
  },
  {
    "key": "events.pages_events_page_components_audience_se_audience_section",
    "page": "events",
    "section": "pages_events_page_components_audience_se_audience_section",
    "title": "Audience Section",
    "sort_order": 2,
    "content": {
      "eyebrow_011": "Audience",
      "title_012": "Who Our Events Support",
      "description_013": "Events serve the full spectrum of the Kent Business College community, from learners to senior leaders."
    }
  },
  {
    "key": "events.pages_events_page_components_consultatio_consultation_strip",
    "page": "events",
    "section": "pages_events_page_components_consultatio_consultation_strip",
    "title": "Consultation Strip",
    "sort_order": 3,
    "content": {
      "text_001": "Not sure which event is right for you?",
      "text_002": "Speak with the Kent Business College team about programmes, eligibility, employer funding and upcoming information sessions.",
      "to_003": "/book-session",
      "text_004": "Book Information Session"
    }
  },
  {
    "key": "events.pages_events_page_components_event_forma_organizer",
    "page": "events",
    "section": "pages_events_page_components_event_forma_organizer",
    "title": "Organizer",
    "sort_order": 4,
    "content": {
      "name_001": "Kent Business College"
    }
  },
  {
    "key": "events.pages_events_page_components_event_forma_formats",
    "page": "events",
    "section": "pages_events_page_components_event_forma_formats",
    "title": "Formats",
    "sort_order": 5,
    "content": {
      "title_001": "Information Sessions",
      "description_002": "Learn about programmes, eligibility, funding routes and application processes.",
      "image_003": "/assets/images/figma-home/workplace-teaching.png",
      "title_004": "Professional Workshops",
      "description_005": "Practical sessions focused on skills that can be applied directly in the workplace.",
      "image_006": "/assets/images/figma-home/marketing-event.png",
      "title_007": "Masterclasses",
      "description_008": "Expert-led sessions exploring specialist themes across Kent's professional disciplines.",
      "image_009": "/assets/images/figma-home/project-speaker.png",
      "title_010": "Networking & Employer Events",
      "description_011": "Opportunities for employers, learners and professionals to connect and share experience.",
      "image_012": "/assets/images/figma-home/hero-group.png"
    }
  },
  {
    "key": "events.pages_events_page_components_event_forma_event_formats_section",
    "page": "events",
    "section": "pages_events_page_components_event_forma_event_formats_section",
    "title": "Event Formats Section",
    "sort_order": 6,
    "content": {
      "eyebrow_013": "Formats",
      "title_014": "Event Formats",
      "description_015": "The Institute runs multiple formats to serve different learning styles, seniority levels and professional needs."
    }
  },
  {
    "key": "events.pages_events_page_components_event_serie_blocks",
    "page": "events",
    "section": "pages_events_page_components_event_serie_blocks",
    "title": "Blocks",
    "sort_order": 7,
    "content": {
      "label_001": "Topics",
      "title_002": "Project Management, Project Controls, Marketing and Leadership.",
      "description_003": "Sessions connect specialist subject knowledge with applied AI and real workplace practice.",
      "label_004": "Audience",
      "title_005": "Professionals, apprentices, managers, employers and business leaders.",
      "description_006": "Formats are designed for different seniority levels and professional stages.",
      "label_007": "Formats",
      "title_008": "Online information sessions, workshops, masterclasses and networking events.",
      "description_009": "Choose the format that best fits how you learn and how much time you have.",
      "label_010": "Professional Development",
      "title_011": "Built to support career progression and workplace capability.",
      "description_012": "Events connect naturally into Kent Business College programmes and professional pathways."
    }
  },
  {
    "key": "events.pages_events_page_components_event_serie_event_series_section",
    "page": "events",
    "section": "pages_events_page_components_event_serie_event_series_section",
    "title": "Event Series Section",
    "sort_order": 8,
    "content": {
      "eyebrow_013": "Flagship event programme",
      "title_014": "Kent Professional Event Series",
      "description_015": "Practical events designed to connect professional learning with real workplace challenges across project management, project controls, marketing and leadership."
    }
  },
  {
    "key": "events.pages_events_page_components_events_hero_events_hero",
    "page": "events",
    "section": "pages_events_page_components_events_hero_events_hero",
    "title": "Events Hero",
    "sort_order": 9,
    "content": {
      "src_001": "/assets/video/events-hero.webm",
      "src_002": "/assets/video/events-hero.mp4",
      "text_003": "Events",
      "text_004": "Events that move",
      "text_005": "careers and businesses forward.",
      "text_006": "Kent Business College runs professional workshops, information sessions, masterclasses and networking events across Project Management, Project Controls, Marketing and Leadership — for learners, employers and working professionals.",
      "to_007": "#upcoming-events",
      "text_008": "View upcoming events",
      "to_009": "/book-session",
      "text_010": "Enquire about events"
    }
  },
  {
    "key": "events.pages_events_page_components_join_conver_links",
    "page": "events",
    "section": "pages_events_page_components_join_conver_links",
    "title": "Links",
    "sort_order": 10,
    "content": {
      "title_001": "Attend",
      "description_002": "Register for upcoming master classes and club events.",
      "title_003": "Speak with us",
      "description_004": "Ask about programmes, funding routes and eligibility.",
      "title_005": "Partner with us",
      "description_006": "Support events through employer partnership."
    }
  },
  {
    "key": "events.pages_events_page_components_join_conver_join_conversation_section",
    "page": "events",
    "section": "pages_events_page_components_join_conver_join_conversation_section",
    "title": "Join Conversation Section",
    "sort_order": 11,
    "content": {
      "src_007": "/assets/patterns/kbc-horse-growth.png",
      "text_008": "Get involved",
      "text_009": "Join the Kent Business College community.",
      "text_010": "Connect with us about upcoming events, employer information sessions, programme opportunities and professional development.",
      "to_011": "#upcoming-events",
      "text_012": "View upcoming events",
      "to_013": "/book-session",
      "text_014": "Book Information Session"
    }
  },
  {
    "key": "events.pages_events_page_components_registratio_registration_section",
    "page": "events",
    "section": "pages_events_page_components_registratio_registration_section",
    "title": "Registration Section",
    "sort_order": 12,
    "content": {
      "eyebrow_001": "Register",
      "title_002": "Event Registration",
      "description_003": "Choose an upcoming event to view the full details and reserve your place.",
      "to_004": "#upcoming-events",
      "text_005": "View upcoming events"
    }
  },
  {
    "key": "events.pages_events_page_components_upcoming_ev_upcoming_events_section",
    "page": "events",
    "section": "pages_events_page_components_upcoming_ev_upcoming_events_section",
    "title": "Upcoming Events Section",
    "sort_order": 13,
    "content": {
      "eyebrow_001": "What's on",
      "title_002": "Upcoming Events",
      "description_003": "Discover upcoming workshops, information sessions, professional development events and networking opportunities from Kent Business College.",
      "aria_label_004": "Event status",
      "text_005": "Upcoming Events",
      "text_006": "Past Events",
      "text_007": "We couldn't load events right now",
      "text_008": "Please try again shortly, or speak with our team about upcoming sessions.",
      "to_009": "/book-session",
      "text_010": "Book Information Session",
      "text_011": "No upcoming events are currently available",
      "text_012": "No past events to show yet",
      "text_013": "Please check back soon or speak with our team about future sessions.",
      "text_014": "Past sessions will appear here once they have taken place.",
      "to_015": "/book-session",
      "text_016": "Book Information Session",
      "text_017": "Online event"
    }
  },
  {
    "key": "events.pages_events_page_components_events_load_events_loading_skeleton",
    "page": "events",
    "section": "pages_events_page_components_events_load_events_loading_skeleton",
    "title": "Events Loading Skeleton",
    "sort_order": 14,
    "content": {
      "text_001": "Loading events..."
    }
  },
  {
    "key": "bookshop.pages_bookshop_page_page_bookshop_page",
    "page": "bookshop",
    "section": "pages_bookshop_page_page_bookshop_page",
    "title": "Bookshop Page",
    "sort_order": 0,
    "content": {
      "to_001": "#top"
    }
  },
  {
    "key": "bookshop.pages_bookshop_page_component_book_catal_book_catalogue",
    "page": "bookshop",
    "section": "pages_bookshop_page_component_book_catal_book_catalogue",
    "title": "Book Catalogue",
    "sort_order": 1,
    "content": {
      "text_001": "found"
    }
  },
  {
    "key": "bookshop.pages_bookshop_page_data_bookshop_seo",
    "page": "bookshop",
    "section": "pages_bookshop_page_data_bookshop_seo",
    "title": "Bookshop Seo",
    "sort_order": 2,
    "content": {
      "title_001": "Kent Business College Bookshop",
      "description_002": "Kent Business College Bookshop — marketing handbooks and learning resources."
    }
  },
  {
    "key": "bookshop.pages_bookshop_page_data_bookshop_hero",
    "page": "bookshop",
    "section": "pages_bookshop_page_data_bookshop_hero",
    "title": "Bookshop Hero",
    "sort_order": 3,
    "content": {
      "cover_image_003": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/d0589fa8f0be41f2864944972b4dc1ef.webp",
      "cover_image_alt_004": "Marketing Strategy and Planning handbook framed by purple and gold olive branches",
      "eyebrow_005": "Kent Business College",
      "title_006": "KBC Bookshop",
      "description_007": "Explore professionally designed marketing handbooks and practical learning resources for apprentices, managers and working professionals.",
      "actions_label_008": "Browse latest releases",
      "actions_href_009": "#releases",
      "actions_label_010": "View featured title",
      "actions_href_011": "#featured"
    }
  },
  {
    "key": "bookshop.pages_bookshop_page_data_featured_title",
    "page": "bookshop",
    "section": "pages_bookshop_page_data_featured_title",
    "title": "Featured Title",
    "sort_order": 4,
    "content": {
      "eyebrow_012": "Featured",
      "badge_013": "Featured title",
      "description_014": "A practical handbook for structured marketing thinking, strategic planning and applied workplace learning.",
      "copy_015": "For Marketing Executive Level 4 and Marketing Manager Level 6 learners. Developed as a clear, practical guide with a strong professional focus."
    }
  },
  {
    "key": "bookshop.pages_bookshop_page_data_applied_learning",
    "page": "bookshop",
    "section": "pages_bookshop_page_data_applied_learning",
    "title": "Applied Learning",
    "sort_order": 5,
    "content": {
      "title_016": "Built for applied learning.",
      "description_017": "These handbooks are designed to support structured study, workplace application and programme delivery across marketing pathways."
    }
  },
  {
    "key": "bookshop.pages_bookshop_page_data_catalogue",
    "page": "bookshop",
    "section": "pages_bookshop_page_data_catalogue",
    "title": "Catalogue",
    "sort_order": 6,
    "content": {
      "eyebrow_018": "Book catalogue",
      "title_019": "Latest releases",
      "description_020": "Browse the current handbook collection. Use the search box to find a title.",
      "search_label_021": "Search books",
      "search_placeholder_022": "Search books…",
      "details_action_023": "Details & pricing",
      "request_action_024": "Request a copy",
      "request_href_025": "/contact",
      "empty_title_026": "No books found",
      "empty_description_027": "Try another search.",
      "reset_label_028": "Clear search"
    }
  },
  {
    "key": "bookshop.pages_bookshop_page_data_book_categories",
    "page": "bookshop",
    "section": "pages_bookshop_page_data_book_categories",
    "title": "Book Categories",
    "sort_order": 7,
    "content": {
      "label_029": "All",
      "label_030": "Level 4",
      "label_031": "Level 6",
      "label_032": "Social media"
    }
  },
  {
    "key": "bookshop.pages_bookshop_page_data_book_metadata",
    "page": "bookshop",
    "section": "pages_bookshop_page_data_book_metadata",
    "title": "Book Metadata",
    "sort_order": 8,
    "content": {
      "label_033": "Format",
      "label_034": "Availability",
      "label_035": "Pricing"
    }
  },
  {
    "key": "bookshop.pages_bookshop_page_data_cohort_cta",
    "page": "bookshop",
    "section": "pages_bookshop_page_data_cohort_cta",
    "title": "Cohort Cta",
    "sort_order": 9,
    "content": {
      "title_036": "Need a handbook for your cohort?",
      "back_label_037": "Back to top"
    }
  },
  {
    "key": "bookshop.pages_bookshop_page_data_books",
    "page": "bookshop",
    "section": "pages_bookshop_page_data_books",
    "title": "Books",
    "sort_order": 10,
    "content": {
      "title_038": "Social Media — Marketing Executive Handbook",
      "kicker_039": "Marketing Executive · Level 4",
      "description_040": "A focused handbook for social media marketing learning, structured around practical professional development.",
      "detail_description_041": "A focused handbook for social media marketing learning and practical professional development.",
      "search_terms_042": "social media marketing executive handbook level 4",
      "image_043": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/a6f2eabd6d8a47b6a2844dca0d7fae06.webp",
      "image_alt_044": "Social Media Marketing Executive Handbook 3D book",
      "title_045": "Marketing Strategy & Planning",
      "kicker_046": "Marketing · Levels 4 & 6",
      "description_047": "Strategic thinking, planning structure and practical marketing application for executive and manager pathways.",
      "detail_description_048": "A practical guide to strategic marketing thinking, planning and applied workplace learning for executive and manager pathways.",
      "search_terms_049": "marketing strategy planning marketing executive manager",
      "image_050": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/2690dd5dafe74a679b3f56f3f268b33f.webp",
      "image_alt_051": "Marketing Strategy and Planning 3D book"
    }
  },
  {
    "key": "bookshop.pages_bookshop_page_component_book_detai_book_details",
    "page": "bookshop",
    "section": "pages_bookshop_page_component_book_detai_book_details",
    "title": "Book Details",
    "sort_order": 11,
    "content": {
      "aria_label_001": "Close book details"
    }
  },
  {
    "key": "bookshop.pages_bookshop_page_component_bookshop_i_featured_book_section",
    "page": "bookshop",
    "section": "pages_bookshop_page_component_bookshop_i_featured_book_section",
    "title": "Featured Book Section",
    "sort_order": 12,
    "content": {
      "alt_001": "3D Marketing Strategy and Planning handbook"
    }
  },
  {
    "key": "news.pages_blog_page_component_article_collec_article_collection",
    "page": "news",
    "section": "pages_blog_page_component_article_collec_article_collection",
    "title": "Article Collection",
    "sort_order": 0,
    "content": {
      "aria_label_001": "Article categories"
    }
  },
  {
    "key": "news.pages_blog_page_data_news_hero",
    "page": "news",
    "section": "pages_blog_page_data_news_hero",
    "title": "News Hero",
    "sort_order": 1,
    "content": {
      "eyebrow_001": "Blogs & News",
      "title_002": "Ideas, evidence and insight for",
      "title_accent_003": "professional work",
      "description_004": "News, guidance and specialist perspective from Kent Business College — covering programmes, funding, professional progression and the Project Controls capability your organisation relies on.",
      "image_005": "/assets/images/news/hero.webp"
    }
  },
  {
    "key": "news.pages_blog_page_data_news_catalogue",
    "page": "news",
    "section": "pages_blog_page_data_news_catalogue",
    "title": "News Catalogue",
    "sort_order": 2,
    "content": {
      "eyebrow_006": "All articles",
      "title_007": "Browse the latest insight",
      "read_action_008": "Read the full article",
      "empty_009": "No articles in this category yet. Check back soon."
    }
  },
  {
    "key": "news.pages_blog_page_data_news_newsletter",
    "page": "news",
    "section": "pages_blog_page_data_news_newsletter",
    "title": "News Newsletter",
    "sort_order": 3,
    "content": {
      "eyebrow_010": "Stay informed",
      "title_011": "Receive programme updates and professional insight",
      "description_012": "Get funding news, information-session invites and specialist Project Controls guidance — delivered when it matters, not every day.",
      "label_013": "Email address",
      "placeholder_014": "you@company.co.uk",
      "action_015": "Subscribe",
      "success_016": "Thank you for subscribing."
    }
  },
  {
    "key": "news.pages_blog_page_data_news_cta",
    "page": "news",
    "section": "pages_blog_page_data_news_cta",
    "title": "News Cta",
    "sort_order": 4,
    "content": {
      "eyebrow_017": "Take the next step",
      "title_018": "Ready to explore a programme or funding route that fits you?",
      "description_019": "Tell us about your role, employer and professional goals — we’ll help you understand which programme, funding route or specialist Project Controls option may fit your circumstances.",
      "actions_label_020": "Check eligibility & funding",
      "actions_href_021": "/funding-eligibility",
      "actions_label_022": "Talk to the team",
      "actions_href_023": "/contact"
    }
  },
  {
    "key": "news.pages_blog_page_data_news_detail",
    "page": "news",
    "section": "pages_blog_page_data_news_detail",
    "title": "News Detail",
    "sort_order": 5,
    "content": {
      "key_points_024": "Key points",
      "related_eyebrow_025": "Related reading",
      "related_title_026": "Keep exploring",
      "all_action_027": "View all articles",
      "not_found_title_028": "Article not found",
      "not_found_description_029": "The article you’re looking for may have moved or no longer exists.",
      "back_action_030": "Back to Blogs & News"
    }
  },
  {
    "key": "news.pages_blog_page_data_news_articles",
    "page": "news",
    "section": "pages_blog_page_data_news_articles",
    "title": "News Articles",
    "sort_order": 6,
    "content": {
      "title_031": "Kent Business College expands specialist Project Controls commercial access",
      "excerpt_032": "Professionals and employers can now select individual Project Controls modules or combine several subjects into a broader development route — with applicable IPC bursary support of 50% or 75% depending on the selected module.",
      "body_033": "Project Controls is the discipline that keeps complex delivery on track — combining planning, cost engineering, risk management and performance reporting into a single professional capability. As employers look for stronger certainty across their portfolios, the demand for people who can plan, forecast and control work continues to grow.",
      "body_034": "Kent Business College has expanded its specialist Project Controls provision so that professionals and employers can access it in a way that suits their circumstances. Rather than committing to a fixed full programme from day one, learners can select individual modules, or combine several subjects into a broader development route that reflects the work they actually do.",
      "body_035": "The commercial route is designed for organisations and individuals who are not accessing levy or other funded pathways, or who want to build capability in a specific area of Project Controls. This flexibility means a planning specialist can focus on scheduling, while a cost professional can deepen their understanding of estimating and budgeting — without spending time on areas outside their role.",
      "body_036": "Applicable modules receive IPC bursary support of 50% or 75% depending on the selected module, subject to approval and availability. This bursary helps reduce the cost of specialist development and makes advanced Project Controls learning more accessible to a wider range of professionals.",
      "body_037": "For employers, the benefit is practical: teams can be upskilled in the precise areas where capability gaps exist, with learning that connects directly back to live project responsibilities. For individuals, the route offers a credible way to build recognised, specialised expertise that supports career progression and, where relevant, preparation for chartership.",
      "key_points_038": "Select individual modules or combine several subjects into a broader route",
      "key_points_039": "Applicable IPC bursary support of 50% or 75% depending on the selected module",
      "key_points_040": "Learning connects directly to live project responsibilities",
      "key_points_041": "Subject to approval and availability",
      "read_time_042": "6 min read",
      "author_043": "KBC Editorial",
      "image_044": "/assets/images/news/pc-commercial-access.webp",
      "href_045": "/blogs-and-news/pc-commercial-access",
      "title_046": "How DfE funding supports professional apprenticeship development",
      "excerpt_047": "Government-funded apprenticeships are workplace-development routes. Here we unpack the learner and employer criteria that shape eligibility — from residency and paid employment to Apprenticeship Service setup.",
      "body_048": "Apprenticeships have changed. Far from being limited to early-career entry routes, modern apprenticeships funded by the Department for Education (DfE) are sophisticated workplace-development programmes that support professionals at every stage — including those with significant experience already behind them.",
      "body_049": "The funding model is designed to align the cost of training with the real value it creates. For employers paying into the levy, apprenticeship funding is drawn directly from the Apprenticeship Service account. For employers who do not pay the levy, the Government co-invests, contributing the large majority of the training cost with a smaller employer contribution.",
      "body_050": "Learner eligibility sits alongside employer eligibility. In most cases, a learner must be resident in England for the duration of the programme, in paid employment with an employer that supports the training, and be spending at least 50% of their working time in England. There is no upper age limit — professional apprenticeships are designed for working adults.",
      "body_051": "It is important to understand that funded apprenticeships are jobs with training, not courses bolted onto a job. The learning is structured around the learner's actual responsibilities, with off-the-job training time protected within the working week. This is what makes the model so effective for genuine capability development.",
      "body_052": "For anyone considering a funded programme, the practical first step is to understand your own circumstances against the criteria, then speak to a training provider who can confirm your eligibility and guide the application. Getting this right early saves time and avoids surprises later.",
      "key_points_053": "No upper age limit — professional apprenticeships are for working adults",
      "key_points_054": "Levy-paying employers draw funding from the Apprenticeship Service account",
      "key_points_055": "Learners are typically resident in England and in paid employment",
      "key_points_056": "Off-the-job training time is protected within the working week",
      "read_time_057": "5 min read",
      "author_058": "KBC Editorial",
      "image_059": "/assets/images/news/dfe-funding-explained.webp",
      "href_060": "/blogs-and-news/dfe-funding-explained",
      "title_061": "ChPP preparation: building a route to Chartered Project Professional",
      "excerpt_062": "Chartered status is not automatically awarded — it reflects assessed professional competence. A practical look at how preparation, evidence and the relevant APM pathway fit together.",
      "body_063": "Chartered Project Professional (ChPP) status is a mark of professional competence in project management, awarded by the Association for Project Management (APM). It is not something you can simply enrol for — it is a standard you must demonstrate against, through evidence and assessment.",
      "body_064": "The route to chartership is built on demonstrated capability across the APM's framework of technical knowledge, professional practice and behaviour. Candidates gather evidence from their own experience, showing how they have applied project management in real situations, made decisions under uncertainty and delivered value through their work.",
      "body_065": "Preparation matters because chartership is an assessment of practice, not a memory test. Many professionals find that structured learning — such as a Project Controls or project management programme — helps them reflect on their experience, fill knowledge gaps and build the vocabulary to describe their competence clearly.",
      "body_066": "A common first step is to review the ChPP standard against your own experience and identify where your evidence is strongest and where it needs development. This self-assessment shapes what learning you pursue and how you sequence your preparation.",
      "body_067": "It is also worth remembering that chartership is not the only route to professional recognition. The right pathway depends on your role, your goals and your current level of responsibility. Speaking to a provider who understands the APM framework can help you map the most sensible next step.",
      "key_points_068": "ChPP is awarded by the APM and assessed against a competence framework",
      "key_points_069": "Evidence is drawn from your own professional experience",
      "key_points_070": "Structured learning supports reflection and fills knowledge gaps",
      "key_points_071": "Begin with a self-assessment against the ChPP standard",
      "read_time_072": "7 min read",
      "author_073": "KBC Editorial",
      "image_074": "/assets/images/news/chpp-preparation.webp",
      "href_075": "/blogs-and-news/chpp-preparation",
      "title_076": "Building forecasting capability across project teams",
      "excerpt_077": "A concise look at how structured, work-based learning builds the forecasting and planning capability professionals draw on every day — connecting programme content directly to real project responsibilities.",
      "body_078": "Forecasting is one of the most valuable — and most misunderstood — capabilities in project delivery. Done well, it gives leaders early visibility of risk and lets them act before small issues become significant problems. Done poorly, it becomes an exercise in optimistic guesswork that undermines confidence in the whole delivery function.",
      "body_079": "The challenge for many organisations is that forecasting capability develops unevenly. Individual professionals may be highly skilled, but the wider team lacks a shared approach, common terminology and consistent methods. This is where structured, work-based learning makes a tangible difference.",
      "body_080": "By connecting learning directly to live project responsibilities, professionals develop forecasting skills in the context of the work they already do. They learn to build credible estimates, track performance against plan, and interpret variance — then apply those techniques immediately to the projects in front of them.",
      "body_081": "The result is not just individual improvement but a shared capability that lifts the whole team. When people use consistent methods and a common language, forecasts become comparable, decisions become faster, and senior leaders gain the confidence to trust the numbers they are presented with.",
      "body_082": "For organisations looking to strengthen delivery certainty, investing in forecasting capability is one of the most direct levers available. It is a skill that compounds — the more people practise it against real work, the more reliable the organisation's planning becomes.",
      "read_time_083": "5 min read",
      "author_084": "KBC Editorial",
      "image_085": "/assets/images/news/forecasting-capability.webp",
      "href_086": "/blogs-and-news/forecasting-capability",
      "title_087": "Marketing apprenticeships: from Level 4 to Level 6 progression",
      "excerpt_088": "How Marketing Executive Level 4 and Marketing Manager Level 6 connect into a longer professional-development pathway — including the CIM and progression options available where applicable.",
      "body_089": "Marketing is a profession in which progression is rarely a straight line. People move between specialist and generalist roles, between agency and client-side, and between tactical delivery and strategic leadership. A structured apprenticeship pathway gives that progression a clear, recognised shape.",
      "body_090": "The Marketing Executive Level 4 apprenticeship builds the practical, day-to-day skills that underpin effective marketing delivery — campaign execution, content, data and communication. It is designed for people who are building their professional foundation, often early in their marketing career or moving into the discipline.",
      "body_091": "The Marketing Manager Level 6 apprenticeship takes that foundation further, developing the strategic and leadership capability needed to plan and direct marketing activity, manage budgets and people, and connect marketing to wider business objectives.",
      "body_092": "Where applicable, these programmes connect to professional bodies such as the Chartered Institute of Marketing (CIM), adding recognised professional standing to the apprenticeship qualification. This combination of workplace experience, formal learning and professional recognition is what makes the pathway valuable.",
      "body_093": "The key is choosing the right entry point for your current level and ambitions. A conversation about your role, your experience and where you want to be in three to five years will help identify whether Level 4, Level 6 — or a direct route to a professional qualification — is the better fit.",
      "key_points_094": "Level 4 builds practical campaign and delivery skills",
      "key_points_095": "Level 6 develops strategic and leadership capability",
      "key_points_096": "Programmes connect to professional bodies such as CIM where applicable",
      "key_points_097": "Choose the entry point that matches your current level and goals",
      "read_time_098": "4 min read",
      "author_099": "KBC Editorial",
      "image_100": "/assets/images/news/marketing-progression.webp",
      "href_101": "/blogs-and-news/marketing-progression",
      "title_102": "IPC bursary support explained for Project Controls modules",
      "excerpt_103": "Applicable Project Controls commercial modules receive 50% or 75% IPC bursary support depending on the selected module — subject to approval and availability. Here's what that means in practice.",
      "body_104": "The cost of specialist professional development is one of the most common barriers people cite when considering a Project Controls qualification. The IPC bursary is designed to address exactly that — reducing the financial commitment so that more professionals can access advanced capability-building.",
      "body_105": "In practice, the bursary applies to applicable commercial Project Controls modules, providing either 50% or 75% support depending on the specific module selected. This means the level of support reflects the nature and cost of the learning, rather than being a single flat rate applied to everything.",
      "body_106": "It is important to understand that bursary support is subject to approval and availability. It is a limited resource intended to widen access to specialist learning, so it is worth checking eligibility and current availability early in your planning rather than assuming it will automatically apply.",
      "body_107": "The bursary is particularly relevant for professionals whose employers are not funding their development, or who are accessing commercial modules outside the levy-funded routes. In these cases, the reduction can be the difference between pursuing specialist training and putting it off.",
      "body_108": "The best way to understand how the bursary applies to your situation is to discuss it directly. A conversation about the modules you are considering, your circumstances and your goals will clarify the level of support available and help you plan your investment sensibly.",
      "key_points_109": "50% or 75% support depending on the selected module",
      "key_points_110": "Applies to applicable commercial Project Controls modules",
      "key_points_111": "Subject to approval and availability",
      "key_points_112": "Particularly relevant where development is not employer-funded",
      "read_time_113": "4 min read",
      "author_114": "KBC Editorial",
      "image_115": "/assets/images/news/ipc-bursary-explained.webp",
      "href_116": "/blogs-and-news/ipc-bursary-explained",
      "title_117": "Employer guide to the Apprenticeship Service (DAS) setup",
      "excerpt_118": "Setting up a funded programme is straightforward. A step-by-step look at the Digital Contract, adding Kent Business College as your training provider (UKPRN 10093689) and Government Gateway credentials.",
      "body_119": "For employers accessing levy-funded apprenticeships, the Apprenticeship Service — sometimes referred to by its platform name, DAS — is the system through which funding is managed, providers are appointed and learners are registered. Getting the setup right at the start makes everything that follows smoother.",
      "body_120": "The first step is ensuring you have the right access. You will need your Government Gateway credentials and, for levy-paying employers, access to the Apprenticeship Service account where your levy funds are held. This is the account from which training costs are drawn.",
      "body_121": "Next, you appoint your training provider. This is done by adding the provider to your account using their UK Provider Reference Number (UKPRN). Kent Business College's UKPRN is 10093689. Appointing the provider creates the link that allows programme details, costs and learner records to be managed through the service.",
      "body_122": "The Digital Contract (sometimes called the Apprenticeship Agreement) records the relationship between the employer, the provider and the learner. It sets out the programme, the cost and the responsibilities of each party. This document should be completed before the learner starts.",
      "body_123": "From there, the day-to-day operation is familiar: learners are added to the account, progress is recorded, and funding is released as milestones are met. The key to a smooth experience is accurate data and clear communication between the employer and the provider throughout the programme.",
      "key_points_124": "Kent Business College UKPRN is 10093689",
      "key_points_125": "Appoint your provider through the Apprenticeship Service account",
      "key_points_126": "The Digital Contract records the programme, cost and responsibilities",
      "key_points_127": "Complete setup before the learner starts",
      "read_time_128": "6 min read",
      "author_129": "KBC Editorial",
      "image_130": "/assets/images/news/employer-das-guide.webp",
      "href_131": "/blogs-and-news/employer-das-guide",
      "title_132": "Leadership development for working professionals",
      "excerpt_133": "Professional leadership development should build on the experience you already have — not start again. How structured learning connects to the responsibilities and challenges you hold today.",
      "body_134": "There is a persistent myth that leadership development means going back to school — that it is for people early in their careers, or that it takes you away from the real work of leading. In practice, the most effective leadership development is the opposite: it is grounded in the responsibilities you already hold.",
      "body_135": "Working professionals bring something no classroom can replicate — lived experience of leading teams, making decisions under pressure and navigating organisational complexity. Structured learning should build on that experience, giving it structure, language and a stronger evidence base.",
      "body_136": "A well-designed leadership programme connects directly to the challenges of the role. Learners reflect on their own leadership practice, explore the behaviours that build effective teams, and develop the capability to lead through change and uncertainty — all while continuing to do the job.",
      "body_137": "The benefit compounds. Because the learning is applied immediately, it becomes part of how the professional leads, rather than a set of ideas that fade after a course ends. This is what separates genuine development from a box-ticking exercise.",
      "body_138": "For professionals who want to lead more effectively — and for employers who want to grow their future leaders — the key is to choose development that respects experience, connects to real work and builds capability that lasts.",
      "key_points_139": "Effective leadership development builds on existing experience",
      "key_points_140": "Learning is applied immediately to real leadership challenges",
      "key_points_141": "Develops the capability to lead through change and uncertainty",
      "key_points_142": "Genuine development becomes part of how the professional leads",
      "read_time_143": "5 min read",
      "author_144": "KBC Editorial",
      "image_145": "/assets/images/news/leadership-development.webp",
      "href_146": "/blogs-and-news/leadership-development",
      "title_147": "Information session: Project Controls with APM Chartered Project Professional",
      "excerpt_148": "Join our online information session to explore the Project Control Professional Level 6 programme, professional progression and how funded and commercial routes compare.",
      "body_149": "Choosing the right professional-development route is easier when you can ask questions directly. Our online information sessions are designed for exactly that — an opportunity to explore a programme in depth, understand how it maps to your role, and get clear answers on eligibility and funding.",
      "body_150": "This session focuses on the Project Control Professional Level 6 programme and the APM Chartered Project Professional route. It is relevant for professionals working in planning, scheduling, cost engineering, risk or performance management — and for employers building Project Controls capability.",
      "body_151": "During the session we cover the programme structure, the professional progression it supports, and how funded and commercial routes compare in practice. There is time for questions, so you can explore the points that matter most to your own circumstances.",
      "body_152": "Sessions are held online, making them accessible wherever you are based, and are delivered by people who understand both the discipline and the practicalities of funding and application.",
      "body_153": "If you are weighing up your options or simply want to understand what a Project Controls qualification could mean for your career, joining a session is a practical, low-commitment first step.",
      "key_points_154": "Focuses on Project Control Professional Level 6 and the ChPP route",
      "key_points_155": "Covers programme structure, progression and funding",
      "key_points_156": "Held online with time for questions",
      "key_points_157": "Relevant for planning, cost, risk and performance professionals",
      "read_time_158": "1 min read",
      "author_159": "KBC Events",
      "image_160": "/assets/images/news/info-session-apm.webp",
      "href_161": "/blogs-and-news/info-session-apm",
      "title_162": "Why earned value management matters for project delivery",
      "excerpt_163": "Stronger cost visibility and performance measurement help professionals and employers deliver with greater confidence. What earned value management is — and why it matters for control.",
      "body_164": "Earned value management (EVM) is one of the most powerful tools in Project Controls, yet it is often under-used. At its heart, EVM gives you an objective answer to a simple but difficult question: are we getting the value we planned to get, for the cost we are spending?",
      "body_165": "Traditional reporting often separates schedule from cost, making it hard to see how the two interact. A project can appear on schedule while costs quietly overrun, or appear under budget while actually delivering less than planned. EVM brings schedule, cost and scope together into a single view.",
      "body_166": "By measuring earned value — the value of work actually completed — against planned value and actual cost, professionals can identify variance early and act while there is still time to correct course. This early visibility is the real benefit: it turns reporting into a decision-making tool.",
      "body_167": "For employers, EVM capability supports stronger governance and more confident forecasting. When the numbers are credible and consistently produced, senior leaders can make investment and resource decisions with far greater assurance.",
      "body_168": "Building EVM capability is a practical, high-value investment for any organisation that depends on predictable delivery. It is a skill that, once embedded, pays for itself many times over through better control and fewer surprises.",
      "key_points_169": "EVM brings schedule, cost and scope into a single view",
      "key_points_170": "Identifies variance early while there is still time to act",
      "key_points_171": "Turns reporting into a decision-making tool",
      "key_points_172": "Supports stronger governance and confident forecasting",
      "read_time_173": "5 min read",
      "author_174": "KBC Editorial",
      "image_175": "/assets/images/news/earned-value-matters.webp",
      "href_176": "/blogs-and-news/earned-value-matters"
    }
  },
  {
    "key": "awards.pages_awards_page_component_recognition__recognition_section",
    "page": "awards",
    "section": "pages_awards_page_component_recognition__recognition_section",
    "title": "Recognition Section",
    "sort_order": 0,
    "content": {
      "aria_label_001": "Filter recognition"
    }
  },
  {
    "key": "awards.pages_awards_page_component_recognition__footer",
    "page": "awards",
    "section": "pages_awards_page_component_recognition__footer",
    "title": "Footer",
    "sort_order": 1,
    "content": {
      "text_002": "·"
    }
  },
  {
    "key": "awards.pages_awards_page_data_awards_seo",
    "page": "awards",
    "section": "pages_awards_page_data_awards_seo",
    "title": "Awards Seo",
    "sort_order": 2,
    "content": {
      "title_001": "Accreditations, Awards & Professional Recognition | Kent Business College",
      "description_002": "Explore Kent Business College's quality standards, professional-body relationships, certifications and awards — independent recognition that reflects how we support learners, employers and professional development."
    }
  },
  {
    "key": "awards.pages_awards_page_data_awards_hero",
    "page": "awards",
    "section": "pages_awards_page_data_awards_hero",
    "title": "Awards Hero",
    "sort_order": 3,
    "content": {
      "eyebrow_003": "Recognition & Standards",
      "title_004": "Recognition that reflects",
      "accent_005": "the quality we deliver",
      "paragraphs_006": "Independent standards, professional relationships and external recognition that reflect how Kent Business College supports learners, employers and professional development.",
      "paragraphs_007": "Our recognition spans quality standards, professional-body relationships, organisational certifications and external awards.",
      "image_008": "/assets/images/awards/recognition-hero.jpg"
    }
  },
  {
    "key": "awards.pages_awards_page_data_awards_intro",
    "page": "awards",
    "section": "pages_awards_page_data_awards_intro",
    "title": "Awards Intro",
    "sort_order": 4,
    "content": {
      "eyebrow_009": "Our record",
      "title_010": "Standards, recognition & professional relationships",
      "description_011": "KBC’s external recognition reflects different aspects of the College — from learner support and organisational quality to professional relationships, information security and employer standards.",
      "note_012": "Each recognition below is labelled according to the type of relationship or standard it represents."
    }
  },
  {
    "key": "awards.pages_awards_page_data_recognition_filters",
    "page": "awards",
    "section": "pages_awards_page_data_recognition_filters",
    "title": "Recognition Filters",
    "sort_order": 5,
    "content": {
      "label_013": "ALL",
      "label_014": "QUALITY STANDARDS",
      "label_015": "PROFESSIONAL RELATIONSHIPS",
      "label_016": "CERTIFICATIONS",
      "label_017": "AWARDS & RECOGNITION"
    }
  },
  {
    "key": "awards.pages_awards_page_data_recognition_groups",
    "page": "awards",
    "section": "pages_awards_page_data_recognition_groups",
    "title": "Recognition Groups",
    "sort_order": 6,
    "content": {
      "title_018": "Quality & organisational standards",
      "description_019": "Independent standards that reflect how KBC operates as an organisation, employer and provider of guidance.",
      "title_020": "Professional relationships & approved status",
      "description_021": "Recognised relationships and approved status with professional bodies, held within their confirmed scope.",
      "title_022": "Awards & external recognition",
      "description_023": "External recognition of the quality and outcomes of KBC's professional provision."
    }
  },
  {
    "key": "awards.pages_awards_page_data_recognitions",
    "page": "awards",
    "section": "pages_awards_page_data_recognitions",
    "title": "Recognitions",
    "sort_order": 7,
    "content": {
      "category_label_024": "QUALITY STANDARD",
      "title_025": "Matrix Standard",
      "awarding_body_026": "The Growth Company",
      "description_027": "The Matrix Standard is the national quality standard for information, advice and guidance. It independently assesses the quality of the information, advice and guidance KBC provides to learners and prospective learners, helping people make informed decisions about their development.",
      "category_label_028": "PEOPLE STANDARD",
      "title_029": "Investors in People – Silver",
      "awarding_body_030": "Investors in People",
      "description_031": "Investors in People – Silver reflects KBC's commitment to developing and supporting its people. It recognises organisational practice in leading, supporting and improving colleagues — a people standard, not a programme accreditation.",
      "category_label_032": "PROFESSIONAL PARTNERSHIP",
      "title_033": "APM Corporate Partner",
      "awarding_body_034": "Association for Project Management",
      "description_035": "KBC's corporate partnership with the Association for Project Management supports our engagement with the project profession, recognised standards and relevant professional-development pathways. It does not mean every KBC programme is APM-accredited or every qualification is APM-awarded.",
      "category_label_036": "APPROVED CENTRE",
      "title_037": "CMI Approved Centre",
      "awarding_body_038": "Chartered Management Institute",
      "description_039": "An approved-centre relationship with the Chartered Management Institute confirms KBC's status to deliver CMI-aligned leadership and management development, within the specific scope confirmed by CMI. It does not extend to programmes outside that approval.",
      "category_label_040": "ACCREDITED STUDY CENTRE",
      "title_041": "CIM Accredited Study Centre",
      "awarding_body_042": "Chartered Institute of Marketing",
      "description_043": "Accredited study-centre status with the Chartered Institute of Marketing reflects marketing programmes delivered in line with CIM's professional framework. This is distinct from KBC's CMI approval — CIM supports marketing, while CMI relates to management and leadership.",
      "category_label_044": "AWARD FINALIST",
      "title_045": "Apprenticeship Provider of the Year – Finalist",
      "awarding_body_046": "Kent Business Awards",
      "description_047": "KBC was shortlisted as a finalist for Apprenticeship Provider of the Year. This finalist recognition reflects the quality, outcomes and employer feedback across our professional apprenticeship provision — a shortlist, not a win.",
      "category_label_048": "CYBER SECURITY CERTIFICATION",
      "title_049": "Cyber Essentials Certified",
      "awarding_body_050": "National Cyber Security Centre",
      "description_051": "Cyber Essentials is a Government-backed certification confirming that KBC's systems and processes meet the required standard for cyber-security controls. It relates to organisational information-security practice — not to academic or programme accreditation.",
      "category_label_052": "EMPLOYER STANDARD",
      "title_053": "Living Wage Employer",
      "awarding_body_054": "Living Wage Foundation",
      "description_055": "The Living Wage Employer recognition reflects KBC's commitment to paying colleagues the real Living Wage. It is an employer standard about how we value our people — it does not accredit programmes or learning."
    }
  },
  {
    "key": "awards.pages_awards_page_data_recognition_benefits",
    "page": "awards",
    "section": "pages_awards_page_data_recognition_benefits",
    "title": "Recognition Benefits",
    "sort_order": 8,
    "content": {
      "eyebrow_056": "Why recognition matters",
      "title_057": "What this means for learners and employers",
      "items_title_058": "For learners",
      "items_copy_059": "Quality support, professional standards and relevant progression relationships that strengthen the wider learning experience.",
      "items_title_060": "For employers",
      "items_copy_061": "Greater confidence in organisational standards, professional relationships, information security and workforce-development practice.",
      "items_title_062": "For professional development",
      "items_copy_063": "Connections with recognised bodies and standards that support relevant qualifications, professional practice and progression where applicable."
    }
  },
  {
    "key": "awards.pages_awards_page_data_awards_cta",
    "page": "awards",
    "section": "pages_awards_page_data_awards_cta",
    "title": "Awards Cta",
    "sort_order": 9,
    "content": {
      "eyebrow_064": "Experience KBC",
      "title_065": "See what recognised quality looks like in practice",
      "description_066": "Explore KBC programmes and employer development, or speak with our team about professional development that fits your goals or organisation.",
      "actions_label_067": "Explore programmes",
      "actions_href_068": "/#programmes",
      "actions_label_069": "For employers",
      "actions_href_070": "/employers",
      "actions_label_071": "Speak to KBC",
      "actions_href_072": "/contact"
    }
  },
  {
    "key": "learners.pages_learners_page_learners_home_page",
    "page": "learners",
    "section": "pages_learners_page_learners_home_page",
    "title": "Learners Home Page",
    "sort_order": 0,
    "content": {
      "fallback_title_001": "For Learners | Kent Business College",
      "fallback_description_002": "Build role-relevant professional capability through Kent Business College apprenticeships, coaching and recognised pathways."
    }
  },
  {
    "key": "learners.pages_learners_components_learner_audien_learner_audience_section",
    "page": "learners",
    "section": "pages_learners_components_learner_audien_learner_audience_section",
    "title": "Learner Audience Section",
    "sort_order": 1,
    "content": {
      "src_001": "/assets/patterns/kbc-horse-growth.png",
      "eyebrow_002": "Why partner with KBC",
      "title_003": "Development that moves your business forward.",
      "description_004": "Invest in your people with recognised qualifications that deliver measurable, on-the-job impact."
    }
  },
  {
    "key": "learners.pages_learners_data_hero_stats",
    "page": "learners",
    "section": "pages_learners_data_hero_stats",
    "title": "Hero Stats",
    "sort_order": 2,
    "content": {
      "label_001": "Free one-to-one tutoring support",
      "label_002": "DfE funded for levy payers",
      "label_003": "Structured learning each week"
    }
  },
  {
    "key": "learners.pages_learners_data_learner_audiences",
    "page": "learners",
    "section": "pages_learners_data_learner_audiences",
    "title": "Learner Audiences",
    "sort_order": 3,
    "content": {
      "title_004": "Fill capability gaps",
      "description_005": "Develop project management, controls and marketing skills that directly support your delivery.",
      "title_006": "Retain your talent",
      "description_007": "Invest in your people and strengthen retention with a recognised development pathway.",
      "title_008": "Use your levy",
      "description_009": "Make the most of Apprenticeship Levy funding that might otherwise go unused.",
      "title_010": "Measure the return",
      "description_011": "See tangible workplace impact through evidence-based, work-applied learning."
    }
  },
  {
    "key": "learners.pages_learners_data_learning_steps",
    "page": "learners",
    "section": "pages_learners_data_learning_steps",
    "title": "Learning Steps",
    "sort_order": 4,
    "content": {
      "title_012": "Identify your need",
      "description_013": "Tell us which roles or skills gaps you want to develop, and we'll recommend the right programme.",
      "title_014": "Check your funding",
      "description_015": "Use your Apprenticeship Levy or access 95% government co-investment as a non-levy employer.",
      "title_016": "Onboard your learners",
      "description_017": "We manage enrolment, eligibility checks and onboarding for each employee you nominate.",
      "title_018": "Track real impact",
      "description_019": "Learners apply new skills on the job, with progress visible through structured reporting."
    }
  },
  {
    "key": "learners.pages_learners_data_learner_programmes",
    "page": "learners",
    "section": "pages_learners_data_learner_programmes",
    "title": "Learner Programmes",
    "sort_order": 5,
    "content": {
      "discipline_020": "Project Management",
      "title_021": "Associate Project Manager",
      "duration_022": "12 months + EPA",
      "description_023": "Develop structured project management capability and practical AI application across your delivery teams.",
      "image_024": "/assets/images/learner-home/associate-project-manager.webp",
      "href_025": "/associate-project-manager-level-4",
      "discipline_026": "Project Controls",
      "title_027": "Project Controls Professional",
      "duration_028": "27 months",
      "description_029": "Strengthen planning, cost, risk, PMO and governance capability for complex delivery.",
      "image_030": "/assets/images/learner-home/project-controls.webp",
      "href_031": "/college-of-project-controls-and-project-management",
      "title_032": "Marketing Executive",
      "duration_033": "12 months + EPA",
      "description_034": "Build campaign delivery capability and professional behaviours across your marketing function.",
      "image_035": "/assets/images/learner-home/marketing-executive.webp",
      "href_036": "/marketing-executive-level-4",
      "title_037": "Marketing Manager",
      "duration_038": "18 months + EPA",
      "description_039": "Develop strategic marketing leadership, brand and campaign management across your organisation.",
      "image_040": "/assets/images/learner-home/marketing-manager.webp",
      "href_041": "/marketing-manager-level-6"
    }
  },
  {
    "key": "learners.pages_learners_data_dfe_benefits",
    "page": "learners",
    "section": "pages_learners_data_dfe_benefits",
    "title": "Dfe Benefits",
    "sort_order": 6,
    "content": {
      "text_042": "Tutoring services",
      "text_043": "Learning materials",
      "text_044": "Apprenticeship certificate"
    }
  },
  {
    "key": "learners.pages_learners_data_kbc_fund_benefits",
    "page": "learners",
    "section": "pages_learners_data_kbc_fund_benefits",
    "title": "Kbc Fund Benefits",
    "sort_order": 7,
    "content": {
      "text_045": "Professional exam fees",
      "text_046": "Registration fees",
      "text_047": "APM ChPP application & preparation support where applicable",
      "text_048": "Workshop travel",
      "text_049": "Graduation rewards",
      "text_050": "No hidden costs",
      "text_051": "Professional memberships",
      "text_052": "Relevant professional exam support",
      "text_053": "ICostE / Certified Professional Cost Engineer pathway support where applicable",
      "text_054": "Graduation ceremony",
      "text_055": "Laptop prize where applicable"
    }
  },
  {
    "key": "learners.pages_learners_data_ipc_benefits",
    "page": "learners",
    "section": "pages_learners_data_ipc_benefits",
    "title": "Ipc Benefits",
    "sort_order": 8,
    "content": {
      "text_056": "Advanced Project Controls modules",
      "text_057": "Planning & scheduling",
      "text_058": "Cost management & risk analysis"
    }
  },
  {
    "key": "learners.pages_learners_data_learner_support",
    "page": "learners",
    "section": "pages_learners_data_learner_support",
    "title": "Learner Support",
    "sort_order": 9,
    "content": {
      "title_059": "Dedicated account support",
      "description_060": "A single point of contact for enrolment and progression.",
      "title_061": "Flexible delivery",
      "description_062": "Live online sessions designed around your working patterns.",
      "title_063": "Progress reporting",
      "description_064": "Clear visibility of learner engagement and achievement.",
      "title_065": "Line manager guidance",
      "description_066": "Support for managers to coach learners effectively on the job."
    }
  },
  {
    "key": "learners.pages_learners_data_tutoring_benefits",
    "page": "learners",
    "section": "pages_learners_data_tutoring_benefits",
    "title": "Tutoring Benefits",
    "sort_order": 10,
    "content": {
      "text_067": "Live interactive learning",
      "text_068": "Session recordings",
      "text_069": "Catch-up support",
      "text_070": "One-to-one tutoring"
    }
  },
  {
    "key": "learners.pages_learners_data_masterclass_benefits",
    "page": "learners",
    "section": "pages_learners_data_masterclass_benefits",
    "title": "Masterclass Benefits",
    "sort_order": 11,
    "content": {
      "text_071": "KBC professional Masterclasses",
      "text_072": "London Masterclass events",
      "text_073": "Networking opportunities",
      "text_074": "Optional UK in-person workshops",
      "text_075": "Professional community"
    }
  },
  {
    "key": "learners.pages_learners_data_learner_stories",
    "page": "learners",
    "section": "pages_learners_data_learner_stories",
    "title": "Learner Stories",
    "sort_order": 12,
    "content": {
      "quote_076": "It was really good to go through all the system elements. Affan was very good at explaining everything, and I now feel much more comfortable using it.",
      "name_077": "Gill Stoney",
      "role_078": "Workforce Scheduling Team Manager · St John Ambulance",
      "quote_079": "The structured approach gave me a clear framework to apply to complex infrastructure projects. The mentoring support was exceptional.",
      "name_080": "James Porter",
      "role_081": "Project Controls Lead · Balfour Beatty",
      "quote_082": "The lecturers are knowledgeable and friendly. I really enjoy the live sessions with high-quality slides and the option to rewatch recordings later.",
      "name_083": "Inga Lightley",
      "role_084": "Administrator & Marketing Professional · Independent professional",
      "quote_085": "KBC helped me balance the demands of a full-time logistics role with a genuinely useful qualification. The flexible tutoring made all the difference.",
      "name_086": "Sarah Mitchell",
      "role_087": "Associate Project Manager · Wincanton",
      "quote_088": "I wanted to move from operational marketing to strategic thinking. This programme gave me the tools and confidence to lead campaigns from start to finish.",
      "name_089": "David Chen",
      "role_090": "Marketing Executive · Shell Energy",
      "quote_091": "The apprenticeship helped me connect more than ten years of hands-on experience to proper marketing theory and build real strategic confidence.",
      "name_092": "Corinna Denbow",
      "role_093": "Marketing Manager · Clevertouch"
    }
  },
  {
    "key": "learners.pages_learners_data_trustpilot_reviews",
    "page": "learners",
    "section": "pages_learners_data_trustpilot_reviews",
    "title": "Trustpilot Reviews",
    "sort_order": 13,
    "content": {
      "quote_094": "Outstanding support from start to finish. The funding route was clear and my adviser was genuinely helpful.",
      "name_095": "Alex T.",
      "quote_096": "The project management programme gave me practical skills I use every day. Highly recommend KBC.",
      "name_097": "Priya K.",
      "quote_098": "Great learning experience. The masterclasses in London were a real highlight.",
      "name_099": "Marcus W."
    }
  },
  {
    "key": "learners.pages_learners_data_recognition_logos",
    "page": "learners",
    "section": "pages_learners_data_recognition_logos",
    "title": "Recognition Logos",
    "sort_order": 14,
    "content": {
      "name_100": "CIM",
      "description_101": "Professional body",
      "src_102": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/356aeb204f224be68e62727bcbbb1c75.webp",
      "name_103": "PMI",
      "description_104": "Professional body",
      "src_105": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/c2cd9e7a9c4842ab822c0aac16ffa061.webp",
      "name_106": "APM",
      "description_107": "Professional body",
      "src_108": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/bb930e8a6230490b850425c0f6643aab.webp",
      "name_109": "APMG",
      "description_110": "Qualification pathway",
      "src_111": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/5c4f7558699844a28d0d1fbf308b7b25.webp",
      "name_112": "IPC",
      "description_113": "Professional body",
      "src_114": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/cfc267af22a941a4bf58b79926482616.png",
      "name_115": "ICostE",
      "description_116": "Professional body",
      "src_117": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/8ba3636c4a53491f86912fe3fa597438.webp",
      "name_118": "ChPP",
      "description_119": "Chartered pathway",
      "name_120": "CaSA",
      "description_121": "Professional body"
    }
  },
  {
    "key": "learners.pages_learners_data_faqs",
    "page": "learners",
    "section": "pages_learners_data_faqs",
    "title": "Faqs",
    "sort_order": 15,
    "content": {
      "question_122": "Do I need to leave my job to study?",
      "answer_123": "No. You continue in your current role while learning, with learning applied directly to your real professional responsibilities during paid working hours where applicable.",
      "question_124": "Is the programme fully funded?",
      "answer_125": "Apprenticeship tuition is funded 100% for levy payers and 95% for non-levy employers, with a 5% employer contribution. The KBC Fund additionally provides professional exam fees, memberships and other benefits, separate from DfE funding.",
      "question_126": "How much time will I need each week?",
      "answer_127": "Around 8.5 hours per week: 2.5 hours of live classes, 3 hours of reading and quizzes, and 3 hours of reflective reports and workplace application.",
      "question_128": "What support is available outside class?",
      "answer_129": "Free one-to-one tutoring 7 days a week until 9:00 PM, recordings of every session, catch-up support and a professional community across the UK.",
      "question_130": "Am I eligible for DfE funding?",
      "answer_131": "You must be UK resident for the past 3 years, hold the right to work, be in paid employment in England, and your employer must be based in England and registered with the Apprenticeship Service.",
      "question_132": "What happens after I complete the programme?",
      "answer_133": "You progress through End-Point Assessment preparation, then continue towards Chartered Project Professional or wider professional recognition, subject to the requirements of the relevant professional body."
    }
  },
  {
    "key": "learners.pages_learners_components_learner_faq_se_learner_faq_section",
    "page": "learners",
    "section": "pages_learners_components_learner_faq_se_learner_faq_section",
    "title": "Learner Faq Section",
    "sort_order": 16,
    "content": {
      "eyebrow_001": "Questions",
      "title_002": "Frequently asked questions."
    }
  },
  {
    "key": "learners.pages_learners_components_learner_final__learner_final_cta",
    "page": "learners",
    "section": "pages_learners_components_learner_final__learner_final_cta",
    "title": "Learner Final Cta",
    "sort_order": 17,
    "content": {
      "src_001": "/assets/patterns/kbc-horse-growth.png",
      "text_002": "Take the next step",
      "text_003": "Your development starts with a conversation.",
      "text_004": "Book a free information session to explore the right programme for your role and confirm your funding eligibility.",
      "to_005": "/book-session",
      "text_006": "Book an info session",
      "to_007": "/contact",
      "text_008": "Speak to our team"
    }
  },
  {
    "key": "learners.pages_learners_components_learner_fundin_learner_funding_section",
    "page": "learners",
    "section": "pages_learners_components_learner_fundin_learner_funding_section",
    "title": "Learner Funding Section",
    "sort_order": 18,
    "content": {
      "src_001": "/assets/patterns/kbc-gold-leaf.png",
      "eyebrow_002": "Funding",
      "title_003": "Funded to grow your workforce.",
      "description_004": "Government funding covers the majority of training costs, whatever the size of your organisation. Commercial options are available for specialist development.",
      "text_005": "Levy-paying employers",
      "text_006": "If your annual pay bill exceeds £3 million, you pay the Apprenticeship Levy and can use those funds to cover the full cost of training.",
      "text_007": "100%",
      "text_008": "Funded through your Apprenticeship Levy",
      "text_009": "Non-levy employers",
      "text_010": "If your pay bill is under £3 million, the government funds 95% of the training cost and you contribute just 5% as a co-investment.",
      "text_011": "95%",
      "text_012": "Government co-investment · 5% employer contribution",
      "text_013": "IPC Bursary",
      "text_014": "For commercial Project Controls modules, the IPC bursary reduces your investment with 50% or 75% support depending on the selected module.",
      "text_015": "50%–75%",
      "text_016": "Bursary support for commercial Project Controls modules",
      "to_017": "/funding-eligibility",
      "text_018": "Explore funding in detail"
    }
  },
  {
    "key": "learners.pages_learners_components_learner_hero_s_learner_hero_image",
    "page": "learners",
    "section": "pages_learners_components_learner_hero_s_learner_hero_image",
    "title": "Learner Hero Image",
    "sort_order": 19,
    "content": {
      "text_001": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/fc112fd534ee4edbb7687567500345f3.webp"
    }
  },
  {
    "key": "learners.pages_learners_components_learner_hero_s_learner_hero_section",
    "page": "learners",
    "section": "pages_learners_components_learner_hero_s_learner_hero_section",
    "title": "Learner Hero Section",
    "sort_order": 20,
    "content": {
      "text_002": "For Learners",
      "text_003": "Develop your career,",
      "text_004": "without stepping back.",
      "text_005": "Earn a recognised qualification while you keep working — with DfE funding, free one-to-one tutoring and professional development that extends far beyond the core programme."
    }
  },
  {
    "key": "learners.pages_learners_components_learner_hero_s_label",
    "page": "learners",
    "section": "pages_learners_components_learner_hero_s_label",
    "title": "Label",
    "sort_order": 21,
    "content": {
      "text_006": "Explore programmes",
      "text_007": "Book an information session"
    }
  },
  {
    "key": "learners.pages_learners_components_learner_how_se_learner_how_section",
    "page": "learners",
    "section": "pages_learners_components_learner_how_se_learner_how_section",
    "title": "Learner How Section",
    "sort_order": 22,
    "content": {
      "src_001": "/assets/patterns/kbc-ibis-wreath.png",
      "eyebrow_002": "How it works",
      "title_003": "A straightforward path to a stronger team."
    }
  },
  {
    "key": "learners.pages_learners_components_learner_progra_learner_programmes_section",
    "page": "learners",
    "section": "pages_learners_components_learner_progra_learner_programmes_section",
    "title": "Learner Programmes Section",
    "sort_order": 23,
    "content": {
      "eyebrow_001": "Workforce solutions",
      "title_002": "Programmes for your people.",
      "description_003": "Four DfE-funded programmes across project management, project controls and marketing, each leading to a recognised qualification.",
      "to_004": "/programmes",
      "text_005": "View all programmes"
    }
  },
  {
    "key": "learners.pages_learners_components_learner_suppor_learner_support_section",
    "page": "learners",
    "section": "pages_learners_components_learner_suppor_learner_support_section",
    "title": "Learner Support Section",
    "sort_order": 24,
    "content": {
      "eyebrow_001": "Partnership support",
      "title_002": "A partner, not just a provider."
    }
  },
  {
    "key": "funding.pages_funding_eligibility_page_data_seo",
    "page": "funding",
    "section": "pages_funding_eligibility_page_data_seo",
    "title": "Seo",
    "sort_order": 0,
    "content": {
      "title_001": "Funding & Eligibility | Kent Business College",
      "description_002": "Compare government-funded apprenticeships, KBC-funded professional benefits and IPC-supported Project Controls routes, then check your eligibility."
    }
  },
  {
    "key": "funding.pages_funding_eligibility_page_data_funding_routes",
    "page": "funding",
    "section": "pages_funding_eligibility_page_data_funding_routes",
    "title": "Funding Routes",
    "sort_order": 1,
    "content": {
      "eyebrow_003": "Government funded",
      "title_004": "Complete professional programmes",
      "text_005": "Eligible employees can access structured workplace development through government-funded apprenticeship programmes.",
      "details_006": "Associate Project Manager — Level 4",
      "details_007": "Project Control Professional — Level 6",
      "details_008": "Marketing Executive — Level 4",
      "details_009": "Marketing Manager — Level 6",
      "note_010": "100% for levy payers · 95% for non-levy employers",
      "href_011": "#programme-funding",
      "eyebrow_012": "Kent Business College Fund",
      "title_013": "Additional professional investment",
      "text_014": "KBC separately funds selected benefits that sit outside Department for Education apprenticeship funding.",
      "details_015": "Professional qualifications and memberships",
      "details_016": "Professional exam support",
      "details_017": "Masterclasses and workshop travel",
      "details_018": "Graduation, recognition and progression",
      "note_019": "Selected benefits for the first 30 eligible learners",
      "href_020": "#kbc-fund-details",
      "eyebrow_021": "Project Controls commercial",
      "title_022": "Specialist development without the full programme",
      "text_023": "Access individual Project Controls modules or combine subjects into a broader professional-development plan.",
      "details_024": "One specialist module",
      "details_025": "Multiple connected modules",
      "details_026": "A broader Project Controls route",
      "details_027": "Flexible development for individuals or teams",
      "note_028": "50% or 75% IPC bursary support where applicable",
      "href_029": "#commercial-access"
    }
  },
  {
    "key": "funding.pages_funding_eligibility_page_data_funding_nav_items",
    "page": "funding",
    "section": "pages_funding_eligibility_page_data_funding_nav_items",
    "title": "Funding Nav Items",
    "sort_order": 2,
    "content": {
      "label_030": "Funding Overview",
      "label_031": "Funded Programmes",
      "label_032": "Programme Funding",
      "label_033": "KBC Fund",
      "label_034": "Project Controls Commercial",
      "label_035": "Eligibility",
      "label_036": "Employer Setup",
      "label_037": "FAQs"
    }
  },
  {
    "key": "funding.pages_funding_eligibility_page_data_funding_audiences",
    "page": "funding",
    "section": "pages_funding_eligibility_page_data_funding_audiences",
    "title": "Funding Audiences",
    "sort_order": 3,
    "content": {
      "tab_038": "For professionals",
      "eyebrow_039": "Professionals",
      "title_040": "Build on the experience you already have",
      "copy_041": "Develop role-relevant capability while remaining in work, apply learning directly to your responsibilities and progress towards relevant professional qualifications where included.",
      "points_042": "Develop while working",
      "points_043": "Build on existing professional experience",
      "points_044": "Apply learning to real responsibilities",
      "points_045": "Access eligible funded programmes",
      "points_046": "Work towards relevant professional qualifications",
      "cta_047": "Explore professional funding routes",
      "href_048": "#funding-routes",
      "image_049": "/assets/images/professional-pathway-training.png",
      "tab_050": "For employers",
      "eyebrow_051": "Employers",
      "title_052": "Develop capability where your organisation needs it",
      "copy_053": "Use professional development to strengthen existing talent, address capability gaps and align learning with current organisational priorities.",
      "points_054": "Develop existing employees",
      "points_055": "Address role-specific skills gaps",
      "points_056": "Strengthen workforce capability",
      "points_057": "Use eligible funding appropriately",
      "points_058": "Connect learning directly to work",
      "cta_059": "Explore employer funding",
      "href_060": "#funding-routes",
      "image_061": "/assets/images/professional-development-employers.png"
    }
  },
  {
    "key": "funding.pages_funding_eligibility_page_data_funding_layers",
    "page": "funding",
    "section": "pages_funding_eligibility_page_data_funding_layers",
    "title": "Funding Layers",
    "sort_order": 4,
    "content": {
      "label_062": "Department for Education / government funding",
      "micro_063": "Core programme",
      "intro_064": "Supports eligible apprenticeship programme delivery.",
      "items_065": "Apprenticeship tuition",
      "items_066": "Programme delivery",
      "items_067": "Tutoring services where identified as DfE funded",
      "items_068": "Learning materials where identified as DfE funded",
      "items_069": "Apprenticeship certificate where applicable",
      "label_070": "Kent Business College Fund",
      "micro_071": "Additional professional value",
      "intro_072": "Separately funds selected professional benefits beyond DfE funding.",
      "items_073": "Professional memberships",
      "items_074": "Registration fees",
      "items_075": "Professional examination fees",
      "items_076": "CIM-related professional qualification costs",
      "items_077": "ChPP application / preparation support",
      "items_078": "Relevant professional pathways",
      "items_079": "Workshop travel",
      "items_080": "Additional development opportunities",
      "label_081": "IPC Project Controls commercial route",
      "micro_082": "Specialist access",
      "intro_083": "Specialist commercial Project Controls development supported by IPC bursaries.",
      "items_084": "One Project Controls module",
      "items_085": "Multiple Project Controls modules",
      "items_086": "Specialist capability development",
      "items_087": "Employer-funded commercial development",
      "items_088": "IPC bursary support",
      "items_089": "50% or 75% depending on the selected Project Controls module"
    }
  },
  {
    "key": "funding.pages_funding_eligibility_page_data_mission_pillars",
    "page": "funding",
    "section": "pages_funding_eligibility_page_data_mission_pillars",
    "title": "Mission Pillars",
    "sort_order": 5,
    "content": {
      "title_090": "Government funding",
      "text_091": "Supports eligible Level 4 and Level 6 apprenticeship programme delivery.",
      "title_092": "KBC Fund",
      "text_093": "Supports selected additional professional benefits separately from government funding.",
      "title_094": "IPC Project Controls",
      "text_095": "Supports eligible commercial modules through applicable IPC bursaries."
    }
  },
  {
    "key": "funding.pages_funding_eligibility_page_data_impact_stats",
    "page": "funding",
    "section": "pages_funding_eligibility_page_data_impact_stats",
    "title": "Impact Stats",
    "sort_order": 6,
    "content": {
      "text_096": "Levy payer funding",
      "text_097": "Eligible apprenticeship tuition",
      "text_098": "Non-levy funding",
      "text_099": "With a 5% employer contribution",
      "text_100": "IPC bursary",
      "text_101": "Select commercial modules",
      "text_102": "IPC bursary",
      "text_103": "Maximum selected support",
      "text_104": "KBC Fund places",
      "text_105": "Per applicable cohort",
      "text_106": "KBC UKPRN",
      "text_107": "For the Apprenticeship Service"
    }
  },
  {
    "key": "funding.pages_funding_eligibility_page_data_funding_transitions",
    "page": "funding",
    "section": "pages_funding_eligibility_page_data_funding_transitions",
    "title": "Funding Transitions",
    "sort_order": 7,
    "content": {
      "funded_108": "Government-funded development",
      "funded_109": "Employer participation",
      "funded_110": "Workplace capability",
      "commercial_111": "Alternative route",
      "commercial_112": "Commercial Project Controls",
      "commercial_113": "IPC bursary support",
      "commercial_114": "Flexible capability"
    }
  },
  {
    "key": "funding.pages_funding_eligibility_page_data_programme_data",
    "page": "funding",
    "section": "pages_funding_eligibility_page_data_programme_data",
    "title": "Programme Data",
    "sort_order": 8,
    "content": {
      "marketing_title_115": "Marketing professional programmes",
      "marketing_programmes_116": "Marketing Executive — Level 4",
      "marketing_programmes_117": "Marketing Manager — Level 6",
      "marketing_copy_118": "Develop practical marketing capability through a complete, role-relevant professional programme.",
      "marketing_benefits_119": "CIM Membership",
      "marketing_benefits_120": "CIM Registration",
      "marketing_benefits_121": "CIM Exam Fees",
      "marketing_benefits_122": "Workshop travel",
      "marketing_benefits_123": "Graduation ceremony",
      "marketing_benefits_124": "Graduation rewards",
      "marketing_benefits_125": "Laptop prize where applicable",
      "marketing_benefits_126": "Private Health Care Insurance",
      "marketing_benefits_127": "Travel to applicable London MasterClass events",
      "marketing_benefits_128": "Cost of attending applicable KBC MasterClass events in London",
      "marketing_benefits_129": "Diploma Level 7 in Strategy and Leadership for eligible learners",
      "marketing_benefits_130": "Saturday morning Level 7 sessions where applicable",
      "marketing_benefits_131": "No hidden costs",
      "project_controls_title_132": "Project Control Professional",
      "project_controls_programmes_133": "Project Control Professional — Level 6",
      "project_controls_copy_134": "Build integrated planning, cost, risk and control capability around live workplace responsibilities.",
      "project_controls_benefits_135": "Professional exam fees",
      "project_controls_benefits_136": "Professional memberships",
      "project_controls_benefits_137": "APM ChPP application support where applicable",
      "project_controls_benefits_138": "ChPP preparation",
      "project_controls_benefits_139": "ICostE / Certified Professional Cost Engineer pathways where applicable",
      "project_controls_benefits_140": "Membership fees",
      "project_controls_benefits_141": "Registration fees",
      "project_controls_benefits_142": "Exam fees",
      "project_controls_benefits_143": "Workshop travel",
      "project_controls_benefits_144": "Graduation ceremony",
      "project_controls_benefits_145": "Graduation rewards",
      "project_controls_benefits_146": "Laptop prize where applicable",
      "project_controls_benefits_147": "No hidden costs",
      "project_management_title_148": "Associate Project Manager",
      "project_management_programmes_149": "Associate Project Manager — Level 4",
      "project_management_copy_150": "Strengthen project delivery, stakeholder engagement and governance through workplace-based development.",
      "project_management_benefits_151": "Professional memberships",
      "project_management_benefits_152": "Professional registration fees",
      "project_management_benefits_153": "Professional examination support",
      "project_management_benefits_154": "Workshop travel",
      "project_management_benefits_155": "Graduation ceremony",
      "project_management_benefits_156": "Graduation rewards",
      "project_management_benefits_157": "Laptop prize where applicable",
      "project_management_benefits_158": "No hidden costs"
    }
  },
  {
    "key": "funding.pages_funding_eligibility_page_data_programme_funding_details",
    "page": "funding",
    "section": "pages_funding_eligibility_page_data_programme_funding_details",
    "title": "Programme Funding Details",
    "sort_order": 9,
    "content": {
      "marketing_contributions_programme_159": "Marketing Manager Level 6",
      "marketing_contributions_amount_160": "£450 total",
      "marketing_contributions_alternative_161": "or £30 per month for 15 months",
      "marketing_contributions_programme_162": "Marketing Executive Level 4",
      "marketing_funded_items_163": "Tutoring services",
      "marketing_funded_items_164": "Learning materials",
      "marketing_qualifications_165": "CIM Level 4 Certificate in Professional and Digital Marketing",
      "marketing_qualifications_166": "CIM Level 6 Diploma in Professional and Digital Marketing",
      "project_controls_contributions_programme_167": "Project Control Professional Level 6",
      "project_controls_contributions_amount_168": "£1,350 total",
      "project_controls_contributions_alternative_169": "or £45 per month for 30 months",
      "project_controls_funded_items_170": "Tutoring services",
      "project_controls_funded_items_171": "Learning materials",
      "project_controls_funded_items_172": "Apprenticeship certificate",
      "project_controls_qualifications_173": "Operational professional route",
      "project_controls_qualifications_174": "Strategic professional route",
      "project_controls_qualifications_175": "Diploma Level 7 in Project Management",
      "project_controls_qualifications_176": "Certified Level 6 in Project Management Office",
      "project_controls_qualifications_177": "ChPP preparation and further professional progression",
      "project_management_contributions_programme_178": "Associate Project Manager Level 4",
      "project_management_contributions_amount_179": "£350 total",
      "project_management_contributions_alternative_180": "or £35 per month for 10 months",
      "project_management_funded_items_181": "£7,000 Department for Education",
      "project_management_funded_items_182": "£1,000 Kent Business College Fund",
      "project_management_funded_items_183": "£8,000 total programme package",
      "project_management_qualifications_184": "Associate Project Manager Level 4 workplace-development route",
      "project_management_qualifications_185": "Professional examination support",
      "project_management_qualifications_186": "Professional registration and membership support"
    }
  },
  {
    "key": "funding.pages_funding_eligibility_page_data_programme_route_options",
    "page": "funding",
    "section": "pages_funding_eligibility_page_data_programme_route_options",
    "title": "Programme Route Options",
    "sort_order": 10,
    "content": {
      "eyebrow_187": "Route A · Government funded",
      "title_188": "Complete professional programme",
      "subtitle_189": "Project Control Professional — Level 6",
      "image_190": "/assets/images/professional-development-employers.png",
      "image_alt_191": "Professionals discussing a complete development programme",
      "items_192": "Complete structured programme",
      "items_193": "Workplace-based learning",
      "items_194": "Broader professional capability",
      "items_195": "Professional qualifications where applicable",
      "items_196": "Long-term progression",
      "href_197": "#eligibility-checker",
      "cta_198": "Check eligibility",
      "eyebrow_199": "Route B · Commercial access",
      "title_200": "Project Controls modules",
      "subtitle_201": "Flexible specialist development with IPC support",
      "image_202": "/assets/images/professional-pathway-training.png",
      "image_alt_203": "Specialist Project Controls development",
      "items_204": "One capability or multiple subjects",
      "items_205": "Targeted team development",
      "items_206": "Flexible access",
      "items_207": "No complete apprenticeship required",
      "href_208": "#commercial-access",
      "cta_209": "Explore commercial options"
    }
  },
  {
    "key": "funding.pages_funding_eligibility_page_data_kbc_fund_cards",
    "page": "funding",
    "section": "pages_funding_eligibility_page_data_kbc_fund_cards",
    "title": "Kbc Fund Cards",
    "sort_order": 11,
    "content": {
      "title_210": "Professional qualifications",
      "text_211": "Go beyond programme completion with applicable professional recognition.",
      "items_212": "Professional memberships",
      "items_213": "Professional registration and exam fees",
      "items_214": "Relevant CIM, APM, PMI and APMG support",
      "items_215": "ChPP application and preparation",
      "items_216": "ICostE pathways where applicable",
      "title_217": "Masterclasses & professional events",
      "text_218": "Access relevant masterclasses, networking and development events where included.",
      "items_219": "Applicable London MasterClass events",
      "items_220": "KBC Saturday morning development sessions",
      "items_221": "Professional workshops and networking",
      "items_222": "Programme-specific guest sessions",
      "title_223": "Travel support",
      "text_224": "Support for applicable workshops across London, Kent and selected UK locations.",
      "title_225": "Recognition",
      "text_226": "Graduation, milestone recognition and a visible celebration of professional progress.",
      "items_227": "Graduation ceremony",
      "items_228": "Rochester Cathedral where applicable",
      "items_229": "Graduation rewards",
      "items_230": "Laptop prize where applicable",
      "title_231": "What comes next",
      "text_232": "Programme-specific progression guidance and further professional-development opportunities.",
      "items_233": "Level 7 Strategy and Leadership where eligible",
      "items_234": "Professional body progression",
      "items_235": "Chartered-status preparation",
      "items_236": "Further specialist development",
      "title_237": "Additional programme benefits",
      "text_238": "Selected programme benefits designed to make professional development easier to complete.",
      "items_239": "Private health care insurance where included",
      "items_240": "Learning and event support",
      "items_241": "No hidden costs",
      "items_242": "Benefits confirmed for the applicable programme and cohort"
    }
  },
  {
    "key": "funding.pages_funding_eligibility_page_data_commercial_access_options",
    "page": "funding",
    "section": "pages_funding_eligibility_page_data_commercial_access_options",
    "title": "Commercial Access Options",
    "sort_order": 12,
    "content": {
      "title_243": "One module",
      "text_244": "Focus on one immediate capability gap.",
      "title_245": "Multiple modules",
      "text_246": "Connect several related Project Controls subjects.",
      "title_247": "Broader route",
      "text_248": "Build a more comprehensive specialist plan."
    }
  },
  {
    "key": "funding.pages_funding_eligibility_page_data_commercial_capabilities",
    "page": "funding",
    "section": "pages_funding_eligibility_page_data_commercial_capabilities",
    "title": "Commercial Capabilities",
    "sort_order": 13,
    "content": {
      "text_249": "Earned Value",
      "text_250": "Portfolio Management"
    }
  },
  {
    "key": "funding.pages_funding_eligibility_page_data_alternative_route_options",
    "page": "funding",
    "section": "pages_funding_eligibility_page_data_alternative_route_options",
    "title": "Alternative Route Options",
    "sort_order": 14,
    "content": {
      "eyebrow_251": "General professional development",
      "title_252": "Speak to KBC about the most appropriate route",
      "copy_253": "For Marketing, Project Management, Leadership or other professional-development needs, the KBC team can help identify an appropriate programme or commercial option where available.",
      "cta_254": "Discuss your development needs",
      "href_255": "/book-session",
      "eyebrow_256": "Project Controls",
      "title_257": "Choose specialist Project Controls development",
      "copy_258": "Commercial module access can support experienced professionals and employers when a DfE-funded apprenticeship is not the right fit.",
      "items_259": "One module",
      "items_260": "Multiple modules",
      "items_261": "Broader Project Controls route",
      "items_262": "Employer-funded development",
      "items_263": "Experienced practitioner development",
      "cta_264": "Explore IPC-supported Project Controls",
      "href_265": "https://instituteofprojectcontrols.com/scholarships"
    }
  },
  {
    "key": "funding.pages_funding_eligibility_page_data_availability_items",
    "page": "funding",
    "section": "pages_funding_eligibility_page_data_availability_items",
    "title": "Availability Items",
    "sort_order": 15,
    "content": {
      "title_266": "First-come, first-served",
      "copy_267": "Places and benefits are allocated on a first-come, first-served basis subject to eligibility and availability.",
      "title_268": "Limited KBC Fund benefits",
      "copy_269": "Selected KBC Fund benefits may be limited to the first 30 eligible learners per applicable cohort."
    }
  },
  {
    "key": "funding.pages_funding_eligibility_page_data_project_control_modules",
    "page": "funding",
    "section": "pages_funding_eligibility_page_data_project_control_modules",
    "title": "Project Control Modules",
    "sort_order": 16,
    "content": {
      "title_270": "Project Management & Delivery",
      "copy_271": "Professional development across the structures, governance and controls required to deliver complex work.",
      "items_272": "Project Management Professional — PMI PMP",
      "items_273": "APM Project Management Qualification",
      "items_274": "Project Management Office",
      "items_275": "Project Planning and Control",
      "title_276": "Planning & Scheduling",
      "copy_277": "Strengthen scheduling, planning and control capability across projects and programmes.",
      "items_278": "PMI Scheduling Professional — PMI-SP",
      "items_279": "Project Planning and Control",
      "items_280": "Relevant planning and scheduling development",
      "title_281": "Cost & Earned Value",
      "copy_282": "Develop stronger cost visibility, performance measurement and control.",
      "items_283": "Cost Engineering",
      "items_284": "Earned Value Management",
      "items_285": "Relevant APMG development",
      "title_286": "Risk, Issue & Quality",
      "copy_287": "Build more structured approaches to uncertainty, issues, quality and control.",
      "items_288": "Risk Management Level 1 & 2",
      "items_289": "Risk, Issue and Quality Management",
      "items_290": "Project governance",
      "title_291": "Portfolio & Strategic Delivery",
      "copy_292": "Develop capability beyond individual projects towards programme and portfolio-level decision-making.",
      "items_293": "Management of Portfolios",
      "items_294": "Managing Successful Programmes",
      "items_295": "PMO and strategic delivery",
      "title_296": "Stakeholder, Communication & Reporting",
      "copy_297": "Improve the quality of information, reporting and stakeholder decision support surrounding project performance.",
      "items_298": "Stakeholder Management",
      "items_299": "Reporting Systems",
      "title_300": "Advanced Project Development",
      "copy_301": "A senior, work-aligned route for experienced practitioners seeking broader strategic delivery capability.",
      "badge_302": "Diploma Level 7",
      "items_303": "Advanced programme development",
      "items_304": "Commercial and delivery leadership",
      "items_305": "Strategic professional practice",
      "title_306": "PMO Development",
      "copy_307": "Develop the structures and reporting systems that keep projects, programmes and portfolios on track.",
      "badge_308": "Certified Level 6 in PMO",
      "items_309": "PMO design and maturity",
      "items_310": "Governance and assurance",
      "items_311": "Benefits and performance reporting",
      "title_312": "Professional Progression",
      "copy_313": "A clear view of how module learning connects to recognised professional development.",
      "items_314": "ChPP, APM, PMI, APMG and ICostE pathways",
      "items_315": "Professional exams and qualifications",
      "items_316": "Membership and chartered progression"
    }
  },
  {
    "key": "funding.pages_funding_eligibility_page_data_eligibility_items",
    "page": "funding",
    "section": "pages_funding_eligibility_page_data_eligibility_items",
    "title": "Eligibility Items",
    "sort_order": 17,
    "content": {
      "title_317": "UK residency",
      "copy_318": "UK resident for the past 3 years.",
      "title_319": "Right to work",
      "copy_320": "Hold an eligible right-to-work status and meet current funding and immigration requirements.",
      "title_321": "Other funded training",
      "copy_322": "Not enrolled in other government-funded training at the time of the programme.",
      "title_323": "Paid employment in England",
      "copy_324": "Paid employment, normally 30 or more hours per week, with a minimum of 16 hours where applicable. Self-employed individuals are not eligible for DfE funding.",
      "title_325": "Employer support",
      "copy_326": "Your employer must be based in England and registered with the Apprenticeship Service.",
      "title_327": "Working in England",
      "copy_328": "Spend at least 50% of your working hours within England."
    }
  },
  {
    "key": "funding.pages_funding_eligibility_page_data_eligibility_requirements",
    "page": "funding",
    "section": "pages_funding_eligibility_page_data_eligibility_requirements",
    "title": "Eligibility Requirements",
    "sort_order": 18,
    "content": {
      "text_329": "Paid employment",
      "text_330": "Employer participation",
      "text_331": "Eligible residency",
      "text_332": "Work in England",
      "text_333": "Relevant workplace responsibilities"
    }
  },
  {
    "key": "funding.pages_funding_eligibility_page_data_checker_questions",
    "page": "funding",
    "section": "pages_funding_eligibility_page_data_checker_questions",
    "title": "Checker Questions",
    "sort_order": 19,
    "content": {
      "text_334": "Are you currently in paid employment?",
      "text_335": "Have you been a UK resident for the past 3 years?",
      "text_336": "Is your employer based in England?",
      "text_337": "Do you normally work 30 or more hours per week?",
      "answers_338": "Yes — 30 or more hours",
      "answers_339": "No — between 16 and 29 hours",
      "answers_340": "Less than 16 hours",
      "text_341": "Do you spend at least 50% of your working hours within England?",
      "text_342": "Are you currently enrolled in other government-funded training?",
      "text_343": "Is your employer registered (or willing to register) with the Apprenticeship Service?",
      "text_344": "Which area best describes your interest?",
      "answers_345": "Project Management",
      "answers_346": "Project Controls",
      "answers_347": "Not sure yet"
    }
  },
  {
    "key": "funding.pages_funding_eligibility_page_data_employer_steps",
    "page": "funding",
    "section": "pages_funding_eligibility_page_data_employer_steps",
    "title": "Employer Steps",
    "sort_order": 20,
    "content": {
      "title_348": "Confirm the right programme",
      "text_349": "Identify the employee, their responsibilities, development goals and the most relevant programme.",
      "title_350": "Sign the digital contract",
      "text_351": "Review the complete agreement and confirm the programme arrangements with KBC.",
      "title_352": "Add KBC to the Apprenticeship Service",
      "text_353": "Use your Government Gateway account to add Kent Business College as the training provider.",
      "code_354": "KBC UKPRN · 10093689",
      "title_355": "Continue the application",
      "text_356": "KBC will guide the learner and employer through the remaining assessment and onboarding steps."
    }
  },
  {
    "key": "funding.pages_funding_eligibility_page_data_employer_benefits",
    "page": "funding",
    "section": "pages_funding_eligibility_page_data_employer_benefits",
    "title": "Employer Benefits",
    "sort_order": 21,
    "content": {
      "text_357": "Develop existing talent",
      "text_358": "Address capability gaps",
      "text_359": "Use available funding appropriately",
      "text_360": "Connect learning to work",
      "text_361": "Build longer-term capability"
    }
  },
  {
    "key": "funding.pages_funding_eligibility_page_data_comparison_routes",
    "page": "funding",
    "section": "pages_funding_eligibility_page_data_comparison_routes",
    "title": "Comparison Routes",
    "sort_order": 22,
    "content": {
      "title_362": "Government-funded programme",
      "best_363": "Eligible employees and employers",
      "structure_364": "A complete workplace-based apprenticeship",
      "objective_365": "Broader role-relevant professional capability",
      "examples_366": "Marketing Executive L4, Marketing Manager L6, Associate Project Manager L4, Project Control Professional L6",
      "employer_367": "Employer participation and Apprenticeship Service setup required",
      "title_368": "Kent Business College Fund",
      "best_369": "Eligible learners on applicable KBC programmes",
      "structure_370": "Additional benefits alongside the programme",
      "funding_371": "Funded by KBC",
      "objective_372": "Extra professional value beyond programme completion",
      "examples_373": "Memberships, registration and exams, masterclasses, travel, graduation and progression",
      "employer_374": "Available only with applicable KBC programmes and cohorts",
      "title_375": "IPC Project Controls commercial",
      "best_376": "Professionals or teams needing focused capability",
      "structure_377": "One module, multiple modules or a broader route",
      "funding_378": "Commercial with 50% or 75% IPC support",
      "objective_379": "Flexible specialist Project Controls development",
      "examples_380": "Planning, scheduling, cost, earned value, risk, PMO, reporting and portfolio management",
      "employer_381": "Can be selected for an individual or an employer-led team"
    }
  },
  {
    "key": "funding.pages_funding_eligibility_page_data_faqs",
    "page": "funding",
    "section": "pages_funding_eligibility_page_data_faqs",
    "title": "Faqs",
    "sort_order": 23,
    "content": {
      "text_382": "What is the difference between government funding and the KBC Fund?",
      "text_383": "Government funding supports eligible apprenticeship programme delivery. The KBC Fund is a separate KBC investment in selected benefits outside DfE funding, such as qualifications, memberships, exam fees, masterclasses, travel and graduation.",
      "text_384": "Which KBC programmes can be government funded?",
      "text_385": "Subject to learner, employer and programme eligibility, the funded routes shown here include Marketing Executive Level 4, Marketing Manager Level 6, Associate Project Manager Level 4 and Project Control Professional Level 6.",
      "text_386": "Are professional qualifications included?",
      "text_387": "Applicable qualifications and professional-body support vary by programme. The programme funding tabs explain the qualifications, registrations, memberships and examination support included for each route.",
      "text_388": "Does my employer need to be involved?",
      "text_389": "Yes. A government-funded apprenticeship is workplace based. Your employer must support the programme, confirm relevant responsibilities and complete the required Apprenticeship Service and contractual steps.",
      "text_390": "Do I have to be new to my field to qualify for a funded apprenticeship?",
      "text_391": "No. These are professional-development routes. Experienced professionals can enrol where the programme develops new or expanded capability relevant to their role.",
      "text_392": "Can self-employed professionals access government-funded programmes?",
      "text_393": "No. DfE-funded apprenticeships require paid employment with an eligible employer. IPC-supported Project Controls commercial development may provide another route.",
      "text_394": "Can I access Project Controls without completing the full apprenticeship?",
      "text_395": "Yes. The IPC-supported commercial route allows you to select one module, combine multiple modules or build a broader specialist Project Controls plan.",
      "text_396": "Can I choose only one Project Controls module?",
      "text_397": "What is an IPC bursary and how does it work?",
      "text_398": "The IPC bursary supports eligible professionals accessing specialist Project Controls development. Support of 50% or 75% depends on the selected module, approval and availability.",
      "text_399": "Does the IPC bursary apply to Marketing or Project Management programmes?",
      "text_400": "No. The IPC bursary described on this page applies to eligible commercial Project Controls modules. Other programmes follow their stated DfE and KBC funding arrangements.",
      "text_401": "What do levy payer and non-levy mean?",
      "text_402": "Employers with a payroll over £3 million pay the Apprenticeship Levy. Non-levy employers normally contribute 5% of the training cost, with 95% funded by government, subject to eligibility.",
      "text_403": "How do I know which programme is right?",
      "text_404": "The right route depends on the role, responsibilities, development goals and capability required. Use the checker below, then discuss the result with KBC.",
      "text_405": "Are KBC Fund benefits available to all learners?",
      "text_406": "Not necessarily. Benefits vary by programme and cohort, and selected benefits may be limited to the first 30 eligible learners per applicable cohort.",
      "text_407": "Does my employer need an Apprenticeship Service account?",
      "text_408": "Yes. Employers using a DfE-funded apprenticeship route need an Apprenticeship Service account and must add Kent Business College as their training provider.",
      "text_409": "What if my employer does not have an account yet?",
      "text_410": "The employer can create or access an Apprenticeship Service account using Government Gateway. KBC can guide the employer through the setup steps.",
      "text_411": "What is a UKPRN and where do I use it?",
      "text_412": "A UKPRN is a training provider’s unique reference. Use KBC’s UKPRN 10093689 when adding Kent Business College to your Apprenticeship Service account.",
      "text_413": "Is ChPP status guaranteed?",
      "text_414": "No. KBC can provide applicable preparation and application support, but chartered status is awarded by the relevant professional body and remains subject to its assessment requirements.",
      "text_415": "Who confirms final eligibility?",
      "text_416": "The checker provides an initial indication only. KBC confirms final eligibility after reviewing the learner, employer, role, working pattern, residency, existing training and selected programme."
    }
  },
  {
    "key": "funding.pages_funding_eligibility_page_data_final_routes",
    "page": "funding",
    "section": "pages_funding_eligibility_page_data_final_routes",
    "title": "Final Routes",
    "sort_order": 24,
    "content": {
      "label_417": "Start here",
      "title_418": "Check your eligibility",
      "text_419": "Use the 8-question checker to identify an initial direction.",
      "href_420": "#eligibility-checker",
      "label_421": "For employers",
      "title_422": "Employer setup",
      "text_423": "See the steps to register and start a funded programme.",
      "href_424": "#employer-setup",
      "label_425": "Explore further",
      "title_426": "Programme funding",
      "text_427": "See what applies to each KBC programme.",
      "href_428": "#programme-funding"
    }
  },
  {
    "key": "support.pages_form_page_support_page_support_areas",
    "page": "support",
    "section": "pages_form_page_support_page_support_areas",
    "title": "Support Areas",
    "sort_order": 0,
    "content": {
      "title_001": "Learning access",
      "body_002": "Get help accessing learning platforms, resources and the tools used during your programme.",
      "title_003": "Programme support",
      "body_004": "Ask about teaching, programme activity, progress support or the right team for your enquiry.",
      "title_005": "Safety and wellbeing",
      "body_006": "Raise a concern about safeguarding, wellbeing or support needed to participate safely in learning."
    }
  },
  {
    "key": "support.pages_form_page_support_page_support_page",
    "page": "support",
    "section": "pages_form_page_support_page_support_page",
    "title": "Support Page",
    "sort_order": 1,
    "content": {
      "fallback_title_007": "KBC Support | Kent Business College",
      "fallback_description_008": "Contact Kent Business College for learner, programme, platform, safeguarding and wellbeing support.",
      "text_009": "Help when you need it",
      "text_010": "KBC",
      "text_011": "Support.",
      "text_012": "Tell us what you need help with and our team will direct your enquiry to the right person. Do not include passwords or highly sensitive information.",
      "src_013": "/assets/illustrations/support-data-analytics.svg",
      "alt_014": "Animated illustration representing digital support and data tools",
      "text_015": "How we can help",
      "text_016": "Start with the support you need.",
      "text_017": "Book a session to discuss the support you need with our team.",
      "aria_label_018": "Book a support session",
      "to_019": "/book-session",
      "text_020": "Book a session"
    }
  },
  {
    "key": "employers.pages_employers_page_employers_home_page",
    "page": "employers",
    "section": "pages_employers_page_employers_home_page",
    "title": "Employers Home Page",
    "sort_order": 0,
    "content": {
      "fallback_title_001": "For Employers | Kent Business College",
      "fallback_description_002": "Upskill your workforce with levy-funded apprenticeships and tailored professional development delivered flexibly around your business."
    }
  },
  {
    "key": "employers.pages_employers_components_learner_audie_learner_audience_section",
    "page": "employers",
    "section": "pages_employers_components_learner_audie_learner_audience_section",
    "title": "Learner Audience Section",
    "sort_order": 1,
    "content": {
      "src_001": "/assets/patterns/kbc-horse-growth.png",
      "eyebrow_002": "Why partner with KBC",
      "title_003": "Development that moves your business forward.",
      "description_004": "Invest in your people with recognised qualifications that deliver measurable, on-the-job impact."
    }
  },
  {
    "key": "employers.pages_employers_data_hero_stats",
    "page": "employers",
    "section": "pages_employers_data_hero_stats",
    "title": "Hero Stats",
    "sort_order": 2,
    "content": {
      "label_001": "Levy-funded for levy payers",
      "label_002": "Government co-investment",
      "label_003": "Flexible learning each week"
    }
  },
  {
    "key": "employers.pages_employers_data_learner_audiences",
    "page": "employers",
    "section": "pages_employers_data_learner_audiences",
    "title": "Learner Audiences",
    "sort_order": 3,
    "content": {
      "title_004": "Fill capability gaps",
      "description_005": "Develop project management, controls and marketing skills that directly support your delivery.",
      "title_006": "Retain your talent",
      "description_007": "Invest in your people and strengthen retention with a recognised development pathway.",
      "title_008": "Use your levy",
      "description_009": "Make the most of Apprenticeship Levy funding that might otherwise go unused.",
      "title_010": "Measure the return",
      "description_011": "See tangible workplace impact through evidence-based, work-applied learning."
    }
  },
  {
    "key": "employers.pages_employers_data_learning_steps",
    "page": "employers",
    "section": "pages_employers_data_learning_steps",
    "title": "Learning Steps",
    "sort_order": 4,
    "content": {
      "title_012": "Identify your need",
      "description_013": "Tell us which roles or skills gaps you want to develop, and we'll recommend the right programme.",
      "title_014": "Check your funding",
      "description_015": "Use your Apprenticeship Levy or access 95% government co-investment as a non-levy employer.",
      "title_016": "Onboard your learners",
      "description_017": "We manage enrolment, eligibility checks and onboarding for each employee you nominate.",
      "title_018": "Track real impact",
      "description_019": "Learners apply new skills on the job, with progress visible through structured reporting."
    }
  },
  {
    "key": "employers.pages_employers_data_learner_programmes",
    "page": "employers",
    "section": "pages_employers_data_learner_programmes",
    "title": "Learner Programmes",
    "sort_order": 5,
    "content": {
      "discipline_020": "Project Management",
      "title_021": "Associate Project Manager",
      "duration_022": "12 months + EPA",
      "description_023": "Develop structured project management capability and practical AI application across your delivery teams.",
      "image_024": "/assets/images/learner-home/associate-project-manager.webp",
      "href_025": "/associate-project-manager-level-4",
      "discipline_026": "Project Controls",
      "title_027": "Project Controls Professional",
      "duration_028": "27 months",
      "description_029": "Strengthen planning, cost, risk, PMO and governance capability for complex delivery.",
      "image_030": "/assets/images/learner-home/project-controls.webp",
      "href_031": "/college-of-project-controls-and-project-management",
      "title_032": "Marketing Executive",
      "duration_033": "12 months + EPA",
      "description_034": "Build campaign delivery capability and professional behaviours across your marketing function.",
      "image_035": "/assets/images/learner-home/marketing-executive.webp",
      "href_036": "/marketing-executive-level-4",
      "title_037": "Marketing Manager",
      "duration_038": "18 months + EPA",
      "description_039": "Develop strategic marketing leadership, brand and campaign management across your organisation.",
      "image_040": "/assets/images/learner-home/marketing-manager.webp",
      "href_041": "/marketing-manager-level-6"
    }
  },
  {
    "key": "employers.pages_employers_data_dfe_benefits",
    "page": "employers",
    "section": "pages_employers_data_dfe_benefits",
    "title": "Dfe Benefits",
    "sort_order": 6,
    "content": {
      "text_042": "Tutoring services",
      "text_043": "Learning materials",
      "text_044": "Apprenticeship certificate"
    }
  },
  {
    "key": "employers.pages_employers_data_kbc_fund_benefits",
    "page": "employers",
    "section": "pages_employers_data_kbc_fund_benefits",
    "title": "Kbc Fund Benefits",
    "sort_order": 7,
    "content": {
      "text_045": "Professional exam fees",
      "text_046": "Registration fees",
      "text_047": "APM ChPP application & preparation support where applicable",
      "text_048": "Workshop travel",
      "text_049": "Graduation rewards",
      "text_050": "No hidden costs",
      "text_051": "Professional memberships",
      "text_052": "Relevant professional exam support",
      "text_053": "ICostE / Certified Professional Cost Engineer pathway support where applicable",
      "text_054": "Graduation ceremony",
      "text_055": "Laptop prize where applicable"
    }
  },
  {
    "key": "employers.pages_employers_data_ipc_benefits",
    "page": "employers",
    "section": "pages_employers_data_ipc_benefits",
    "title": "Ipc Benefits",
    "sort_order": 8,
    "content": {
      "text_056": "Advanced Project Controls modules",
      "text_057": "Planning & scheduling",
      "text_058": "Cost management & risk analysis"
    }
  },
  {
    "key": "employers.pages_employers_data_learner_support",
    "page": "employers",
    "section": "pages_employers_data_learner_support",
    "title": "Learner Support",
    "sort_order": 9,
    "content": {
      "title_059": "Dedicated account support",
      "description_060": "A single point of contact for enrolment and progression.",
      "title_061": "Flexible delivery",
      "description_062": "Live online sessions designed around your working patterns.",
      "title_063": "Progress reporting",
      "description_064": "Clear visibility of learner engagement and achievement.",
      "title_065": "Line manager guidance",
      "description_066": "Support for managers to coach learners effectively on the job."
    }
  },
  {
    "key": "employers.pages_employers_data_tutoring_benefits",
    "page": "employers",
    "section": "pages_employers_data_tutoring_benefits",
    "title": "Tutoring Benefits",
    "sort_order": 10,
    "content": {
      "text_067": "Live interactive learning",
      "text_068": "Session recordings",
      "text_069": "Catch-up support",
      "text_070": "One-to-one tutoring"
    }
  },
  {
    "key": "employers.pages_employers_data_masterclass_benefits",
    "page": "employers",
    "section": "pages_employers_data_masterclass_benefits",
    "title": "Masterclass Benefits",
    "sort_order": 11,
    "content": {
      "text_071": "KBC professional Masterclasses",
      "text_072": "London Masterclass events",
      "text_073": "Networking opportunities",
      "text_074": "Optional UK in-person workshops",
      "text_075": "Professional community"
    }
  },
  {
    "key": "employers.pages_employers_data_learner_stories",
    "page": "employers",
    "section": "pages_employers_data_learner_stories",
    "title": "Learner Stories",
    "sort_order": 12,
    "content": {
      "quote_076": "The support and structured approach have helped our people apply new project management capability directly to the organisation's work.",
      "name_077": "St John Ambulance",
      "role_078": "Workforce development · National employer",
      "quote_079": "KBC's programmes gave our project controls professionals a clear, practical framework to strengthen planning and governance on major projects.",
      "name_080": "Balfour Beatty",
      "role_081": "Project delivery · Infrastructure",
      "quote_082": "A flexible, employer-focused partner that made levy-funded development straightforward and delivered real, visible impact across our teams.",
      "name_083": "Kent County Council",
      "role_084": "Talent development · Public sector",
      "quote_085": "KBC's marketing programmes gave our teams a structured, evidence-based approach to campaign delivery and brand strategy.",
      "name_086": "Shell Energy",
      "role_087": "Marketing capability · Energy sector",
      "quote_088": "Flexible, learner-centred delivery that fitted around our operations and produced genuinely capable associate project managers.",
      "name_089": "Wincanton",
      "role_090": "Logistics operations · Supply chain",
      "quote_091": "A responsive partner that made levy-funded development easy to roll out and delivered visible capability gains across the business.",
      "name_092": "Mercedes-Benz",
      "role_093": "Talent development · Automotive"
    }
  },
  {
    "key": "employers.pages_employers_data_trustpilot_reviews",
    "page": "employers",
    "section": "pages_employers_data_trustpilot_reviews",
    "title": "Trustpilot Reviews",
    "sort_order": 13,
    "content": {
      "quote_094": "Outstanding support from start to finish. The funding route was clear and my adviser was genuinely helpful.",
      "name_095": "Alex T.",
      "quote_096": "The project management programme gave me practical skills I use every day. Highly recommend KBC.",
      "name_097": "Priya K.",
      "quote_098": "Great learning experience. The masterclasses in London were a real highlight.",
      "name_099": "Marcus W."
    }
  },
  {
    "key": "employers.pages_employers_data_recognition_logos",
    "page": "employers",
    "section": "pages_employers_data_recognition_logos",
    "title": "Recognition Logos",
    "sort_order": 14,
    "content": {
      "name_100": "CIM",
      "description_101": "Professional body",
      "src_102": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/356aeb204f224be68e62727bcbbb1c75.webp",
      "name_103": "PMI",
      "description_104": "Professional body",
      "src_105": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/c2cd9e7a9c4842ab822c0aac16ffa061.webp",
      "name_106": "APM",
      "description_107": "Professional body",
      "src_108": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/bb930e8a6230490b850425c0f6643aab.webp",
      "name_109": "APMG",
      "description_110": "Qualification pathway",
      "src_111": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/5c4f7558699844a28d0d1fbf308b7b25.webp",
      "name_112": "IPC",
      "description_113": "Professional body",
      "src_114": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/cfc267af22a941a4bf58b79926482616.png",
      "name_115": "ICostE",
      "description_116": "Professional body",
      "src_117": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/8ba3636c4a53491f86912fe3fa597438.webp",
      "name_118": "ChPP",
      "description_119": "Chartered pathway",
      "name_120": "CaSA",
      "description_121": "Professional body"
    }
  },
  {
    "key": "employers.pages_employers_data_faqs",
    "page": "employers",
    "section": "pages_employers_data_faqs",
    "title": "Faqs",
    "sort_order": 15,
    "content": {
      "question_122": "How does the Apprenticeship Levy work?",
      "answer_123": "If your annual pay bill exceeds £3 million, you pay the levy and can use your funds to cover 100% of apprenticeship training costs. Non-levy employers pay a 5% co-investment, with the government funding the remaining 95%.",
      "question_124": "Can my existing employees do an apprenticeship?",
      "answer_125": "Yes. Apprenticeships can develop existing employees as well as new starters, provided they meet the eligibility criteria and the programme supports the knowledge, skills and behaviours required in their role.",
      "question_126": "How much time do learners need away from work?",
      "answer_127": "Learners complete around 8.5 hours of structured learning each week during paid working hours, combining live classes, guided study and practical workplace application.",
      "question_128": "Who handles enrolment and eligibility?",
      "answer_129": "KBC manages enrolment, eligibility checks and onboarding, working with your nominated contact and each employee throughout the process.",
      "question_130": "Can the programme be tailored to my organisation?",
      "answer_131": "Delivery and workplace activity can be aligned with your organisation's priorities and working patterns while maintaining the requirements of the apprenticeship standard.",
      "question_132": "How do I get started?",
      "answer_133": "Speak to the KBC team about your skills needs, workforce and funding position. We will recommend the right route and guide you through the next steps."
    }
  },
  {
    "key": "employers.pages_employers_components_learner_faq_s_learner_faq_section",
    "page": "employers",
    "section": "pages_employers_components_learner_faq_s_learner_faq_section",
    "title": "Learner Faq Section",
    "sort_order": 16,
    "content": {
      "eyebrow_001": "Questions",
      "title_002": "Frequently asked questions."
    }
  },
  {
    "key": "employers.pages_employers_components_learner_final_learner_final_cta",
    "page": "employers",
    "section": "pages_employers_components_learner_final_learner_final_cta",
    "title": "Learner Final Cta",
    "sort_order": 17,
    "content": {
      "src_001": "/assets/patterns/kbc-horse-growth.png",
      "text_002": "Partner with us",
      "text_003": "Let's build your team's future together.",
      "text_004": "Speak to our team about your skills needs and funding position, and we'll recommend the right workforce development plan.",
      "to_005": "/contact",
      "text_006": "Speak to our team",
      "to_007": "/employer-agreement",
      "text_008": "Employer agreement"
    }
  },
  {
    "key": "employers.pages_employers_components_learner_fundi_learner_funding_section",
    "page": "employers",
    "section": "pages_employers_components_learner_fundi_learner_funding_section",
    "title": "Learner Funding Section",
    "sort_order": 18,
    "content": {
      "src_001": "/assets/patterns/kbc-gold-leaf.png",
      "eyebrow_002": "Funding",
      "title_003": "Funded to grow your workforce.",
      "description_004": "Government funding covers the majority of training costs, whatever the size of your organisation. Commercial options are available for specialist development.",
      "text_005": "Levy-paying employers",
      "text_006": "If your annual pay bill exceeds £3 million, you pay the Apprenticeship Levy and can use those funds to cover the full cost of training.",
      "text_007": "100%",
      "text_008": "Funded through your Apprenticeship Levy",
      "text_009": "Non-levy employers",
      "text_010": "If your pay bill is under £3 million, the government funds 95% of the training cost and you contribute just 5% as a co-investment.",
      "text_011": "95%",
      "text_012": "Government co-investment · 5% employer contribution",
      "text_013": "IPC Bursary",
      "text_014": "For commercial Project Controls modules, the IPC bursary reduces your investment with 50% or 75% support depending on the selected module.",
      "text_015": "50%–75%",
      "text_016": "Bursary support for commercial Project Controls modules",
      "to_017": "/funding-eligibility",
      "text_018": "Explore funding in detail"
    }
  },
  {
    "key": "employers.pages_employers_components_learner_hero__learner_hero_image",
    "page": "employers",
    "section": "pages_employers_components_learner_hero__learner_hero_image",
    "title": "Learner Hero Image",
    "sort_order": 19,
    "content": {
      "text_001": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/afb30d121ef2443fb6f5661f4f5c285f.webp"
    }
  },
  {
    "key": "employers.pages_employers_components_learner_hero__learner_hero_section",
    "page": "employers",
    "section": "pages_employers_components_learner_hero__learner_hero_section",
    "title": "Learner Hero Section",
    "sort_order": 20,
    "content": {
      "text_002": "For Employers",
      "text_003": "Build the capability",
      "text_004": "your business needs.",
      "text_005": "Upskill your workforce with levy-funded apprenticeships and tailored professional development — delivered flexibly around your business, with clear, measurable impact."
    }
  },
  {
    "key": "employers.pages_employers_components_learner_hero__label",
    "page": "employers",
    "section": "pages_employers_components_learner_hero__label",
    "title": "Label",
    "sort_order": 21,
    "content": {
      "text_006": "Explore workforce solutions",
      "text_007": "Partner with us"
    }
  },
  {
    "key": "employers.pages_employers_components_learner_how_s_learner_how_section",
    "page": "employers",
    "section": "pages_employers_components_learner_how_s_learner_how_section",
    "title": "Learner How Section",
    "sort_order": 22,
    "content": {
      "src_001": "/assets/patterns/kbc-ibis-wreath.png",
      "eyebrow_002": "How it works",
      "title_003": "A straightforward path to a stronger team."
    }
  },
  {
    "key": "employers.pages_employers_components_learner_progr_learner_programmes_section",
    "page": "employers",
    "section": "pages_employers_components_learner_progr_learner_programmes_section",
    "title": "Learner Programmes Section",
    "sort_order": 23,
    "content": {
      "eyebrow_001": "Workforce solutions",
      "title_002": "Programmes for your people.",
      "description_003": "Four DfE-funded programmes across project management, project controls and marketing, each leading to a recognised qualification.",
      "text_004": "Explore programme",
      "to_005": "/programmes",
      "text_006": "View all programmes"
    }
  },
  {
    "key": "employers.pages_employers_components_learner_suppo_learner_support_section",
    "page": "employers",
    "section": "pages_employers_components_learner_suppo_learner_support_section",
    "title": "Learner Support Section",
    "sort_order": 24,
    "content": {
      "eyebrow_001": "Partnership support",
      "title_002": "A partner, not just a provider."
    }
  },
  {
    "key": "contact.pages_form_page_contact_page_contact_details",
    "page": "contact",
    "section": "pages_form_page_contact_page_contact_details",
    "title": "Contact Details",
    "sort_order": 0,
    "content": {
      "title_001": "Call us",
      "detail_002": "+44 (0)1622 958955",
      "href_003": "tel:+441622958955",
      "title_004": "Our office",
      "detail_005": "29–37 Maidstone Innovation Centre",
      "supporting_006": "Gidds Pond Way, Weavering, Maidstone ME14 5FY",
      "href_007": "https://maps.google.com/?q=29-37+Maidstone+Innovation+Centre+Gidds+Pond+Way+Weavering+Maidstone+ME14+5FY",
      "title_008": "Email us",
      "detail_009": "office@kentbusinesscollege.org",
      "supporting_010": "Send an enquiry at any time",
      "href_011": "mailto:office@kentbusinesscollege.org"
    }
  },
  {
    "key": "contact.pages_form_page_contact_page_contact_directory",
    "page": "contact",
    "section": "pages_form_page_contact_page_contact_directory",
    "title": "Contact Directory",
    "sort_order": 1,
    "content": {
      "title_012": "Admissions Department",
      "description_013": "For enquiries about the application process, programme eligibility and enrolment.",
      "person_014": "Alice, Enrolment Officer",
      "response_015": "Within 24 hours",
      "title_016": "Student & Academic Support",
      "description_017": "For current learners needing assistance with registration, learning or support services.",
      "person_018": "Ella, Coordinator",
      "response_019": "Same day",
      "title_020": "IT Support",
      "description_021": "For technical assistance with online learning platforms, accounts and digital resources.",
      "person_022": "Fouda, IT Admin",
      "response_023": "Same day for urgent issues; within 24 hours as standard"
    }
  },
  {
    "key": "contact.pages_form_page_contact_page_contact_faqs",
    "page": "contact",
    "section": "pages_form_page_contact_page_contact_faqs",
    "title": "Contact Faqs",
    "sort_order": 2,
    "content": {
      "question_024": "What are your office hours?",
      "answer_025": "Our main office is open Monday through Friday from 8:30 AM to 5:00 PM, and Saturday from 9:00 AM to 1:00 PM. We are closed on Sundays and public holidays.",
      "question_026": "How quickly can I expect a response?",
      "answer_027": "We aim to respond to all inquiries within 24-48 hours during business days. For urgent matters, please call our main office or use the live chat feature during business hours.",
      "question_028": "Can I schedule a campus tour?",
      "answer_029": "Yes, we offer guided campus tours for prospective students and their families. Please contact our Admissions Department to schedule a tour at a time convenient for you.",
      "question_030": "How do I submit documents securely?",
      "answer_031": "You can submit documents through our secure document upload portal accessible from this page. Alternatively, you can email encrypted documents to the relevant department or bring physical copies to our office.",
      "question_032": "Is there parking available for visitors?",
      "answer_033": "Yes, we have designated visitor parking spaces available at our main campus. Please follow the signs for visitor parking upon arrival. Parking is free for the first 2 hours."
    }
  },
  {
    "key": "contact.pages_form_page_contact_page_additional_contact_options",
    "page": "contact",
    "section": "pages_form_page_contact_page_additional_contact_options",
    "title": "Additional Contact Options",
    "sort_order": 3,
    "content": {
      "title_034": "Request an info session",
      "description_035": "Prefer to speak with someone directly? Ask one of our representatives to call you back at a suitable time.",
      "title_036": "Live chat",
      "description_037": "Get immediate assistance through live chat during business hours for quick questions.",
      "title_038": "Document submission",
      "description_039": "Need to submit documents securely? Ask for the correct upload portal for your application or form."
    }
  },
  {
    "key": "contact.pages_form_page_contact_page_contact_page",
    "page": "contact",
    "section": "pages_form_page_contact_page_contact_page",
    "title": "Contact Page",
    "sort_order": 4,
    "content": {
      "fallback_title_040": "Contact Us | Kent Business College",
      "fallback_description_041": "Contact Kent Business College about programmes, apprenticeships, employer support and professional learning.",
      "text_042": "Contact KBC",
      "text_043": "Let’s start a",
      "text_044": "conversation.",
      "text_045": "Whether you are exploring a programme, developing your team or looking for learner support, our team will help you find the right next step.",
      "src_046": "/assets/illustrations/contact-support.svg",
      "alt_047": "Customer support agent helping with an enquiry",
      "aria_label_048": "Kent Business College contact form",
      "src_049": "/assets/logos/kbc-logo.png",
      "alt_050": "Kent Business College",
      "text_051": "Contact form",
      "text_052": "Contact KBC",
      "aria_label_053": "Kent Business College Contact Us Page",
      "title_054": "Kent Business College contact form",
      "aria_label_055": "Kent Business College contact details",
      "text_056": "Office hours",
      "text_057": "Monday–Friday:",
      "text_058": "8:30 AM – 5:00 PM",
      "text_059": "Saturday:",
      "text_060": "9:00 AM – 1:00 PM",
      "text_061": "Sunday:",
      "text_062": "Closed",
      "src_063": "https://www.google.com/maps?q=Maidstone%20Innovation%20Centre%2C%20Gidds%20Pond%20Way%2C%20Weavering%2C%20Maidstone%20ME14%205FY&output=embed",
      "title_064": "Map showing Kent Business College at Maidstone Innovation Centre",
      "text_065": "Find the right team",
      "text_066": "Contact Directory",
      "text_067": "Connect directly with the department that can best assist with your enquiry.",
      "text_068": "Response time:",
      "eyebrow_069": "Quick answers",
      "title_070": "Frequently Asked Questions",
      "text_071": "More support",
      "text_072": "Additional Ways to Connect"
    }
  }
]
''')


def import_pages(apps, schema_editor):
    Page = apps.get_model("cms", "ContentPage")
    Entry = apps.get_model("cms", "ContentEntry")
    Revision = apps.get_model("cms", "ContentRevision")
    alias = schema_editor.connection.alias
    identities = {}
    for key, metadata in PAGES.items():
        identities[key], _ = Page.objects.using(alias).get_or_create(key=key, defaults=metadata)
        Entry.objects.using(alias).filter(page=key, content_page__isnull=True).update(content_page=identities[key])
    now = timezone.now()
    for item in ENTRIES:
        defaults = {**item, "content_page": identities[item["page"]], "published_content": item["content"], "published_at": now}
        key = defaults.pop("key")
        entry, created = Entry.objects.using(alias).get_or_create(key=key, defaults=defaults)
        if created:
            Revision.objects.using(alias).create(entry=entry, version=entry.version, action="import", content=entry.content, published_content=entry.published_content, is_active=True)


class Migration(migrations.Migration):
    dependencies = [("cms", "0003_contentpage_contententry_content_page")]
    operations = [migrations.RunPython(import_pages, migrations.RunPython.noop)]
