import { TestBed, inject } from '@angular/core/testing';

import { SperoService } from './spero.service';

describe('SperoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SperoService]
    });
  });

  it('should be created', inject([SperoService], (service: SperoService) => {
    expect(service).toBeTruthy();
  }));
});
