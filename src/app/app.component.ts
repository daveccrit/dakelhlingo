import { Component, OnInit } from '@angular/core';
import { SettingsService } from './shared/services/settings.service';
import { LessonService } from './shared/services/lesson.service';
import { fadeAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
  userLevel = 'level1';
  appReady = false;
  timeOfDay = 'noon';

  constructor(private settingsService: SettingsService, private lessonService: LessonService) { }

  ngOnInit() {
    this.checkAppReady();
    this.lessonService.initCompletedLessons();
    this.setTimeOfDay();

    this.userLevel = this.settingsService.app.userLevel;
    this.settingsService.settingChangedEvent.subscribe(setting => {
      switch (setting) {
        case 'userLevel':
          this.userLevel = this.settingsService.app.userLevel;
          break;
        case 'timeOfDay':
          this.timeOfDay = this.settingsService.app.timeOfDay;
      }
    });
  }

  setTimeOfDay() {
    const dt = new Date();
    const hour = dt.getHours();
    let timeOfDay = 'noon';
    // 4am - 12am, 12am - 8pm, 8pm - 4am
    if (hour < 2 || hour >= 18) {
      timeOfDay = 'night';
    }
    if (hour >= 2 && hour < 10) {
      timeOfDay = 'morning';
    }

    this.settingsService.changeSetting('timeOfDay', timeOfDay);
    this.timeOfDay = timeOfDay;
  }

  checkAppReady() {
    this.appReady = true;
  }
}
