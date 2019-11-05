import {
  ElementRef,
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  ViewChild
} from '@angular/core';
import { Word } from 'src/app/shared/interfaces/app.interface';
import { WordsDictionaryService } from 'src/app/shared/services/words-dictionary.service';

@Component({
  selector: 'app-words-learning-example',
  templateUrl: './words-learning-example.component.html',
  styleUrls: ['./words-learning-example.component.scss']
})
export class WordsLearningExampleComponent implements OnInit {
  @ViewChild('audio') audioElement: ElementRef;

  wordsData: Array<Word>;

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

  constructor(private wordsDictionaryService: WordsDictionaryService) {}

  ngOnInit() {
    this.getWordData();
  }

  getWordData() {
    this.wordsData = [];

    this.languageWords.forEach(word => {
      this.wordsData.push(this.wordsDictionaryService.getWordByLanguage(word));
    });
  }

  completedModule() {
    this.completed.emit(true);
  }

  onClick(audioIndex: number) {
    if (this.wordsData[audioIndex].audio.length > 0) {
      event.preventDefault();
      event.stopPropagation();
      this.audioElement.nativeElement.onloadeddata = () => {
        this.audioElement.nativeElement.play();
      };
      this.audioElement.nativeElement.src =
        'assets/audio/pronunciation/' + this.wordsData[audioIndex].audio[0];
    }
  }
}
