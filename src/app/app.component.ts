import { Component, OnInit } from '@angular/core';
import { GetDataService } from './shared/services/get-data.service';
import { GlobalData } from './shared/app-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GlobalData]
})
export class AppComponent implements OnInit {
  lessonLevel = '';

  appDataReady = false;
  languageWordDataReady = false;
  lessonCategoriesDataReady = false;
  appReady = false;

  constructor(
    private getDataService: GetDataService,
    private globalData: GlobalData
  ) {}

  ngOnInit() {
    if (!this.globalData.app) {
      this.getDataService.getData('app').subscribe(data => {
        this.globalData.app = data;
        this.appDataReady = true;
        this.checkAppReady();
      });
    }

    if (!this.globalData.languageWords) {
      this.getDataService.getData('dakelh-words').subscribe(data => {
        this.globalData.languageWords = data;
        this.languageWordDataReady = true;
        this.checkAppReady();
      });
    }

    if (!this.globalData.lessonCategories) {
      this.getDataService.getData('dakelh-word-categories').subscribe(data => {
        this.globalData.lessonCategories = data;
        this.lessonCategoriesDataReady = true;
        this.checkAppReady();
      });
    }
  }

  checkAppReady() {
    if (
      this.lessonCategoriesDataReady &&
      this.languageWordDataReady &&
      this.appDataReady
    ) {
      this.appReady = true;
    }
  }
}
