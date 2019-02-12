import { Component, OnInit } from '@angular/core';

type lessonCategoryType = Array<{
  id: number;
  icon: string;
  textDakelh: string;
  textEnglish: string;
  isComplete?: boolean;
}>;

@Component({
  selector: 'app-lesson-categories',
  templateUrl: './lesson-categories.component.html',
  styleUrls: ['./lesson-categories.component.scss']
})
export class LessonCategoriesComponent implements OnInit {
  private categories: lessonCategoryType = [
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

  constructor() {}

  ngOnInit() {}
}
