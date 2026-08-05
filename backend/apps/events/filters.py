import django_filters
from django.utils import timezone

from .models import Event


class EventFilter(django_filters.FilterSet):
    category = django_filters.CharFilter(field_name="categories__slug")
    from_date = django_filters.IsoDateTimeFilter(field_name="start_at", lookup_expr="gte", label="from")
    to = django_filters.IsoDateTimeFilter(field_name="start_at", lookup_expr="lte")
    status = django_filters.CharFilter(method="filter_status")

    class Meta:
        model = Event
        fields = ("category", "status", "is_online")

    def __init__(self, data=None, *args, **kwargs):
        if data is not None and "from" in data:
            data = data.copy()
            data["from_date"] = data["from"]
        super().__init__(data, *args, **kwargs)

    def filter_status(self, queryset, name, value):
        now = timezone.now()
        if value == "cancelled":
            return queryset.filter(is_cancelled=True)
        if value == "ended":
            return queryset.filter(is_cancelled=False, end_at__lt=now).order_by("-start_at")
        if value == "upcoming":
            return queryset.filter(is_cancelled=False, end_at__gte=now).order_by("start_at")
        return queryset
