import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Friend } from '../shared/Friend';
import { FRIENDS } from '../shared/mock-friends'
import { AllFRIENDS } from '../shared/db'


@Injectable({
  providedIn: 'root'
})
export class FriendService {
  // private apiUrl = 'http://localhost:5000/friends'
  // constructor(private http:HttpClient) { }

  getFriends(): Observable<Friend[]> {
    const friends = of(FRIENDS);
    return friends;
  }

  // getFullListPeople(){
  //   return this.http.get<Friend[]>(this.apiUrl)
  // }

  getFullListPeople(){
    const friends = of(AllFRIENDS);
    return friends;
  }

} 

