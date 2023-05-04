import { NgModule } from "@angular/core";
import { InvestRoutingModule } from "./invest-routing.module";
import { InvestComponent } from "./invest.component";
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import { HttpClientModule } from "@angular/common/http";
import {MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        InvestRoutingModule,
        FlexLayoutModule,
        MatGridListModule,
        MatChipsModule,
        HttpClientModule,
        CommonModule,
        MatDialogModule


    ],
    declarations: [ InvestComponent],

})
export class InvestModule { }
