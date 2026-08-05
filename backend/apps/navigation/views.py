from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from .models import NavigationMenu
from .serializers import NavigationMenuSerializer


class NavigationView(GenericAPIView):
    serializer_class = NavigationMenuSerializer
    def get(self, request):
        menus = NavigationMenu.objects.filter(is_active=True).prefetch_related("items__children")
        payload = {menu.location: NavigationMenuSerializer(menu).data["items"] for menu in menus}
        payload.setdefault("header", [])
        payload.setdefault("footer", [])
        payload.setdefault("utility", [])
        return Response(payload)
