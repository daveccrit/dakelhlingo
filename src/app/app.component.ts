import { Component, OnInit } from '@angular/core';
import { SettingsService } from './shared/services/settings.service';
import { LessonService } from './shared/services/lesson.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  userLevel = '';
  appReady = false;

  constructor(private settingsService: SettingsService, private lessonService: LessonService) {
    this.userLevel = this.settingsService.app.userLevel;
    this.settingsService.settingChange.subscribe(setting => {
      if (setting === 'userLevel') {
        this.userLevel = this.settingsService.app.userLevel;
      }
    });
  }

  ngOnInit() {
    this.checkAppReady();
    this.lessonService.initCompletedLessons();
  }

  checkAppReady() {
    this.appReady = true;
  }
}
