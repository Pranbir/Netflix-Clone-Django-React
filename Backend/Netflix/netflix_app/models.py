from django.db import models
from django.contrib.auth.models import User
from django.db.models.expressions import F
from django.db.models.fields import TimeField


'''
This Main_user_account model is made to make the main user account
'''
class Main_user_account(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    password = models.CharField(max_length=255, blank=False, null=False)

    def __str__(self):
        return self.user


'''
This App_user_account model is made to make the different user accounts from main account
'''
class App_user_account(models.Model):
    age_choices = (
        (0, 'default'),
        (1, 'kid'),
        (2, 'teen'),
        (3, 'adult')
    )
    user_age = models.IntegerField(default=0, choices=age_choices, null=False)
    app_user = models.ForeignKey(Main_user_account, on_delete=models.CASCADE)
    favourites = models.CharField(max_length=50, blank=True, null=True)
    watch_list = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.app_user


'''
This Video_data model is made to add video data like title, year-released, category, director, etc..
'''
class Video_data(models.Model):
    video_choice = (
    (0, 'content'),
    (1, 'movies'),
    (2, 'tv-series'),
    )
    title = models.CharField(max_length=50, blank=False, null=False)
    description = models.TextField(blank=True, null=True)
    type = models.IntegerField(default=0, choices=video_choice, null=False)
    category = models.ManyToManyField(max_length=50, blank=True, null=True)
    date = models.DateTimeField(auto_now_add=True)
    year = models.IntegerField(default=0, null=False)
    casting = models.CharField(max_length=50, blank=True, null=True)
    director = models.CharField(max_length=50, blank=True, null=True)


'''
This Video_category model is made to add category of the video_data
'''
class Video_category(models.Model):
    choices = (
        (0, 'movies'),
        (1, 'tv-series'),
    )
    genre = models.ForeignKey(Video_data, max_length=50, blank=True, null=True)
    video_type = models.IntegerField(default=0, choices=choices, null=False)


class App_user_watchlist(models.Model):
    watchlist = models.ForeignKey(Video_data,max_length=255,null=True, blank=True)
    last_watched = models.TimeField(default=0, auto_now_add=True)