import { TestBed } from '@angular/core/testing';
import { expect, it, describe, beforeEach } from 'vitest';

import { ProfileInfo } from './profile-info';

describe('SetProfileInfo', () => {
  let service: ProfileInfo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileInfo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
