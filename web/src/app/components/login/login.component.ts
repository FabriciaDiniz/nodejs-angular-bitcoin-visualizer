import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  public send(): void {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    this.loginService.login({ email, password })
      .subscribe(({ token }) => {
        localStorage.setItem('token', token);
        this.routerService.redirectToHome();
      });
  }

}
