import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { IPost } from 'src/app/interfaces/i-post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent implements OnInit {
  constructor(private postService: PostService, private router: Router) {}
  ngOnInit(): void {
    this.getPopuler(1);
  }
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
