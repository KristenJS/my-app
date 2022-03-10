import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { LibraryService } from 'src/app/services/library.service';
import { Game } from '../../shared/mock-games';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  searchQuery2 = '';
  games: Game[] = [];
  isDefaultGamesVisible = true;
  // gamesId: any[] = [];

  priceQuery: string = '';
  filteredGames: Game[] = [];

  constructor(private gameService: GamesService, private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.gameService.getGames()
      .subscribe((data) => {
        this.games = data;
      });

    // this.gameService.getGamesId()
    //   .subscribe(data => {
    //     this.gamesId = data;
    //   });
  }

  addGameToLib(item: Game) {
    this.libraryService.addGameToLib(item);
    alert('Your game has been added to the library!')
  }

  searchGame(e: any, query: string) {
    e.preventDefault()
    this.searchQuery2 = query;
    this.isDefaultGamesVisible = !query; //false
  }

  onPriceFilter(filter: any) {
    const { value } = filter.target
    this.isDefaultGamesVisible = !value; //false
    this.searchQuery2 = '';
    this.filteredGames = this.games.filter(el => el.price <= value)
  }

}