import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { InvestComponent} from './invest.component';
@NgModule({
  imports: [
      RouterModule.forChild([
          {path : '', component :InvestComponent }
      ])],
      exports :[RouterModule]
})
export class investRoutingModule{}
