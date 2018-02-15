import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PoloniexService {
  private urlPoloniex = "https://poloniex.com/public?command=returnTicker";
  constructor(private http: Http) { }
  
  getMarket():Observable<any>{
    console.log("being called");
    return this.http.get(this.urlPoloniex)
                  .map(response => response.json());
  }
  private extractData(res: Response) {
    
	  let data = res.json();
	  console.log(data);
	  
    return data || {};
  }
}