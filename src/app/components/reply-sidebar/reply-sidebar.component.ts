import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPost } from 'src/app/interfaces/i-post';
import { IReply } from 'src/app/interfaces/i-reply';
import { Post } from 'src/app/models/post';
import { Reply } from 'src/app/models/reply';

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
  constructor() {
    this.post = new Post();
  }
  dismissSidebar() {
    this.dismissSidebarFunction.emit();
  }

  openSidebar() {
    this.openSidebarFunction.emit();
  }
  @Input() post: IPost;
}
