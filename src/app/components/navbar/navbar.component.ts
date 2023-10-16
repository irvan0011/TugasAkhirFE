import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  Input,
  Renderer2,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { IPost } from 'src/app/interfaces/i-post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMobileMenuOpen: boolean = false;
  isProfileMenuOpen: boolean = false;
  currentRoute?: string;
  showButtonSimpan: Boolean;
  fixedRoutes: string[];
  includeRoutes: string[];

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router
  ) {
    this.fixedRoutes = [''];
    this.includeRoutes = ['/postadd'];
    this.currentRoute = this.router.url;
    if (this.currentRoute == '/postadd') {
      this.showButtonSimpan = true;
    } else {
      this.showButtonSimpan = false;
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      // Clicked outside the menu, so close it
      this.isMobileMenuOpen = false;
      this.isProfileMenuOpen = false;
    }
  }

  @Input() item = '';
  add: Boolean = true;
  @Output() data = new EventEmitter<Boolean>();

  addPost() {
    this.data.emit(this.add);
  }
}
