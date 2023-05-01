import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable(
  {
    providedIn:'root'
  }
)
export class GetterService {
  private url ='http://localhost:8090/startup/getall';

  constructor(private http : HttpClient) {


  }
  getCardInfo(){
    return this.http.get(this.url);
  }
}
