import { inject } from '@angular/core';
import { CanLoadFn, Route, UrlSegment, Router } from '@angular/router';
import { LoginDataService } from '../components/login/_services/login-data.service';

export const userGuard: CanLoadFn = (route: Route, segments: UrlSegment[]) => {
  const loginService = inject(LoginDataService);
  const router = inject(Router);

    // understanding purpose
    // const urlSegments = segments.map(segment => segment.path).join('/');
    // console.log('Attempting to load:', urlSegments);
    // console.log(route)
    // console.log(segments)

  if (loginService.getUser()) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
