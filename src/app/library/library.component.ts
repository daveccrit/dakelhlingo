import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AppDataService } from '../shared/app-data.service';
import { AppMenuItem } from '../shared/interfaces/app.interface';
import { GlobalData } from '../shared/app-data';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  navItems: Array<AppMenuItem> = [];
  pageReady = false;
  appDataService: AppDataService;

  constructor(private location: Location, globalData: GlobalData) {
    this.appDataService = new AppDataService(globalData);
  }

  ngOnInit() {
    this.navItems.push(
      this.appDataService.globalData['app']['words-menu-item']
    );
    this.navItems.push(
      this.appDataService.globalData['app']['videos-menu-item']
    );
    this.pageReady = true;
  }

  goBack(): void {
    this.location.back();
  }
}
