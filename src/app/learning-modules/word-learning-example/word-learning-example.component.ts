import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GlobalData } from 'src/app/shared/app-data';
import { AppDataService } from 'src/app/shared/app-data.service';
import { Word } from 'src/app/shared/interfaces/app.interface';

@Component({
  selector: 'app-word-learning-example',
  templateUrl: './word-learning-example.component.html',
  styleUrls: ['./word-learning-example.component.scss']
})
export class WordLearningExampleComponent implements OnInit {
  wordData: Word;
  appDataService: AppDataService;

  _languageWord: string;

  @Input()
  get languageWord(): string {
    return this._languageWord;
  }
  set languageWord(value: string) {
    this._languageWord = value;
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
    this.wordData = this.appDataService.getWordByLanguage(this._languageWord);
  }

  completedModule() {
    this.completed.emit(true);
  }
}
