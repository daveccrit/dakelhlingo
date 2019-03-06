import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GlobalData } from 'src/app/shared/app-data';
import { AppDataComponent } from 'src/app/shared/app-data.component';
import { Word, LessonCategory } from 'src/app/shared/interfaces/app.interface';

@Component({
  selector: 'app-word-library',
  templateUrl: './word-library.component.html',
  styleUrls: ['./word-library.component.scss']
})
export class WordLibraryComponent extends AppDataComponent implements OnInit {
  words: Array<Word> = [];

  _categoryFilter = '';
  get categoryFilter(): string {
    return this._categoryFilter;
  }
  set categoryFilter(value: string) {
    this._categoryFilter = value;
    this.getWords();
  }

  constructor(private location: Location, globalData: GlobalData) {
    super(globalData);
  }

  ngOnInit() {
    this.getWords();
  }

  getWords() {
    this.words = this.getWordsBySearch(this.categoryFilter);
  }

  goBack(): void {
    this.location.back();
  }
}
