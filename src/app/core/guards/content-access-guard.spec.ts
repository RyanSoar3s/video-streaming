import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { contentAccessGuard } from './content-access-guard';

describe('contentAccessGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => contentAccessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
