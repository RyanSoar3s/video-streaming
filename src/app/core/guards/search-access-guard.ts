import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const searchAccessGuard: CanActivateFn = () => {
  const router = inject(Router);

  const navigation = router.currentNavigation();
  const state = navigation?.extras.state ?? history.state;

  if (state?.fromSearch) return true;
  
  return router.createUrlTree([ "/home" ]);

};
