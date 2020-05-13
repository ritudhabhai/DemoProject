import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Shared
import { SharedModule } from '../../shared/shared/shared.module';

// Component
import { ContactComponent } from './contact.component';


const routes: Routes = [{ path: '', component: ContactComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [ContactComponent]
})
export class ContactRoutingModule { }
