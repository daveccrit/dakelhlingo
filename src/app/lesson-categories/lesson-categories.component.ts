import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AppDataService } from '../shared/app-data.service';
import { GlobalData } from '../shared/app-data';
import { LessonCategory } from '../shared/interfaces/app.interface';

@Component({
  selector: 'app-lesson-categories',
  templateUrl: './lesson-categories.component.html',
  styleUrls: ['./lesson-categories.component.scss']
})
export class LessonCategoriesComponent implements OnInit {
  categories: Array<LessonCategory>;
  pageReady = false;
  appDataService: AppDataService;

  constructor(private location: Location, globalData: GlobalData) {
    this.appDataService = new AppDataService(globalData);
  }

  ngOnInit() {
    this.categories = this.appDataService.getLessonCategories();
    this.pageReady = true;
  }

  goBack(): void {
    this.location.back();
  }
}
