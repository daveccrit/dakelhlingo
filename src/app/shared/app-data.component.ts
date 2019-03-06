import { Component } from '@angular/core';
import { GlobalData } from './app-data';
import {
  LessonCategory,
  Word,
  Lesson,
  Setting
} from './interfaces/app.interface';

@Component({
  selector: 'app-data',
  template: ``
})
export class AppDataComponent {
  constructor(public globalData: GlobalData) {}

  getLessonCategories(): Array<LessonCategory> {
    return this.globalData.lessonCategories;
  }

  getLessons(categoryId: number): Array<Lesson> {
    return this.globalData.languageLessons.filter(
      lesson => categoryId === lesson.lessonCategoryId
    );
  }

  getLesson(lessonId: number): Lesson {
    return this.globalData.languageLessons.find(
      lesson => lessonId === lesson.id
    );
  }

  setLessonComplete(lessonId: number) {
    const lessonData = this.globalData.languageLessons.find(
      lesson => lessonId === lesson.id
    );

    lessonData.completed = true;
  }

  getLessonCategory(categoryId: number): LessonCategory {
    return this.globalData.lessonCategories.find(
      lessonsCategory => categoryId === lessonsCategory.id
    );
  }

  getWordsByCategory(lessonCategory: LessonCategory): Array<Word> {
    return this.globalData.languageWords.filter(
      value =>
        value.lessonCategory.toLowerCase() ===
        lessonCategory.dakelh.toLowerCase()
    );
  }

  getWordsBySearch(filterText: string): Array<Word> {
    return this.globalData.languageWords.filter(
      value =>
        value.lessonCategory.toLowerCase().indexOf(filterText.toLowerCase()) >=
          0 ||
        value.dakelh.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 ||
        value.english.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
    );
  }

  getWordByLanguage(languageWord: string): Word {
    return this.globalData.languageWords.find(
      value => value.dakelh.toLowerCase() === languageWord.toLowerCase()
    );
  }

  getRandomWord(lessonCategory?: LessonCategory): Word {
    let languageWords = [];
    if (lessonCategory) {
      languageWords = this.globalData.languageWords.filter(
        value =>
          value.lessonCategory.toLowerCase() ===
          lessonCategory.dakelh.toLowerCase()
      );
    } else {
      languageWords = this.globalData.languageWords;
    }

    const randomWordNum = Math.floor(Math.random() * languageWords.length);
    return languageWords[randomWordNum];
  }
}
