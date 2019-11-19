from django.shortcuts import render
from django.utils.safestring import mark_safe
import json

# Create your views here.
def home(request):
    return render(request,'game/gamesleect.html',)

def room(request, room_name):
    return render(request, 'game/game.html', {
        'room_name_json': mark_safe(json.dumps(room_name)),
    })