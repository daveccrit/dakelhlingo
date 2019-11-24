import { TestBed } from '@angular/core/testing';

import { PhraseDictionaryService } from './phrase-dictionary.service';

describe('PhraseDictionaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhraseDictionaryService = TestBed.get(PhraseDictionaryService);
    expect(service).toBeTruthy();
  });
});
