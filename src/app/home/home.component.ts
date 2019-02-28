import { Component, OnInit } from '@angular/core';
import { AppMenuItem } from '../shared/interfaces/app.interface';
import { AppDataComponent } from '../shared/app-data.component';
import { GlobalData } from '../shared/app-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends AppDataComponent implements OnInit {
  navItems: Array<AppMenuItem> = [];

  constructor(globalData: GlobalData) {
    super(globalData);
  }

  ngOnInit() {
    this.navItems.push(this.globalData['app']['learning-menu-item']);
    this.navItems.push(this.globalData['app']['help-menu-item']);
  }
}
