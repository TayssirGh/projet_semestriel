import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class CreateService {

  private url ='http://localhost:8090/startup/create';

  constructor(private http : HttpClient) {


  }
  createStartup(startup : { name: String ,description :String ,industry:String, imageUrl:String}) {
    return this.http.post(this.url,startup);
  }
}
