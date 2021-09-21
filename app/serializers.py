from rest_framework import serializers
from .models import Recipe, Category


class RecipesSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(slug_field='name', read_only=True)  # вывод категории по имени, а не по ID
    category_id = serializers.UUIDField()  # вывод ID категории

    class Meta:
        model = Recipe
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    # recipes = serializers.StringRelatedField(many=True)
    recipes = RecipesSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = '__all__'
