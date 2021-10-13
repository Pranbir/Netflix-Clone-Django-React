import debug_toolbar
from django.contrib import admin
from django.urls import path, re_path
from django.urls.conf import include
from django.conf import settings
from django.conf.urls.static import static

# Swagger UI Imports
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
   openapi.Info(
      title="Netflix Movies API",
      default_version='v1',
      description="Netflix clone API using DjangoRestFramework",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="admin@hehehehe.nodomain"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
   re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
   re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('admin/', admin.site.urls),
    path('api/', include('netflix_app.urls')),
    path('__debug__/', include(debug_toolbar.urls)),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)