from rest_framework import serializers

from apps.media_library.serializers import MediaAssetSerializer
from apps.seo.serializers import serialize_seo
from .models import Programme, ProgrammeCertification, ProgrammeEligibilityItem, ProgrammeModule


class ProgrammeModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgrammeModule
        fields = ("id", "title", "summary", "sort_order")


class ProgrammeCertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgrammeCertification
        fields = ("id", "title", "awarding_body", "url", "sort_order")


class ProgrammeEligibilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgrammeEligibilityItem
        fields = ("id", "text", "sort_order")


class ProgrammeListSerializer(serializers.ModelSerializer):
    college = serializers.SerializerMethodField()
    funding = serializers.SerializerMethodField()
    duration = serializers.SerializerMethodField()
    image = MediaAssetSerializer(read_only=True)

    class Meta:
        model = Programme
        fields = ("id", "slug", "title", "college", "level", "funding", "duration", "summary", "delivery_mode", "image", "is_featured", "updated_at")

    def get_college(self, obj) -> dict:
        return {"slug": obj.college.slug, "title": obj.college.title}

    def get_funding(self, obj) -> dict:
        return {"type": obj.funding_type, "label": obj.funding_label}

    def get_duration(self, obj) -> dict:
        return {"months": obj.duration_months, "label": obj.duration_label}


class ProgrammeDetailSerializer(ProgrammeListSerializer):
    modules = ProgrammeModuleSerializer(many=True, read_only=True)
    certifications = ProgrammeCertificationSerializer(many=True, read_only=True)
    eligibility = ProgrammeEligibilitySerializer(source="eligibility_items", many=True, read_only=True)
    delivery = serializers.SerializerMethodField()
    cta = serializers.SerializerMethodField()
    seo = serializers.SerializerMethodField()

    class Meta(ProgrammeListSerializer.Meta):
        fields = ProgrammeListSerializer.Meta.fields + (
            "description", "modules", "certifications", "eligibility", "delivery", "cta", "seo", "published_at",
        )

    def get_delivery(self, obj) -> dict:
        return {"mode": obj.delivery_mode, "schedule": obj.delivery_schedule}

    def get_cta(self, obj) -> dict:
        return {"label": obj.cta_label, "href": obj.cta_url}

    def get_seo(self, obj) -> dict:
        return serialize_seo(obj, self.context.get("request"))
