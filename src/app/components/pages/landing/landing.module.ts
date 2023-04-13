import { NgModule } from "@angular/core";

import { LandingComponent } from "./landing.component";
import { LandingRoutingModule } from "./landing-routing.module";



@NgModule({
    imports: [
        LandingRoutingModule,
       
    ],
    declarations: [ LandingComponent],
    
})
export class LandingModule { }