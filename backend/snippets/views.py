from django.shortcuts import render
import json

from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from django.db.models import Q
from django.core import serializers

# from snippets.models import Snippet
# from snippets.serializers import SnippetSerializer

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics, viewsets
from rest_framework.reverse import reverse

from snippets.models import Company, Product, Representative
from snippets.serializers import CompanySerializer, ProductSerializer, RepresentativeSerializer, ProductSearchSerializer

#ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, RetrieveAPIView

class CompanyView(viewsets.ModelViewSet): # Does the same thing as the methods below
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class ProductView(viewsets.ModelViewSet): 
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class RepresentativeView(viewsets.ModelViewSet): 
    queryset = Representative.objects.all()
    serializer_class = RepresentativeSerializer

@api_view(['GET'])
def company_product_search_list (request, keyword):

    companies = Company.objects.filter(
        Q(product__product_name__contains = keyword)| 
        Q(product__product_description__contains = keyword)).distinct()
    
    # query = Product.objects.select_related("company").all()  
    
    # products = query.filter(
    #     Q(product_name__contains = keyword)| 
    #     Q(product_description__contains = keyword))  

    serializer = ProductSearchSerializer(companies, many=True, context = {'request' : request})
    
    # # serialized_data = serializers.serialize("json", products, use_natural_foreign_keys=True, use_natural_primary_keys=True)
    # # serialized_data =json.loads(serialized_data)
    # # print (serializer.data)
    
    return Response(serializer.data)

# @api_view(['GET'])
# def company_product_search_list (request, keyword):

#     query = Product.objects.select_related("company").all()  
    
#     products = query.filter(
#         Q(product_name__contains = keyword)| 
#         Q(product_description__contains = keyword))  

#     serialized_data = serializers.serialize("json", products, use_natural_foreign_keys=False)
#     serialized_data =json.loads(serialized_data)
#     # serializer = ProductSerializer(products, many=True, context = {'request' : request})
#     # print (serializer.data)
    
#     return Response(serialized_data)# serializer.data)

#------------------------------------------------------------------------#

# @api_view(['GET'])
# def product_search_list (request, keyword):

#     # pros = publication.objects.select_related('country', 'country_state', 'city')
#     query = Product.objects.select_related("company_id").all()  
#     products = query.filter(
#         Q(product_name__contains = keyword)| 
#         Q(product_description__contains = keyword))  
#     # products = CompanyProduct.objects.filter(product_name__contains = keyword)
#     serializer = CompanyProductSerializer(products, many=True)
#     return Response(serializer.data)

# @api_view(['GET', 'POST'])
# def company_list(request, format = None):
#     """
#     List all companies in databases
#     """
#     if request.method == 'GET':
#         companies = Company.objects.all()
#         serializer = CompanySerializer(companies, many=True)
#         return Response(serializer.data)
        
#     elif request.method == 'POST':
#         serializer = CompanySerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['GET', 'PUT', 'DELETE'])
# def company_detail(request, pk, format = None):
#     """
#     Retrieve, update or delete a code snippet.
#     """
#     try:
#         company = Company.objects.get(pk=pk)
#     except Company.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'GET':
#         serializer = CompanySerializer(company)
#         return Response(serializer.data)

#     elif request.method == 'PUT':
#         serializer = CompanySerializer(company, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     elif request.method == 'DELETE':
#         company.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)

# @api_view(['GET', 'POST'])
# def product_list(request, format = None):
#     """
#     List all companies in databases
#     """
#     if request.method == 'GET':
#         products = CompanyProduct.objects.all()
#         serializer = CompanyProductSerializer(products, many=True)
#         return Response(serializer.data)
        
#     elif request.method == 'POST':
#         serializer = CompanyProductSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['GET', 'PUT', 'DELETE'])
# def product_detail(request, pk, format = None):
#     """
#     Retrieve, update or delete a code snippet.
#     """
#     try:
#         product = CompanyProduct.objects.get(pk=pk)
#     except Company.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'GET':
#         serializer = CompanyProductSerializer(product)
#         return Response(serializer.data)

#     elif request.method == 'PUT':
#         serializer = CompanyProductSerializer(product, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     elif request.method == 'DELETE':
#         product.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)


#--------------------------------------------------------------------#

# @api_view(['GET', 'POST'])
# def snippet_list(request, format = None ):
#     """
#     List all code snippets, or create a new snippet.
#     """
#     if request.method == 'GET':
#         snippets = Snippet.objects.all()
#         serializer = SnippetSerializer(snippets, many=True)
#         return Response(serializer.data)

#     elif request.method == 'POST':
#         serializer = SnippetSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['GET', 'PUT', 'DELETE'])
# def snippet_detail(request, pk, format = None):
#     """
#     Retrieve, update or delete a code snippet.
#     """
#     try:
#         snippet = Snippet.objects.get(pk=pk)
#     except Snippet.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'GET':
#         serializer = SnippetSerializer(snippet)
#         return Response(serializer.data)

#     elif request.method == 'PUT':
#         serializer = SnippetSerializer(snippet, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     elif request.method == 'DELETE':
#         snippet.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)