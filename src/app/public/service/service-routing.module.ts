import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Shared
import { SharedModule } from '../../shared/shared/shared.module';

// Component
import { ServiceComponent } from './service.component';


const routes: Routes = [{ path: '', component: ServiceComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [ServiceComponent]
})
export class ServiceRoutingModule { }
