from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AnimeViewSet, EpisodeViewSet, CommentViewSet

router = DefaultRouter()
router.register(r'animes', AnimeViewSet)
router.register(r'episodes', EpisodeViewSet)
router.register(r'comments', CommentViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
