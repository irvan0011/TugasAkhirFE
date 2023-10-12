import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  bol: boolean = true;
  ngOnInit(): void {
    this.bol = true;
  }
  form() {
    if (this.bol) {
      this.bol = false;
    } else {
      this.bol = true;
    }
  }
}
