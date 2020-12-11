import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { RouterService } from '../services/router.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private routerService: RouterService) {}

  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }

    this.routerService.redirectToLogin();
    return false;
  }
}
