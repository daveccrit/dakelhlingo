import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  app = {
    userLevel: ''
  };

  @Output() settingChange: EventEmitter<string> = new EventEmitter();

  constructor() {}

  setUserLevel(value: string) {
    if (value !== '' && value !== 'level1' && value !== 'level2') {
      return;
    }

    this.app.userLevel = value;
    this.settingChange.emit('userLevel');
  }
}
