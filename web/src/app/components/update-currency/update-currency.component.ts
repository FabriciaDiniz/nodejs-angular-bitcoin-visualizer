import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

import { Currencies } from '../../models/currencies.model';
import { RouterService } from '../../services/router.service';
import { UpdateCurrencyService } from './update-currency.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-currency',
  templateUrl: './update-currency.component.html',
  styleUrls: ['./update-currency.component.css']
})
export class UpdateCurrencyComponent implements OnInit {

  currentValues: Currencies;
  updateForm: FormGroup;

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
    this.updateForm = new FormGroup({
      currency: new FormControl('BRL'),
      updatedValue: new FormControl()
    });
  }

  public updateCurrency(): void {

    const token = this.loginService.getUserToken();
    const currency = this.updateForm.get('currency').value;
    const value = this.updateForm.get('updatedValue').value;

    if (token) {
      this.updateCurrencyService.updateCurrency(token, {
        currency, value
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

  public getFormCurrencyValue(): string {
    return this.updateForm.get('currency').value;
  }

  public getFormUpdatedValueValue(): string {
    return this.updateForm.get('updatedValue').value;
  }
}
