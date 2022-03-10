import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.scss']
})
export class FilterbarComponent implements OnInit {

  priceFilter = '';

  constructor() { }

  ngOnInit(): void {}

  filterPrice(price:string) {
    this.priceFilter = price;
  }

}
