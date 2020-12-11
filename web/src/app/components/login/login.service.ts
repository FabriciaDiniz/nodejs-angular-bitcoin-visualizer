import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { BACKEND_URL } from '../../../config/base-url.json';

@Injectable()
export class LoginService {

  backendUrl: string = BACKEND_URL;

  constructor(
    private httpClient: HttpClient,
  ) {}

  public login(data): Observable<{ token: string}> {
    return this.httpClient.post(`${this.backendUrl}/login`, data) as Observable<{ token: string}>;
  }

  public getUserToken(): string {
    return localStorage.getItem('token');
  }
}
