import { RaisePageRoutingModule } from './raise-page-routing.module';
import { NgModule } from '@angular/core';
import { RaisePageComponent } from './raise-page.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { formStartupModule } from '../form-startup/formStartup.module';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  imports: [
      RaisePageRoutingModule,
       ReactiveFormsModule,
       CommonModule,
       FormsModule,
       formStartupModule,
       MatButtonModule
  ],
  declarations: [ RaisePageComponent],

})
export class RaisePageModule { }
