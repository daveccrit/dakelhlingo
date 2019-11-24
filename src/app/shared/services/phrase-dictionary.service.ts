import { Injectable } from '@angular/core';
import phraseData from '../../../assets/data/dakelh-phrases.json';
import { Phrase } from '../interfaces/app.interface.js';

@Injectable({
  providedIn: 'root'
})
export class PhraseDictionaryService {
  languagePhrases: Array<Phrase>;

  constructor() {
    this.languagePhrases = phraseData;
  }

  getPhraseByLanguage(languagePhrase: string): Phrase {
    return this.languagePhrases.find(
      value => value.dakelh.toLowerCase() === languagePhrase.toLowerCase()
    );
  }
}
