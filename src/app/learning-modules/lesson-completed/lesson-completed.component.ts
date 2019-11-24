import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-lesson-completed',
  templateUrl: './lesson-completed.component.html',
  styleUrls: ['./lesson-completed.component.scss'],
})
export class LessonCompletedComponent implements OnInit {
  @Output() completed: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  completedModule() {
    this.completed.emit(true);
  }
}
