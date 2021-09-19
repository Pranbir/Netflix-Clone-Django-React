from django.db import models
from django.contrib.auth.models import User


class App_user_account(models.Model):
    '''
    This App_user_account model is made to make the different user accounts from main account
    '''
    main_user = models.ForeignKey(User, on_delete=models.CASCADE)
    app_user = models.CharField(max_length=50)
    app_profile_pic = models.ImageField(null=True, default=None)

    def __str__(self):
        return self.app_user



class Video_category(models.Model):
    '''
    This Video_category model is made to add category of the video_data
    '''
    category = models.CharField(max_length=50, blank=False, null=False)

    def __str__(self):
        return self.category


class Video_data(models.Model):
    '''
    This Video_data model is made to add video data like title, year-released, category, director, etc..
    '''
    title = models.CharField(max_length=50, blank=False, null=False)
    description = models.TextField(blank=True, null=True)
    category = models.ForeignKey(Video_category, on_delete=models.PROTECT)
    video_date = models.DateTimeField(auto_now_add=True)
    casting = models.CharField(max_length=50, blank=True, null=True)
    director = models.CharField(max_length=50, blank=True, null=True)
    video_link = models.URLField(null=True, default='https://www.youtube.com/')
    video_gif = models.ImageField(null=True, upload_to='upload/', default=None)

    def __str__(self):
        return self.title


class App_user_watchlist(models.Model):
    app_user = models.ForeignKey(App_user_account, on_delete=models.CASCADE)
    video_watchlist = models.ForeignKey(Video_data, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.app_user)


class App_user_favoritelist(models.Model):
    app_user = models.ForeignKey(App_user_account, on_delete=models.CASCADE)
    video_watchlist = models.ForeignKey(Video_data, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.app_user)


class App_user_lastwatchlist(models.Model):
    app_user = models.ForeignKey(App_user_account, on_delete=models.CASCADE)
    video_watchlist = models.ForeignKey(Video_data, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.app_user)