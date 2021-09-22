from rest_framework import fields, serializers
from .models import Video_data

class SearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video_data
        #fields =['title','description','category','video_date','casting','director','video_link','video_gif']
        fields ="__all__"