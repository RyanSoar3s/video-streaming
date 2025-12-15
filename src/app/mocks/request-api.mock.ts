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

export {
  accessGoogleMock,
  registerMock,
  loginMock

};
