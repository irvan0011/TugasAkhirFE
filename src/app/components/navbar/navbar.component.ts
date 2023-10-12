import { Component } from '@angular/core';
import { Collapse, Dropdown, Ripple, initTE } from 'tw-elements';

@Component({  
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  ngOnInit() {
    initTE({ Collapse, Dropdown, Ripple });
  }
}
