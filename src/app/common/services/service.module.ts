import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// service
import { CommonService } from './service/common.service';
import { LocalStorageService } from './service/local-storage.service';
import { MetaDataService } from './service/meta-data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CommonService,
    LocalStorageService,
    MetaDataService
  ]
})
export class ServiceModule { }
