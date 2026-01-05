import { Routes } from '@angular/router';
import { authGuard } from '@core/guards/auth-guard';
import { loginGuard } from '@core/guards/login-guard';
import { profileGuard } from '@core/guards/profile-guard';
import { verifyGuard } from '@core/guards/verify-guard';
import { getCatalogResolver } from '@core/resolvers/get-catalog-resolver';
import { getProfileResolver } from '@core/resolvers/get-profile-resolver';
import { Login } from '@features/pages/auth/login/login';
import { VerifyCode } from '@features/pages/auth/verify-code/verify-code';
import { Catalog } from '@features/pages/catalog/catalog';
import { Profile } from '@features/pages/home/profile/profile';

export const routes: Routes = [
  {
    path: "",
    canActivate: [ loginGuard ],
    component: Login

  },
  {
    path: "verify-code",
    canActivate: [ verifyGuard ],
    component: VerifyCode

  },
  {
    path: "home",
    canActivate: [ authGuard ],
    resolve: {
      catalog: getCatalogResolver,
      profile: getProfileResolver

    },
    loadComponent: () => import("@features/pages/home/home").then(m => m.Home),
    children: [
      {
        path: "profile",
        canActivate: [ profileGuard ],
        component: Profile

      },
      {
        path: "catalog",
        component: Catalog

      }
    ]

  }

];
