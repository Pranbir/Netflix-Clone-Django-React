from netflix_app.models import App_user_account
from rest_framework import serializers
from django.contrib.auth.models import User

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


# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        return user

