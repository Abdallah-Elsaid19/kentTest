from rest_framework.permissions import BasePermission


def is_cms_admin(user):
    return bool(user and user.is_authenticated and user.is_active and (user.is_superuser or (user.is_staff and user.role == "admin")))


class IsCMSAdmin(BasePermission):
    message = "An active KBC administrator account is required."

    def has_permission(self, request, view):
        return is_cms_admin(request.user)
