from django.urls import path
from rest_framework import views
from .views import  SearchApi,index

urlpatterns = [
    path('',index),
    path('searchAPI',SearchApi.as_view(),name="SearchApi"),
]
