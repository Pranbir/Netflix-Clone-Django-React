from django.urls import path
from knox import views as knox_views
from .views import (
                  index,
                  AppuserList, 
                  AppuserListDeatil,
                  AppuserContinueWatching , 
                  LoginAPI, 
                  RegisterAPI,
                  SearchApi)

urlpatterns = [
    path('', index, name='index'),
    path('app_user/', AppuserList.as_view(), name='userlist'),
    path('app_user/<int:pk>', AppuserListDeatil.as_view(), name='userlist-detail'),
    path('app_user/<app_user>/continue_watching/', AppuserContinueWatching.as_view(), name='userlist-detail'),
    path('register/', RegisterAPI.as_view(), name='register'),
    path('login/', LoginAPI.as_view(), name='login'),
    path('logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('searchAPI',SearchApi.as_view(),name="SearchApi"),
    ]

