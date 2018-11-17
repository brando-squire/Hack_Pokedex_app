from django.db import models

class pokemon(models.Model):
    pokeName = models.CharField(max_length = 20)
    pokeType1 = models.CharField(max_length = 20)
    pokeType2 = models.CharField(max_length = 20)

    def getName(self):
        return self.pokeName

    def getType1(self):
        return self.pokeType1

    def getType2(self):
        return self.pokeType2
