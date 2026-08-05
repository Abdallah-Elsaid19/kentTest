from xml.etree.ElementTree import Element, SubElement, tostring

from django.conf import settings
from django.http import HttpResponse

from apps.articles.models import Article
from apps.colleges.models import College
from apps.events.models import Event
from apps.pages.models import Page
from apps.programmes.models import Programme
from apps.stories.models import Story


def sitemap(request):
    root = Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")
    records = [
        (Page.published.all(), lambda item: f"/{item.slug}/"),
        (College.published.all(), lambda item: f"/colleges/{item.slug}/"),
        (Programme.published.all(), lambda item: f"/programmes/{item.slug}/"),
        (Event.published.all(), lambda item: f"/events/{item.slug}/"),
        (Story.published.filter(privacy_approved=True), lambda item: f"/stories/{item.slug}/"),
        (Article.published.all(), lambda item: f"/blog/{item.slug}/"),
    ]
    for queryset, path_builder in records:
        for item in queryset.only("slug", "updated_at"):
            url = SubElement(root, "url")
            SubElement(url, "loc").text = f"{settings.SITE_URL.rstrip('/')}{path_builder(item)}"
            SubElement(url, "lastmod").text = item.updated_at.date().isoformat()
    return HttpResponse(tostring(root, encoding="utf-8", xml_declaration=True), content_type="application/xml")
