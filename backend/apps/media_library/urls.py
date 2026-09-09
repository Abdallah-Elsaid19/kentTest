from django.urls import path

from .views import MediaUploadView


urlpatterns = [
    path("cms/media/upload/", MediaUploadView.as_view()),
]
