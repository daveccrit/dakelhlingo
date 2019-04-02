import { Injectable } from '@angular/core';
import { Word, LessonCategory } from '../interfaces/app.interface';
import dakelhDictionary from '../../../assets/data/dakelh-words.json';

@Injectable({
  providedIn: 'root'
})
export class WordsDictionaryService {
  languageWords: Array<Word>;

  constructor() {
    this.languageWords = dakelhDictionary;
  }

  getWordsByCategory(lessonCategory: LessonCategory): Array<Word> {
    return this.languageWords.filter(
      value =>
        value.lessonCategory.toLowerCase() ===
        lessonCategory.dakelh.toLowerCase()
    );
  }

  getWordsBySearch(filterText: string): Array<Word> {
    return this.languageWords.filter(
      value =>
        value.lessonCategory.toLowerCase().indexOf(filterText.toLowerCase()) >=
          0 ||
        value.dakelh.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 ||
        value.english.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
    );
  }

  getWordByLanguage(languageWord: string): Word {
    return this.languageWords.find(
      value => value.dakelh.toLowerCase() === languageWord.toLowerCase()
    );
  }

  getRandomWord(lessonCategory?: LessonCategory): Word {
    let languageWords = [];
    if (lessonCategory) {
      languageWords = this.languageWords.filter(
        value =>
          value.lessonCategory.toLowerCase() ===
          lessonCategory.dakelh.toLowerCase()
      );
    } else {
      languageWords = this.languageWords;
    }

    const randomWordNum = Math.floor(Math.random() * languageWords.length);
    return languageWords[randomWordNum];
  }
}
