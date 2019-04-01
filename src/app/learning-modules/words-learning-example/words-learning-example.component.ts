import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Word } from 'src/app/shared/interfaces/app.interface';
import { AppDataService } from 'src/app/shared/app-data.service';
import { GlobalData } from 'src/app/shared/app-data';

@Component({
  selector: 'app-words-learning-example',
  templateUrl: './words-learning-example.component.html',
  styleUrls: ['./words-learning-example.component.scss']
})
export class WordsLearningExampleComponent implements OnInit {
  wordsData: Array<Word>;
  appDataService: AppDataService;

  _languageWords: Array<string>;

  @Input()
  get languageWords(): Array<string> {
    return this._languageWords;
  }
  set languageWords(value: Array<string>) {
    this._languageWords = value;
    this.getWordData();
  }

  @Output() completed: EventEmitter<boolean> = new EventEmitter();

  constructor(globalData: GlobalData) {
    this.appDataService = new AppDataService(globalData);
  }

  ngOnInit() {
    this.getWordData();
  }

  getWordData() {
    this.wordsData = [];

    this.languageWords.forEach(word => {
      this.wordsData.push(this.appDataService.getWordByLanguage(word));
    });
  }

  completedModule() {
    this.completed.emit(true);
  }
}
