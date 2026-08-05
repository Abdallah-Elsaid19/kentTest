import re


def camelize_key(value: str) -> str:
    first, *rest = value.split("_")
    return first + "".join(part[:1].upper() + part[1:] for part in rest)


def snakeize_key(value: str) -> str:
    return re.sub(r"(?<!^)(?=[A-Z])", "_", value).lower()


def transform_keys(value, transform):
    if isinstance(value, dict):
        return {transform(str(key)): transform_keys(item, transform) for key, item in value.items()}
    if isinstance(value, list):
        return [transform_keys(item, transform) for item in value]
    return value
