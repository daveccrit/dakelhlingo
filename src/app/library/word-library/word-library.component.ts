import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Word } from 'src/app/shared/interfaces/app.interface';
import { WordsDictionaryService } from 'src/app/shared/services/words-dictionary.service';

@Component({
  selector: 'app-word-library',
  templateUrl: './word-library.component.html',
  styleUrls: ['./word-library.component.scss'],
})
export class WordLibraryComponent implements OnInit {
  words: Array<Word> = [];
  resultCount: number;
  characterArray: Array<string> = `'abcdefghijklmnopqrstuvwxyz`.split('');
  _maxShown = 100;

  _searchFilter = '';
  get searchFilter(): string {
    return this._searchFilter;
  }
  set searchFilter(value: string) {
    this._searchFilter = value;
    this.getWords();
  }

  constructor(private location: Location, private wordDictionaryService: WordsDictionaryService) { }

  ngOnInit() { }

  getWords() {
    const wordsList = this.wordDictionaryService.getWordsBySearch(this.searchFilter);

    this.resultCount = wordsList.length;

    if (wordsList.length > this._maxShown) {
      wordsList.length = this._maxShown;
    }

    this.words = wordsList;
  }

  getWordsByCharacter(character: string) {
    this._searchFilter = '';
    const wordsList = this.wordDictionaryService.getWordsByCharacter(character);

    this.resultCount = wordsList.length;

    if (wordsList.length > this._maxShown) {
      wordsList.length = this._maxShown;
    }

    this.words = wordsList;
  }

  goBack(): void {
    this.location.back();
  }
}
