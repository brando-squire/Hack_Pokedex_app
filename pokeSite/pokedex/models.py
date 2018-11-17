from django.db import models

class pokemon(models.Model):
    pokeName = models.CharField(max_length = 20)
    pokeType1 = models.CharField(max_length = 20)
    pokeType2 = models.CharField(max_length = 20)

    def __str__(self):
        return '%s %s %s' % (self.pokeName, self.pokeType1, self.pokeType2)

