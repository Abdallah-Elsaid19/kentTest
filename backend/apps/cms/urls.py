from django.urls import path

from .views import PagePreviewView, CollectionView, EntryDetailView, EntryListView, LoginView, LogoutView, PreviewView, PublicContentView, RevisionListView, SessionView

urlpatterns = [
    path("cms/session/", SessionView.as_view()),
    path("cms/login/", LoginView.as_view()),
    path("cms/logout/", LogoutView.as_view()),
    path("cms/collections/", CollectionView.as_view()),
    path("cms/pages/<slug:page>/preview/", PagePreviewView.as_view()),
    path("cms/entries/", EntryListView.as_view()),
    path("cms/entries/<str:key>/", EntryDetailView.as_view()),
    path("cms/entries/<str:key>/revisions/", RevisionListView.as_view()),
    path("cms/entries/<str:key>/preview/", PreviewView.as_view()),
    path("content/<slug:page>/", PublicContentView.as_view()),
]
