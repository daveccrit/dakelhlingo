import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {
  LessonCategory,
  Lesson,
  LearningModuleWord
} from '../shared/interfaces/app.interface';
import { AppDataService } from '../shared/app-data.service';
import { GlobalData } from '../shared/app-data';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  lessonId: number;
  lessonCategory: LessonCategory;
  lesson: Lesson;
  learningModuleData: LearningModuleWord;
  currentModuleNum = 0;
  pageReady = false;
  appDataService: AppDataService;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    globalData: GlobalData
  ) {
    this.appDataService = new AppDataService(globalData);
  }

  ngOnInit(): void {
    this.lessonId = +this.route.snapshot.paramMap.get('lessonid');
    const categoryId = +this.route.snapshot.paramMap.get('catid');
    this.lessonCategory = this.appDataService.getLessonCategory(categoryId);
    this.lesson = this.appDataService.getLesson(this.lessonId);
    this.pageReady = true;
  }

  goBack(): void {
    this.location.back();
  }

  completedLearningModule() {
    if (this.currentModuleNum < this.lesson.learningModules.length - 1) {
      this.currentModuleNum++;
    } else {
      this.appDataService.setLessonComplete(this.lessonId);
      this.goBack();
    }
  }
}
