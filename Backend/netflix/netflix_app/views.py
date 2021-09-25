from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from .models import App_user_lastwatchlist, Video_category,Video_data,App_user_watchlist
from .serializers import VideoCategorySerializer,LatestShowSerializer

from rest_framework.response import Response
from rest_framework import serializers, status





@api_view(['GET'])
def latestshowlist(request):
    video = Video_data.objects.all()
    serializer = LatestShowSerializer(video , many=True)
    return Response(serializer.data)



