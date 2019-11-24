import {
  Component,
  OnInit,
  EventEmitter,
  ElementRef,
  ViewChild,
  Input,
  Output,
  ViewChildren,
  QueryList,
  AfterViewInit,
} from '@angular/core';
import { Phrase } from 'src/app/shared/interfaces/app.interface';
import { PhraseDictionaryService } from 'src/app/shared/services/phrase-dictionary.service';
import { MatButton } from '@angular/material';

@Component({
  selector: 'app-phrase-builder',
  templateUrl: './phrase-builder.component.html',
  styleUrls: ['./phrase-builder.component.scss'],
})
export class PhraseBuilderComponent implements OnInit, AfterViewInit {
  @ViewChild('audio', { static: false }) audioElement: ElementRef<HTMLAudioElement>;
  @ViewChild('languageTextContainer', { static: true })
  languageTextContainer: ElementRef<HTMLElement>;
  @ViewChildren('phraseButton') phraseButtons: QueryList<MatButton>;

  phraseData: Phrase;
  phraseArray: Array<string> = [];
  populatedPhraseArray: Array<string> = [];

  @Input()
  get languagePhrase(): string {
    return this._languagePhrase;
  }
  set languagePhrase(value: string) {
    this._languagePhrase = value;
    this.getPhraseData();
  }
  _languagePhrase: string;

  @Output() completed: EventEmitter<boolean> = new EventEmitter();

  constructor(private phraseDictionaryService: PhraseDictionaryService) {}

  ngOnInit() {
    this.getPhraseData();
  }

  ngAfterViewInit() {
    let totalWidth = 0;

    this.phraseButtons.forEach(button => {
      totalWidth +=
        (button._elementRef.nativeElement as HTMLElement).querySelector('.mat-button-wrapper').getBoundingClientRect()
          .width + 4;
    });

    this.languageTextContainer.nativeElement.style.width = totalWidth + 'px';
  }

  getPhraseData() {
    this.phraseData = this.phraseDictionaryService.getPhraseByLanguage(this._languagePhrase);

    const newPhraseArray = this.phraseData.dakelh.split(' ');

    this.phraseArray = this.shuffleArray(newPhraseArray);
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

  uniqueWordList(value: string, index: number, self: any) {
    return self.indexOf(value) === index;
  }

  countWords(wordArray: Array<string>): Object {
    let wordCount = {};

    wordArray.forEach(item => {
      if (!(item in wordCount)) {
        wordCount[item] = 0;
      }

      wordCount[item]++;
    });

    return wordCount;
  }

  isWordDisabled(word: string): boolean {
    const wordCount = this.countWords(this.phraseArray);
    const populatedWordCount = this.countWords(this.populatedPhraseArray);

    if (wordCount[word] <= populatedWordCount[word]) {
      return true;
    }

    return false;
  }

  getPopulatedWord(index: number): string {
    return this.populatedPhraseArray.length > index ? this.populatedPhraseArray[index] : '';
  }

  addPopulatedWord(word: string) {
    if (this.populatedPhraseArray.length < this.phraseArray.length) {
      this.populatedPhraseArray.push(word);
    }

    this.checkAnswer();
  }

  deleteItem() {
    this.populatedPhraseArray.pop();
  }

  checkAnswer() {
    if (this.populatedPhraseArray.toString() === this.phraseData.dakelh.split(' ').toString()) {
      this.completedModule();
    }
  }

  completedModule() {
    this.completed.emit(true);
  }

  onClick(event: MouseEvent) {
    if (this.phraseData.audio.length > 0) {
      event.preventDefault();
      event.stopPropagation();
      this.audioElement.nativeElement.onloadeddata = () => {
        this.audioElement.nativeElement.play();
      };
      this.audioElement.nativeElement.src = 'assets/audio/pronunciation/' + this.phraseData.audio[0];
    }
  }
}
