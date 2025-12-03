import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { HandleToken } from '@core/services/handle-token';

export const authGuard: CanActivateFn = () => {
  const handleToken = inject(HandleToken);
  const router = inject(Router);

  if (!handleToken.getToken()) {
    router.navigate([ "" ]);
    return false;

  }

  return true;

};
