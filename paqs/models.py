from django.db import models

#from main.models import Account
from .constants import PAQ_NAME_CHOICES

# Create your models here.

class PAQ(models.Model):
    name = models.CharField(max_length=50, choices=PAQ_NAME_CHOICES, unique=True)
    #user = models.OneToOneField(Account, on_delete=models.CASCADE)
    paq_record = models.CharField(max_length=255,default=None,null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)