import { TestBed } from '@angular/core/testing';
import { expect, it, describe, beforeEach } from 'vitest';

import { Responsive } from './responsive';

describe('Responsive', () => {
  let service: Responsive;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Responsive);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
