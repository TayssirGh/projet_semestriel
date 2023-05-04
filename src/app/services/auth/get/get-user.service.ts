import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {
  private url = "http://localhost:8090/api/auth/id"
  constructor(private http : HttpClient) {
  }  
  getAuth(){
    return this.http.get(this.url)
  }
}
