import re

import bleach


ALLOWED_TAGS = set(bleach.sanitizer.ALLOWED_TAGS).union(
    {
        "p",
        "br",
        "div",
        "span",
        "h1",
        "h2",
        "h3",
        "h4",
        "hr",
        "ul",
        "ol",
        "li",
        "blockquote",
        "figure",
        "figcaption",
        "img",
    }
)
ALLOWED_ATTRIBUTES = {
    "a": ["href", "title", "rel", "target"],
    "img": ["src", "alt", "width", "height", "loading", "decoding"],
}


def sanitize_html(value: str) -> str:
    cleaned = bleach.clean(
        value or "",
        tags=ALLOWED_TAGS,
        attributes=ALLOWED_ATTRIBUTES,
        protocols={"https", "mailto"},
        strip=True,
    )
    def make_image_lazy(match: re.Match[str]) -> str:
        attributes = re.sub(
            r"\s+(?:loading|decoding)=(?:\"[^\"]*\"|'[^']*')",
            "",
            match.group(1),
            flags=re.IGNORECASE,
        )
        return f'<img loading="lazy" decoding="async"{attributes}>'

    return re.sub(r"<img([^>]*)>", make_image_lazy, cleaned, flags=re.IGNORECASE)
