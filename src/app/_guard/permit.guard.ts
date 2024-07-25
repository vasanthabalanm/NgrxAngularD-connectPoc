import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginDataService } from '../components/login/_services/login-data.service';

export const permitGuard: CanActivateFn = (route, state) => {
  let adminser = inject(LoginDataService);
  let router = inject(Router)

  if (adminser.isLogin()) {
    return true;
  }
  else {
    router.navigate(['login']);
    return false;
  }
};