from rest_framework import serializers
from .models import Recipe, Category


class RecipesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Recipe
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'
