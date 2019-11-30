import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-games-library',
  templateUrl: './games-library.component.html',
  styleUrls: ['./games-library.component.scss'],
})
export class GamesLibraryComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit() {}

  goBack(): void {
    this.location.back();
  }
}
