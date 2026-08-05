from django.core.exceptions import ImproperlyConfigured

from .base import *  # noqa: F403

DEBUG = False

if SECRET_KEY in {"", "unsafe-development-key"}:  # noqa: F405
    raise ImproperlyConfigured("DJANGO_SECRET_KEY is required in production")
if not database_url or not database_url.startswith(("postgresql://", "postgres://")):  # noqa: F405
    raise ImproperlyConfigured("Production DATABASE_URL must use PostgreSQL/Neon")
if not ALLOWED_HOSTS or "*" in ALLOWED_HOSTS:  # noqa: F405
    raise ImproperlyConfigured("Explicit DJANGO_ALLOWED_HOSTS are required")
if any(not origin.startswith("https://") for origin in CORS_ALLOWED_ORIGINS):  # noqa: F405
    raise ImproperlyConfigured("Production CORS origins must use HTTPS")
if any(not origin.startswith("https://") for origin in CSRF_TRUSTED_ORIGINS):  # noqa: F405
    raise ImproperlyConfigured("Production CSRF trusted origins must use HTTPS")

SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
SECURE_HSTS_SECONDS = 31536000
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True
SECURE_CONTENT_TYPE_NOSNIFF = True
SECURE_REFERRER_POLICY = "strict-origin-when-cross-origin"
X_FRAME_OPTIONS = "DENY"
SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
