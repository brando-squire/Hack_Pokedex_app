from django.urls import path, include

from . import views

app_name = 'pokedex'
urlpatterns = [
	path('', views.index, name='index'),
	path('init/', views.init, name='init'),
]
