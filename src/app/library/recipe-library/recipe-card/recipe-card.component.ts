import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Recipe } from 'src/app/shared/interfaces/app.interface';
import { RecipesService } from 'src/app/shared/services/recipes.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {
  recipe: Recipe;

  get recipeId(): number {
    return this._recipeId;
  }
  set recipeId(value: number) {
    this._recipeId = value;
    this.recipe = this.recipesService.getRecipeById(this.recipeId);
  }
  _recipeId: number;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.recipeId = +this.route.snapshot.paramMap.get('recipeid');
  }


  goBack(): void {
    this.location.back();
  }
}
