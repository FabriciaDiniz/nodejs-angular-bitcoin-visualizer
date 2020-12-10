import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RouterService {

  formUrl = 'atualizar';
  loginUrl = 'login';

  constructor(
    private router: Router,
  ) {}

  public redirectToHome(): void {
    this.router.navigate(['']);
  }

  public redirectToForm(): void {
    this.router.navigate([this.formUrl]);
  }

  public redirectToLogin(): void {
    this.router.navigate([this.loginUrl]);
  }
}
