import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { HandleToken } from '@core/services/handle-token';
import { RequestApi } from '@core/services/request-api';
import { catchError, switchMap, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const handleToken = inject(HandleToken);
  const requestApi = inject(RequestApi);
  const router = inject(Router);

  const token = handleToken.getToken();

  let authReq = req;

  if (token) {
    authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }

    });

  }

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        return requestApi.refresh().pipe(
          switchMap(() => {
            const newToken = handleToken.getToken();
            const refreshReq =  req.clone({
              setHeaders: { Authorization: `Bearer ${newToken}` }

            })
            return next(refreshReq);

          }),
          catchError((refreshError: HttpErrorResponse) => {
            handleToken.clear();
            // chamar metodo logout de requestApi
            router.navigate([ "" ], { queryParams: { session: "expirada" } });

            return throwError(() => refreshError);

          })

        )

      }

      return throwError(() => error);

    })

  );
};
