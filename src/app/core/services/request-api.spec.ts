import { TestBed } from '@angular/core/testing';
import { expect, it, describe, beforeEach } from 'vitest';

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
