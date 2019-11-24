import {
  Component,
  OnInit,
  EventEmitter,
  ElementRef,
  ViewChild,
  Input,
  Output
} from '@angular/core';
import { Phrase } from 'src/app/shared/interfaces/app.interface';
import { PhraseDictionaryService } from 'src/app/shared/services/phrase-dictionary.service';

@Component({
  selector: 'app-phrase-learning',
  templateUrl: './phrase-learning.component.html',
  styleUrls: ['./phrase-learning.component.scss']
})
export class PhraseLearningComponent implements OnInit {
  @ViewChild('audio', { static: false }) audioElement: ElementRef;

  phraseData: Phrase;

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

  getPhraseData() {
    this.phraseData = this.phraseDictionaryService.getPhraseByLanguage(
      this._languagePhrase
    );
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
      this.audioElement.nativeElement.src =
        'assets/audio/pronunciation/' + this.phraseData.audio[0];
    }
  }
}
