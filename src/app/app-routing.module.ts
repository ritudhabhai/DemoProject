import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Auth Guard
import { CanLoginActivate, CanAuthActivate } from './common/services/TS-files/auth.gaurd';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    canActivate: [CanLoginActivate],
    loadChildren: () => import('./public/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'register',
    canActivate: [CanLoginActivate], 
    loadChildren: () => import('./public/register/register.module').then((m) => m.RegisterModule)
  },
  { path: 'home', 
    canActivate: [CanAuthActivate],
    loadChildren: () => import('./public/home-page/home-page.module').then((m) => m.HomePageModule) 
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule],
  providers: [CanLoginActivate, CanAuthActivate]
})
export class AppRoutingModule { }
