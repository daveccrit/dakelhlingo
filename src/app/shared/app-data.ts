import { Injectable } from '@angular/core';
import { Word, Phrase, LessonCategory } from './interfaces/app.interface';

@Injectable()
export class GlobalData {
  app: Object;
  languageWords: Array<Word>;
  languagePhrases: Array<Phrase>;
  lessonCategories: Array<LessonCategory>;
}
