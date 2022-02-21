from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .freebies import freebies
from .models import Freebie
from .serializers import FreebieSerializer
# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/freebies/',
        '/api/freebies/create/',

        '/api/freebies/upload/',

        '/api/freebies/top/',
        '/api/freebies/<id>/',

        '/api/freebies/delete/',
        '/api/freebies/<update>/<id>/',


    ]
    return Response(routes)

@api_view(['GET'])
def getFreebies(request):
    freebies = Freebie.objects.all()
    serializer = FreebieSerializer(freebies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getFreebie(request, pk):
    freebie = Freebie.objects.get(_id=pk)
    serializer = FreebieSerializer(freebie, many=False)
    return Response(serializer.data)        