import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { catchError, throwError } from 'rxjs';
import { IPost } from 'src/app/interfaces/i-post';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  post: IPost;
  public Editor = ClassicEditor;
  upload: Boolean;
  logo?: String;
  constructor(
    private http: HttpClient,
    private postService: PostService,
    private router: Router
  ) {
    this.upload = false;
    this.post = new Post();
  }
  ngOnInit(): void {
    // this.http
    //   .get(
    //     'https://manserpatrice.medium.com/?source=post_page-----69ab7fe4cb28--------------------------------',
    //     {
    //       responseType: 'blob',
    //     }
    //   )
    //   .subscribe((blob: Blob) => {
    //     const reader = new FileReader();
    //     const binaryString = reader.readAsDataURL(blob);
    //     reader.onload = (event: any) => {
    //       console.log('Image in Base64: ', event.target.result);
    //     };
    //     reader.onerror = (event: any) => {
    //       console.log('File could not be read: ' + event.target.error.code);
    //     };
    //   });
  }
  public FileImage: any;

  onFileChange(event: any) {
    this.FileImage = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.post.fotoKonten = event.target.result;
    };
    this.upload = true;
    reader.readAsDataURL(this.FileImage);
  }
  close() {
    this.upload = false;
    this.post.fotoKonten = null;
  }
  result: any;
  addPost(data: any) {
    if (data == true) {
      this.postService
        .add(this.post)
        .pipe(catchError(this.handleError))
        .subscribe((respon: any) => {
          this.result = respon;
          this.router.navigate(['']);
        });
    } else {
      console.log('error');
    }
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
