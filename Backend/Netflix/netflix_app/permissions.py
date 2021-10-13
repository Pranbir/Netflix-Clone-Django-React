
from rest_framework import permissions
from netflix_app.models import App_user_account


class IsAppUserOwnerLoggedIn(permissions.BasePermission):
    """
    Custom permission to only allow owners of an AppUser object to edit it.
    """
    def has_object_permission(self, request, view, obj):
        return obj.main_user == request.user
    
    def has_permission(self, request, view):
        if "pk" in view.kwargs:
            return App_user_account.objects.get(id=view.kwargs["pk"]).main_user == request.user
        else:
            return App_user_account.objects.get(id=view.kwargs["app_user"]).main_user == request.user
