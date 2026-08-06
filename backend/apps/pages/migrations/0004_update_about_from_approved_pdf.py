from importlib import import_module

from django.db import migrations


PAGE_MARKER = "seed:who-we-are:v1"

SECTIONS = [
    (10, "aboutHero", {
        "eyebrow": "About Kent Business College",
        "heading": "Professional learning that turns knowledge into",
        "highlight": "workplace capability.",
        "body": "Kent Business College is a UK education and training provider delivering professionally focused apprenticeships and development pathways across project management, project controls, marketing and leadership.",
        "image": {"src": "/assets/images/figma-home/hero-group.png", "alt": "Professionals learning together at Kent Business College"},
        "glance": [
            {"id": "established", "label": "Established", "value": "United Kingdom, 2016"},
            {"id": "provider-reference", "label": "Provider reference", "value": "UKPRN 10093689"},
            {"id": "specialist-colleges", "label": "Specialist colleges", "value": "Project, Marketing and Leadership"},
            {"id": "learning-model", "label": "Learning model", "value": "Work-based, live online and professionally supported"},
        ],
        "stats": [
            {"id": "students", "value": "500+", "label": "Students enrolled"},
            {"id": "employers", "value": "150+", "label": "Employer partners"},
            {"id": "graduates", "value": "250+", "label": "Successful graduates"},
            {"id": "established", "value": "2016", "label": "Established in the UK"},
        ],
        "primaryCta": {"label": "Explore Our College", "href": "/colleges"},
        "secondaryCta": {"label": "Book an Information Session", "href": "/contact"},
    }),
    (20, "aboutOverview", {
        "eyebrow": "Who we are",
        "heading": "Built for people already doing the work and organisations that want capability to move forward.",
        "description": "Our role is to connect rigorous knowledge with practical application. We design learning around real responsibilities, employer priorities, professional standards and the confidence people need to progress.",
        "items": [
            {"id": "theory-practice", "number": "01", "title": "Theory connected to practice", "body": "Academic and professional knowledge is translated into decisions, tools and workplace evidence that learners can use in their roles."},
            {"id": "employer-partnership", "number": "02", "title": "Employer partnership", "body": "Learning is structured around organisational needs, line-manager support and measurable capability development."},
            {"id": "professional-progression", "number": "03", "title": "Professional progression", "body": "Programmes connect apprenticeships with relevant qualifications, memberships and professional pathways where the programme allows."},
        ],
    }),
    (40, "aboutDomains", {
        "eyebrow": "One KBC standard",
        "heading": "Distinct disciplines. Connected professional development.",
        "description": "Four specialist domains organise our learning around the capabilities professionals use at work, while one college standard keeps teaching, support and progression consistent.",
        "items": [
            {"id": "project-management", "number": "01", "initials": "PM", "title": "Project Management", "body": "Build practical delivery, governance, stakeholder and decision-making capability for professionals working across projects and programmes.", "offerings": ["Associate Project Manager Level 4", "Workplace application and professional progression"], "linkLabel": "Explore project management", "href": "/programmes", "tone": "navy"},
            {"id": "project-controls", "number": "02", "initials": "PC", "title": "Project Controls", "body": "Develop planning, cost, risk, performance and controls capability for complex project environments and evidence-led decision making.", "offerings": ["Project Control Professional Level 6", "Professional pathways and applied controls practice"], "linkLabel": "Explore project controls", "href": "/programmes", "tone": "teal"},
            {"id": "marketing", "number": "03", "initials": "MK", "title": "Marketing", "body": "Build commercially focused marketing capability from campaign execution through to strategic leadership and professional recognition.", "offerings": ["Marketing Executive Level 4", "Marketing Manager Level 6"], "linkLabel": "Explore marketing", "href": "/programmes", "tone": "coral"},
            {"id": "leadership", "number": "04", "initials": "LS", "title": "Leadership & Strategy", "body": "Strengthen strategic thinking, leadership, management and organisational decision-making for professionals progressing towards senior responsibility.", "offerings": ["Diploma Level 7 in Strategy and Leadership", "Strategic management and applied leadership"], "linkLabel": "Explore leadership", "href": "/programmes", "tone": "plum"},
        ],
    }),
    (50, "aboutLearning", {
        "eyebrow": "How learning works", "heading": "Designed around working professionals.",
        "description": "Learning combines structured teaching, workplace application, coaching and digital support so progress can continue alongside professional responsibilities.",
        "steps": [
            {"id": "learn", "number": "01", "title": "Learn live and revisit", "body": "Join live online teaching and use recordings, guided study and learning materials to review key ideas at a practical pace."},
            {"id": "apply", "number": "02", "title": "Apply learning at work", "body": "Connect learning to genuine responsibilities, projects, campaigns and organisational priorities rather than separating study from practice."},
            {"id": "support", "number": "03", "title": "Receive personal support", "body": "Use one-to-one tutoring, feedback, coaching, learner dashboards and structured reviews to stay confident and on track."},
            {"id": "recognition", "number": "04", "title": "Build recognition", "body": "Work towards apprenticeship outcomes and relevant professional qualifications or membership pathways where confirmed for the programme."},
        ],
    }),
    (60, "aboutSupport", {
        "eyebrow": "More than a qualification", "heading": "Support for the whole professional journey.",
        "description": "KBC's learner experience is designed to support wellbeing, career confidence, professional recognition and long-term development.",
        "items": [
            {"id": "wellbeing", "title": "Wellbeing & learner support", "body": "Practical tools and services that support learners personally, academically and professionally.", "features": ["Benenden Health private healthcare support", "Mental wellbeing self-assessment tools", "AI-powered Learning Management System", "Learner progress dashboards", "Hard-copy and digital learning materials"]},
            {"id": "career", "title": "Know yourself & build your career", "body": "Structured insight to help learners understand strengths, interests and future professional direction.", "features": ["Personality-traits assessment", "RAISEC career-interest test", "Job-fit and career-fit assessments", "Personal development dashboards", "Career-pathway guidance"]},
            {"id": "network", "title": "Recognition & professional network", "body": "Opportunities to connect learning with professional bodies, events and a stronger professional profile.", "features": ["Graduation ceremony", "London Masterclass events", "Programme-linked professional memberships", "Club memberships and networking", "Professional-profile development"]},
        ],
    }),
    (70, "aboutPurpose", {
        "eyebrow": "Our purpose", "heading": "Vision, mission and values.",
        "vision": {"label": "Our vision", "title": "Professional education with practical influence.", "body": "To be recognised for translating academic research and professional knowledge into practical strategies that support innovation, sustainable growth and continuous development for individuals and organisations."},
        "mission": {"label": "Our mission", "title": "Bridge knowledge and real-world application.", "body": "To work with employers and professionals through apprenticeships, vocational training and specialist development that builds confident leaders, capable practitioners and meaningful workplace outcomes."},
    }),
    (80, "aboutValues", {
        "eyebrow": "Our values", "heading": "Principles that connect our institutional ambition with the day-to-day experience of learners and employers.",
        "items": [
            {"id": "empowering-futures", "number": "01", "title": "Empowering futures", "body": "Education, targeted training and continuous development that help people and organisations progress."},
            {"id": "reducing-footprint", "number": "02", "title": "Reducing footprint", "body": "Digital-first learning and responsible practices that support a more sustainable approach to delivery and operations."},
            {"id": "strengthening-partnerships", "number": "03", "title": "Strengthening partnerships", "body": "Collaborative relationships with employers, specialists and communities that create lasting mutual value."},
        ],
    }),
    (90, "aboutTimeline", {
        "eyebrow": "Our story", "heading": "From consultancy roots to professional college.",
        "description": "The KBC story brings together a foundation in evidence-based professional practice and a growing commitment to apprenticeship and workforce development.",
        "items": [
            {"id": "beginning", "year": "2016", "title": "The beginning", "body": "The organisation was established in the UK as IBIS Consultancy by professionals with expertise across business, marketing, strategy, leadership, project management, engineering and project controls."},
            {"id": "growth", "year": "2016-2024", "title": "Growth in specialist expertise", "body": "IBIS developed professional publications, evidence-based frameworks, methodologies, performance dashboards, PMO and TMO capability and customised management tools."},
            {"id": "education", "year": "2024", "title": "Educational expansion", "body": "The organisation expanded into apprenticeship delivery across project controls, project management and marketing, extending its practical knowledge into structured professional development."},
            {"id": "transformation", "year": "June 2024 onward", "title": "Kent Business College", "body": "The evolution into Kent Business College created a stronger institutional identity, combining specialist roots with funded learning, professional pathways and employer partnership."},
        ],
    }),
    (100, "aboutIdentity", {
        "eyebrow": "Symbolism & identity", "heading": "Wisdom balanced with forward momentum.",
        "description": "Our identity connects the contemplative values of the original IBIS legacy with the strength, energy and empowerment represented by the Kent horse.",
        "items": [
            {"id": "ibis-legacy", "symbol": "I", "title": "The IBIS legacy", "body": "Wisdom, writing, knowledge, deep thinking and inspiration - the values that shaped our specialist foundations."},
            {"id": "kent-horse", "symbol": "K", "title": "The Kent horse", "body": "Strength, movement, confidence and empowerment - the qualities that express our direction as a professional college."},
        ],
    }),
    (110, "aboutImpact", {
        "eyebrow": "Our impact", "heading": "Progress measured through people and partnerships.",
        "description": "A concise view of the institutional structure behind KBC's professional learning offer.",
        "stats": [
            {"id": "ukprn", "value": "10093689", "label": "UK Provider Reference Number"},
            {"id": "colleges", "value": "3", "label": "Specialist colleges"},
            {"id": "disciplines", "value": "4", "label": "Professional disciplines"},
            {"id": "levels", "value": "4-7", "label": "Current programme levels"},
        ],
    }),
    (120, "aboutExperts", {
        "eyebrow": "Professional leadership", "heading": "Expertise that keeps learning relevant.",
        "description": "Experienced practitioners and academics connect professional standards, organisational experience and applied learning.",
        "cta": {"label": "View expert profiles", "href": "/our-experts"},
    }),
    (130, "aboutJourneys", {
        "eyebrow": "How we can help", "heading": "One college. Two connected journeys.",
        "description": "Professional development works best when learner ambition and employer capability needs are considered together.",
        "items": [
            {"id": "learners", "audience": "For learners", "title": "Build confidence, recognition and direction.", "body": "Explore programmes that connect workplace experience with structured learning, personal support and recognised professional pathways.", "cta": {"label": "Explore programmes", "href": "/programmes"}},
            {"id": "employers", "audience": "For employers", "title": "Develop capability inside your organisation.", "body": "Use funded professional learning to develop existing employees, strengthen specialist capability and connect development to real organisational priorities.", "cta": {"label": "Discuss your workforce needs", "href": "/employer-agreement"}},
        ],
    }),
    (140, "aboutPartners", {
        "eyebrow": "Partners in success", "heading": "Connected to organisations across the UK.",
        "description": "Our wider employer and professional network helps keep learning relevant to real roles, teams and sectors.",
        "items": [
            {"id": "watts", "name": "Watts"}, {"id": "virtus", "name": "VIRTUS"},
            {"id": "shell", "name": "Shell"}, {"id": "wincanton", "name": "Wincanton"},
            {"id": "bmt", "name": "BMT"}, {"id": "mercedes-benz", "name": "Mercedes-Benz"},
            {"id": "university-of-hull", "name": "University of Hull"}, {"id": "indeed-flex", "name": "Indeed Flex"},
        ],
        "cta": {"label": "View our partners", "href": "/our-partners"},
    }),
    (150, "aboutFinalCta", {
        "eyebrow": "Take the next step", "heading": "Build the skills, confidence and capability to move forward.",
        "body": "Whether you are advancing your career, developing your team or exploring apprenticeship opportunities, our team can help you identify the right route.",
        "primaryCta": {"label": "Apply now", "href": "/employer-agreement"},
        "secondaryCta": {"label": "Book an information session", "href": "/contact"},
    }),
]


