import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { LessonCategory } from '../shared/interfaces/app.interface';
import { LessonService } from '../shared/services/lesson.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import { UiStateService } from '../shared/services/ui-state.service';
import { MatNavList } from '@angular/material';

@Component({
  selector: 'app-lesson-categories',
  templateUrl: './lesson-categories.component.html',
  styleUrls: ['./lesson-categories.component.scss'],
})
export class LessonCategoriesComponent implements AfterViewInit, OnInit {
  @ViewChild('wordNavList', { static: false }) wordNavList: ElementRef<HTMLElement>;
  @ViewChild('phraseNavList', { static: false }) phraseNavList: ElementRef<HTMLElement>;

  wordCategories: Array<LessonCategory>;
  phraseCategories: Array<LessonCategory>;
  activePanel = '';
  pageReady = false;
  listItemHeight = 80;
  page = 'lesson-categories';
  navLists = {
    words: undefined,
    phrases: undefined,
  };

  treeControl = new FlatTreeControl(
    () => 1,
    () => true,
  );

  constructor(private location: Location, private lessonService: LessonService, private uiState: UiStateService) {}

  ngOnInit() {
    this.wordCategories = this.lessonService.getLessonCategories('word');
    this.phraseCategories = this.lessonService.getLessonCategories('phrase');
    this.pageReady = true;
    let uiState = this.uiState.getState().data;

    if (uiState.activePanel) {
      this.activePanel = uiState.activePanel ? uiState.activePanel : '';
    }
  }

  ngAfterViewInit() {
    let uiState = this.uiState.getState().data;

    setTimeout(() => {
      this.navLists.words = (this.wordNavList.nativeElement as HTMLElement).querySelector('mat-nav-list');
      this.navLists.phrases = (this.phraseNavList.nativeElement as HTMLElement).querySelector('mat-nav-list');
      if (this.activePanel) {
        this.navLists[this.activePanel].scrollTop = uiState.scrollPosition ? uiState.scrollPosition : 0;
      }
    }, 600);
  }

  panelHeaderClick(selectedPanel: string) {
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
    this.location.back();
  }
}
