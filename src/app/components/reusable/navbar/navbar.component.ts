import { Component } from '@angular/core';
import { GetUserService } from 'src/app/services/auth/get/get-user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [GetUserService]
})
export class NavbarComponent {
  private isAuthenticated: boolean;
  constructor(private getUserService : GetUserService){}
  checkAuth(){
    return this.getUserService.getAuth().subscribe(
      (response) => {
        console.log(response);
        this.isAuthenticated = response[0].auth;
        console.log(this.isAuthenticated)
      },
      
    );
  }
  test():boolean{
    return this.isAuthenticated
  }
  getisAuthenticated(){
    return this.isAuthenticated
  }

}
