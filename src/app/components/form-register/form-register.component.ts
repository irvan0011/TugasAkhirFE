import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { ILogin } from 'src/app/interfaces/i-login';
import { IRegister } from 'src/app/interfaces/i-register';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss'],
})
export class FormRegisterComponent {
  user: IRegister;
  resultLogin: any = '';
  constructor(private loginService: LoginService, private router: Router) {
    this.user = {
      userName: '',
      password: '',
      nama: '',
      jenisKelamin: '',
      email: '',
    };
  }

  post() {
    this.loginService
      .register(this.user)
      .pipe(catchError(this.handleError))
      .subscribe((respon: any) => {
        this.resultLogin = respon;
        this.router.navigate(['']);
        alert('regis');
        // this.router.navigate(['#']);
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
