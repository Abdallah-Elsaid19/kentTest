from __future__ import annotations

import re
import uuid

from apps.audit.context import current_request


REQUEST_ID_RE = re.compile(r"^[A-Za-z0-9._-]{8,64}$")


class RequestIdMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        incoming = request.headers.get("X-Request-ID", "")
        request.request_id = incoming if REQUEST_ID_RE.match(incoming) else f"req_{uuid.uuid4().hex}"
        response = self.get_response(request)
        response["X-Request-ID"] = request.request_id
        return response


class AuditContextMiddleware:
    """Expose the current authenticated request to model audit signals safely."""

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        token = current_request.set(request)
        try:
            return self.get_response(request)
        finally:
            current_request.reset(token)


class SecurityHeadersMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        response.setdefault("Permissions-Policy", "camera=(), microphone=(), geolocation=()")
        response.setdefault(
            "Content-Security-Policy",
            "default-src 'self'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; "
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' https://challenges.cloudflare.com; "
            "frame-src https://challenges.cloudflare.com https://*.zoho.com https://forms.zohopublic.com https://outlook.office.com; "
            "connect-src 'self' https://challenges.cloudflare.com",
        )
        return response
