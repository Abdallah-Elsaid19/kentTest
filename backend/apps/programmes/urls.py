from django.urls import path

from .views import ProgrammeDetailView, ProgrammeListView

urlpatterns = [
    path("programmes/", ProgrammeListView.as_view(), name="programme-list"),
    path("programmes/<slug:slug>/", ProgrammeDetailView.as_view(), name="programme-detail"),
]
