import { RaisePageRoutingModule } from './raise-page-routing.module';
import { NgModule } from '@angular/core';
import { RaisePageComponent } from './raise-page.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
      RaisePageRoutingModule,
       ReactiveFormsModule,
       CommonModule,
       FormsModule

  ],
  declarations: [ RaisePageComponent],

})
export class RaisePageModule { }
