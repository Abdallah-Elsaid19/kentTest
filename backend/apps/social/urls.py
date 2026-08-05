from django.urls import path

from .views import SocialPostListView

urlpatterns = [path("social-posts/", SocialPostListView.as_view(), name="social-post-list")]
