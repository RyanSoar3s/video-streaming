import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { HandleToken } from '@core/services/handle-token';
import { PendingVerification } from '@core/services/pending-verification';

export const loginGuard: CanActivateFn = () => {
  const handleToken = inject(HandleToken);
  const router = inject(Router);
  const pendingVerification = inject(PendingVerification);

  if (pendingVerification.isPendingVerification()) {
    return router.createUrlTree([ "/verify-code" ]);

  }

  if (handleToken.getToken()) {
    return router.createUrlTree([ "/home" ]);

  }

  return true;
};
