import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoinDeskResponse } from '../models/rates.model';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {

  url = 'http://localhost:3001/api/crypto/btc';

  constructor(
    private httpClient: HttpClient,
  ) {}

  public getRates(): Observable<CoinDeskResponse> {
    return this.httpClient.get(this.url) as Observable<CoinDeskResponse>;
  }
}
