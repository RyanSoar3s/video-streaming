import { TestBed } from '@angular/core/testing';

import { PendingVerification } from './pending-verification';

describe('PendingVerification', () => {
  let service: PendingVerification;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendingVerification);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
