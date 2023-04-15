import { NgModule } from "@angular/core";
import { InvestRoutingModule } from "./invest-routing.module";
import { InvestComponent } from "./invest.component";
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        InvestRoutingModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        FlexLayoutModule

    ],
    declarations: [ InvestComponent],
    
})
export class InvestModule { }