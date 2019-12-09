import { Injectable } from '@angular/core';
import recipeData from '../../../assets/data/recipes.json';
import { Recipe } from '../interfaces/app.interface.js';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeArray: Array<Recipe>;

  constructor() {
    this.recipeArray = recipeData;
  }

  getRecipes(): Array<Recipe> {
    return this.recipeArray;
  }

  getRecipe(title: string): Recipe {
    return this.recipeArray.find(recipe => recipe.dakelh === title);
  }
  getRecipeById(id: number): Recipe {
    return this.recipeArray.find(recipe => recipe.id === id);
  }
}
