import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Shared
import { SharedModule } from '../../shared/shared/shared.module';

// Component
import { HomePageComponent } from './home-page.component';

const routes: Routes = [{ path: '', component: HomePageComponent }];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [HomePageComponent]
})
export class HomePageRoutingModule { }
