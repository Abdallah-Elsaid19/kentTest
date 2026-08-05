from django.urls import include, path

from apps.core.views import HealthView

urlpatterns = [
    path("health/", HealthView.as_view(), name="api-health"),
    path("", include("apps.site_config.urls")),
    path("", include("apps.navigation.urls")),
    path("", include("apps.pages.urls")),
    path("", include("apps.colleges.urls")),
    path("", include("apps.programmes.urls")),
    path("", include("apps.events.urls")),
    path("", include("apps.people.urls")),
    path("", include("apps.stories.urls")),
    path("", include("apps.articles.urls")),
    path("", include("apps.social.urls")),
    path("", include("apps.forms.urls")),
    path("", include("apps.newsletter.urls")),
    path("", include("apps.search.urls")),
]
