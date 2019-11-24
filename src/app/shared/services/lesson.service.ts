import { Injectable } from '@angular/core';
import { Lesson, LessonCategory } from '../interfaces/app.interface';
import dakelhLessons from '../../../assets/data/dakelh-lessons.json';
import dakelhLessonCategories from '../../../assets/data/dakelh-lesson-categories.json';

@Injectable({
  providedIn: 'root',
})
export class LessonService {
  languageLessons: Array<Lesson>;
  lessonCategories: Array<LessonCategory>;

  constructor() {
    this.languageLessons = dakelhLessons;
    this.lessonCategories = dakelhLessonCategories;
  }

  initCompletedLessons() {
    const storageCompletedLessons = window.localStorage.getItem('dakelhCompletedLessons');

    if (storageCompletedLessons) {
      const lessonCompleted = JSON.parse(storageCompletedLessons);

      this.languageLessons.forEach(lesson => {
        if (lesson.id in lessonCompleted) {
          lesson.completed = lessonCompleted[lesson.id];
        }
      });
    }
  }

  getLessonCategories(): Array<LessonCategory> {
    return this.lessonCategories;
  }

  getLessons(categoryId: number): Array<Lesson> {
    return this.languageLessons.filter(lesson => categoryId === lesson.lessonCategoryId);
  }

  getLesson(lessonId: number): Lesson {
    return this.languageLessons.find(lesson => lessonId === lesson.id);
  }

  setLessonComplete(lessonId: number) {
    const lessonData = this.languageLessons.find(lesson => lessonId === lesson.id);

    lessonData.completed = true;

    this.saveCompletedLessons();
  }

  saveCompletedLessons() {
    const lessonComplete = {};

    this.languageLessons.forEach(lesson => {
      lessonComplete[lesson.id] = lesson.completed ? lesson.completed : false;
    });

    const jsonString = JSON.stringify(lessonComplete);
    window.localStorage.setItem('dakelhCompletedLessons', jsonString);
  }

  resetCompletedLessons() {
    this.languageLessons.forEach(lesson => {
      lesson.completed = false;
    });

    this.saveCompletedLessons();
  }

  getLessonCategory(categoryId: number): LessonCategory {
    return this.lessonCategories.find(lessonsCategory => categoryId === lessonsCategory.id);
  }
}
