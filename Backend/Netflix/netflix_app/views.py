
from .models import Video_data
from django.http import HttpResponse
from .serializers import SearchSerializer
from rest_framework.generics import ListAPIView
from django_filters.rest_framework import DjangoFilterBackend

def index(request):
    return HttpResponse("Hello everyone! you are at netflix_app home page!!!")


class SearchApi(ListAPIView):
    queryset = Video_data.objects.all()
    serializer_class = SearchSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields =['title','category','director'] 
