from django.http import HttpResponse
from django.core.serializers import serialize

from .models import Todo


def eject(request):
    todos = Todo.objects.all()
    data = serialize('json', todos)

    return HttpResponse(data, content_type='application/json')


