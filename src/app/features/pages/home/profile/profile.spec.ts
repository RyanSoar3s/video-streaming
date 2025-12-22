import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect, it, describe, beforeEach, vi, afterEach } from 'vitest';

import { Profile } from './profile';
import { ActivatedRoute, Router } from '@angular/router';
import { httpClientChangeUsernameMock } from '@mock/httpclient.mock';
import { changePasswordMock, deleteMock, logoutMock } from '@mock/request-api.mock';
import { RequestApi } from '@core/services/request-api';
import { HttpClient } from '@angular/common/http';
import { ProfileInfo } from '@core/services/profile-info';

import { screen } from '@testing-library/angular';
import { userEvent } from '@testing-library/user-event';
import navigateMock from '@mock/navigate.mock';
import { httpClientChangeUsernameErrorMock } from '@mock/errors/httpclient.error.mock';
import { changePasswordErrorMock, deleteErrorMock, logoutErrorMock } from '@mock/errors/request-api.error.mock';

const successMsg = "✅ Alteração feita com sucesso";
const warningMsg = "⚠️ Deseja deletar sua conta?";
const errorMsg = "❌ Ocorreu um erro";

describe('Profile', () => {
  let component: Profile;
  let fixture: ComponentFixture<Profile>;
  let request: RequestApi;
  let http: HttpClient;
  let profileInfo: ProfileInfo;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Profile ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: {}, queryParams: {} }
          }

        },
        RequestApi,
        HttpClient,
        ProfileInfo,
        Router

      ]
    })
    .compileComponents();

    request = TestBed.inject(RequestApi);
    http = TestBed.inject(HttpClient);
    profileInfo = TestBed.inject(ProfileInfo);
    router = TestBed.inject(Router);

    fixture = TestBed.createComponent(Profile);
    component = fixture.componentInstance;

    vi.useFakeTimers();

    fixture.detectChanges();
  });

  afterEach(() => vi.useRealTimers());

  // Successful operation

  it('should change username', async () => {
    httpClientChangeUsernameMock(http);

    const user = userEvent.setup({
      advanceTimers: vi.advanceTimersByTime

    });

    const navigateSpy = navigateMock(router);

    component.infos[0][1] = "user10";

    await user.click(screen.getByTestId("field-0"));

    expect(component.formUsername.get("username")?.value).toBe("user10");

    const inputUsername = screen.getByRole("textbox", { name: /input-username/i }) as HTMLInputElement;

    await user.click(inputUsername);

    await user.clear(inputUsername);
    await user.type(inputUsername, "user11");

    await user.click(screen.getByRole("button", { name: /submit-change-username/i }));

    expect(component.isChange).toBe(true);
    expect(screen.getByText(successMsg)).toBeTruthy();
    expect(profileInfo.profileInfo().username).toBe("user11");

    vi.advanceTimersByTime(1000);

    expect(navigateSpy).toHaveBeenCalledWith([ "/home" ]);

  });

  it('should change password', async () => {
    changePasswordMock(request);

    const user = userEvent.setup({
      advanceTimers: vi.advanceTimersByTime

    });

    const navigateSpy = navigateMock(router);

    await user.click(screen.getByTestId("field-1"));

    const inputsPassword = screen.getAllByTestId("type-password");
    const size = inputsPassword.length;

    const passwords = [ "123456", "234567", "234567" ];

    for (let i = 0; i < size; i++) {
      const input = inputsPassword[i];
      const password = passwords[i];

      await user.click(input);
      await user.type(input, password);

    }

    await user.click(screen.getByRole("button", { name: /submit-change-password/i }));

    expect(request.changePassword).toHaveBeenCalled();
    expect(component.isChange).toBe(true);
    expect(screen.getByText(successMsg)).toBeTruthy();

    vi.advanceTimersByTime(1000);

    expect(navigateSpy).toHaveBeenCalledWith([ "/home" ]);

  });

  it('should leave the session', async () => {
    logoutMock(request);

    const user = userEvent.setup({
      advanceTimers: vi.advanceTimersByTime

    });

    const navigateSpy = navigateMock(router);

    await user.click(screen.getByRole("button", { name: /logout-account/i }));

    expect(request.logout).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith([ "/" ]);

  });

  it('should delete account', async () => {
    deleteMock(request);

    const user = userEvent.setup({
      advanceTimers: vi.advanceTimersByTime

    });

    const navigateSpy = navigateMock(router);

    await user.click(screen.getByRole("button", { name: /delete-account/i }));

    expect(component.isWarning).toBe(true);
    expect(screen.getByText(warningMsg)).toBeTruthy();

    await user.click(screen.getByRole("button", { name: /confirm-account-deletion/i }));

    expect(request.delete).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith([ "/" ]);

  });

  // unsuccessful operation

  it('should throw error when the username is changed', async () => {
    httpClientChangeUsernameErrorMock(http);

    const user = userEvent.setup({
      advanceTimers: vi.advanceTimersByTime

    });

    component.infos[0][1] = "user10";

    await user.click(screen.getByTestId("field-0"));

    expect(component.formUsername.get("username")?.value).toBe("user10");

    const inputUsername = screen.getByRole("textbox", { name: /input-username/i }) as HTMLInputElement;

    await user.click(inputUsername);

    await user.clear(inputUsername);
    await user.type(inputUsername, "user11");

    await user.click(screen.getByRole("button", { name: /submit-change-username/i }));

    expect(http.put).toHaveBeenCalled();
    expect(component.isError).toBe(true);
    expect(screen.getByText(errorMsg)).toBeTruthy();

  });

  it('should throw error when the password is changed', async () => {
    changePasswordErrorMock(request);

    const user = userEvent.setup({
      advanceTimers: vi.advanceTimersByTime

    });

    await user.click(screen.getByTestId("field-1"));

    const inputsPassword = screen.getAllByTestId("type-password");
    const size = inputsPassword.length;

    const passwords = [ "123456", "234567", "234567" ];

    for (let i = 0; i < size; i++) {
      const input = inputsPassword[i];
      const password = passwords[i];

      await user.click(input);
      await user.type(input, password);

    }

    await user.click(screen.getByRole("button", { name: /submit-change-password/i }));

    expect(request.changePassword).toHaveBeenCalled();
    expect(component.isError).toBe(true);
    expect(screen.getByText(errorMsg)).toBeTruthy();

  });

  it('should leave the session', async () => {
    logoutErrorMock(request);

    const user = userEvent.setup({
      advanceTimers: vi.advanceTimersByTime

    });

    await user.click(screen.getByRole("button", { name: /logout-account/i }));

    expect(request.logout).toHaveBeenCalled();
    expect(component.isError).toBe(true);
    expect(screen.getByText(errorMsg)).toBeTruthy();

  });

  it('should delete account', async () => {
    deleteErrorMock(request);

    const user = userEvent.setup({
      advanceTimers: vi.advanceTimersByTime

    });

    await user.click(screen.getByRole("button", { name: /delete-account/i }));

    expect(component.isWarning).toBe(true);

    await user.click(screen.getByRole("button", { name: /confirm-account-deletion/i }));

    expect(request.delete).toHaveBeenCalled();
    expect(component.isError).toBe(true);
    expect(screen.getByText(errorMsg)).toBeTruthy();

  });

});
