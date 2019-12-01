import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList,
  ElementRef,
  ViewChild
} from '@angular/core';
import { Word, WordCategory } from 'src/app/shared/interfaces/app.interface';
import { WordsDictionaryService } from 'src/app/shared/services/words-dictionary.service';
import { CdkDragStart, CdkDragEnd, CdkDragMove } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop-example',
  templateUrl: './drag-drop-example.component.html',
  styleUrls: ['./drag-drop-example.component.scss']
})
export class DragDropExampleComponent implements OnInit {
  @ViewChildren('dropContainer') dropContainerList: QueryList<ElementRef>;
  @ViewChild('audio', { static: false }) audioElement: ElementRef;

  wordCategory: WordCategory;
  wordData: Word;
  words: Array<Word> = [];
  isDragging = false;
  dragPosition = { x: 0, y: 0 };
  hoverItem: number;
  test = '';

  _languageWord: string;

  @Input()
  get languageWord(): string {
    return this._languageWord;
  }
  set languageWord(value: string) {
    this._languageWord = value;
    this.initModule();
  }

  @Output() completed: EventEmitter<boolean> = new EventEmitter();

  constructor(private wordsDictionaryService: WordsDictionaryService) { }

  ngOnInit() {
    this.initModule();
  }

  initModule() {
    const wordsArray: Array<Word> = [];
    this.wordData = this.wordsDictionaryService.getWordByLanguage(
      this._languageWord
    );
    wordsArray.push(this.wordData);

    this.wordCategory = this.wordsDictionaryService.getWordCategory(
      this.wordData.wordCategoryId
    );

    let randomWordData = this.wordData;

    while (randomWordData === this.wordData) {
      const newRandomWord = this.wordsDictionaryService.getRandomWord(
        this.wordCategory
      );
      if (this.wordData !== newRandomWord) {
        wordsArray.push(newRandomWord);
      }
      randomWordData = newRandomWord;
    }

    this.words = this.shuffleArray(wordsArray);
  }

  onDragStart(event: CdkDragStart) {
    this.isDragging = true;
  }

  onDragMove(event: CdkDragMove) {
    this.hoverItem = -1;

    this.dropContainerList.forEach((item, index) => {
      const dropContainerRect = item.nativeElement.getBoundingClientRect();
      const dragElementRect = event.source.element.nativeElement.getBoundingClientRect();

      if (
        dragElementRect.top < dropContainerRect.bottom &&
        dragElementRect.bottom > dropContainerRect.top
      ) {
        this.hoverItem = index;
      }
    });
  }

  onDragEnd(event: CdkDragEnd) {
    this.dropContainerList.forEach((item, index) => {
      const dropContainerRect = item.nativeElement.getBoundingClientRect();
      const dragElementRect = event.source.element.nativeElement.getBoundingClientRect();

      if (
        dragElementRect.top < dropContainerRect.bottom &&
        dragElementRect.bottom > dropContainerRect.top
      ) {
        if (this.wordData === this.words[index]) {
          this.completedModule();
        } else {
          console.log('Guess Again!');
        }
      }
    });

    this.hoverItem = -1;
    this.dragPosition = { x: 0, y: 0 };
    this.isDragging = false;
  }

  shuffleArray(array: Array<Word>) {
    const randomIndex = Math.floor(Math.random() * 2);
    if (randomIndex === 0) {
      array.reverse();
    }

    return array;
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

  completedModule() {
    this.completed.emit(true);
  }
}
