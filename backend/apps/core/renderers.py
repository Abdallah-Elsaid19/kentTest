from rest_framework.renderers import JSONRenderer

from .case import camelize_key, transform_keys


class CamelCaseJSONRenderer(JSONRenderer):
    def render(self, data, accepted_media_type=None, renderer_context=None):
        return super().render(transform_keys(data, camelize_key), accepted_media_type, renderer_context)
