from django.urls import path
from .views import AppuserList, AppuserListDeatil,AppuserContinueWatching

urlpatterns = [
    # endpoints to view user based on login with edit del, view
    path('app_user/', AppuserList.as_view(), name='userlist'),
    path('app_user/<int:pk>', AppuserListDeatil.as_view(), name='userlist-detail'),
    #endpoints for user based continue watching
    path('app_user/<app_user>/continue_watching/', AppuserContinueWatching.as_view(), name='userlist-detail'),
]
