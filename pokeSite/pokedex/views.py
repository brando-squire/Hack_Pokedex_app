from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("hi")

pokeList = pokemon.objects.all().order_by('getName')