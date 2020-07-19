import pytest
from django.test import TestCase
from mixer.backend.django import mixer
from graphene.test import Client
from hangman.models import Word
from config.schema import schema


words_query = '''
    query {
        words {
            id
            text
        }
    }
'''

@pytest.mark.django_db
class TestWordSchema(TestCase):

    def setUp(self):
        '''set up'''
        self.client = Client(schema)
        self.word = mixer.blend(Word)

    def test_words_query(self):
        '''test return list of words'''
        mixer.blend(Word)

        response = self.client.execute(words_query)
        words = response.get("data").get("words")
        ok = response.get("data").get("ok")

        assert len(words)
