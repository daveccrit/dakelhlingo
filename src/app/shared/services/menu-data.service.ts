import { Injectable } from '@angular/core';
import appMenuData from '../../../assets/data/menu-data.json';

@Injectable({
  providedIn: 'root'
})
export class MenuDataService {
  menuItems: Object;

  constructor() {
    this.menuItems = appMenuData;
  }
}
