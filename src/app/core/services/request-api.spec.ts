import { TestBed } from '@angular/core/testing';

import { RequestApi } from './request-api';

describe('RequestApi', () => {
  let service: RequestApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
