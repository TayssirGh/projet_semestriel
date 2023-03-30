import { NgModule } from "@angular/core";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { CommonModule } from "@angular/common";
@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
    ],
    declarations: [ LoginComponent],
    
})
export class LoginModule { }