from django.db import models

class Todo(models.Model): 
    text = models.CharField(max_length=200)
    is_done = models.BooleanField(default=False)

    def __str__(self):
        text = self.text
        status = "done" if self.is_done else "undone"
        
        return 'text: {}, status: {}'.format(text, status)



