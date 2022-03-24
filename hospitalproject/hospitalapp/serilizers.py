from rest_framework import serializers
from .models import prescription
from django.contrib.auth.models import User

class prescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = prescription
        fields = '__all__'