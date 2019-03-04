import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  lessonLevel = '';

  constructor(private location: Location) {}

  ngOnInit() {}

  changeLessonLevel() {}

  goBack(): void {
    this.location.back();
  }
}
