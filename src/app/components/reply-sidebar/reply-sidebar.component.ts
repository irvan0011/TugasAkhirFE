import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reply-sidebar',
  templateUrl: './reply-sidebar.component.html',
  styleUrls: ['./reply-sidebar.component.scss']
})
export class ReplySidebarComponent {
  @Input() isOpenSidebar: boolean = false;
  @Output() dismissSidebarFunction: EventEmitter<void> = new EventEmitter<void>();
  @Output() openSidebarFunction: EventEmitter<void> = new EventEmitter<void>();

  dismissSidebar() {
    this.dismissSidebarFunction.emit();
  }

  openSidebar() {
    this.openSidebarFunction.emit();
  }
}
