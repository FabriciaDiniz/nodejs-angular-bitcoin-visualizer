import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { RouterService } from '../../services/router.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private routerService: RouterService,
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [ Validators.required, Validators.pattern(/^\d{6}$/)]),
    });
  }

  public send(): void {
    const email = this.email.value;
    const password = this.password.value;

    this.loginService.login({ email, password })
      .subscribe(({ token }) => {
        localStorage.setItem('token', token);
        this.routerService.redirectToHome();
      });
  }

  get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  get showErrors(): boolean {
    return this.loginForm.invalid && this.loginForm.touched;
  }

  get emailTouchedAndInvalid(): boolean {
    return this.email.invalid && this.email.touched;
  }

  get passwordTouchedAndInvalid(): boolean {
    return this.password.invalid && this.password.touched;
  }
}
