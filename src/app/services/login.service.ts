import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogin } from '../interfaces/i-login';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IRegister } from '../interfaces/i-register';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public login(user: ILogin): Observable<ILogin> {
    const headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post<ILogin>(`${environment.baseURL}/op/v1/gt`, user, {
      headers,
    });
  }
  public register(user: IRegister): Observable<IRegister> {
    const headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post<IRegister>(
      `${environment.baseURL}/op/v1/regis`,
      user,
      {
        headers,
      }
    );
  }
}
