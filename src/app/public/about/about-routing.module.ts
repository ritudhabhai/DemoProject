import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Shared
import { SharedModule } from '../../shared/shared/shared.module';

// Component
import { AboutComponent } from './about.component';


const routes: Routes = [{ path: '', component: AboutComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [AboutComponent]
})
export class AboutRoutingModule { }
