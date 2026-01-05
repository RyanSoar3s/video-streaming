import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { getProfileResolver } from './get-profile-resolver';

describe('getProfileResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => getProfileResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
