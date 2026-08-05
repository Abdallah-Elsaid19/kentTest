from django.urls import path

from .views import NavigationView

urlpatterns = [path("navigation/", NavigationView.as_view(), name="navigation")]
