import { DashboardRoutingModule} from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';




@NgModule({
  imports: [
       DashboardRoutingModule,
       CommonModule,
       HttpClientModule
  ],
  declarations: [ DashboardComponent],


})
export class DashboardModule { }
