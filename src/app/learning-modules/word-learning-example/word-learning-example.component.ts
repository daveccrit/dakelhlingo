import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Word } from 'src/app/shared/interfaces/app.interface';
import { WordsDictionaryService } from 'src/app/shared/services/words-dictionary.service';

@Component({
  selector: 'app-word-learning-example',
  templateUrl: './word-learning-example.component.html',
  styleUrls: ['./word-learning-example.component.scss'],
})
export class WordLearningExampleComponent implements OnInit {
  @ViewChild('audio', { static: false }) audioElement: ElementRef;

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

  constructor(private wordsDictionaryService: WordsDictionaryService) {}

  ngOnInit() {
    this.getWordData();
  }

  getWordData() {
    this.wordData = this.wordsDictionaryService.getWordByLanguage(
      this._languageWord,
    );
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
