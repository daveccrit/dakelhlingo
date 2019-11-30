import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WordsDictionaryService } from '../shared/services/words-dictionary.service';
import { WordCategory, Word } from '../shared/interfaces/app.interface';
import { PhraseDictionaryService } from '../shared/services/phrase-dictionary.service';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.scss'],
})
export class FlashcardsComponent implements OnInit {
  wordCategoryId: number;
  wordCategory: WordCategory;
  wordList: Array<Word>;

  phraseArray = {};

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private wordsDictionaryService: WordsDictionaryService,
    private phraseDictionaryService: PhraseDictionaryService,
  ) {}

  ngOnInit() {
    this.wordCategoryId = +this.route.snapshot.paramMap.get('catid');
    this.wordCategory = this.wordsDictionaryService.getWordCategory(this.wordCategoryId);
    this.wordList = this.wordsDictionaryService.getWordsByCategory(this.wordCategory);
    this.wordList.forEach(word => {
      this.phraseArray[word.dakelh] = [];

      [1, 2, 3].forEach(() => {
        this.phraseArray[word.dakelh].push(this.phraseDictionaryService.getRandomPhrase());
      });
    });
  }

  goBack(): void {
    this.location.back();
  }
}
