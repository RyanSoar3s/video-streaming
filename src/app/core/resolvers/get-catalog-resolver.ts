import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { RequestApi } from '@core/services/request-api';
import { map, catchError, of } from 'rxjs';

export const getCatalogResolver: ResolveFn<boolean> = () => {
  const requestApi = inject(RequestApi);

  return requestApi.catalog().pipe(
    map(() => true),
    catchError(() => of(false))

  );

};
