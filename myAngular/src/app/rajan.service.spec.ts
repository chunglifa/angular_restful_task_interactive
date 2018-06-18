import { TestBed, inject } from '@angular/core/testing';

import { RajanService } from './rajan.service';

describe('RajanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RajanService]
    });
  });

  it('should be created', inject([RajanService], (service: RajanService) => {
    expect(service).toBeTruthy();
  }));
});
