import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostBinding
} from '@angular/core';
import { GlobalData } from 'src/app/shared/app-data';
import { AppDataComponent } from 'src/app/shared/app-data.component';
import { Word, LessonCategory } from 'src/app/shared/interfaces/app.interface';

@Component({
  selector: 'app-drag-drop-example',
  templateUrl: './drag-drop-example.component.html',
  styleUrls: ['./drag-drop-example.component.scss']
})
export class DragDropExampleComponent extends AppDataComponent
  implements OnInit {
  lessonCategory: LessonCategory;
  wordData: Word;
  words: Array<Word> = [];
  isDragging = false;

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

  constructor(globalData: GlobalData) {
    super(globalData);
  }

  ngOnInit() {
    this.initModule();
  }

  initModule() {
    const wordsArray: Array<Word> = [];
    this.wordData = this.getWordByLanguage(this._languageWord);
    wordsArray.push(this.wordData);

    this.lessonCategory = this.getLessonCategory(
      this.wordData.lessonCategoryId
    );

    let randomWordData = this.wordData;

    while (randomWordData === this.wordData) {
      const newRandomWord = this.getRandomWord(this.lessonCategory);
      wordsArray.push(newRandomWord);
      randomWordData = newRandomWord;
    }

    this.words = this.shuffleArray(wordsArray);
  }

  onDragStart(event: DragEvent) {
    event.dataTransfer.dropEffect = 'copy';
    event.dataTransfer.setData('text', this.wordData.dakelh);
    this.isDragging = true;
  }

  onDragEnd(event: DragEvent) {
    this.isDragging = false;
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    (event.target as HTMLElement).classList.add('drag-over');
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    (event.target as HTMLElement).classList.remove('drag-over');
  }

  onDrop(event: DragEvent, value: string) {
    event.preventDefault();
    this.isDragging = false;
    const data = event.dataTransfer.getData('text');
    if (value === data) {
      this.completedModule();
    } else {
      console.log('Wrong Choice');
    }
  }

  shuffleArray(array: Array<Word>) {
    const randomIndex = Math.floor(Math.random() * 2);
    if (randomIndex === 0) {
      array.reverse();
    }

    return array;
  }

  completedModule() {
    this.completed.emit(true);
  }
}
