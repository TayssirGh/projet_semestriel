import { NgModule } from "@angular/core";
import { PaymentRoutingModule } from "./payment-routing.module";
import { PaymentComponent } from "./payment.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";





@NgModule({
    imports: [
        PaymentRoutingModule,
        CommonModule,
        FormsModule

    ],
    declarations: [ PaymentComponent],

})
export class PaymentModule { }
