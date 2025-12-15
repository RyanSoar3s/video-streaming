import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect, it, describe, beforeEach, beforeAll, vi } from 'vitest';
import { screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import mockGoogleGlobal from '@mock/google.mock';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { Login } from './login';
import { RequestApi } from '@core/services/request-api';
import { Router } from '@angular/router';
import { accessGoogleMock, loginMock, registerMock } from '@mock/request-api.mock';
import navigateMock from '@mock/navigate.mock';
import { accessGoogleErrorMock, loginErrorMock, registerErrorMock } from '@mock/errors/request-api.error.mock';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;
  let request: RequestApi;
  let router: Router;

  beforeAll(() => {
    mockGoogleGlobal();

  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Login ],
      providers: [
        RequestApi,
        Router,
        provideHttpClient(),
        provideHttpClientTesting()

      ]
    })
    .compileComponents();

    request = TestBed.inject(RequestApi);
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  // Tests for successful login/registration

  it('should sign in with Google', () => {
    accessGoogleMock(request);

    const fakeJwt = "fake-google-jwt";

    const navigateSpy = navigateMock(router);
    const initialize = (google.accounts.id.initialize as any).mock.calls.at(-1)[0];

    const googleCallback = initialize.callback;

    googleCallback({
      credential: fakeJwt

    });
    expect(component.errorMsg).toBe(false);
    expect(component.isLoading).toBe(true);
    expect(request.accessGoogle).toHaveBeenCalledWith(fakeJwt);
    expect(navigateSpy).toHaveBeenCalledWith([ "/home" ]);

  });

  it('should register a user', async () => {
    registerMock(request);

    const navigateSpy = navigateMock(router);

    const user = userEvent.setup();

    await user.click(screen.getByTestId("change-mode"));

    const emailInput = screen.getByRole("textbox", { name: /email/i });
    await user.type(emailInput, "test@email.com");

    const passwordInput = screen.getByLabelText(/Senha/i);
    await user.type(passwordInput, "123456");

    await user.click(
      screen.getByRole("button", { name: /Cadastrar/i })

    );

    expect(component.isLoading).toBe(true);
    expect(request.register).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith([ "/verify-code" ]);

  });

  it('should login a user', async () => {
    loginMock(request);

    const navigateSpy = navigateMock(router);

    const user = userEvent.setup();

    const emailInput = screen.getByRole("textbox", { name: /email/i });
    await user.type(emailInput, "test@email.com");

    const passwordInput = screen.getByLabelText(/Senha/i);
    await user.type(passwordInput, "123456");

    await user.click(
      screen.getByRole("button", { name: /Entrar/i })

    );

    expect(component.isLoading).toBe(true);
    expect(request.login).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith([ "/home" ]);

  });

  // Tests for unsuccessful login/registration
  it('should handle error when Google signin fails', () => {
    accessGoogleErrorMock(request);

    const fakeJwt = "fake-google-jwt";

    const initialize = (google.accounts.id.initialize as any).mock.calls.at(-1)[0];

    const googleCallback = initialize.callback;

    googleCallback({
      credential: fakeJwt

    });

    expect(component.errorMsg).toBe(true);
    expect(request.accessGoogle).toHaveBeenCalledWith(fakeJwt);

  });

  it('should handle error when register fails', async () => {
    registerErrorMock(request);

    const user = userEvent.setup();

    await user.click(screen.getByTestId("change-mode"));

    const emailInput = screen.getByRole("textbox", { name: /email/i });
    await user.type(emailInput, "test@email.com");

    const passwordInput = screen.getByLabelText(/Senha/i);
    await user.type(passwordInput, "123456");

    await user.click(
      screen.getByRole("button", { name: /Cadastrar/i })

    );

    expect(component.errorMsg).toBe(true);
    expect(component.isLoading).toBe(false);

  });

  it('should handle error when login fails', async () => {
    loginErrorMock(request);

    const user = userEvent.setup();

    const emailInput = screen.getByRole("textbox", { name: /email/i });
    await user.type(emailInput, "test@email.com");

    const passwordInput = screen.getByLabelText(/Senha/i);
    await user.type(passwordInput, "123456");

    await user.click(
      screen.getByRole("button", { name: /Entrar/i })

    );

    expect(component.errorMsg).toBe(true);
    expect(component.isLoading).toBe(false);

  });

});
