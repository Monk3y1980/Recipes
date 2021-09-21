from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from .yasg import urlpatterns as doc_urls

# from rest_framework import routers
# from app import views


# router = routers.DefaultRouter()
# router.register(r'recipes', views.RecipesView)
# router.register(r'category', views.CategoryView)

urlpatterns = [
    #    path('', include(router.urls)),
    path('', include('frontend.urls')),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='api')),
    path('api/v1/', include('app.urls')),
]

urlpatterns += doc_urls

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
