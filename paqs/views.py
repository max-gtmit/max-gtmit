from audioop import reverse
from base64 import encode
from dis import Instruction
from operator import truediv
from random import randint
from django.shortcuts import redirect, render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.views import View
import pdfrw
from django.core.files import File
#from azure.storage.blob import BlobServiceClient, BlobClient, ContainerClient, __version__
from paqs.utils import process_paq
#from . import nonsql
import json
import os
from .models import *
from django.contrib.auth.decorators import login_required
from django.conf import settings
#from calculator.models import User_PAQs, Disabilities
#from products.models import Products
from .mapping.headache import mapHeadache
from .mapping.GERD import mapGERD
#from products.models import Product_per_client
#from .includeProduct import addPAQtoCart as addPAQtoCart

#from main.models import IAQ
from.constants import PAQ_NAME_CHOICES

from .utils import dbq_generator

def index(request):
    return HttpResponse("hello! Make sure you change the URL to point to the PAQ you are working with")

def backpaq(request):
    return process_paq(request, PAQ_NAME_CHOICES[2], 'paqs/back_paq.html', None, 'Back - Spine', 'back_mazi')

def headachepaq(request):
    return process_paq(request, PAQ_NAME_CHOICES[15], 'paqs/headache_paq.html', mapHeadache, 'Headache (Migraines)', 'headaches')

def gerdpaq(request):
    return process_paq(request, PAQ_NAME_CHOICES[12], 'paqs/gerd.html', mapGERD, 'GERD', 'GERD')
