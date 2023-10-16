import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IPost } from 'src/app/interfaces/i-post';

@Component({
  selector: 'app-card-preview-post',
  templateUrl: './card-preview-post.component.html',
  styleUrls: ['./card-preview-post.component.scss'],
})
export class CardPreviewPostComponent {
  constructor(private router: Router) {}
  @Input() item?: IPost;
  sub(data: any) {
    return data.substr(0, 60);
  }
  navigateToDetailPost(data: any) {
    // Set the flag before navigating away
    this.router.navigate([`/post/${data}`]);
  }
}
