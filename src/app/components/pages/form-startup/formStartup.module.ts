import { FormStartupRoutingModule } from './form-routing.module';
import { NgModule } from '@angular/core';
import { FormStartupComponent } from './form-startup.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
      FormStartupRoutingModule,
       ReactiveFormsModule,
       CommonModule,
       FormsModule

  ],
  declarations: [ FormStartupComponent],

})
export class formStartupModule { }
