import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [RouterModule.forRoot([
    { path : 'login', loadChildren: () => import('./components/pages/login/login.module').then(m => m.LoginModule) },
    { path : 'formStartup', loadChildren: () => import('./components/pages/form-startup/formStartup.module').then(m => m.formStartupModule) },
    { path : 'raisePage', loadChildren: () => import('./components/pages/raise-page/raise-page.module').then(m => m.RaisePageModule) },
    { path : 'invest', loadChildren: () => import('./components/pages/invest/invest.module').then(m => m.InvestModule) },
    { path : '', loadChildren: () => import('./components/pages/landing/landing.module').then(m => m.LandingModule) },
    { path : 'dashboard', loadChildren: () => import('./components/pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  ])
],
  exports: [RouterModule]
},)
export class AppRoutingModule {}
