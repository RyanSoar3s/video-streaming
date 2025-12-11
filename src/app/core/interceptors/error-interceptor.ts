import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { responseError } from '@core/models/responseError.model';
import { HandleToken } from '@core/services/handle-token';
import { RequestApi } from '@core/services/request-api';
import { catchError, throwError, switchMap } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const request = inject(RequestApi);
  const handleToken = inject(HandleToken);
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status !== 401) return throwError(() => error);

      return request.refresh().pipe(
        switchMap(({ token }) => {
          const newReq = req.clone({
            setHeaders: { Authorization: `Bearer ${token}` }

          });

          return next(newReq);

        }),
        catchError((refreshError: responseError) => {
          console.error(`Error: ${refreshError.error.message}`);
          handleToken.clear();
          router.navigate([ "" ], { queryParams: { session: "expirada" } });

          return throwError(() => refreshError);

        })

      );

    })

  );

};
