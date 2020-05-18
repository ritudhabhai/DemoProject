import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// service
import { CommonService } from './service/common.service';
import { LocalStorageService } from './service/local-storage.service';
import { MetaDataService } from './service/meta-data.service';
import { ShowErrorService } from './service/show-error.service';
import { RestrictKeyPressService } from './service/restrict-key-press.service';
import { LogoutService } from './service/logout.service';

// TS Files
import { ErrorMessages } from './TS-files/errorMessages';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CommonService,
    LocalStorageService,
    MetaDataService,
    ShowErrorService,
    ErrorMessages,
    RestrictKeyPressService,
    LogoutService,
  ]
})
export class ServiceModule { }
