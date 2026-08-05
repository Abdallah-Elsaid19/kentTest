import django_filters

from .models import Programme


class ProgrammeFilter(django_filters.FilterSet):
    college = django_filters.CharFilter(field_name="college__slug")
    funding = django_filters.CharFilter(field_name="funding_type")
    featured = django_filters.BooleanFilter(field_name="is_featured")

    class Meta:
        model = Programme
        fields = ("college", "level", "funding", "featured")
