import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

type LessonCategoryArrayType = Array<{
  id: number;
  icon: string;
  textDakelh: string;
  textEnglish: string;
  isComplete?: boolean;
}>;

interface LessonCategoryType {
  id: number;
  icon: string;
  textDakelh: string;
  textEnglish: string;
  isComplete?: boolean;
}

const categoriesDb: LessonCategoryArrayType = [
  {
    id: 1,
    icon: 'color_lens',
    textDakelh: 'Ndidot\'en',
    textEnglish: 'What does it look like?'
  },
  {
    id: 2,
    icon: 'access_time',
    textDakelh: 'Ntsoya oozulh ',
    textEnglish: 'What time is it?'
  },
  {
    id: 3,
    icon: 'date_range',
    textDakelh: 'Yusk\'ut ooza\'',
    textEnglish: 'Time of year'
  },
  {
    id: 4,
    icon: 'pets',
    textDakelh: 'Khuna-i ',
    textEnglish: 'That which lives (large fur animals)'
  }
];

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
  lessonCategory: LessonCategoryType;
  categories = categoriesDb;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.getLessons();
  }

  getLessons(): void {
    const catId = +this.route.snapshot.paramMap.get('catid');
    this.lessonCategory = this.categories.find(
      category => category.id === catId
    );
  }

  goBack(): void {
    this.location.back();
  }
}
