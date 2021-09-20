from rest_framework import serializers
from netflix_app.models import App_user_account, App_user_lastwatchlist

class App_user_accountSerializer(serializers.ModelSerializer):
    main_user = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = App_user_account
        #exclude = ['anyfeildifrequired']
        fields = "__all__"

class App_user_lastwatchlistSerializer(serializers.ModelSerializer):
    app_user = serializers.StringRelatedField(read_only=True)
    video_watchlist = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = App_user_lastwatchlist
        #exclude = ['anyfeildifrequired']
        fields = "__all__"