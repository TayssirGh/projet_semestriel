import { FormStartupRoutingModule } from './form-routing.module';
import { NgModule } from '@angular/core';
import { FormStartupComponent } from './form-startup.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';




@NgModule({
  imports: [
      FormStartupRoutingModule,
       ReactiveFormsModule,
       CommonModule,
       FormsModule,
       HttpClientModule


  ],
  declarations: [ FormStartupComponent],


})
export class formStartupModule { }
