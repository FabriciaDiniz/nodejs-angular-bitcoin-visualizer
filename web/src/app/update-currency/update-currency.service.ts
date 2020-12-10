import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Currencies } from '../models/currencies.model';

@Injectable()
export class UpdateCurrencyService {

  backendBaseUrl = 'http://localhost:3001/api/crypto/current';
  updateUrl = 'http://localhost:3001/api/crypto/btc';

  constructor(
    private httpClient: HttpClient,
  ) {}

  public getCurrentValues(): Observable<Currencies> {
    return this.httpClient.get(this.backendBaseUrl) as Observable<Currencies>;
  }

  public updateCurrency(token, loginInfo): Observable<object> {
    return this.httpClient.post(
      this.updateUrl,
      loginInfo,
      { headers: { authorization: token }}
    );
  }
}
