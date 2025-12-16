import { TestBed } from '@angular/core/testing';
import { expect, it, describe, beforeEach } from 'vitest';

import { HandleToken } from './handle-token';

describe('HandleToken', () => {
  let service: HandleToken;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleToken);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
