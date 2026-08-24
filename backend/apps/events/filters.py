import django_filters
from django.db.models import Q
from django.utils import timezone

from .models import Event


class EventFilter(django_filters.FilterSet):
    category = django_filters.CharFilter(field_name="event_type", lookup_expr="iexact")
    from_date = django_filters.IsoDateTimeFilter(field_name="starts_at", lookup_expr="gte", label="from")
    to = django_filters.IsoDateTimeFilter(field_name="starts_at", lookup_expr="lte")
    status = django_filters.CharFilter(method="filter_status")
    is_online = django_filters.BooleanFilter(field_name="is_online_event")

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
            return queryset.filter(status__in=("canceled", "cancelled"))
        if value == "ended":
            return queryset.exclude(status__in=("canceled", "cancelled")).filter(ends_at__lt=now).order_by("-starts_at")
        if value == "upcoming":
            return queryset.exclude(status__in=("canceled", "cancelled")).filter(
                Q(ends_at__gte=now) | Q(ends_at__isnull=True, starts_at__gte=now)
            ).order_by("starts_at")
        return queryset