EXPERTS = {
    "stephen-jenner": {
        "name": "Dr. Stephen Jenner",
        "job_title": "Managing Portfolio Specialist",
        "bio": "Former senior UK civil servant with portfolio, benefits-management and cross-government programme experience.",
    },
    "ray-mead": {
        "name": "Dr. Ray Maed",
        "job_title": "Project Management Consultant",
        "bio": "A project, programme and portfolio specialist with extensive experience in sustainable change and strategic execution.",
    },
    "amgad-badewi": {
        "name": "Dr. Amgad Badewi",
        "job_title": "Project Management Specialist",
        "bio": "An academic and practitioner in project and programme management, focused on professional practice and applied development.",
    },
}


def update_about(apps, schema_editor):
    Page = apps.get_model("pages", "Page")
    PageSection = apps.get_model("pages", "PageSection")
    Person = apps.get_model("people", "Person")
    SEORecord = apps.get_model("seo", "SEORecord")
    ContentType = apps.get_model("contenttypes", "ContentType")

    page = Page.objects.filter(slug="who-we-are", legacy_source_id=PAGE_MARKER).first()
    if page is None:
        return

    approved_orders = {sort_order for sort_order, _, _ in SECTIONS}
    PageSection.objects.filter(page=page).exclude(sort_order__in=approved_orders).delete()
    for sort_order, section_type, data in SECTIONS:
        PageSection.objects.update_or_create(
            page=page,
            sort_order=sort_order,
            defaults={"section_type": section_type, "data": data, "is_enabled": True, "status": "published", "published_at": page.published_at},
        )

    page.title = "Who We Are"
    page.summary = "Professional learning that turns knowledge into workplace capability."
    page.save(update_fields=["title", "summary", "updated_at"])

    content_type = ContentType.objects.filter(app_label="pages", model="page").first()
    if content_type:
        SEORecord.objects.filter(content_type=content_type, object_id=page.pk).update(
            title="Who We Are | Kent Business College",
            description="Discover Kent Business College's professional learning model, specialist disciplines, learner support, purpose, story, leadership and employer partnerships.",
            open_graph_title="Who We Are | Kent Business College",
            open_graph_description="Professional learning that turns knowledge into workplace capability.",
        )

    for slug, values in EXPERTS.items():
        Person.objects.filter(slug=slug, legacy_source_id=PAGE_MARKER).update(**values)


