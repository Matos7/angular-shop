import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  public products:Product[];
  
  constructor(public http: HttpClient) {
  }

  public getproductsFromDB(): Observable<any> {
    return this.http.get('./assets/json/data.json');
  }
}
