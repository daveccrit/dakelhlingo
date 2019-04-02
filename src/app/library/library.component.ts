import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AppMenuItem } from '../shared/interfaces/app.interface';
import { MenuDataService } from '../shared/services/menu-data.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  navItems: Array<AppMenuItem> = [];
  pageReady = false;

  constructor(
    private location: Location,
    private menuDataService: MenuDataService
  ) {}

  ngOnInit() {
    this.navItems.push(this.menuDataService.menuItems['words-menu-item']);
    this.navItems.push(this.menuDataService.menuItems['videos-menu-item']);
    this.pageReady = true;
  }

  goBack(): void {
    this.location.back();
  }
}
