import { Component } from '@angular/core';
import { PoloniexService } from './poloniex.service';

@Component({
  selector: 'poloniex-content',
  templateUrl: './poloniex.component.html',
  styleUrls: ['./poloniex.component.css']
})

export class PoloniexComponent {
  markets = [];
  // constructor(private poloniexService: PoloniexService) { }
  

  // loadMakert() {
  //   this.poloniexService.getMarket().subscribe(data => this.markets = data);
  // }
}
