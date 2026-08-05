from django.urls import path

from .views import CollegeDetailView, CollegeListView

urlpatterns = [
    path("colleges/", CollegeListView.as_view(), name="college-list"),
    path("colleges/<slug:slug>/", CollegeDetailView.as_view(), name="college-detail"),
]
