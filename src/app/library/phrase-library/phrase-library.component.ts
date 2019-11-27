import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Phrase } from 'src/app/shared/interfaces/app.interface';
import { PhraseDictionaryService } from 'src/app/shared/services/phrase-dictionary.service';

@Component({
  selector: 'app-phrase-library',
  templateUrl: './phrase-library.component.html',
  styleUrls: ['./phrase-library.component.scss'],
})
export class PhraseLibraryComponent implements OnInit {
  phrases: Array<Phrase> = [];
  resultCount: number;

  _categoryFilter = '';
  get categoryFilter(): string {
    return this._categoryFilter;
  }
  set categoryFilter(value: string) {
    this._categoryFilter = value;
    this.getPhrases();
  }

  constructor(private location: Location, private phraseDictionaryService: PhraseDictionaryService) {}

  ngOnInit() {
    this.getPhrases();
  }

  getPhrases() {
    const phraseList = this.phraseDictionaryService.getPhrasesBySearch(this.categoryFilter);

    this.resultCount = phraseList.length;

    if (phraseList.length > 20) {
      phraseList.length = 20;
    }

    this.phrases = phraseList;
  }

  goBack(): void {
    this.location.back();
  }
}
