import { TestBed } from '@angular/core/testing';

import { TokenRefreshStore } from './token-refresh-store';

describe('TokenRefreshStore', () => {
  let service: TokenRefreshStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenRefreshStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
