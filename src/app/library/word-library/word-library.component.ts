import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Word } from 'src/app/shared/interfaces/app.interface';
import { WordsDictionaryService } from 'src/app/shared/services/words-dictionary.service';

@Component({
  selector: 'app-word-library',
  templateUrl: './word-library.component.html',
  styleUrls: ['./word-library.component.scss']
})
export class WordLibraryComponent implements OnInit {
  words: Array<Word> = [];

  _categoryFilter = '';
  get categoryFilter(): string {
    return this._categoryFilter;
  }
  set categoryFilter(value: string) {
    this._categoryFilter = value;
    this.getWords();
  }

  constructor(
    private location: Location,
    private wordDictionaryService: WordsDictionaryService
  ) {}

  ngOnInit() {
    this.getWords();
  }

  getWords() {
    this.words = this.wordDictionaryService.getWordsBySearch(
      this.categoryFilter
    );
  }

  goBack(): void {
    this.location.back();
  }
}
