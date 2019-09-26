from django.urls import path

from . import views

urlpatterns = [
    path('eject', views.eject, name='eject'),
    path('add', views.add, name='add')
]