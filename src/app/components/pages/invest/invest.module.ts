import { investRoutingModule } from './invest-routing.module';
import { NgModule } from '@angular/core';
import { InvestComponent } from './invest.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  imports: [
      investRoutingModule,
      BrowserModule,
      BrowserAnimationsModule,
      MatCardModule,
      MatToolbarModule,
      MatButtonModule,
      FlexLayoutModule,

  ],
  declarations: [InvestComponent],

})
export class investModule { }
