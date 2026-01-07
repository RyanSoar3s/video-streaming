import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';
import { expect, it, describe, beforeEach } from 'vitest';

import { profileGuard } from './profile-guard';

describe('profileGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => profileGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
