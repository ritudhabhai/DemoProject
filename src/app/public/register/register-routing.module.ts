import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Shared
import { SharedModule } from '../../shared/shared/shared.module';

// Component
import { RegisterComponent } from './register.component';


const routes: Routes = [{ path: '', component: RegisterComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [RegisterComponent]
})
export class RegisterRoutingModule { }
