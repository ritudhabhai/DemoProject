import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Auth Guard
import { CanLoginActivate, CanAuthActivate } from './common/services/TS-files/auth.gaurd';

const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path: 'home-page', loadChildren: () => import('./public/home-page/home-page.module').then((m) => m.HomePageModule) },
  { path: 'about', loadChildren: () => import('./public/about/about.module').then((m) => m.AboutModule) },
  { path: 'contact', loadChildren: () => import('./public/contact/contact.module').then((m) => m.ContactModule) },
  { path: 'service', loadChildren: () => import('./public/service/service.module').then((m) => m.ServiceModule) },
  {
    path: 'login',
    canActivate: [CanLoginActivate], loadChildren: () => import('./public/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'register',
    canActivate: [CanLoginActivate], loadChildren: () => import('./public/register/register.module').then((m) => m.RegisterModule)
  },
  { path: '**', redirectTo: 'home-page' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule],
  providers: [CanLoginActivate, CanAuthActivate]
})
export class AppRoutingModule { }
