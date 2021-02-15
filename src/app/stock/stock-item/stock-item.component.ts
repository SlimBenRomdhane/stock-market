import { Stock } from './../../model/stock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {

  
  public stock!: Stock;
  public stockClasses :any;

  constructor() {}

  ngOnInit() {
    
    this.stock = new Stock('Test Stock Market', 'TSC',100,90);
    let diff = (this.stock.price / this.stock.previousPrice) - 1;
    let largeChange = Math.abs(diff) > 0.01;
    this.stockClasses = {
      "positive": this.stock.isPositiveChange(),
      "negative": !this.stock.isPositiveChange(),
      "large-change": largeChange,
      "small-change": !largeChange
    };

  }
  toggleFavorite(event: any){
    console.log('We are toggling the favorite state for this stock',event);
    this.stock.favorite= !this.stock.favorite;
  }

}
