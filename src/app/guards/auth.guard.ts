import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authS = inject(AuthService);
  const router = inject(Router);
  const isUserLogged = authS.checkLogin();

  if (isUserLogged) {
    return true;
  } else {
    router.navigateByUrl('/login');
    return false;
  }
};

// export function authGuard2(route: ActivatedRouteSnapshot, stats: RouterStateSnapshot) {

// }