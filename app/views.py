# from rest_framework.generics import get_object_or_404
# from rest_framework.response import Response
# from rest_framework.views import APIView
from .models import Recipe, Category
from .serializers import RecipesSerializer, CategorySerializer
from rest_framework import generics


class RecipesView(generics.ListAPIView):
    queryset = Recipe.objects.all().order_by('-created')
    serializer_class = RecipesSerializer


class RecipesCreateView(generics.CreateAPIView):
    serializer_class = RecipesSerializer
    queryset = Recipe.objects.all()


class RecipesDetailView(generics.RetrieveAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipesSerializer


class RecipesDeleteView(generics.RetrieveDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipesSerializer


class RecipesUpdateView(generics.RetrieveUpdateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipesSerializer


class CategoryView(generics.ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class CategoryDetailView(generics.RetrieveAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class CategoryCreateView(generics.CreateAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class CategoryDeleteView(generics.RetrieveDestroyAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()
