import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { IPost } from 'src/app/interfaces/i-post';
import { IReply } from 'src/app/interfaces/i-reply';
import { Post } from 'src/app/models/post';
import { Reply } from 'src/app/models/reply';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-reply-sidebar',
  templateUrl: './reply-sidebar.component.html',
  styleUrls: ['./reply-sidebar.component.scss'],
})
export class ReplySidebarComponent {
  @Input() isOpenSidebar: boolean = false;
  @Output() dismissSidebarFunction: EventEmitter<void> =
    new EventEmitter<void>();
  @Output() openSidebarFunction: EventEmitter<void> = new EventEmitter<void>();
  reply: IReply;
  constructor(private postService: PostService) {
    this.post = new Post();
    this.reply = new Reply();
  }
  userid: any = localStorage.getItem('userid');
  dismissSidebar() {
    this.dismissSidebarFunction.emit();
  }
  result: any;
  deleteReply(data: any) {
    if (confirm('Apakah Anda Ingin Menghapus Reply?')) {
      this.postService
        .deleteReply(data)
        .pipe(catchError(this.handleError))
        .subscribe((respon: any) => {
          this.result = respon.data.content;
        });
    }
  }
  addReply(data: any) {
    this.reply.post = data;
    console.log(this.reply);

    this.postService
      .addReply(this.reply)
      .pipe(catchError(this.handleError))
      .subscribe((respon: any) => {
        this.result = respon.data;
        this.reply = new Reply();
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

  openSidebar() {
    this.openSidebarFunction.emit();
  }
  @Input() post: IPost;
}
