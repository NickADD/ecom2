from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Freebie


class FreebieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Freebie
        fields = '__all__'