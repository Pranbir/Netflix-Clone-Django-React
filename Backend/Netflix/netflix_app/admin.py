from django.contrib import admin
from .models import App_user_account, Video_data, Video_category, App_user_watchlist,App_user_lastwatchlist

admin.site.register(App_user_account)
admin.site.register(Video_data)
admin.site.register(Video_category)
admin.site.register(App_user_watchlist)
admin.site.register(App_user_lastwatchlist)