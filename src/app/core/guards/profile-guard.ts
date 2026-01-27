import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { ProfileInfo } from '@core/services/profile-info';

export const profileGuard: CanActivateChildFn = () => {
  const profileInfo = inject(ProfileInfo);
  const isEmpty = profileInfo.profileInfo().email === "";
  const router = inject(Router);

  if (isEmpty) {
    return router.createUrlTree([ "/home" ]);

  }

  return true;
};
