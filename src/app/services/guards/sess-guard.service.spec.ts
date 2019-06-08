import { TestBed } from '@angular/core/testing';

import { SessGuardService } from './sess-guard.service';

describe('SessGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessGuardService = TestBed.get(SessGuardService);
    expect(service).toBeTruthy();
  });
});
