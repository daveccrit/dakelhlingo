import { Component, OnInit, Input, ViewChild, ElementRef, HostBinding } from '@angular/core';
import { LessonCategory, AppMenuItem, Word } from '../interfaces/app.interface';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss'],
})
export class MenuListItemComponent implements OnInit {
  @ViewChild('audio', { static: false }) audioElement: ElementRef;
  @Input() menuItem: LessonCategory | Word | AppMenuItem;
  @Input() completed: boolean;
  @HostBinding('class.completed') completedClass = this.completed;

  constructor() {}

  ngOnInit() {}

  playAudio() {
    this.audioElement.nativeElement.play();
  }

  stopAudio() {
    this.audioElement.nativeElement.pause();
    this.audioElement.nativeElement.currentTime = 0;
  }

  onMouseOver(event: MouseEvent) {
    if (this.menuItem.audio.length > 0) {
      this.playAudio();
    }
  }

  onMouseOut(event: MouseEvent) {
    if (this.menuItem.audio.length > 0) {
      this.stopAudio();
    }
  }

  onClick(event: MouseEvent) {
    if (this.menuItem.audio.length > 0) {
      event.preventDefault();
      event.stopPropagation();
      this.playAudio();
    }
  }
}
