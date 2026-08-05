import bleach


ALLOWED_TAGS = set(bleach.sanitizer.ALLOWED_TAGS).union(
    {"p", "br", "h2", "h3", "h4", "ul", "ol", "li", "blockquote", "figure", "figcaption"}
)
ALLOWED_ATTRIBUTES = {"a": ["href", "title", "rel", "target"], "img": ["src", "alt", "width", "height"]}


def sanitize_html(value: str) -> str:
    return bleach.clean(value or "", tags=ALLOWED_TAGS, attributes=ALLOWED_ATTRIBUTES, protocols={"https", "mailto"}, strip=True)
