from django.db import models
from django.db.models.base import Model
from django.db.models.deletion import SET_DEFAULT

# Create your models here.
class User(models.Model):
    fullname = models.TextField()
    subscrition = models.BooleanField()
