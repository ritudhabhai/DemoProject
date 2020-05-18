import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Shared
import { SharedModule } from '../../shared/shared/shared.module';

// Component
import { LoginComponent } from './login.component';


const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [LoginComponent]
})
export class LoginRoutingModule { }
