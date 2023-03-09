from rest_framework import serializers
from .models import Image

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = (
            'img_id',
            'label',
            'timestamp',
            'data',
            'longitude',
            'latitude'
        )