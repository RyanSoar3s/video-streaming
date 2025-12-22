import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { vi } from "vitest";
import { Response } from "@core/models/response.model";

const httpClientProfileMock = (http: HttpClient) => {
  vi.spyOn(http, "get").mockReturnValue(
    of(
      {
        message: "Dados acessados com sucesso",
        data:  {
          username: "user10",
          email: "test@email.com"

        }

      } satisfies Response

    )

  );

};

const httpClientChangeUsernameMock = (http: HttpClient) => {
  vi.spyOn(http, "put").mockReturnValue(
    of(
      {
        message: "Usuário alterada com sucesso",
        data: {
          username: "user11"

        }

      } satisfies Response

    )

  );

};

export {
  httpClientProfileMock,
  httpClientChangeUsernameMock

};
