import graphene
from hangman.schema import Query


class Query(Query, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query)
