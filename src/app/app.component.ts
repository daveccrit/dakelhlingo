import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  lessonLevel = '';
  appReady = false;

  constructor() {}

  ngOnInit() {
    this.checkAppReady();
  }

  checkAppReady() {
    this.appReady = true;
  }
}
