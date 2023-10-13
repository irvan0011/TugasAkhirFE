import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { ILogin } from 'src/app/interfaces/i-login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent {
  user: ILogin;
  resultLogin: any = '';
  constructor(private loginService: LoginService, private router: Router) {
    this.user = { userName: '', password: '' };
  }

  post() {
    this.loginService
      .login(this.user)
      .pipe(catchError(this.handleError))
      .subscribe((respon: any) => {
        this.resultLogin = respon;
        localStorage.setItem('token', this.resultLogin.data);
        this.router.navigate(['/postadd']);
      });
  }
  public handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
