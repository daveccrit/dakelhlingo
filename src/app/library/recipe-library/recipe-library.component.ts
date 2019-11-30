import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-library',
  templateUrl: './recipe-library.component.html',
  styleUrls: ['./recipe-library.component.scss'],
})
export class RecipeLibraryComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit() {}

  goBack(): void {
    this.location.back();
  }
}
