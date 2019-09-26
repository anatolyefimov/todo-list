from django.http import HttpResponse
from django.core.serializers import serialize
from django.views.decorators.csrf import csrf_exempt
import json

from .models import Todo


def eject(request):
    todos = Todo.objects.all()
    data = serialize('json', todos)

    return HttpResponse(data, content_type='application/json')

@csrf_exempt
def add(request):
    data = json.loads(request.body)
    todo = Todo(text=data['text'], is_done=data['isDone'])
    todo.save()
    res = json.dumps({'pk': todo.id})

    return HttpResponse(res, content_type='application/json')

@csrf_exempt
def delete(request):
    data = json.loads(request.body)
    todo = Todo.objects.get(pk=data['pk'])
    todo.delete()
    res = json.dumps({'status': 'ok'})

    return HttpResponse(res, content_type='application/json')



