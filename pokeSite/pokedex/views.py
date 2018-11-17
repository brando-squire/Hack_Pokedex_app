from django.shortcuts import render

import requests

from .models import pokemon


def index(request):
    response = requests.get('https://pokeapi.co/api/v2/pokemon/')
    for j in range(1,151):
        allPokeData = response.json()
        print(allPokeData['results']['name'])

    for i in range(1,151):
        response = requests.get('https://pokeapi.co/api/v2/pokemon/' + i + '/')
        pokeData = response.json()
        p = pokemon(pokeName = pokeData[''])

    return render(request, 'pokedex/index.html')
