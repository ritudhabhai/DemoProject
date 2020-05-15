import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Shared
import { SharedModule } from '../../shared/shared/shared.module';

// Component
import { LoginComponent } from './login.component';


const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [LoginComponent]
})
export class LoginRoutingModule { }
