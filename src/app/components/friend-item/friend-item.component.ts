import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Friend } from '../../shared/Friend';

@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrls: ['./friend-item.component.scss']
})
export class FriendItemComponent implements OnInit {
  @Input() friend!: Friend;
  @Output() onRemoveFriend: EventEmitter<Friend> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {}

  onRemove(friend: Friend) {
    this.onRemoveFriend.emit(friend);
  }
}
