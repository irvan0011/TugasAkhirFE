import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.scss']
})
export class DetailPostComponent {

  isStuck = false;
  scrollY = 0;
  isOpenSidebar: boolean = false;

  openSidebar() {
    this.isOpenSidebar = true;
  }

  dismissSidebar() {
    this.isOpenSidebar = false;
  }

  @ViewChild('element1', { static: true })
  element1!: ElementRef;
  @ViewChild('element2', { static: true })
  element2!: ElementRef;
  @ViewChild('element3', { static: true })
  element3!: ElementRef;
  @ViewChild('element4', { static: true })
  element4!: ElementRef;
  @ViewChild('element5', { static: true })
  element5!: ElementRef;
  @ViewChild('element6', { static: true })
  element6!: ElementRef;


  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.scrollY = window.scrollY;

    const element1Height = this.element1.nativeElement.clientHeight;
    const element2Height = this.element2.nativeElement.clientHeight;
    const element3Height = this.element3.nativeElement.clientHeight;
    const element4Height = this.element4.nativeElement.clientHeight;
    const element5Height = this.element5.nativeElement.clientHeight;
    const element6Height = this.element6.nativeElement.clientHeight;

    if (this.scrollY >= (element1Height+element2Height+element3Height+element4Height-element5Height-element6Height-100)) {
      this.isStuck = true;
    } else {
      this.isStuck = false;
    }
  }

  ngAfterViewInit(): void {
    const backToTopButton = document.getElementById('backToTopButton');
    
    // Show the button when the user scrolls down 20px from the top
    window.onscroll = function () {
      if (backToTopButton != null) {
        // if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        //   backToTopButton.style.display = 'block';
        // } else {
        //   backToTopButton.style.display = 'none';
        // }

        // Scroll to the top when the button is clicked
        backToTopButton.addEventListener('click', () => {
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
        });
      }
    };
  }

  scrollLeft() {
    const scrollContainer = document.getElementById('scrollContainer');
    if (scrollContainer != null) {
      scrollContainer.scrollBy({
        left: -scrollContainer.clientWidth,
        behavior: 'smooth',
      });
    }
  }

  scrollRight() {
    const scrollContainer = document.getElementById('scrollContainer');
    if (scrollContainer != null) {
      scrollContainer.scrollBy({
        left: scrollContainer.clientWidth,
        behavior: 'smooth',
      });

    }
  }
}
