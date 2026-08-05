from django.http import HttpResponseRedirect

from .models import RedirectRule


class RedirectRuleMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        if response.status_code != 404 or request.path.startswith(("/api/", "/admin/", "/static/", "/media/")):
            return response
        rule = RedirectRule.objects.filter(source_path=request.path, is_active=True).first()
        if not rule:
            return response
        target = rule.target_path
        if rule.preserve_query_string and request.META.get("QUERY_STRING"):
            separator = "&" if "?" in target else "?"
            target = f"{target}{separator}{request.META['QUERY_STRING']}"
        redirect = HttpResponseRedirect(target)
        redirect.status_code = rule.status_code
        return redirect
