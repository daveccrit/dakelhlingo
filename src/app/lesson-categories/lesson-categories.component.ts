import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { LessonCategory } from '../shared/interfaces/app.interface';
import { LessonService } from '../shared/services/lesson.service';
import { FlatTreeControl } from '@angular/cdk/tree';

@Component({
  selector: 'app-lesson-categories',
  templateUrl: './lesson-categories.component.html',
  styleUrls: ['./lesson-categories.component.scss'],
})
export class LessonCategoriesComponent implements OnInit {
  categories: Array<LessonCategory>;
  pageReady = false;

  treeControl = new FlatTreeControl(
    () => 1,
    () => true,
  );

  constructor(private location: Location, private lessonService: LessonService) {}

  ngOnInit() {
    this.categories = this.lessonService.getLessonCategories();
    this.pageReady = true;
  }

  goBack(): void {
    this.location.back();
  }
}
