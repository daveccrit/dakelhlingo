import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  catId: number;
  lessonId: number;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.getLessons();
  }

  getLessons(): void {
    this.catId = +this.route.snapshot.paramMap.get('catid');
    this.lessonId = +this.route.snapshot.paramMap.get('lessonid');
    // this.lessonCategory = this.categories.find(
    //   category => category.id === catId
    // );
  }

  goBack(): void {
    this.location.back();
  }
}
