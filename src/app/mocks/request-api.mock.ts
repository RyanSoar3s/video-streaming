import { Response } from "@core/models/response.model";
import { RequestApi } from "@core/services/request-api";
import { of } from "rxjs";
import { vi } from "vitest";

const accessGoogleMock = (request: RequestApi) => {
  vi.spyOn(request, "accessGoogle").mockReturnValue(
    of(
      {
        message: "Conta Google acessada com sucesso",
        token: "access-token",
        data: {}

      } satisfies Response

    )

  );

};

const registerMock = (request: RequestApi) => {
  vi.spyOn(request, "register").mockReturnValue(
    of(
      {
        message: "Código enviado com sucesso",
        expiresAt: String(Date.now()),
        data: {}

      } satisfies Response

    )

  );

};

const verifyCodeMock = (request: RequestApi) => {
  vi.spyOn(request, "verify").mockReturnValue(
    of(
      {
        message: "Email verificado com sucesso",
        data: {}

      } satisfies Response

    )

  );

};

const refreshMock = (request: RequestApi) => {
  vi.spyOn(request, "refresh").mockReturnValue(
    of(
      {
        message: "Access token renovado",
        data: {}

      } satisfies Response

    )

  );

};

const loginMock = (request: RequestApi) => {
  vi.spyOn(request, "login").mockReturnValue(
    of(
      {
        message: "Conta acessada com sucesso",
        token: "access-token",
        data: {}

      } satisfies Response

    )

  );

};

const logoutMock = (request: RequestApi) => {
  vi.spyOn(request, "logout").mockReturnValue(
    of(
      {
        message: "Logout concluído",
        data: {}

      } satisfies Response

    )

  );

};

const changePasswordMock = (request: RequestApi) => {
  vi.spyOn(request, "changePassword").mockReturnValue(
    of(
      {
        message: "Senha alterada com sucesso",
        data: {}

      } satisfies Response

    )

  );

};

const deleteMock = (request: RequestApi) => {
  vi.spyOn(request, "delete").mockReturnValue(
    of(
      {
        message: "Conta deletada com sucesso",
        data: {}

      } satisfies Response

    )

  );

};

export {
  accessGoogleMock,
  registerMock,
  verifyCodeMock,
  refreshMock,
  loginMock,
  logoutMock,
  changePasswordMock,
  deleteMock

};
