from django.core.exceptions import ValidationError
from urllib.parse import urlparse


ABOUT_SECTION_SCHEMAS = {
    "aboutHero": {"strings": ("eyebrow", "heading", "highlight", "body"), "objects": ("image",), "object_lists": ("glance", "stats"), "links": ("primaryCta", "secondaryCta")},
    "aboutOverview": {"strings": ("eyebrow", "heading", "description"), "object_lists": ("items",)},
    "aboutPrinciples": {"strings": ("eyebrow", "heading"), "object_lists": ("items",)},
    "aboutDomains": {"strings": ("eyebrow", "heading", "description"), "object_lists": ("items",)},
    "aboutLearning": {"strings": ("eyebrow", "heading", "description"), "object_lists": ("steps",)},
    "aboutSupport": {"strings": ("eyebrow", "heading", "description"), "object_lists": ("items",)},
    "aboutPurpose": {"strings": ("eyebrow", "heading"), "objects": ("vision", "mission")},
    "aboutValues": {"strings": ("eyebrow", "heading"), "object_lists": ("items",)},
    "aboutTimeline": {"strings": ("eyebrow", "heading", "description"), "object_lists": ("items",)},
    "aboutIdentity": {"strings": ("eyebrow", "heading", "description"), "object_lists": ("items",)},
    "aboutImpact": {"strings": ("eyebrow", "heading", "description"), "object_lists": ("stats",)},
    "aboutExperts": {"strings": ("eyebrow", "heading", "description"), "links": ("cta",)},
    "aboutJourneys": {"strings": ("eyebrow", "heading", "description"), "object_lists": ("items",)},
    "aboutPartners": {"strings": ("eyebrow", "heading", "description"), "object_lists": ("items",), "links": ("cta",)},
    "aboutFinalCta": {"strings": ("eyebrow", "heading", "body"), "links": ("primaryCta", "secondaryCta")},
    "aboutContact": {"strings": ("eyebrow", "heading", "description"), "links": ("cta",)},
}


def _is_non_empty_string(value):
    return isinstance(value, str) and bool(value.strip())


OBJECT_LIST_FIELDS = {
    "aboutHero": {"glance": ("id", "label", "value"), "stats": ("id", "value", "label")},
    "aboutOverview": {"items": ("id", "number", "title", "body")},
    "aboutPrinciples": {"items": ("id", "number", "title", "body")},
    "aboutDomains": {"items": ("id", "number", "initials", "title", "body", "linkLabel", "href", "tone")},
    "aboutLearning": {"steps": ("id", "number", "title", "body")},
    "aboutSupport": {"items": ("id", "title", "body")},
    "aboutValues": {"items": ("id", "number", "title", "body")},
    "aboutTimeline": {"items": ("id", "year", "title", "body")},
    "aboutIdentity": {"items": ("id", "symbol", "title", "body")},
    "aboutImpact": {"stats": ("id", "value", "label")},
    "aboutJourneys": {"items": ("id", "audience", "title", "body")},
    "aboutPartners": {"items": ("id", "name")},
}


def _is_safe_href(value):
    if not _is_non_empty_string(value):
        return False
    if value.startswith("/") and not value.startswith("//"):
        return True
    parsed = urlparse(value)
    return parsed.scheme == "https" and bool(parsed.netloc)


def validate_page_section_data(section_type, data):
    """Validate the editable contract for bespoke About-page sections."""
    schema = ABOUT_SECTION_SCHEMAS.get(section_type)
    if schema is None:
        return

    errors = []
    for key in schema.get("strings", ()):
        if not _is_non_empty_string(data.get(key)):
            errors.append(f"{key} must be a non-empty string.")
    for key in schema.get("string_lists", ()):
        value = data.get(key)
        if not isinstance(value, list) or not value or not all(_is_non_empty_string(item) for item in value):
            errors.append(f"{key} must be a non-empty list of strings.")
    for key in schema.get("objects", ()):
        value = data.get(key)
        if not isinstance(value, dict) or not value:
            errors.append(f"{key} must be a non-empty object.")
    for key in schema.get("object_lists", ()):
        value = data.get(key)
        if not isinstance(value, list) or not value or not all(isinstance(item, dict) and item for item in value):
            errors.append(f"{key} must be a non-empty list of objects.")
    for key in schema.get("links", ()):
        value = data.get(key)
        if not isinstance(value, dict) or not _is_non_empty_string(value.get("label")) or not _is_safe_href(value.get("href")):
            errors.append(f"{key} must contain a label and a safe relative or HTTPS href.")

    for list_key, required_fields in OBJECT_LIST_FIELDS.get(section_type, {}).items():
        for index, item in enumerate(data.get(list_key, [])):
            for field in required_fields:
                if not _is_non_empty_string(item.get(field)):
                    errors.append(f"{list_key}[{index}].{field} must be a non-empty string.")
        
    if section_type == "aboutDomains":
        for index, item in enumerate(data.get("items", [])):
            if not _is_safe_href(item.get("href")):
                errors.append(f"items[{index}].href must be a safe relative or HTTPS URL.")
    if section_type == "aboutPartners":
        for index, item in enumerate(data.get("items", [])):
            if item.get("image") and not _is_safe_href(item.get("image")):
                errors.append(f"items[{index}].image must be a safe relative or HTTPS URL.")
    if section_type == "aboutJourneys":
        for index, item in enumerate(data.get("items", [])):
            link = item.get("cta")
            if not isinstance(link, dict) or not _is_non_empty_string(link.get("label")) or not _is_safe_href(link.get("href")):
                errors.append(f"items[{index}].cta must contain a label and a safe relative or HTTPS href.")
    if section_type == "aboutPurpose":
        for key in ("vision", "mission"):
            item = data.get(key, {})
            for field in ("label", "title", "body"):
                if not _is_non_empty_string(item.get(field)):
                    errors.append(f"{key}.{field} must be a non-empty string.")
    if section_type == "aboutHero":
        image = data.get("image", {})
        if not _is_safe_href(image.get("src")) or not _is_non_empty_string(image.get("alt")):
            errors.append("image must contain a safe src and meaningful alt text.")
    if section_type == "aboutDomains":
        for index, item in enumerate(data.get("items", [])):
            offerings = item.get("offerings")
            if not isinstance(offerings, list) or not offerings or not all(_is_non_empty_string(value) for value in offerings):
                errors.append(f"items[{index}].offerings must be a non-empty list of strings.")
    if section_type == "aboutSupport":
        for index, item in enumerate(data.get("items", [])):
            features = item.get("features")
            if not isinstance(features, list) or not features or not all(_is_non_empty_string(value) for value in features):
                errors.append(f"items[{index}].features must be a non-empty list of strings.")

    if errors:
        raise ValidationError({"data": errors})
