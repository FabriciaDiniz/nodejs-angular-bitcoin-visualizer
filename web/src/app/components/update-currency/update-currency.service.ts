import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Currencies } from '../../models/currencies.model';
import { BACKEND_URL } from '../../../config/base-url.json';
@Injectable()
export class UpdateCurrencyService {

  backendUrl: string = BACKEND_URL;

  constructor(
    private httpClient: HttpClient,
  ) {}

  public getCurrentValues(): Observable<Currencies> {
    return this.httpClient.get(`${this.backendUrl}/crypto/current`) as Observable<Currencies>;
  }

  public updateCurrency(token, loginInfo): Observable<object> {
    return this.httpClient.post(
      `${this.backendUrl}/crypto/btc`,
      loginInfo,
      { headers: { authorization: token }}
    );
  }
}
