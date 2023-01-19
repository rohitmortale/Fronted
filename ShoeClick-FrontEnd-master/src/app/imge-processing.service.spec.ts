import { TestBed } from '@angular/core/testing';

import { ImgeProcessingService } from './imge-processing.service';

describe('ImgeProcessingService', () => {
  let service: ImgeProcessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgeProcessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
