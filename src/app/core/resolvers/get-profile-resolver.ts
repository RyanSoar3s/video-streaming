import { inject } from '@angular/core/primitives/di';
import { ResolveFn } from '@angular/router';
import { RequestApi } from '@core/services/request-api';
import { catchError, map, of } from 'rxjs';

export const getProfileResolver: ResolveFn<boolean> = () => {
  const requestApi = inject(RequestApi);

  return requestApi.profile().pipe(
    map(() => true),
    catchError(() => of(false))

  );

};
