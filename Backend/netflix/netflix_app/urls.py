from django.urls import path
from .views import categorylist, latestshowlist,Watchlist

urlpatterns = [
    path('category/', categorylist),
    path('latest_show/',latestshowlist),
    
]
