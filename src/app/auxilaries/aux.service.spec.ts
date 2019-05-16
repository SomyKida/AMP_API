import { TestBed } from '@angular/core/testing';

import { AuxService } from './aux.service';

describe('AuxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuxService = TestBed.get(AuxService);
    expect(service).toBeTruthy();
  });
});
