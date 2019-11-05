import { Component, OnInit } from '@angular/core';
import { AppMenuItem } from '../shared/interfaces/app.interface';
import { MenuDataService } from '../shared/services/menu-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  navItems: Array<AppMenuItem> = [];
  pageReady = false;
  showCanoe = false;

  constructor(private menuDataService: MenuDataService) {}

  ngOnInit() {
    this.navItems.push(this.menuDataService.menuItems['learning-menu-item']);
    this.navItems.push(this.menuDataService.menuItems['library-menu-item']);
    this.navItems.push(this.menuDataService.menuItems['help-menu-item']);
    this.navItems.push(this.menuDataService.menuItems['settings-menu-item']);
    this.pageReady = true;
  }

  clickEvent() {
    console.log('Start Canoe');
    if (this.showCanoe === false) {
      this.showCanoe = true;
      setTimeout(() => {
        this.showCanoe = false;
      }, 21000);
    }
  }
}
