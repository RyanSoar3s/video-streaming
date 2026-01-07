import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { searchAccessGuard } from './search-access-guard';

describe('searchAccessGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => searchAccessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
