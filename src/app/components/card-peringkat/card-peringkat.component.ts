import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { IPost } from 'src/app/interfaces/i-post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-card-peringkat',
  templateUrl: './card-peringkat.component.html',
  styleUrls: ['./card-peringkat.component.scss'],
})
export class CardPeringkatComponent implements OnInit {
  constructor(private postService: PostService, private router: Router) {}
  ngOnInit(): void {
    this.getPopuler(1);
  }
  rank: number = 0;
  result?: Array<IPost>;
  getPopuler(data: number) {
    this.postService
      .getPostTerpopuler(data)
      .pipe(catchError(this.handleError))
      .subscribe((respon: any) => {
        this.result = respon.data.content;
      });
  }
  @Input() item?: IPost;
  @Input() index?: any;
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
