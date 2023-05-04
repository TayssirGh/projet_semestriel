import { NgModule } from "@angular/core";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        LoginRoutingModule,
        MatSelectModule,
        MatIconModule,
        ReactiveFormsModule,
        CommonModule,
    ],
    
    declarations: [ LoginComponent],
    
})
export class LoginModule { }