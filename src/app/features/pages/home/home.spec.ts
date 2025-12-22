import { TestBed } from '@angular/core/testing';
import { expect, it, describe, beforeEach, beforeAll } from 'vitest';

import { Home } from './home';
import { ActivatedRoute } from '@angular/router';
import setupLocale from "@locale"
import { RequestApi } from '@core/services/request-api';
import { ProfileInfo } from '@core/services/profile-info';
import { HttpClient } from '@angular/common/http';
import { httpClientProfileMock } from '@mock/httpclient.mock';
import { httpClientProfileErrorMock } from '@mock/errors/httpclient.error.mock';
import { responseError } from '@core/models/responseError.model';

describe('Home', () => {
  let request: RequestApi;
  let profileInfo: ProfileInfo;
  let http: HttpClient;

  beforeAll(() => {
    setupLocale();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Home ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: {}, queryParams: {} }
          }

        },
        RequestApi,
        ProfileInfo,
        HttpClient

      ]

    })
    .compileComponents();

    request = TestBed.inject(RequestApi);
    profileInfo = TestBed.inject(ProfileInfo);
    http = TestBed.inject(HttpClient);

  });

  it('should obtain profile information', () => {
    httpClientProfileMock(http);
    request.profile().subscribe();

    expect(profileInfo.profileInfo().email).toBe("test@email.com");
    expect(profileInfo.profileInfo().username).toBe("user10");

  });

  it('should throw error when obtain profile information', () => {
    expect.assertions(1);

    httpClientProfileErrorMock(http);

    request.profile().subscribe({
      error: (error: responseError) => {
        expect(error.error.message).toBe("Refresh token está ausente");

      }

    });

  });

});
