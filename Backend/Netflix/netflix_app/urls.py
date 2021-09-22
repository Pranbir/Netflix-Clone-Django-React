from django.urls import path
from .views import index, SearchApi

urlpatterns = [
    path('',index),
    path('searchAPI',SearchApi.as_view()),
]
