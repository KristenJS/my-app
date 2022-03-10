import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  items = this.libraryService.getItems();

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {}

}
