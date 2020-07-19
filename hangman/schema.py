import graphene
from graphene_django import DjangoObjectType
from hangman.models import Word


class WordType(DjangoObjectType):
    class Meta:
        model = Word


class Query(graphene.ObjectType):
    '''return list of words'''
    words = graphene.List(WordType)

    def resolve_words(self, info, **kwargs):
        return Word.objects.all()
