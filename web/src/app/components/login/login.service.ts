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
    return this.httpClient.post<{ token: string}>(`${this.backendUrl}/login`, data);
  }

  public getUserToken(): string {
    return localStorage.getItem('token');
  }
}
