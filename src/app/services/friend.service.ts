import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Friend } from '../shared/Friend';
import { FRIENDS } from '../shared/mock-friends'
import { AllFRIENDS } from '../shared/db'


@Injectable({
  providedIn: 'root'
})
export class FriendService {

  getFriends(): Observable<Friend[]> {
    const friends = of(FRIENDS);
    return friends;
  }

  getFullListPeople(){
    const friends = of(AllFRIENDS);
    return friends;
  }
} 
