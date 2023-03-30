import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [RouterModule.forRoot([
    { path : 'login', loadChildren: () => import('./components/pages/login/login.module').then(m => m.LoginModule) },
  ])
],
  exports: [RouterModule]
},)
export class AppRoutingModule {}
