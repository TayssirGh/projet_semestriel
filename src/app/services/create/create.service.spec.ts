import { TestBed } from '@angular/core/testing';

import { CreateService } from './create.service';

describe('CreateService', () => {
  let service: CreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
