import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AppDataComponent } from '../shared/app-data.component';
import { AppMenuItem } from '../shared/interfaces/app.interface';
import { GlobalData } from '../shared/app-data';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent extends AppDataComponent implements OnInit {
  navItems: Array<AppMenuItem> = [];
  pageReady = false;

  constructor(private location: Location, globalData: GlobalData) {
    super(globalData);
  }

  ngOnInit() {
    this.navItems.push(this.globalData['app']['words-menu-item']);
    this.navItems.push(this.globalData['app']['videos-menu-item']);
    this.pageReady = true;
  }

  goBack(): void {
    this.location.back();
  }
}