def reverse_update(apps, schema_editor):
    Page = apps.get_model("pages", "Page")
    PageSection = apps.get_model("pages", "PageSection")
    Person = apps.get_model("people", "Person")
    previous = import_module("apps.pages.migrations.0003_seed_who_we_are")
    page = Page.objects.filter(slug="who-we-are", legacy_source_id=PAGE_MARKER).first()
    if page is None:
        return
    previous_orders = {sort_order for sort_order, _, _ in previous.SECTIONS}
    PageSection.objects.filter(page=page).exclude(sort_order__in=previous_orders).delete()
    for sort_order, section_type, data in previous.SECTIONS:
        PageSection.objects.update_or_create(
            page=page,
            sort_order=sort_order,
            defaults={"section_type": section_type, "data": data, "is_enabled": True, "status": "published", "published_at": page.published_at},
        )
    Person.objects.filter(slug="stephen-jenner", legacy_source_id=PAGE_MARKER).update(name="Dr. Stephen Jenner", job_title="Managing Portfolio Specialist", bio="")
    Person.objects.filter(slug="ray-mead", legacy_source_id=PAGE_MARKER).update(name="Dr. Ray Mead", job_title="Project Management Consultant", bio="")
    Person.objects.filter(slug="amgad-badewi", legacy_source_id=PAGE_MARKER).update(name="Dr. Amgad Badewi", job_title="Project Management Specialist", bio="")


class Migration(migrations.Migration):
    dependencies = [("pages", "0003_seed_who_we_are"), ("people", "0002_initial"), ("seo", "0001_initial")]
    operations = [migrations.RunPython(update_about, reverse_update)]
