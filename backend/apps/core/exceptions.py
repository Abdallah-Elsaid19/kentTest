from rest_framework import status
from rest_framework.exceptions import APIException, ValidationError
from rest_framework.views import exception_handler


STATUS_CODES = {
    400: "bad_request",
    401: "authentication_required",
    403: "permission_denied",
    404: "not_found",
    409: "conflict",
    422: "validation_error",
    429: "rate_limited",
    500: "server_error",
    502: "upstream_error",
    503: "service_unavailable",
}


def _flatten_details(data):
    if not isinstance(data, dict):
        return {}
    details = {}
    for key, value in data.items():
        if isinstance(value, list):
            details[key] = str(value[0]) if value else "Invalid value."
        elif isinstance(value, dict):
            details[key] = _flatten_details(value)
        else:
            details[key] = str(value)
    return details


def kbc_exception_handler(exc, context):
    response = exception_handler(exc, context)
    request = context.get("request")
    request_id = getattr(request, "request_id", "")
    if response is None:
        return response

    response_status = 422 if isinstance(exc, ValidationError) else response.status_code
    code = "validation_error" if isinstance(exc, ValidationError) else (getattr(exc, "default_code", None) or STATUS_CODES.get(response_status, "request_error"))
    message = "Please correct the highlighted fields." if response_status == 422 else "The request could not be completed."
    if isinstance(exc, APIException) and not isinstance(exc.detail, (dict, list)):
        message = str(exc.detail)
    response.status_code = response_status
    response.data = {
        "error": {"code": str(code), "message": message, "details": _flatten_details(response.data)},
        "request_id": request_id,
    }
    return response
