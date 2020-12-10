import { Component, OnInit } from '@angular/core';
import { RatesObject } from '../models/rates.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  rates: RatesObject;

  constructor(
    private homeService: HomeService,
  ) {
    this.homeService.getRates()
      .subscribe(({ bpi }) => this.rates = bpi);
  }

  ngOnInit(): void {
  }

}
