import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/reusable/navbar/navbar.component';

import { FooterComponent } from './components/reusable/footer/footer.component';
import { GetterService } from './services/getter/getter.service';
import { PostUserService } from './services/auth/post/post-user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,



  ],
  providers: [
    GetterService, 
    PostUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
