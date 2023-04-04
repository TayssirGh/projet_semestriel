import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormStartupComponent } from './form-startup.component';
@NgModule({
  imports: [
      RouterModule.forChild([
          {path : '', component :FormStartupComponent }
      ])],
      exports :[RouterModule]
})
export class FormStartupRoutingModule{}
