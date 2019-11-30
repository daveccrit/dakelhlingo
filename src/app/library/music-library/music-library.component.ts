import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-music-library',
  templateUrl: './music-library.component.html',
  styleUrls: ['./music-library.component.scss'],
})
export class MusicLibraryComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit() {}

  goBack(): void {
    this.location.back();
  }
}
