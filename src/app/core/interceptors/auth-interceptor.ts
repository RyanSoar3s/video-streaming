import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { HandleToken } from '@core/services/handle-token';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const noAuthEndpoints = [
    "/auth/login",
    "/auth/register",
    "/auth/verify",
    "/auth/refresh"

  ];

  if (noAuthEndpoints.some((url) => req.url.includes(url))) return next(req);

  const handleToken = inject(HandleToken);

  const token = handleToken.getToken();

  if (!token) return next(req);

  const authReq = req.clone({
    setHeaders: { Authorization: `Bearer ${token}` }

  });

  return next(authReq);

};
