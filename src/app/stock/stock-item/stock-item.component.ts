import { Stock } from './../../model/stock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {

  
  public stock!: Stock;
  //public stockClasses :any;
  public stockStyles :any;

  constructor() {}

  ngOnInit() {
    
    this.stock = new Stock('Test Stock Market', 'TSC',91,90);
    let diff = (this.stock.price / this.stock.previousPrice) - 1;
    let largeChange = Math.abs(diff) > 0.01;
    //ngClass
    // this.stockClasses = {
    //   "positive": this.stock.isPositiveChange(),
    //   "negative": !this.stock.isPositiveChange(),
    //   "large-change": largeChange,
    //   "small-change": !largeChange
    // };

    //ngStyle
    this.stockStyles = {
      "color": this.stock.isPositiveChange() ? "green" : "red",
      "font-size": largeChange ? "1.2em" : "0.8em"
    };

  }
  toggleFavorite(event: any){
    console.log('We are toggling the favorite state for this stock',event);
    this.stock.favorite= !this.stock.favorite;
  }

}
