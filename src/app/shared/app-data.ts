import { Injectable } from '@angular/core';
import {
  Word,
  Phrase,
  LessonCategory,
  Lesson,
  AppData
} from './interfaces/app.interface';

@Injectable()
export class GlobalData {
  app: AppData;
  languageWords: Array<Word>;
  languagePhrases: Array<Phrase>;
  languageLessons: Array<Lesson>;
  lessonCategories: Array<LessonCategory>;
}
