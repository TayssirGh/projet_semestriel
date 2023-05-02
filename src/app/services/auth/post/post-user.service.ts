import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostUserService {
  private signupUrl = "http://localhost:8090/api/auth/signup"
  private loginUrl = "http://localhost:8090/api/auth/login"

  constructor(private http : HttpClient) { }
  login(loginDto : {email : String, password: String}){
    return this.http.post(this.loginUrl, loginDto);
  }
  signup(registerDto : {username : String,email : String, password: String, status :number }){
    return this.http.post(this.signupUrl, registerDto);
  }
}
