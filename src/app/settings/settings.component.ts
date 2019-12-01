import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { SettingsService } from '../shared/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  _userLevel = 'level1';
  get userLevel(): string {
    return this._userLevel;
  }
  set userLevel(value: string) {
    this._userLevel = value;
    this.settingsService.changeSetting('userLevel', value);
  }

  _timeOfDay = 'noon';
  get timeOfDay(): string {
    return this._timeOfDay;
  }
  set timeOfDay(value: string) {
    this._timeOfDay = value;
    this.settingsService.changeSetting('timeOfDay', value);
  }

  constructor(private location: Location, private settingsService: SettingsService) {
    this._userLevel = this.settingsService.app.userLevel;
    this._timeOfDay = this.settingsService.app.timeOfDay;
  }

  ngOnInit() { }

  resetCompletedData() {
    this.settingsService.resetCompletedLessons();
  }
  goBack(): void {
    this.location.back();
  }
}
