from django.db import models
from netflix_app.models import App_user_account , Video_data
from rest_framework import fields, serializers
from django.contrib.auth.models import User

from netflix_app.models import App_user_account, App_user_lastwatchlist , Video_data ,Video_category


class SearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video_data
        #fields =['title','description','category','video_date','casting','director','video_link','video_gif']
        fields ="__all__"


class App_user_accountSerializer(serializers.ModelSerializer):
    main_user = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = App_user_account
        #exclude = ['anyfeildifrequired']
        fields = "__all__"

 
class App_user_lastwatchlistSerializer(serializers.ModelSerializer):
    app_user = serializers.StringRelatedField(read_only=True)
    video_watchlist__title = serializers.StringRelatedField(read_only=True)
    video_watchlist__id = serializers.IntegerField(read_only=True)
    video_watchlist__video_gif = serializers.URLField(read_only=True)

    class Meta:
        model = App_user_lastwatchlist
        #exclude = ['anyfeildifrequired']
        fields = ['app_user','video_watchlist__title','video_watchlist__id', 'video_watchlist__video_gif']
    


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


#Latest Shows Serializer
class VideoDataSerializer(serializers.ModelSerializer):
    id= serializers.IntegerField(read_only=True)
    title= serializers.StringRelatedField(read_only=True)
    description= serializers.StringRelatedField(read_only=True)
    video_date= serializers.StringRelatedField(read_only=True)
    casting= serializers.StringRelatedField(read_only=True)
    director= serializers.StringRelatedField(read_only=True)
    video_link= serializers.URLField(read_only=True)
    video_gif= serializers.URLField(read_only=True)
    category__id= serializers.IntegerField(read_only=True)
    category__category= serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Video_data
        #fields ="__all__"
        fields = ['id','title','description', 'video_date', 'casting', 'director', 'video_link', 'video_gif','category__id', 'category__category']
    

    
