import { Injectable } from '@angular/core';
import { Game } from '../shared/mock-games';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  items: Game[] = [];

  constructor() { }

  addGameToLib(data: Game)  {
    this.items.push(data)
  }

  getItems() {
    return this.items;
  }

}
