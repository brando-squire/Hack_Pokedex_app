from django.shortcuts import render, redirect

import requests

from .models import pokemon


def index(request):
    pokeList = pokemon.objects.all().order_by('getName')
    return render(request, 'pokedex/index.html',{
        'pokeList': "pokelist",
    })

def init(request):
    response = requests.get('https://pokeapi.co/api/v2/pokemon/')
    allPokeData = response.json()
    for i in range(0,1):
        name = allPokeData['results'][i]['name']
        response = requests.get('https://pokeapi.co/api/v2/pokemon/' + str(i+1) + '/')
        pokeData = response.json()
    
        if len(pokeData['types']) == 2:
            type1 = pokeData['types'][0]['type']['name']
            type2 = pokeData['types'][1]['type']['name']
        else:
            type1 = pokeData['types'][0]['type']['name']
            type2 = "none"
        p = pokemon(pokeName = allPokeData['results'][i]['name'], pokeType1 = type1, pokeType2 = type2)

    return redirect('pokedex:index')
