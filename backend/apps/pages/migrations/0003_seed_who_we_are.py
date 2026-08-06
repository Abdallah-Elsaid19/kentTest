from django.db import migrations
from django.utils import timezone


PAGE_MARKER = "seed:who-we-are:v1"


SECTIONS = [
    (10, "aboutHero", {
        "eyebrow": "Who we are", "heading": "Knowledge that moves", "highlight": "people and organisations forward.",
        "body": "Kent Business College turns rigorous academic thinking into practical professional capability, helping people apply learning confidently in the workplace.",
        "image": {"src": "/assets/images/figma-home/hero-group.png", "alt": "Professionals learning together at Kent Business College"},
        "badge": {"label": "Established", "value": "2016"},
        "primaryCta": {"label": "Explore our programmes", "href": "/programmes"},
        "secondaryCta": {"label": "Meet our experts", "href": "/our-experts"},
    }),
    (20, "aboutOverview", {
        "eyebrow": "Kent Business College", "heading": "Built to bridge academic insight and real-world application.",
        "body": [
            "Kent Business College was established in 2016 by professors from British universities, originally operating as IBIS Consultancy.",
            "Today, KBC combines education, coaching and employer partnership to develop confident professionals in project management, project controls, marketing, leadership and strategy.",
        ],
        "details": [
            {"id": "company-number", "label": "Company number", "value": "10367575"}, {"id": "ukprn", "label": "UKPRN", "value": "10093689"},
            {"id": "established", "label": "Established", "value": "2016"}, {"id": "location", "label": "Based in", "value": "Maidstone, Kent"},
        ],
        "stats": [{"id": "years", "value": "8+", "label": "years of excellence"}, {"id": "domains", "value": "4", "label": "professional domains"}],
    }),
    (30, "aboutPrinciples", {
        "eyebrow": "Our principles", "heading": "A practical standard for professional education.",
        "items": [
            {"id": "evidence", "number": "01", "title": "Evidence before assumption", "body": "Learning is grounded in research, recognised frameworks and disciplined professional judgement."},
            {"id": "application", "number": "02", "title": "Application before abstraction", "body": "Ideas are translated into tools and decisions that learners can use in their roles immediately."},
            {"id": "partnership", "number": "03", "title": "Progress through partnership", "body": "Learners, employers and expert practitioners work together around meaningful workplace outcomes."},
        ],
    }),
    (40, "aboutDomains", {
        "eyebrow": "Our professional domains", "heading": "Distinct disciplines. One KBC standard.",
        "description": "Each domain has its own professional culture and progression routes, united by applied, employer-relevant learning.",
        "items": [
            {"id": "project-management", "number": "01", "initials": "PM", "title": "Project Management", "body": "Delivery, stakeholders, governance and confident project leadership.", "linkLabel": "Explore Project Management", "href": "/programmes", "tone": "navy"},
            {"id": "project-controls", "number": "02", "initials": "PC", "title": "Project Controls", "body": "Planning, scheduling, cost, risk and evidence-led performance.", "linkLabel": "Explore Project Controls", "href": "/programmes", "tone": "teal"},
            {"id": "marketing", "number": "03", "initials": "MK", "title": "Marketing", "body": "Commercial thinking, customer insight, data and digital practice.", "linkLabel": "Explore Marketing", "href": "/programmes", "tone": "coral"},
            {"id": "leadership", "number": "04", "initials": "LS", "title": "Leadership & Strategy", "body": "Strategic decisions, organisational direction and executive capability.", "linkLabel": "Explore Leadership", "href": "/programmes", "tone": "plum"},
        ],
    }),
    (50, "aboutLearning", {
        "eyebrow": "How learning works", "heading": "Learning designed around the workplace.",
        "description": "Programmes connect knowledge, guided practice and professional reflection so progress is visible at work.",
        "steps": [
            {"id": "understand", "number": "01", "title": "Understand", "body": "Build a strong evidence-based foundation with expert teaching."},
            {"id": "apply", "number": "02", "title": "Apply", "body": "Use new approaches on real responsibilities and projects."},
            {"id": "reflect", "number": "03", "title": "Reflect", "body": "Review outcomes with coaches and strengthen professional judgement."},
            {"id": "progress", "number": "04", "title": "Progress", "body": "Move toward recognised qualifications and greater workplace impact."},
        ],
    }),
    (60, "aboutSupport", {
        "eyebrow": "Learner support", "heading": "Professional progress is personal.",
        "description": "Our support model helps learners stay confident, connected and focused throughout their programme.",
        "items": [
            {"id": "coaching", "title": "Dedicated coaching", "body": "Regular guidance, reviews and practical feedback from experienced professionals."},
            {"id": "wellbeing", "title": "Wellbeing and inclusion", "body": "Responsive support that recognises individual circumstances and learning needs."},
            {"id": "recognition", "title": "Career and recognition", "body": "Connections to professional pathways, networks and recognised qualifications."},
        ],
    }),
    (70, "aboutPurpose", {
        "eyebrow": "Our purpose", "heading": "Research translated into confident action.",
        "vision": {"label": "Vision", "title": "A globally recognised learning ecosystem", "body": "To be a trusted leader in consultancy and education, translating research into practical strategies that help people and organisations thrive."},
        "mission": {"label": "Mission", "title": "Bridge knowledge and real application", "body": "To connect academic insight with workplace practice through employer partnerships, apprenticeships, vocational education and professional development."},
    }),
    (80, "aboutValues", {
        "eyebrow": "Our values", "heading": "The commitments behind our work.",
        "items": [
            {"id": "empowering-futures", "number": "01", "title": "Empowering futures", "body": "We help people build the confidence and capability to shape their next step."},
            {"id": "reducing-footprint", "number": "02", "title": "Reducing footprint", "body": "We make responsible choices and encourage more sustainable ways of learning and working."},
            {"id": "strengthening-partnerships", "number": "03", "title": "Strengthening partnerships", "body": "We create lasting value through open, purposeful relationships with learners and employers."},
        ],
    }),
    (90, "aboutTimeline", {
        "eyebrow": "Our story", "heading": "From consultancy roots to a professional college.",
        "description": "KBC has evolved while keeping the same focus: turning knowledge into useful action.",
        "items": [
            {"id": "beginning", "year": "2016", "title": "The beginning", "body": "Founded as IBIS Consultancy by professors from British universities, with a focus on wisdom, writing and applied knowledge."},
            {"id": "growth", "year": "2016–2024", "title": "Growth and expertise", "body": "Expanded through publications, frameworks, KPIs and specialist PMO, TMO and consultancy work."},
            {"id": "education", "year": "2024", "title": "Educational expansion", "body": "Became an apprenticeship provider and delivered project, project controls and marketing pathways, including a Skills Bootcamp for more than 60 learners."},
            {"id": "transformation", "year": "June 2024", "title": "Kent Business College", "body": "Rebranded to express a broader educational mission and a commitment to strength, momentum and empowerment."},
        ],
    }),
    (100, "aboutIdentity", {
        "eyebrow": "Our identity", "heading": "Symbols with a story.",
        "description": "Our identity connects the institution we are becoming with the expertise that shaped us.",
        "items": [
            {"id": "kent-horse", "symbol": "KH", "title": "The Kent horse", "body": "A symbol of strength, momentum and the confidence to move forward."},
            {"id": "ibis-legacy", "symbol": "IB", "title": "The IBIS legacy", "body": "A link to our consultancy roots and to wisdom, writing and the responsible use of knowledge."},
        ],
    }),
    (110, "aboutImpact", {
        "eyebrow": "Our impact", "heading": "Progress measured in people and partnerships.",
        "description": "A growing community applying new capability across real organisations and careers.",
        "stats": [
            {"id": "students", "value": "500+", "label": "students enrolled"}, {"id": "employers", "value": "150+", "label": "employer partners"},
            {"id": "graduates", "value": "250+", "label": "successful graduates"}, {"id": "years", "value": "8", "label": "years of excellence"},
        ],
    }),
    (120, "aboutExperts", {
        "eyebrow": "Our experts", "heading": "Experience that makes learning useful.",
        "description": "Our specialists bring together academic rigour, consultancy experience and practical professional insight.",
        "cta": {"label": "Meet all our experts", "href": "/our-experts"},
    }),
    (130, "aboutJourneys", {
        "eyebrow": "Start your journey", "heading": "One college. Two ways to create progress.",
        "description": "Choose the route that reflects what you want to achieve.",
        "items": [
            {"id": "learners", "audience": "For learners", "title": "Build capability that moves your career forward.", "body": "Explore role-relevant programmes, expert support and recognised professional pathways.", "cta": {"label": "Explore learner opportunities", "href": "/learners"}},
            {"id": "employers", "audience": "For employers", "title": "Develop capability that performs at work.", "body": "Build a funded development pathway around your organisation's priorities and people.", "cta": {"label": "Discuss your workforce needs", "href": "/employer-agreement"}},
        ],
    }),
    (140, "aboutPartners", {
        "eyebrow": "Our community", "heading": "Trusted across different sectors.",
        "description": "Professionals from respected organisations choose KBC to strengthen practical capability.",
        "items": [
            {"id": "bauer", "name": "Bauer Media Group", "image": "/assets/logos/employers/bauer-media-group.png"},
            {"id": "black-white-denim", "name": "Black White Denim", "image": "/assets/logos/employers/black-white-denim.png"},
            {"id": "bowker", "name": "Bowker Motor Group", "image": "/assets/logos/employers/bowker-motor-group.png"},
            {"id": "gtt", "name": "GTT Wireless", "image": "/assets/logos/employers/gtt-wireless.png"},
        ],
    }),
    (150, "aboutFinalCta", {
        "eyebrow": "Move forward with KBC", "heading": "Turn ambition into practical capability.",
        "body": "Whether you are developing your own career or the capability of a team, we will help you identify the right next step.",
        "primaryCta": {"label": "Explore programmes", "href": "/programmes"},
        "secondaryCta": {"label": "Contact the team", "href": "/contact"},
    }),
    (160, "aboutContact", {
        "eyebrow": "Contact us", "heading": "Start a conversation with Kent Business College.",
        "description": "Speak with our team about programmes, employer partnerships or professional development.",
        "cta": {"label": "Send an enquiry", "href": "/contact"},
    }),
]


