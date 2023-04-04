import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { RaisePageComponent } from './raise-page.component';
@NgModule({
  imports: [
      RouterModule.forChild([
          {path : '', component :RaisePageComponent }
      ])],
      exports :[RouterModule]
})
export class RaisePageRoutingModule{}
