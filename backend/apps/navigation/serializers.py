from rest_framework import serializers

from .models import NavigationItem, NavigationMenu


class NavigationItemSerializer(serializers.ModelSerializer):
    path = serializers.SerializerMethodField()
    external = serializers.SerializerMethodField()
    children = serializers.SerializerMethodField()

    class Meta:
        model = NavigationItem
        fields = ("id", "label", "path", "external", "accessible_label", "children")

    def get_path(self, obj):
        return obj.external_url or obj.internal_path

    def get_external(self, obj):
        return bool(obj.external_url)

    def get_children(self, obj):
        items = [child for child in obj.children.all() if child.is_visible]
        return NavigationItemSerializer(items, many=True).data


class NavigationMenuSerializer(serializers.ModelSerializer):
    items = serializers.SerializerMethodField()

    class Meta:
        model = NavigationMenu
        fields = ("location", "items")

    def get_items(self, obj) -> list[dict]:
        roots = [item for item in obj.items.all() if item.parent_id is None and item.is_visible]
        return NavigationItemSerializer(roots, many=True).data
