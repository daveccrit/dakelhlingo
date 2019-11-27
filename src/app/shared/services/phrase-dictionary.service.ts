import { Injectable } from '@angular/core';
import phraseData from '../../../assets/data/dakelh-phrases.json';
import { Phrase } from '../interfaces/app.interface.js';

@Injectable({
  providedIn: 'root',
})
export class PhraseDictionaryService {
  languagePhrases: Array<Phrase>;

  constructor() {
    this.languagePhrases = phraseData;
  }

  getPhraseByLanguage(languagePhrase: string): Phrase {
    return this.languagePhrases.find(value => value.dakelh.toLowerCase() === languagePhrase.toLowerCase());
  }

  getPhrasesBySearch(filterText: string): Array<Phrase> {
    if (filterText.length <= 0) {
      return [];
    }

    filterText = filterText.toLowerCase();

    const filterArray = filterText.split(' ');

    let results = this.languagePhrases.filter(
      value =>
        this.searchFilter(value.phraseCategory, filterArray) ||
        this.searchFilter(value.dakelh, filterArray) ||
        this.searchFilter(value.english, filterArray),
    );
    return results;
  }

  searchFilter(value: string, filterArray: Array<string>): boolean {
    let foundValue = true;
    let phrase = value.toLowerCase();

    filterArray.forEach(item => {
      if (phrase.indexOf(item) < 0) {
        foundValue = false;
      }
    });

    return foundValue;
  }
}
