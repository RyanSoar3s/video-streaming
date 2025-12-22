import { HttpClient } from "@angular/common/http";
import { vi } from "vitest";
import { responseError } from "@core/models/responseError.model";
import { throwError } from "rxjs";

const httpClientProfileErrorMock = (http: HttpClient) => {
  vi.spyOn(http, "get").mockReturnValue(
    throwError(() => (
      {
        error: {
          message: "Refresh token está ausente"

        }

       } satisfies responseError

    ))

  );

};

const httpClientChangeUsernameErrorMock = (http: HttpClient) => {
  vi.spyOn(http, "put").mockReturnValue(
    throwError(() => (
      {
        error: {
          message: "Usuário não encontrado"

        }

       } satisfies responseError

    ))

  );

};

export {
  httpClientProfileErrorMock,
  httpClientChangeUsernameErrorMock

};
