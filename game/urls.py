from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='game-home'),
    path('<str:room_name>/', views.room, name='room'),
]