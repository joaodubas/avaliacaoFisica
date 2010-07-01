# -*- encoding: utf-8 -*-

from django.db import models

#--- Avaliacao Muscular --------------------------------------------------------
class Isocinetico(models.Model):
    pass

class CargaRepeticaoMaxima(models.Model):
    pass

#--- Avaliacao Aerobia ---------------------------------------------------------
class AerobioDireto(models.Model):
    pass

class AerobioIndireto(models.Model):
    pass

#--- Avaliacao Flexibilidade ---------------------------------------------------
class Fleximetro(models.Model):
    pass

class SentarEAlcancar(models.Model):
    pass

class Flexiteste(models.Model):
    pass

#--- Avaliacao Composicao Corporal ---------------------------------------------
class Circunferencia(models.Model):
    pass

class DobraCutanea(models.Model):
    pass

class DiametroOsseo(models.Model):
    pass