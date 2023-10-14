import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent {
  replyPreviews = [
    {
      name: "Christina",
      date: "12 Jan",
      comment: "Ini komen hehehe"
    },
    {
      name: "Christina",
      date: "12 Jan",
      comment: "Ini komen hehehe"
    },
    {
      name: "Christina",
      date: "12 Jan",
      comment: "Ini komen hehehe"
    },
    {
      name: "Christina",
      date: "12 Jan",
      comment: "Ini komen hehehe"
    }
  ]


  isReplyPreviewShown: boolean = false
  isReplyPreviewMax: boolean = false;
  shownReplies: number = 0

  showReplyPreview() {
    this.isReplyPreviewShown = true
    console.log("masok")
    this.shownReplies = 2;
  }

  showMoreReply() {

    this.shownReplies = this.shownReplies + 2
    if (this.shownReplies == 4) {
      this.isReplyPreviewShown = false
      this.isReplyPreviewMax = true
    }
  }


  constructor(private router: Router) {}
  
  navigateToDetailPost() {
    // Set the flag before navigating away
    this.router.navigate(['/post/1'], { queryParams: { showReplies: 'true' } });
  }
}
