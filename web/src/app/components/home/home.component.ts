import { Component, OnInit } from '@angular/core';

import { RatesObject } from '../../models/rates.model';
import { RouterService } from '../../services/router.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  rates: RatesObject;

  constructor(
    private homeService: HomeService,
    private routerService: RouterService,
  ) {
    this.homeService.getRates()
      .subscribe(({ bpi }) => this.rates = bpi);
  }

  ngOnInit(): void {
  }

  public redirectToForm() {
    this.routerService.redirectToForm();
  }

}
