from rest_framework import serializers

from apps.seo.serializers import serialize_seo
from .models import Page, PageSection


class PageSectionSerializer(serializers.ModelSerializer):
    type = serializers.CharField(source="section_type")
    sort_order = serializers.IntegerField()

    class Meta:
        model = PageSection
        fields = ("id", "type", "sort_order", "data")


class PageSerializer(serializers.ModelSerializer):
    sections = serializers.SerializerMethodField()
    seo = serializers.SerializerMethodField()

    class Meta:
        model = Page
        fields = ("id", "slug", "title", "summary", "sections", "seo", "published_at", "updated_at")

    def get_sections(self, obj) -> list[dict]:
        sections = [section for section in obj.sections.all() if section.status == "published" and section.is_enabled]
        return PageSectionSerializer(sections, many=True).data

    def get_seo(self, obj) -> dict:
        return serialize_seo(obj, self.context.get("request"))
