import { Component, Input, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/services/library.service';
import { Game } from '../../shared/mock-games';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() game!: Game | any;
  
  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {}

  addGameToLib(item: Game) {
    this.libraryService.addGameToLib(item);
    alert('Your game has been added to the library!')
  }
  
}
