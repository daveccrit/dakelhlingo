import { Component, OnInit } from '@angular/core';
import { SettingsService } from './shared/services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userLevel = '';
  appReady = false;

  constructor(private settingsService: SettingsService) {
    this.userLevel = this.settingsService.app.userLevel;
    this.settingsService.settingChange.subscribe(setting => {
      if (setting === 'userLevel') {
        this.userLevel = this.settingsService.app.userLevel;
      }
    });
  }

  ngOnInit() {
    this.checkAppReady();
  }

  checkAppReady() {
    this.appReady = true;
  }
}
