import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  { path: 'home-page', loadChildren: () => import('./public/home-page/home-page.module').then((m) => m.HomePageModule) },
  { path: 'about', loadChildren: () => import('./public/about/about.module').then((m) => m.AboutModule) },
  { path: 'contact', loadChildren: () => import('./public/contact/contact.module').then((m) => m.ContactModule) },
  { path: 'service', loadChildren: () => import('./public/service/service.module').then((m) => m.ServiceModule) },
  { path: '**', redirectTo: 'home-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
