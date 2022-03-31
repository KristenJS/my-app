import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { Game, GAMES} from '../shared/mock-games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  getGames(): Observable<Game[]> {
    const games = of(GAMES);
    return games;
  }

}
