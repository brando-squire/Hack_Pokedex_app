from django.shortcuts import render

import requests

from .models import pokemon


def index(request):
    response = requests.get('https://pokeapi.co/api/v2/pokemon/')
    for i in range(1,151):
        allPokeData = response.json()
        response = requests.get('https://pokeapi.co/api/v2/pokemon/' + str(i) + '/')
        pokeData = response.json()
        if len(pokeData['types']) == 2:
            type1 = pokeData['types'][0]['type']['name']
            type2 = pokeData['types'][1]['type']['name']
        else:
            type1 = pokeData['types'][0]['type']['name']
            type2 = "none"
        p[i] = pokemon(pokeName = allPokeData['results'][i]['name'], pokeType1 = type1, pokeType2 = type2)

    return render(request, 'pokedex/index.html')
