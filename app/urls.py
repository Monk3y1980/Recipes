from django.urls import path
from .views import *


urlpatterns = [
     path('recipes/', RecipesView.as_view(), name='recipes'),
     path('recipes/create', RecipesCreateView.as_view(), name='create'),
     path('recipes/<int:pk>/', RecipesDetailView.as_view(), name='recipe'),
     path('recipes/<int:pk>/update', RecipesUpdateView.as_view(), name='update'),
     path('recipes/<int:pk>/delete', RecipesDeleteView.as_view(), name='delete'),
     path('category/', CategoryView.as_view(), name='categories'),
     path('category/create', CategoryCreateView.as_view(), name='create'),
     path('category/<int:pk>', CategoryDetailView.as_view(), name='category'),
     path('category/<int:pk>/delete', CategoryDeleteView.as_view(), name='delete'),
]