import { Component, OnInit } from '@angular/core';

type navItemType = Array<{
  icon: string;
  route: string;
  routeDakelh: string;
  routeEnglish: string;
  className?: string;
}>;

const navItemsDb: navItemType = [
  {
    icon: 'library_books',
    route: '/lesson-categories',
    routeDakelh: "Sgani hodutizeh' awk'anus zun",
    routeEnglish: 'I want to learn my language',
    className: 'primary'
  },
  {
    icon: 'help',
    route: '/lesson',
    routeDakelh: "Sla'in neh",
    routeEnglish: 'Help me'
  }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  navItems = navItemsDb;
  constructor() {}

  ngOnInit() {}
}
