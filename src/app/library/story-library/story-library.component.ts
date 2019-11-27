import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-story-library',
  templateUrl: './story-library.component.html',
  styleUrls: ['./story-library.component.scss'],
})
export class StoryLibraryComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit() {}

  goBack(): void {
    this.location.back();
  }
}
