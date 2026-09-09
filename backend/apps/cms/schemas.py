import json
import re
from pathlib import Path
from urllib.parse import urlsplit, unquote

from rest_framework.exceptions import ValidationError


# Schema contains structure and limits, never fallback content.
HOME_SCHEMAS = json.loads(Path(__file__).with_name("home_contract.json").read_text(encoding="utf-8"))
PAGE_CONTRACT = json.loads(Path(__file__).with_name("page_contracts.json").read_text(encoding="utf-8"))
COLLECTIONS = {"home": HOME_SCHEMAS, **PAGE_CONTRACT["sections"]}


def safe_url(value):
    if re.search(r"[\s\\\x00-\x1f\x7f]", value):
        return False
    if value.startswith("#"):
        return len(value) > 1
    if value.startswith("/"):
        return not value.startswith("//")
    try:
        parsed = urlsplit(value)
        return parsed.scheme == "https" and bool(parsed.hostname) and not parsed.username and not parsed.password
    except ValueError:
        return False


def validate_node(value, schema, path="content"):
    errors = {}

    def check(value, schema, path):
        kind = schema["type"]
        if kind == "object":
            if not isinstance(value, dict):
                errors[path] = "Must be an object."
                return
            for key in schema["required"]:
                if key not in value:
                    errors[f"{path}.{key}"] = "This field is required."
            for key, child in value.items():
                if key not in schema["properties"]:
                    errors[f"{path}.{key}"] = "Unknown field."
                else:
                    check(child, schema["properties"][key], f"{path}.{key}")
        elif kind == "array":
            if not isinstance(value, list):
                errors[path] = "Must be a list."
                return
            if not schema["minItems"] <= len(value) <= schema["maxItems"]:
                errors[path] = f"Use between {schema['minItems']} and {schema['maxItems']} items."
                return
            for index, child in enumerate(value):
                check(child, schema["items"], f"{path}.{index}")
            for identity in ("id", "number"):
                identities = [item[identity] for item in value if isinstance(item, dict) and isinstance(item.get(identity), str)]
                if len(set(identities)) != len(identities):
                    errors[path] = f"Each {identity} must be unique."
        elif kind == "string":
            if not isinstance(value, str):
                errors[path] = "Must be text."
            elif "enum" in schema and value not in schema["enum"]:
                errors[path] = "Choose an allowed value."
            elif not value.strip() or len(value) > schema.get("maxLength", 12000):
                errors[path] = "Enter text within the field length limit."
            elif schema.get("format") == "url" and not safe_url(value):
                errors[path] = "Use a root-relative path, an anchor or an HTTPS URL without credentials or whitespace."
            elif schema.get("format") == "email-link" and not (re.fullmatch(r"mailto:[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}(?:\?[^\s<>]*)?", value) and not re.search(r"[\r\n]", unquote(value))):
                errors[path] = "Use a mailto link with a valid email address."
            elif schema.get("format") == "phone-link" and not re.fullmatch(r"tel:\+?[0-9() .\-]+", value):
                errors[path] = "Use a tel link with a telephone number."
        elif kind == "boolean" and not isinstance(value, bool):
            errors[path] = "Must be true or false."
        elif kind == "number" and (type(value) not in (int, float) or not schema["minimum"] <= value <= schema["maximum"]):
            errors[path] = "Number is outside the allowed range."

    check(value, schema, path)
    if errors:
        raise ValidationError(errors)


def validate_content(page, section, value):
    schema = COLLECTIONS.get(page, {}).get(section)
    if schema is None:
        raise ValidationError({"content": "Unsupported collection or section."})
    if len(json.dumps(value)) > 200_000:
        raise ValidationError({"content": "Section is too large."})
    validate_node(value, schema)
