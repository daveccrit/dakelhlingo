import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {
  LessonCategory,
  Lesson,
  LearningModuleWord
} from '../shared/interfaces/app.interface';
import { LessonService } from '../shared/services/lesson.service';

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

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private lessonService: LessonService
  ) {}

  ngOnInit(): void {
    this.lessonId = +this.route.snapshot.paramMap.get('lessonid');
    const categoryId = +this.route.snapshot.paramMap.get('catid');
    this.lessonCategory = this.lessonService.getLessonCategory(categoryId);
    this.lesson = this.lessonService.getLesson(this.lessonId);
    this.pageReady = true;
  }

  goBack(): void {
    this.location.back();
  }

  completedLearningModule() {
    if (this.currentModuleNum < this.lesson.learningModules.length - 1) {
      this.currentModuleNum++;
    } else {
      this.lessonService.setLessonComplete(this.lessonId);
      this.goBack();
    }
  }
}
