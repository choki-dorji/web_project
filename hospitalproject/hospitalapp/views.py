from django.shortcuts import render
from rest_framework.views import  APIView
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .serilizers import prescriptionSerializer
from .models import prescription
from rest_framework import generics
from rest_framework import filters
# Create your views here.

class getProjectDetail(APIView):
    def get(self, request):
        candidateData = prescription.objects.all()
        serialize = prescriptionSerializer(candidateData, many=True)
        return Response(serialize.data)

class newprescription(ModelViewSet):
    serializer_class = prescriptionSerializer
    queryset = prescription.objects.all()

class search(generics.ListAPIView):
    queryset = prescription.objects.all()
    serializer_class = prescriptionSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['patient_cid']