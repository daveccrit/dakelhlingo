import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LessonCategory, Lesson } from '../shared/interfaces/app.interface';
import { LessonService } from '../shared/services/lesson.service';

interface LessonCategoryType {
  id: number;
  icon: string;
  textDakelh: string;
  textEnglish: string;
  isComplete?: boolean;
}

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss']
})
export class LessonListComponent implements OnInit {
  lessonCategory: LessonCategory;
  lessons: Array<Lesson>;
  pageReady = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private lessonService: LessonService
  ) {}

  ngOnInit(): void {
    const categoryId = +this.route.snapshot.paramMap.get('catid');
    this.lessonCategory = this.lessonService.getLessonCategory(categoryId);
    this.lessons = this.lessonService.getLessons(this.lessonCategory.id);
    this.pageReady = true;
  }

  goBack(): void {
    this.location.back();
  }
}
