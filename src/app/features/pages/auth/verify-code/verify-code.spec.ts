import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect, it, describe, beforeEach, vi, afterEach } from 'vitest';
import { screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { VerifyCode } from './verify-code';
import { RequestApi } from '@core/services/request-api';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { PendingVerification } from '@core/services/pending-verification';
import { getEmail, getExpiresAt } from '@mock/pending-verification.mock';
import navigateMock from '@mock/navigate.mock';
import { verifyCodeMock } from '@mock/request-api.mock';
import { verifyCodeErrorMock } from '@mock/errors/request-api.error.mock';

describe('VerifyCode', () => {
  let component: VerifyCode;
  let fixture: ComponentFixture<VerifyCode>;
  let request: RequestApi;
  let router: Router;
  let pendingVerification: PendingVerification;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ VerifyCode ],
      providers: [
        RequestApi,
        PendingVerification,
        Router,
        provideHttpClient(),
        provideHttpClientTesting()

      ]
    })
    .compileComponents();

    request = TestBed.inject(RequestApi);
    pendingVerification = TestBed.inject(PendingVerification);
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(VerifyCode);
    component = fixture.componentInstance;

    vi.useFakeTimers();

    fixture.detectChanges();
  });

  afterEach(() => vi.useRealTimers());

  it('should send a valid verification code', async () => {
    verifyCodeMock(request);

    getEmail(pendingVerification);

    const navigateSpy = navigateMock(router);
    const user = userEvent.setup({
      advanceTimers: vi.advanceTimersByTime

    });

    const codeInput = screen.getAllByTestId("code");

    let value = 1;

    for (const input of codeInput) {
      await user.type(input, `${value++}`);

    }

    await user.click(
      screen.getByRole("button", { name: /Enviar/i })

    );

    expect(request.verify).toHaveBeenCalled();
    expect(component.isLoading).toBe(true);

    vi.advanceTimersByTime(1000);

    expect(pendingVerification.getEmail()).toBe("example@email.com");
    expect(navigateSpy).toHaveBeenCalledWith([ "/" ]);

  });

  it('should throw an error when code expires', () => {

    getExpiresAt(pendingVerification);

    const navigateSpy = navigateMock(router);

    expect(component.isError).toBe(true);

    vi.advanceTimersByTime(1000);

    expect(pendingVerification.getExpiresAt()).toBeLessThan(Date.now());
    expect(navigateSpy).toHaveBeenCalledWith([ "/" ]);

  });

  it('should throw an error when the code is incorrect', async () => {
    verifyCodeErrorMock(request);
    getEmail(pendingVerification);

    const user = userEvent.setup({
      advanceTimers: vi.advanceTimersByTime

    });

    const codeInput = screen.getAllByTestId("code");

    let value = 1;

    for (const input of codeInput) {
      await user.type(input, `${value++}`);

    }

    await user.click(
      screen.getByRole("button", { name: /Enviar/i })

    );

    expect(request.verify).toHaveBeenCalled();
    expect(component.isError).toBe(true);

    vi.advanceTimersByTime(1000);

    expect(component.errorMsg).toBe("Não foi possível validar o código");

  });

});
