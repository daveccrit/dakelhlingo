import { Injectable, EventEmitter, Output } from '@angular/core';
import { LessonService } from './lesson.service';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  app = {
    userLevel: '',
  };

  @Output() settingChange: EventEmitter<string> = new EventEmitter();

  constructor(private lessonService: LessonService) {}

  setUserLevel(value: string) {
    if (value !== '' && value !== 'level1' && value !== 'level2') {
      return;
    }

    this.app.userLevel = value;
    this.settingChange.emit('userLevel');
  }

  resetCompletedLessons() {
    this.lessonService.resetCompletedLessons();
  }
}
