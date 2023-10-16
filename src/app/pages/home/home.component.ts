import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { IPost } from 'src/app/interfaces/i-post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isStuck = false;
  scrollY = 0;
  constructor(private postService: PostService, private router: Router) {
    this.cek = false;
  }

  // @ViewChild('sideBar', { static: true })
  // sideBar!: ElementRef;

  // @HostListener('window:scroll', ['$event'])
  ngOnInit(): void {
    this.getPopuler(1);
  }
  // onScroll(event: Event) {
  //   this.scrollY = window.scrollY;

  //   const element1Height = this.sideBar.nativeElement.clientHeight;
  //   if (this.scrollY >= element1Height + 100) {
  //     this.isStuck = true;
  //   } else {
  //     this.isStuck = false;
  //   }
  // }
  cek: Boolean;

  upp(data: number) {
    if (this.cek) {
      this.rank = data + 1;
      return this.rank;
    }
    this.cek = false;
    return this.cek;
  }
  rank: number = 0;
  result?: Array<IPost>;
  getPopuler(data: number) {
    this.postService
      .getPostTerpopuler(data)
      .pipe(catchError(this.handleError))
      .subscribe((respon: any) => {
        this.result = respon.data.content;

        console.log(this.result);
      });
  }
  navigateToDetailPost(data: any) {
    // Set the flag before navigating away
    this.router.navigate([`/post/${data}`]);
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
function value(value: IPost, index: number, array: IPost[]): void {
  throw new Error('Function not implemented.');
}
