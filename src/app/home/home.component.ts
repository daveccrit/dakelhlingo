import { Component, OnInit } from '@angular/core';
import { AppMenuItem } from '../shared/interfaces/app.interface';
import { AppDataService } from '../shared/app-data.service';
import { GlobalData } from '../shared/app-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  navItems: Array<AppMenuItem> = [];
  pageReady = false;
  appDataService: AppDataService;

  constructor(globalData: GlobalData) {
    this.appDataService = new AppDataService(globalData);
  }

  ngOnInit() {
    this.navItems.push(
      this.appDataService.globalData['app']['learning-menu-item']
    );
    this.navItems.push(
      this.appDataService.globalData['app']['library-menu-item']
    );
    this.navItems.push(this.appDataService.globalData['app']['help-menu-item']);
    this.navItems.push(
      this.appDataService.globalData['app']['settings-menu-item']
    );
    this.pageReady = true;
  }
}
