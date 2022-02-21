from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('freebies/', views.getFreebies, name="freebies"),
    path('freebies/<str:pk>/', views.getFreebie, name="freebie"),
    ]