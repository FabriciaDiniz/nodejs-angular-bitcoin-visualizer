import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

  constructor(
    private httpClient: HttpClient,
  ) {}

  public login(data): Observable<{ token: string}> {
    return this.httpClient.post('http://localhost:3001/api/login', data) as Observable<{ token: string}>;
  }

  public getUserToken(): string {
    return localStorage.getItem('token');
  }
}
