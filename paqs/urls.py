from django.contrib import admin
from django.urls import path, include
from . import views


#PAQs App

urlpatterns = [
    path('', views.index, name=''),
    path('backpaq', views.backpaq, name='backpaq'),
    path('headachepaq', views.headachepaq, name='headachepaq'),
    path('gerdpaq', views.gerdpaq, name='gerdpaq'),
]