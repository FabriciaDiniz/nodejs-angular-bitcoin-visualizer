import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CoinDeskResponse } from '../../models/rates.model';
import { Observable } from 'rxjs';
import { BACKEND_URL } from '../../../config/base-url.json';

@Injectable()
export class HomeService {

  backendUrl: string = BACKEND_URL;

  constructor(
    private httpClient: HttpClient,
  ) {}

  public getRates(): Observable<CoinDeskResponse> {
    return this.httpClient.get<CoinDeskResponse>(`${this.backendUrl}/crypto/btc`);
  }
}
