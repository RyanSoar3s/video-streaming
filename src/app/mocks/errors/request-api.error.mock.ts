import { responseError } from "@core/models/responseError.model";
import { RequestApi } from "@core/services/request-api";
import { throwError } from "rxjs";
import { vi } from "vitest";

const accessGoogleErrorMock = (request: RequestApi) => {
  vi.spyOn(request, "accessGoogle").mockReturnValue(
    throwError(() => ({
      error: {
        message: "Token inválido"

      }

    } satisfies responseError))

  );

};

const registerErrorMock = (request: RequestApi) => {
  vi.spyOn(request, "register").mockReturnValue(
    throwError(() => ({
      error: {
        message: "O usuário já existe"

      }

    } satisfies responseError))

  );

};

const verifyCodeErrorMock = (request: RequestApi) => {
  vi.spyOn(request, "verify").mockReturnValue(
    throwError(() => ({
      error: {
        message: "Código está incorreto",
        isValidToken: true

      }

    } satisfies responseError))

  );

};

const loginErrorMock = (request: RequestApi) => {
  vi.spyOn(request, "login").mockReturnValue(
    throwError(() => ({
      error: {
        message: "Usuário não existe"

      }

    } satisfies responseError))

  );

};

export {
  accessGoogleErrorMock,
  registerErrorMock,
  verifyCodeErrorMock,
  loginErrorMock

};
