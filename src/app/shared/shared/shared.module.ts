import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  entryComponents: [],
})
export class SharedModule { }