def seed_about(apps, schema_editor):
    Page = apps.get_model("pages", "Page")
    PageSection = apps.get_model("pages", "PageSection")
    Person = apps.get_model("people", "Person")
    PersonRole = apps.get_model("people", "PersonRole")
    SiteSettings = apps.get_model("site_config", "SiteSettings")
    SEORecord = apps.get_model("seo", "SEORecord")
    ContentType = apps.get_model("contenttypes", "ContentType")
    now = timezone.now()

    page, created = Page.objects.get_or_create(
        slug="who-we-are",
        defaults={"title": "Who We Are", "summary": "Discover Kent Business College, our purpose, history, values, experts and professional learning approach.", "status": "published", "published_at": now, "legacy_source_id": PAGE_MARKER},
    )
    # Never overwrite an editor-managed page that already exists in another environment.
    if not created and page.legacy_source_id != PAGE_MARKER:
        return
    for sort_order, section_type, data in SECTIONS:
        PageSection.objects.update_or_create(
            page=page, sort_order=sort_order,
            defaults={"section_type": section_type, "data": data, "is_enabled": True, "status": "published", "published_at": now},
        )

    content_type, _ = ContentType.objects.get_or_create(app_label="pages", model="page")
    SEORecord.objects.update_or_create(
        content_type=content_type, object_id=page.pk,
        defaults={
            "title": "Who We Are | Kent Business College",
            "description": "Learn about Kent Business College, our values, professional domains, applied learning model, history, experts and employer partnerships.",
            "robots": "index,follow", "open_graph_title": "Who We Are | Kent Business College",
            "open_graph_description": "Knowledge that moves people and organisations forward.", "twitter_card": "summary_large_image",
            "structured_data": [{"@context": "https://schema.org", "@type": "AboutPage", "name": "Who We Are", "about": {"@type": "CollegeOrUniversity", "name": "Kent Business College"}}],
        },
    )

    settings = SiteSettings.objects.first()
    if settings is None:
        SiteSettings.objects.create(
            organisation_name="Kent Business College", tagline="Knowledge that moves people and organisations forward.",
            contact_email="office@kentbusinesscollege.org", phone="+44 1622 958955",
            address="29–37 Maidstone Innovation Centre, Gidds Pond Way, Weavering, Maidstone ME14 5FY",
            privacy_policy_url="/privacy", terms_url="/terms", cookie_policy_url="/cookies",
            default_seo_title="Kent Business College", default_seo_description="Applied professional education for learners and employers.",
        )

    experts = [
        ("stephen-jenner", "Dr. Stephen Jenner", "Managing Portfolio Specialist", 10),
        ("ray-mead", "Dr. Ray Mead", "Project Management Consultant", 20),
        ("amgad-badewi", "Dr. Amgad Badewi", "Project Management Specialist", 30),
    ]
    for slug, name, job_title, sort_order in experts:
        person, created = Person.objects.get_or_create(
            slug=slug,
            defaults={"name": name, "job_title": job_title, "sort_order": sort_order, "status": "published", "published_at": now, "legacy_source_id": PAGE_MARKER},
        )
        if created or person.legacy_source_id == PAGE_MARKER:
            PersonRole.objects.get_or_create(person=person, role="expert")


def unseed_about(apps, schema_editor):
    Page = apps.get_model("pages", "Page")
    Person = apps.get_model("people", "Person")
    SEORecord = apps.get_model("seo", "SEORecord")
    ContentType = apps.get_model("contenttypes", "ContentType")
    page = Page.objects.filter(slug="who-we-are", legacy_source_id=PAGE_MARKER).first()
    if page:
        content_type = ContentType.objects.filter(app_label="pages", model="page").first()
        if content_type:
            SEORecord.objects.filter(content_type=content_type, object_id=page.pk).delete()
        page.delete()
    Person.objects.filter(legacy_source_id=PAGE_MARKER).delete()


class Migration(migrations.Migration):
    dependencies = [
        ("pages", "0002_initial"), ("people", "0002_initial"), ("site_config", "0001_initial"),
        ("seo", "0001_initial"), ("contenttypes", "0002_remove_content_type_name"),
    ]
    operations = [migrations.RunPython(seed_about, unseed_about)]
