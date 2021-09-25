from django.contrib.auth.models import User
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import generics
from netflix_app.models import App_user_account, App_user_lastwatchlist
from netflix_app.serializers import App_user_accountSerializer , App_user_lastwatchlistSerializer
from rest_framework.permissions import IsAuthenticated
from django.http import HttpResponse
from rest_framework import generics, permissions
from django.contrib.auth import login
from knox.models import AuthToken
from rest_framework.response import Response
from rest_framework.authtoken.serializers import AuthTokenSerializer
from .serializers import UserSerializer, RegisterSerializer
from knox.views import LoginView as KnoxLoginView


class AppuserList(generics.ListCreateAPIView):
    # view to get all users under current logged in user ListAPIView
    permission_classes = [IsAuthenticated]  
    queryset = App_user_account.objects.all()
    serializer_class = App_user_accountSerializer

    def get_queryset(self):
        return App_user_account.objects.all().filter(main_user=self.request.user)


class AppuserListDeatil(generics.RetrieveUpdateDestroyAPIView):
    # allows to edit, update, delete, create new sub-user under main user
    permission_classes = [IsAuthenticated]
    queryset = App_user_account.objects.all()
    serializer_class = App_user_accountSerializer


class AppuserContinueWatching (generics.ListAPIView):
    # gets you watchlist based on particluar app-user under main user
    permission_classes = [IsAuthenticated]
    queryset = App_user_lastwatchlist.objects.all()
    serializer_class = App_user_lastwatchlistSerializer

    def get_queryset(self):
        appuser = self.kwargs["app_user"]
        return App_user_lastwatchlist.objects.filter(app_user = appuser)


def index(request):
    return HttpResponse("Hello everyone! you are at netflix_app home page!!!")
    

class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

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

      
