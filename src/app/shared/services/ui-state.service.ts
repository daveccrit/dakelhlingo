import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiStateService {
  private state: UIState;

  constructor() {}

  setState(state: UIState) {
    this.state = state;
  }

  getState(): UIState {
    return this.state ? this.state : { data: {} };
  }
}

export interface UIState {
  data: {
    activePanel?: string;
    scrollPosition?: number;
  };
}
