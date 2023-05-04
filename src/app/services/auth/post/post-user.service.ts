  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable, map } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class PostUserService {
    private signupUrl = "http://localhost:8090/api/auth/signup"
    private loginUrl = "http://localhost:8090/api/auth/login"
    private logoutUrl = "http://localhost:8090/api/auth/logout"

    constructor(private http : HttpClient) { }
    login(email: string, password: string): Observable<boolean> {
      return this.http.post<string>(
        this.loginUrl,
        { email, password },
        { responseType: 'text' as 'json' } 
      ).pipe(
        map(response => {
          if (response === 'username is taken .') {
            throw new Error('Please register first.');
          } else if (response === 'Welcome back !') {
            localStorage.setItem('email', email);
            return true;
          } else if (response === 'Please verify your password') {
            throw new Error('Please verify your password.');
          } else {
            throw new Error('An error occurred.');
          }
        })
      );
    }
    signup(username: string, email: string, password: string, status: String): Observable<boolean> {
      return this.http.post<string>(
        this.signupUrl,
        { username, email, password, status },
        { responseType: 'text' as 'json' } 
      ).pipe(
          map(response => {
            if (response === 'username is taken .') {
              throw new Error('username is taken .');
            } else if (response === 'Congrats you are now registered !') {
              return true;
            } else if (response === 'you already have an account') {
              throw new Error('you already have an account');
            } else {
              throw new Error('An error occurred.');
            }
          })
      );
    }
    logout(): Observable<string> {
      return this.http.post<string>(this.logoutUrl, {});
    }
    
  }
