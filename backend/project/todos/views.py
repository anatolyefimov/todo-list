from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers
import json

from .models import Todo


def index(request):
    todos = Todo.objects.all()
    res = {
        "todos": todos
    }
    

    return HttpResponse(json.dumps(todos), content_type='application/json')


