from django.contrib.contenttypes.models import ContentType

from apps.media_library.serializers import MediaAssetSerializer
from .models import SEORecord


def serialize_seo(obj, request=None):
    content_type = ContentType.objects.get_for_model(obj, for_concrete_model=False)
    record = SEORecord.objects.filter(content_type=content_type, object_id=obj.pk).select_related("open_graph_image").first()
    if record is None:
        return {}
    image = MediaAssetSerializer(record.open_graph_image, context={"request": request}).data if record.open_graph_image else None
    return {
        "title": record.title,
        "description": record.description,
        "canonical": record.canonical_url,
        "robots": record.robots,
        "open_graph": {
            "title": record.open_graph_title or record.title,
            "description": record.open_graph_description or record.description,
            "image": image,
        },
        "twitter_card": record.twitter_card,
        "schema": record.structured_data,
    }
