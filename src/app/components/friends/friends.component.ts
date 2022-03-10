import { Component, OnInit } from '@angular/core';
import { FriendService } from '../../services/friend.service';
import { Friend } from '../../shared/Friend';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  searchQuery = '';
  myFriends: Friend[] = [];
  allPeople: Friend[] = [];
  allPeopleId: Number[] = [];

  constructor(private friendService: FriendService) { }

  ngOnInit(): void {
    this.searchQuery = '';

    this.friendService.getFriends().subscribe((data) => {
      this.myFriends = data;
    });

    this.friendService.getFullListPeople().subscribe((persons) => {
      this.allPeople = persons as Friend[];
      this.allPeopleId = this.myFriends.map((el: Friend) => el.id)
    });
  }

  searchFriend(e: any, query: string) {
    e.preventDefault()
    this.searchQuery = query;
  }

  addFriend(person: Friend, input: any) {
    const isUserExist = this.myFriends.find(el => el.id === person.id)
    if (isUserExist) {
      alert('User is already exist!')
      this.clearQuery()
    }
    if (!isUserExist) {
      this.myFriends.push(person);
      this.clearQuery()
    }
    input.value = ''
  }

  clearQuery() {
    this.searchQuery = '';
  }

  removeFriend(friend: Friend) {
    this.myFriends = this.myFriends.filter((f) => f.id !== friend.id)
  }
}
