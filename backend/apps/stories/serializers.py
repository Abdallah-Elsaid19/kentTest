from rest_framework import serializers

from apps.media_library.serializers import MediaAssetSerializer
from apps.seo.serializers import serialize_seo
from .models import Story, Testimonial


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = ("id", "name", "role", "organisation", "quote")


class StorySerializer(serializers.ModelSerializer):
    image = MediaAssetSerializer(read_only=True)
    programme = serializers.SerializerMethodField()
    person = serializers.SerializerMethodField()
    testimonials = serializers.SerializerMethodField()
    seo = serializers.SerializerMethodField()

    class Meta:
        model = Story
        fields = (
            "id", "slug", "title", "story_type", "summary", "body", "person", "programme", "employer",
            "role", "quote", "image", "is_featured", "testimonials", "seo", "published_at", "updated_at",
        )

    def get_programme(self, obj) -> dict | None:
        return {"slug": obj.programme.slug, "title": obj.programme.title} if obj.programme else None

    def get_person(self, obj) -> dict | None:
        return {"slug": obj.person.slug, "name": obj.person.name} if obj.person else None

    def get_testimonials(self, obj) -> list[dict]:
        return TestimonialSerializer(obj.testimonials.filter(is_approved=True), many=True).data

    def get_seo(self, obj) -> dict:
        return serialize_seo(obj, self.context.get("request"))
