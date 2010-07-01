# -*- encoding: utf-8 -*-

from django.db import models

GENERO_CHOICES = ((1, 'Masculino'), \
                  (2, 'Feminino'))
class Pessoa(models.Model):
    nome = models.CharField(max_length=128)
    sobrenome = models.CharField(max_length=128)
    data_nascimento = models.DateField()
    genero = models.IntegerField() #TODO definir como escolher uma opcao

class Atleta(Pessoa):
    pass

class Tecnico(Pessoa):
    pass

class Avaliador(Pessoa):
    pass

