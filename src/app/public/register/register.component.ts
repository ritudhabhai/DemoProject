import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Constants
import { callAPIConstants } from '../../common/constants/callAPI-constants';
import { URLConstants } from '../../common/constants/routerLink-constants';

// Service
import { CommonService } from '../../common/services/service/common.service';
import { ShowErrorService } from '../../common/services/service/show-error.service';
import { RestrictKeyPressService } from '../../common/services/service/restrict-key-press.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
  callAPIConstants = callAPIConstants;
  URLConstants = URLConstants;

  constructor(public showErrorService: ShowErrorService, public restrictKeyPressService: RestrictKeyPressService,
    private commonService: CommonService, private router: Router) { }

  ngOnInit(): void {
  }

  /*************************************************************
  @Purpose     : Registration
  @Parameter   : form, register
  @Return      : NA
  /*************************************************************/
  register: any = {};
  submitted = false;
  showErrPassword = false;
  registeration(form, register) {
    this.submitted = true;
    if (form.valid && (register.password == register.confirmPassword)) {
      this.showErrPassword = false;
      console.log('register', register);
      this.commonService.callApi(this.callAPIConstants.Registration, register, 'post', true, false).then((success) => {
        if (success.status === 1) {
          this.showErrorService.popToast('success', success.message);
          this.router.navigate([this.URLConstants.LOGIN]);
        } else {
          this.showErrorService.popToast('error', success.message);
        }
      });
    } else {
      this.showErrPassword = true;
    }
  }
  /*************************************************************/
}
