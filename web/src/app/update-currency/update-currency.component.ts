import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

import { Currencies } from '../models/currencies.model';
import { RouterService } from '../services/router.service';
import { UpdateCurrencyService } from './update-currency.service';

@Component({
  selector: 'app-update-currency',
  templateUrl: './update-currency.component.html',
  styleUrls: ['./update-currency.component.css']
})
export class UpdateCurrencyComponent implements OnInit {

  currentValues: Currencies;
  selectedOption = 'BRL';
  updatedValue: number;

  constructor(
    private updateCurrencyService: UpdateCurrencyService,
    private routerService: RouterService,
    private loginService: LoginService,
  ) {
    this.updateCurrencyService.getCurrentValues()
      .subscribe((data) => {
        this.currentValues = data;
      });
  }

  ngOnInit(): void {
  }

  public updateCurrency(): void {

    const token = this.loginService.getUserToken();

    if (token) {
      this.updateCurrencyService.updateCurrency(token, {
        currency: this.selectedOption,
        value: this.updatedValue,
      })
        .subscribe(() => {
          this.routerService.redirectToHome();
        });
    } else {
      this.routerService.redirectToLogin();
    }
  }

  public goToHome(): void {
    this.routerService.redirectToHome();
  }
}
