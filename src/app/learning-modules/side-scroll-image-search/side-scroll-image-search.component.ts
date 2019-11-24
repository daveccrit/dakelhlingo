import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { WordsDictionaryService } from 'src/app/shared/services/words-dictionary.service';
import { Word, WordCategory } from 'src/app/shared/interfaces/app.interface';

@Component({
  selector: 'app-side-scroll-image-search',
  templateUrl: './side-scroll-image-search.component.html',
  styleUrls: ['./side-scroll-image-search.component.scss']
})
export class SideScrollImageSearchComponent implements AfterViewInit {
  @ViewChild('audio', { static: false }) audioElement: ElementRef;
  @ViewChild('carouselComponent', { static: false })
  carouselComponent: ElementRef;

  wordData: Word;
  wordCategory: WordCategory;
  wordsList: Array<Word> = [];
  itemSize = 0;

  _languageWord: string;
  @Input()
  get languageWord(): string {
    return this._languageWord;
  }
  set languageWord(value: string) {
    this._languageWord = value;
    this.setupData();
  }

  @Output() completed: EventEmitter<boolean> = new EventEmitter();

  constructor(private wordsDictionaryService: WordsDictionaryService) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.itemSize = (this.carouselComponent
        .nativeElement as HTMLElement).offsetWidth;
    }, 100);
  }

  onResize() {
    this.itemSize = (this.carouselComponent
      .nativeElement as HTMLElement).offsetWidth;
  }

  setupData() {
    const wordArray: Array<Word> = [];
    this.wordData = this.wordsDictionaryService.getWordByLanguage(
      this._languageWord
    );
    this.wordCategory = this.wordsDictionaryService.getWordCategory(
      this.wordData.wordCategoryId
    );

    let maxRandWords = 5;
    const categoryWordCount = this.wordsDictionaryService.getWordsByCategory(
      this.wordCategory
    ).length;

    if (categoryWordCount - 1 < maxRandWords) {
      maxRandWords = categoryWordCount - 1;
    }
    while (wordArray.length < maxRandWords) {
      const newWord = this.wordsDictionaryService.getRandomWord(
        this.wordCategory
      );

      if (newWord !== this.wordData && wordArray.indexOf(newWord) === -1) {
        wordArray.push(newWord);
      }
    }

    wordArray.push(this.wordData);

    this.wordsList = this.shuffleArray(wordArray);
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

  playWordAudio(event: MouseEvent) {
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

  checkAnswer(value: number) {
    if (this.wordsList[value] === this.wordData) {
      this.completed.emit(true);
    }
  }
}
