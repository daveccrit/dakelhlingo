import { Component } from '@angular/core';
import { GlobalData } from './app-data';
import { LessonCategory, Word } from './interfaces/app.interface';

@Component({
  selector: 'app-data',
  template: ``
})
export class AppDataComponent {
  constructor(public globalData: GlobalData) {}

  getLessonCategories(): Array<LessonCategory> {
    return this.globalData.lessonCategories;
  }
  getLessonCategory(categoryId: number): LessonCategory {
    return this.globalData.lessonCategories.find(
      lessonsCategory => categoryId === lessonsCategory.id
    );
  }

  getWords(lessonCategory: LessonCategory): Array<Word> {
    return this.globalData.languageWords.filter(
      value =>
        value.category.toLowerCase() === lessonCategory.dakelh.toLowerCase()
    );
  }
}
