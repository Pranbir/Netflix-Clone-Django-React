from rest_framework import fields,serializers
from .models import Video_category, Video_data,App_user_watchlist





class LatestShowSerializer(serializers.ModelSerializer):
    class Meta :
        model = Video_data
        fields ="__all__"


