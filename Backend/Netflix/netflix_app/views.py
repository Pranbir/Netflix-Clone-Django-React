
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import (generics,
                           permissions)
from netflix_app.models import (App_user_account, 
                                App_user_lastwatchlist, 
                                Video_data,
                                Video_category)
from netflix_app.serializers import (
                                    App_user_accountSerializer , 
                                    App_user_lastwatchlistSerializer, 
                                    SearchSerializer, UserSerializer, 
                                    RegisterSerializer,
                                    VideoDataSerializer)
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse
from django.contrib.auth import login
from knox.models import AuthToken
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.views import LoginView as KnoxLoginView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from knox.auth import TokenAuthentication
from .permissions import IsAppUserOwnerLoggedIn
from .pagination import LatestShowsPagination



class AppuserList(generics.ListCreateAPIView):
    # view to get all users under current logged in user ListAPIView
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    queryset = App_user_account.objects.all()
    serializer_class = App_user_accountSerializer

    def get_queryset(self):
        return App_user_account.objects.all().filter(main_user=self.request.user)


class AppuserListDeatil(generics.RetrieveUpdateDestroyAPIView):
    # allows to edit, update, delete, create new sub-user under main user
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated, IsAppUserOwnerLoggedIn,)
    serializer_class = App_user_accountSerializer
    queryset = App_user_account.objects.all()


class AppuserContinueWatching (generics.ListAPIView):
    # gets you watchlist based on particluar app-user under main user
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,IsAppUserOwnerLoggedIn,)
    serializer_class = App_user_lastwatchlistSerializer
    queryset = App_user_lastwatchlist.objects.all()

    def get_queryset(self):
        appuser = self.kwargs["app_user"]
        return App_user_lastwatchlist.objects.filter(app_user = appuser).values('app_user','video_watchlist__title', 'video_watchlist__id', 'video_watchlist__video_gif')


def index(request):
    return JsonResponse({"message":"Hello everyone! you are at netflix_app home page!!!"})

  
class SearchApi(generics.ListAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    queryset = Video_data.objects.all()
    serializer_class = SearchSerializer
    filter_backends = [filters.SearchFilter]
    filterset_fields =['title','category','director'] 


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
        "user": UserSerializer(user, context=self.get_serializer_context()).data,
        "token": AuthToken.objects.create(user)[1]
        })


class LoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginAPI, self).post(request, format=None)

      
#latest show api
class LatestShows(generics.ListAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    queryset = Video_data.objects.select_related('category').order_by('-id').values('id','title','description', 'video_date', 'casting', 'director', 'video_link', 'video_gif','category__id', 'category__category')
    serializer_class = VideoDataSerializer
    pagination_class = LatestShowsPagination
    #permission_classes = [IsAdminUser]




   



