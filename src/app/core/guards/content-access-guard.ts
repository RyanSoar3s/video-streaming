import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const contentAccessGuard: CanActivateFn = () => {
  const router = inject(Router);

  const navigation = router.currentNavigation();
  const state = navigation?.extras.state ?? history.state;

  if (state?.access) return true;

  return router.createUrlTree([ "/home" ]);
  
};
