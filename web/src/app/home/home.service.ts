import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { CoinDeskResponse } from '../models/rates.model';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {

  backendUrl = 'http://localhost:3001/api/crypto/btc';

  constructor(
    private httpClient: HttpClient,
  ) {}

  public getRates(): Observable<CoinDeskResponse> {
    return this.httpClient.get(this.backendUrl) as Observable<CoinDeskResponse>;
  }
}
