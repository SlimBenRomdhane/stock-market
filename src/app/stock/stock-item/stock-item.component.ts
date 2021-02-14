import { Stock } from './../../model/stock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {

  
  public stock!: Stock;

  constructor() {}

  ngOnInit() {
    
    this.stock = new Stock('Test Stock Market', 'TSC',88,90);

  }
  toggleFavorite(event: any){
    console.log('We are toggling the favorite state for this stock',event);
    this.stock.favorite= !this.stock.favorite;
  }

}
