import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ProfileInfo } from '@core/services/profile-info';

export const profileGuard: CanActivateFn = () => {
  const profileInfo = inject(ProfileInfo);
  const isEmpty = profileInfo.profileInfo().email === "";
  const router = inject(Router);

  if (isEmpty) {
    router.navigate([ "/home" ]);
    return false;

  }

  return true;
};
