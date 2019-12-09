import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RecipesService } from 'src/app/shared/services/recipes.service';
import { Recipe } from 'src/app/shared/interfaces/app.interface';

@Component({
  selector: 'app-recipe-library',
  templateUrl: './recipe-library.component.html',
  styleUrls: ['./recipe-library.component.scss'],
})
export class RecipeLibraryComponent implements OnInit {
  recipeArray: Array<Recipe>;
  characterArray: Array<string> = `'abcdefghijklmnopqrstuvwxyz`.split('');


  get searchFilter(): string {
    return this._searchFilter;
  }
  set searchFilter(value: string) {
    this._searchFilter = value;
  }
  _searchFilter = '';

  constructor(private location: Location, private recipesService: RecipesService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.recipeArray = this.recipesService.getRecipes();
  }

  goBack(): void {
    this.location.back();
  }
}
