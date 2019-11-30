import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { LessonCategory, WordCategory } from '../shared/interfaces/app.interface';
import { LessonService } from '../shared/services/lesson.service';
import { UiStateService } from '../shared/services/ui-state.service';
import { WordsDictionaryService } from '../shared/services/words-dictionary.service';

@Component({
  selector: 'app-lesson-categories',
  templateUrl: './lesson-categories.component.html',
  styleUrls: ['./lesson-categories.component.scss'],
})
export class LessonCategoriesComponent implements AfterViewInit, OnInit {
  @ViewChild('wordNavList', { static: false }) wordNavList: ElementRef<HTMLElement>;
  @ViewChild('phraseNavList', { static: false }) phraseNavList: ElementRef<HTMLElement>;
  @ViewChild('flashcardNavList', { static: false }) flashcardNavList: ElementRef<HTMLElement>;
  @ViewChild('accordion', { static: false }) accordion: ElementRef<HTMLElement>;

  wordCategories: Array<LessonCategory>;
  phraseCategories: Array<LessonCategory>;
  flashcardCategories: Array<WordCategory>;
  activePanel = '';
  pageReady = false;
  listItemHeight = 80;
  page = 'lesson-categories';
  navLists = {
    words: undefined,
    phrases: undefined,
    flashcards: undefined,
  };

  constructor(
    private location: Location,
    private lessonService: LessonService,
    private wordsDictionaryService: WordsDictionaryService,
    private uiState: UiStateService,
    private _elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.wordCategories = this.lessonService.getLessonCategories('word');
    this.phraseCategories = this.lessonService.getLessonCategories('phrase');
    this.flashcardCategories = this.wordsDictionaryService.getWordCategories();
    this.pageReady = true;
    const uiState = this.uiState.getState().data;

    if (uiState.activePanel) {
      this.activePanel = uiState.activePanel ? uiState.activePanel : '';
    }
  }

  ngAfterViewInit() {
    const uiState = this.uiState.getState().data;

    setTimeout(() => {
      this.navLists.words = (this.wordNavList.nativeElement as HTMLElement).querySelector('mat-nav-list');
      this.navLists.phrases = (this.phraseNavList.nativeElement as HTMLElement).querySelector('mat-nav-list');
      this.navLists.flashcards = (this.flashcardNavList.nativeElement as HTMLElement).querySelector('mat-nav-list');
      if (this.activePanel) {
        this.navLists[this.activePanel].scrollTop = uiState.scrollPosition ? uiState.scrollPosition : 0;
      }
    }, 600);
  }

  panelHeaderClick(selectedPanel: string) {
    this.changeActivePanel(selectedPanel);
  }

  panelHeaderKeyup(selectedPanel: string) {
    this.changeActivePanel(selectedPanel);
  }

  changeActivePanel(selectedPanel: string) {
    if (selectedPanel === this.activePanel) {
      this.activePanel = '';
      return;
    }

    this.activePanel = selectedPanel;
    this.uiState.setState({ data: { activePanel: selectedPanel } });
  }

  listItemClick(event: MouseEvent) {
    this.uiState.setState({
      data: {
        activePanel: this.activePanel,
        scrollPosition: (event.currentTarget as HTMLAnchorElement).parentElement.scrollTop,
      },
    });
  }

  goBack(): void {
    this.uiState.setState({ data: { activePanel: '', scrollPosition: 0 } });
    this.location.back();
  }
}
