import { NgModule } from "@angular/core";
import { InvestRoutingModule } from "./invest-routing.module";
import { InvestComponent } from "./invest.component";
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import { HttpClientModule } from "@angular/common/http";
import {MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        InvestRoutingModule,
        FlexLayoutModule,
        MatGridListModule,
        MatChipsModule,
        HttpClientModule,
        CommonModule,
        MatDialogModule,
        FormsModule


    ],
    declarations: [ InvestComponent],

})
export class InvestModule { }
