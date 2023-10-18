import { NgIf } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { catchError, throwError } from 'rxjs';
import { IPost } from 'src/app/interfaces/i-post';
import { IReply } from 'src/app/interfaces/i-reply';
import { Post } from 'src/app/models/post';
import { Reply } from 'src/app/models/reply';
import { Vote } from 'src/app/models/vote';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss'],
})
export class CardPostComponent implements OnInit {
  userId?: number = parseInt(localStorage.getItem('userid') || '0');
  vote: any;
  post: IPost;
  reply: IReply;
  constructor(
    private router: Router,
    private postService: PostService,
    private route: ActivatedRoute
  ) {
    this.post = new Post();
    this.vote = new Vote();
    this.reply = new Reply();
  }
  replyPreviews = [
    {
      name: 'Christina',
      date: '12 Jan',
      comment: 'Ini komen hehehe',
    },
    {
      name: 'Christina',
      date: '12 Jan',
      comment: 'Ini komen hehehe',
    },
    {
      name: 'Christina',
      date: '12 Jan',
      comment: 'Ini komen hehehe',
    },
    {
      name: 'Christina',
      date: '12 Jan',
      comment: 'Ini komen hehehe',
    },
  ];

  id: any = this.route.snapshot.url;
  ngOnInit(): void {
    console.log(this.id);

    if (this.id == 'leaderboard') {
      this.getPostTerpopuler(1);
    } else {
      this.getPostTerbaru(1);
    }
  }

  isReplyPreviewShown: boolean = false;
  isReplyPreviewMax: boolean = false;
  shownReplies: number = 0;

  showReplyPreview() {
    this.isReplyPreviewShown = true;
    console.log('masok');
    this.shownReplies = 2;
  }

  showMoreReply() {
    this.shownReplies = this.shownReplies + 2;
    if (this.shownReplies == 4) {
      this.isReplyPreviewShown = false;
      this.isReplyPreviewMax = true;
    }
  }

  navigateToDetailPost(data: any) {
    // Set the flag before navigating away
    this.router.navigate([`/post/${data}`], {
      queryParams: { showReplies: 'true' },
    });
  }
  detail(data: any) {
    // Set the flag before navigating away
    this.router.navigate([`/post/${data}`]);
  }

  result?: Array<IPost>;
  ress: any;
  getPostTerbaru(data: number) {
    this.postService
      .getPostTerbaru(data)
      .pipe(catchError(this.handleError))
      .subscribe((respon: any) => {
        this.result = respon.data.content;
      });
  }
  getPostTerpopuler(data: number) {
    this.postService
      .getPostTerpopuler(data)
      .pipe(catchError(this.handleError))
      .subscribe((respon: any) => {
        this.result = respon.data.content;
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

  voteResult: any;
  isvote(data: any) {
    this.vote.post.idPost = data;
    this.vote.user.idUser = localStorage.getItem('userid');
    this.postService
      .vote(this.vote)
      .pipe(catchError(this.handleError))
      .subscribe((respon: any) => {
        this.voteResult = respon;
        if (this.id == 'leaderboard') {
          this.getPostTerpopuler(1);
        } else {
          this.getPostTerbaru(1);
        }
      });
  }

  voting(data: any) {
    this.vote.post.idPost = data;
    this.vote.user.idUser = localStorage.getItem('userid');
    this.postService
      .isvote(this.vote)
      .pipe(catchError(this.handleError))
      .subscribe((respon: any) => {
        this.voteResult = respon.data.isVote;
      });
    return this.voteResult;
  }

  addReply(data: any) {
    this.reply.post = data;
    console.log(this.reply);
    this.postService
      .addReply(this.reply)
      .pipe(catchError(this.handleError))
      .subscribe((respon: any) => {
        this.ress = respon.data;
        this.getPostTerbaru(1);
        this.reply = new Reply();
      });
  }
  deletePost(data: any) {
    if (confirm('Hapus Postingan')) {
      this.postService
        .delete(data)
        .pipe(catchError(this.handleError))
        .subscribe((respon: any) => {
          this.ress = respon.data;
          this.getPostTerbaru(1);
        });
    } else {
    }
  }
  hideDesk(data: any) {
    return data.substr(0, 200);
  }
}
