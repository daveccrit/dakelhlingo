import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AppDataService } from '../shared/app-data.service';
import { GlobalData } from '../shared/app-data';
import { LessonCategory, Lesson } from '../shared/interfaces/app.interface';

interface LessonCategoryType {
  id: number;
  icon: string;
  textDakelh: string;
  textEnglish: string;
  isComplete?: boolean;
}

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
  lessonCategory: LessonCategory;
  lessons: Array<Lesson>;
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
    const categoryId = +this.route.snapshot.paramMap.get('catid');
    this.lessonCategory = this.appDataService.getLessonCategory(categoryId);
    this.lessons = this.appDataService.getLessons(this.lessonCategory.id);
    this.pageReady = true;
  }

  goBack(): void {
    this.location.back();
  }
}
