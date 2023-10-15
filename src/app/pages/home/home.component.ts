import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  isStuck = false;
  scrollY = 0;



  
  @ViewChild('sideBar', { static: true })
  sideBar!: ElementRef;

  
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.scrollY = window.scrollY;

    const element1Height = this.sideBar.nativeElement.clientHeight;

    if (this.scrollY >= (element1Height+100)) {
      this.isStuck = true;
    } else {
      this.isStuck = false;
    }
  }

}
