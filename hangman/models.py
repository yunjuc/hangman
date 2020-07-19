from django.db import models


class Word(models.Model):
    text = models.CharField(max_length=50)

    def __str__(self):
        return self.text
