import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Input, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Word } from 'src/app/shared/interfaces/app.interface';
import { WordsDictionaryService } from 'src/app/shared/services/words-dictionary.service';
import { MatButton } from '@angular/material';

@Component({
  selector: 'app-word-spelling',
  templateUrl: './word-spelling.component.html',
  styleUrls: ['./word-spelling.component.scss']
})
export class WordSpellingComponent implements OnInit, AfterViewInit {
  @ViewChild('audio', { static: false }) audioElement: ElementRef<HTMLAudioElement>;
  @ViewChild('languageTextContainer', { static: true })
  languageTextContainer: ElementRef<HTMLElement>;
  @ViewChildren('letterButton') letterButtons: QueryList<MatButton>;

  wordData: Word;
  letterArray: Array<string> = [];
  populatedLetterArray: Array<string> = [];

  @Input()
  get languageWord(): string {
    return this._languageWord;
  }
  set languageWord(value: string) {
    this._languageWord = value;
    this.getWordData();
  }
  _languageWord: string;

  @Output() completed: EventEmitter<boolean> = new EventEmitter();

  constructor(private wordsDictionaryService: WordsDictionaryService) { }

  ngOnInit() {
    this.getWordData();
  }

  ngAfterViewInit() {
    let totalWidth = 0;

    this.letterButtons.forEach(button => {
      totalWidth +=
        (button._elementRef.nativeElement as HTMLElement).querySelector('.mat-button-wrapper').getBoundingClientRect()
          .width + 4;
    });

    this.languageTextContainer.nativeElement.style.width = totalWidth + 'px';
  }

  resetPage() {
    this.letterArray = [];
    this.populatedLetterArray = [];
  }

  getWordData() {
    this.resetPage();
    this.wordData = this.wordsDictionaryService.getWordByLanguage(
      this._languageWord,
    );

    const newLetterArray = this.wordData.dakelh.split('');

    this.letterArray = this.shuffleArray(newLetterArray);
  }

  shuffleArray(array: Array<any>): Array<any> {
    const newArray: Array<any> = [];

    while (array.length !== 0) {
      const randomIndex = Math.floor(Math.random() * array.length);

      newArray.push(array[randomIndex]);
      array.splice(randomIndex, 1);
    }

    return newArray;
  }

  uniqueLetterList(value: string, index: number, self: any) {
    return self.indexOf(value) === index;
  }

  countLetters(letterArray: Array<string>): Object {
    const letterCount = {};

    letterArray.forEach(item => {
      if (!(item in letterCount)) {
        letterCount[item] = 0;
      }

      letterCount[item]++;
    });

    return letterCount;
  }

  isLetterDisabled(letter: string): boolean {
    const letterCount = this.countLetters(this.letterArray);
    const populatedLetterCount = this.countLetters(this.populatedLetterArray);

    if (letterCount[letter] <= populatedLetterCount[letter]) {
      return true;
    }

    return false;
  }

  getPopulatedLetter(index: number): string {
    return this.populatedLetterArray.length > index ? this.populatedLetterArray[index] : '';
  }

  addPopulatedLetter(letter: string) {
    if (this.populatedLetterArray.length < this.letterArray.length) {
      this.populatedLetterArray.push(letter);
    }

    this.checkAnswer();
  }

  deleteItem() {
    this.populatedLetterArray.pop();
  }

  checkAnswer() {
    if (this.populatedLetterArray.toString() === this.wordData.dakelh.split('').toString()) {
      this.completedModule();
    }
  }

  completedModule() {
    this.completed.emit(true);
  }

  onClick(event: MouseEvent) {
    if (this.wordData.audio.length > 0) {
      event.preventDefault();
      event.stopPropagation();
      this.audioElement.nativeElement.onloadeddata = () => {
        this.audioElement.nativeElement.play();
      };
      this.audioElement.nativeElement.src =
        'assets/audio/pronunciation/' + this.wordData.audio[0];
    }
  }

}
