import { TestBed } from '@angular/core/testing';

import { ThemeSetupService } from './theme-setup.service';

describe('ThemeSetupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemeSetupService = TestBed.get(ThemeSetupService);
    expect(service).toBeTruthy();
  });
});
