import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GlobalData } from 'src/app/shared/app-data';
import { AppDataComponent } from 'src/app/shared/app-data.component';
import { Word } from 'src/app/shared/interfaces/app.interface';

@Component({
  selector: 'app-word-learning-example',
  templateUrl: './word-learning-example.component.html',
  styleUrls: ['./word-learning-example.component.scss']
})
export class WordLearningExampleComponent extends AppDataComponent
  implements OnInit {
  wordData: Word;

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
    super(globalData);
  }

  ngOnInit() {
    this.getWordData();
  }

  getWordData() {
    this.wordData = this.getWordByLanguage(this._languageWord);
  }

  completedModule() {
    this.completed.emit(true);
  }
}
