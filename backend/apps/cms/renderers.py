from rest_framework.renderers import JSONRenderer
from apps.core.case import camelize_key


class CMSJSONRenderer(JSONRenderer):
    """Camelize API envelopes while preserving schema-owned JSONB property names."""
    def render(self, data, accepted_media_type=None, renderer_context=None):
        def envelope(value):
            if isinstance(value, dict):
                return {camelize_key(str(k)): v if k in {"content", "published_content", "schema", "schemas"} else envelope(v) for k, v in value.items()}
            if isinstance(value, list):
                return [envelope(item) for item in value]
            return value
        return super().render(envelope(data), accepted_media_type, renderer_context)
