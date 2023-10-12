import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  bol: boolean = true;
  form() {
    if (this.bol) {
      this.bol = false;
    } else {
      this.bol = true;
    }
  }
}
