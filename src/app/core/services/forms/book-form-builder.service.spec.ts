import { TestBed } from '@angular/core/testing';

import { BookFormBuilderService } from './book-form-builder.service';

describe('BookFormBuilderService', () => {
  let service: BookFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
