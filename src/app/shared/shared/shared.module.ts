import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Plugins
import { OwlModule } from 'ngx-owl-carousel';

// Component
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    OwlModule
  ],
  exports: [
    // Modules
    FormsModule,
    OwlModule,

    // Components
    HeaderComponent,
    FooterComponent,
  ],
  entryComponents: [],
})
export class SharedModule { }
