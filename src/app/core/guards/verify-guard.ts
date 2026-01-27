import { inject } from '@angular/core/primitives/di';
import { CanActivateFn, Router } from '@angular/router';
import { PendingVerification } from '@core/services/pending-verification';

export const verifyGuard: CanActivateFn = () => {
  const pendingVerification = inject(PendingVerification);
  const isPendingVerification = pendingVerification.isPendingVerification();
  const router = inject(Router);

  if (!isPendingVerification) {
    return router.createUrlTree([ "" ]);

  }

  return true;
};
