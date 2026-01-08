import {
  HttpErrorResponse,
  HttpEvent,
  HttpInterceptorFn

} from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenRefreshStore } from '@core/services/token-refresh-store';
import { Observable, catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const refreshStore = inject(TokenRefreshStore);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (
        error.status !== 401 ||
        req.url.includes("/refresh")

      ) {
        return throwError(() => error)

      }

      return new Observable<HttpEvent<unknown>>((observer) => {
        refreshStore.enqueue({
          retry: (token: string) => {
            next(
              req.clone({
                setHeaders: {
                  Authorization: `Bearer ${token}`

                }

              })

            ).subscribe(observer);
          },
          
          error: (err) => observer.error(err)

        });

        refreshStore.refreshIfNeeded();

      });

    })

  );

};
