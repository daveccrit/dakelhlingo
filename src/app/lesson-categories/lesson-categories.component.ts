import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AppDataComponent } from '../shared/app-data.component';
import { GlobalData } from '../shared/app-data';
import { LessonCategory } from '../shared/interfaces/app.interface';

@Component({
  selector: 'app-lesson-categories',
  templateUrl: './lesson-categories.component.html',
  styleUrls: ['./lesson-categories.component.scss']
})
export class LessonCategoriesComponent extends AppDataComponent
  implements OnInit {
  categories: Array<LessonCategory>;
  pageReady = false;

  constructor(private location: Location, globalData: GlobalData) {
    super(globalData);
  }

  ngOnInit() {
    this.categories = this.getLessonCategories();
    this.pageReady = true;
  }

  goBack(): void {
    this.location.back();
  }
}
