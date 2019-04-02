import { TestBed } from '@angular/core/testing';

import { WordsDictionaryService } from './words-dictionary.service';

describe('WordsDictionaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordsDictionaryService = TestBed.get(WordsDictionaryService);
    expect(service).toBeTruthy();
  });
});
