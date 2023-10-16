import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { IPost } from 'src/app/interfaces/i-post';
import { IVote } from 'src/app/interfaces/i-vote';
import { Post } from 'src/app/models/post';
import { Reply } from 'src/app/models/reply';
import { Vote } from 'src/app/models/vote';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.scss'],
})
export class DetailPostComponent implements OnInit {
  isStuck = false;
  scrollY = 0;
  isOpenSidebar: boolean = false;
  vote: IVote;
  id: Number = Number(this.route.snapshot.params['id']);
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) {
    this.vote = new Vote();
    this.result = new Post();
    this.result.listReply = new Array<Reply>();
  }

  ngOnInit() {
    // console.log(Number(this.route.snapshot.params['id']));
    this.getById();

    // Access the query parameter from the route
    this.route.queryParams.subscribe((params) => {
      if (params['showReplies'] === 'true') {
        // Button was clicked in the previous page
        // Set isOpenSidebar to true
        this.isOpenSidebar = true;
      }
    });
  }
  openSidebar() {
    this.isOpenSidebar = true;

    this.router.navigate([], {
      queryParams: {
        showReplies: 'true',
      },
      queryParamsHandling: 'merge',
    });
  }

  dismissSidebar() {
    this.isOpenSidebar = false;

    this.router.navigate([], {
      queryParams: {
        showReplies: null,
      },
      queryParamsHandling: 'merge',
    });
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

    if (
      this.scrollY >=
      element1Height +
        element2Height +
        element3Height +
        element4Height -
        element5Height -
        element6Height -
        100
    ) {
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

  voteResult: any;
  isvote() {
    this.vote!.post!.idPost = this.id;
    console.log(this.vote);
    this.postService
      .vote(this.vote)
      .pipe(catchError(this.handleError))
      .subscribe((respon: any) => {
        this.voteResult = respon;
        this.getById();
      });
  }
  result: IPost;
  getById() {
    this.postService
      .getById(this.id)
      .pipe(catchError(this.handleError))
      .subscribe((respon: any) => {
        this.result = respon.data;
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
}
