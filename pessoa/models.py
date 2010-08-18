# -*- encoding: utf-8 -*-

from django.contrib.auth.models import User
from django.db import models

GENERO_CHOICES = ((1, u'Masculino'), \
                  (2, u'Feminino'))

class Pessoa(models.Model):
    data_nascimento = models.DateField()
    genero = models.IntegerField(values=GENERO_CHOICES, default=1)
    usuario = models.OneToOneField(User)

    def __unicode__(self):
        return '%s (%s)' # (self.user.get_fullname(), self.data_nascimento)

class Avaliador(models.Model):
    responsavel_por = models.ForeignKey("AreaAvaliacao")
    especialidade = models.ManyToManyField("Especializacao")
    pessoa = models.OneToOneField(Pessoa)

class Tecnico(models.Model):
    modalidade = models.ForeignKey("Modalidade")
    categoria = models.ForeignKey("CategoriaEtaria")
    classe = models.ForeignKey("ClassePeso")
    pessoa = models.OneToOneField(Pessoa)

class Atleta(models.Model):
    modalidade = models.ForeignKey("Modalidade")
    categoria = models.ForeignKey("CategoriaEtaria")
    classe = models.ForeignKey("ClassePeso")
    posicao = models.ForeignKey("PosicaoModalidade")
    pessoa = models.OneToOneField(Pessoa)

class AreaAvaliacao(models.Model):
    pass

class Especializacao(models.Model):
    pass

class Modalidade(models.Model):
    pass

class CagetoriaEtaria(models.Model):
    pass

class ClassePeso(models.Model):
    pass

class PosicaoModalidade(models.Model):
    pass
