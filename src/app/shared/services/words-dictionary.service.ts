import { Injectable } from '@angular/core';
import { Word, WordCategory } from '../interfaces/app.interface';
import wordData from '../../../assets/data/dakelh-words.json';
import wordCategoryData from '../../../assets/data/dakelh-word-categories.json';

@Injectable({
  providedIn: 'root',
})
export class WordsDictionaryService {
  languageWords: Array<Word>;
  wordCategories: Array<WordCategory>;

  constructor() {
    this.languageWords = wordData;
    this.wordCategories = wordCategoryData;
  }

  getWordCategories(): Array<WordCategory> {
    return this.wordCategories;
  }

  getWordCategory(categoryId: number): WordCategory {
    return this.wordCategories.find(wordCategory => categoryId === wordCategory.id);
  }

  getWordsByCategory(wordCategory: WordCategory): Array<Word> {
    return this.languageWords.filter(value => value.wordCategory.toLowerCase() === wordCategory.dakelh.toLowerCase());
  }

  getWordsBySearch(filterText: string): Array<Word> {
    if (filterText.length <= 0) {
      return [];
    }

    return this.languageWords.filter(
      value =>
        value.wordCategory.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 ||
        value.dakelh.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 ||
        value.english.toLowerCase().indexOf(filterText.toLowerCase()) >= 0,
    );
  }

  getWordByLanguage(languageWord: string): Word {
    return this.languageWords.find(value => value.dakelh.toLowerCase() === languageWord.toLowerCase());
  }

  getRandomWord(wordCategory?: WordCategory): Word {
    let languageWords = [];
    if (wordCategory) {
      languageWords = this.languageWords.filter(
        value => value.wordCategory.toLowerCase() === wordCategory.dakelh.toLowerCase(),
      );
    } else {
      languageWords = this.languageWords;
    }

    const randomWordNum = Math.floor(Math.random() * languageWords.length);
    return languageWords[randomWordNum];
  }
}
