import { Injectable, EventEmitter, Output } from '@angular/core';
import { LessonService } from './lesson.service';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  app = {
    userLevel: 'level1',
    timeOfDay: 'noon'
  };

  @Output() settingChangedEvent: EventEmitter<string> = new EventEmitter();

  constructor(private lessonService: LessonService) { }

  changeSetting(key: string, value: string) {
    if (!key) {
      return;
    }

    switch (key) {
      case 'userLevel':
        if (['level1', 'level2', 'level3'].indexOf(value) < 0) {
          return;
        }
        break;

      case 'timeOfDay':
        if (['morning', 'noon', 'night'].indexOf(value) < 0) {
          return;
        }
        break;

      default:
        return;
    }

    this.app[key] = value;
    this.settingChangedEvent.emit(key);

  }

  setUserLevel(value: string) {
    if (value !== 'level1' && value !== 'level2' && value !== 'level3') {
      return;
    }

    this.app.userLevel = value;
    this.settingChangedEvent.emit('userLevel');
  }

  resetCompletedLessons() {
    this.lessonService.resetCompletedLessons();
  }
}
